class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar, :contacts, :events

  def contacts
    self.object.contacts.map do |contact|
      { id: contact.id,
        name: contact.name,
        contact_avatar: contact.contact_avatar,
        category: contact.category,
        last_event_date: contact.last_event_date,
        cell_num: contact.cell_num,
        email_address: contact.email_address,
        relationship:contact.relationship,
        home_address:contact.home_address,
        home_city:contact.home_city,
        home_state:contact.home_state,
        home_zip:contact.home_zip,
        company_name:contact.company_name,
        company_address:contact.company_address,
        bday:contact.bday,
        notes:contact.notes,
        job_title:contact.job_title
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
