Feature: Register User

    Background: 
        Given User launches Automation Exercise application
        Then User verifies that home page is visible

    Scenario Outline: Contact Us Form
        When User clicks Contact Us
        Then GET IN TOUCH should be visible
        When User enters "<name>" "<email>" "<subject>" "<message>"
        And User uploads the file
        And User clicks Submit
        Then Contact form should be submitted successfully

        Examples:
            | name   | email              | subject | message                    |
            | Rohini | rohini@gmail.com   | Testing | Contact form testing       |
            | Demo   | demo@gmail.com     | Support | Need some help             |
            | John   | john@gmail.com     | Feedback| Excellent website          |