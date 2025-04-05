// OttoActions.js
// This class contains methods to perform actions using elements from OttoPage

import OttoPage from './OttoPage';

class OttoActions {
  constructor() {
    this.page = new OttoPage(); // Create an instance of OttoPage to access elements
  }

  // Visit the Otto.de homepage
  visitHomePage() {
    cy.visit('https://www.otto.de'); // Navigate to the site
    cy.url().should('include', 'otto.de'); // Confirm the page loaded
  }

  // Search for a specific item
  searchFor(item) {
    this.page.searchInput().type(item); // Enter search term
    this.page.searchButton().click(); // Click the search button
  }

  // Sort search results (e.g., by price descending)
  sortBy() {
    // this.page.sortDropdown().click(); // Select sorting option
    // this.page.get('#heureka_desktopSorting--select--cloned').select('preis-absteigend').should('have.text', 'Preis: höchster zuerst');
    this.page.sortDropdown().select('preis-absteigend').should('have.value', 'preis-absteigend');
    // cy.wait(2000); // Wait for results to update
  }

 

  // Get prices of the first N products
  getFirstNProductPrices(n) {
    return this.page.productItems().then($items => {
      let prices = [];
      for (let i = 0; i < n && i < $items.length; i++) {
        let price = $items[i]
          .querySelector('.price') // Adjust selector for price element
        prices.push(parseFloat(price));
      }
      return prices;
    });
  }


   // Filter products by price range
   applyPriceFilter() {
    // this.page.price().click();
    this.page.price().invoke('click');
    this.page.minPriceInput().should('be.visible').type('500', { force: true }); // Enter minimum price
    this.page.maxPriceInput().should('be.visible').type('1000', { force: true }); // Enter maximum price
    this.page.applyFilterButton().click(); // Apply the filter
    // this.page.wait(2000); // Wait for filter to take effect
  }

  // // Get details (name and price) of a product by its index
  // getProductDetails(index) {
  //   return this.page.productItems().eq(index).then($item => {
  //     let name = $item.find('.product-name').text().trim(); // Product name
  //     let price = $item.find('.price').text().trim(); // Product price
  //     return { name, price };
  //   });
  // }

  // // Click on a product to view its details
  // clickOnProduct(index) {
  //   this.page.productItems().eq(index).find('a').click(); // Click product link
  // }

  // // Add the selected product to the cart
  // addToCart() {
  //   this.page.addToCartButton().click(); // Click add to cart button
  //   cy.wait(2000); // Wait for cart to update
  // }

  // // Get details (name and price) of the first item in the cart
  // getFirstCartItemDetails() {
  //   return this.page.cartItems().first().then($item => {
  //     let name = $item.find('.product-name').text().trim(); // Cart item name
  //     let price = $item.find('.product-price').text().trim(); // Cart item price
  //     return { name, price };
  //   });
  // }
}

export default OttoActions;