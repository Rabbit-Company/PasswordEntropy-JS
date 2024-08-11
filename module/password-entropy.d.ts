/**
 * The `PasswordEntropy` namespace provides methods for calculating the entropy of a password.
 *
 * Developers can customize the character sets used for entropy calculation by modifying
 * the properties `lcase`, `ucase`, `numb`, and `symbol`.
 */
declare namespace PasswordEntropy {
	/**
	 * Lowercase letters used in password entropy calculation. Developers can customize this string.
	 * Default: "abcdefghijklmnopqrstuvwxyz".
	 * @type {string}
	 */
	let lcase: string;
	/**
	 * Uppercase letters used in password entropy calculation. Developers can customize this string.
	 * Default: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".
	 * @type {string}
	 */
	let ucase: string;
	/**
	 * Numbers used in password entropy calculation. Developers can customize this string.
	 * Default: "1234567890".
	 * @type {string}
	 */
	let numb: string;
	/**
	 * Symbols used in password entropy calculation. Developers can customize this string.
	 * Default: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ".
	 * @type {string}
	 */
	let symbol: string;
	/**
	 * Calculates the entropy of a given password.
	 *
	 * @param {string} password - The password for which to calculate entropy.
	 * @returns {number} The calculated password entropy.
	 *
	 * @example
	 * const entropy = PasswordEntropy.calculate("P@ssw0rd");
	 * console.log(entropy); // Outputs the entropy value for the given password
	 */
	function calculate(password: string): number;
}

export {
	PasswordEntropy as default,
};

export {};
