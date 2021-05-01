const R = require("ramda");
const { add2, add7, add10 } = require("./math");

const add19 = R.compose(add2, add7, add10);

module.exports = {
  add19,
};
