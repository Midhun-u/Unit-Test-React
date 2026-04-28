import {describe, test, expect} from 'vitest'
import {render, screen} from '@testing-library/react'
import Greeting from "../../components/Greeting"
import "@testing-library/jest-dom"


describe("Testing Greeting component", () => {

    test("Testing default Greeting component", () => {
        render(<Greeting />)
        expect(screen.getByText("Hello World, Welcome to React js")).toBeInTheDocument()
    })

    test("Testing Greeting component when giving props", () => {
        render(<Greeting name='Midhun' />)
        expect(screen.getByText("Hello Midhun, Welcome to React js")).toBeInTheDocument()
    })

})