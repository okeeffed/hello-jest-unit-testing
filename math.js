const { impurityFn } = require("./impurity");

const R = require("ramda");

function add(a, b) {
  return a + b;
}

function impureAdd(a, b) {
  impurityFn("irrelevant");
  return a + b;
}

// currying function
const curryAdd = R.curry(add);

const add2 = curryAdd(2);
const add7 = curryAdd(7);
const add10 = curryAdd(10);

module.exports = {
  add,
  impureAdd,
  curryAdd,
  add2,
  add7,
  add10,
  impurityFn,
};
