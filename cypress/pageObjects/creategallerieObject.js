class CreateGallerie{
    get GallerieTitle(){
        return cy.get('h1').contains('Create Gallery')
    }
    get TitleINput(){
        return cy.get('input[id="title"]')
    }
    get Description(){
        return cy.get('#description')
    }
    get ImageUrlInput(){
        return cy.get('input[placeholder*="image url"]')
    }
    get UpBtn(){
        return cy.get('button[class="fas fa-chevron-circle-up"]')
    }
    get DownBtn(){
        return cy.get('button[class="fas fa-chevron-circle-down"]')
    }
    get AddImage(){
        return cy.get('button').contains('Add image')
    }
    get SubmitBtn(){
        return cy.get('button').contains('Submit')
    }
    get CancelBtn(){
        return cy.get('button').contains('Cancel')
    }
    
}
export const createGallerie = new CreateGallerie()