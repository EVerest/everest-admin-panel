describe('Connect-Screen', () => {
  it('should load connect screen by default', () => {
    cy.visit('/');
    cy.get('[data-cy="add-everest-instance"]').should('be.visible');
  });
});
