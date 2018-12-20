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

#----------------------Family Contacts-----------------------------
dustin.contacts.create(first_name:'Eugene',last_name:'Brown', contact_avatar:'https://banner2.kisspng.com/20180406/sve/kisspng-computer-icons-user-material-design-business-login-dizzy-5ac7f1c61041c2.5160856515230529980666.jpg', category:'Family', last_event_date:'2018-06-15', cell_num: '555-555-5555', email_address: 'william@fakeemail.com', relationship: 'Cousin', home_address: '123 Main St', home_city: 'Washington', home_state: 'D.C.', home_zip: '22022', company_name: 'self-employed', company_address: '1440 G St. NW, Washington, D.C. 200005', company_city: 'Washington', company_state: 'DC', company_zip: '22022', bday: '1965-03-27', notes: 'Life of the party...', job_title: 'CEO' )

dustin.contacts.create(first_name:'Ann', last_name:'Brooks', contact_avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQ8O6lk0NBKTQI0EQQ30L92OTt57m3juQl3SWs6C5MILd2rEC', category:'Family', last_event_date:'2017-06-15', cell_num: '555-555-5555', email_address: 'Oprah@fakeemail.com', relationship: 'Aunt', home_address: '456 Main St', home_city: 'Arlington', home_state: 'VA', home_zip: '22122', company_name: 'CyberCoders', company_address: '1440 F St. NW', company_city: 'Washington', company_state: 'DC', company_zip: '20005', bday: '1985-04-17', notes: 'Loves all things sci-fi', job_title: 'Sr. Software Developer' )

dustin.contacts.create(first_name:'Steven', last_name:'Nelson', contact_avatar:'https://banner2.kisspng.com/20180406/sve/kisspng-computer-icons-user-material-design-business-login-dizzy-5ac7f1c61041c2.5160856515230529980666.jpg', category:'Family', last_event_date:'2018-01-15', cell_num: '555-555-5555', email_address: 'Emily@fakeemail.com', relationship: 'Cousin', home_address: '123 Another St', home_city: 'Atlanta', home_state: 'GA', home_zip: '33033', company_name: 'Piedmont Hospital', company_address: '1440 X St. NW',company_city: 'Washington', company_state: 'DC', company_zip: '20005', bday: '1973-03-27', notes: 'Works a lot...',job_title: 'Physician' )

dustin.contacts.create(first_name:'Thomas', last_name:'Cooper', contact_avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQ8O6lk0NBKTQI0EQQ30L92OTt57m3juQl3SWs6C5MILd2rEC', category:'Family', last_event_date:'2018-09-15', cell_num: '555-555-5555', email_address: 'Halle@fakeemail.com', relationship: 'Cousin', home_address: '123 And Another St', home_city: 'Miami', home_state: 'FL', home_zip: '33333', company_name: 'University of Miami', company_address: '1440 G St. NW', company_city: 'Washington', company_state: 'DC', company_zip: '20005', bday: '1965-03-27', notes: 'Life of the party...',job_title: 'professor' )

dustin.contacts.create(first_name:'Marie', last_name:'Perry', contact_avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQ8O6lk0NBKTQI0EQQ30L92OTt57m3juQl3SWs6C5MILd2rEC', category:'Family', last_event_date:'2018-11-15', cell_num: '555-555-5555', email_address: 'Halle@fakeemail.com', relationship: 'Cousin', home_address: '123 And Another St', home_city: 'Miami', home_state: 'FL', home_zip: '33333', company_name: 'University of Miami', company_address: '1440 G St. NW', company_city: 'Washington', company_state: 'DC', company_zip: '20005', bday: '1965-03-27', notes: 'Life of the party...',job_title: 'professor' )
# ----------------------------friends-------------------------------------------
dustin.contacts.create(first_name:'Helen', last_name:'Ramirez', contact_avatar:'https://banner2.kisspng.com/20180406/sve/kisspng-computer-icons-user-material-design-business-login-dizzy-5ac7f1c61041c2.5160856515230529980666.jpg', category:'Friends', last_event_date:'2017-06-15', cell_num: '555-555-5555', email_address: 'Kevin@fakeemail.com', relationship: 'Friend from College', home_address: '123 And Another St', home_city: 'Hollywood', home_state: 'CA', home_zip: '33333', company_name: 'Kevin Productions', company_address: '1440 G St. NW', company_city: 'Washington', company_state: 'DC', company_zip: '20005', bday: '1985-02-18', notes: 'Life of the party...',job_title: 'CEO' )

dustin.contacts.create(first_name:'James', last_name:'Williams', contact_avatar:'https://banner2.kisspng.com/20180406/sve/kisspng-computer-icons-user-material-design-business-login-dizzy-5ac7f1c61041c2.5160856515230529980666.jpg', category:'Friends', last_event_date:'2018-01-15', cell_num: '555-555-5555', email_address: 'Kevin@fakeemail.com', relationship: 'Friend from College', home_address: '123 And Another St', home_city: 'Hollywood', home_state: 'CA', home_zip: '33333', company_name: 'Kevin Productions', company_address: '1440 G St. NW', company_city: 'Washington', company_state: 'DC', company_zip: '20005', bday: '1985-02-18', notes: 'Life of the party...',job_title: 'CEO' )

dustin.contacts.create(first_name:'Earl', last_name:'Murphy', contact_avatar:'https://banner2.kisspng.com/20180406/sve/kisspng-computer-icons-user-material-design-business-login-dizzy-5ac7f1c61041c2.5160856515230529980666.jpg', category:'Friends', last_event_date:'2016-06-15', cell_num: '555-555-5555', email_address: 'Kevin@fakeemail.com', relationship: 'Friend from College', home_address: '123 And Another St', home_city: 'Hollywood', home_state: 'CA', home_zip: '33333', company_name: 'Kevin Productions', company_address: '1440 G St. NW', company_city: 'Washington', company_state: 'DC', company_zip: '20005', bday: '1985-02-18', notes: 'Life of the party...',job_title: 'CEO' )

dustin.contacts.create(first_name:'Helen', last_name:'Ramirez', contact_avatar:'https://banner2.kisspng.com/20180406/sve/kisspng-computer-icons-user-material-design-business-login-dizzy-5ac7f1c61041c2.5160856515230529980666.jpg', category:'Friends', last_event_date:'2018-03-10', cell_num: '555-555-5555', email_address: 'Kevin@fakeemail.com', relationship: 'Friend from College', home_address: '123 And Another St', home_city: 'Hollywood', home_state: 'CA', home_zip: '33333', company_name: 'Kevin Productions', company_address: '1440 G St. NW', company_city: 'Washington', company_state: 'DC', company_zip: '20005', bday: '1985-02-18', notes: 'Life of the party...',job_title: 'CEO' )

dustin.contacts.create(first_name:'Marie', last_name:'Perry', contact_avatar:'https://banner2.kisspng.com/20180406/sve/kisspng-computer-icons-user-material-design-business-login-dizzy-5ac7f1c61041c2.5160856515230529980666.jpg', category:'Friends', last_event_date:'2017-12-15', cell_num: '555-555-5555', email_address: 'Kevin@fakeemail.com', relationship: 'Friend from College', home_address: '123 And Another St', home_city: 'Hollywood', home_state: 'CA', home_zip: '33333', company_name: 'Kevin Productions', company_address: '1440 G St. NW', company_city: 'Washington', company_state: 'DC', company_zip: '20005', bday: '1985-02-18', notes: 'Life of the party...',job_title: 'CEO' )
# -------------------------- Associates ----------------------------------------
dustin.contacts.create(first_name:'Mark', last_name:'Stewart', contact_avatar:'https://banner2.kisspng.com/20180406/sve/kisspng-computer-icons-user-material-design-business-login-dizzy-5ac7f1c61041c2.5160856515230529980666.jpg', category:'Associates', last_event_date:'2018-09-15', cell_num: '555-555-5555', email_address: 'Steven@fakeemail.com', relationship: 'Met at Coding Networking Event', home_address: '123 And Another St', home_city: 'Washington', home_state: 'D.C.', home_zip: '22222', company_name: 'XYZ,inc', company_address: '1440 G St. NW', company_city: 'Washington', company_state: 'DC', company_zip: '20005', bday: '1965-03-27', notes: 'WE THE BESSSSSSST!!!',job_title: 'Product Manager' )

dustin.contacts.create(first_name:'Linda', last_name:'Mitchell', contact_avatar:'https://banner2.kisspng.com/20180406/sve/kisspng-computer-icons-user-material-design-business-login-dizzy-5ac7f1c61041c2.5160856515230529980666.jpg', category:'Associates', last_event_date:'2018-07-15', cell_num: '555-555-5555', email_address: 'Steven@fakeemail.com', relationship: 'Met at Coding Networking Event', home_address: '123 And Another St', home_city: 'Washington', home_state: 'D.C.', home_zip: '22222', company_name: 'XYZ,inc', company_address: '1440 G St. NW', company_city: 'Washington', company_state: 'DC', company_zip: '20005', bday: '1965-03-27', notes: 'WE THE BESSSSSSST!!!',job_title: 'Product Manager' )

dustin.contacts.create(first_name:'Joan', last_name:'Washington', contact_avatar:'https://banner2.kisspng.com/20180406/sve/kisspng-computer-icons-user-material-design-business-login-dizzy-5ac7f1c61041c2.5160856515230529980666.jpg', category:'Associates', last_event_date:'2018-02-15', cell_num: '555-555-5555', email_address: 'Steven@fakeemail.com', relationship: 'Met at Coding Networking Event', home_address: '123 And Another St', home_city: 'Washington', home_state: 'D.C.', home_zip: '22222', company_name: 'XYZ,inc', company_address: '1440 G St. NW', company_city: 'Washington', company_state: 'DC', company_zip: '20005', bday: '1965-03-27', notes: 'WE THE BESSSSSSST!!!',job_title: 'Product Manager' )

dustin.contacts.create(first_name:'Samuel', last_name:'Baker', contact_avatar:'https://banner2.kisspng.com/20180406/sve/kisspng-computer-icons-user-material-design-business-login-dizzy-5ac7f1c61041c2.5160856515230529980666.jpg', category:'Associates', last_event_date:'2018-011-15', cell_num: '555-555-5555', email_address: 'Steven@fakeemail.com', relationship: 'Met at Coding Networking Event', home_address: '123 And Another St', home_city: 'Washington', home_state: 'D.C.', home_zip: '22222', company_name: 'XYZ,inc', company_address: '1440 G St. NW', company_city: 'Washington', company_state: 'DC', company_zip: '20005', bday: '1965-03-27', notes: 'WE THE BESSSSSSST!!!',job_title: 'Product Manager' )

dustin.contacts.create(first_name:'Joe', last_name:'Rogers', contact_avatar:'https://banner2.kisspng.com/20180406/sve/kisspng-computer-icons-user-material-design-business-login-dizzy-5ac7f1c61041c2.5160856515230529980666.jpg', category:'Associates', last_event_date:'2018-10-15', cell_num: '555-555-5555', email_address: 'Steven@fakeemail.com', relationship: 'Met at Coding Networking Event', home_address: '123 And Another St', home_city: 'Washington', home_state: 'D.C.', home_zip: '22222', company_name: 'XYZ,inc', company_address: '1440 G St. NW', company_city: 'Washington', company_state: 'DC', company_zip: '20005', bday: '1965-03-27', notes: 'WE THE BESSSSSSST!!!',job_title: 'Product Manager' )




#-----------------------------Events--------------------------------------------
dustin.events.create(name:'movies', description:'watch latest Avengers movie',location:'Regal D.C.', event_date:'20191119T083748-0600', contact_id: 3)
dustin.events.create(name:'Capitals vs Tampa Bay Lightning', description:'watch Capitals play T.B. lightning at Capitals Arena',location:'Capitals Arena', event_date:'20190112T083748-0600', contact_id: 3)
dustin.events.create(name:'Drinking', description:'bar hoppin on Ybor',location:'Ybor in Tampa', event_date:'2019-03-10', contact_id: 3)
dustin.events.create(name:'D.C. United vs ATL United', description:'watch D.C. United match against Atlanta United',location:'Audi Stadium', event_date:'20190707T084530-0600', contact_id: 3)
dustin.events.create(name:'Drake and The Migos', description:'Drake and Migos concert',location:'Capital One Arena', event_date:'20190227T033000-0600', contact_id: 3)

dustin.events.create(name:'movies', description:'watch latest Avengers movie',location:'Regal D.C.', event_date:'20191119T083748-0600', contact_id: 7)
dustin.events.create(name:'Capitals vs Tampa Bay Lightning', description:'watch Capitals play T.B. lightning at Capitals Arena',location:'Capitals Arena', event_date:'20190112T083748-0600', contact_id: 7)
dustin.events.create(name:'Drinking', description:'bar hoppin on Ybor',location:'Ybor in Tampa', event_date:'2019-03-10', contact_id: 7)
dustin.events.create(name:'D.C. United vs ATL United', description:'watch D.C. United match against Atlanta United',location:'Audi Stadium', event_date:'20190707T084530-0600', contact_id: 7)
dustin.events.create(name:'Drake and The Migos', description:'Drake and Migos concert',location:'Capital One Arena', event_date:'20190227T033000-0600', contact_id: 7)


dustin.events.create(name:'movies', description:'watch latest Avengers movie',location:'Regal D.C.', event_date:'20191119T083748-0600', contact_id: 10)
dustin.events.create(name:'Capitals vs Tampa Bay Lightning', description:'watch Capitals play T.B. lightning at Capitals Arena',location:'Capitals Arena', event_date:'20190112T083748-0600', contact_id: 10)
dustin.events.create(name:'Drinking', description:'bar hoppin on Ybor',location:'Ybor in Tampa', event_date:'2019-03-10', contact_id: 10)
dustin.events.create(name:'D.C. United vs ATL United', description:'watch D.C. United match against Atlanta United',location:'Audi Stadium', event_date:'20190707T084530-0600', contact_id: 10)
dustin.events.create(name:'Drake and The Migos', description:'Drake and Migos concert',location:'Capital One Arena', event_date:'20190227T033000-0600', contact_id: 10)


dustin.events.create(name:'movies', description:'watch latest Avengers movie',location:'Regal D.C.', event_date:'20191119T083748-0600', contact_id: 12)
dustin.events.create(name:'Capitals vs Tampa Bay Lightning', description:'watch Capitals play T.B. lightning at Capitals Arena',location:'Capitals Arena', event_date:'20190112T083748-0600', contact_id: 12)
dustin.events.create(name:'Drinking', description:'bar hoppin on Ybor',location:'Ybor in Tampa', event_date:'2019-03-10', contact_id: 12)
dustin.events.create(name:'D.C. United vs ATL United', description:'watch D.C. United match against Atlanta United',location:'Audi Stadium', event_date:'20190707T084530-0600', contact_id: 12)
dustin.events.create(name:'Drake and The Migos', description:'Drake and Migos concert',location:'Capital One Arena', event_date:'20190227T033000-0600', contact_id: 12)


dustin.events.create(name:'movies', description:'watch latest Avengers movie',location:'Regal D.C.', event_date:'20191119T083748-0600', contact_id: 20)
dustin.events.create(name:'Capitals vs Tampa Bay Lightning', description:'watch Capitals play T.B. lightning at Capitals Arena',location:'Capitals Arena', event_date:'20190112T083748-0600', contact_id: 20)
dustin.events.create(name:'Drinking', description:'bar hoppin on Ybor',location:'Ybor in Tampa', event_date:'2019-03-10', contact_id: 20)
dustin.events.create(name:'D.C. United vs ATL United', description:'watch D.C. United match against Atlanta United',location:'Audi Stadium', event_date:'20190707T084530-0600', contact_id: 20)
dustin.events.create(name:'Drake and The Migos', description:'Drake and Migos concert',location:'Capital One Arena', event_date:'20190227T033000-0600', contact_id: 20)
