import React from 'react'

class UnverifiedForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            words: [],
            email: "",
            wordInput:"",
            errors: {
                wordsErr: "",
                emailErr: "",
                wordInputErr:""
            }
        };

        this.submitForm = this.submitForm.bind(this);
        this.update = this.update.bind(this);
        this.addWord = this.addWord.bind(this);
        this.removeWord = this.removeWord.bind(this);
    }

    submitForm(event){
        event.preventDefault();
        if (!this.state.words.length){
            this.setState({wordsErr: "You must first monitor at least one word"});
            return null;
        }
        //need to add ajax call to post to unverified email/words table.
        // $.ajax()

    }

      
    addWord(event){
        event.preventDefault();

        const word = this.state.wordInput;

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

        this.setState({wordInput: "", words: [...this.state.words, word], wordInputErr: ""});
    }

    removeWord(event){
        event.preventDefault();
        let newWords = [...this.state.words];
        const target = event.currentTarget;
        const targetIdx = newWords.indexOf(target.value);
        newWords.splice(targetIdx,1);
        this.setState({words: newWords });

    }

    update(property) {
        return e => this.setState({[property]: e.target.value});
    }

    render(){
        let keywords;
        if(this.state.words.length > 0){
            keywords = <div className="form-group">
                <label htmlFor="CurrentKeyWords">Key Words</label>
                <ul className="key-word-list">
                    {this.state.words.map( (word, idx) => <li key={idx}><button onClick={this.removeWord}>{word}</button></li>) }
                </ul>
            </div>
        }



        return (
            <div className="my-form-div">
                <form className="my-form" onSubmit={this.submitForm}>
                    <div className="form-group">
                        <label htmlFor="InputEmail">Email Address</label>
                        <input onChange={this.update('email')}
                            type="email"
                            className="form-control"
                            id="InputEmail"
                            value={this.state.email}
                            aria-describedby="emailHelp"/>
                        <small id="emailHelp" className="form-text text-muted">You will have to verify your email</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="InputKeyWord">Key Word Input</label>
                        <input onChange={this.update('wordInput')}
                            type="text"
                            className="form-control"
                            value={this.state.wordInput}
                            id="InputKeyWord" />
                        <br/>
                        <button onClick={this.addWord} className="btn btn-secondary">Add Key Word</button>
                        <small id="emailHelp" className="form-text text-muted">
                            {this.state.wordInputErr}
                        </small>

                    </div>

                    { keywords }

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <small id="emailHelp" className="form-text text-muted">
                            {this.state.wordsErr}
                    </small>
                </form>
            </div>
        );

    }


}

export default UnverifiedForm;