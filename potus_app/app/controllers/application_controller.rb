class ApplicationController < ActionController::Base

    def verify_api_token
        Rails.application.credentials.my_api[:auth_token] == params[:auth_token]
        
    end

    def twitter_client
        client = Twitter::REST::Client.new do |config|
            config.consumer_key = Rails.application.credentials.twitter[:consumer_key]
            config.consumer_secret = Rails.application.credentials.twitter[:consumer_key_secret]
            config.access_token = Rails.application.credentials.twitter[:access_token]
            config.access_token_secret = Rails.application.credentials.twitter[:access_token_secret]
        end
    end

end
