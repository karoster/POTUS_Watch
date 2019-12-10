class AddTokenToVerifiedAlerts < ActiveRecord::Migration[6.0]
  def change
    add_column :verified_alerts, :authentication_token, :string, null: false, unique: true
    add_index :verified_alerts, :authentication_token
  end
end
