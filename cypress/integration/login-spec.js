import {validUser, invalidUser} from '../const';
import { logout } from '../utils'

describe('Login page', function(){
    const UI_BASE_PATH = Cypress.env("baseUrl");

    // it('Login with invalid user', function() {
    //     cy.visit(UI_BASE_PATH);
    //
    //     cy.get('input[name=username]').type(invalidUser.username);
    //
    //     // {enter} causes the form to submit
    //     cy.get('input[name=password]').type(`${invalidUser.password}{enter}`);
    //
    //     cy.url().should('eq', UI_BASE_PATH + '/login');
    //
    //     cy.get('#login-error-message').should('have.class', 'alert alert-danger');
    //
    // });

    it('Login with valid user', function() {
        cy.visit(UI_BASE_PATH);

        // we should be redirected to /login
        cy.url().should('eq', UI_BASE_PATH + '/login');

        cy.get('input[name=username]').type(validUser.username);

        // {enter} causes the form to submit
        cy.get('input[name=password]').type(`${validUser.password}{enter}`);

        // we should be redirected to /
        cy.url().should('eq',  UI_BASE_PATH + '/');
    });

});