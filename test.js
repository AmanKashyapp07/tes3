const { add, multiply } = require('./index');
const assert = require('assert');

console.log('🧪 Running automated unit tests...');

assert.strictEqual(add(2, 5), 5, '2 + 3 should equal 5');
assert.strictEqual(multiply(4, 5), 20, '4 * 5 should equal 20');
assert.strictEqual(add(-1, 1), 0, '-1 + 1 should equal 0')
assert.strictEqual(multiply(0, 10), 0, '0 * 10 should equal 0');
assert.strictEqual(add(0, 0), 0, '0 + 0 should equal 0');
assert.strictEqual(multiply(-2, -3), 6, '-2 * -3 should equal 6');

console.log('✅ All unit tests passed seamlessly!');
//gihgkj\/fdkj/sdfsdacadfdjhsdbfavdsdsfadsfvwfdb