describe('Prueba en el sitio web Nimia', () => {
  beforeEach(() => {
    cy.visit('https://app.nimia.com/search/?page=1&limit=60&order_by=-rating');
    
    // Aceptar las cookies si existe el botón
    cy.get('#hs-eu-confirmation-button').click({ force: true });
  });

  it('Realiza búsquedas y verifica los resultados', () => {
    // Búsqueda de "plane"
    cy.get('input[name="q"]').type('plane');
    cy.get('input[name="q"]').type('{enter}'); // Presionar tecla Enter
    
    // Verificar que el elemento .results-title contiene la palabra "plane"
    cy.get('.results-title').should('contain', 'plane');

    cy.wait(5000); // Esperar 5 segundos
    
    // Búsqueda de "coffee"
    cy.get('input[name="q"]').clear().type('penguin');
    cy.get('input[name="q"]').type('{enter}'); // Presionar tecla Enter
    
    // Verificar que el elemento .results-title contiene la palabra "penguin"
    cy.get('.results-title').should('contain', 'penguin');

     // Finalizar la ejecución
     return false;
  });
});

