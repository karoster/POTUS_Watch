import React from 'react'


class Footer extends React.Component{
    constructor(props){
        super(props)

    }

    render(){

        return(
            <footer className="footer">
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="container">
                    <div className="section text-center">
                        <span className="text-muted">POTUS-Watch</span><br/>
                        <span className="text-muted"><a href="https://github.com/karoster/POTUS_Watch">Github Repository</a></span><br/>
                        <span className="text-muted">Fun, but unrelated, project <a href="http://venmoviz.appspot.com">VenmoViz</a></span><br/>
                        <span className="text-muted">Having issues? Let me know at POTUS.watch@gmail.com</span>
                    </div>
                </div>  
            </footer>
        )

    }

}

export default Footer