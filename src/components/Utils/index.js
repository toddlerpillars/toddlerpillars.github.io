export const getTokenURI = (uri, uriIdx) => {
	let u = uri;
	if (uri.indexOf('http') !== 0) {
		u = u.replace('ipfs://', '/ipfs/');
		if (u.indexOf('/ipfs') === -1) {
			u = `/ipfs/${u}`;
		}
		u = getIpfsGatewayUrl(uriIdx) + u;
	}
	console.log('uri to get', uri);

	return fetch(u)
		.then((res) => res.json())
		.then(
			(result) => result,
			(error) => {
				console.log('***Error:', error);
				return null;
			},
		);
};

export const  pauseFor = (time) => new Promise((resolve) => setTimeout(resolve, time));

export const getIpfsGatewayUrl = (index) => {
	const urls = ['https://gateway.pinata.cloud', 'https://gateway.ipfs.io'];

	const idx = (index === undefined || index === null) ? 0 : index % urls.length;
	return urls[idx];
};

export const padZeros = (num, zeros) => {
	const z = '00000000';
	const n = num.toString();

	if (n.length >= zeros) {
		return n;
	}
	return z.substr(0, zeros - n.length) + n;
};

export const parseRpcError = (message) => {
	console.log('raw message', message);

	let result = message;
	const start = message.indexOf('\'{"') + 1;
	const len = message.indexOf('}\'') + 1 - start;
	const m = message.substr(start, len);

	try {
		const jsonmsg = JSON.parse(m);
		result = jsonmsg.value.data.message;
	} catch (e) {
		console.log('message not found');
	}
	return result;
};

/* eslint-disable no-bitwise */
export const getTraitsFromHexString = (traitHex) => {
	const traits = [];
	for (let i = 0; i < traitHex.length; i += 1) {
		if (traitHex[traitHex.length - 1 - i] !== 'x') {
			const cnum = parseInt(traitHex[traitHex.length - 1 - i], 16);
			if (cnum & 1) {
				traits.push(i * 4);
			}
			if (cnum & 2) {
				traits.push(i * 4 + 1);
			}
			if (cnum & 4) {
				traits.push(i * 4 + 2);
			}
			if (cnum & 8) {
				traits.push(i * 4 + 3);
			}
		}
	}
	return traits;
};

export const validateUrl = (url) => {
	if (url.indexOf('http') === 0) {
		return url;
	}
	if (url.indexOf('ipfs://') === 0 || url.indexOf('/ifps/') === 0) {
		const u = url.replace('ipfs://', '/ipfs/');
		return getIpfsGatewayUrl(0) + u;
	}
	return `${getIpfsGatewayUrl(0)}/ipfs/${url}`;
};

export const getTokenMeta = (uri) => fetch(uri)
	.then((res) => res.json())
	.then(
		(result) =>
			result,
		(error) => {
			console.log('***Error:', error);
			return null;
		},
	);
