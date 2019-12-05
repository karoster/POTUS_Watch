class Api::V1::VerifiedAlertsController < ApplicationController
  def index
    @unverified_alert = UnverifiedAlert.where(verification_token: verified_alert_params["verification_token"])

    if @unverified_alert

      begin
        VerifiedAlert.transaction do 
          words, email = @unverified_alert.words, @unverified_alert.email
          words.each { |word| VerifiedAlert.create( email: email, word: word ) }
          @unverified_alert.destroy
        end
        #render page saying verification success....
      rescue => exception
        #catch error saying something went wrong...
      end

    else
      #render page saying expired verification token
    end

  end

  def destroy
    #implement later => remove from subscription list
  end

  private

  def verified_alert_params
    params.permit(:verification_token)
  end
end
