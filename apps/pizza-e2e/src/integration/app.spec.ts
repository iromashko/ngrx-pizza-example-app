describe('pizza', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should display home page', () => {
    cy.get('[data-cy=pizza__price]').contains('Price: $ 12');

    cy.get('[data-cy=add_pepperoni]')
      .contains('Add Pepperonni')
      .click()
      .contains('Remove Pepperonni');

    cy.get('[data-cy=pizza__price]').contains('Price: $ 15');
    cy.get('[data-cy=add_sausage]').click();
    cy.get('[data-cy=pizza__price]').contains('Price: $ 17.5');
    cy.get('[data-cy=add_pepperoni]').click();
    cy.get('[data-cy=pizza__price]').contains('Price: $ 14.5');
    cy.get('[data-cy=add_sausage]').click();
    cy.get('[data-cy=pizza__price]').contains('Price: $ 12');
  });
});
