describe('Dsp Testing', ()=>{
    it("Login Functionality ", ()=>{
        cy.visit('https://dsp-stage.eskimi.com/')
        cy.get('#username').type('###')
        cy.get('#password').type('###')
        cy.get('input[type="submit"]').click()
    })
})