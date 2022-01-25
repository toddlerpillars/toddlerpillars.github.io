import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Divider from './common/Divider';
import Paragraph from './common/Paragraph';
import Discord from './common/Discord';
import tp1 from '../assets/images/tp1.jpg';
import tp2 from '../assets/images/tp2.jpg';
import tp3 from '../assets/images/tp3.jpg';

const BP1 = '@media (max-width: 1079px)';

const sx = {
	imageContainer: {
		width: '100%',
		maxWidth: '960px',
		aspectRatio: '16 / 9',
		backgroundColor: '#000',
		mx: 'auto',
		mt: '56px',
		[BP1]: {
			mt: '40px',
		},
	},
	imageDescription: {
		mt: '8px',
		textAlign: 'center',
		color: '#909090',
	},
	title: {
		textAlign: 'center',
		mt: '56px',
		[BP1]: {
			mt: '40px',
		},
	},
	textContainer: {
		width: '100%',
		mt: '40px',
		display: 'flex',
		flexDirection: 'row',
		gap: '26px 40px',
		[BP1]: {
			mt: '32px',
			flexDirection: 'column',
		},
	},
	textCol: {
		flex: 1,
		zIndex: '1',
	},
};

const TEXT1 = [
	'Jon Beinart stumbled upon his Toddlerpillars series by accident while messing around with plastic baby dolls. In 2002 he joined a '
	+ 'few doll torsos together and noticed (to his delight) that they formed insect-like segments, et voila, the infamous Toddlerpillar '
	+ 'was born. ',
	'Jon found his creations adorable and hilarious and was initially surprised when people were offended and even shocked by them.'
	+ 'As his Toddlerpillars have spread all over the Internet, they have elicited strong reactions and have even been the subject of hate mail.'
	+ 'Some people have found them endearing and amusing, while others have assumed that they are addressing issues, such as radiation and'
	+ 'genetic mutation, or the subversion of childhood innocence.'];

const TEXT2 = [
	'While Jon has enjoyed interpreting the unconscious meaning behind his Toddlerpillars and has even mused about their natural habitat and '
	+ 'an alternate world in which they may have evolved, he prefers to leave them open to interpretation so that viewers can make up their own '
	+ 'stories. ',
	'Over the years, Jon\'s Toddlerpillars evolved from small centipede and scorpion-like creatures to complex hydra-like monstrosities '
	+ 'with hundreds of doll torsos. The largest Toddlerpillar was significantly larger than the artist himself.'];

const TEXT3 = [
	'In Albury and then after he moved to Melbourne, Jon showed his work in small local shows. He did some illustration work for local bands, '
	+ 'events and festivals and even painted a few small murals for local venues, but he found illustrating other people\'s ideas painful, '
	+ 'as he couldn\'t separate himself from his work. Art had always been such a personal and intimate practise for Jon, so it seemed illustration wasn\'t for him.',
	'In 2002 he exhibited his first Toddlerpillar sculpture in a group exhibition at the Albury Regional Art Gallery called Boys Room. This was '
	+ 'the first of a series that became his most widely known body of work: during this period his Toddlerpillars frequently went viral on the '
	+ 'Internet (see more on this below). They were also published in a number of art books and magazines.',
];

const TEXT4 = [
	'In 2006 a Toddlerpillar was featured in Monsters, an exhibition at the Albury Regional Art Gallery. To Jon\'s delight, it was displayed in a '
	+ 'glass cabinet with an original etching by one of his artistic heroes, Goya. In 2011 the most complex Toddlerpillar sculpture was exhibited in '
	+ 'Chet Zar\'s Conjoined in 3D show at Copro Gallery in Santa Monica, CA, and later that year the same sculpture was shown in Cute & Creepy, an '
	+ 'exhibition at the Florida State University Museum of Fine Arts in Tallahassee curated by Carrie Ann Baade.',
	'While Jon\'s profile had grown with the notoriety of his Toddlerpillars, images of them were frequently shared online with no credit, so most '
	+ 'people who encountered Toddlerpillars had no idea who had created them. While this bothered Jon at the beginning, he gradually came to accept '
	+ 'that his babies had grown up and left home and had taken on a life of their own.',
	'In 2011 Jon moved on from this series of sculptures to focus on his oil paintings and in 2016 he opened Beinart Gallery with Corinne Leita in '
	+ 'Melbourne Australia. This NFT project marks Jon\'s return to one of his earliest artistic creations, the Toddlerpillars, in a partnership with the incredible illustrator, Tim Molloy.'];

const History = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Box sx={{ ...sx.imageContainer, mt: '80px' }}>
				<img src={tp1} style={{ width: '100%' }} alt='Toddlerpillars' />
			</Box>
			<Typography variant='text' sx={sx.imageDescription}>Buppapillar - Plastic doll assemblage (2002) and Irate Toddlerpillar - Plastic doll assemblage (2003)</Typography>
			<Typography variant='heading1' sx={sx.title}>Toddlerpillar History</Typography>
			<Divider titleDivider />
			<Box sx={sx.textContainer}>
				<Box sx={sx.textCol}>
					<Paragraph text={TEXT1} />
				</Box>
				<Box sx={sx.textCol}>
					<Paragraph text={TEXT2} />
				</Box>
			</Box>
			<Box sx={sx.imageContainer}>
				<img src={tp3} style={{ width: '100%' }} alt='Toddlerpillars' />
			</Box>
			<Typography variant='text' sx={sx.imageDescription}>Jon Beinart with the Mother of all Toddlerpillars (2009)</Typography>
			<Box sx={sx.textContainer}>
				<Box sx={sx.textCol}>
					<Paragraph text={TEXT3} />
				</Box>
				<Box sx={sx.textCol}>
					<Paragraph text={TEXT4} />
				</Box>
			</Box>
			<Box sx={sx.imageContainer}>
				<img src={tp2} style={{ width: '100%' }} alt='Toddlerpillars' />
			</Box>
			<Typography variant='text' sx={sx.imageDescription}>Toddlerpillar 2.0 - Plastic doll assemblage sculpture with apoxie sculpt and acrylic paint by Jon Beinart (2011)</Typography>
			<Discord />
		</>
	);
};

export default History;
