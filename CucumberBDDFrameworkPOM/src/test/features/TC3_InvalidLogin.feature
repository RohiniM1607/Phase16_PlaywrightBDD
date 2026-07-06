Feature: Login

    Background: 
        Given User launches Automation Exercise application
        Then User verifies that home page is visible

    Scenario: Login using invalid credentials
        When User navigates to Signup Login page
        And User enters invalid login credentials
        Then Error message should be displayed