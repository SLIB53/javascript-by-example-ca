let mul = (x, y) => x * y;

console.log(mul(2, 3));
console.log(mul(2, 3, 12, 'bananas', () => 'why?'));
console.log(mul(2));

mul = (x, y = 1) => x * y;

console.log(mul(2));
