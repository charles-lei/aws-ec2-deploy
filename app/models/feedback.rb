class Feedback < ApplicationRecord
  belongs_to :student, :optional => true
end
