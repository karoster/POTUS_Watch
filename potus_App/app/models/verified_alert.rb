class VerifiedAlert < ApplicationRecord 
    verifies :email, :word, presence: true




    private

    def verified_alert_params

        params.require(:verified_alert_params).permit(:email, :verification_token, words: [])
        
    end

end