import { sum } from '../playground/sum'

test('Adds two numbers', () => {
    const result = sum(3, 4);
    expect(result).toBe(8);
})