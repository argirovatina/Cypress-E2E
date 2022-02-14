export class ShoppingCartPage {
    constructor() {
        this.continueToCheckoutButton = () => {
            return cy.get('[data-testid="cart-continue-to-checkout-top-button"]');
        }
    }
}