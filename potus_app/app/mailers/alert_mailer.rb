class AlertMailer < ApplicationMailer

    def verify_alert_email(unverified_alert)
        @unverified_alert = unverified_alert
        mail(to: @unverified_alert.email, subject: "POTUS-Watch Alert Confirmation Email")

    end

    def send_alert(alert, tweet_body, tweet_embed)
        @tweet_embed = tweet_embed
        @tweet_body = tweet_body
        
        @alert_auth, @alert_word, @alert_email = alert[2], alert[1], alert[0]
        mail(to: @alert_email, subject: "POTUS-Watch Notification Alert Email")
    end

    private

end

