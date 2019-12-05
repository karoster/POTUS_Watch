import React from 'react'


class ModalSubmit extends React.Component{
    constructor(props){
        super(props)

        this.state = { errorBool: Array.isArray(this.props.response) ? true : false}
        
    }

    

    render(){
        const {response} = this.props
        const {errorBool} = this.state
        console.log(this.props.removeModal)
        console.log(response);
        let modalBody;

        // response is array of errors if backend validations failed;
        // JSON object otherwise.
        if (errorBool){
            modalBody = <div className="modal-body">
                <ul>
                    { response.map( (error, idx) => <li key={idx}> {error} </li> ) }
                </ul>
            </div>
        } else {
            //should add a button to resend confirmation email...?
            modalBody = <div className="modal-body">
                Please click the link sent in the confirmation email sent to {response.email} 
                 to finish setting up your alert! 
                 
            </div>
        }

        return(
            <div className="modal fade" id="myModal" onClick={this.props.removeModal} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                { errorBool ? "There was a problem" : "Alert verification email sent!"}
                            </h5>
                            {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button> */}
                        </div>
                        {modalBody}
                        <div className="modal-footer">
                            <button type="button"
                                className="btn btn-secondary"
                                onClick={this.props.removeModal}
                                data-dismiss="modal">
                                   Close
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        );

    }


}

export default ModalSubmit