import React from 'react';
import { Box, Typography } from '@mui/material';
import SocialButton from './SocialButton';

const sx = {
	root: {
		width: '100%',
		p: '24px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '24px',
		backgroundColor: '#5deffb',
	},
	socialContainer: {
		display: 'flex',
		flexDirection: 'row',
		gap: '24px 24px',
	},
};

const Footer = () => (
	<Box sx={sx.root}>
		<Box sx={sx.socialContainer}>
			<SocialButton variant='instagram' />
			<SocialButton variant='twitter' />
			<SocialButton variant='email' />
		</Box>
		<Typography variant='text' sx={{ textAlign: 'center' }}>Copyright © 2021, Toddlerpillars</Typography>
	</Box>
);

export default Footer;
