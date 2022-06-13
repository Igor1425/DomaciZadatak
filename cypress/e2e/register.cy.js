
const faker = require('@faker-js/faker');

const podaci = {

    firstName : faker.name.firstName(),
    lastName : faker.name.lastName(),
    email : faker.internet.email(),
    password :faker.internet.password()
    
    }

describe('register test', ()=>{
   
    beforeEach('visit register page', ()=>{
        cy.visit('https://gallery-app.vivifyideas.com/register');
        cy.url().should('include','/register')
    })
    it('password <8 characters',()=>{
        cy.get('#first-name').type(faker.name.firstName())
        cy.get('#last-name').type(faker.name.lastName())
        cy.get('#email').type(faker.internet.email())
        cy.get('#password').type('ee22')
        cy.get('#password-confirmation').type('ee22')
        cy.get('[type="checkbox"]').check()
        cy.get('[type="submit"]').click()

        cy.url().should('include','/register')
        cy.get('p[class="alert alert-danger"]').eq(0).should('have.text', 'The password must be at least 8 characters.');
                                                                           
    })
    it('email without @', ()=>{
        cy.get('#first-name').type(faker.name.firstName())
        cy.get('#last-name').type(faker.name.lastName())
        cy.get('#email').type('obrenovicigor+po14.25gmail.com')
        cy.get('#password').type(podaci.password)
        cy.get('#password-confirmation').type(podaci.password)
        cy.get('[type="checkbox"]').check()
        cy.get('[type="submit"]').click()
        cy.url().should('include','/register')

    })
it('email without .com', ()=>{
    cy.get('#first-name').type(faker.name.firstName())
    cy.get('#last-name').type(faker.name.lastName())
    cy.get('#email').type('obrenovicigor14.25@gmail')
    cy.get('#password').type(podaci.password)
    cy.get('#password-confirmation').type(podaci.password)
    cy.get('[type="checkbox"]').check()
    cy.get('[type = "submit"]').click()
    cy.url().should('include','/register')


})
it('empty first name', ()=>{
    cy.get('#first-name').type('   ')
    cy.get('#last-name').type(faker.name.lastName())
    cy.get('#email').type(faker.internet.email())
    cy.get('#password').type(podaci.password)
    cy.get('#password-confirmation').type(podaci.password)
    cy.get('[type="checkbox"]').check()
    cy.get('[type="submit"]').click()
    cy.url().should('include', '/register')


    
})

it('empty last name', ()=>{
    cy.get('#first-name').type(faker.name.firstName())
    cy.get('#last-name').type('   ')
    cy.get('#email').type(faker.internet.email())
    cy.get('#password').type(podaci.password)
    cy.get('#password-confirmation').type(podaci.password)
    cy.get('[type="checkbox"]').check()
    cy.get('[type="submit"]').click()
    cy.url().should('include', '/register')
})
it('register with 8 spaces in password', ()=>{
    cy.get('#first-name').type(faker.name.firstName())
    cy.get('#last-name').type(faker.name.lastName())
    cy.get('#email').type(faker.internet.email())
    cy.get('#password').type('        ')
    cy.get('#password-confirmation').type('        ')
    cy.get('[type="checkbox"]').check()
    cy.get('[type="submit"]').click()
    cy.url().should('include','/register')
})
it('register without checking tearms&conditiones', ()=>{
    cy.get('#first-name').type(faker.name.firstName())
    cy.get('#last-name').type(faker.name.lastName())
    cy.get('#email').type(faker.internet.email())
    cy.get('#password').type(podaci.password)
    cy.get('#password-confirmation').type(podaci.password)
    cy.get('[type="submit"]').click()
    cy.url().should('include','/register')
})
it('succsessful register', () => {
    cy.get('#first-name').type(faker.name.firstName())
    cy.get('#last-name').type(faker.name.lastName())
    cy.get('#email').type(faker.internet.email())
    cy.get('#password').type(podaci.password)
    cy.get('#password-confirmation').type(podaci.password)
    cy.get('[type="checkbox"]').check()
    cy.get('[type="submit"]').click()
    cy.url().should('include','/register')
})
})
