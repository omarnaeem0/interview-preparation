const getEquilibriumIndex = require("./equilibrium_index");

test("Equilibrium index exists", () => {
  expect(getEquilibriumIndex([0, 8, 7, 5, 6, -3])).toBe(2);
  expect(getEquilibriumIndex([4, 7, -3, 0, 0, 0, 7, 8])).toBe(6);
  expect(getEquilibriumIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(-1);
});

test("Equilibrium index does not exist", () => {
  expect(getEquilibriumIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(-1);
  expect(getEquilibriumIndex([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe(-1);
  expect(getEquilibriumIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -55])).toBe(-1);
});
