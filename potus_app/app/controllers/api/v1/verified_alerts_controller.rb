class Api::V1::VerifiedAlertsController < ApplicationController
  def show
    @unverified_alert = UnverifiedAlert.find_by(verification_token: verified_alert_params["id"])
    p @unverified_alert

    if @unverified_alert
      begin
        VerifiedAlert.transaction do 
          words, email = @unverified_alert.words, @unverified_alert.email
          words.each { |word| tester = VerifiedAlert.create( email: email, word: word ) }
          @unverified_alert.destroy
        end
        render json: { msg: "verification successful" }

      rescue => exception
        render json: { msg: exception.message, error: true}
      end

    else
      render json: { msg: "verification link has expired or is invalid", error: true }
    end

  end

  def destroy
    #implement later => remove from subscription list
  end

  private

  def verified_alert_params
    params.permit(:id)
  end
end
