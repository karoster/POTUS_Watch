class Api::V1::UnverifiedAlertsController < ApplicationController


    def create
        #send email on creation success
        # p("in #create")
        # p(params)
        p "ding"
        email = unverified_alert_params["email"]
        p"ding1"
        alert_words = unverified_alert_params["words"]
        @unverified_alert = UnverifiedAlert.where(email: email)
            .first_or_create(words: alert_words)
            .update(words: alert_words)
        if @unverified_alert 
            render json: @unverified_alert
        else
            render json: @unverified_alert
        end
    end


    private


    def unverified_alert_params
        params.require(:unverified_alert).permit(:email, {words: []})
    end

end