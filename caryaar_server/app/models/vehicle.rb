class Vehicle < ActiveRecord::Base
  has_many :registrations

  scope :seats_available, -> { where(["no_of_available_seats > 0"])}
  scope :future_dates, -> {where(["travel_date >= ? ", Date.today])}
end
