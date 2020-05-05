import fs from 'fs';
import cdp from 'chrome-remote-interface';

const cookies = JSON.parse(fs.readFileSync('./cookies.json').toString());

async function setCookies() {
	let client;
	try {
		client = await cdp();
		const network = client.Network;
		network.requestWillBeSent(parameters => {
			console.log('requestWillBeSent:', parameters.request.url);
		});

		console.log('--- Cookies start ---\n\n');
		console.log(cookies);
		console.log('\n\n --- Cookies end ---');

		await network.setCookies(cookies);
	} catch (error) {
		console.error(error);
	} finally {
		if (client) {
			await client.close();
		}
	}
}

setCookies();
