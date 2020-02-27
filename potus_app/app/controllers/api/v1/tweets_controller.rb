require 'net/http'

class Api::V1::TweetsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create

    if verify_api_token
      @tweet = Tweet.new(tweet_params)

      if @tweet.save


        get_alerts.each do |alert|
          AlertMailer.send_alert(alert, tweet_params).deliver#, tweet_embed
        end

        render json: { success: "okay"}
      
      else
        render json: { error: @tweet.errors.full_messages }
      end

    else
      render json: { error: "invalid authorization token; do you have API access?" }
    end

  end


  def index
    latest = Tweet.last(3)
    render json: {tweet_id1: latest[0].tweet_id,
      tweet_id2: latest[1].tweet_id,
      tweet_id3: latest[2].tweet_id}

  end

  private

  def get_alerts
    tweet_word_list = tweet_params["body"].split(" ")

    #get alerts but keep unique on email, map into array of arrays with desired params
    alerts = VerifiedAlert.where(word: tweet_word_list)
    .select('DISTINCT ON (verified_alerts.email) verified_alerts.email, verified_alerts.word, verified_alerts.authentication_token')
    .map { |row| [row.email, row.word, row.authentication_token] }

    alerts
  end

  def tweet_params
    params.require(:tweet).permit(:twitter_handle, :body, :tweet_id, :created_at)
  end

end
