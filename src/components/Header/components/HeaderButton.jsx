import React from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Divider from '../../common/Divider';

const BP1 = '@media (max-width: 1480px) and (min-width:1199px)';

const sx = {
	root: {
		cursor: 'pointer',
		position: 'relative',
		'&:hover': {
			backgroundColor: '#5DEFFB3F',
		},
	},
	rootHorizontal: {
		height: '54px',
		px: '24px',
		pt: '10px',
		[BP1]: {
			px: '19px',
		},
	},
	rootVertical: {
		pl: '24px',
		py: '15px',
	},
	rootDisabled: {
		cursor: 'not-allowed',
		opacity: 0.5,
		'&:hover': {
			backgroundColor: 'unset',
		},
	},
	activeIndicator: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: '100%',
		height: '6px',
		backgroundColor: '#5deffb',
	},
};

const HeaderButton = ({
	text, active, disabled, vertical, onMouseOver, onClick,
}) => {
	const handleClick = () => {
		if (onClick && !disabled) {
			onClick();
		}
	};
	const handleHover = () => {
		if (onMouseOver && !disabled) {
			onMouseOver();
		}
	};
	return (
		<>
			<Box sx={{ ...sx.root, ...(vertical ? sx.rootVertical : sx.rootHorizontal), ...(disabled ? sx.rootDisabled : {}) }} onMouseOver={handleHover} onClick={handleClick}>
				<Typography variant='text' sx={{ fontFamily: 'roboto-bold', whiteSpace: 'nowrap', paddingRight: '24px' }}>{text}</Typography>
				{active && <Box sx={sx.activeIndicator} />}
			</Box>
			{vertical && <Divider />}
		</>
	);
};

/* eslint-disable react/forbid-prop-types */
HeaderButton.propTypes = {
	text: PropTypes.string.isRequired,
	active: PropTypes.bool,
	disabled: PropTypes.bool,
	vertical: PropTypes.bool,
	onMouseOver: PropTypes.any,
	onClick: PropTypes.any,
};

HeaderButton.defaultProps = {
	active: false,
	disabled: false,
	vertical: false,
	onMouseOver: null,
	onClick: null,
};

export default HeaderButton;
