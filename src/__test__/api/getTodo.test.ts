import { describe, expect, test } from "vitest";
import { getTodo } from "../../api/getTodo";

describe("Checking getTodo api function", () => {
    test("Fetching todo", async () => {
        const data = await getTodo()
        expect(data).not.toEqual({
            completed: null,
            id: null,
            title: null,
            userId: null,
        })
    })
})