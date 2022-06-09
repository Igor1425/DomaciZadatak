class Navigation {
   
    get AllgalleriesLink(){
       return cy.get('a[class="navbar-brand router-link-active"]')
    }
    get MygalleriesLink(){
        return cy.get('a[href="/my-galleries"]')
    }
    get CreategallerieLink(){
        return cy.get('a[href="/create"]')
    }
    get LogoutBtn (){
        return cy.get(".ml-auto > :nth-child(3) > .nav-link")
    }
   clickAllgalleriesLink(){
       this.AllgalleriesLink.click()
   }
   clickMygalleriesLink(){
       this.MygalleriesLink().click
   }
   clickCreategallerieLink(){
       this.CreategallerieLink().click
   }
   clickLogutBtn(){
       this.LogoutBtn().click
   }
}
export const navigation = new Navigation()