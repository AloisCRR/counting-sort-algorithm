import { Sortable } from "./SortingAlgorithm";

export class CharCollection implements Sortable {
  arrayToSort: number[];
  sortedArray: number[];
  largestInputValue: number;
  smallestInputValue: number;

  constructor(public input: string) {
    this.arrayToSort = this.input.split("").map((v, _) => v.charCodeAt(0));
    this.largestInputValue = Math.max(...this.arrayToSort);
    this.smallestInputValue = Math.min(...this.arrayToSort);
    this.sortedArray = Array(this.input.length);
  }

  getSortedString() {
    return this.sortedArray.map((v, _) => String.fromCharCode(v)).join("");
  }
}
