Feature: Logout

    Background: 
        Given User launches Automation Exercise application
        Then User verifies that home page is visible

    Scenario: Logout after login
        Given User logged into application
        When User clicks Logout
        Then User should be redirected to Login page