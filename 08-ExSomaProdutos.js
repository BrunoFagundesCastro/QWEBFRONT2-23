// Declaração de variáveis
let precoProduto1 = 15.99;
let precoProduto2 = 35.25;
let precoProduto3 = 50.35;

// Processamento
let valorTotal = precoProduto1 + precoProduto2 + precoProduto3;

// Template String
console.log(`Valor do produto 1: R$ ${precoProduto1}`);
console.log(`Valor do produto 2: R$ ${precoProduto2}`);
console.log(`Valor do produto 3: R$ ${precoProduto3}`);
console.log(`A soma dos produtos é: R$ ${valorTotal.toFixed(2)}`);