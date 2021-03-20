import { CharCollection } from "./CharCollection";
import { CountingSort } from "./CountingSort";

const numbersCollection = new CountingSort([1, -20, 3, -2, 45]).sortedArray;

const charCollection = new CharCollection("hello world").sortedString;

console.log(numbersCollection); // Expected output [ -20, -2, 1, 3, 45 ]
console.log(charCollection); // Expected output dehllloorw

// TODO Order a linked list
