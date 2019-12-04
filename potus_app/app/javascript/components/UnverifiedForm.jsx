import React from 'react'
import $ from 'jquery';

import SuccessfulSubmit from './SuccessfulSubmit';

class UnverifiedForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            words: [],
            email: "",
            wordInput:"",
            response: null,
            successfulSubmit: false,
            errors: {
                wordsErr: "",
                emailErr: "",
                wordInputErr:"",
                submitErr:""
            }
        };

        this.submitForm = this.submitForm.bind(this);
        this.update = this.update.bind(this);
        this.addWord = this.addWord.bind(this);
        this.removeWord = this.removeWord.bind(this);
    }

    showModal(){
        $('#myModal').modal('show'); 
    }

    submitForm(event){
        event.preventDefault();
        const {email, words} = this.state;

        if (email == ""){
            this.setState({submitErr: "you must first enter an email!"});
            return null;
        } else if (!words.length){
            //clear submit error as email must now be entered to make it this far...
            this.setState( {wordsErr: "You must first monitor at least one word", submitErr: ""} );
            return null;
        }

        const url = "/api/v1/unverified_alerts";
        const body = { email, words };
        const token = document.querySelector('meta[name="csrf-token"]').content;

        /*
        * addWord, and above verifications have ensured data is properly formatted
        * the below fetch hits database with an unverified alert. if request is made externally, 
        * and is wrongly formatted, throws a "network response was not ok error"
        */

        fetch(url, {
            method: "POST",
            headers: {
              "X-CSRF-Token": token,
              "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(response => {
              if (response.ok) {
                return response.json();
              }
              throw new Error("Network response was not ok.");
        }).then(response => this.setState( {response: response,
                successfulSubmit: true,
                email:"",
                words:[] })
        ).then( response => {this.showModal()}
        ).catch(error => this.setState({submitErr: error, response: response}));
            
        return null;
    }

      
    addWord(event){
        event.preventDefault();

        const wordInput = this.state.wordInput;
        //only taking the first word from the input using whitespace look-behind
        const word =  /(?<=^[\s"']*)(\w+)/.exec(wordInput)[0];

        if (this.state.words.length >= 5) {
            this.setState( {wordInput: "", wordInputErr: "You may not monitor more than five words"} );
            return null;
        } else if (this.state.wordInput == ""){
            this.setState( {wordInput: "", wordInputErr: "Word may not be blank"} );
            return null;
        } else if (this.state.words.includes(word)){
            this.setState( {wordInput: "", wordInputErr: "That word is already on your monitor list"} );
            return null;
        }

        this.setState({wordInput: "", wordsErr:"", words: [...this.state.words, word], wordInputErr: ""});
    }

    removeWord(event){
        event.preventDefault();
        let newWords = [...this.state.words];
        const target = event.currentTarget;
        const targetIdx = newWords.indexOf(target.innerHTML);
        newWords.splice(targetIdx,1);
        this.setState({words: newWords });

    }

    update(property) {
        return e => this.setState({[property]: e.target.value});
    }

    render(){
        const {successfulSubmit, wordInputErr, words, wordInput, wordsErr, email, submitErr, response} = this.state;

        let keywords;
        if(words.length > 0){
            keywords = <div className="form-group">
                <label htmlFor="CurrentKeyWords">Key Words</label>
                <ul className="key-word-list">
                    {words.map( (word, idx) => <li key={idx}><button onClick={this.removeWord}>{word}</button></li>) }
                </ul>
            </div>
        }



        return (
            <div className="my-form-div">
                {successfulSubmit ? <SuccessfulSubmit words={words} email={email} response={response}/> : ""}

                <form className="my-form" onSubmit={this.submitForm}>
                    <div className="form-group">
                        <label htmlFor="InputEmail">Email Address</label>
                        <input onChange={this.update('email')}
                            type="email"
                            className="form-control"
                            id="InputEmail"
                            value={email}
                            aria-describedby="emailHelp"/>
                        <small id="emailHelp" className="form-text text-muted">You will have to verify your email</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="InputKeyWord">Key Word Input</label>
                        <input onChange={this.update('wordInput')}
                            type="text"
                            className="form-control"
                            maxLength='20'
                            title="single word"
                            value={wordInput}
                            id="InputKeyWord" />
                        <br/>
                        <button onClick={this.addWord} className="btn btn-secondary">Add Key Word</button>
                        <small id="emailHelp" className="form-text text-muted">
                            {wordInputErr}
                        </small>

                    </div>

                    { keywords }

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <small id="emailHelp" className="form-text text-muted">
                            {wordsErr}
                            {submitErr}
                    </small>
                </form>
            </div>
        );

    }

}

export default UnverifiedForm;