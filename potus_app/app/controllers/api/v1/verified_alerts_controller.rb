class Api::V1::VerifiedAlertsController < ApplicationController


  def show
    v_token = verified_alert_params["id"]

    @unverified_alert = UnverifiedAlert.find_by(verification_token: v_token)

    if @unverified_alert
      begin
        VerifiedAlert.transaction do 
          words, email = @unverified_alert.words, @unverified_alert.email
          VerifiedAlert.where(email: email).delete_all

          words.each { |word| tester = VerifiedAlert.create( email: email, word: word, authentication_token: v_token ) }
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
    #implement later => remove from subscription list
    #add verifiction token to verified table to delete alerts...
    #prevents a user destroying another's records...

    v_token = verified_alert_params["id"]

    @verified_alerts = VerifiedAlert.where(authentication_token: v_token)
    @verified_alerts.delete_all

    if @verified_alerts
      render json: {msg: "You have succesfully unsubscribed from your alerts", error: false}
    else
      render json: {msg: @verified_alerts.errors.full_messages, error: true}
    end

  end

  private

  def verified_alert_params
    params.permit(:id)
  end
end
