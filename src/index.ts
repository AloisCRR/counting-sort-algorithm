import { CharCollection } from "./CharCollection";
import { NumbersCollection } from "./NumbersCollection";

/* declare global {
  interface Array<T> {
    getSortedString(): string;
  }
}

Array.prototype.getSortedString = function <T extends number>(
  this: T[]
): string {
  return this.map((v, _) => String.fromCharCode(v)).join("");
}; */

const numbersCollection = new NumbersCollection([1, -20, 3, -2, 45]).sort()
  .sortedArray;
const charCollection = new CharCollection("hello world")
  .sort()
  .getSortedString();

console.log(numbersCollection); // Expected output [ -20, -12, 1, 3, 45, 345 ]
console.log(charCollection); // Expected output dehllloorw

// TODO Order a linked list
