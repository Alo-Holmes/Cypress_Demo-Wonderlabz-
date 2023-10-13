describe('Check radio buttons', () => {
  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
  })

  it('Checks that only one radio button is checked', () => {
    cy.xpath('//*[@id="radio-btn-example"]/fieldset/label[1]/input').check().should('be.checked')
    cy.xpath('//*[@id="radio-btn-example"]/fieldset/label[2]/input').should('not.be.checked')
    cy.xpath('//*[@id="radio-btn-example"]/fieldset/label[3]/input').should('not.be.checked')
  })

  it('Checks that only radio button 2 is checked', () => {
    cy.xpath('//*[@id="radio-btn-example"]/fieldset/label[2]/input').check().should('be.checked')
    cy.xpath('//*[@id="radio-btn-example"]/fieldset/label[1]/input').should('not.be.checked')
    cy.xpath('//*[@id="radio-btn-example"]/fieldset/label[3]/input').should('not.be.checked')
  })

})