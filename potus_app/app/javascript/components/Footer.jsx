import React from 'react'
import myDarkImage from 'images/binoculars-dark.png'


class Footer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <footer className="footer">
                <br/>
                <br/>
                <div className="container">
                    <div className="section text-center">
                        <span><img src={myDarkImage} className="logo" alt="dark-themed logo"/></span>
                        <br/>
                        <span className="text-muted"><a href="https://github.com/karoster/POTUS_Watch">POTUS-Watch Github</a></span><br/>
                        <span className="text-muted">Fun, but unrelated, project <a href="http://venmoviz.appspot.com">VenmoViz</a></span><br/>
                        <span className="text-muted">Having issues? Let me know at POTUS.watch@gmail.com</span>
                    </div>
                </div>  
            </footer>
        )
    }
}

export default Footer