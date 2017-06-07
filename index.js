const curryN = require('fp-curry-n')

module.exports = curry

function curry(fn, ...curried) {
  return curryN(fn.length, fn, ...curried)
}
