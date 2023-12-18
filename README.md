# Holiday Planner
## Contributors
Diya Patel - Developer

Dagmawe Aychiluhim - Developer

Saatvik Gangavarapu - Developer

## Description
### Problem:
This project shows the different holidays in a given calendar year for a country selected by the user. 
This is because it is important for users know a country's holiday schedule before planning a vacation so they
know the availability for booking various aspects of their vacation. This is something important to consider because sometimes they
can book a trip to particular trip to a country not knowing that it is a holiday in that country which could lead to a
lot of goods and services being inaccessible during that period. Our preject mitigates that risk because it provides
a comprehensive list of holidays and the type of holiday in a given year based on the country the user selects. 
 
### Stakeholders
General Public → People who want to know when the next holidays are to plan their vacations or leisure activities.

Businesses → Companies need to plan work schedules, inventory management, and promotional activities based on public holidays.

Tourism Industry → Travel agencies and tourism businesses can use this information to offer holiday packages and attract tourists.

Government → Local and national government bodies can benefit from this application for event planning and coordination.

For the front end of our application, we plan to use HTML, CSS, and JavaScript. 
HTML and CSS will be used for structuring the content and styling the application. 
Javascript will allow us to create an interactive web application. 


This project should be able to run on any given system as it is available to as many users as possible. For the best 
experience however, we recommend user a computer and running it on the broswer. 


## Developer Manual
### Installation
In order to install this project on your device the first step is to clone the repository onto your system using git clone 
and then copying and pasting the code link on this repository. 

Next, change the directory into the project directory using cd and and pasting the name of the project

Next install the dependencies using npm install

### Running the Application
The project will be accessible at http://localhost:4000.

Accessing the project:
Open your web browser and go to http://localhost:4000.

In order to run the application, the user just has to go to the country codes page and find the country code for the country
they are looking for and then going back to the main page and typing the code, year, and clicking submit. After that, they will be presented
with a table providing all the holidays in a given year. 


### API Information
Our system will solve this information problem by allowing users to select their country and provide a list of 
upcoming public holidays in that country. We will use the public API provided by https://date.nager.at/ to 
retrieve the necessary holiday data. This will provide access to holiday information and allow users to plan 
their activities more efficiently.
We have chosen to work with the https://date.nager.at/ API because it offers a comprehensive and 
up-to-date database of public holiday information for multiple countries. 
It does not require authentication, which makes it easier to integrate into our application.

Method used: GET

### Bugs
At the moment there are no known bugs. 

In the future, the project could be further expanded by incorporating more aspects of planning a vacation including: 

1. Weather information

2. Popular areas in a country to visit


