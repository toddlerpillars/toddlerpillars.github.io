import { ethers } from 'ethers';
import AddressesMain from '../../contracts/addresses-1.json';
import AddressesRinkeby from '../../contracts/addresses-4.json';
import AddressesLocal from '../../contracts/addresses-1337.json';
import EtherCards from '../../contracts/EtherCards.json';
import Zoom2 from '../../contracts/Zoom2.json';

const contractAbis = { EtherCards, Zoom2 };
const addresses = {
	1: { addr: AddressesMain, name: 'Main' },
	4: { addr: AddressesRinkeby, name: 'Rinkeby' },
	1337: { addr: AddressesLocal, name: 'localhost' },
};

export const getContract = async (contractName, provider) => {
	const ntw = await provider.getNetwork();
	const contractAbi = contractAbis[contractName];
	const address = addresses[ntw.chainId].addr[contractName];

	let contract = null;

	try {
		contract = new ethers.Contract(address, contractAbi.abi, provider);
	} catch (e) {
		console.log('contract not found');
	}
	return contract;
};
