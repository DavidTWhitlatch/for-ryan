class Position < ApplicationRecord
  has_and_belongs_to_many :players, dependent :destroy
end