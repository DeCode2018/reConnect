class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :event_date, :user
end
