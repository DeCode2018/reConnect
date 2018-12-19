class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar, :contacts, :events

  def contacts
    self.object.contacts.map do |contact|
      { id: contact.id,
        first_name: contact.first_name,
        last_name: contact.last_name,
        category: contact.category,
        relationship:contact.relationship,
        bday:contact.bday,
        contact_avatar: contact.contact_avatar,
        cell_num: contact.cell_num,
        email_address: contact.email_address,
        home_address: contact.home_address,
        home_city: contact.home_city,
        home_state: contact.home_state,
        home_zip: contact.home_zip,
        company_name: contact.company_name,
        job_title: contact.job_title,
        company_address: contact.company_address,
        company_city: contact.company_city,
        company_state: contact.company_state,
        company_zip: contact.company_zip,
        last_event_date: contact.last_event_date,
        notes: contact.notes,

       }
    end
  end

  def events
    self.object.events.map do |event|
      { id: event.id,
        name: event.name,
        descriptioin: event.description,
        location: event.location,
        event_date: event.event_date,
        contact_id: event.contact_id,
        user_id: event.user_id
       }
    end
  end
end
