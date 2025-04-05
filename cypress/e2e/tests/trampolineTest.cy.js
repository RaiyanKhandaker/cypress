// trampolineTest.cy.js
// Test file for the Otto.de trampoline purchase scenario

import OttoActions from './OttoActions';

describe('Otto Trampoline Purchase Test', () => {
  const actions = new OttoActions(); // Create an instance of OttoActions

  it('Searches for a trampoline, sorts, filters, adds to cart, and verifies', () => {
    // Step 1: Go to the homepage
    actions.visitHomePage();

    // Step 2: Search for "trampolin"
    actions.searchFor('trampolin');
    cy.wait(5000);
    cy.get('#onetrust-accept-btn-handler').click();

    // Step 3: Sort results by highest price
    actions.sortBy(); // Use actual dropdown value

    // Step 4: Check if first 5 products are sorted by price descending
    actions.getFirstNProductPrices(5).then(prices => {
      let sortedPrices = [...prices].sort((a, b) => b - a); // Sort in descending order
      expect(prices).to.deep.equal(sortedPrices); // Verify sorting
    });

    // // Step 5: Apply price filter between 500 € and 1000 €
    actions.applyPriceFilter();
  // Add debugging logs
  cy.log('Min price input found:');
  actions.page.minPriceInput().should('exist');
  cy.log('Max price input found:');
  actions.page.maxPriceInput().should('exist');

    // // Step 6: Get details of the first product and click it
    // let expectedProduct;
    // actions.getProductDetails(0).then(details => {
    //   expectedProduct = details; // Save product details for later comparison
    //   actions.clickOnProduct(0); // Go to product page
    // });

    // // Step 7: Add the product to the cart
    // actions.addToCart();

    // // Step 8: Go to the cart page
    // cy.get('a[href*="/cart"]').click(); // Adjust selector for cart link

    // // Step 9: Verify the product in the cart matches the selected one
    // actions.getFirstCartItemDetails().then(details => {
    //   expect(details.name).to.equal(expectedProduct.name); // Check name
    //   expect(details.price).to.equal(expectedProduct.price); // Check price
    // });
  });
});