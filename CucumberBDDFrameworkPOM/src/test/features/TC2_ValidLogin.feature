Feature: Login

    Background: 
        Given User launches Automation Exercise application
        Then User verifies that home page is visible

    Scenario: Login using valid credentials
        When User navigates to Signup Login page
        And User enters valid login credentials
        Then User should be logged in successfully