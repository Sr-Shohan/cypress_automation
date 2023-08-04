describe('Google Homepage Test', () => {
    it('should navigate to Google', () => {
      // Navigate to Google
      cy.visit('https://www.google.com/');
      debugger;
      // Assert that the title contains "Google"
      cy.title().should('contain', 'Google');
      cy.get('#APjFqb').type("wow man")
      cy.get('#APjFqb').type('{enter}')
    });
  })