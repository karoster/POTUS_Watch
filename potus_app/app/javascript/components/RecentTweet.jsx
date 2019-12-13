import React from 'react'

class RecentTweet extends React.Component {
    constructor(props){
        super(props)
        this.state = { loading: true }
    }

    componentDidMount(){


    }

    render(){
        return(
            <div>
                <h1></h1>
                {this.state.loading ? "" : <div></div>}
            </div>

        );
    }


}

export default RecentTweet