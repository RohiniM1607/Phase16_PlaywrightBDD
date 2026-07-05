Feature: Register User

Scenario: Register a new user with valid credentials

Given User launches Automation Exercise application
When User navigates to Signup Login page
And User enters new user details
And User completes registration form
Then User account should be created successfully