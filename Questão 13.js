// Função que calcula a área de um círculo
function calcularAreaCirculo(raio) {
    return Math.PI * Math.pow(raio, 2);
}

// Testando a função
let raio = 5; // Altere esse valor para testar com outros raios
let area = calcularAreaCirculo(raio);

console.log(`A área do círculo com raio ${raio} é: ${area.toFixed(2)}`);
