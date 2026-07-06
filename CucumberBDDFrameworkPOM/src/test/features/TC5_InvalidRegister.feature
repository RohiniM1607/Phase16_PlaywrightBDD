Feature: Register Existing User

    Background: 
        Given User launches Automation Exercise application
        Then User verifies that home page is visible

    Scenario: Register using already existing email
        Given User launches Automation Exercise application
        When User navigates to Signup Login page
        And User enters existing email
        Then Existing email error should be displayed