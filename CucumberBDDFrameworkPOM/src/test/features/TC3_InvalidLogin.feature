Feature: Login

Scenario: Login using invalid credentials

Given User launches Automation Exercise application
When User navigates to Signup Login page
And User enters invalid login credentials
Then Error message should be displayed