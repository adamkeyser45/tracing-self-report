# Contact Tracing Self Reporting Form

## Table of Contents
  - [Description](#description)
  - [Screenshots](#screenshots)
  - [About](#about)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)

## Description

This is the basic front end to a Contact Tracing Self Reporting Form. It would be used by local and state health departments to allow users to complete their own contact tracing, which would free up valuable resources for the health departments.

## Screenshots

![Screenshot of signin page](client/assets/homePageSS.png)
![Screenshot of confidentiality page](client/assets/confidentPageSS.png)
![Screenshot of demographics page](client/assets/demoPageSS.png)
![Screenshot of contact tracing page](client/assets/tracingPageSS.png)

## About

This project is strictly front end at the moment, using React and Material-Ui to create the application. 

* Users are first brought to the Sign In page. I have imagined for this application that the local health departments would give each individual a unique username and password when they have tested positive for COVID-19.
    * The links at the top of the page to the different sections would be hidden if a user is not logged in.
* After a user logs in, they should be redirected to the "Confidentiality" page. This is to make sure that the user is aware of the confidentiality that will be used concerning their personal health information. A user will then have to confirm they are aware of their rights before moving on.
    * Note: I have added a disclaimer to make sure that people understand that this is NOT affiliated with any actual contact tracing efforts.
* A user should then enter their demographics on the following page.
    * Future Development: On the right side of this page, I would like to add in an infographic about why the health department is collecting this information.
* Finally, a user will input their close contacts. A description of who a close contact is at the top of the page helps users know who to put down.
    * Future Development: Currently their are only three lines for close contacts. In the future, the input lines for contacts will be dynamically generated as a user types in each line.

## Installation

`npm install`

## Usage
Run the following command at the root of your project.

`npm start`

## Contribution
Main Contributor:
- Adam Keyser (github.com/adamkeyser45)
