/// <reference types="cypress" />
import LoginPage from "../../PageObjects/LoginPage";
import HomePage from "../../PageObjects/HomePage";

const loginElements = new LoginPage;
const homePage = new HomePage;

describe('Real world app login testing', () => {

  beforeEach(() => {
      cy.visit('http://localhost:3000/signin');
  })

  beforeEach(function (){
    cy.fixture("example").then(function(testData){
      this.testData = testData;
    })
  })
  
  it('login with incorrect credentials', function() {
    loginElements.enterUsername(this.testData.incorrectUsername);
    loginElements.enterPassword(this.testData.incorrectPassword);
    loginElements.clickOnSignInButton();
    loginElements.invalidCredentialsAlert();
  })

  it('login with incorrect username', function()  {
    loginElements.enterUsername(this.testData.incorrectUsername);
    loginElements.enterPassword(this.testData.correctPassword);
    loginElements.clickOnSignInButton();
    loginElements.invalidCredentialsAlert();
  })

  it('login with incorrect password', function() {
    loginElements.enterUsername(this.testData.correctUsername); 
    loginElements.enterPassword(this.testData.incorrectPassword); 
    loginElements.clickOnSignInButton();
    loginElements.invalidCredentialsAlert();
  })

  it('try to login without password', function() {
    loginElements.enterUsername(this.testData.correctUsername);
    loginElements.signInButtonDisable();
  })

  it('try to login without username', function() {
    loginElements.enterPassword(this.testData.correctPassword);
    loginElements.usernameHelperTextIsVisible();
    loginElements.signInButtonDisable();
  })

  it('login with correct credentials', function() {
    loginElements.enterUsername(this.testData.correctUsername);
    loginElements.enterPassword(this.testData.correctPassword);
    loginElements.clickOnSignInButton();
    homePage.checkIfUsernameLogedIsCorrect('@'+this.testData.correctUsername);
  })
})