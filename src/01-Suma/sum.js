function Suma(num_1, num_2) {
  if (num_1 === undefined || num_2 === undefined) {
    return "hubo error con los argumentos";
  }
  return num_1 + num_2;
}

module.exports = Suma;
