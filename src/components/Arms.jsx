import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { getArms } from '../utils/arms';

const BP1 = '@media (max-width: 1789px)';
const BP2 = '@media (max-width: 1692px)';
const BP3 = '@media (max-width: 1550px)';
const BP4 = '@media (max-width: 1250px)';
const BP5 = '@media (max-width: 1199px)';

const sx = {
	root: {
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: 0,
		minWidth: '100%',
		maxWidth: '100%',
		minHeight: '100%',
		overflow: 'hidden',
		pointerEvents: 'none',
	},
	arm: {
		position: 'absolute',
		transition: 'all .3s',
		pointerEvents: 'auto',
	},
	left: {
		left: 0,
		[BP1]: {
			left: '-15px',
			transform: 'scale(0.9)',
		},
		[BP2]: {
			transform: 'scale(0.7)',
			left: '-42px',
		},
		[BP3]: {
			transform: 'scale(0.6)',
			left: '-60px',
		},
		[BP4]: {
			left: '-100px',
		},
		[BP5]: {
			left: '-300px',
		},
	},
	right: {
		right: 0,
		[BP1]: {
			right: '-1px',
			transform: 'scale(0.9)',
		},
		[BP2]: {
			transform: 'scale(0.7)',
			right: '-40px',
		},
		[BP3]: {
			transform: 'scale(0.6)',
			right: '-55px',
		},
		[BP4]: {
			right: '-100px',
		},
		[BP5]: {
			right: '-300px',
		},
	},
};

const THRESHOLD = 500;

const getSideStyle = (left) => (left ? sx.left : sx.right);

const Arms = () => {
	const { pathname } = useLocation();
	const [arms, setArms] = useState(getArms(pathname));
	const [visibleArms, setVisibleArms] = useState(getArms(pathname).map(() => false));
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		setVisible(false);
		const a = getArms(pathname);
		setVisibleArms(a.map(() => false));
		setArms(getArms(pathname));
	}, [pathname]);

	useEffect(() => {
		const handleScroll = () => {
			const k = window.scrollY;
			const v = [...visibleArms];
			let changed = false;
			for (let i = 0; i < arms.length; i += 1) {
				if (!v[i] && k + THRESHOLD > arms[i].top) {
					v[i] = true;
					changed = true;
				}
			}
			if (changed) {
				setVisibleArms(v);
			}
		};
		setTimeout(() => {
			setVisible(true);
			handleScroll();
		}, 500);
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [arms, visibleArms]);

	const getDynamicStyle = (left, i) => {
		if (visibleArms[i]) {
			return {};
		}
		const rule = { [left ? 'left' : 'right']: '-300px' };
		return {
			...rule,
			[BP1]: { ...rule },
			[BP2]: { transform: 'scale(0.6)', ...rule },
			[BP3]: { ...rule },
			[BP1]: { ...rule },
		};
	};

	return (
		<Box sx={{ ...sx.root, display: visible ? 'auto' : 'none' }}>
			{getArms(pathname).map(({ left, top, image }, i) => (
				<Box
					key={image}
					sx={{
						...sx.arm, ...(getSideStyle(left)), top, ...(getDynamicStyle(left, i)),
					}}
				>
					<img src={image} alt={`Arm ${i + 1}`} />
				</Box>
			))}
		</Box>
	);
};

export default Arms;
