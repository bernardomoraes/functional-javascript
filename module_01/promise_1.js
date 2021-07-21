let a = 1;
console.log(a);

let p = new Promise(function (resolve) {
  resolve(3);
});

p.then(function (valor) {
  // Sempre é devolvido apenas um valor, caso queira mais de um valor, passar um objeto ou lista.
  console.log(valor);
});

// outras formas de fazer

p.then((valor) => console.log(valor));

// aninhamento de then
let q = new Promise((resolve) => {
  resolve(["Ana", "Bia", "Carlos", "Daniel"]);
});

function primeiroElemento(array) {
  return array[0];
}

function primeiraLetra(string) {
  return string[0];
}

q.then((valor) => valor[0])
  .then((primeiro) => primeiro[0])
  .then((letra) => console.log(letra)); // Expected Output: A

q.then(primeiroElemento)
  .then(primeiraLetra)
  .then((letra) => console.log(letra)); // Expected Output: A

q.then(primeiroElemento).then(primeiraLetra).then(console.log); // Expected Output: A

// Refactor

let r = new Promise((resolve) => {
  resolve(["Ana", "Bia", "Carlos", "Daniel"]);
});

const firstElement = (arrayOrString) => arrayOrString[0];

r.then(firstElement).then(firstElement).then(console.log); //Expected Output: A
