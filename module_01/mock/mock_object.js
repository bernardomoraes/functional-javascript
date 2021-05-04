const carrinho = [
  { nome: "Caneta", quantidade: 10, preco: 7.99 },
  { nome: "Impressora", quantidade: 0, preco: 649.5 },
  { nome: "Caderno", quantidade: 4, preco: 27.1 },
  { nome: "Lapis", quantidade: 3, preco: 5.82 },
  { nome: "Tesoura", quantidade: 1, preco: 19.2 },
];
const carrinhoDesafio = [
  { nome: "Caneta", quantidade: 10, preco: 7.99, fragil: true },
  { nome: "Impressora", quantidade: 1, preco: 649.5, fragil: true },
  { nome: "Caderno", quantidade: 4, preco: 27.1, fragil: false },
  { nome: "Lapis", quantidade: 3, preco: 5.82, fragil: false },
  { nome: "Tesoura", quantidade: 1, preco: 19.2, fragil: true },
];

module.exports = { carrinho, carrinhoDesafio };
