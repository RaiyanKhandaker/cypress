import Objects from "./problem1_obj.cy";


describe('automationexercise', () => {

    it('AETest', () => {
        
        
        cy.visit('https://automationexercise.com/')
        cy.wait(15000)

        const ln=new Objects();

        ln.navigateSignup();
        ln.verifyLoginSignupPage();
        ln.setName("Interview");
        ln.setEmail("yalj5sphf6@jkotypc12.com");                     //Single use temp-mail
        ln.clickSignupButton();
        ln.verifySignupPage();
        ln.setRadioButtonMale();
        ln.setPassword("Abcd@1234");
        ln.setDOB("1", "October", "1999");
        ln.setNewsLetter();
        ln.setOptin();
        ln.setFirstName("Raiyan");
        ln.setLastName("Khandaker");
        ln.setCompany("ABC");
        ln.setAddress1("Niketon");
        ln.setAddress2("Gulshan");
        ln.setCountry("India");
        ln.setState("Dhaka");
        ln.setCity("Dhaka");
        ln.setZipCode("1212");
        ln.setMobileNumber("01711200000");
        ln.clickCreateAccountButton();
        ln.verifyAccountCreatedPage();
        ln.clickContinueButton();
        ln.navigateProducts();
        ln.verifyProductsPage();
        ln.selectProductMouseover();
        ln.selectProductManual();
        ln.verifyCheckoutPage();
        ln.clickProceedToCheckoutButton();
        ln.setComment("ok");
        ln.clickPlaceOrderButton();
        ln.verifyPaymentPage();
        ln.setNameOnCard("Raiyan Khandaker");
        ln.setCardNumber("11111111111");
        ln.setCVC("111");
        ln.setExpiration("06","2028");
        ln.clickConfirmButton();
        ln.verifyOrderPlacedPage();
        ln.clickContinueButton();





    })

})