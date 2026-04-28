import {test, expect, describe} from 'vitest'
import { getSum } from '../../utils/getSum'

describe("Testing getSum util function", () => {
    test("Add 1 + 2 equals to 3", () => {
        expect(getSum(1, 2)).toBe(3)
    })
    
    test("Add 10 + 10 equals to 20", () => {
        expect(getSum(10, 10)).toBe(20)
    }) 
})