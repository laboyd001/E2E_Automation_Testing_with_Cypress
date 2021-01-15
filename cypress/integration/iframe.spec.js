
context('Actions', () =>{
    BeforeEach(() => {
        cy.visit('/iframeapp.html')
    })

    it("Perform iFrame data entry", () => {
        cy.get("#txtName").type("Cypress")

        cy.get("#frame").then($iframe => {
            const $body = $iframe.contents().find('body')
            cy.wrap($body).as('iframe')
        })

        cy.get("@iframe").find("#txtNameWithiniFrame").type("text within iframe")
    })
})

