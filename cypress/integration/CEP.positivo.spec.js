describe('GET Cep das capitais', () => {
    it('Listar Cep selecionado', () =>{
        //Dados de São Paulo
        cy.DadosGETRequestSP()
        //Dados de Rio de Janeiro
        cy.DadosGETRequestRJ()
        //Dados de Espirito Santo
        cy.DadosGETRequestES()
        //Dados de Minas Gerais
        cy.DadosGETRequestMG()
        //Dados de Bahia
        cy.DadosGETRequestBA()
        //Dados de Sergipe
        cy.DadosGETRequestSE()
        //Dados de Pernambuco
        cy.DadosGETRequestPE()
        //Dados de Alagoas
        cy.DadosGETRequestAL()
        //Dados de Paraíba
        cy.DadosGETRequestPB()
        //Dados de Rio Grande do Norte
        cy.DadosGETRequestRN()
        //Dados de Ceará
        cy.DadosGETRequestCE()
        //Dados de Piauí
        cy.DadosGETRequestPI()
        //Dados de Maranhão
        cy.DadosGETRequestMA()
        //Dados de Pará
        cy.DadosGETRequestPA()
        //Dados de Amapá
        cy.DadosGETRequestAP()
        //Dados de Amazonas
        cy.DadosGETRequestAM()
        //Dados de Roraima
        cy.DadosGETRequestRR()
        //Dados de Acre
        cy.DadosGETRequestAC()
        //Dados de Distrito Federal
        cy.DadosGETRequestDF()
        //Dados de Goias
        cy.DadosGETRequestGO()
        //Dados de Tocantins
        cy.DadosGETRequestTO()
        //Dados de Mato Grosso
        cy.DadosGETRequestMT()
        //Dados de Rondônia 
        cy.DadosGETRequestRO()
        //Dados de Mato Grosso do Sul
        cy.DadosGETRequestMS()
        //Dados de Paraná
        cy.DadosGETRequestPR()
        //Dados de Santa Catarina
        cy.DadosGETRequestSC()
        //Dados de Rio Grande do Sul
        cy.DadosGETRequestRS()

    })
})