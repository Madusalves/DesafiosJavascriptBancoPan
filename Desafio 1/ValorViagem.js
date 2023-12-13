/* Um programa para calcular o valor de uma  viagem*/

/* 
Terá 3 variaveis
    1 - Preço do combustivel
    2 - Gasto médio de combustivel do carro por KM
    3 - Distância em KM da viagem
    
*/

const precoCombustivel = 5.20;
let quantLitro = 45;
const kmPercorridos = precoCombustivel * quantLitro;
let gastoMedioCarro = kmPercorridos / quantLitro;
const distanciaViagem = kmPercorridos;
console.log(kmPercorridos + " Quilometros rodados");
console.log(gastoMedioCarro + " KM/L");