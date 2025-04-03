///<reference types = "cypress"/>

describe('To automate E2E account creation for ACME site',()=>{

 it('to enter the workflow code',()=>{
         cy.get('#react-burger-menu-btn').click();
         cy.get(':nth-child(6) > .workflow-setting-screen > .setting').click();
         cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #filled-required').clear();
         cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #filled-required').type('v1741671588111289');
         cy.get('.MuiButtonBase-root').click();
         cy.get('.getStarted').click();

        })

 it('to enter first name and last name',()=>{
        cy.get('#firstName').type('Kevin');
        cy.get('#surName').type('Harris');

        cy.get('.next-button > .MuiButton-label').should('not.be.disabled');
        cy.get('.next-button > .MuiButton-label').click();
        cy.get('.next-button > .MuiButton-label').click();



  // To enter email,phone number
        cy.get('#email').type('kharris@yahoo.com');
        cy.get('#mobileNumber').type('3472636617');
        cy.get('.next-button > .MuiButton-label').click();
         cy.get('.next-button > .MuiButton-label').click();


  //To select country using dropdown and state, city, zipCode, street
        cy.get('#mui-component-select-country').click()
        cy.get("li[id='United States']").click();
        cy.get('#physicalAddress').type('5327 Lee Fall');
        cy.get('#city').type('East Pamelamouth');
        cy.get('#state').type('ME');
        cy.get('#zip').type('43665');
        cy.get('.next-button > .MuiButton-label').click();
        cy.get('.next-button > .MuiButton-label').click();

         })


        });


