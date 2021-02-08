import { Sortable } from "./SortingAlgorithm";

export class NumbersCollection implements Sortable {
  arrayToSort: number[];
  sortedArray: number[];
  largestInputValue: number;
  smallestInputValue: number;

  constructor(public input: number[]) {
    this.largestInputValue = Math.max(...this.input);
    this.smallestInputValue = Math.min(...this.input);
    this.arrayToSort = this.input;
    this.sortedArray = Array(this.input.length);
  }
}
