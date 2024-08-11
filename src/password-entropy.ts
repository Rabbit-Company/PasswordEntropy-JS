/**
 * The `PasswordEntropy` namespace provides methods for calculating the entropy of a password.
 *
 * Developers can customize the character sets used for entropy calculation by modifying
 * the properties `lcase`, `ucase`, `numb`, and `symbol`.
 */
namespace PasswordEntropy {
	/**
	 * Lowercase letters used in password entropy calculation. Developers can customize this string.
	 * Default: "abcdefghijklmnopqrstuvwxyz".
	 * @type {string}
	 */
	export let lcase: string = "abcdefghijklmnopqrstuvwxyz";
	/**
	 * Uppercase letters used in password entropy calculation. Developers can customize this string.
	 * Default: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".
	 * @type {string}
	 */
	export let ucase: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	/**
	 * Numbers used in password entropy calculation. Developers can customize this string.
	 * Default: "1234567890".
	 * @type {string}
	 */
	export let numb: string = "1234567890";
	/**
	 * Symbols used in password entropy calculation. Developers can customize this string.
	 * Default: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ".
	 * @type {string}
	 */
	export let symbol: string = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";

	/**
	 * Checks if the given text includes any character from the provided character list.
	 *
	 * @private
	 * @param {string} text - The text to check.
	 * @param {string} charlist - The character list to check against.
	 * @returns {boolean} True if the text includes any character from the character list, false otherwise.
	 */
	function _includesChar(text: string, charlist: string): boolean {
		for (let i = 0; i < text.length; i++) {
			if (charlist.includes(text[i])) return true;
		}
		return false;
	}

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
	export function calculate(password: string): number {
		if (typeof password !== "string") return 0;

		let pool = 0;
		if (_includesChar(password, lcase)) pool += lcase.length;
		if (_includesChar(password, ucase)) pool += ucase.length;
		if (_includesChar(password, numb)) pool += numb.length;
		if (_includesChar(password, symbol)) pool += symbol.length;
		if (!_includesChar(password, lcase + ucase + numb + symbol)) pool += 100;
		if (pool == 0) return 0;

		return Math.round((password.length * Math.log(pool)) / Math.LN2);
	}
}

export default PasswordEntropy;
