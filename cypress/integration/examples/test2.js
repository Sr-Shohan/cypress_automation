describe('Home page', ()=>{
    it('search item and check select' , ()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.search-keyword').should('have.value', 'ca')

    })
})