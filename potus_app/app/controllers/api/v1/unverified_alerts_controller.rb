class Api::V1::UnverifiedAlertsController < ApplicationController


    def create
        email = unverified_alert_params["email"]
        alert_words = unverified_alert_params["words"]
        @unverified_alert = UnverifiedAlert.where(email: email)
            .first_or_create(words: alert_words)


        if @unverified_alert.valid?

            if  @unverified_alert.update(words: alert_words)
                render json: @unverified_alert
            else
                p @unverified_alert.errors.full_messages
                render json: @unverified_alert.errors
            end

        else
            render json: @unverified_alert.errors
        end
    end


    private


    def unverified_alert_params
        params.require(:unverified_alert).permit(:email, {words: []})
    end

end