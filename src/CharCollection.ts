import { CountingSort } from "./CountingSort";

export class CharCollection extends CountingSort {
  constructor(public input: string) {
    super(input.split("").map((v, _) => v.charCodeAt(0)));
  }

  get sortedString() {
    return this.sortedArray.map((v, _) => String.fromCharCode(v)).join("");
  }
}
