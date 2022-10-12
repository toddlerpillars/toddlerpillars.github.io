import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useHistory } from 'react-router-dom';
import Paragraph from '../../common/Paragraph';
import tp1 from '../../../assets/images/tp1.jpg';

const BP1 = '@media (max-width: 879px)';

const sx = {
	root: {
		mt: '40px',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		gap: '40px 40px',
		[BP1]: {
			flexDirection: 'column',
		},
	},
	col: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		gap: '40px',
	},
	mediaContainer: {
		 width: '100%', 
		// aspectRatio: '16 / 9' 
	},
	iframeContainer: {
		overflow: 'hidden',
		paddingTop: "56.25%",
		position: 'relative',
		'& iframe': {
			left: 0,
			top: 0,
			height: '100%',
			width: '100%',
			position: 'absolute',
		},
	},
};

const MYTHOLOGY = [
	'The time has come to usher in the new age of the Toddlerpillars, the lovable descendants of their sculptural ancestors. Tim Molloy has written a hilarious, yet strangely profound backstory for the Toddlerpillars, which finds our little friends in a parallel universe that is set to collide with our own and the evocation of their inter-dimensional cousins, The Chimerapillars.'];

const HISTORY = [
	'This project evolved from Jon Beinart\'s infamous insectoid doll sculptures, the'
	+ ' Toddlerpillars, which were originally birthed in 2002. These sculptures were'
	+ ' published widely in art books and popular magazines and they frequently went'
	+ ' viral, reaching all corners of the internet. They were also exhibited in a number'
	+ ' of galleries and museums.',
	'In 2011 Jon moved on from this series of sculptures to focus on his oil'
	+ ' paintings. In 2016 he opened Beinart Gallery in Melbourne'
	+ ' Australia. This NFT project marks Jon\'s return to one of his earliest artistic'
	+ ' creations, the Toddlerpillars, in a partnership with the incredible illustrator, Tim Molloy.'];

const ROADMAP = 'We have exciting things ahead, including our companion collection, the Chimerapillars, exclusive airdrops, a 100+ page multimedia graphic novel exploring our lore, IRL collectable custom toys and physical exhibitions, metaverse exhibitions & much more. ';

const Overview = () => {
	const isSmall = useMediaQuery('(max-width: 879px)');
	const history = useHistory();

	const roadmap = <Paragraph title='Roadmap' text={ROADMAP} btnText='View Roadmap' onBtnClick={() => history.push('/roadmap')} />;

	return (
		<Box sx={sx.root}>
			<Box sx={sx.col}>
				<Box sx={sx.mediaContainer}>
					<Box sx={sx.iframeContainer}>
						<iframe
							width='960'
							height='540'
							src='https://www.youtube.com/embed/9cRP0CsQeJI'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
							title='Embedded youtube'
						/>
					</Box>
				</Box>
				<Paragraph style={{ zIndex: '1' }} title='Toddlerpillar Mythology' text={MYTHOLOGY} btnText='View Mythology' onBtnClick={() => history.push('/mythology')} />
				{!isSmall && roadmap}
			</Box>
			<Box sx={sx.col}>
				<Box sx={sx.mediaContainer}>
					<img src={tp1} style={{ width: '100%' }} alt='Toddlerpillars' />
				</Box>
				<Paragraph title='20 year history of the Toddlerpillars' text={HISTORY} btnText='View History' onBtnClick={() => history.push('/history')} />
				{!!isSmall && roadmap}
			</Box>
		</Box>
	);
};

export default Overview;
