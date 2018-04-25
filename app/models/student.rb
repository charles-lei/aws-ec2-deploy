class Student < ApplicationRecord
  has_many :course_signs
  has_many :giveaways
end
