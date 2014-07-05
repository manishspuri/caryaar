class CreateRegistrations < ActiveRecord::Migration
   def self.up
    create_table :registrations do |t|
      t.integer :vehicle_id
      t.string :requestor_name
      t.string :requestor_phone
      t.string :requestor_email
      t.timestamps
    end
  end

  def self.down
    drop_table :registrations
  end
end
