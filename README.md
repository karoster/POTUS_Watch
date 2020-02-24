# POTUS-Watch
This webapp allows you to sign up for twitter alerts from the President of the United States (POTUS) by keywords.
The intent of the app is to be used as a financial tool for stock market volatility. You can read more about it, and test it out, on the [live site]().

Here I give public access to the codebase so that you may tweak/use it to monitor whoever you would like locally.
You will need a few things:
- [Twitter API key](https://developer.twitter.com/en/docs)
- Rails 6.0.1
- Ruby 2.5.1
- PostgreSQL
- 'twitter' gem for twitter api calls
- 'whenever' gem for scheduling rake tasks
- 'pqueue' gem for prioritizing most recent tweet, and tracking recent tweets
This README would normally document whatever steps are necessary to get the
application up and running.

Running locally is pretty straightforward. In [potus_app/lib/assets/tweet_monitor.rb](https://github.com/karoster/POTUS_Watch/blob/master/potus_app/lib/assets/tweet_monitor.rb) you will need to change the username who you should monitor from realDonaldTrump. You should replace the credentials here with your twitter credentials, and replace or delete 'my_api_auth'. When you delete 'my_api_auth' you can also delete the check for your auth token in [potus_app/app/controllers/api/v1/tweets_controller.rb](https://github.com/karoster/POTUS_Watch/blob/master/potus_app/app/controllers/api/v1/tweets_controller.rb) (the function call to verify_api_token). If you plan on deploying to production, then you should probably keep some sort of authenticity check here to prevent people from posting fake tweets to your api.

You can modify the email forms [in the views folder](https://github.com/karoster/POTUS_Watch/tree/master/potus_app/app/views/alert_mailer).

You will also need to configure the email you will use to send the alerts. [In the application_mailer file](https://github.com/karoster/POTUS_Watch/blob/master/potus_app/app/mailers/application_mailer.rb) you should change the 'from@example.com' email to the email you will be sending from. In the production (or development) [config file](https://github.com/karoster/POTUS_Watch/blob/master/potus_app/config/environments/production.rb), you should change the SMTP settings to use your email and password. I recommend storing this information in an encrypted credentials file.
