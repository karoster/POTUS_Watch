import React from 'react'
import Spinner from './Spinner'
import { TwitterTweetEmbed } from 'react-twitter-embed';


class RecentTweet extends React.Component {
    constructor(props){
        super(props)

        this.state = { 
            loading: true,
            message: "",
            error: null
        }

    }



    componentDidMount(){
        const url = `/api/v1/tweets`
        fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "text/html"
            }
        })
          .then(response => response.json())
          .then(response => { 
            this.setState({ loading: false, tweet_id: response.tweet_id, error: response.error });
          })
          .catch(err => {
            console.log(err);
            this.setState({ loading: false, tweet_id: "failed to connect to server", error: true })
          });

    }

    render(){
        let recent_tweet

        const {tweet_id, loading} = this.state;

        if (!loading){  
            recent_tweet = <TwitterTweetEmbed tweetId={tweet_id}/>
        } else {
            recent_tweet = <Spinner/>
        }

        return(
            <div className="container">
                <div className="section text-center">
                    <h1>The President's Latest Tweet:</h1>
                    {recent_tweet}
                </div>
            </div>

        );
    }


}

export default RecentTweet