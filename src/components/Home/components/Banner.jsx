import React, { useRef, useState } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Slider from 'react-slick';
import discord from '../../../assets/images/social/discord.svg';
import Divider from '../../common/Divider';
import navPrev from '../../../assets/images/slider-prev.svg';
import navNext from '../../../assets/images/slider-next.svg';
import Explorer from './Explorer';
import SaleCard from './SaleCard';
import Checkout from './Checkout';
import SocialButton from '../../common/SocialButton';

import tp1 from '../../../assets/images/carousel/tp01.jpg';
import tp2 from '../../../assets/images/carousel/tp13.jpg';
import tp3 from '../../../assets/images/carousel/tp11.jpg';
import tp4 from '../../../assets/images/carousel/tp04.jpg';
import tp5 from '../../../assets/images/carousel/tp05.jpg';
import tp6 from '../../../assets/images/carousel/tp06.jpg';
import tp7 from '../../../assets/images/carousel/tp07.jpg';
import tp8 from '../../../assets/images/carousel/tp08.jpg';
import tp9 from '../../../assets/images/carousel/tp09.jpg';
import tp10 from '../../../assets/images/carousel/tp10.jpg';
import tp11 from '../../../assets/images/carousel/tp12.jpg';
import tp12 from '../../../assets/images/carousel/tp02.jpg';
import tp13 from '../../../assets/images/carousel/tp14.jpg';
import tp14 from '../../../assets/images/carousel/tp15.jpg';
import tp15 from '../../../assets/images/carousel/tp03.jpg';

const BP1 = '@media (max-width: 1079px)';
const BP2 = '@media (max-width: 1480px) and (min-width:1199px)';

const COLOR_CYAN = '#19A8B4';

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row-reverse',
		justifyContent: 'center',
		gap: '40px 40px',
		pt: '80px',
		[BP1]: {
			flexWrap: 'wrap',
		},
		[BP2]: {
			flexWrap: 'wrap',
		},
	},
	content: {
		width: '100%',
		maxWidth: '460px',
		// pt: '24px',
		zIndex: '1',
		[BP1]: {
			pt: '40px',
		},
		[BP2]: {
			maxWidth: '70%',
			pt: 0,
		},
	},
	rightContainer: {
		// alignSelf: 'center',
		position: 'relative',
		width: '100%',
		maxWidth: '658px',
		minWidth: '55%',
		boxSizing: 'border-box',
		[BP1]: {
			minWidth: 'unset',
		},
	},
	imageContainer: {
		overflow: 'hidden',
		width: '100%',
		aspectRatio: '1 / 1',
		cursor: 'pointer',
	},
	carouselImageContainer: {
		outline: 'none',
	},
	sliderNavContainer: {
		position: 'relative',
		width: '100%',
		mt: '8px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		gap: '0 24px',
	},
	sliderNavBtn: {
		width: '40px',
		cursor: 'pointer',
	},
	discordBtn: {
		width: '100%',
		maxWidth: '280px',
		height: '44px',
		backgroundColor: 'primary.main',
		borderRadius: '30px',
		mt: '24px',
		mb: '40px',
		cursor: 'pointer',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		[BP1]: {
			mx: 'auto',
		},
	},
	socialContainer: {
		display: 'flex',
		flexDirection: 'row',
		gap: '0 24px',
		[BP1]: {
			justifyContent: 'center',
		},
	},
	title: {
		[BP1]: {
			textAlign: 'center',
		},
	},
	text1: {
		mt: '16px',
		[BP1]: {
			mt: '24px',
		},
	},
	url: {
		color: COLOR_CYAN,
		'&:hover': {
			textDecoration: 'none',
			color: COLOR_CYAN,
			opacity: 0.9,
		},
	},
};

const HEADER_TEXT = `Through a ragged hole in reality crawl 9,999 Toddlerpillar NFTs generated 
from 888 mind-bending traits, including 60 ultra-rare 1/1s! The project extends the 20 year history 
of artist and gallerist Jon Beinart\'s renowned Toddlerpillar doll sculptures, imbuing them with new 
psychedelic energy from award-winning artist and madman, Tim Molloy.`;

const HEADER2_TEXT = `Toddlerpillar holders join an interdimensional art collective with access to 
global gatherings and exclusive airdrops. With a long term vision to expand the Toddlerpillar brand into an animated series & vinyl collectables, we 
invite you to join us at the forefront of art and technology as we voyage into the untamed wilds of 
Web3.`

const DISCORD_TEXT = 'Join our delightfully strange discord family!';

const IMAGES = [tp1, tp2, tp3, tp4, tp5, tp6, tp7, tp8, tp9, tp10, tp11, tp12, tp13, tp14, tp15];

