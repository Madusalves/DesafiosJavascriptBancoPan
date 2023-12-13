
/*
const numero = 3;

const numeroPar = (numero % 2) === 0;

console.log(numeroPar); // true

if(numeroPar)
{
    console.log("É par")
}else{
    console.log("Não é par");
}
*/

/* Um programa para calcular o valor de uma  viagem*/

/* 
    1 - Preço etanol
    2   Preço gasolina
    3 - Gasto médio de combustivel do carro por KM
    4 - Distância em KM da viagem
    5 - tipo de combustivel que ta no carro
    
*/

const precoEtanol = 3.75;
const precoGasolina = 5.20;
let quantLitro = 45;
let kmPercorridosEtanol = precoEtanol * quantLitro; 
let kmPercorridosGasolina = precoGasolina * quantLitro;
let gastoMedioCarroEtanol = kmPercorridosEtanol / quantLitro;
let gastoMedioCarroGasolina = kmPercorridosGasolina / quantLitro;
const distanciaViagem = kmPercorridosGasolina + kmPercorridosEtanol;
let tipoCombustivel = gastoMedioCarroEtanol + gastoMedioCarroGasolina;
console.log(kmPercorridosEtanol + " KM");
console.log(kmPercorridosGasolina + " KM");
console.log(gastoMedioCarroEtanol);
console.log(gastoMedioCarroGasolina);



console.log(distanciaViagem / 2);
//tipo de combustivel que ta no carro
if (tipoCombustivel > 7)
{
    console.log ("o carro usa etanol");
}else{
    console.log("o carro usa gasolina");
}

