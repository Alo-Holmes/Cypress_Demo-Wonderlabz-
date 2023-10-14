describe('Iframe', () => {
  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
  })
  it('Locates an iframe and interacts with an element', () => {
    
    const iframe=cy.get('#courses-iframe')
      .its('0.contentDocument.body')
      .should('be.visible')
      .then(cy.wrap);

      iframe.xpath('/html/body/div/header/div[2]/div/div/div[2]/div[1]/a').should('be.visible')
     
      });
    })
