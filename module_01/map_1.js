const nums = [1, 2, 3, 4, 5];
const dobro = (n) => n * 2;
const dobroWithIndex = (n, i) => n * 2 + i;
const dobroWithIndexAndArray = (n, i, a) => n * 2 + i + a.length;

console.log(nums.map(dobro));
console.log(nums.map(dobroWithIndex));
console.log(nums.map(dobroWithIndexAndArray));

//And this is to go even further beyond

const nomes = ["Guinho", "Berna", "Urso", "Caio", "Pedro", "Jão"];
const firstLetter = (n) => n[0];
const lastLetter = (n) => n[n.length - 1];
const wordLength = (n) => n.length;

console.log(
  nomes.map((n, i) => [i + 1, n, firstLetter(n), lastLetter(n), wordLength(n)])
);

// Making my own map method

Array.prototype.myMap = function (fn) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(fn(this[i], i, this));
  }

  return newArray;
};

console.log("My Map Result: ", nums.myMap(dobro));
