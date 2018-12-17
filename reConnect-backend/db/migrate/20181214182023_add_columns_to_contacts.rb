class AddColumnsToContacts < ActiveRecord::Migration[5.2]
  def change
    add_column :contacts, :cell_num, :string
    add_column :contacts, :email_address, :string
    add_column :contacts, :relationship, :string
    add_column :contacts, :home_address, :string
    add_column :contacts, :home_city, :string
    add_column :contacts, :home_state, :string
    add_column :contacts, :home_zip, :string
    add_column :contacts, :company_name, :string
    add_column :contacts, :job_title, :string
    add_column :contacts, :company_address, :string
    add_column :contacts, :company_state, :string
    add_column :contacts, :company_city, :string
    add_column :contacts, :company_zip, :string
    add_column :contacts, :bday, :date
    add_column :contacts, :notes, :text
    add_column :contacts, :first_name, :string
    add_column :contacts, :last_name, :string




  end
end
