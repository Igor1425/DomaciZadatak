class AllgalleriesPage {
    get title() {
        return cy.get('h1[class="title-style"]')
    }

    get search() {
        return cy.get('input[placeholder*="Search"]')
    }

    get filter() {
        return cy.get('button[class="btn btn-outline-secondary input-button"]')
    }

    get loadMore() {
        return cy.get('button[class="btn btn-custom"]')
    }

    get grid() {
        return cy.get('div[class="grid"]')
    }

    get cell() {
        return cy.get('div[class="cell"]')
    }

    get noGalleriesFound() {
        return cy.get('h4').should('have.text', 'No galleries found')
    }

    get gallerieTitle() {
        return cy.get("h2 a.box-title")
    }

    get authorsName() {
        return cy.get("p a.box-title")
    }

    get date() {
        return cy.get('small')
    }
}

export const allgalleriesPage = new AllgalleriesPage()