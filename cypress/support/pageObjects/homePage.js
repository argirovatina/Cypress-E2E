export class HomePage {
    constructor() {
        this.productsList = () => {
            return cy.get('[data-testid="product-card"] a');
        }
    }
}