describe('Test Demoqa Practice form section', () => {



    it('Test Registration new Student', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.url().should('include', 'demoqa');
        cy.get('#firstName').type('Aren')
        cy.get('#lastName').type('Arayan')
        cy.get('#userEmail').type('test@example.com')
        cy.get('[name="gender"]').check('Male', {force:true})
        cy.get('#userNumber').type(12345678)
        // cy.get('#hobbies-checkbox-1').check('1', {force:true})
        cy.get('[type="checkbox"]').check('2', {force:true})
        cy.get('#currentAddress-wrapper>div:nth-child(2)').type('First street')
        cy.get('[type="submit"]').click()
        cy.get('#example-modal-sizes-title-lg').should('be.visible')
        //cy.contains("Thanks for submitting the form")
        cy.get('#closeLargeModal').click({force:true})
        cy.get('.text-center').should('be.visible')

    })

    })



