class Notifier < ActionMailer::Base
  default from: "donotreply@caryaar.com"


  def send_email_alert(vehicle)
    @vehicle = vehicle
    mail(to: vehicle.owner_email, cc: get_emails(vehicle), subject: "Car Yaar: Journey Details")
  end

 private

  def get_emails(vehicle)
    vehicle.registrations.pluck(:requestor_email).join(', ')
  end
end
