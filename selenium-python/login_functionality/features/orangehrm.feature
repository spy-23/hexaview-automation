Feature: OrangeHRM Login Functionality

  Scenario: Valid Login
    Given the user is on the login page
    When the user enters valid credentials
    Then the user should be redirected to the dashboard

  Scenario: Invalid Login
    Given the user is on the login page
    When the user enters invalid credentials
    Then an error message should be displayed

  Scenario: Logout
    Given the user is logged in
    When the user clicks logout
    Then the user should be redirected to the login page

  Scenario: Dashboard Access Check
    Given the user is logged in
    When the user navigates to the dashboard
    Then the dashboard should be displayed correctly
