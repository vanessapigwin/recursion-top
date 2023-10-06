// iterative method
const fibIterative = (n) => {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
};

console.log(fibIterative(8));

const fibRecursive = (n, array = [0, 1]) => {
  if (n < 1) return array;
  return fibRecursive(
    n - 1,
    array.push(fibRecursive(n - 2) + fibRecursive(n - 3))
  );
};

console.log(fibIterative(8));
