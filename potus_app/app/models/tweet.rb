class Tweet < ApplicationRecord
    validates :twitter_handle, :body, presence: true

end
