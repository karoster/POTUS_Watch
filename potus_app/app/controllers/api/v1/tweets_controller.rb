require 'net/http'

class Api::V1::TweetsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create

    if verify_api_token
      @tweet = Tweet.new(tweet_params)

      if @tweet.save

        tweet_embed = twitter_client.oembed(params[:id])
        tweet_body = tweet_params["body"]

        get_alerts.each do |alert|
          AlertMailer.send_alert(alert, tweet_body, tweet_embed).deliver
        end

        render json: { success: "okay"}
      
      else
        render json: { error: @tweet.errors.full_messages }
      end

    else
      render json: { error: "invalid authorization token; do you have API access?" }
    end

  end

  private

  def get_alerts
    tweet_word_list = tweet_params["body"].split(" ")

    #get alerts but keep unique on email, map into array of arrays
    #want to keep word in this array, so I can show word in email
    alerts = VerifiedAlert.where(word: tweet_word_list)
    .select('DISTINCT ON (verified_alerts.email) verified_alerts.email, verified_alerts.word')
    .map { |row| [row.email, row.word] }

    alerts
  end

  def tweet_params
    params.require(:tweet).permit(:twitter_handle, :body)
  end

end
