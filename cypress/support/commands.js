import * as GETCepPos from '../fixtures/requests/GETCeps.positivo.request'
import * as GETCepNeg from '../fixtures/requests/GETCep.negativo.request'

Cypress.Commands.add('DadosGETRequestSP', () => {
    GETCepPos.Cep_SP().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Rua Vitorino Carmilo')
        expect(Response.body.number).equal('01153000')
        expect(Response.body.city).equal('São Paulo')
        expect(Response.body.state).equal('SP')
        expect(Response.body.id).equal('01153000-23041')
        expect(Response.body.neighborhood).equal('Barra Funda')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestRJ', () => {
    GETCepPos.Cep_RJ().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Rua Riachuelo')
        expect(Response.body.number).equal('20230010')
        expect(Response.body.city).equal('Rio de Janeiro')
        expect(Response.body.state).equal('RJ')
        expect(Response.body.id).equal('20230010-23041')
        expect(Response.body.complement).equal('- até 195 - lado ímpar')
        expect(Response.body.neighborhood).equal('Centro')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestES', () => {
    GETCepPos.Cep_ES().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Avenida Jerônimo Monteiro')
        expect(Response.body.number).equal('29010001')
        expect(Response.body.city).equal('Vitória')
        expect(Response.body.state).equal('ES')
        expect(Response.body.id).equal('29010001-23041')
        expect(Response.body.complement).equal('- até 557 - lado ímpar')
        expect(Response.body.neighborhood).equal('Centro')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestMG', () => {
    GETCepPos.Cep_MG().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Rodovia Papa João Paulo II, 4143')
        expect(Response.body.number).equal('31630900')
        expect(Response.body.city).equal('Belo Horizonte')
        expect(Response.body.state).equal('MG')
        expect(Response.body.id).equal('31630900-23041')
        expect(Response.body.complement).equal('Cidade Administrativa do Governo de Minas Gerais - Prédio Minas')
        expect(Response.body.neighborhood).equal('Serra Verde (Venda Nova)')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestBA', () => {
    GETCepPos.Cep_BA().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Avenida Afrânio Peixoto')
        expect(Response.body.number).equal('40470630')
        expect(Response.body.city).equal('Salvador')
        expect(Response.body.state).equal('BA')
        expect(Response.body.id).equal('40470630-23041')
        expect(Response.body.complement).equal('')
        expect(Response.body.neighborhood).equal('Lobato')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestSE', () => {
    GETCepPos.Cep_SE().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Rua Sargento José Valença Santos Leite')
        expect(Response.body.number).equal('49000194')
        expect(Response.body.city).equal('Aracaju')
        expect(Response.body.state).equal('SE')
        expect(Response.body.id).equal('49000194-23041')
        expect(Response.body.complement).equal('')
        expect(Response.body.neighborhood).equal('Aruana')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestPE', () => {
    GETCepPos.Cep_PE().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Rua Ulhoa Cintra')
        expect(Response.body.number).equal('50010020')
        expect(Response.body.city).equal('Recife')
        expect(Response.body.state).equal('PE')
        expect(Response.body.id).equal('50010020-23041')
        expect(Response.body.complement).equal('')
        expect(Response.body.neighborhood).equal('Santo Antônio')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestAL', () => {
    GETCepPos.Cep_AL().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Avenida Siqueira Campos')
        expect(Response.body.number).equal('57010003')
        expect(Response.body.city).equal('Maceió')
        expect(Response.body.state).equal('AL')
        expect(Response.body.id).equal('57010003-23041')
        expect(Response.body.complement).equal('- de 970 a 1598 - lado par')
        expect(Response.body.neighborhood).equal('Prado')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestPB', () => {
    GETCepPos.Cep_PB().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Rua Manoel Soares Londres')
        expect(Response.body.number).equal('58010010')
        expect(Response.body.city).equal('João Pessoa')
        expect(Response.body.state).equal('PB')
        expect(Response.body.id).equal('58010010-23041')
        expect(Response.body.complement).equal('')
        expect(Response.body.neighborhood).equal('Centro')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestRN', () => {
    GETCepPos.Cep_RN().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Avenida Presidente Café Filho')
        expect(Response.body.number).equal('59010000')
        expect(Response.body.city).equal('Natal')
        expect(Response.body.state).equal('RN')
        expect(Response.body.id).equal('59010000-23041')
        expect(Response.body.complement).equal('')
        expect(Response.body.neighborhood).equal('Praia do Meio')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestCE', () => {
    GETCepPos.Cep_CE().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Rua Braga Torres')
        expect(Response.body.number).equal('60010020')
        expect(Response.body.city).equal('Fortaleza')
        expect(Response.body.state).equal('CE')
        expect(Response.body.id).equal('60010020-23041')
        expect(Response.body.complement).equal('')
        expect(Response.body.neighborhood).equal('Moura Brasil')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestPI', () => {
    GETCepPos.Cep_PI().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Rua João Cabral')
        expect(Response.body.number).equal('64000030')
        expect(Response.body.city).equal('Teresina')
        expect(Response.body.state).equal('PI')
        expect(Response.body.id).equal('64000030-23041')
        expect(Response.body.complement).equal('(Zona Norte) - até 1293/1294')
        expect(Response.body.neighborhood).equal('Centro')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestMA', () => {
    GETCepPos.Cep_MA().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Rua Vinte e Oito de Setembro')
        expect(Response.body.number).equal('65010000')
        expect(Response.body.city).equal('São Luís')
        expect(Response.body.state).equal('MA')
        expect(Response.body.id).equal('65010000-23041')
        expect(Response.body.complement).equal('')
        expect(Response.body.neighborhood).equal('Centro')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestPA', () => {
    GETCepPos.Cep_PA().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Avenida Presidente Vargas')
        expect(Response.body.number).equal('66010000')
        expect(Response.body.city).equal('Belém')
        expect(Response.body.state).equal('PA')
        expect(Response.body.id).equal('66010000-23041')
        expect(Response.body.complement).equal('- até 379/380')
        expect(Response.body.neighborhood).equal('Campina')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestAP', () => {
    GETCepPos.Cep_AP().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Alameda Isac Alcolumbre')
        expect(Response.body.number).equal('68900014')
        expect(Response.body.city).equal('Macapá')
        expect(Response.body.state).equal('AP')
        expect(Response.body.id).equal('68900014-23041')
        expect(Response.body.complement).equal('')
        expect(Response.body.neighborhood).equal('Central')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestAM', () => {
    GETCepPos.Cep_AM().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Avenida Álvaro Maia')
        expect(Response.body.number).equal('69025070')
        expect(Response.body.city).equal('Manaus')
        expect(Response.body.state).equal('AM')
        expect(Response.body.id).equal('69025070-23041')
        expect(Response.body.complement).equal('- até 1160 - lado par')
        expect(Response.body.neighborhood).equal('Centro')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestRR', () => {
    GETCepPos.Cep_RR().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Avenida Sebastião Diniz')
        expect(Response.body.number).equal('69301040')
        expect(Response.body.city).equal('Boa Vista')
        expect(Response.body.state).equal('RR')
        expect(Response.body.id).equal('69301040-23041')
        expect(Response.body.complement).equal('- até 1103/1104')
        expect(Response.body.neighborhood).equal('Centro')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestAC', () => {
    GETCepPos.Cep_AC().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Rua Barbosa Lima')
        expect(Response.body.number).equal('69900004')
        expect(Response.body.city).equal('Rio Branco')
        expect(Response.body.state).equal('AC')
        expect(Response.body.id).equal('69900004-23041')
        expect(Response.body.complement).equal('')
        expect(Response.body.neighborhood).equal('Base')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestDF', () => {
    GETCepPos.Cep_DF().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Quadra SBN Quadra 1')
        expect(Response.body.number).equal('70040010')
        expect(Response.body.city).equal('Brasília')
        expect(Response.body.state).equal('DF')
        expect(Response.body.id).equal('70040010-23041')
        expect(Response.body.complement).equal('')
        expect(Response.body.neighborhood).equal('Asa Norte')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestGO', () => {
    GETCepPos.Cep_GO().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Rua 14')
        expect(Response.body.number).equal('72831770')
        expect(Response.body.city).equal('Luziânia')
        expect(Response.body.state).equal('GO')
        expect(Response.body.id).equal('72831770-23041')
        expect(Response.body.complement).equal('')
        expect(Response.body.neighborhood).equal('Residencial Copaíbas')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestTO', () => {
    GETCepPos.Cep_TO().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Quadra ACSU NO 10 Avenida Joaquim Teotônio Segurado')
        expect(Response.body.number).equal('77001004')
        expect(Response.body.city).equal('Palmas')
        expect(Response.body.state).equal('TO')
        expect(Response.body.id).equal('77001004-23041')
        expect(Response.body.complement).equal('')
        expect(Response.body.neighborhood).equal('Plano Diretor Norte')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestMT', () => {
    GETCepPos.Cep_MT().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Rua Barão de Melgaço')
        expect(Response.body.number).equal('78020800')
        expect(Response.body.city).equal('Cuiabá')
        expect(Response.body.state).equal('MT')
        expect(Response.body.id).equal('78020800-23041')
        expect(Response.body.complement).equal('- de 1907/1908 a 3269/3270')
        expect(Response.body.neighborhood).equal('Centro-Sul')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestRO', () => {
    GETCepPos.Cep_RO().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Avenida Sete de Setembro')
        expect(Response.body.number).equal('76804141')
        expect(Response.body.city).equal('Porto Velho')
        expect(Response.body.state).equal('RO')
        expect(Response.body.id).equal('76804141-23041')
        expect(Response.body.complement).equal('- de 2223 a 2689 - lado ímpar')
        expect(Response.body.neighborhood).equal('Nossa Senhora das Graças')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestMS', () => {
    GETCepPos.Cep_MS().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Rua Rui Barbosa')
        expect(Response.body.number).equal('79002363')
        expect(Response.body.city).equal('Campo Grande')
        expect(Response.body.state).equal('MS')
        expect(Response.body.id).equal('79002363-23041')
        expect(Response.body.complement).equal('- de 3451 a 4183 - lado ímpar')
        expect(Response.body.neighborhood).equal('Centro')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestPR', () => {
    GETCepPos.Cep_PR().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Avenida Vicente Machado')
        expect(Response.body.number).equal('80420010')
        expect(Response.body.city).equal('Curitiba')
        expect(Response.body.state).equal('PR')
        expect(Response.body.id).equal('80420010-23041')
        expect(Response.body.complement).equal('- até 631/0632')
        expect(Response.body.neighborhood).equal('Centro')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestSC', () => {
    GETCepPos.Cep_SC().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Avenida Governador Gustavo Richard')
        expect(Response.body.number).equal('88010290')
        expect(Response.body.city).equal('Florianópolis')
        expect(Response.body.state).equal('SC')
        expect(Response.body.id).equal('88010290-23041')
        expect(Response.body.complement).equal('- até 899/900')
        expect(Response.body.neighborhood).equal('Centro')
        expect(Response.body.blockDelivery).equal(false)
    })
})

Cypress.Commands.add('DadosGETRequestRS', () => {
    GETCepPos.Cep_RS().should((Response) =>{
        expect(Response.status).to.eq(200)
        expect(Response.value).to.be.not.null
        expect(Response.body.address).equal('Avenida do Forte')
        expect(Response.body.number).equal('91360001')
        expect(Response.body.city).equal('Porto Alegre')
        expect(Response.body.state).equal('RS')
        expect(Response.body.id).equal('91360001-23041')
        expect(Response.body.complement).equal('- de 895/896 ao fim')
        expect(Response.body.neighborhood).equal('Vila Ipiranga')
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