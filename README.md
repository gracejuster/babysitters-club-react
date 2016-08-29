
## Babysitter's Club

This web application is a social network that connects parents with trusted babysitters. By searching for friends, parents can view those friends' networks and request one of their babysitters to join their network. After a babysitter has accepted a network request, a parent has the ability to book appointments with a babysitter. A babysitter can accept requests to join a new parent’s network and also accept requests for bookings.

## Instructions

This git repository is the front end of the application additionally please clone the rails backend at https://github.com/gyeon/babysitters-club.
Once both repositories are cloned run Postgres on your computer and type into you terminal "rails s" to get the rails server up and running. Then once in the react folder type "npm start" into your terminal to boot up the front end. We have factory girl as our seed file, so in order to find an email account for a login session type 'Parent.first.email' or 'Babysitter.first.email' into your rails console. The password for all accounts is 'password.'
