class Api::V1::VerifiedAlertsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:destroy]


  def show
    v_token = verified_alert_params["id"]

    @unverified_alert = UnverifiedAlert.find_by(verification_token: v_token)

    if @unverified_alert
      begin
        VerifiedAlert.transaction do 
          words, email = @unverified_alert.words, @unverified_alert.email
          VerifiedAlert.where(email: email).delete_all

          #setting authentication token for future unsubscribe authentication (reusing verification token...)
          words.each { |word| VerifiedAlert.create( email: email, word: word, authentication_token: v_token ) }
          @unverified_alert.destroy
        end
        render json: { msg: "verification successful", error: false}

      rescue => exception
        render json: { msg: exception.message, error: true}
      end

    else
      render json: { msg: "verification link has expired or is invalid", error: true }
    end

  end



  def destroy
    auth_token = verified_alert_params["id"]

    @verified_alerts = VerifiedAlert.where(authentication_token: auth_token)
      if @verified_alerts.length == 0
        render json: { msg: "It seems there was an error unsubscribing. Please try again later.", error: true }
      else
        deletion_success = @verified_alerts.delete_all

        if deletion_success
          render json: {msg: "You have succesfully unsubscribed from your alerts!", error: false}
        else
          p deletion_success
          render json: {msg: deletion_success, error: true}
        end
      end

  end



  private

  def verified_alert_params
    params.permit(:id)
  end
end
