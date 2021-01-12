/// <reference types="Cypress" />


describe('Testing of EA App', () => {

    it('Login application', () => {



        cy.visit('http://eaapp.somee.com/')


        //longhand way of working with promise (Closure)
        // cy.get("#loginLink").then(($link) => {
        //     return $link.text()
        // }).as('linkText')

        //shorthand way of working with promise using .invoke
         cy.get("#loginLink").invoke('text').as('linkText')

        cy.contains('Login').click()

        cy.get('@linkText').then(($x) => {
            expect($x).is.eql('Login')
        })


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