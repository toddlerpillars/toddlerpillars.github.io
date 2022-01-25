import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ethers } from 'ethers';
import { toast } from 'react-toast';
import { Box, Modal, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { SpinnerRoundOutlined as Spinner } from 'spinners-react';
import { useSaleContract } from '../../../hooks/useContract';
import Divider from '../../common/Divider';
import MintQuantity from './MintQuantity';
import config from '../../../config';
import close from '../../../assets/images/close.svg';

const BP1 = '@media (max-width: 899px)';
const BP2 = '@media (max-width: 719px)';
const COLOR_CYAN = '#5deffb';

const sx = {
	root: {
		height: '100%',
		backgroundColor: 'rgba(255,255,255,1)',
		py: '44px',
		px: '125px',
		position: 'relative',
		transition: 'all .3s',
		[BP1]: {
			px: '85px',
		},
		[BP2]: {
			px: '25px',
		},
	},
	title: {
		mt: '20px',
		textAlign: 'center',
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'top',
		textAlign: 'center',
		gap: '0 25px',
	},
	textContainer: {
		position: 'absolute',
		mt: '8px',
		width: '100%',
		height: '26px',
		left: 0,
	},
	closeBtn: {
		position: 'absolute',
		width: '32px',
		min: '32px',
		top: '20px',
		right: '20px',
		cursor: 'pointer',
		pointerEvents: 'auto',
	},
	url: {
		textDecoration: 'none',
		color: '#19a8b4',
		fontWeight: '700',
	},
	darkOverlay: {
		zIndex: 100,
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0,0,0,0.8)',
	},
};

const titles = ['Omnipillars', 'Toddlerpillars', 'Early Supporter'];
const mintMax = [8, 6, 2];

