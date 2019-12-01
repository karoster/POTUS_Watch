class CreateVerifiedAlerts < ActiveRecord::Migration[6.0]
  def change
    create_table :verified_alerts do |t|
      t.string :email, null: false
      t.string :word, null: false
      t.timestamps
    end

    add_index :verified_alerts, :email
  end
end
