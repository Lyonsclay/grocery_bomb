class List < ActiveRecord::Base
  attr_accessible :name, :total
  has_many :items
end
