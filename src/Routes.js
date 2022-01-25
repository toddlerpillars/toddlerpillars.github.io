import Home from './components/Home/Home';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Mythology from './components/Mythology';
import History from './components/History';
import Collections from './components/Collections';

const routes = [
	{
		path: '/',
		component: Home,
		exact: true,
	},
	{
		path: '/about',
		component: About,
		exact: true,
	},
	{
		path: '/roadmap',
		component: Roadmap,
		exact: true,
	},
	{
		path: '/mythology',
		component: Mythology,
		exact: true,
	},
	{
		path: '/history',
		component: History,
		exact: true,
	},{
		path: '/collections',
		component: Collections,
		exact: true,
	},
];

export default routes;
