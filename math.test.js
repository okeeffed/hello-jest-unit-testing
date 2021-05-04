const { add, impureAdd, curryAdd, add2, add7, add10 } = require("./math");
const { add19 } = require("./composedMath");
const impurity = require("./impurity");

jest.mock("./impurity");
jest.mock("./math", () => {
  const actuals = jest.requireActual("./math");
  return {
    ...actuals,
    add2: jest.fn(actuals.add2),
    add7: jest.fn(actuals.add7),
    add10: jest.fn(actuals.add10),
  };
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("add functionality", () => {
  test("uncurried add works as expected", () => {
    expect(add(1, 4)).toEqual(5);
  });

  test("curried add works as expected", () => {
    expect(curryAdd(1)(2)).toEqual(3);
  });

  test("partially applied add functions work as expected", () => {
    expect(add2(1)).toEqual(3);
    expect(add7(1)).toEqual(8);
    expect(add10(1)).toEqual(11);
    expect(add19(1)).toEqual(20);
  });

  test("composed function add19 calls expected composition", () => {
    const res = add19(1);
    expect(res).toEqual(20);

    // tests expected composition - note: overkill checking order
    expect(add10).toHaveBeenCalledWith(1);
    expect(add7).toHaveBeenCalledWith(11);
    expect(add2).toHaveBeenCalledWith(18);
  });

  test("impure add works as expected but calls console.log", () => {
    const res = impureAdd(1, 2);

    expect(res).toEqual(3);
    expect(impurity.impurityFn).toHaveBeenCalledWith("irrelevant");
  });
});
