export class CountingSort {
  private largestInputValue: number;
  private smallestInputValue: number;
  private arrayToSort: number[];
  sortedArray: number[];

  constructor(input: number[]) {
    this.largestInputValue = Math.max(...input);
    this.smallestInputValue = Math.min(...input);
    this.arrayToSort = input;
    this.sortedArray = Array(input.length);
    this.sort();
  }

  private sort() {
    let { largestInputValue, smallestInputValue, arrayToSort } = this;

    const countObjectLength = largestInputValue - smallestInputValue + 1;

    const arrayToSortLength = arrayToSort.length;

    let countArrayShape = Array.from<number, number[]>(
      { length: countObjectLength },
      (_, i) => [smallestInputValue + i, 0]
    );

    let count: Record<number, number> = Object.fromEntries(countArrayShape);

    for (let item of arrayToSort) {
      count[item] = ++count[item] || 0;
    }

    for (let index = smallestInputValue; index < largestInputValue; index++) {
      count[index + 1] += count[index] || 0;
    }

    let output: number[] = Array(arrayToSortLength);

    for (let index = arrayToSortLength - 1; index >= 0; index--) {
      output[--count[arrayToSort[index]!]] = arrayToSort[index]!;
    }

    this.sortedArray = output;

    return this;
  }
}
