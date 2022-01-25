export const getMinError = (name, min) => `${name} must be at least ${min} characters.`;
export const getMaxError = (name, max) => `${name} cannot be longer than ${max} characters.`;
export const getIntError = (name, min, max) => `${name} must be between ${min} and ${max}.`;

export const stateChanged = (initState, state) => {
	const is = Object.entries(initState);
	for (let i = 0; i < is.length; i += 1) {
		if (is[i][1] !== state[is[i][0]]) {
			return true;
		}
	}
	return false;
};
