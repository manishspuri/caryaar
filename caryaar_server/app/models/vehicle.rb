class Vehicle < ActiveRecord::Base
  has_many :registrations


  validates :owner_email, :vehicle_type, :from_location, :to_location, :travel_date, :travel_time, :no_of_available_seats,  :presence=>true



  scope :seats_available, -> { where(["no_of_available_seats > 0"])}
  scope :future_dates, -> {where(["travel_date >= ? ", Date.today])}

  before_save :send_email


  def send_email
    Notifier.send_email_alert(@vehicle).deliver!
  end

  def deduct_seat_by_one
  	if self.no_of_available_seats > 0 
  	  self.no_of_available_seats -= 1  
  	  self.save
  	end
  end
end
