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

const chapter1_1 = [
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

const chapter1_2 = [
	'There was one thing though, that even those ancient warlocks of old did not know, nor could have guessed in their wildest hallucinations. The Stranger had '
	+ 'hidden a secret within the Sculptures. A ticking time bomb of quantum artifice that lay hidden in the very heart of them. Through weird multi-dimensional '
	+ 'mechanics and Synthetic Sorcery, the Stranger had created the conditions for an entirely New World to be born.',
	'Through some strange coalescence of Human Consciousness and the Alien Plastic of the Sculptures, the Orphanage Dimension was born!',
	'And now, The Cosmic Spheres have aligned and The Orphanage Dimension has collided with our own! Through a ragged hole in reality, crawl the descendants of '
	+ 'the Sculptures - the Toddlerpillars! Although the weird matter and bizarre physics of our own World have caused strange mutations in them, do not be afraid! '
	+ 'They just want to be loved and are harmless... mostly harmless, that is.',
	'Adopt one now before their Demonic Caretakers shut them back up into their gloomy and infinite prison. Adopt one now and help the Stranger bring his vision '
	+ 'of a New Age into a glorious birthing of adorable multi-limbed madness!',
	'Adopt one now, or be damned!'];

const chapter2_1 = [
	'They were strange, dark days indeed at the end of the Old Age. A great plague had swept the land, and the very seasons had come unhitched from the usual cycle. Summer lingered into sticky autumn, and winter seemed to never end, finally giving way to half-hearted spring, devoid of the life that should have bloomed as in saner times.',
	'A general apprehension clouded the minds of the people, and a great upheaval seemed to loom like a dark spectre across the dreams of the young and old alike.',
	'It was in the midst of these days that unusual dreams came to an old Curator of obscure artifacts. Amidst confused nocturnal visions of chortling, multi-limbed shadows, he heard a strange siren song with startling clarity.',
	'The Curator awoke with a start in his musty apartments above his forgotten museum and listened. The weird song persisted, like the sound of a distant carnival.',
	'He was compelled to follow the song, as if led by many grasping, sticky hands. Through groaning stacks of obscure ephemera he wove, making his way down into the mildewed basement with its cobwebbed corners.',
	'It was there in the gloom, by the flickering screen of his outdated smartphone, that the old man saw an object that mystified, terrified and entranced him all at once.',
	'Passed down through generations of Museum-Keepers, and unseen until now by this last descendant, was an ancient sculpture.',
	'It glowed with an otherworldly light as discordant chimes rang from within.  As the Curator watched, its many arms parted, revealing an inscription carved upon the curious stone of its surface.',
	'The old man beheld the message left by the Mysterious Stranger, who had come down so long ago from beyond the stars, and his mind swam with visions of tumbling realities beyond his comprehension.',
	'Many long nights were spent thereafter, decoding the inscription—what was it? A mathematical incantation? An occult algorithm? A set of keys to some vast portal between the worlds? It was all of these things and more!',
	'And all the while, as the Curator laboured feverishly, the siren song of the Mysterious Stranger reached out into the dreams of those chosen by the vast mechanism of the multiverse. They gathered about the old Museum-Keeper and became acolytes of this secret wisdom, adherents to the dawning knowledge of a new and better age.',
	'Soon he was known as the Curator no longer and became their High Priest.',
	'As a blood moon not seen in centuries haunted the sky, the acolytes gathered on a lonely hill outside the city and began the chanting of the sacred equation that had been left for them so many aeons ago by the Mysterious Stranger.'
];

const chapter2_2 = [
	'And Oh! Wonder of wonders! The cosmic spheres aligned and the multiverse shuddered as a rending of the very fabric of reality occurred, ushered on by the High Priest and his acolytes: the portal to the Orphanage Dimension opened!',
	'The Demonic Caretakers howled in rage as their multi-limbed charges, the Toddlerpillars, tumbled forth into the world! The acolytes trembled as they saw the many limbs, the foreign objects they held, the strange inscriptions inked in the ectoplasmic flesh of these multidimensional creatures as it solidified and mutated, the physics of our own realm working its own magic upon them.',
	'All was madness, and chaos, and... cuteness.',
	'But something had gone wrong! An error had been made! Before the arcane mathematics had finished working their machinations upon space and time, the portal to the Orphanage Dimension slammed closed, trapping the last of the Toddlerpillars alone with the Demonic Caretakers.',
	'Time passed with alarming speed behind the portal: what were mere moments for his brothers and sisters on the other side  were aeons for the Lonely \'Pillar, who went mad with jealousy and the dark influence of the Demonic Caretakers, who raged and writhed at their loss.',
	'The corruption of the Lonely \'Pillar spread across the multiverse and into the hive mind of the Toddlerpillars, corrupting others and generally making everything much worse.',
	'What had happened? What went wrong? As the acolytes pored over their equations amidst the  cacophonic circus of the multi-limbed demi-gods, the High Priest wandered the labyrinth of the basement and found himself once again before the ancient sculpture.',
	'In anguished desperation, he wrenched the sculpture from its dais and shattered it upon the mossy flagstones. It was then that the High Priest saw another strange object, hidden inside all along. He reached down to retrieve the object and beheld it in the gloom.',
	'It was a golden egg, inscribed with exquisite patterns and these words: \'Open in case of emergency.\'',
	'Trembling, he prised apart the egg.  Inside, he found a scrap of paper, on which was written a string of strange symbols, and above them, typed in Comic Sans, \'Key to The Chimerapillar Sanctuary.\'',
	'The High Priest looked up at the ceiling, where above he heard the delirious madness of the New Age he had ushered in.',
	'In the darkness of the basement, he smiled.'
];

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
			<Typography variant='heading1' sx={sx.title}>TODDLERPILLARS MYTHOLOGY</Typography>
			<Divider titleDivider />
			<Box sx={sx.textContainer}>
				<Box sx={sx.textCol}>
					<Typography variant='heading2' sx={sx.subtitle}>Chapter 1</Typography>
					<Paragraph text={chapter1_1} />
				</Box>
				<Box sx={sx.textCol}>
					<br />
					<Paragraph text={chapter1_2} />
				</Box>
			</Box>
			<br />
			<Box sx={sx.textContainer}>
				<Box sx={sx.textCol}>
					<Typography variant='heading2' sx={sx.subtitle}>Chapter 2</Typography>
					<Paragraph text={chapter2_1} />
				</Box>
				<Box sx={sx.textCol}>
					<br />
					<Paragraph text={chapter2_2} />
				</Box>
			</Box>
			<br />
			<Box sx={sx.textContainer}>
				<Box sx={sx.textCol}>
					<Typography variant='heading2' sx={sx.subtitle}>Chapter 3</Typography>
					<Paragraph text="Coming soon..." />
				</Box>
				<Box sx={sx.textCol}>
					<br />
					<Paragraph text="" />
				</Box>
			</Box>
			<Discord />
		</>
	);
};

export default Mythology;
