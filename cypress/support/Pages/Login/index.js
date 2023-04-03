import dados from "../../massaDados"

/// <reference types="cypress" />

const el = require('./elements').ELEMENTS;

class Page{
    CriaLogin(){
        // Intercepto o POST que faz a requisição de confirmação
        cy.intercept('POST', '**/customers').as('getCad');
        cy.get(el.cookie).click();
        cy.get(el.primeiroNome).type(dados.nome);
        cy.get(el.sobreNome).type(dados.sobrenome);
        cy.get(el.email).type(dados.email);
        cy.get(el.senha).type(dados.senha);
        cy.get(el.confirmSenha).type(dados.senha);
        cy.get(el.cpf).type(dados.cpf);
        cy.get(el.sexo).click();
        cy.get(el.dataNasc).type(dados.dataNasc);
        cy.get(el.fone).type(dados.celular);
        cy.get(el.recebInfoEmail).click();
        cy.get(el.disponibInfo).click();
        cy.get(el.aceiteTerms).click();
        cy.get(el.confirm).click();
        // Espero a requisição 
        cy.wait('@getCad');
        // Faço a validação se o nome irá aparecer depois de logar com o mesmo nome cadastrado
        cy.get('.natds5 > .MuiButtonBase-root > .MuiIconButton-label > .material-icons').click();
        cy.get('h6[class="MuiTypography-root MuiTypography-h6"]').should('contain', dados.nome);
    }
}

export default new Page;
