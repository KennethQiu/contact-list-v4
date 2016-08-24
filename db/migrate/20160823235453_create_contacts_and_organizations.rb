class CreateContactsAndOrganizations < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :first_name
      t.string :last_name
      t.string :mobile
      t.string :email
      t.string :image_url
      t.timestamps
    end

    create_table :organizations do |t|
      t.string :name
      t.string :address
      t.string :description
      t.timestamps
    end

    create_table :contacts_organizations, id: false do |t|
      t.belongs_to :contact, index: true
      t.belongs_to :organization, index: true
    end 
  end
end
