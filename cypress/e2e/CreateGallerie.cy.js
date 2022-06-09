
import { createGallerie } from "../pageObjects/creategallerieObject.js";
const faker = require('@faker-js/faker');

const locators=require('../../cypress/fixtures/locators.json')


describe('Create Gallerie', ()=>{
  beforeEach('user must be logedin', ()=>{
    cy.visit('https://gallery-app.vivifyideas.com/login')
    cy.get(locators.login.emailInput).type('obrenovicigor14.25+po@gmail.com')
    cy.get(locators.login.passwordInput).type('ee12345678')
    cy.get(locators.login.submitBtn).click()
    cy.wait(3000)
    cy.visit('https://gallery-app.vivifyideas.com/create')
  })
  it('Should contain the title', ()=>{
    createGallerie.GallerieTitle.should('have.text','Create Gallery')
  })
  it('Create gallerie with valid form ', ()=>{
    createGallerie.TitleINput.type(faker.name.jobTitle())
    createGallerie.Description.type(faker.lorem.sentence(5))
    createGallerie.ImageUrlInput.type('https://grupovina.rs/upload/iblock/3fa/3fa18f2f05fd3d8d1389dd3872f32afb.jpg')
    createGallerie.SubmitBtn.click()
  })
  

})
