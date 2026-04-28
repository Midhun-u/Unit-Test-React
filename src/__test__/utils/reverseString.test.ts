import { describe, expect, test } from "vitest";
import { reverseString } from "../../utils/reverseString";

describe("Testing reverseString util function", () => {
    test("Reverse string 'Hello' to 'olleH'", () => {
        expect(reverseString("Hello")).toBe("olleH")
    })

    test("Reverse string 'Midhun' to 'nuhdiM'", () => {
        expect(reverseString("Midhun")).toBe("nuhdiM")
    })
})