describe('Home page', ()=>{
    it('search item and check select' , ()=>{
        cy.visit('http://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.products').find('.product').should('have.length', 4)
        cy.get('.search-keyword').should('have.value', 'ca')
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('.products').find('.product').each(($el)=>{
        let textveg= $el.find('h4.product-name').text()
            if(textveg.includes('Cashews')){
               cy.wrap($el).find('button').click()
            }


        })
    })
})