class Giveaway < ApplicationRecord
  belongs_to :student
  belongs_to :course
end
