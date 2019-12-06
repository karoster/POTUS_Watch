import React from 'react'


class Confirmation extends React.Component{
    constructor(props){
        super(props)

        this.state = { receivedResponse: false,
            message:"",
            error: null };

    }

    componentDidMount = () => {
        const { id } = this.props.match.params
        const url = `/api/v1/verified_alerts/${id}`
        fetch(url)
          .then(response => response.json())
          .then(response => {
            this.setState({ receivedResponse: true, message: response.msg, error: response.error });
          })
          .catch(err => {
            console.log(err);
            this.setState({ receivedResponse: true, message: "failed to connect to server", error: true })
          });
    }


    render(){
        const {receivedResponse, message, error} = this.state;
        let confirmAlert;
        if (error){
            confirmAlert = <div className="alert alert-danger fade show" role="alert">
                    {message}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
        }else{
            confirmAlert = <div className="alert alert-success fade show" role="alert">
                    {message}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
        }

        return(
            receivedResponse ? confirmAlert : ""  

            // <div className="fixed-top alert-fixed">
            // </div>
        );
    }


}

export default Confirmation