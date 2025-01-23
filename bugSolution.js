function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.'); // Handle null values by throwing an error
  }
  return a + b;
}

console.log(foo(10, 5)); // Output: 15

//Alternative solution returning null:
function foo2(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values by returning null
  }
  return a + b;
}
console.log(foo2(null,5)); //Output: null

//Alternative solution using default values
function foo3(a = 0, b = 0) {
  return a + b;
}
console.log(foo3(null, 5)); // Output: 5
console.log(foo3(10, null)); // Output: 10