import { CountingSort } from "./SortingAlgorithm";

export class NumbersCollection extends CountingSort {
  arrayToSort: number[];
  sortedArray: number[];
  largestInputValue: number;
  smallestInputValue: number;

  constructor(public input: number[]) {
    super();
    this.largestInputValue = Math.max(...this.input);
    this.smallestInputValue = Math.min(...this.input);
    this.arrayToSort = this.input;
    this.sortedArray = Array(this.input.length);
  }
}
