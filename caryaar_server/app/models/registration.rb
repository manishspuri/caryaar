class Registration < ActiveRecord::Base
  belongs_to :vehicle

  before_save :deduct_availability, :send_email
  
  validates :requestor_email, :presence=>true


  def deduct_availability
  	self.vehicle.deduct_seat_by_one
  end

  def send_email
  	Vehicle.report_email
  end
end
