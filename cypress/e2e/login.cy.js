
const locators = require('../fixtures/locators.json')
describe('login test', () => {
  beforeEach(() => {
    cy.visit('https://gallery-app.vivifyideas.com')
    cy.get(locators.header.loginBtn).click()
  })

  it('login using spaces as credentials', () => {
    cy.get(locators.login.emailInput).type('      ')
    cy.get(locators.login.passwordInput).type('      ')
    cy.get(locators.login.submitBtn).click()
  })
  it('login with wrong email', () => {
    cy.get(locators.login.emailInput).type('fkwd12@gmail.com')
    cy.get(locators.login.passwordInput).type('ee12345678')
    cy.get(locators.login.submitBtn).click()

  })
  it('login with wrong password', () => {
    cy.get(locators.login.emailInput).type('obrenovicigor14.25+po@gmail.com')
    cy.get(locators.login.passwordInput).type('dfvd3')
    cy.get(locators.login.submitBtn).click()
  })
  it('loginwith wrong email and wrong password', () => {
    cy.get(locators.login.emailInput).type('ppppp')
    cy.get(locators.login.passwordInput).type('444')
    cy.get(locators.login.submitBtn).click()
  })
  it('login with valid credentials', () => {
    cy.get(locators.login.emailInput).type('obrenovicigor14.25+po@gmail.com')
    cy.get(locators.login.passwordInput).type('ee12345678')
    cy.get(locators.login.submitBtn).click()
    cy.get(locators.header.logoutBtn).click()
  })

})


