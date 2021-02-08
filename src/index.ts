import { CharCollection } from "./CharCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./SortingAlgorithm";

const numbersCollection = new NumbersCollection([1, -20, 3, 45, -12, 345]);
const charCollection = new CharCollection("hello world");

new Sorter(numbersCollection).sort();
new Sorter(charCollection).sort();

console.log(numbersCollection.sortedArray); // Expected output [ -20, -12, 1, 3, 45, 345 ]
console.log(charCollection.getSortedString()); // Expected output dehllloorw

// TODO Order a linked list
