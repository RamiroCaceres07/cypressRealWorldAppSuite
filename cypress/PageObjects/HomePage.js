class HomePage {
    elements = {
        usernameCheckerElement : () => cy.get('[data-test="sidenav-username"]'),
        accountBalanceElement : () => cy.get('data-test="sidenav-user-balance"'),
        newTransactionButtonElement : () => cy.get('[data-test="nav-top-new-transaction"]'),
        everyoneTabElement : () => cy.get('[data-test="nav-public-tab"]'),
        friendsTabElement : () => cy.get('[data-test="nav-contacts-tab"]'),
        mineTabElement : () => cy.get('data-test="nav-personal-tab"'),
        everyoneTransactionListElement : () => cy.get('.MuiTypography-root.makeStyles-title-94.MuiTypography-body1'),
    }

    //methods
    checkIfUsernameLogedIsCorrect(username){
        this.elements.usernameCheckerElement().should('have.text', username);
    }

    clickOnNewTransactionButton(){
        this.elements.newTransactionButtonElement().click();
    }
}

export default HomePage;