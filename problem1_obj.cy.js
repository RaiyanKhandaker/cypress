class Objects
{
    txtName =  "input[placeholder='Name']";
    txtEmail = "input[data-qa='signup-email']";
    btnSignup = "button[data-qa='signup-button']";
    nvgSignup = "a[href='/login']";
    radioMr = "#id_gender1";
    radioMrs = "#id_gender2";
    txtPass = "#password";
    dobDate = "#days";
    dobMonth = "#months";
    dobYear = "#years";
    txtFirstName = "#first_name";
    txtLastName = "#last_name";
    checkboxNews = "#newsletter";
    checkboxOptin = "#optin";
    txtCompany = "#company";
    txtAddress1 = "#address1";
    txtAddress2 = "#address2";
    dropdownCountry = "#country";
    txtState = "#state";
    txtCity = "#city";
    txtZip = "#zipcode";
    txtMobile = "#mobile_number";
    btnCreateAccount = "button[data-qa='create-account']";
    btnContinue = ".btn.btn-primary";
    nvgProducts = "a[href='/products']";
    mouseoverProduct = ':nth-child(3) > .product-image-wrapper > .single-products > .productinfo';
    btnMouseoverAddToCart = ':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn';
    btnPopupContinue = ".btn.btn-success.close-modal.btn-block";
    btnViewProduct = "a[href='/product_details/2']";
    btnAddToCart = "button[type='button']";
    btnPopupViewCart = "body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2) > a:nth-child(1) > u:nth-child(1)";
    btnProceedToCheckout = ".btn.btn-default.check_out";
    txtComment = "textarea[name='message']";
    txtNameOnCard = "input[name='name_on_card']";
    txtCardNumber = "input[name='card_number']";
    txtCVC = "input[placeholder='ex. 311']";
    txtExpireMonth = "input[placeholder='MM']";
    txtExpireYear = "input[placeholder='YYYY']"; 
    btnConfirm = "#submit";


    
    navigateSignup()                                                        //navigates to Signup Page
    {
        cy.get(this.nvgSignup).click();

    }

    verifyLoginSignupPage()                                                 //Verifies Login/Signup Page loaded
    {
        cy.title().should('eq', 'Automation Exercise - Signup / Login')

    }

    setName(name)                                                           //sets name in text area
    {
        cy.get(this.txtName).type(name);

    }


    setEmail(email)                                                         //sets email in text area
    {
        cy.get(this.txtEmail).type(email);

    }

    clickSignupButton()                                                     //clicks Signup button
    {
        cy.get(this.btnSignup).click();

    }

    verifySignupPage()                                                      //verifies signup page
    {
        cy.title().should('eq', 'Automation Exercise - Signup');

    }

    setRadioButtonMale()                                                    //selects Mr/male radia button
    {
    
        cy.get(this.radioMr).should('be.visible');
        cy.get(this.radioMrs).should('be.visible');

        cy.get(this.radioMr).check().should('be.checked');
        cy.get(this.radioMrs).should('not.be.checked');

    }

    setRadioButtonFemale()                                                  //selects Mrs/female radio button
    {
    
        cy.get(this.radioMr).should('be.visible');
        cy.get(this.radioMrs).should('be.visible');
    
        cy.get(this.radioMrs).should('be.checked');
        cy.get(this.radioMr).check().should('not.be.checked');
    
    }

    setPassword(pass)                                                      //sets password in text area
    {
        cy.get(this.txtPass).type(pass);
    }

    setDOB(date, month, year)                                              //selects date/month/year from drop down
    {
        cy.get(this.dobDate).select(date);
        cy.get(this.dobMonth).select(month);
        cy.get(this.dobYear).select(year);
    }

    setNewsLetter()                                                         //selects and checks newsletter checkbox
    {
        cy.get(this.checkboxNews).check().should('be.checked');
        
    }

    setOptin()                                                              //selects and checks optin checkbox
    {
        cy.get(this.checkboxOptin).check().should('be.checked');

    }

    setFirstName(firstName)                                                 //sets first name in text area
    {
        cy.get(this.txtFirstName).type(firstName);
    }

    setLastName(lastName)                                                   //sets last name in text area
    {
        cy.get(this.txtLastName).type(lastName);
    }

    setCompany(company)                                                     //sets company name in text area
    {
        cy.get(this.txtCompany).type(company);
    }

    setAddress1(address1)                                                   //sets address in text area
    {
        cy.get(this.txtAddress1).type(address1);
    }

    setAddress2(address2)                                                   //sets address in text area
    {
        cy.get(this.txtAddress2).type(address2);
    }

    setCountry(country)                                                     //selects and checks country from drop down 
    {
        cy.get(this.dropdownCountry).select(country).should('have.value', country);
    }

    setState(state)                                                         //sets state name in text area
    {
        cy.get(this.txtState).type(state);
    }

    setCity(city)                                                           //sets city name in text area
    {
        cy.get(this.txtCity).type(city);
    }

    setZipCode(zip)                                                         //sets zip code in text area
    {
        cy.get(this.txtZip).type(zip);
    }

    setMobileNumber(mobile)                                                 //sets mobile number in text area
    {
        cy.get(this.txtMobile).type(mobile);
    }

    clickCreateAccountButton()                                              //clicks create account button
    {
        cy.get(this.btnCreateAccount).click();
    }

    verifyAccountCreatedPage()                                              //verifies account created page
    {
        cy.title().should('eq', 'Automation Exercise - Account Created');

    }

    clickContinueButton()                                                   //clicks continue button
    {
        cy.get(this.btnContinue).click();
    }

    navigateProducts()                                                      //navigates to products page
    {
        cy.get(this.nvgProducts).click();

    }

    verifyProductsPage()                                                    //verifies products page
    {
        cy.title().should('eq', 'Automation Exercise - All Products');

    }

    selectProductMouseover()                                                //selects product using mouseover and clicks the add to cart button
    {
        cy.get(this.mouseoverProduct).trigger('mouseover').should('be.visible');
        cy.get(this.btnMouseoverAddToCart).click({ force: true });
        cy.get(this.btnPopupContinue).click();

    }

    selectProductManual()                                                   //manually clicks view product and navigates to product details and clicks add to product
    {
        cy.get(this.btnViewProduct).click();
        cy.title().should('eq', 'Automation Exercise - Product Details');
        cy.get(this.btnAddToCart).click();
        cy.get(this.btnPopupViewCart).click();
    }

    verifyCheckoutPage()                                                    //verifies checkout page
    {
        cy.title().should('eq', 'Automation Exercise - Checkout');

    }

    clickProceedToCheckoutButton()                                           //clicks proceed to checckout button
    {
        cy.get(this.btnProceedToCheckout).click();
    }

    

    setComment(comment)                                                       //sets comment in text area
    {
        cy.get(this.txtComment).type(comment);
    }

    clickPlaceOrderButton()                                                  //clicks place order button
    {
        cy.get(this.btnProceedToCheckout).click();
    }

    verifyPaymentPage()                                                      //verifies payment page
    {
        cy.title().should('eq', 'Automation Exercise - Payment');

    }


    setNameOnCard(nameoncard)                                                 //sets name on card in text area
    {
        cy.get(this.txtNameOnCard).type(nameoncard);
    }

    setCardNumber(cardnumber)                                               //sets card number in text area
    {
        cy.get(this.txtCardNumber).type(cardnumber);
    }

    setCVC(cvc)                                                             //sets cvc in text area
    {
        cy.get(this.txtCVC).type(cvc);
    }

    setExpiration(mm, yyyy)                                                 //sets expiration date and year in text area
    {
        cy.get(this.txtExpireMonth).type(mm);
        cy.get(this.txtExpireYear).type(yyyy);
    }

    clickConfirmButton()                                                    //clicks confirm button
    {
        cy.get(this.btnConfirm).click();
    }

    verifyOrderPlacedPage()                                                 //verifies order placed page
    {
        cy.title().should('eq', 'Automation Exercise - Order Placed');
    }


}

export default Objects;