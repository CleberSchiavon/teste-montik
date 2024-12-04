import fetch from 'node-fetch';

export async function handler(event) {
    const response = await fetch('https://app.landingpage.com.br/api/checkoutloja/LPL2gc/5d87eb644e5631bc6a03f1e43a804e1c' + event.path.replace('/buy-api', ''));
    const data = await response.json();
    return {
        statusCode: response.status,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    };
}