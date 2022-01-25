import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import instagram from '../../assets/images/social/instagram.svg';
import twitter from '../../assets/images/social/twitter.svg';
import email from '../../assets/images/social/email.svg';
import discord from '../../assets/images/social/discordicon.svg';

const sx = {
	root: {
		width: '40px',
		height: '40px',
		backgroundColor: 'primary.main',
		borderRadius: '50%',
		cursor: 'pointer',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
};

const CONFIG = {
	instagram: {
		url: 'https://instagram.com/toddlerpillars',
		image: instagram,
	},
	twitter: {
		url: 'https://twitter.com/toddlerpillars',
		image: twitter,
	},
	email: {
		url: 'mailto:jon@beinart.org',
		image: email,
	},
	discord: {
		url: 'https://discord.gg/toddlerpillars',
		image: discord,
	},
};

const SocialButton = ({ variant, style }) => {
	const { url, image } = CONFIG[variant];
	return (
		<a href={url} target='_blank' rel='noopener noreferrer'>
			<Box sx={sx.root} style={{ ...style }}>
				<img src={image} style={{ width: '60%' }} alt={variant} />
			</Box>
		</a>
	);
};

SocialButton.propTypes = {
	variant: PropTypes.oneOf(['instagram', 'twitter', 'email', 'discord']).isRequired,
};

export default SocialButton;
