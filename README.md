This project is a customer management system built with React, Node.js, Express, PostgreSQL and Redux.

<br>

Initial task condition

Create a simple website with two pages:
1) List of Users
2) List of Groups for Users

Description of the first page:
List of Users consist of: username, created, group, actions.
username – User nickname
created – Date of creating the user
group - Group, to which the user will be added
actions – two buttons 'Edit' and 'Delete'
Also, under the list, there should be a button ‘Add User'
for editing and adding new pages with such fields: username (text input) and group(select).

Description of the second page:
The list of groups should consist of: ID, Name, Description, Actions.
Actions – Edit and Delete buttons
Also, under the list, there should be a button `Add Group`
For editing and adding new pages with such fields: Name (text input) and Description (text
input).
Group deletion is impossible if the user is assigned to this group.


## To Run the Project

After cloning this repository install Dependencies first.
Client side dependencies by running in the `client` directory, you can run:
### `npm install`

<br>

Server side dependencies by running in the `server` directory, you can run:
### `npm install`

<br>

Start server side. 
Open a terminal and run the command in the `server` directory:
### `node manage-users-app`

<br>

Start client side. 
Open another terminal and run the command in the `client` directory:
### `npm start`

<br>

Runs the app.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.




