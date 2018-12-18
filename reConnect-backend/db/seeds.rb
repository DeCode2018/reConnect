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
dustin.contacts.create(first_name:'William',last_name:'Jones', contact_avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy08cK8wogTcvUJYvty4hAPwvKxTIJEqneUkNc3r4CBLkroZyn', category:'family', last_event_date:'2018-06-15', cell_num: '555-555-5555', email_address: 'william@fakeemail.com', relationship: 'Cousin', home_address: '123 Main St', home_city: 'Washington', home_state: 'D.C.', home_zip: '22022', company_name: 'self-employed', company_address: '1440 G St. NW, Washington, D.C. 200005', company_city: 'Washington', company_state: 'DC', company_zip: '22022', bday: '1965-03-27', notes: 'Life of the party...', job_title: 'CEO' )

dustin.contacts.create(first_name:'David', last_name:'Johnson', contact_avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy08cK8wogTcvUJYvty4hAPwvKxTIJEqneUkNc3r4CBLkroZyn', category:'family', last_event_date:'2018-06-15', cell_num: '555-555-5555', email_address: 'david@fakeemail.com', relationship: 'brother', home_address: '456 Main St', home_city: 'Arlington', home_state: 'VA', home_zip: '22122', company_name: 'CyberCoders', company_address: '1440 F St. NW', company_city: 'Washington', company_state: 'DC', company_zip: '20005', bday: '1985-04-17', notes: 'Loves all things sci-fi', job_title: 'Sr. Software Developer' )

dustin.contacts.create(first_name:'Emily', last_name:'Smith', contact_avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXXmBvHF1K3QQ0cbaznD0yfSqNizuv3rOrcQKW43gWgQ8ujiyg', category:'family', last_event_date:'2018-06-15', cell_num: '555-555-5555', email_address: 'Emily@fakeemail.com', relationship: 'Aunt', home_address: '123 Another St', home_city: 'Atlanta', home_state: 'GA', home_zip: '33033', company_name: 'Piedmont Hospital', company_address: '1440 X St. NW',company_city: 'Washington', company_state: 'DC', company_zip: '20005', bday: '1973-03-27', notes: 'Works a lot...',job_title: 'Physician' )

dustin.contacts.create(first_name:'Kimberly', last_name:'Williams', contact_avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXXmBvHF1K3QQ0cbaznD0yfSqNizuv3rOrcQKW43gWgQ8ujiyg', category:'family', last_event_date:'2018-06-15', cell_num: '555-555-5555', email_address: 'william@fakeemail.com', relationship: 'Cousin', home_address: '123 And Another St', home_city: 'Miami', home_state: 'FL', home_zip: '33333', company_name: 'University of Miami', company_address: '1440 G St. NW', company_city: 'Washington', company_state: 'DC', company_zip: '20005', bday: '1965-03-27', notes: 'Life of the party...',job_title: 'professor' )

dustin.contacts.create(first_name:'Kevin', last_name:'Hart', contact_avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy08cK8wogTcvUJYvty4hAPwvKxTIJEqneUkNc3r4CBLkroZyn', category:'friend', last_event_date:'2018-06-15', cell_num: '555-555-5555', email_address: 'Kevin@fakeemail.com', relationship: 'Friend from College', home_address: '123 And Another St', home_city: 'Hollywood', home_state: 'CA', home_zip: '33333', company_name: 'Kevin Productions', company_address: '1440 G St. NW', company_city: 'Washington', company_state: 'DC', company_zip: '20005', bday: '1985-02-18', notes: 'Life of the party...',job_title: 'CEO' )

dustin.contacts.create(first_name:'Steven', last_name:'Thomas', contact_avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy08cK8wogTcvUJYvty4hAPwvKxTIJEqneUkNc3r4CBLkroZyn', category:'associate', last_event_date:'2018-06-15', cell_num: '555-555-5555', email_address: 'Steven@fakeemail.com', relationship: 'Met at Coding Networking Event', home_address: '123 And Another St', home_city: 'Washington', home_state: 'D.C.', home_zip: '22222', company_name: 'XYZ,inc', company_address: '1440 G St. NW', company_city: 'Washington', company_state: 'DC', company_zip: '20005', bday: '1965-03-27', notes: 'hiring manager at  XYZ company, told you to send him your resume',job_title: 'Product Manager' )



#-----------------------------Events--------------------------------------------
dustin.events.create(name:'movies', description:'watch latest Avengers movie',location:'Regal D.C.', event_date:'20191119T083748-0600')
dustin.events.create(name:'Capitals vs Tampa Bay Lightning', description:'watch Capitals play T.B. lightning at Capitals Arena',location:'Capitals Arena', event_date:'20190112T083748-0600')
dustin.events.create(name:'Drinking', description:'bar hoppin on Ybor',location:'Ybor in Tampa', event_date:'20191019T083748-0600')
dustin.events.create(name:'D.C. United vs ATL United', description:'watch D.C. United match against Atlanta United',location:'Audi Stadium', event_date:'20190707T084530-0600')
dustin.events.create(name:'Drake and The Migos', description:'Drake and Migos concert',location:'Capital One Arena', event_date:'20190227T033000-0600')
