import React from 'react'
import Spinner from './Spinner'
import { TwitterTweetEmbed } from 'react-twitter-embed';


class RecentTweets extends React.Component {
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
          .then(response => response.json())//here is error...
          .then(response => { 
            this.setState({ loading: false, //here is other err...
                tweet_id1: response.tweet_id1,
                tweet_id2: response.tweet_id2,
                tweet_id3: response.tweet_id3,
                error: response.error });
          })
          .catch(err => {
            console.log(err);
            this.setState({ loading: false, message: "failed to connect to server", error: true })
          });

    }

    render(){
        let recentTweet1, recentTweet2, recentTweet3;
        const {tweet_id1, tweet_id2, tweet_id3, loading} = this.state;
        if (!loading){
            recentTweet1 = <TwitterTweetEmbed tweetId={tweet_id1}/>
            recentTweet2 = <TwitterTweetEmbed tweetId={tweet_id2}/>
            recentTweet3 = <TwitterTweetEmbed tweetId={tweet_id3}/>

        } else {
            recentTweet1 = <Spinner/>
            recentTweet2 = <Spinner/>
            recentTweet3 = <Spinner/>
        }

        return(
            <div className="container">
                <div className="w-75 mx-auto carousel-container">
                    <div className="section text-center">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active bg-secondary"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1" className="bg-secondary"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2" className="bg-secondary"></li>
                        </ol>
                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <div className="d-block w-100">
                                    {recentTweet2}
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="d-block w-100">
                                    {recentTweet2}
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="d-block w-100">
                                    {recentTweet3}
                                </div>
                            </div>
                           
                        </div>
                        <br/>
                        
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }


}

export default RecentTweets