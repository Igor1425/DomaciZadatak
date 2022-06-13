import { createGallerie } from "../pageObjects/creategallerieObject.js";
const faker = require('@faker-js/faker');
const locators = require('../../cypress/fixtures/locators.json')
describe('Create Gallerie', () => {

  beforeEach('user must be loged-in', () => {
    cy.visit('https://gallery-app.vivifyideas.com/login')
    cy.get(locators.login.emailInput).type('obrenovicigor14.25+po@gmail.com')
    cy.get(locators.login.passwordInput).type('ee12345678')
    cy.get(locators.login.submitBtn).click()
    cy.wait(3000)
    cy.visit('https://gallery-app.vivifyideas.com/create')
  })

  it('Should contain the title', () => {
    createGallerie.gallerieTitle.should('have.text', 'Create Gallery')
  })

  it('Create gallerie with valid form ', () => {
    createGallerie.titleINput.type(faker.name.jobTitle())
    createGallerie.description.type(faker.lorem.sentence(5))
    createGallerie.imageUrlInput.type('https://grupovina.rs/upload/iblock/3fa/3fa18f2f05fd3d8d1389dd3872f32afb.jpg')
    createGallerie.submitBtn.click()
    cy.url().should('not.contain', '/create')
  })

  it('Gallerie without title', () => {
    createGallerie.description.type(faker.lorem.sentence(4))
    createGallerie.imageUrlInput.type('https://upload.wikimedia.org/wikipedia/commons/2/23/Lake_mapourika_NZ.jpeg')
    createGallerie.submitBtn.click()
    cy.url().should('contain', '/create')
  })

  it('Gallerie without description', () => {
    createGallerie.titleINput.type(faker.name.jobTitle(5))
    createGallerie.imageUrlInput.type('https://www.kindpng.com/picc/m/87-876667_mario-kart-8-baby-characters-hd-png-download.png')
    createGallerie.submitBtn.click()
    cy.url().should('not.contain', '/create')
  })

  it('Just one caracter in title', () => {
    createGallerie.titleINput.type('M')
    createGallerie.description.type(faker.lorem.sentence(5))
    createGallerie.imageUrlInput.type('http://c.files.bbci.co.uk/16A38/production/_109482729_barcaaerial.jpg')
    createGallerie.submitBtn.click()
    createGallerie.errMsg.should('have.text', 'The title must be at least 2 characters.')
    cy.url().should('contain', '/create')
  })

  it('Title containing only spaces', () => {
    createGallerie.titleINput.type('       ')
    createGallerie.description.type(faker.name.jobType())
    createGallerie.imageUrlInput.type('https://pbs.twimg.com/media/BidCROTCAAM7SDo.jpg')
    createGallerie.submitBtn.click()
    createGallerie.errMsg.should('have.text', 'The title field is required.')
    cy.url().should('contain', '/create')
  })

  it('Create gallerie without image', () => {
    createGallerie.titleINput.type(faker.lorem.text(0))
    createGallerie.description.type(faker.lorem.text(0))
    createGallerie.submitBtn.click()
    cy.url().should('contain', '/create')
  })

  it('More than one Url in image input field', () => {
    createGallerie.titleINput.type(faker.lorem.word())
    createGallerie.description.type(faker.lorem.text())
    cy.wait(3000)
    createGallerie.imageUrlInput.type('https://pbs.twimg.com/media/BidCROTCAAM7SDo.jpg' + 'https://wannabemagazine.com/wp-content/uploads/2012/05/631.jpg')
    createGallerie.submitBtn.click()
    cy.wait(3000)
    cy.url().should('not.contain', '/create')
  })

  it('Wrong format of image', () => {
    createGallerie.titleINput.type(faker.lorem.text(4))
    createGallerie.description.type(faker.lorem.text(4))
    createGallerie.imageUrlInput.type('https://pbs.twimg.com/media/BidCROTCAAM7SDo.mp4')
    createGallerie.submitBtn.click()
    createGallerie.errMsg.should('have.text', 'Wrong format of image')
    cy.url().should('contain', '/create')
  })

  it('Non-existing Url, but valid form', () => {
    createGallerie.titleINput.type(faker.lorem.text(0))
    createGallerie.description.type(faker.lorem.text(0))
    createGallerie.imageUrlInput.type('https://univ.money/observatory.jpg')
    cy.wait(3000)
    createGallerie.submitBtn.click()
    cy.url().should('not.contain', '/create')
  })

  it('Non-existing image', () => {
    createGallerie.titleINput.type(faker.lorem.text(0))
    createGallerie.description.type(faker.lorem.text(0))
    cy.wait(3000)
    createGallerie.imageUrlInput.type('https://image.shutterstock.com/image-vector/modern-minimal-404-error-page-600w-199043727.jpg')
    createGallerie.submitBtn.click()
    cy.url().should('not.contain', '/create')
  })

  it('Cancel gallerie creation when user filled out all input fields ', () => {
    createGallerie.titleINput.type(faker.lorem.sentence(5))
    createGallerie.description.type(faker.lorem.sentence(5))
    createGallerie.imageUrlInput.type('https://medisf.traasgpu.com/ifis/e6f6b6fcfa0d3635.jpg')
    createGallerie.cancelBtn.click()
    cy.url().should('not.contain', '/create')
  })

  it('Do not fill any input field', () => {
    createGallerie.submitBtn.click()
  })

  it('Use add image button', () => {
    createGallerie.titleINput.type(faker.lorem.sentence(5))
    createGallerie.description.type(faker.lorem.sentence(5))
    createGallerie.imageUrlInput.type('https://cenoteka.rs/assets/images/articles/coca-cola-500ml-1004714-large.jpg')
    createGallerie.addImage.click()
    createGallerie.upBtn.click()
    createGallerie.downBtn.click()
    createGallerie.submitBtn.click()
    cy.url().should('not.contain', '/create')
  })
})
