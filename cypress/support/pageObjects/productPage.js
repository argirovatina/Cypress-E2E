import { getRandomValueFromArray } from '../helpers/getRandomValueFromArray'

export class ProductPage {
    constructor() {
        this.sizeDropdown = () => {
            return cy.get('[data-testid="product-order-select-size"]');
        };
        this.sizeDropdownOptions = () => {
            return cy.get('.menu .text');
        };
        this.addToCardButton = () => {
            return cy.get('[data-testid="product-order-button"]');
        }
    }

    selectRandomSize() {
        this.sizeDropdown().click();
        let options = this.sizeDropdownOptions();
        this.sizeDropdownOptions().then((options) => {
            getRandomValueFromArray(options).click();
        })
        this.addToCardButton().click();
    }
}