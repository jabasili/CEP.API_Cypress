import * as GETCepPos from '../fixtures/requests/GET.positivo.request'
import * as GETCepNeg from '../fixtures/requests/GET.negativo.request'

Cypress.Commands.add('DadosGETRequestPos', () => {
    GETCepPos.CepPos().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Avenida Vitória Régia')
        expect(Response.body.number).equal('94440295')
        expect(Response.body.city).equal('Viamão')
        expect(Response.body.state).equal('RS')
        expect(Response.body.id).equal('94440295-23041')
        expect(Response.body.neighborhood).equal('Querência')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestNeg', () => {
    GETCepNeg.CepNeg().should((Response) =>{
        expect(Response.status).to.eq(404)
        expect(Response.value).to.be.not.null
        expect(Response.body.errorCode).equal('404')
        expect(Response.body.message).equal('Recurso não encontrado')
        expect(Response.body.info).equal('http://api.b2winc.com/doc/error/404')
        expect(Response.body.additionalInfo[0].key).equal('cause')
        expect(Response.body.additionalInfo[0].value).equal('CEP não encontrado')
    })
})