class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar, :contacts, :events

  def contacts
    self.object.contacts.map do |contact|
      { id: contact.id,
        name: contact.name,
        contact_avatar: contact.contact_avatar,
        category: contact.category,
        last_event_date: contact.last_event_date
       }
    end
  end

  def events
    self.object.events.map do |event|
      { id: event.id,
        name: event.name,
        descriptioin: event.description,
        location: event.location,
        event_date: event.event_date
       }
    end
  end
end
