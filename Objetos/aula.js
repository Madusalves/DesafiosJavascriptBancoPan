const duda = {
nome: "Duda",
idade: 25,
//metodo
descrever: function () {
    console.log('meu nome é ' + this.nome);
}
}


duda.descrever();

// acesssando dinamicamente 
duda["nome"] = "Eduarda";