// Define a function to test, or use 'import' if the function already exists in another file
const add = (a, b) => a + b;

test('Adds together two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});
