export interface Sortable {
  largestInputValue: number;
  smallestInputValue: number;
  arrayToSort: number[];
  sortedArray: number[];
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort() {
    const countObjectLength =
      this.collection.largestInputValue -
      this.collection.smallestInputValue +
      1;

    const arrayToSortLength = this.collection.arrayToSort.length;

    let countArrayShape = Array.from<number, number[]>(
      { length: countObjectLength },
      (_, i) => [this.collection.smallestInputValue + i, 0]
    );

    let count: Record<number, number> = Object.fromEntries(countArrayShape);

    for (let item of this.collection.arrayToSort) {
      count[item] = ++count[item] || 0;
    }

    for (
      let index = this.collection.smallestInputValue;
      index < this.collection.largestInputValue;
      index++
    ) {
      count[index + 1] += count[index] || 0;
    }

    let output: number[] = Array(arrayToSortLength);

    for (let index = arrayToSortLength - 1; index >= 0; index--) {
      output[
        --count[this.collection.arrayToSort[index]!]
      ] = this.collection.arrayToSort[index]!;
    }

    this.collection.sortedArray = output;
  }
}
