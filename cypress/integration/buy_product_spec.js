import { LoginPage } from '../support/pageObjects/loginPage';
const loginPage = new LoginPage();
import { ProductItemPage } from '../support/pageObjects/productItemPage';
const productItemPage = new ProductItemPage(); 
import { HomePage } from '../support/pageObjects/homePage';
const homePage = new HomePage();
import { getRandomValueFromArray } from '../support/helpers/getRandomValueFromArray';
import { ApplicationHeaderComponent } from '../support/pageObjects/components/applicationHeaderComponent';
const appHeaderComponent = new ApplicationHeaderComponent();
import { ShoppingCartPage } from '../support/pageObjects/shoppingCartPage';
const shoppingCartPage = new ShoppingCartPage();
import { CheckoutPage } from '../support/pageObjects/checkouPage';
const checkouPage = new CheckoutPage();

describe('As authenticated user', () => {
    before(() => {
        cy.fixture('credentials').then((user) => {
            loginPage.login(user.username, user.password);
        });
        cy.url().should('contain',  '/women/home/');
    });
    it('I can buy Adidas product', () => {
        cy.visit('sales/women/adidas');
        homePage.productsList().then((list) => {
            getRandomValueFromArray(list).click();
        });
        productItemPage.selectRandomSize();
        // TODO: uncomment, when add after step for emptying cart via API
        // appHeaderComponent.cartCounter().should('contain.text', '1');
        appHeaderComponent.orderButtonFromCart().click();
        shoppingCartPage.continueToCheckoutButton().click();
        checkouPage.activeStep().should('contain.text', 'Address');
        checkouPage.shippingHouseNumber().type('10'); // This step should be removed after bug fix
        checkouPage.stepTitle('Delivery options').click(); // trigger Address block to appear, this step should be removed after bug fix
        checkouPage.continueToCheckoutButton().click();
        checkouPage.activeStep().should('contain.text', 'Payment method');
        checkouPage.paymentMethodTable().should('exist');
        checkouPage.placeOrderButton().should('exist');
    });
})