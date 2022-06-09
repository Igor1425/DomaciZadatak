class AllgalleriesPage{
    get Title(){
        return cy.get('h1[class="title-style"]')
    }
    get Search(){
        return cy.get('input[placeholder*="Search"]')
    }
    get Filter(){
        return cy.get('button[class="btn btn-outline-secondary input-button"]')
    }
    get LoadMore(){
        return cy.get('button[class="btn btn-custom"]')
    }
    get Grid(){

        return cy.get('div[class="grid"]')
    }
    get NoGalleriesFound(){
        return cy.get('h4')
    }
}
export const allgalleriesPage = new AllgalleriesPage()