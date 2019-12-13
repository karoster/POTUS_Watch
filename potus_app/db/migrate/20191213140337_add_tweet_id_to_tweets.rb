class AddTweetIdToTweets < ActiveRecord::Migration[6.0]
  def change
    add_column :tweets, :tweet_id, :string, null: false
  end
end
