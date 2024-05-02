const Suma = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  const result = Suma(1, 2);
  expect(result).toBe(3);
});

test("add 10 + 10 to equal 20", () => {
  const result = Suma(10, 10);
  expect(result).toBe(20);
});

test("deberia retornar un error", () => {
  const result = Suma();
  expect(result).toBe("hubo error con los argumentos");
});
