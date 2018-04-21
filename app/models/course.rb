class Course < ApplicationRecord
  has_many :course_signs
  CURRENT_COURSE = 3
end
