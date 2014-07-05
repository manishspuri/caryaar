class CreateVehicles < ActiveRecord::Migration
  def self.up
    create_table :vehicles do |t|
      t.string :type
      t.string :brand
      t.integer :no_of_available_seats
      t.string :city
      t.string :from_location
      t.string :to_location
      t.string :owner_name
      t.string :owner_phone
      t.string :owner_email
      t.date :travel_date
      t.time :travel_time
      t.timestamps
    end
  end

  def self.down
    drop_table :vehicles
  end
end
