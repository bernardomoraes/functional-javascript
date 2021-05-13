const { carrinho } = require("./mock/mock_object");
console.log(carrinho);

const biggerThanZero = (item) => item.quantidade > 0;
console.log(carrinho.filter(biggerThanZero));

const biggerThanSomething = (item, value) => item.quantidade > value;
console.log(carrinho.filter((item) => biggerThanSomething(item, 1)));

const getNames = (item) => item.nome;
console.log(
  carrinho.filter((item) => biggerThanSomething(item, 1)).map(getNames)
);

// Building my own filter method

Array.prototype.myFilter = function (fn) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};
console.log(carrinho.myFilter(biggerThanZero));
