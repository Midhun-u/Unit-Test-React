import {describe, test, expect} from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import "@testing-library/jest-dom"
import Counter from '../../components/Counter'

describe("Test cases of Count component", () => {
    test("Checking if count is incrementing", async () => {

        render(<Counter />)

        const button = await screen.getByRole("button", {name: "Increment"})
        const counter = await screen.getByTestId("counter")
        expect(counter.textContent).toEqual("0")
        await fireEvent.click(button)
        expect(counter.textContent).toEqual("1")

    })
})