import React from 'react'

class About extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <section className="jumbotron jumbotron-fluid text-center">
                    <div className="container py-5">
                        <h1 className="display-4">About POTUS-Watch</h1>
                        {/* <RecentTweets/> */}
                        <p className="lead text-muted">
                        Here you will find a slightly more technical explanation
                        of this app's use case and implementation.
                        </p>
                    </div>
                </section>
                <br></br>
                <section id="about">
                    <div class="container">
                        <div class="row">
                            <div className="col-lg-8 mx-auto">
                            <h2>What's the Idea, Anyways?</h2>
                            <p className="lead">
                                Twitter seems to be the communication mode of choice for many of today's global leaders.
                                In particular, the President of the United States (POTUS) tends to tweet often about world politics, leading to
                                volatility in the markets (sources: 
                                <a href='https://www.vox.com/policy-and-politics/2019/9/9/20857451/trump-stock-market-tweet-volfefe-jpmorgan-twitter'> JP Morgan's Volfefe Index</a>, 
                                <a href='https://www.bloomberg.com/features/trump-tweets-market/'> Bloomberg's Trump Tweets Market</a>). </p>
                            <p className="lead">
                                To take advantage of such tweets, you must obviously hear about them very fast.
                                Currently there exists paid services to help you do this, usually by tracking an individual's tweets by keyword.
                                That is, if you were to monitor the word 'tariff', and the POTUS tweeted about tariffs, you would get an email alert immediately.
                            </p>
                            <p className="lead">
                                Unfortunately these services cost a pretty penny. However,
                                by limiting the person who is tracked to only the President of the United States,
                                POTUS-Watch can provide an identical service free of charge.
                            </p>
                            {/* <ul>
                                <li>Clickable nav links that smooth scroll to page sections</li>
                                <li>Responsive behavior when clicking nav links perfect for a one page website</li>
                                <li>Bootstrap's scrollspy feature which highlights which section of the page you're on in the navbar</li>
                                <li>Minimal custom CSS so you are free to explore your own unique design options</li>
                            </ul> */}
                            </div>
                        </div>
                    </div>
                </section>

                <br></br>
                <section id="about2">
                    <div class="container">
                        <div class="row">
                            <div className="col-lg-8 mx-auto">
                            <h2>How Do I Use it?</h2>
                            <p className="lead">
                                You can sign up on the Homepage! Just enter your email, and up to five words to monitor. You will have
                                to verify your email address, so check for a verification email after signing up. And that's it! you will be
                                notified when the POTUS tweets using one of your keywords.
                            </p>
                            </div>
                        </div>
                    </div>
                </section>
                <br/>
                <section id="about2">
                    <div class="container">
                        <div class="row">
                            <div className="col-lg-8 mx-auto">
                            <h2>Can I Monitor Other People?</h2>
                            <p className="lead">
                                If you are a bit computer savvy, yes! There exists a public <a href='https://github.com/karoster/POTUS_Watch'>github</a> to this project.
                                Unfortunately If I want to keep alerts running fast, and keep the service free,
                                I can not support adding more than one (maybe two) people to monitor.
                                If you are familiar with Ruby/Rails you can run this project locally with your own <a href='https://developer.twitter.com/en/docs'>twitter API</a> key and monitor whoever you choose.   
                            </p>
                            </div>
                        </div>
                    </div>
                </section>
                <br/>


            </div>
        );
    }

}

export default About