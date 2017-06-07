const test = require('tape')
const curry = require('./')

test('curry add', function(t) {
  const add = curry((a, b) => a + b)
  const add2 = add(2)
  t.equals(add2(2), 4)
  t.end()
})
