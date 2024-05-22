class NewTransactionPage {
    elements = {
        searchUserInput : () => cy.get('[data-test=user-list-search-input]'),
        customerName : () => cy.get('.MuiListItemText-primary'), //Kaylin Homenick
        customerData : () => cy.get('span[class="MuiGrid-root MuiGrid-item"]').contains('Tavares_Barrows')        ,
        amountInput : () => cy.get('#amount'),
        transactionDescriptionInput : () => cy.get('#transaction-create-description-input'),
        payButton : () => cy.get('[data-test=transaction-create-submit-payment]'),
        transactionDoneNotification : () => cy.get('.MuiAlert-message'),
    }
    
    //interact with page

    enterUserToSearch(username){
        this.elements.searchUserInput().clear().type(username);
    }

    checkTheUserIsFound(username){
       return this.elements.customerName().should('contains.text', username);
    }

    clickOnCustomer(){
        this.elements.customerData().click();
    }

    insertAmoutToPay(amount){
        this.elements.amountInput().clear().type(amount);
    }

    insertTransactionDescription(description){
        this.elements.transactionDescriptionInput().clear().type(description);
    }

    clickOnPayButton(){
        this.elements.payButton().click();
    }

    checkTransactionDoneNotificationIsVisible(){
        this.elements.transactionDoneNotification().should('be.visible');
    }

}

export default NewTransactionPage;