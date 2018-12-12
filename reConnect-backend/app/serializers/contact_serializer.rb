class ContactSerializer < ActiveModel::Serializer
  attributes :id, :name, :contact_avatar, :category, :last_event_date, :user
end
