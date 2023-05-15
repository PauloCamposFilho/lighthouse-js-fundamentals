function range(start, end, step) {
  let results = [];
  // define error cases:
  if (start > end || step <= 0) {
    return results;
  }
  for (let i = start; i <= end; i = i + step) {
    results.push(i);
  }
  return results;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));