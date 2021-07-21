// Callback Hell
// setTimeout(() => {
//   console.log("Executando callback...");

//   setTimeout(() => {
//     console.log("Executando Callback");

//     setTimeout(() => {
//       console.log("executando Callback");
//     }, 2000);
//   }, 2000);
// }, 2000);

function esperarPor(tempo = 2000) {
  return new Promise((resolve) => {
    console.log("Executando Promise...");
    setTimeout(() => {
      resolve("Resolved Value");
    }, tempo);
  });
}

// esperarPor(1000).then(console.log);

esperarPor()
  .then(() => esperarPor())
  .then(() => esperarPor());