const url = 'https://discord.gg/toddlerpillars';

const bold = (children) => <Box component='span' sx={{ fontFamily: 'roboto-bold' }}>{children}</Box>;

const sliderConfig = (setCurrentSlide) => ({
	infinite: true,
	speed: 500,
	fade: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	vertical: false,
	// arrows: false,
	autoplay: true,
	autoplaySpeed: 1000,
	adaptiveHeight: true,
	afterChange: setCurrentSlide,
});

const Banner = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [selectedSlide, setSelectedSlide] = useState(2);
	const [explorerVisible, setExplorerVisible] = useState(false);
	const [checkoutVisible, setCheckoutVisible] = useState(false);
	const [mintInfo, setMintInfo] = useState({
		role: null,
		canMintEc: false,
		canMintSale: false,
		saleMaxToken: 0,
		ecMaxToken: 0,
		ecUserMinted: 0,
		userMinted: 0,
		price: 0,
	});
	const [mainSaleStarted, setMainSaleStarted] = useState(false);

	const vertical = useMediaQuery('(max-width: 1079px)');
	const sliderRef = useRef(null);

	const handleCarouselClicked = () => {
		setSelectedSlide(currentSlide);
		setExplorerVisible(true);
	};

	return (
		<Box sx={sx.root}>
			<Box sx={sx.rightContainer}>
				<Box sx={sx.imageContainer} onClick={handleCarouselClicked}>
					<Slider {...(sliderConfig(setCurrentSlide))} ref={sliderRef}>
						{IMAGES.map((image, i) => (
							<Box key={i.toString()} sx={sx.carouselImageContainer}>
								<img src={image} style={{ width: '100%' }} alt={`Carousel ${i + 1}`} />
							</Box>
						))}
					</Slider>
				</Box>
				<Box sx={sx.sliderNavContainer}>
					<Box />
					{!vertical && (
						<>
							<Box sx={sx.sliderNavBtn} onClick={() => sliderRef.current.slickPrev()}>
								<img src={navPrev} alt='Previous' />
							</Box>
							<Box sx={sx.sliderNavBtn} onClick={() => sliderRef.current.slickNext()}>
								<img src={navNext} alt='Next' />
							</Box>
						</>
					)}
					<Typography sx={{ position: 'absolute', right: 0 }}>{`${currentSlide + 1} of ${IMAGES.length}`}</Typography>
				</Box>
			</Box>
			<Box sx={sx.content}>
				<Box sx={sx.col}>
					<Typography variant='heading1' sx={sx.title}>Toddlerpillars NFT Collection</Typography>
					{vertical && <Divider titleDivider />}
					<Typography variant='text' sx={{ ...sx.text1, mb: 2 }}>{HEADER_TEXT}</Typography>
					
					<Typography variant='text' sx={{ ...sx.text1, mb: 2 }}>{HEADER2_TEXT}</Typography>

					{!mainSaleStarted
						&& (
							<Typography variant='text' sx={{ ...sx.text2, my: '16px' }}>
								{bold('Public Sale starts 12pm EST on Nov 19th.')}
							</Typography>
						)}

				</Box>

				<Box sx={sx.col}>
					<SaleCard
						mintOnClick={(mintInfo) => {
							setCheckoutVisible(true);
							setMintInfo(mintInfo);
						}}
						setMainSaleStarted={setMainSaleStarted}
					/>
				</Box>

				<Typography variant='text' sx={{ ...sx.text2, mt: '16px' }}>
					{bold(
						<>
							Check collection on
							{' '}
							<Box
								component='a'
								sx={sx.url}
								href='https://opensea.io/collection/toddlerpillars'
								target='_blank'
								rel='noopener noreferrer'
							>
								OpenSea
							</Box>
						</>,
					)}
				</Typography>

				{/*
				<Typography variant='text' sx={{ mt: '16px' }}>{DISCORD_TEXT}</Typography>
				<a href={url} target='_blank' rel='noopener noreferrer'>
					<Box sx={sx.discordBtn}>
						<img src={discord} style={{ height: 35 }} alt='Discord' />
					</Box>
				</a>
				<Box sx={sx.socialContainer}>
					<SocialButton variant='instagram' />
					<SocialButton variant='twitter' />
					<SocialButton variant='email' />
				</Box> */}
			</Box>
			<Checkout isOpen={checkoutVisible} setOpen={setCheckoutVisible} mintInfo={mintInfo} />
			<Explorer isOpen={explorerVisible} setOpen={setExplorerVisible} images={IMAGES} initialSlide={selectedSlide} />
		</Box>
	);
};

export default Banner;
