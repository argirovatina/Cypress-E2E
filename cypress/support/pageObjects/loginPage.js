export class LoginPage {
    constructor() {
        this.emailField = () => {
            return cy.get('[data-testid="input"]');
        };
        this.passwordField = () => {
            return cy.get('[data-testid="login-form-password-input"]');
        };
        this.loginButton = () => {
            return cy.get('[data-testid="login-form-login-button"]');
        }
    }

    login(email, password) {
        cy.visit('sign-in');
        this.emailField().type(email);
        this.passwordField().type(password);
        this.loginButton().click();
    }
}