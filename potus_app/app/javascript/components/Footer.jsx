import React from 'react'


class Footer extends React.Component{
    constructor(props){
        super(props)

    }

    render(){

        return(
            <footer className="footer">
                <div className="container">
                    <div className="section text-center">
                        <span className="text-muted">Footer stuff here...</span>
                    </div>
                </div>  
            </footer>
        )

    }

}

export default Footer