const Checkout = ({ isOpen, setOpen, mintInfo }) => {
	const {
		canMintSale, // Main Sale
		saleMaxToken,
		canMintEc, // Presale
		ecMaxToken,
		ecUserMinted,
		role, // Community Sale
		userMinted, // Community Minted
		price,
	} = mintInfo;

	const title = role ? titles[role[1]] : '';
	const maxAmount = role ? mintMax[role[1]] - userMinted : 0;
	const maxEcAmount = ecMaxToken - ecUserMinted;

	const [approveInProgress, setApproveInProgress] = useState(false);
	const [txInProgress, setTxInProgress] = useState(false);
	const [txEtherScan, setTxEtherScan] = useState(null);

	const history = useHistory();
	const saleContract = useSaleContract();

	const onClickMint = async (quantity, totalPrice) => {
		setApproveInProgress(true);
		// console.log(quantity, totalPrice, role);
		console.log('start mint');

		const payingAmount = ethers.utils.parseEther(totalPrice.toString());

		await saleContract
			.communityPurchase(quantity, role[0], role[1], { value: payingAmount })
			.then((tx) => {
				setApproveInProgress(false);
				setTxInProgress(true);
				console.log(`${config.ETHERSCAN_URL}tx/${tx.hash}`);
				setTxEtherScan(`${config.ETHERSCAN_URL}tx/${tx.hash}`);
				return tx.wait().then((receipt) => {
					console.log('txReceipt: ', receipt);
					if (receipt && receipt.status === 1) {
						toast.success('Successfully Bought NFT');
						history.replace({ ...history.location, state: null });
						history.push({
							pathname: '/collections',
						});
						setTxEtherScan(null);
					} else {
						toast.error('Transaction Failed');
						setTxInProgress(false);
						setTxEtherScan(null);
					}
				});
			})
			.catch(handleError);

		setTxInProgress(false);
		setApproveInProgress(false);
	};

	const onClickMintWithEC = async (quantity, totalPrice) => {
		setApproveInProgress(true);
		console.log(quantity, totalPrice);
		console.log('start mint with EC');

		const payingAmount = ethers.utils.parseEther(totalPrice.toString());

		await saleContract
			.mintDiscountPresaleWithEtherCards(quantity, { value: payingAmount })
			.then((tx) => {
				setApproveInProgress(false);
				setTxInProgress(true);
				console.log(`${config.ETHERSCAN_URL}tx/${tx.hash}`);
				setTxEtherScan(`${config.ETHERSCAN_URL}tx/${tx.hash}`);
				return tx.wait().then((receipt) => {
					console.log('txReceipt: ', receipt);
					if (receipt && receipt.status === 1) {
						toast.success('Successfully Bought NFT');
						history.replace({ ...history.location, state: null });
						history.push({
							pathname: '/collections',
						});
						setTxEtherScan(null);
					} else {
						toast.error('Transaction Failed');
						setTxInProgress(false);
						setTxEtherScan(null);
					}
				});
			})
			.catch(handleError);

		setTxInProgress(false);
		setApproveInProgress(false);
	};

	const onClickMintSale = async (quantity, totalPrice) => {
		setApproveInProgress(true);
		console.log(quantity, totalPrice);
		console.log('start mint with EC');

		const payingAmount = ethers.utils.parseEther(totalPrice.toString());

		await saleContract
			.mint(quantity, { value: payingAmount })
			.then((tx) => {
				setApproveInProgress(false);
				setTxInProgress(true);
				console.log(`${config.ETHERSCAN_URL}tx/${tx.hash}`);
				setTxEtherScan(`${config.ETHERSCAN_URL}tx/${tx.hash}`);
				return tx.wait().then((receipt) => {
					console.log('txReceipt: ', receipt);
					if (receipt && receipt.status === 1) {
						toast.success('Successfully Bought NFT');
						history.replace({ ...history.location, state: null });
						history.push({
							pathname: '/collections',
						});
						setTxEtherScan(null);
					} else {
						toast.error('Transaction Failed');
						setTxInProgress(false);
						setTxEtherScan(null);
					}
				});
			})
			.catch(handleError);

		setTxInProgress(false);
		setApproveInProgress(false);
	};

	const handleError = (e) => {
		if (e.error && e.error.message) {
			toast.error(e.error.message);
		} else if (e.message) {
			toast.error(e.message);
		} else if (e.reason) {
			toast.error(e.reason);
		}
	};

	return (
		<Modal
			open={isOpen}
			onClose={(event, reason) => {
				if (reason !== 'backdropClick' && !txInProgress && !approveInProgress) {
					setOpen(false);
				}
			}}
		>
			<Box sx={sx.root}>
				<Box sx={sx.content}>
					{!txInProgress ? (
						<>
							<Typography variant='heading1' sx={sx.title}>
								Checkout Page
							</Typography>
							<Divider titleDivider />
							<Typography variant='text' sx={{ my: 4 }}>
								Please select the number of NFTs you want to mint.
							</Typography>
							{role && (
								<MintQuantity
									title={`${title} Mint`}
									price={price}
									maxAmount={maxAmount}
									onClickMint={onClickMint}
								/>
							)}
							{canMintEc && (
								<MintQuantity
									title='Ether Cards Mint'
									price={price}
									maxAmount={maxEcAmount}
									onClickMint={onClickMintWithEC}
								/>
							)}
							{canMintSale && (
								<MintQuantity
									title='Main Sale Mint'
									price={price}
									// maxAmount={saleMaxToken}
									maxAmount={10} // hardcoded limit 10
									onClickMint={onClickMintSale}
								/>
							)}
						</>
					) : (
						<>
							<Typography variant='heading1' sx={sx.title}>
								Transaction In Progress
							</Typography>
							<Divider titleDivider />
							<Typography variant='text' sx={{ my: 4 }}>
								Please wait while your transaction is being processed.
								{' '}
								<br />
								{txEtherScan && (
									<>
										You can check the transaction status on
										{' '}
										<Box
											component='a'
											href={txEtherScan}
											sx={sx.url}
											target='_blank'
											rel='noopener noreferrer'
										>
											Etherscan
										</Box>
										.
									</>
								)}
							</Typography>

							<Spinner
								color={COLOR_CYAN}
								style={{ marginLeft: 'auto', marginRight: 'auto' }}
							/>
						</>
					)}
				</Box>

				{approveInProgress && <Box sx={sx.darkOverlay} />}

				{!txInProgress && (
					<Box sx={sx.closeBtn} onClick={() => !txInProgress && setOpen(false)}>
						// eslint-disable-next-line jsx-quotes
						<img src={close} style={{ width: '100%' }} alt='Close' />
					</Box>
				)}
			</Box>
		</Modal>
	);
};

/* eslint-disable react/forbid-prop-types */
Checkout.propTypes = {
	mintInfo: PropTypes.object.isRequired,
	isOpen: PropTypes.bool.isRequired,
	setOpen: PropTypes.any.isRequired,
};
export default Checkout;
