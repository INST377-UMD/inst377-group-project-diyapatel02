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
can book a trip to a particular country not knowing that it is a holiday in that country which could lead to a
lot of goods and services being inaccessible during that period. Our preject mitigates that risk because it provides
a comprehensive list of holidays and the type of holiday in a given year based on the country the user selects. 
 
### Stakeholders
General Public → People who want to know when the next holidays are to plan their vacations or leisure activities.

Businesses → Companies need to plan work schedules, inventory management, and promotional activities based on public holidays.

Tourism Industry → Travel agencies and tourism businesses can use this information to offer holiday packages and attract tourists.

Government → Local and national government bodies can benefit from this application for event planning and coordination.


## Target Browsers

This project is designed to be compatible with most web browsers. While it should work well with most major browsers, we recommend using the latest versions of the following:

- **Google Chrome**
- **Mozilla Firefox**
- **Microsoft Edge**
- **Safari** (for macOS and iOS)

For the best experience, we recommend using the project on a desktop or laptop computer. It should also work on most mobile devices with recent versions of their respective browsers.

## Holiday Planner User Manual

### Overview

The Holiday Planner is a web application that allows users to explore upcoming holidays in different countries. Users can input a country code and a year to view a list of upcoming holidays in that country. 

### Table of Contents

1. Holiday Planner Home Page
2. Country Code Page
3. About Page

## Developer Manual
### Installation
### Running the Program Locally

To run the Holiday Planner project on your local machine, follow these steps:

1. **Clone the Repository:**
   Open your terminal and navigate to the directory where you want to clone the project. Run the following command to clone the repository:

   ```bash
   git clone https://github.com/INST377-UMD/inst377-group-project-diyapatel02

2. **Change into the project directory:**

   ```bash
    cd your-repository

3. **Install Dependencies:**
Make sure you have Node.js installed on your machine. If not, download and install it from Node.js website.

    Once Node.js is installed, run the following command to install project dependencies:

   ```bash
    npm install
    node server.js

This will start the server, and you should see a message indicating that the server is running at http://localhost:4000/index.html.


### Running the Application
The project will be accessible at http://localhost:4000/index.html.

Accessing the project:
Open your web browser and go to http://localhost:4000/index.html.

In order to run the application, the user just has to go to the country codes page and find the country code for the country
they are looking for and then going back to the main page and typing the code, year, and clicking submit. After that, they will be presented
with a table providing all the holidays in a given year. 

### Running Tests
As of now, the project does not have specific tests. Future developments may include the addition of testing frameworks.

## API Information

### API Endpoint
The server provides the following API endpoint:

    ```bash
    GET /v1/holidays: Retrieve upcoming holidays based on the specified country code and year.
        Parameters:
            country: Country code (e.g., USA, CAN)
            year: Year for which holidays are requested
        Example: GET /v1/holidays?country=USA&year=2023

### API
Our system solves this information problem by allowing users to select their country and provides a list of upcoming public holidays in that country. We  used the public API provided by https://api-ninjas.com/api/holidays to retrieve the necessary holiday data. This provided access to holiday information and allow users to plan their activities more efficiently. We have chosen to work with the https://api-ninjas.com/api/holidays API because it offers a comprehensive and up-to-date database of public holiday information for multiple countries.

Method used: GET

### Bugs
At the moment there are no known bugs. 

### Future Development
In the future, the project could be further expanded by incorporating more aspects of planning a vacation including: 

1. Weather information

2. Popular areas in a country to visit