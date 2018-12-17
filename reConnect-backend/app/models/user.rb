class User < ApplicationRecord
  has_many :contacts
  has_many :events
  accepts_nested_attributes_for :contacts
end
