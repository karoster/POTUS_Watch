import React from 'react'


class Footer extends React.Component{
    constructor(props){
        super(props)

    }

    render(){

        return(
            <footer className="footer">
                <div className="container">
                    <span className="text-muted">Footer stuff here...</span>
                </div>  
            </footer>
        )

    }

}

export default Footer