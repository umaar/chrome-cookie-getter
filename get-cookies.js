import fs from 'fs';
import cdp from 'chrome-remote-interface';

async function example() {
	let client;
	try {
		client = await cdp();
		const network = client.Network;
		network.requestWillBeSent(parameters => {
			console.log('requestWillBeSent:', parameters.request.url);
		});

		const cookies = await network.getAllCookies();

		console.log('--- Cookies start ---\n\n');
		console.log(cookies);
		console.log('\n\n --- Cookies end ---');
		fs.writeFileSync('./cookies.json', JSON.stringify(cookies, null, '\t'));
	} catch (error) {
		console.error(error);
	} finally {
		if (client) {
			await client.close();
		}
	}
}

example();
