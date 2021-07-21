function gerarNumerosEntre(min, max) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve) => {
    const fator = max - min + 1;
    const random = parseInt(Math.random() * fator) + min;
    resolve(random);
  });
}

gerarNumerosEntre(10, 200)
  .then((num) => num * 10)
  .then((num10) => `O valor gerado foi: ${num10}`)
  .then(console.log);
