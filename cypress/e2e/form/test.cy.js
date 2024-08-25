describe('test de formulario', () => {

    it('Visitar pagina', () => {
      cy.visit('https://demoqa.com/');
      cy.get('h5').contains('Elements').click();
      cy.get('span').contains('Forms').click();
      cy.get('span').contains('Practice Form').click();
      cy.get('#FirstName').type('Juan C');
      cy.get('#FirstName').clear();
 

    })
  })