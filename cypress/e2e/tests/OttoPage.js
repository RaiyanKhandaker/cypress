// OttoPage.js
// This class holds all element selectors for the Otto.de website



class OttoPage {
  // Home Page Elements
  searchInput() {
    return cy.get('input[placeholder="Wonach suchst du?"]', { timeout: 10000 }); // Search field
  }

  searchButton() {
    return cy.get('.squirrel_submit-button.squirrel_searchbar__submit.js_squirrel_searchbar__submit.svelte-pzi74f.squirrel_active'); // Search button
  }

  // Search Results Page Elements
  sortDropdown() {
    return cy.get('#heureka_desktopSorting--select--cloned'); // Dropdown to sort results
  }

  productItems() {
    return cy.get('.product'); // List of product items
  }

  price(){
    return cy.get('div[data-filter-id="preis"] dt[class="pl_accordion__header"]'); // Price filter
    // pl_accordion__header pl_accordion__header--open
    //div[data-filter-id="preis"] dt[class="pl_accordion__header"]
  }

  minPriceInput() {
    return cy.get('div[data-filter-id="preis"] input[id^="hc_minMax__min"]', { timeout: 10000 });
    // Min price filter input
  }

  maxPriceInput() {
    return cy.get('div[data-filter-id="preis"] input[id^="hc_minMax__max"]', { timeout: 10000 });
  }

  applyFilterButton() {
    return cy.get('dd[class="pl_accordion__content heureka_filterAccordion__content retailprice"] button:nth-child(1)'); // Apply filter button
    //dd[class='pl_accordion__content heureka_filterAccordion__content retailprice'] button:nth-child(1)
  }

  // Product Detail Page Elements
  addToCartButton() {
    return cy.get('button[data-qa="add-to-cart"]'); // Add to cart button
  }

  // Cart Page Elements
  cartItems() {
    return cy.get('.cart-item'); // List of items in the cart
  }
}

export default OttoPage;