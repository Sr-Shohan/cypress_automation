describe('Browser ACtions', ()=>{
    it("should load correct url", ()=>{
        cy.visit('https://dsp.eskimi.com')
        cy.url().should('include', 'eskimi.com')

    })
})