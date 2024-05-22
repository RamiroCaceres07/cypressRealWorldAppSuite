import LoginPage from "../../PageObjects/LoginPage";
import HomePage from "../../PageObjects/HomePage";

const loginElements = new LoginPage;
const homePage = new HomePage;

describe('Real world app home page testing', () => {

  beforeEach(() => {
      cy.visit('http://localhost:3000');
  })

  beforeEach(function (){
    cy.fixture("example").then(function(testData){
      this.testData = testData;
    })
  })

  it('login with correct credentials', function() {
    loginElements.enterUsername(this.testData.correctUsername);
    loginElements.enterPassword(this.testData.correctPassword);
    loginElements.clickOnSignInButton();
  })

})