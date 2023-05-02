/// <reference types="cypress" />
function SemCep() {
    return cy.request({
        method: 'GET',
        url: 'https://cep-v2-americanas-npf.b2w.io/cep/',
        failOnStatusCode: false
    })    
}
export {SemCep}