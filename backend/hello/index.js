const _ = require('lodash');

exports.handler = async (event, context) => {
    const messages = ['К звёздам готов!', 'Поехали!', 'Космос зовёт!', 'Орбита свободна!'];
    const randomMessage = _.sample(messages);
    
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ 
            message: randomMessage,
            timestamp: new Date().toISOString()
        })
    };
};