class CreateGallerie {
    get gallerieTitle() {
        return cy.get('h1').contains('Create Gallery')
    }

    get titleINput() {
        return cy.get('input[id="title"]')
    }

    get description() {
        return cy.get('#description')
    }

    get imageUrlInput() {
        return cy.get('input[placeholder*="image url"]')
    }

    get galleryInputParent() {
        return cy.get(".form-group");
    }

    get upBtn() {
        return this.galleryInputParent.find("button").eq(1)
    }

    get downBtn() {
        return this.galleryInputParent.find("button").eq(2)
    }

    get addImage() {
        return cy.get('button').contains('Add image')
    }

    get submitBtn() {
        return cy.get('button').contains('Submit')
    }

    get cancelBtn() {
        return cy.get('button').contains('Cancel')
    }

    get errMsg() {
        return cy.get('p[class="alert alert-danger"]')
    }
}

export const createGallerie = new CreateGallerie()