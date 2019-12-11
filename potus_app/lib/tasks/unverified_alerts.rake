namespace :unverified_alerts do
  desc "Delete unverified records oler than 24 hours"
  task delete_24_hours_old: :environment do
    UnverifiedAlert.where(['created_at < ?', 24.hours.ago]).destroy_all
    
  end

end
