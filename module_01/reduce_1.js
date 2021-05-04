const { carrinho } = require("./mock/mock_object");
console.log(carrinho);

const totalValue = (acc, item) => {
  return acc + item.quantidade * item.preco;
};

console.log(carrinho.reduce(totalValue, 0));

//
