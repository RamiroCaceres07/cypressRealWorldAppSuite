import LoginPage from "../../PageObjects/LoginPage";
import HomePage from "../../PageObjects/HomePage";
import NewTransactionPage from "../../PageObjects/NewTransactionPage";

const loginElements = new LoginPage;
const homePage = new HomePage;
const newTransaction = new NewTransactionPage;

const transaction = {
    username: "Arely Kertzmann",
    amount: "35",
    description: "dasdsa",
};

describe('Real world app transaction page testing', () => {

  beforeEach(() => {
      cy.visit('http://localhost:3000');
  })

  beforeEach(function (){
    cy.fixture("example").then(function(testData){
      this.testData = testData;
    })
  })

  beforeEach(function (){
    loginElements.enterUsername(this.testData.correctUsername);
    loginElements.enterPassword(this.testData.correctPassword);
    loginElements.clickOnSignInButton();
  });

  it('transaction submited notification is visible', function(){
    homePage.clickOnNewTranctionButton();
    newTransaction.enterUserToSearch(transaction.username);
    newTransaction.checkTheUserIsFound(transaction.username);
    newTransaction.clickOnCustomer();
    newTransaction.insertAmoutToPay(transaction.amount);
    newTransaction.insertTransactionDescription(transaction.description);
    newTransaction.clickOnPayButton();
    newTransaction.checkTransactionDoneNotificationIsVisible();
  })

})