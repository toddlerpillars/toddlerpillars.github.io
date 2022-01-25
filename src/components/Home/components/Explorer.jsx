import React, { useEffect, useRef, useState } from 'react';
import { Box, Modal, Typography } from '@mui/material';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import navPrev from '../../../assets/images/slider-prev.svg';
import navNext from '../../../assets/images/slider-next.svg';
import close from '../../../assets/images/close.svg';

const BP1 = '@media (max-width: 899px)';
const BP2 = '@media (max-width: 719px)';

const sx = {
	root: {
		height: '100%',
		backgroundColor: 'rgba(255,255,255,0.9)',
		py: '44px',
		px: '125px',
		position: 'relative',
		pointerEvents: 'none',
		transition: 'all .3s',
		[BP1]: {
			px: '85px',
		},
		[BP2]: {
			px: '25px',
		},
	},
	content: {
		height: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '0 25px',
	},
	sliderContainer: {
		width: '100%',
		pointerEvents: 'auto',
	},
	carouselImageContainer: {
		outline: 'none',
	},
	sliderNavBtn: {
		width: '80px',
		minWidth: '80px',
		cursor: 'pointer',
		pointerEvents: 'auto',
		transition: 'all .3s',
		[BP1]: {
			width: '40px',
			minWidth: '40px',
		},
		[BP2]: {
			display: 'none',
		},
	},
	textContainer: {
		position: 'absolute',
		mt: '8px',
		width: '100%',
		height: '26px',
		left: 0,
	},
	closeBtn: {
		position: 'absolute',
		width: '32px',
		min: '32px',
		top: '20px',
		right: '20px',
		cursor: 'pointer',
		pointerEvents: 'auto',
	},
};

const sliderConfig = (setCurrentSlide) => ({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	vertical: false,
	arrows: false,
	adaptiveHeight: true,
	afterChange: setCurrentSlide,
});

const Explorer = ({
	isOpen, setOpen, images, initialSlide,
}) => {
	const [currentSlide, setCurrentSlide] = useState(initialSlide);
	const [wh, setWh] = useState(window.innerHeight);
	const sliderRef = useRef(null);

	useEffect(() => {
		setCurrentSlide(initialSlide);
	}, [initialSlide]);

	useEffect(() => {
		const handleResize = () => {
			setWh(window.innerHeight);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<Modal open={isOpen} onClose={() => setOpen(false)}>
			<Box sx={sx.root}>
				<Box sx={sx.content}>
					<Box sx={sx.sliderNavBtn} onClick={() => sliderRef.current.slickPrev()}>
						<img src={navPrev} style={{ width: '100%' }} alt='Previous' />
					</Box>
					<Box sx={{ ...sx.sliderContainer, maxWidth: `${Math.floor(wh) - 88}px` }}>
						<Slider {...(sliderConfig(setCurrentSlide))} initialSlide={initialSlide} ref={sliderRef}>
							{images.map((image, i) => (
								<Box key={i.toString()} sx={sx.carouselImageContainer}>
									<img src={image} style={{ width: '100%' }} alt={`Carousel ${i + 1}`} />
								</Box>
							))}
						</Slider>
					</Box>
					<Box sx={sx.sliderNavBtn} onClick={() => sliderRef.current.slickNext()}>
						<img src={navNext} style={{ width: '100%' }} alt='Previous' />
					</Box>
				</Box>
				<Box sx={sx.textContainer}>
					<Typography sx={{ textAlign: 'center' }}>{`${currentSlide + 1} of ${images.length}`}</Typography>
				</Box>
				<Box sx={sx.closeBtn} onClick={() => setOpen(false)}>
					<img src={close} style={{ width: '100%' }} alt='Close' />
				</Box>
			</Box>
		</Modal>
	);
};

/* eslint-disable react/forbid-prop-types */
Explorer.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	setOpen: PropTypes.any.isRequired,
	images: PropTypes.array.isRequired,
	initialSlide: PropTypes.number.isRequired,
};

export default Explorer;
