Feature: User Authentication tests
  
    Background: 
        Given User navigates to the application
        And User click the Account menu
        And User click on the login link

    Scenario: Login should be success
        And User enter the email as "demo1.123@gmail.com"
        And User enter the password as "Demo@123"
        When User click on the login button
        Then My Account should be displayed

    Scenario: Login should not be success
        And User enter the email as "demo1.123@gmail.com"
        And User enter the empty password as ""
        When User click on the login button
        Then Login should be unsuccessful