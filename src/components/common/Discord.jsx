import React from 'react';
import { Box, Typography } from '@mui/material';
import discord from '../../assets/images/social/discord.svg';
import Divider from './Divider';

const BP1 = '@media (max-width: 1079px)';

const sx = {
	text: {
		fontFamily: 'roboto-bold',
		mt: '80px',
		textAlign: 'center',
	},
	btn: {
		width: '100%',
		maxWidth: '280px',
		height: '45px',
		backgroundColor: 'primary.main',
		borderRadius: '30px',
		mt: '24px',
		mb: '80px',
		cursor: 'pointer',
		mx: 'auto',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	img: {
		height: '36px',
	},
	divider: {
		mt: '80px',
		[BP1]: {
			mt: '56px',
		},
	},
};

const TEXT = 'Join our delightfully strange discord family!';

const url = 'https://discord.gg/toddlerpillars';

const Discord = () => (
	<>
		<Divider style={sx.divider} />
		<Typography variant='text' sx={sx.text}>{TEXT}</Typography>
		<a href={url} target='_blank' rel='noopener noreferrer'>
			<Box sx={sx.btn}>
				<img src={discord} style={sx.img} alt='Discord' />
			</Box>
		</a>
	</>
);

export default Discord;
