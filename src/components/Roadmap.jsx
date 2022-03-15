import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Divider from './common/Divider';
import Discord from './common/Discord';
import Paragraph from './common/Paragraph';

const BP1 = '@media (max-width: 1079px)';

const sx = {
	title: {
		textAlign: 'center',
		mt: '80px',
		[BP1]: {
			mt: '56px',
		},
	},
	divider: {
		mt: '80px',
		[BP1]: {
			mt: '56px',
		},
	},
	textContainer: {
		width: '100%',
		mt: '40px',
		display: 'flex',
		flexDirection: 'row',
		gap: '32px 40px',
		[BP1]: {
			mt: '32px',
			flexDirection: 'column',
		},
	},
	subtitle: {
		mb: '16px',
	},
	textCol: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		gap: '32px',
		zIndex: '1',
	},
};

const TEXT2 = 'Youtube, Twitch and Podcast interviews with project creators Jon Beinart & Tim Molloy. They will also frequently participate in Twitter spaces to talk about the project.';
const TEXT3 = 'We will research ways in which we can enhance our project by adding utility to our tokens and pave the way for future interactivity with the metaverse. '
	+ 'This will include post-mint plans for a blockchain-based Toddlerpillar game and 3D assets for the Metaverse.';
const TEXT4 = [
	'Our illustrator, Tim Molloy will draw around the clock and produce as many strange trait variants as is humanly possible and we will continue to share sneak-peeks in our discord '
	+ 'and on Twitter. A number of these traits have been suggested by community members on our discord.',
	'One of our aims for this project is to create an enormous variety of unique traits, ensuring that even the most "common" Toddlerpillars will be far from that! Every Toddlerpillar '
	+ 'will look dramatically different to its siblings. So much so, that those special creatures, with a combination of the rarest traits, including a handful of 1/1 traits, will be '
	+ 'highly coveted by collectors!',
];

const TEXT5 = [
	'Superchief Gallery NFT will arrange a Toddlerpillar installation at SCOPE during Miami Art Week/Miami Art Basel 2021. They will also arrange a featured booth at Miami '
	+ 'DCentral 2021 (Defi Conference) for Toddlerpillars.',
	'Both Opensea and Juxtapoz Magazine will host twitter spaces for Toddlerpillars.',
	'Jon Beinart and Tim Molloy will reach out to NFT and Crypto influencers on Youtube, Podcasts and streaming services for interviews. They will also frequently participate '
	+ 'in Twitter spaces to talk about the Toddlerpillars project. There will be more giveaways in collaboration with other NFT projects & Twitter influencers.',
];

const TEXT6 = [
	`Jon Beinart and Tim Molloy will start working on their next NFT project, Chimerapillars, 
	which they aim to launch in the second quarter of 2022. Chimerapillars will be loyal
	companions to the Toddlerpillars and as such, every Toddlerpillar token holder will be able to 
	claim a free Chimerapillar!`,
	`All Toddlerpillar parents (token holders) will also gain access to the VIP Presale for the Chimerapillars drop. 
	This next series will be just as intricate and bizarre as the Toddlerpillars series, only much more cuddly.`,
];

const TEXT7 = 'We will collaborate with skilled 3D digital artists to create still & animated Toddlerpillar assets for the Metaverse. '
	+ 'We will also release a series of real world Toddlerpillar vinyl toys as well as other merch.';
const TEXT8 = 'We will collaborate with new creative and interesting NFT projects by airdropping their tokens to random holders of Toddlerpillars. '
	+ 'These projects will be curated and will need to complement our own aesthetics, themes and community.';
const TEXT9 = 'We\'ll arrange three large gatherings of Toddlerpillar token holders for 2022. The first will take place at Beinart Gallery in '
	+ 'Melbourne, Australia, the second in Los Angeles, USA and the third at Superchief Gallery NFT in NYC, USA. These events will provide a wonderful '
	+ 'opportunity for community members to get to know each other in real life and discuss future plans for all things Toddlerpillar.';
