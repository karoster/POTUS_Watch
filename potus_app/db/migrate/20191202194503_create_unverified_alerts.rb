class CreateUnverifiedAlerts < ActiveRecord::Migration[6.0]
  def change
    create_table :unverified_alerts do |t|
      t.string :email, unique: true, null: false
      t.string :words, array: true, null: false
      t.string :verification_token, unique: true, null: false
      t.timestamps
    end

    add_index :unverified_alerts, :email, unique: true
  end
end
