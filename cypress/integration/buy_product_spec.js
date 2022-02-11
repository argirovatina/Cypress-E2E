import { LoginPage } from '../support/pageObjects/loginPage';
const loginPage = new LoginPage();

describe('As authenticated user', () => {
    before(() => {
        loginPage.login('argirovachristina@gmail.com', 'ruMpy9-kadqem-hipvor');
        cy.url().should('contain',  '/women/home/');
    });
    it('I can buy Adidas product', () => {
        
    });
})