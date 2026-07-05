Feature: Register to Tutorials Ninja Application
  
  	Background:
	Given User is on TutorialsNinja Application
	When User clicks on Register link

    Scenario: Register with valid credentials
    And User enter the firstname as "Example"
    And User enter the lastname as "1"
    And User enter the register email as "example.2@gmail.com"
    And User enter the phone number as "9837267024"
    And User enter the register user password as "Example@123"
    And User enter the confirmpassword as "Example@123"
    And User check the privacy policy
    And User click continue button
    Then register should success

    Scenario: Register with invalid credentials
    And User enter the firstname as "Demo"
    And User enter the lastname as "1"
    And User enter the email as "demo.1@gmail.com"
    And User enter the phone number as "9837267024"
    And User enter the register password as "Demo@123"
    And User enter the confirmpassword as "Demo@123"
    And User check the privacy policy
    And User click continue button
    Then Register error should display
	