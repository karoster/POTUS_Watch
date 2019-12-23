require 'twitter'
require 'pqueue'
require 'net/http'
require 'uri'
require 'json'
#give access to rails credentials...
require_relative "#{__dir__}/../../config/application.rb"

my_api_auth = Rails.application.credentials.my_api[:auth_token]
uri = URI.parse("http://localhost:3000/api/v1/tweets")
header = {'Content-Type': 'text/json'}


#configuring the 'twitter' gem API client
client = Twitter::REST::Client.new do |config|
    config.consumer_key = Rails.application.credentials.twitter[:consumer_key]
    config.consumer_secret = Rails.application.credentials.twitter[:consumer_key_secret]
    config.access_token = Rails.application.credentials.twitter[:access_token]
    config.access_token_secret = Rails.application.credentials.twitter[:access_token_secret]
end

#priority queue sorted by tweet ID (proxy for tweet age)
tweet_age_priority = PQueue.new([]){ |a,b| a < b }

#below endpoint supports 900 request/15 minutes  (1500 for app api)
newest_tweet_id = (client.user_timeline('watch_potus', count: 1)[0]).id

tweet_age_priority.push(newest_tweet_id)

begin
    while(true)
        sleep(5)

        newest_tweet = client.user_timeline('watch_potus', count: 1)[0]

        # making sure the new id thats queried is not a tweet seen before (this can happen if newest tweet is deleted)
        # might be better to use API option to only take tweets with id > newest_tweet_id
        if newest_tweet.id != newest_tweet_id && !tweet_age_priority.include?(newest_tweet.id)
            newest_tweet_id = newest_tweet.id
            tweet_age_priority.push(newest_tweet_id)

            #making sure we only store the last 10 tweet ids in memory
            tweet_age_priority.pop if tweet_age_priority.size > 10
            
            #tweet object that will persist to database, with auth token
            uri_obj = newest_tweet.url
            tweet = { tweet:
                        { twitter_handle: 'watch_potus',
                        body: newest_tweet.text,
                        tweet_id: newest_tweet_id },
                    auth_token: my_api_auth,
                    id: newest_tweet_id }

            #making http request
            http = Net::HTTP.new(uri.host, uri.port)
            request = Net::HTTP::Post.new(uri.request_uri, header)

            request.body = tweet.to_json


            # Send the request
            response = http.request(request)     
        end
    end
rescue Exception
    sleep(10)
    retry
