Feature: Search Product

    Background: 
        Given User launches Automation Exercise application
        Then User verifies that home page is visible
    Scenario: Verify user can search for a product
        When User clicks on Products button
        Then All Products page should be displayed
        When User searches for the product
            | product |
            | Blue    |
        Then Searched Products section should be displayed
        And User should see only related products