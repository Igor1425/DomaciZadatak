class Navigation {
    get allGalleriesLink(){
       return cy.get('a[class="navbar-brand router-link-active"]')
    }
    get myGalleriesLink(){
        return cy.get('a[href="/my-galleries"]')
    }
    get createGallerieLink(){
        return cy.get('a[href="/create"]')
    }
    get logoutBtn (){
        return cy.get(".ml-auto > :nth-child(3) > .nav-link")
    }
   clickAllGalleriesLink(){
       this.allGalleriesLink().click
   }
   clickMyGalleriesLink(){
       this.myGalleriesLink().click
   }
   clickCreateGallerieLink(){
       this.createGallerieLink().click
   }
   clickLogutBtn(){
       this.logoutBtn().click
   }

}
export const navigation = new Navigation()