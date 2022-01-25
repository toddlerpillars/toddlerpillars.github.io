import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import Banner from './components/Banner';
import Overview from './components/Overview';
import Team from './components/Team';
import Divider from '../common/Divider';
import Discord from '../common/Discord';

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Banner />
			<Divider style={{ mt: '56px' }} />
			<Typography variant='heading1' sx={{ mt: '80px', textAlign: 'center' }}>Overview</Typography>
			<Divider titleDivider />
			<Overview />
			<Divider style={{ mt: '80px' }} />
			<Typography variant='heading1' sx={{ mt: '80px', textAlign: 'center' }}>Our Team</Typography>
			<Divider titleDivider />
			<Team />
			<Discord />
		</>
	);
};

export default Home;
