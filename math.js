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

// example only
// function curryAdd(a) {
//   return function (b) {
//     return a + b;
//   };
// }
//  curryAdd(1)(2) // return 3

const add2 = curryAdd(2); // add2(1) = 3
const add7 = curryAdd(7); // add7(1) = 8
const add10 = curryAdd(10); // add10(1) = 11

module.exports = {
  add,
  impureAdd,
  curryAdd,
  add2,
  add7,
  add10,
  impurityFn,
};
