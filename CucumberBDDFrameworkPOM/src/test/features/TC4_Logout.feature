Feature: Logout

Scenario: Logout after login

Given User logged into application
When User clicks Logout
Then User should be redirected to Login page