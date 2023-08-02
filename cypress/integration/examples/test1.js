describe('Google Homepage Test', () => {
    it('should navigate to Google', () => {
      // Navigate to Google
      cy.visit('https://www.google.com/');
  
      // Assert that the title contains "Google"
      cy.title().should('contain', 'Google');
    });
  });
  