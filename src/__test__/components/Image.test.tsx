import {render, screen} from '@testing-library/react'
import {describe, test, expect} from "vitest"
import "@testing-library/jest-dom"
import Image from '../../components/Image'

describe("Test cases for Image component", () => {

    test("Getting Image component by alt text", async () => {

        render(<Image />)
        const image = await screen.getByAltText("Hero icon")
        expect(image).toBeInTheDocument()

    })

})