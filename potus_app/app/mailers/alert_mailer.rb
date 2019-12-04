class AlertMailer < ApplicationMailer

    def verify_alert_email(unverified_alert)

        # email = unverified_alert.email
        # words = unverified_alert.words
        # verification_token = unverified_alert.verification_token
        @unverified_alert = unverified_alert
        mail(to: @unverified_alert.email, subject: "POTUS-Watch Alert Confirmation Email")
    end

end
