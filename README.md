
# Driva Engineer Tech Challenge 

## The Task
Create a user multi step input form, this should behave as a single page application (SPA) using React JS and Node JS.

The screenshots can be found on the project root folder
![Step 01](/step1.png?raw=true "Step One")
![Step 02](/step2.png?raw=true "Step Two")

### Step One
As you can see in the screenshot, the form contains the following pieces of information:
* First name
* Last name
* Mobile number
* Email

### Step Two
The second step will represent a bit more information about the user as following:
* Relationship status - please add at least three choices
* After tax income and frequency
* Occupation
* Current employer
* Time in current employment - years and months as numbers 1-12
* Dependats - 1-10
This is the last step and by clicking Next, the form should submit the information to the server.

### Navigation
Please separate the two steps into two different routes, and provide a way to navigate back and forth.

### Backend
Please save the user information in the quotes table.
From the table structure, you can see that not all the fields from step1 and step2 represented directly as columns. 
You are welcome to add more columns, or save the rest as JSON in quote_data field.

### Notes
You can use any UI framework you like, or just clean CSS, **this is not a UI/UX/CSS test**, so better to focus on the core requirements, validation, and data. 

## Getting Started
We have provided a bit of boilerplate code that you can use to get started.  You are **not** required to use this boilerplate, so feel free to throw it all away and start fresh if you prefer.

The boilerplate code assumes you have Docker running on your machine.  If you do not, they offer easy to install binaries ([Mac](https://docs.docker.com/docker-for-mac/install/)) ([Windows](https://docs.docker.com/docker-for-windows/install/)).

From the root of the project, run `docker-compose up -d`
* run docker ps, you should get three containers running.
* You should now have the UI running at http://localhost:3000 and the server running at http://localhost:8080
* You should now have a MySQL database running at localhost:3306
    * The username is `root`
    * The password is `driva`
If at any point you want to refresh the database, you can stop the Docker containers (`docker-compose down`) and start them again

If you want to connect the DB with UI tool

You can use the following connection details:
- Host: 127.0.0.1
- User: root
- Password: driva  
- Database: driva

If you encounter any problems with the docker connection,
you can do the following
- run docker stop driva-test_server_1 
- run docker stop driva-test_ui_1
- we now running only the database container
- from the root of your application, `cd server`
  - `npm install`
  - `npm start` -  it will start your node server on port 8080, http://localhost:8080
- from the root of your application, open second terminal, run `cd ui` and `yarn start`
  - `cd ui`
  - `yarn`
  - `yarn start` - you now should have the front-end running on http://localhost:3000


## Submission
Please document your solution in the SOLUTION.md file.  This should explain why you've made the design choices that you have and clarify anything you feel isn't obvious.  Feel free to also include what else you would have done given more time.
