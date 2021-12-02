
const suma = require('../math/suma');

describe('esto es una prueba de la libreria suma', () => {
    test('suma(2,2) deberia retornarme un 4', () => {
        const result = suma(2, 2);
        expect(result).toBe(4);
    })

})