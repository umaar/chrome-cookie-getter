const CDP = require('chrome-remote-interface');
const fs = require('fs');

async function example() {
    let client;
    try {
        client = await CDP();
        const {Network} = client;
        Network.requestWillBeSent((params) => {
            console.log('requestWillBeSent: ', params.request.url);
        });

        const cookies = await Network.getAllCookies();

        console.log('--- Cookies start ---\n\n');
        console.log(cookies);
        console.log('\n\n --- Cookies end ---');
        fs.writeFileSync('./cookies.json', JSON.stringify(cookies, null, '\t'));
    } catch (err) {
        console.error(err);
    } finally {
        if (client) {
            await client.close();
        }
    }
}

example();