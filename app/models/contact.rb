class Contact < ActiveRecord::Base 
  has_and_belongs_to_many :organizations

  def full_name
    first_name && last_name && first_name + " " + last_name 
  end
end