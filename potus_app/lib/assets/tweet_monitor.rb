#give access to credentials...
require 'net/http'
require 'twitter'

require_relative "#{__dir__}/../../config/application.rb"

client = Twitter::REST::Client.new do |config|
    config.consumer_key = Rails.application.credentials.twitter[:consumer_key]
    config.consumer_secret = Rails.application.credentials.twitter[:consumer_key_secret]
    config.access_token = Rails.application.credentials.twitter[:access_token]
    config.access_token_secret = Rails.application.credentials.twitter[:access_token_secret]
end


while(true)

    sleep(5)
end