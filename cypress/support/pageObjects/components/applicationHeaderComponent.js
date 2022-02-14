export class ApplicationHeaderComponent {
    constructor() {
        this.orderButtonFromCart = () => {
            return cy.get('[data-testid="order-now-button"]');
        };
        this.cartCounter = () => {
            return cy.get('[data-testid="main-header-cart-counter"]');
        };
    }
}

export default ApplicationHeaderComponent;