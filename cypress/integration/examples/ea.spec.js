/// <reference types="Cypress" />


describe('Testing of EA App', () => {

    it('Login application', () => {

        cy.visit('http://eaapp.somee.com/')

        cy.get("#loginLink").then(($link) => {
            const linkText = $link.text()
            expect(linkText).is.eql('Login')
        }).click()

        cy.url().should("include", "/Account/Login")

        cy.get('#UserName').type("admin");
        cy.get('#Password').type('password')

        cy.get('.btn').click()

        //click the employee list
        cy.contains('Employee List').click()

        //identify table element
        cy.get('.table').find('tr > td')
        //check for Prashanth
        .contains('Prashanth').parent()
        //get associated Benefit and then click
        .contains('Benefits').click()
    })

})