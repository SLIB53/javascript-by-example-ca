const fibr = [0, 1, 1, 2, 3];
console.log(fibr);

const mySet = new Set(fibr);
console.log(mySet);
console.log("size: " + mySet.size);

const mySet2 = new Set([...mySet].map((i) => i.toString()));
mySet2.delete('0');
console.log(mySet2);
console.log("size: " + mySet2.size);
