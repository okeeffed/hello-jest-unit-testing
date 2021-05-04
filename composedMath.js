const R = require("ramda");
const { add2, add7, add10 } = require("./math");

// essentially doing the following:
// const add19 = (initValue: number) => [add2, add7, add10].reduceRight((fn, currentValue) => fn(currentValue), initValue)
const add19 = R.compose(add2, add7, add10); // add19(1) = 20

// demo purposes only
// function nonFunctionalAdd19(arg) {
//     const a = add(arg, 2)
//     const b = add(a, 7)
//     const c = add(b, 10)

//     return c
// }

module.exports = {
  add19,
};
