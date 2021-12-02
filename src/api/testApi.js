const axios = require('axios');

async function getUserTodo() {
    const result = await (await axios.get('https://jsonplaceholder.typicode.com/todos/1')).data;
    return result
}

module.exports = getUserTodo