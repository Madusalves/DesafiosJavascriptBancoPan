function escrevaMeuNome(nome) {
    return "Meu nome é " + nome;
}

function maioIdade(idade) {
    if(idade >= 18){
        console.log(escrevaMeuNome("Duda") + "É maior de idade");
    }else{
        console.log("É menor de idade");
    }
}

maioIdade(18);