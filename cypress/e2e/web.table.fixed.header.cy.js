describe('Web Table Fixed Header', () => {
  beforeEach(() => {
  cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
  })

  it ('Validates data from a specific row', () => {

    cy.xpath('//*[@id="product"]/tbody/tr[6]').contains('Joe')
    cy.xpath('//*[@id="product"]/tbody/tr[6]').contains('Postman')
    cy.xpath('//*[@id="product"]/tbody/tr[6]').contains('46')
  })
  
  it('Validates the total amount collected is 296', () => {
      
    cy.get('.totalAmount').contains('Total Amount Collected: 296');
  });
  
  it ('validates the sum total amount', () => {

    let sum = 296;

cy.get('tbody td:nth-child(4)').each(($el) => {
  const amount = parseInt($el.text(), 10);

  if (!isNaN(amount)) {
    sum += amount;
  }
});

cy.log(`The sum total of the amount column is ${sum}.`);

      });
    });
    
    
  
  
 






