TempoTeams <img src="https://github.com/zkevinbai/Challenge-TempoTeams/blob/master/public/favicon.png" alt="Aurelian Logo" align="center" height="50px" />
======
TempoTeams is a simple UI for visualizing the data from the following API endpoints:

[All Users](http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/user/)

[All Teams](http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/team/)

[Single User](http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/user/${userId})

[Single Team](http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/team/${teamId})

Technologies
---
* React for the frontend
* react-router-dom for routing
* Redux for state management 
* Axios for API calls

How to run:
---
1. Download this repo
2. Drag the root file to your terminal
   1. or open in terminal if you know how to navigate using cd(change directory)
3. run the following commands
   1. npm install
   2. npm start

Features
---
* Teams index view
  * each team links to the url for the respective team show page
* At the top of the teams index page
  * there is a dropdown that will change what team is rendered
* At the top of the team show page
  * there is a dropdown that will change what team member is rendered

Features I Could Add
---
  * single page application
    * because I am using react to manage state, it was not necessary to do routing
  * user index page
    * shows all the users
  * user show page
    * shows detailed information about each user
      * which teams they lead
      * which teams they are on


