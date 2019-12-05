class AddIndexToTable < ActiveRecord::Migration[6.0]
  def change
    add_index :unverified_alerts, :verification_token, unique: true
  end
end