const TEXT10 = 'In early 2022, Tim Molloy will create another set of completely unique 1/1 Toddlerpillar-themed NFTs to be airdropped to a random '
	+ 'group of Toddlerpillar parents (token holders). We will also airdrop a limited edition Toddlerpillar-themed NFT to a group of holders.';
const TEXT11 = 'Our medium to long-term goal is to develop a blockchain-based game for Toddlerpillar token holders and in 2022 we will research the '
	+ 'various approaches to gamification. We are also hoping to team up with an animation studio who can bring the Toddlerpillars to life in an animated series for adults.';
const TEXT12 = 'We will continue to develop the Toddlerpillars brand & mythology with new related projects and continues exploration of integration with the metaverse.';

const bold = (children) => <Box component='span' sx={{ fontFamily: 'roboto-bold' }}>{children}</Box>;

const Roadmap = () => {
	const history = useHistory();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const { hash } = history.location;
		if (hash && document.getElementById(hash.substr(1))) {
			// Check if there is a hash and if an element with that id exists
			document.getElementById(hash.substr(1)).scrollIntoView({ behavior: 'smooth' });
		}
	}, [history.location.hash]); // Fi

	return (
		<>
			<Typography variant='heading1' sx={sx.title}>EARLY 2022</Typography>
			<Divider titleDivider />
			<Box sx={sx.textContainer}>
				<Box sx={sx.textCol}>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Toddlerpillar Merch on Maddies</Typography>
						<Typography variant='text'>
						We are releasing a range of Toddlerpillar Merch on <a style={{ textDecoration: 'none', color: '#19a8b4', fontWeight: '700' }} href="https://maddies.co" target="_blank">Maddies.co</a> in our 
						official store. These items will only be available to Toddlerpillar 
						parents. All parents can also set up their own stores on Maddies and 
						sell merch with images of their own Toddlerpillars. Maddies use 6300 x 
						6300 pixel files of your Toddlerpillars for their merch. You can also 
						connect your wallets to the official Toddlerpillar website and download 
						your high res Toddlerpillars, to which you have full commercial rights.
						</Typography>
					</Box>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Custom Blank Toddlerpillar Toy Contest</Typography>
						<Typography variant='text'>We’re teaming up with <a style={{ textDecoration: 'none', color: '#19a8b4', fontWeight: '700' }} href="https://ismtoys.ca/" target="_blank">IsmToys</a> to release a 
						custom blank Toddlerpillar toy for traditional artists to modify and 
						paint. A downloadable 3D file of the blank will also be available for 
						digital artists to customize. An artist will be selected from each 
						category to win an 8” hand painted designer Toddlerpillar toy, 
						created by IsmToys. 10 runners up will be selected to win 
						Toddlerpillar NFTs.</Typography>
					</Box>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Chimerapillars: Our Companion Collection</Typography>
						<Typography variant='text'>All Toddlerpillar parents will get a free <a href="https://twitter.com/chimerapillars" style={{ textDecoration: 'none', color: '#19a8b4', fontWeight: '700' }} target="_blank">Chimerapillar</a> mint and a discount on additional mints during the 
						presale! They will be summoned in the 2nd quarter of 2022 to rescue 
						the Toddlerpillars from the corrupt influence of the Lonely 'Pillar! 
						Chimerapillars will have 888 unique hand drawn traits.</Typography>
					</Box>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Toddlerpillar Jewelry & Wearables</Typography>
						<Typography variant='text'>We're teaming up with <a style={{ textDecoration: 'none', color: '#19a8b4', fontWeight: '700' }} href="https://www.catharsisdesign.com/" target="_blank">Catharsis</a>, an 
						NFT-driven fashion and accessory brand, to create custom NFTs that 
						will be redeemable for IRL, physical Toddlerpillar jewelry and 
						wearables made of precious metal. The designs will be voted on by our 
						community and will be exclusively available to Toddlerpillar parents.</Typography>
					</Box>
				</Box>
				<Box sx={sx.textCol}>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Toddlerpillar Toys</Typography>
						<Typography variant='text'>We will work with various toy companies to 
						create both limited edition & open edition Toddlerpillar toys. These 
						will include full figure vinyl Toddlerpillars as well as toys of 
						specific traits. Some of these toys will be limited editions that are 
						exclusively available to Toddlerpillar parents and others will be open 
						editions that are widely available, with a significant discount for 
						Toddlerpillar parents.</Typography>
					</Box>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>1/1 & Limited Edition Airdrops for Holders</Typography>
						<Typography variant='text'>Tim Molloy will continue creating themed 
						1/1 Toddlerpillar NFTs and limited edition Toddlerpillar NFTs. 
						These NFTs are only available to verified Toddlerpillar  holders on 
						our <a style={{ textDecoration: 'none', color: '#19a8b4', fontWeight: '700' }} href="https://discord.gg/toddlerpillars" target="_blank">Discord</a>. People with 9 or more Toddlerpillars (The Nines) can 
						enter a weekly contest to win themed 1/1 Toddlerpillars & members who 
						participate in Discord activities can earn larval gems, which can be 
						exchanged for limited edition NFTs in our Discord shop.</Typography>
					</Box>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>The Third and Final Chapter of The Toddlerpillar Lore</Typography>
						<Typography variant='text'>We will release the third chapter of our <a style={{ textDecoration: 'none', color: '#19a8b4', fontWeight: '700' }} href="/#/mythology" target="_blank">lore</a> after the Chimerapillar mint. 
						Then we will begin the process of storyboarding for the animated series we are aiming to produce.</Typography>
					</Box>
				</Box>
			</Box>
			<Box id='earlyMidSection' />
			<Divider style={sx.divider} />
			<Typography variant='heading1' sx={sx.title}>MID-LATE 2022</Typography>
			<Divider titleDivider />
			<Box sx={sx.textContainer}>
			<Box sx={sx.textCol}>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>A Graphic Novel About Toddlerpillars & Chimerapillars</Typography>
						<Typography variant='text'>Our graphic novel will explore the origin story of Toddlerpillars and 
						Chimerapillars in depth. This will expand upon our three part mythology with a detailed narrative and 
						wonderfully strange illustrated panels and full page spreads. This publication will be released with an NFT 
						which will be available as a free mint to people who hold both a Toddlerpillar and a Chimerapillar. The NFT 
						will unlock a digital download of the graphic novel via our website. We also hope to release the graphic 
						novel in print at a later date through a publisher.</Typography>
					</Box>
				</Box>
				<Box sx={sx.textCol}>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Toddlerpillar Meetups in Australia & USA</Typography>
						<Typography variant='text'>We'll arrange three large gatherings of Toddlerpillar token holders for 2022. 
						The first will take place in Melbourne, Australia, the second in Los Angeles, USA and the third at 
						Superchief Gallery NFT in NYC, USA. These events will provide a wonderful opportunity for community 
						members to get to know each other in real life and discuss future plans for all things Toddlerpillar.</Typography>
					</Box>
				</Box>
			</Box>
			<Divider style={sx.divider} />
			<Typography variant='heading1' sx={sx.title}>2023 AND BEYOND</Typography>
			<Divider titleDivider />
			<Box sx={sx.textContainer}>
				<Box sx={sx.textCol}>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Long Term Vision of An Animated Series</Typography>
						<Typography variant='text'>
						We'll pitch our graphic novel to various animation studios and production companies and hope to find a team 
						who are interested in producing an animated series based on the story of our strange bebehs. Our dream would 
						be to work with Adult Swim.
						</Typography>
					</Box>
				</Box>
				<Box sx={sx.textCol}>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Expansion of the Toddlerpillars Brand & Metaverse Integration</Typography>
						<Typography variant='text'>We will continue to develop the Toddlerpillars brand & story with new 
						related projects and continued exploration of integration with the metaverse as it evolves.</Typography>
					</Box>
				</Box>
			</Box>
			<Discord />
		</>
	);
};

export default Roadmap;
