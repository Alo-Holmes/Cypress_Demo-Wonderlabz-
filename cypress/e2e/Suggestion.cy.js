describe('template spec', () => {
beforeEach(() => {
  cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
})

  it('Handle auto suggestion', () => {

    cy.get('#autocomplete').should('be.visible')
    cy.get('#autocomplete').type('South')
    cy.xpath('//*[@id="gf-BIG"]').should('be.visible')
    cy.contains('South Africa').click()

    cy.get('#autocomplete').clear()

    cy.get('#autocomplete').type('Republic')
    cy.get('#autocomplete').type('{downarrow}','{enter}')
    //cy.contains('Central African Republic').should('be.visible').click()
    
   

    })
    
  })

  // it('Selects the suggestion field and selects the first entry from list', () => {
  //   cy.xpath('//*[@id="autocomplete"]').should('be.visible')
  //   cy.xpath('//*[@id="autocomplete"]').clear()
  //   cy.xpath('//*[@id="autocomplete"]').type('Republic')
  //   cy.xpath('//*[@id="autocomplete"]').select('')
  // })
