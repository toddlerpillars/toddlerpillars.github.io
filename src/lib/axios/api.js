import axios from 'axios';
// import { logout } from '../../store/auth/actions';
// import { pushError } from '../../store/errors/actions';

const api = (getState) => {
	const tmp = axios.create({
		baseURL: 'https://self-service-platform-staging.herokuapp.com',
		// baseURL: 'http://192.168.1.5:3100/',
		timeout: 5000,
	});
	tmp.defaults.headers.get.Accept = 'application/json';
	// tmp.defaults.headers.get.Origin = '*';
	// tmp.defaults.headers.get['Media-Type'] = 'application/json';
	// tmp.defaults.headers.post['Media-Type'] = 'application/json';

	/* eslint-disable no-console */
	tmp.interceptors.request.use(
		(request) => {
			// const authToken = getState().auth;
			// // eslint-disable-next-line no-param-reassign
			// request.headers.appname = 'pez';
			// if ((authToken?.token && authToken.token.length > 0) && request.url !== 'auth') {
			// 	// eslint-disable-next-line no-param-reassign
			// 	request.headers.jwttoken = authToken.token;
			// }
			// console.info('REQUEST');
			// console.log(JSON.stringify(request, null, 2));
			return request;
		},
		(error) => {
			if (error.response) {
				console.info('REQUEST ERROR');
				console.log(JSON.stringify(error.response, null, 2));
				// pushError(JSON.stringify(error.response, null, 2));
			}
			return Promise.reject(error);
		},
	);

	tmp.interceptors.response.use(
		// eslint-disable-next-line arrow-body-style
		(response) => {
			// console.info('RESPONSE');
			// console.info(JSON.stringify(response, null, 2));
			return response;
		},
		(error) => {
			console.info('RESPONSE ERROR');
			console.log(JSON.stringify(error, null, 2));
			if (error.response?.data?.error) {
				// pushError(JSON.stringify(error.response.data.error, null, 2));
				// if (error.response.status === 401) {
				// 	logout();
				// }
				return Promise.reject(error.response.data.error);
			}
			// if (error.message === 'Network Error') {
			// 	// eslint-disable-next-line prefer-promise-reject-errors
			// 	return Promise.reject({ code: 'NETWORK' });
			// }
			return Promise.reject(error);
		},
	);
	return tmp;
};

export default api;
