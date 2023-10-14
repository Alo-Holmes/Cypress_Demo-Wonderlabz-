describe('Show/Hide Element', () => {
beforeEach(() => {
  cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
})

  it('Validates that the element is hidden', () => {

    cy.xpath('//*[@id="hide-textbox"]').click()
    cy.xpath('//*[@id="displayed-text"]').should('not.be.visible')
  })

  it('Validates that the element is shown', () => {
    
    cy.xpath('//*[@id="show-textbox"]').click()
    cy.xpath('//*[@id="displayed-text"]').should('be.visible')

  })
})