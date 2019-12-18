const CDP = require('chrome-remote-interface');
const fs = require('fs');

const cookies = JSON.parse(fs.readFileSync('./cookies.json').toString());

async function example() {
    let client;
    try {
        client = await CDP();
        const {Network} = client;
        Network.requestWillBeSent((params) => {
            console.log('requestWillBeSent: ', params.request.url);
        });

        console.log('--- Cookies start ---\n\n');
        console.log(cookies);
        console.log('\n\n --- Cookies end ---');

        await Network.setCookies(cookies);
    } catch (err) {
        console.error(err);
    } finally {
        if (client) {
            await client.close();
        }
    }
}

example();