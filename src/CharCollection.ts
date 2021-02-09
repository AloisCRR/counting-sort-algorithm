import { CountingSort } from "./SortingAlgorithm";

export class CharCollection extends CountingSort {
  arrayToSort: number[];
  sortedArray: number[];
  largestInputValue: number;
  smallestInputValue: number;

  constructor(public input: string) {
    super();
    this.arrayToSort = this.input.split("").map((v, _) => v.charCodeAt(0));
    this.largestInputValue = Math.max(...this.arrayToSort);
    this.smallestInputValue = Math.min(...this.arrayToSort);
    this.sortedArray = Array(this.input.length);
  }

  getSortedString() {
    super.sort();
    return this.sortedArray.map((v, _) => String.fromCharCode(v)).join("");
  }
}
