/* 
1 - crie uma classe para representar carros.
Os carros possuem uma marca, uma cor, e um gasto medio de combustivel
por kilometro rodado.
Crie um metodo que dado a quantidade de quilometro e o preço do combustivel
nos de o valor gasto em reais para realizar este percurso
*/

class Carros{ 
    marca;
    cor;
    gastoMedio;
    kmRodado;
    qLitro;
    preco;

    constructor(marca,cor,preco,kmRodado,qLitro,gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.preco = preco;
        this.kmRodado = kmRodado;
        this.qLitro = qLitro;
        this.gastoMedio = kmRodado / qLitro;
       
    }
    descrever(){
        console.log("O carro " +  this.cor  +  this.marca + " esta com " + this.kmRodado + " Km rodado e tem gasto de " + this.kmRodado / this.qLitro + " KM/L");
    }
}


const c = new Carros();
c.marca = "Fiat";
c.cor = "Vermelho";
c.kmRodado = 85;
c.qLitro = 2;
c.preco = 5.8;
c.gastoMedio = c.kmRodado / c.qLitro;
console.log(c.descrever());
console.log(c);
