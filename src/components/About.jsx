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
	'This NFT project marks Jon\'s return to one of his earliest artistic creations with the mass-birthing of their digital descendants on the Ethereum blockchain. Tim became the projects illustrator and together, they created a generative project of 9,999 Toddlerpillars & 8,888 Chimerapillars, each with 888 unique and mind-bending traits. Their aim was to bring a sense of playful absurdity and comical horror to the space as well as a level of detail and complexity that was rarely seen in other PFP projects.'];

const TEXT2 = [
	'The Toddlerpillars & Chimerapillars have been a huge hit and an international community of like minded people have congregated around their little friends on discord and Twitter. The community took on a creative role during the art creation by suggesting thousands of traits for both the Toddlerpillars & Chimerapillars. So many of their ideas were incorporated into the project that they have become more like a hive mind of collaborators than a community of fans.'];

const galeryurl = 'https://beinart.org/';
const jurl = 'https://beinart.org/pages/jon-beinart';
const turl = ' https://www.timmolloy.com';

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Typography variant='heading1' sx={sx.title}>About The Toddlerpillars & Chimerapillars</Typography>
			<Divider titleDivider />
			<Box sx={sx.textContainer}>
				<Typography variant='text'>
					{'The Toddlerpillar & Chimerapillar collections are the brainchildren of artist and '}
					<a href={galeryurl} style={{ textDecoration: 'none', color: '#19a8b4', fontWeight: '700' }} target='_blank' rel='noopener noreferrer'> Beinart Gallery </a>
					{'owner '}
					<a href={jurl} style={{ textDecoration: 'none', color: '#19a8b4', fontWeight: '700' }} target='_blank' rel='noopener noreferrer'> Jon Beinart </a>
					{'and his friend of 15 years, the award-winning graphic novelist and artist, '}
					<a href={turl} style={{ textDecoration: 'none', color: '#19a8b4', fontWeight: '700' }} target='_blank' rel='noopener noreferrer'> Tim Molloy</a>
					{'. These strange adorable creatures evolved from Jon\'s notorious Toddlerpillar doll sculptures (2002 - 2011), which were published widely in magazines and art books and frequently went viral in the early 2000s.'}
					<Paragraph style={{ zIndex: '1', marginTop: '26px' }} text={TEXT1} />
				</Typography>
				<Paragraph style={{ zIndex: '1' }} text={TEXT2} />
			</Box>
			<Discord />
		</>
	);
};

export default About;
