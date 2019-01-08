# reConnect

Objectives
1. Create an web app where a user has the ability to see which contacts he/she has not done an "event" with in a given period of time and alert the user to create new events. 
2. App should be simple to use and be seen as a Customer Relationship Management tool made specifically to manage personal and professional relationships.
3. App will have 3 models: Users, Contacts and Events. User has many contacts. Contacts belongs to User, has many events through User. Events belongs to User, has many Contacts through User.


Backend 
+ Created using Rails API Only.
+ PostgreSQL database ontop of Active Record.
+ Serializers used to customize API

Frontend
+ Used React.js
+ Semantic UI for styling




Instructions

* From homepage, user should be able to navigate from a menu to various categories (e.g. Family, Friends and Associates)
* User should also be able to navigate to the "add a contact" form from the menu
* In each category, user should only see the "cards" for contacts that fall under that category.
* User should be able to select a duration of time that shows a warning for contacts that a user has not completed an event within that time period.
* Clicking on a user card should display the contacts show page with all of the contacts information.
* On each contacts show page, user should be able to create a new event, edit and delete the contact.
* Created events should show on each contacts show page as "Upcoming, Overdue and Completed" based on date and time and status.
* User should be able to mark an event as completed and delete an event.
* Completing a task should update the "date of last event".



