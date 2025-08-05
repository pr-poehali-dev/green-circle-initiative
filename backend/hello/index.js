exports.handler = async (event, context) => {
    const timestamp = new Date().toISOString();
    
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ 
            message: 'К звёздам готов!',
            timestamp: timestamp
        })
    };
};