# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#------------------clear out-------------------------
User.destroy_all
Event.destroy_all
Contact.destroy_all
#-----------------------------Users--------------------------------------------
dustin = User.create(name: 'Dustin', password: 'password', avatar: 'https://cdn0.iconfinder.com/data/icons/flat-profession-icons/48/2-512.png')

#-----------------------------Contacts------------------------------------------
dustin.contacts.create(name:'Nicole', contact_avatar:'https://img.icons8.com/color/1600/person-female.png', category:'friend', last_event_date:'20180615' )
dustin.contacts.create(name:'Jennifer', contact_avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXXmBvHF1K3QQ0cbaznD0yfSqNizuv3rOrcQKW43gWgQ8ujiyg', category:'family', last_event_date:'20180425' )
dustin.contacts.create(name:'Carlos', contact_avatar:'https://img.icons8.com/color/1600/person-male.png', category:'family', last_event_date:'20180425' )
dustin.contacts.create(name:'John', contact_avatar:'https://img.icons8.com/color/1600/person-male.png', category:'family', last_event_date:'20180425' )
dustin.contacts.create(name:'Kimberly', contact_avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXXmBvHF1K3QQ0cbaznD0yfSqNizuv3rOrcQKW43gWgQ8ujiyg', category:'family', last_event_date:'20180425' )


#-----------------------------Events--------------------------------------------
dustin.events.create(name:'movies', description:'watch latest Avengers movie',location:'Regal D.C.', event_date:'20191119T083748-0600')
dustin.events.create(name:'Capitals vs Tampa Bay Lightning', description:'watch Capitals play T.B. lightning at Capitals Arena',location:'Capitals Arena', event_date:'20190112T083748-0600')
dustin.events.create(name:'Drinking', description:'bar hoppin on Ybor',location:'Ybor in Tampa', event_date:'20191019T083748-0600')
dustin.events.create(name:'D.C. United vs ATL United', description:'watch D.C. United match against Atlanta United',location:'Audi Stadium', event_date:'20190707T084530-0600')
dustin.events.create(name:'Drake and The Migos', description:'Drake and Migos concert',location:'Capital One Arena', event_date:'20190227T033000-0600')
