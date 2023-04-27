/// <reference types="cypress" />
function CepNeg() {
    return cy.request({
        method: 'GET',
        url: '000000000',
        failOnStatusCode: false
    })    
}
export {CepNeg}