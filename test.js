const assert = require('assert');
const {
  add,
  subtract,
  multiply,
  divide,
  isPrime,
  reverseString,
  isPalindrome,
  uniqueArray,
  flattenArray
} = require('./index');

console.log('🚀 Starting MagnusCI Comprehensive Test Suite...\n');

let passed = 0;
let failed = 0;

function runTest(name, fn) {
  try {
    fn();
    console.log(`  ✓ PASSED: ${name}`);
    passed++;
  } catch (err) {
    console.log(`  ✗ FAILED: ${name}`);
    console.log(`    Error: ${err.message}`);
    failed++;
  }
}

console.log('--- Math Module Tests ---');
runTest('add(2, 3) should equal 5', () => {
  assert.strictEqual(add(2, 3), 5);
});

runTest('subtract(10, 4) should equal 6', () => {
  assert.strictEqual(subtract(10, 4), 6);
});

runTest('multiply(4, 5) should equal 20', () => {
  assert.strictEqual(multiply(4, 5), 20);
});

runTest('divide(20, 4) should equal 5', () => {
  assert.strictEqual(divide(20, 4), 5);
});

runTest('divide by zero should throw Error', () => {
  assert.throws(() => divide(10, 0), /Cannot divide by zero/);
});

runTest('isPrime(7) should be true', () => {
  assert.strictEqual(isPrime(7), true);
});

runTest('isPrime(10) should be false', () => {
  assert.strictEqual(isPrime(10), false);
});

console.log('\n--- String Module Tests ---');
runTest('reverseString("hello") should equal "olleh"', () => {
  assert.strictEqual(reverseString('hello'), 'olleh');
});

runTest('isPalindrome("racecar") should be true', () => {
  assert.strictEqual(isPalindrome('racecar'), true);
});

runTest('isPalindrome("hello") should be false', () => {
  assert.strictEqual(isPalindrome('hello'), false);
});

console.log('\n--- Array Module Tests ---');
runTest('uniqueArray([1, 2, 2, 3, 3, 4]) should return [1, 2, 3, 4]', () => {
  assert.deepStrictEqual(uniqueArray([1, 2, 2, 3, 3, 4]), [1, 2, 3, 4]);
});

runTest('flattenArray([1, [2, [3, 4]]]) should return [1, 2, 3, 4]', () => {
  assert.deepStrictEqual(flattenArray([1, [2, [3, 4]]]), [1, 2, 3, 4]);
});

console.log('\n======================================');
console.log(`Results: ${passed} passed, ${failed} failed`);
console.log('======================================');

if (failed > 0) {
  console.log('❌ Test suite execution failed!');
  process.exit(1);
} else {
  console.log('✅ Test suite execution finished cleanly!');
  process.exit(0);
}