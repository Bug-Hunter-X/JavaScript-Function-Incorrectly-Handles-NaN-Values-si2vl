function foo(x) {
  if (x === null) {
    return "null";
  } else if (x === undefined) {
    return "undefined";
  } else if (isNaN(x)) {
    return "NaN";
  } else {
    return x;
  }
}

console.log(foo(null)); // Output: null
console.log(foo(undefined)); // Output: undefined
console.log(foo(0)); // Output: 0
console.log(foo(NaN)); // Output: NaN