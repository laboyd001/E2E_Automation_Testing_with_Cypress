/// <reference types="Cypress" />

describe('Test EA Application', () => {

    before('Login to application', () => {
        //visiting website
        cy.visit('http://eaapp.somee.com/')

        //grabbing creds from fixture file
        cy.fixture("eauser").as("user")
    })

    it('Performing Benefit Check', () => {


        //shorthand way of working with promise using .invoke
         cy.get("#loginLink").invoke('text').as('linkText')

        cy.contains('Login').click()

        cy.get('@linkText').then(($x) => {
            expect($x).is.eql('Login')
        })


        cy.url().should("include", "/Account/Login")

        cy.get('@user').then((user)=> {
            cy.get('#UserName').type(user.UserName)
            cy.get('#Password').type(user.Password)
        })

        cy.get('.btn').click()

        //click the employee list
        cy.contains('Employee List').click()

        //verify the value from a property
        cy.wrap({name:'Karthik'}).should('have.property','name').and('eq', 'Karthik')

        //using wrap
        cy.get('.table').find('tr > td').then(($td) => {
            cy.wrap($td).contains('John').invoke('wrap').parent().contains('Benefits').click()
        })

    })
})