import React from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { ReactComponent as Arrow } from '../../assets/images/arrow.svg';

const sx = {
	btn: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		mt: '20px',
		gap: '0 4px',
		cursor: 'pointer',
	},
	btnText: {
		fontFamily: 'roboto-bold',
		color: '#19a8b4',
	},
};

const Paragraph = ({
	title, text, btnText, onBtnClick, style,
}) => {
	const button = (
		<Box sx={sx.btn} onClick={onBtnClick}>
			<Typography variant='text' sx={sx.btnText}>{btnText}</Typography>
			<Arrow fill='#19a8b4' style={{ width: '20px' }} />
		</Box>
	);

	const renderText = () => {
		if (Array.isArray(text)) {
			return (
				<>
					{text.map((t, i) => (
						<>
							<Typography key={i.toString()} variant='text'>{t}</Typography>
							{i < text.length - 1 ? <br /> : ''}
						</>
					))}
				</>
			);
		}
		return <Typography variant='text'>{text}</Typography>;
	};

	return (
		<Box sx={style}>
			{!!title && <Typography variant='heading2' sx={{ mb: '16px' }}>{title}</Typography>}
			{!!text && renderText()}
			{!!btnText && button}
		</Box>
	);
};

/* eslint-disable react/forbid-prop-types */
Paragraph.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	btnText: PropTypes.string,
	onBtnClick: PropTypes.any,
	style: PropTypes.any,
};

Paragraph.defaultProps = {
	title: '',
	text: '',
	btnText: '',
	onBtnClick: null,
	style: {},
};

export default Paragraph;
