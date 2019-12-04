class AlertMailer < ApplicationMailer

    def verify_alert_email(unverified_alert)
        @unverified_alert = unverified_alert
        mail(to: @unverified_alert.email, subject: "POTUS-Watch Alert Confirmation Email")
    end

end
