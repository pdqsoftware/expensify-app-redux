// Define a function to test, or use 'import' if the function already exists in another file
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('Generates a greeting message using name', () => {
    const result = generateGreeting('Simon');
    expect(result).toBe('Hello Simon!')
})

test('Generates a greeting message with no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!')
})