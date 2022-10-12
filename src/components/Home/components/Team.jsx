import React from 'react';
import { Box } from '@mui/material';
import Paragraph from '../../common/Paragraph';
import jon from '../../../assets/images/profile/Jon-Beinart.png';
import tim from '../../../assets/images/profile/Tim-Molloy.png';

const BP1 = '@media (max-width: 799px)';

const sx = {
	root: {
		mt: '40px',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		gap: '56px 40px',
		[BP1]: {
			flexDirection: 'column',
		},
	},
	col: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		gap: '24px',
		zIndex: '1',
	},
	avatar: {
		maxWidth: '360px',
		width: '100%',
		height: '270px',
		aspectRatio: '1 / 1',
		mx: 'auto',
		display: 'flex',
	},
};

const JON = [
	'Jon Beinart is known for his strange intricate drawings and paintings as well '
	+ 'as his Toddlerpillar doll sculptures (2003 - 2011). Jon\'s role at Beinart Gallery '
	+ 'is the culmination of a lifetime spent supporting artists and creating his own '
	+ 'art. Starting out as an artist with a simple website showcasing his art, Jon '
	+ 'grew that website into an artistic community, gaining a respectable global '
	+ 'following. He built on this by publishing art books and curating group '
	+ 'exhibitions in the United States before reassessing his pursuits and '
	+ 'founding the Beinart Gallery in Melbourne, Australia.',
	'The Toddlerpillar NFT project marks Jon\'s return to one of his earliest artistic '
	+ 'creations with the mass-birthing of their digital descendants on the Ethereum blockchain.'];

const TIM = [
	'Tim Molloy makes ridiculous apocalyptic psychedelic art mostly in the form of '
	+ 'surrealist comic books, paintings and sculpture.',
	'"My work is an ever expanding and interconnected web of dreamlike and '
	+ 'nightmarish storylines soaked heavily in delusion, confusion and a general '
	+ 'sense of unease. I draw heavily on surrealist techniques, symbolist ideas, '
	+ 'synchronicity and dreams to construct my stories. Recurring themes include '
	+ '(but are not exclusive to) death, rebirth, the nature and expansion of '
	+ 'consciousness, self-destruction and discovery... There is a kind of pre-'
	+ 'apocalyptic tension throughout, balanced (I hope) with a sense of humor that '
	+ 'stops it all from getting too serious..."'];

const Team = () => (
	<Box sx={sx.root}>
		<Box sx={sx.col}>
			<Box sx={sx.avatar}>
				<img src={jon} style={{ width: '75%', margin: 'auto' }} alt='Jon Beinart' />
			</Box>
			<Paragraph title='Jon Beinart' text={JON} btnText="Jon Beinart's Website" onBtnClick={() => window.open('https://beinart.org/pages/jon-beinart', '_blank')} />
		</Box>
		<Box sx={sx.col}>
			<Box sx={sx.avatar}>
				<img src={tim} style={{ width: '75%', margin: 'auto' }} alt='Tim Molloy' />
			</Box>
			<Paragraph title='Tim Molloy' text={TIM} btnText="Tim Molloy's Website" onBtnClick={() => window.open('https://www.timmolloy.com/', '_blank')} />
		</Box>
	</Box>
);

export default Team;
