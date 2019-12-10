class RemoveAndAddAuthenticationFromVerifiedAlerts < ActiveRecord::Migration[6.0]
  def change
    remove_column :verified_alerts, :authentication_token
    add_column :verified_alerts, :authentication_token, :string, null: false
  end
end
