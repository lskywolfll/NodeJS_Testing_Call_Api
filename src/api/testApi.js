const axios = require('axios');

async function getUserTodo() {
    try {
        const result = await (await axios.get('https://jsonplaceholder.typicode.com/todos/1')).data;
        return result
    } catch (error) {
        return error;
    }
}

module.exports = getUserTodo