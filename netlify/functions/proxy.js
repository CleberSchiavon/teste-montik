export async function handler(event) {
    try {
        const apiUrl = 'https://app.landingpage.com.br/api/checkoutloja/LPL2gc/5d87eb644e5631bc6a03f1e43a804e1c' + event.path.replace('/buy-api', '');
        const response = await fetch(apiUrl);

        if (!response.ok) {
            return {
                statusCode: response.status,
                body: JSON.stringify({ error: 'Failed to fetch data from API' }),
                headers: {
                    'Content-Type': 'application/json',
                },
            };
        }

        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error', details: error.message }),
            headers: {
                'Content-Type': 'application/json',
            },
        };
    }
}