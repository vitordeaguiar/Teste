/// <reference types="cypress" />

import Page from "../support/Pages/Login"

describe('Cadastro de usuário', () => {

  before('Entrnado na pagina', () => {
    cy.visit('https://www.aesop.com.br/cadastre-se');
  });
  it('Cadastrando usuario', ()=>{
    Page.CriaLogin();
  });
});