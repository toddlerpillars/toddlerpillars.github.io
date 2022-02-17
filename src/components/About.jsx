import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Divider from './common/Divider';
import Paragraph from './common/Paragraph';
import Discord from './common/Discord';

const BP1 = '@media (max-width: 1079px)';

const sx = {
	title: {
		mt: '80px',
		textAlign: 'center',
	},
	textContainer: {
		width: '100%',
		mt: '40px',
		display: 'flex',
		flexDirection: 'row',
		gap: '26px 40px',
		[BP1]: {
			flexDirection: 'column',
		},
	},
	textCol: {
		flex: 1,
	},
};

const TEXT1 = [
	'This NFT project marks Jon\'s return to one of his earliest artistic creations with the mass-birthing of their digital descendants on the '
	+ 'Ethereum blockchain. Tim became the projects illustrator and together, they created a generative project of 9,999 Toddlerpillars with over 888 '
	+ 'unique and mind-bending traits. Their aim was to bring a sense of playful absurdity and comical horror to the space as well as a level of detail '
	+ 'and complexity that was rarely seen in PFP projects. '];

const TEXT2 = [
	'The Toddlerpillars were an instant hit and a large international community of like minds have congregated around their little friends on discord '
	+ 'and Twitter, eagerly anticipating their launch in early November. The community has taken on a creative role by suggesting thousands of traits for the '
	+ 'Toddlerpillars. So many of their ideas have been incorporated into the project that they have become more like a hive mind of collaborators than a community of fans.',
	'Jon and Tim have developed a backstory/mythology for the Toddlerpillars, which finds our little friends in a parallel universe that is set to collide with '
	+ 'our own. The project has a detailed roadmap which extends way beyond the mint, with a PFP collection of companion creatures, The Chimerapillars, a series of '
	+ 'vinyl toys, metaverse integration, an animated series, token holder meetups in Australia and the USA and much more!'];

const galeryurl = 'https://beinart.org/';
const jurl = 'https://beinart.org/pages/jon-beinart';
const turl = ' https://www.timmolloy.com';

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Typography variant='heading1' sx={sx.title}>About The Toddlerpillars NFT Collection</Typography>
			<Divider titleDivider />
			<Box sx={sx.textContainer}>
				<Typography variant='text'>
					{'The Toddlerpillars NFT collection is the brainchild of artist and '}
					<a href={galeryurl} style={{ textDecoration: 'none', color: '#19a8b4', fontWeight: '700' }} target='_blank' rel='noopener noreferrer'> Beinart Gallery </a>
					{'owner '}
					<a href={jurl} style={{ textDecoration: 'none', color: '#19a8b4', fontWeight: '700' }} target='_blank' rel='noopener noreferrer'> Jon Beinart </a>
					{'and his friend of 15 years, the award-winning graphic novelist and artist, '}
					<a href={turl} style={{ textDecoration: 'none', color: '#19a8b4', fontWeight: '700' }} target='_blank' rel='noopener noreferrer'> Tim Molloy</a>
					{'. These strange adorable creatures evolved from Jon\'s notorious Toddlerpillar doll '
					+ 'sculptures (2002 - 2011), which were published widely in magazines and art books and frequently went viral in the early 2000s. '}
					<Paragraph style={{ zIndex: '1', marginTop: '26px' }} text={TEXT1} />
				</Typography>
				<Paragraph style={{ zIndex: '1' }} text={TEXT2} />
			</Box>
			<Discord />
		</>
	);
};

export default About;
