import LoginPage from "../../PageObjects/LoginPage";
import HomePage from "../../PageObjects/HomePage";
import NewTransactionPage from "../../PageObjects/NewTransactionPage";

const loginPage = new LoginPage();
const homePage = new HomePage();
const newTransactionPage = new NewTransactionPage();

const transactionData = {
  username: "Tavares_Barrows",
  amount: "35",
  description: "dasdsa",
};

describe("Real world app transaction page testing", () => {
  beforeEach(function () {
    cy.visit("http://localhost:3000");

    cy.fixture("example").then((testData) => {
      this.testData = testData;

      loginPage.enterUsername(testData.correctUsername);
      loginPage.enterPassword(testData.correctPassword);
      loginPage.clickOnSignInButton();
    });
  });

  it("transaction submitted notification is visible", function () {
    homePage.clickOnNewTransactionButton();
    newTransactionPage.enterUserToSearch(transactionData.username);
    newTransactionPage.checkTheUserIsFound(transactionData.username);
    newTransactionPage.clickOnCustomer();
    newTransactionPage.insertAmountToPay(transactionData.amount);
    newTransactionPage.insertTransactionDescription(
      transactionData.description
    );
    newTransactionPage.clickOnPayButton();
    newTransactionPage.checkTransactionDoneNotificationIsVisible();
  });
});
