Feature: User Registration tests
  
    Background: 
        Given User navigated to the application
        And User clicks the Account menu
        And User click on the register link

    Scenario: Valid registration
        And User enter the first name as "Example"
        And User enter the last name as "Ex"
        And User enter the Email as "example12.123@gmail.com"
        And User enter the telephone as "1234567890"
        And User enter the Password as "Example@123"
        And User enter the conform password as "Example@123"
        And User click the policy check box
        When User click on the continue button
        Then success should be displayed

    Scenario: Register with an existing email
        And User enter the first name as "Demo"
        And User enter the last name as "D"
        And User enter the Email as "demo.1@gmail.com"
        And User enter the telephone as "1234567890"
        And User enter the Password as "Demo@123"
        And User enter the conform password as "Demo@123"
        And User click the policy check box
        When User click on the continue button
        Then Existing account warning should be displayed    