class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    const [maxNumber, minNumber] = [
      Math.max(...this.collection),
      Math.min(...this.collection),
    ];

    const arrayLength = maxNumber - minNumber + 1;

    let count: number[][] | Record<number, number> = Array.from(
      { length: arrayLength },
      (_, i) => [minNumber + i, 0]
    );

    count = Object.fromEntries(count);

    for (const number of this.collection) {
      count[number] = ++(count[number] as number) || 0;
    }

    for (let index = minNumber; index < maxNumber; index++) {
      (count[index + 1] as number) += count[index] as number;
    }

    let output = Array(this.collection.length);

    for (let index = this.collection.length - 1; index >= 0; index--) {
      output[
        --(count[this.collection[index] as number] as number)
      ] = this.collection[index];
    }

    console.log(output);
  }
}

let exampleArrayLength = 100;

const testArray = Array.from(
  { length: exampleArrayLength },
  () =>
    Math.floor(Math.random() * exampleArrayLength * 2 + 1) - exampleArrayLength
);

new Sorter(testArray).sort();
