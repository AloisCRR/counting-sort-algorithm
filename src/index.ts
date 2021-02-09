import { CharCollection } from "./CharCollection";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([1, -20, 3, -2, 45]).sort();
const charCollection = new CharCollection("hello world").getSortedString();

console.log(numbersCollection); // Expected output [ -20, -12, 1, 3, 45, 345 ]
console.log(charCollection); // Expected output dehllloorw

// TODO Order a linked list
