describe('E2E testing', function() {
  it('Should load data from server docker container', function() {

  	cy.visit("http://localhost:3000");

    cy.contains("Welcome to React").should('be.visible');
  })
})