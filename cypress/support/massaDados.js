const base ={
    nome:[
        'João',
        'Kleber',
        'Carlos'
    ],

    sobrenome: [
        'da Silva',
        'Pereira',
        'Augusto'
    ],

    email: [
        'TesteDev3@teste.com.br',
        'TesteDev2@teste.com.br',
        'TesteDev@teste.com.br',
        'TesteDev4@teste.com.br'
    ],

    senha: [
        'Teste@123',
        'Teste@321'
    ],

    cpf:[
        '68019895027',
        '85264815097',
        '85264815097',
        '74272784021'
    ],

    dataNasc:[
        '20051994',
        '20031993',
        '15061996'
    ],

    celular: [
        '14995469547',
        '14998521474',
        '14984563252',
        '14999452223',
        '71988554466',
        '18991563327'

    ]
};

const dados = {
    "nome": base.nome[Math.floor(Math.random() * base.nome.length)],
    "sobrenome": base.sobrenome[Math.floor(Math.random() * base.sobrenome.length)],
    "email": base.email[Math.floor(Math.random() * base.email.length)],
    "senha": base.senha[Math.floor(Math.random() * base.senha.length)],
    "cpf": base.cpf[Math.floor(Math.random() * base.cpf.length)],
    "dataNasc": base.dataNasc[Math.floor(Math.random() * base.dataNasc.length)],
    "celular": base.celular[Math.floor(Math.random() * base.celular.length)],
};

export default dados;