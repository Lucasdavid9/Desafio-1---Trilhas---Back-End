// Criando as variáveis
let preco = 50; // Preço original
let desconto = 0.2; // 20% de desconto

// Calculando o preço final
let precoFinal = preco - (preco * desconto);

// Exibindo no console
console.log("Preço original:", preco);
console.log("Desconto:", desconto * 100 + "%");
console.log("Preço final com desconto:", precoFinal);

// Exibindo na página HTML
document.getElementById("resultado").innerText = `Preço final com desconto: R$ ${precoFinal.toFixed(2)}`;
