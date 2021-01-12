/// <reference types="Cypress" />


describe('Testing of EA App', () => {

    beforeEach('Call for a particular it block', () => {
        cy.visit('http://www.executeautomation.com/site')

    })

    it('Testing EA site for Assertion', () =>{

        // cy.get("[aria-label='jump to slide 2']",{timeout:60000}).should('have.class', 'ls-nav-actve')

        cy.get('.ct-holder-detail-container',{timeout:60000}).should(($x) => {
            expect($x).to.not.be.null
        })


    })

    it('Testing EA site for Assertion with hooks', () =>{

        // cy.get("[aria-label='jump to slide 2']",{timeout:60000}).should('have.class', 'ls-nav-actve')

        cy.get('.ct-holder-detail-container',{timeout:60000}).should(($x) => {
            expect($x).to.not.be.null
        })


    })


    it.skip('Login application', () => {



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
        // cy.get('.table').find('tr > td')
        // //check for Prashanth
        // .contains('Prashanth').parent()
        // //get associated Benefit and then click
        // .contains('Benefits').click()

        // //create alias named 'rows'
        // cy.get('.table').find('tr').as('rows')

        // cy.get('@rows').then(($row) => {
        //     cy.wrap($row).click({multiple:true})
        // })

        //verify the value from a property
        cy.wrap({name:'Karthik'}).should('have.property','name').and('eq', 'Karthik')

        //using wrap
        cy.get('.table').find('tr > td').then(($td) => {
            cy.wrap($td).contains('John').invoke('wrap').parent().contains('Benefits').click()
        })

    })

})