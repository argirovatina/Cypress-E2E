export class CheckoutPage {
    constructor() {
        this.activeStep = () => {
            return cy.get('.active + .step-label');
        };
        this.shippingHouseNumber = () => {
            return cy.get('#shipping_house_number');
        };
        this.stepTitle = (stepName) => {
            return cy.get('.step-title').contains(stepName);
        };
        this.continueToCheckoutButton = () => {
            return cy.get('.continue-checkout');
        };
        this.placeOrderButton = () => {
            return cy.get('#place_order');
        };
        this.paymentMethodTable = () => {
            return cy.get('.payment-methods-table');
        }
    }
}