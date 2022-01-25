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
			<Typography variant='heading1' sx={sx.title}>September & October</Typography>
			<Divider titleDivider />
			<Box sx={sx.textContainer}>
				<Box sx={sx.textCol}>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Official Website Launch</Typography>
						<Typography variant='text'>
							Our website has been developed by
							{' '}
							<a
								href='https://ether.cards/'
								target='_blank'
								rel='noopener noreferrer'
								style={{ color: '#19A8B4' }}
							>
								Ether Cards
							</a>
							, who also developed our smart contracts.
						</Typography>
					</Box>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Interviews & Marketing</Typography>
						<Typography variant='text'>{TEXT2}</Typography>
					</Box>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Researching Token Utility & The Metaverse</Typography>
						<Typography variant='text'>{TEXT3}</Typography>
					</Box>
				</Box>
				<Box sx={sx.textCol}>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Creating over 888 Traits for 9,999 Toddlerpillars</Typography>
						<Paragraph text={TEXT4} />
					</Box>
				</Box>
			</Box>
			<Box id='earlyMidSection' />
			<Divider style={sx.divider} />
			<Typography variant='heading1' sx={sx.title}>Early-Mid November</Typography>
			<Divider titleDivider />
			<Box sx={sx.textContainer}>
				<Box sx={sx.textCol}>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Presale & Public Sale</Typography>
						<Typography variant='text'>Our project launches on November 16th with a 72-hour presale:</Typography>
						<br />
						<Typography variant='text'>
							{bold('Toddlerpillar & Omnipillar Presale starts 12pm EST on Nov 16th: ')}
							Whitelisted members with Toddlerpillar & Omnipillar rank will gain access to the presale.
							Toddlerpillar rank can mint up to 6 Toddlerpillars during presale and those with Omnipillar rank can mint up to 8 Toddlerpillars during presale.
						</Typography>
						<br />
						<Typography variant='text'>
							{bold('Early Supporter Eggdweller Presale starts 12pm EST on Nov 17th: ')}
							{'The first 1,000 discord members with Egg Dweller rank will gain access to the presale to mint up to 2 Toddlerpillars. '
							+ 'During this time the Toddlerpillar & Omnipillar whitelist can also mint if they haven\'t already.' }
						</Typography>
						<br />
						<Typography variant='text'>
							{bold('Ethercard Holder Presale starts 12pm EST on Nov 18th: ')}
							{'Ethercard holders will join the presale during the last 24 hours to mint up to 6 Toddlerpillars. '
							+ 'All other presale participants can also mint during this period if they haven\'t already. Note. Ethercards are our dev team and partners.'}
						</Typography>
						<br />
						<Typography variant='text'>
							{bold('Public Sale starts 12pm EST on Nov 19th: ')}
							This will be open to everyone, including our presale participants.
						</Typography>
						<br />
						<Typography variant='text'>
							{bold('Reveal for all minted Toddlerpillars at 12pm EST on Nov 20th.')}
						</Typography>
						<br />
					</Box>
				</Box>
				<Box sx={sx.textCol}>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Marketing</Typography>
						<Typography variant='text'>
							{'Superchief Gallery NFT will show a Toddlerpillar presentation on a giant digital billboard in Times Square during '}
							<a href='https://www.nft.nyc/' target='_blank' rel='noopener noreferrer' style={{ color: '#19A8B4' }}>NFT.NYC</a>
							.
							{' They will also show Toddlerpillars on a giant digital billboard in Tokyo. Jon Beinart and Tim Molloy will be interviewed '
							+ 'by many Youtube, Twitch and Podcast influencers in the lead-up to the launch and will participate in daily Twitter Spaces.'}
						</Typography>
					</Box>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Commercial Rights</Typography>
						<Typography variant='text'>
							{'We will be granting full commercial rights for each specific randomly generated Toddlerpillar design '
							+ 'to the holder and the images themselves will be high resolution for quality print reproductions.'}
						</Typography>
					</Box>
				</Box>
			</Box>
			<Divider style={sx.divider} />
			<Typography variant='heading1' sx={sx.title}>Late November & December</Typography>
			<Divider titleDivider />
			<Box sx={sx.textContainer}>
				<Box sx={sx.textCol}>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>1/1 & Limited Edition Airdrops for Holders</Typography>
						<Typography variant='text'>
							Tim Molloy will create a few completely unique 1/1 Toddlerpillar-themed NFTs to be airdropped to random Toddlerpillar parents (token holders).
							We will also airdrop a limited edition Toddlerpillar-themed NFT to a group of holders.
						</Typography>
					</Box>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Toddlerpillar Derivative Contest</Typography>
						<Typography variant='text'>
							{'We will host a series of Toddlerpillar derivative contests on Twitter in collaboration with SuperChief and Juxtapoz Magazine. '
							+ 'A selection of winners will receive free Toddlerpillars and we will promote a majority of the submissions on our Twitter feed and Discord. '}
						</Typography>
					</Box>
				</Box>
				<Box sx={sx.textCol}>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>More Media, Community Outreach & Giveaways</Typography>
						<Paragraph text={TEXT5} />
					</Box>
				</Box>
			</Box>
			<Divider style={sx.divider} />
			<Typography variant='heading1' sx={sx.title}>2022</Typography>
			<Divider titleDivider />
			<Box sx={sx.textContainer}>
				<Box sx={sx.textCol}>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Chimerapillars: Perks for Toddlerpillar Holders</Typography>
						<Paragraph text={TEXT6} />
					</Box>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>3D Assets for the Metaverse & Vinyl Toys</Typography>
						<Paragraph text={TEXT7} />
					</Box>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Airdrops From New Project to Our Community</Typography>
						<Paragraph text={TEXT8} />
					</Box>
				</Box>
				<Box sx={sx.textCol}>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Toddlerpillar Meetups in Australia & USA</Typography>
						<Paragraph text={TEXT9} />
					</Box>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>More 1/1 & Limited Edition Airdrops for Holders</Typography>
						<Paragraph text={TEXT10} />
					</Box>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Gamification and an Animated Series</Typography>
						<Paragraph text={TEXT11} />
					</Box>
				</Box>
			</Box>
			<Divider style={sx.divider} />
			<Typography variant='heading1' sx={sx.title}>2023 & beyond</Typography>
			<Divider titleDivider />
			<Box sx={sx.textContainer}>
				<Box sx={sx.textCol}>
					<Box>
						<Typography variant='heading2' sx={sx.subtitle}>Expansion of Our Brand & Metaverse Integration</Typography>
						<Paragraph text={TEXT12} />
					</Box>
				</Box>
				<Box sx={sx.textCol} />
			</Box>
			<Discord />
		</>
	);
};

export default Roadmap;
