import { describe, expect, test } from "vitest";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Input from "../../components/Input";

describe("Testing cases of Input component", () => {

    test("Testing Input component with placeholder", async () => {

        render(<Input />)
        const input = await screen.findByPlaceholderText("Enter something")
        expect(input).toBeInTheDocument()

    })
    
    test("Testing Input component with value", async () => {
        render(<Input value="Midhun" />)
        const input = await screen.getByDisplayValue("Midhun")
        expect(input).toBeInTheDocument()
    })

})