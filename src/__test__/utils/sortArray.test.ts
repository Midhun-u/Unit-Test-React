import { describe, expect, test } from "vitest";
import { sortArray } from "../../utils/sortArray";

describe("Test sortArray util function", () => {
    test("Sort array [5, 4, 3, 2, 1] to [1, 2, 3, 4, 5]", () => {
        expect(sortArray([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
    })
    test("Sort array [5, 6, 4, 1, 2] to [1, 2, 4, 5, 6]", () => {
        expect(sortArray([5, 6, 4, 1, 2])).toEqual([1, 2, 4, 5, 6])
    })
    test("Checking if sorted array is working as expected", () => {
        expect(sortArray([5, 4, 3, 2, 1])).not.toEqual([5, 4, 3, 2, 1])
    })
})