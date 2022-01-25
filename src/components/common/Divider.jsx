import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

const sx = {
	root: {
		width: '100%',
		height: '2px',
		backgroundColor: '#5deffb',
	},
	titleDivider: {
		mt: '16px',
		maxWidth: '100px',
		height: '6px',
		mx: 'auto',
	},
};

const Divider = ({ titleDivider, style }) => <Box sx={{ ...sx.root, ...(titleDivider ? sx.titleDivider : {}), ...style }} />;

/* eslint-disable react/forbid-prop-types */
Divider.propTypes = {
	titleDivider: PropTypes.bool,
	style: PropTypes.any,
};

Divider.defaultProps = {
	titleDivider: false,
	style: {},
};

export default Divider;
