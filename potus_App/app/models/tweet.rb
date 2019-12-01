class Tweet < ApplicationRecord
    verifies :twitter_handle, :body, presence: true
        


end