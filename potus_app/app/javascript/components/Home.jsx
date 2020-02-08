import React from "react";
import UnverifiedForm from "./UnverifiedForm"
import RecentTweets from "../components/RecentTweets"



export default () => (
  <div>
    <section className="jumbotron jumbotron-fluid text-center">
      <div className="container py-5">
        <h1 className="display-4">Alerts to the President's latest tweets</h1>
        <RecentTweets/>
        <p className="lead text-muted">
          Use this web-app to get alert emails when the
          president's tweet contains your designated keywords--
          great as a free stock market monitoring tool.

        </p>
      </div>
    </section>
    <br/>
    <br/>
    <UnverifiedForm/>
  </div>
);