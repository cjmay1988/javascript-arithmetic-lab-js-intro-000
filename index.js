function add(a, b) {
  return a + b
}
function subtract(a, b) {
  return a -b
}
function multiply(a, b) {
  return a * b 
}
function divide(a, b) {
  return a / b
}
function inc(a) {
  return a + 1
}
function dec(a) {
  return a - 1
}
function makeInt(n) {
  if (typeof(n) === "number") {
 return n + " is already a number";
 }
 else {
   return parseInt(n, 10);
 }
}
function preserveDecimal(n) {
  if (typeof(n) === "number")
  return n + " is already a number"
  }
  