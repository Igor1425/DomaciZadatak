import { navigation } from "../pageObjects/navigation.js";
import { allgalleriesPage } from "../pageObjects/allgalleriesPage.js";


describe('All Galleries', () => {
  beforeEach('all galleries page', () => {
    cy.visit('https://gallery-app.vivifyideas.com');
  })

  it('Should contain the fallowing', () => {
    allgalleriesPage.Title.should('have.text', 'All Galleries')
  })

  it('Fill out search input field', () => {
    allgalleriesPage.Search.type('sale')
    allgalleriesPage.Filter.click()
    cy.wait(3000)
    allgalleriesPage.Grid.find('div').its('length').should('be.gt', 1)
  })
  it('Search for non-existing gallerie ', () => {
    allgalleriesPage.Search.type('llllllllll')
    allgalleriesPage.Filter.click()
    allgalleriesPage.NoGalleriesFound.should('have.text', 'No galleries found')
  })
  it('Load more galleries', ()=>{
    allgalleriesPage.LoadMore.click()
    allgalleriesPage.Grid.find('div').its('length').should('be.gt', 8)
  })
})
