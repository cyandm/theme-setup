/**
 * The current environment, either 'development' or 'production'.
 * @constant {string}
 * @default
 */
const ENVIRONMENT = 'development'; // 'development', 'production'

/**
 * Checks if the environment is 'development'.
 *
 * This function compares the current environment (stored in `ENVIRONMENT`) to the string 'development'.
 * It returns `true` if the environment is 'development', and `false` otherwise.
 *
 * @function
 * @name isDev
 * @returns {boolean} `true` if the environment is 'development', otherwise `false`.
 * @example
 * // Usage example:
 * if (isDev()) {
 *   console.log('We are in development mode.');
 * }
 */
export function isDev() {
	return ENVIRONMENT === 'development';
}

/**
 * Logs a message to the console, but only if the environment is 'development'.
 *
 * This function first checks if the environment is 'development' by calling the `isDev()` function.
 * If the environment is not 'development', the function does nothing and returns early.
 * If the environment is 'development', the provided message is logged to the console.
 *
 * @function
 * @name devLog
 * @param {any[]} variable - The message or value to log to the console.
 * @returns {void}
 * @example
 * // Usage example:
 * devLog('This is a development log message.');
 * // Only logs if the environment is 'development'.
 */
export function devLog(...variable) {
	if (isDev() === false) return;

	console.log(...variable);
}
