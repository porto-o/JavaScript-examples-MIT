const greet = require('./main.js')


test('null name greeting', () => {
    expect(greet('')).toBe('Hello, there!');
});

test('uppercase greeting', () => {
    expect(greet('ISMAEL')).toBe('HELLO, ISMAEL!');
});

test('greeting normal', () => {
    expect(greet('Ismael')).toBe('Hello, Ismael!');
});

test('receiving array of two items', () => {
    expect(greet(['Ismael', 'Roberto'])).toBe('Hello, Ismael, Roberto!');
})

test('receiving multiple items', () => {
    expect(greet(['Pepe', 'Fulano', 'Rodrigo', 'Elefante'])).toBe('Hello, Pepe, Fulano, Rodrigo, Elefante!');
})