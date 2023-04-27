/// <reference types="cypress" />
function CepPos() {
    return cy.request({
        method: 'GET',
        url: '94440295',
        failOnStatusCode: false
    })    
}
export {CepPos}