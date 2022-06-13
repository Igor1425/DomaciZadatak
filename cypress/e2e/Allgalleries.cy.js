import { navigation } from "../pageObjects/navigation.js";
import { allgalleriesPage } from "../pageObjects/allgalleriesPage.js";
describe('All Galleries', () => {
  beforeEach('all galleries page', () => {
    cy.visit('https://gallery-app.vivifyideas.com');
  })
  
  it('Should contain the fallowing', () => {
    allgalleriesPage.title.should('have.text', 'All Galleries')
  })

  it('Fill out search input field', () => {
    allgalleriesPage.search.type('sale')
    allgalleriesPage.filter.click()
    cy.wait(3000)
    allgalleriesPage.grid.find('div').its('length').should('be.gt', 1)
  })

  it('Search for non-existing gallerie ', () => {
    allgalleriesPage.search.type('llllllllll')
    allgalleriesPage.filter.click()
    allgalleriesPage.noGalleriesFound.should('have.text', 'No galleries found')
  })

  it('Load more galleries', () => {
    allgalleriesPage.loadMore.click()
    allgalleriesPage.grid.find('div').its('length').should('be.gt', 8)
  })

  it('Is there a 10 galleries on page', () => {
    allgalleriesPage.grid.find('div').should('have.length', 10)
  })
})

