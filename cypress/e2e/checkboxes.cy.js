describe('template spec', () => {
  beforeEach(() => {
    
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
  })

  it('Validate all checkboxes are checked', () => {
    cy.get('#checkBoxOption1').check().should('be.checked')
    cy.get('#checkBoxOption2').check().should('be.checked')
    cy.get('#checkBoxOption3').check().should('be.checked')
  })

  it('validare that the first checkbox is unchecked',() =>{
    cy.get('#checkBoxOption1')
    .check().should('be.checked')

    cy.get('#checkBoxOption2')
    .check().should('be.checked')
    cy.get('#checkBoxOption3')
    .check().should('be.checked')


    cy.get('#checkBoxOption1').uncheck()
    cy.get('#checkBoxOption2').should('be.checked')
    cy.get('#checkBoxOption3').should('be.checked')
  })
})