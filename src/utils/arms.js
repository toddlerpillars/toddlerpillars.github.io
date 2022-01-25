import armHome1 from '../assets/images/arms/home/arm1.png';
import armHome2 from '../assets/images/arms/home/arm2.png';
import armHome3 from '../assets/images/arms/home/arm3.png';
import armHome4 from '../assets/images/arms/home/arm4.png';
import armHome5 from '../assets/images/arms/home/arm5.png';

import armAbout1 from '../assets/images/arms/about/arm1.png';
import armAbout2 from '../assets/images/arms/about/arm2.png';

import armRoadmap1 from '../assets/images/arms/roadmap/arm1.png';
import armRoadmap2 from '../assets/images/arms/roadmap/arm2.png';
import armRoadmap3 from '../assets/images/arms/roadmap/arm3.png';
import armRoadmap4 from '../assets/images/arms/roadmap/arm4.png';
import armRoadmap5 from '../assets/images/arms/roadmap/arm5.png';

import armMythology1 from '../assets/images/arms/mythology/arm1.png';
import armMythology2 from '../assets/images/arms/mythology/arm2.png';

import armHistory1 from '../assets/images/arms/history/arm1.png';
import armHistory2 from '../assets/images/arms/history/arm2.png';
import armHistory3 from '../assets/images/arms/history/arm3.png';
import armHistory4 from '../assets/images/arms/history/arm4.png';
import armHistory5 from '../assets/images/arms/history/arm5.png';

const config = {
	'/': [
		{
			left: true,
			top: 75,
			image: armHome1,
		},
		{
			left: false,
			top: 777,
			image: armHome2,
		},
		{
			left: true,
			top: 1439,
			image: armHome3,
		},
		{
			left: false,
			top: 2116,
			image: armHome4,
		},
		{
			left: true,
			top: 2664,
			image: armHome5,
		},
	],
	'/about': [
		{
			left: true,
			top: 63,
			image: armAbout1,
		},
		{
			left: false,
			top: 440,
			image: armAbout2,
		},
	],
	'/roadmap': [
		{
			left: false,
			top: 10,
			image: armRoadmap1,
		},
		{
			left: true,
			top: 806,
			image: armRoadmap2,
		},
		{
			left: false,
			top: 1494,
			image: armRoadmap3,
		},
		{
			left: true,
			top: 2435,
			image: armRoadmap4,
		},
		{
			left: false,
			top: 3119,
			image: armRoadmap5,
		},
	],
	'/mythology': [
		{
			left: true,
			top: 82,
			image: armMythology1,
		},
		{
			left: false,
			top: 891,
			image: armMythology2,
		},
	],
	'/history': [
		{
			left: false,
			top: 138,
			image: armHistory1,
		},
		{
			left: true,
			top: 717,
			image: armHistory2,
		},
		{
			left: false,
			top: 1380,
			image: armHistory3,
		},
		{
			left: true,
			top: 1961,
			image: armHistory4,
		},
		{
			left: false,
			top: 2561,
			image: armHistory5,
		},
	],
};

export const getArms = (path) => {
	if (config[path]) {
		return config[path];
	}
	return [];
};
