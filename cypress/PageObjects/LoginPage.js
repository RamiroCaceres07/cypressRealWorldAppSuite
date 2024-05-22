class LoginPage {
    elements = {
        usernameInputElement : () => cy.get('#username'),
        passwordInputElement : () => cy.get('#password'),
        signInButtonElement : () => cy.get('[data-test="signin-submit"]'),
        invalidCredentialsAlertElement : () => cy.get('[data-test="signin-error"]'),
        usernameHelperTextElement : () => cy.get('#username-helper-text'),
    }

    enterUsername(username){
        this.elements.usernameInputElement().clear();
        this.elements.usernameInputElement().type(username);
    }

    usernameHelperTextIsVisible(){
        this.elements.usernameHelperTextElement().should('be.visible');
        this.elements.usernameHelperTextElement().should('have.text', 'Username is required')
    }

    enterPassword(password){
        this.elements.passwordInputElement().clear();
        this.elements.passwordInputElement().type(password);
    }

    clickOnSignInButton(){
        this.elements.signInButtonElement().click();
    }

    signInButtonDisable(){
        this.elements.signInButtonElement().should('be.disabled');
    }

    invalidCredentialsAlert(){
        this.elements.invalidCredentialsAlertElement().should('be.visible');
    }

}

export default LoginPage;