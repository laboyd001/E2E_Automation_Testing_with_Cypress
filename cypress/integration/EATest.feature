Feature: EATest

I want to login

    @focus
    Scenario: Test the login feature
        Given I visit EA Site
        Given I click login link
        # And I login as user with "admin" and "password"
        Given I login as following
            | userName | Password |
            | admin    | password |