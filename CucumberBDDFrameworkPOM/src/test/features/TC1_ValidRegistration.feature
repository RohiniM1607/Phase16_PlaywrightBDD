Feature: Register User

    Background: 
        Given User launches Automation Exercise application
        Then User verifies that home page is visible

    Scenario: Register a new user with valid credentials
        When User navigates to Signup Login page
        And User enters new user details
        And User completes registration form
        Then User account should be created successfully