const getTodo = require('../api/testApi');

describe("testing api todos", () => {
    test('should be return userID 1', async () => {
        const result = await getTodo();
        expect(result.userId).toStrictEqual(1);
    })

})