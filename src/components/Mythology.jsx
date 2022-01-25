import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Divider from './common/Divider';
import Discord from './common/Discord';
import Paragraph from './common/Paragraph';

const BP1 = '@media (max-width: 1079px)';

const sx = {
	video: {
		position: 'relative',
		width: '100%',
		maxWidth: '960px',
		// aspectRatio: '16 / 9',
		mx: 'auto',
		mt: '80px',
		[BP1]: {
			mt: '40px',
		},
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

const TEXT1 = [
	'Before time began, the Ancients who walked the primordial lands worshipped towering, many limbed idols that glinted under strange stars. '
	+ 'Their forms were maddening, indescribable. There was something of the Caterpillar in them, something of the... Toddler.',
	'No one knew for sure where these bizarre effigies had originated, although certain Gutter-Wizards and desert dwelling Zealots muttered under '
	+ 'their fetid breath from time to time, as they chewed the unnamed herbs that caused weird visions, of a Stranger who had come from beyond the Heavens in a multicoloured flying ship.',
	'This Stranger, said the gnarled and wizened Old Ones, had brought the disturbing Sculptures to the Earth and cursed the Sons and Daughters of '
	+ 'Man to gaze forever at their multi-armed and adorable countenances.',
	'But time moved on. Epochs yawned and Aeons shook off the generations like showers of gnats. The Sculptures were hidden away from the sight of '
	+ 'Humankind, and gathered dust in mouldering and forgotten corners of abandoned Museums. Reclusive collectors of the arcane and esoteric housed them in '
	+ 'private collections, and sometimes when discovered, the Priests of new Religions took to them with the axe and with the flame.',
	'And still the years marched on, and behind locked doors and in secret dungeons the Sculptures stared into the darkness, drooling.'];

const TEXT2 = [
	'There was one thing though, that even those ancient warlocks of old did not know, nor could have guessed in their wildest hallucinations. The Stranger had '
	+ 'hidden a secret within the Sculptures. A ticking time bomb of quantum artifice that lay hidden in the very heart of them. Through weird multi-dimensional '
	+ 'mechanics and Synthetic Sorcery, the Stranger had created the conditions for an entirely New World to be born.',
	'Through some strange coalescence of Human Consciousness and the Alien Plastic of the Sculptures, THE ORPHANAGE DIMENSION was born!',
	'And now, The Cosmic Spheres have aligned and The Orphanage Dimension has collided with our own! Through a ragged hole in reality, crawl the descendants of '
	+ 'the Sculptures - THE TODDLERPILLARS! Although the weird matter and bizarre physics of our own World have caused strange mutations in them, DO NOT BE AFRAID! '
	+ 'They just want to be loved and are harmless... mostly harmless, that is.',
	'Adopt one now before their Demonic Caretakers shut them back up into their gloomy and infinite prison. Adopt one now and help the Stranger bring his vision '
	+ 'of a New Age into a glorious birthing of adorable multi-limbed madness!',
	'Adopt one now, OR BE DAMNED!'];

const Mythology = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Box sx={sx.video}>
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
			<Typography variant='heading1' sx={sx.title}>Toddlerpillars Mythology</Typography>
			<Divider titleDivider />
			<Box sx={sx.textContainer}>
				<Box sx={sx.textCol}>
					<Paragraph text={TEXT1} />
				</Box>
				<Box sx={sx.textCol}>
					<Paragraph text={TEXT2} />
					<br />
					<Typography variant='text' sx={{ fontFamily: 'roboto-bold' }}>Toddlerpillars are coming soon...</Typography>
				</Box>
			</Box>
			<Discord />
		</>
	);
};

export default Mythology;
