///<reference types="cypress"/>

describe('To automate E2E account creation for ACME site', () => {

    it('to enter the workflow code', () => {
        cy.get('#react-burger-menu-btn').click();
        cy.get(':nth-child(6) > .workflow-setting-screen > .setting').click();
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #filled-required').clear();
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #filled-required').type('v1741671588111289');
        cy.get('.MuiButtonBase-root').click();
        cy.get('.getStarted').click();
    });

    it('to enter first name and last name', () => {
        cy.get('#firstName').type('Kevin');
        cy.get('#surName').type('Harris');
        cy.get('.next-button > .MuiButton-label').click(); // First click
        cy.wait(500); // Ensure the action is completed
        cy.get('.next-button > .MuiButton-label').click(); // Second click
    });

    it('to enter email, phone number, country, and address details', () => {
        // Enter email and phone number
        cy.get('#email').type('kharris@yahoo.com');
        cy.get('#mobileNumber').type('3472636617');
        cy.get('.next-button > .MuiButton-label').click();
        cy.wait(500);
        cy.get('.next-button > .MuiButton-label').click();

        // Select country using dropdown and enter address details
        cy.get('#mui-component-select-country').click();
        cy.get("li[id='United States']").click();
        cy.get('#physicalAddress').type('5327 Lee Fall');
        cy.get('#city').type('East Pamelamouth');
        cy.get('#state').type('ME');
        cy.get('#zip').type('43665');
        cy.get('.next-button > .MuiButton-label').click();
    });

});
