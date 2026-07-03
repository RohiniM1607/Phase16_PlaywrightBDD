Feature: User Registration tests
  
    Background: 
        Given User navigated to the application
        And User clicks the Account menu
        And User click on the register link

    Scenario: Valid registration
        And User enter the first name as "Admin"
        And User enter the last name as "1"
        And User enter the Email as "admin987admin45@gmail.com"
        And User enter the telephone as "1234567890"
        And User enter the Password as "Admin@123"
        And User enter the conform password as "Admin@123"
        And User click the policy check box
        When User click on the continue button
        Then success should be displayed