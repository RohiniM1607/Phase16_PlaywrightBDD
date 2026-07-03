Feature: Login to Tutorials Ninja Application
	
	Background:
	Given User is on TutorialsNinja Application
	When User clicks on Login link

    Scenario: Login with valid credentials
        And User enter the login email as "demo1.123@gmail.com"
        And User enter the login password as "Demo@123"
        And User clicks on the login button
        Then Login should be success

    Scenario: Login with invalid credentials
        And User enter the login email as "demo@gmail.com"
        And User enter the login password as "Demo@123"
        And User clicks on the login button
        Then Login error message should display
