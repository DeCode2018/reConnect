class ContactSerializer < ActiveModel::Serializer
  attributes :id,  :first_name, :last_name, :relationship, :contact_avatar, :bday, :category, :last_event_date,  :home_address, :home_city, :home_state, :home_zip, :company_name, :job_title, :company_address, :company_city, :company_state, :company_zip, :cell_num, :email_address, :notes, :user_id
end
