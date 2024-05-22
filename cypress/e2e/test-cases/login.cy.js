import LoginPage from "../../PageObjects/LoginPage";
import HomePage from "../../PageObjects/HomePage";

const loginPage = new LoginPage();
const homePage = new HomePage();

describe("Real world app login testing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/signin");
    cy.fixture("example").then((testData) => {
      loginPage.testData = testData;
    });
  });

  it("login with incorrect credentials", () => {
    loginPage.enterUsername(loginPage.testData.incorrectUsername);
    loginPage.enterPassword(loginPage.testData.incorrectPassword);
    loginPage.clickOnSignInButton();
    loginPage.invalidCredentialsAlert();
  });

  it("login with incorrect username", () => {
    loginPage.enterUsername(loginPage.testData.incorrectUsername);
    loginPage.enterPassword(loginPage.testData.correctPassword);
    loginPage.clickOnSignInButton();
    loginPage.invalidCredentialsAlert();
  });

  it("login with incorrect password", () => {
    loginPage.enterUsername(loginPage.testData.correctUsername);
    loginPage.enterPassword(loginPage.testData.incorrectPassword);
    loginPage.clickOnSignInButton();
    loginPage.invalidCredentialsAlert();
  });

  it("try logging in without password", () => {
    loginPage.enterUsername(loginPage.testData.correctUsername);
    loginPage.signInButtonDisable();
  });

  it("try logging in without username", () => {
    loginPage.enterPassword(loginPage.testData.correctPassword);
    loginPage.usernameHelperTextIsVisible();
    loginPage.signInButtonDisable();
  });

  it("login with correct credentials", () => {
    loginPage.enterUsername(loginPage.testData.correctUsername);
    loginPage.enterPassword(loginPage.testData.correctPassword);
    loginPage.clickOnSignInButton();
    homePage.checkIfUsernameLogedIsCorrect(
      "@" + loginPage.testData.correctUsername
    );
  });
});
