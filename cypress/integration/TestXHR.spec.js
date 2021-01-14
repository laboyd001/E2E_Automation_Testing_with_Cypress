/// <reference types="Cypress" />

describe("Test LamdaTest Website XHR", () => {
  beforeEach("Navigate to LambdaTest", () => {
    cy.visit("https://accounts.lambdatest.com/login");
  });

  it("Perform Login and verify XHR", () => {

    //start the server
    cy.server()

    cy.route({
        method:'GET',
        url:'/api/user/checkOrgChange'
        //store in alias 'team'
    }).as('team')

    cy.route({
        method:'GET',
        url:'/api/user/organization/automation-test-summary'
    }).as('apicheck')

    cy.fixture("lamdaUser").as("lamdauser");

    cy.get("@lamdauser").then((lamdauser) => {
      cy.get("[name='email']").debug().type(lamdauser.UserName);
      cy.get("[name='password']").debug().type(lamdauser.Password, { log: false });
    });

    cy.get('.btn').click()

    cy.get("@team").then((xhr) => {
       expect(xhr.status).to.eql(200)
    })

    //traffic interception - Expilict Assertion
    cy.get("@apicheck").then((xhr) => {
        expect(xhr.status).to.eql(200)
        expect(xhr.response.body).to.have.property("maxQueue", 10)
     })

    //implicit assertion
     cy.get("@apicheck").its('response.body').should('have.property', 'maxQueue').and('eql', 10)
  });

  it('Verify lambda test cookies', () => {
    cy.fixture("lamdaUser").as("lamdauser");

    cy.get("@lamdauser").then((lamdauser) => {
      cy.get("[name='email']").debug().type(lamdauser.UserName);
      cy.get("[name='password']").debug().type(lamdauser.Password, { log: false });
    });

    cy.get('.btn').click() 

    cy.getCookie('user_id').should('have.property', 'value', '370663')
  })
});
