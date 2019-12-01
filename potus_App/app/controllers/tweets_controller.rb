class TweetsController < ApplicationController
    def create
        #### NEED TO CHECK IF THIS ENDPT WAS ACCESSED WITH SECRET KEY ####
        
        
    end


    private


    def tweet_params
        params.require(:tweet).permit(:twitter_handle, :body)
    end


end