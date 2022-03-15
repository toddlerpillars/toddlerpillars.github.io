import React, { useEffect, useState } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toast';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import routes from './Routes';

import Web3Manager from './components/Web3Manager/Web3Manager';

import Header from './components/Header/Header';
import Footer from './components/common/Footer';
import Arms from './components/Arms';
import logo from './assets/images/Toddlerpillars-Logo.png';

const BP1 = '@media (max-width: 539px)';
const BP2 = '@media (max-width: 999px)';
const BP3 = '@media (max-width: 1480px) and (min-width:1199px)';

const sx = {
	root: {
		position: 'relative',
		backgroundColor: '#FFF',
	},
	pageRoot: {
		width: '100%',
		backgroundColor: '#FFF',
		transition: 'all .3s',
		position: 'relative',
	},
	content: {
		width: '100%',
		minHeight: 'calc(100vh - 138px)',
		mx: 'auto',
		pt: '40px',
		transition: 'all .3s',
		maxWidth: '1270px',
		px: '56px',
		[BP1]: {
			maxWidth: '1206px',
			px: '24px',
		},
		[BP3]: {
			maxWidth: '960px',
			px: '24px',
		},
	},
	logoContainer: {
		width: '400px',
		backgroundColor: '#FFF',
		mb: '16px',
		pt: '40px',
		height: '120px',
		mx: 'auto',
		overflow: 'hidden',
		transition: 'all .3s',
		[BP2]: {
			// py: 2,
			// my: 0,
			// mx: 'auto',
			// height: 'unset',
			// maxWidth: '100%',
			display: 'none',
		},
	},
	logo: {
		width: '350px',
		height: '40px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		// [BP2]: {
		// 	mx: 'auto',
		// 	maxWidth: '100%',
		// 	maxHeight: '48px',
		// 	px: 2
		// },
	},
};

const COLORS = {
	dark: '#000',
};

const theme = createTheme({
	typography: {
		fontFamily: 'roboto',
		fontSize: '16px',
		heading1: {
			fontFamily: 'roboto-bold',
			fontSize: '32px',
			color: COLORS.dark,
			lineHeight: '42px',
			transition: 'all .3s',
			[BP1]: {
				fontSize: '24px',
			},
		},
		heading2: {
			fontFamily: 'roboto-bold',
			fontSize: '24px',
			color: COLORS.dark,
			lineHeight: '34px',
		},
		text: {
			fontFamily: 'roboto',
			fontSize: '16px',
			color: COLORS.dark,
			lineHeight: '26px',
		},
	},
	palette: {
		primary: {
			main: COLORS.dark,
		},
		text: {
			primary: COLORS.dark,
		},
		blue: {
			main: '#5deffb',
		},
		error: {
			main: '#EE1B11',
		},
	},
	components: {
		MuiTypography: {
			defaultProps: {
				variantMapping: {
					body1: 'div',
					heading1: 'p',
					heading2: 'p',
					text: 'p',
				},
			},
		},
		MuiTooltip: {
			styleOverrides: {
				tooltip: {
					fontSize: '16px',
					padding: '16px',
					backgroundColor: '#9A989A',
					color: '#000207',
					boxShadow: '0px 0px 30px #FFFFFF33',
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				contained: {
					borderRadius: '8px',
					'&.Mui-disabled': {
						backgroundColor: '#BE1FDA',
						color: '#FFF',
						opacity: 0.4,
					},
				},
				outlined: {
					borderRadius: '8px',
				},
				text: {
					'&.Mui-disabled': {
						color: '#BE1FDA',
						opacity: 0.4,
					},
				},
			},
		},
		MuiCheckbox: {
			styleOverrides: {
				root: {
					'&.Mui-disabled': {
						opacity: 0.5,
					},
				},
			},
		},
	},
});

function App() {

	return (
		<Web3Manager>
			<ThemeProvider theme={theme}>
				<Box sx={sx.root}>
					<HashRouter basename='/'>
						<Box sx={sx.logoContainer}>
							<Box sx={sx.logo}>
								<a href="/"><img src={logo} style={{ width: '100%' }} alt='Logo' /></a>
							</Box>
						</Box>
						<Header />
						<Box sx={sx.pageRoot}>
							<Box sx={sx.content}>
								<Switch>
									{routes.map((route, key) => (
										<Route key={key.toString()} path={route.path} component={route.component} exact={route.exact} />
									))}
								</Switch>
								<ToastContainer delay={4000} position='bottom-right' />
							</Box>
						</Box>
						<Arms />
					</HashRouter>
					<Footer />
				</Box>
			</ThemeProvider>
		</Web3Manager>
	);
}

export default App;
