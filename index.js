/**
 * MagnusCI Benchmark Utility Suite
 */

// Math Operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  // BRUTAL BUG INTRODUCED
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// String Operations
function reverseString(str) {
  if (typeof str !== 'string') return '';
  return str.split('').reverse().join('');
}

function isPalindrome(str) {
  if (typeof str !== 'string') return false;
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}

// Array Operations
function uniqueArray(arr) {
  if (!Array.isArray(arr)) return [];
  return [...new Set(arr)];
}

function flattenArray(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.reduce((flat, toFlatten) => 
    flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []
  );
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  isPrime,
  reverseString,
  isPalindrome,
  uniqueArray,
  flattenArray
};
