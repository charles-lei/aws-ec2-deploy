class Student < ApplicationRecord
  has_many :course_signs
  has_many :giveaways

  def current_course_giveaway
    giveaways.find_by(:course_id => Course::CURRENT_COURSE, :is_sent => false)
  end

  def current_course_signin
    course_signs.find_by(:course_id => Course::CURRENT_COURSE, :is_sent => false)
  end

  def has_valid_address?
    start_sign = (Rails.env == 'production' ? 'Q' : 'q')
    self.wallet_address.present? && self.wallet_address.start_with?(start_sign)
  end
end
