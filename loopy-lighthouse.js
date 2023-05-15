// loopy lighthouse problem.
for (let number = 100; number <= 200; number++) {
  let retorno = "";
  if (number % 3 === 0) {
    retorno += "Loopy";
  }
  if (number % 4 === 0) {
    retorno += "Lighthouse";
  }
  if (number % 3 > 0 && number % 4 > 0) {
    retorno = number;
  }
  console.log(retorno);
}