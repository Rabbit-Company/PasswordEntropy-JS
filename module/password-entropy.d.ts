/**
 * PasswordEntropy class provides methods for calculating password entropy.
*/
export default class PasswordEntropy {
	/**
   * Lowercase letters: "abcdefghijklmnopqrstuvwxyz".
   * @type {string}
  */
	static lcase: string;
	/**
   * Uppercase letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".
   * @type {string}
  */
	static ucase: string;
	/**
   * Numbers: "1234567890".
   * @type {string}
  */
	static numb: string;
	/**
   * Symbols: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ".
   * @type {string}
  */
	static symbol: string;
	/**
   * Checks if the given text includes any character from the provided character list.
   *
   * @private
   * @param {string} text - The text to check.
	 * @param {string} charlist - The character list to check against.
	 * @returns {boolean} True if the text includes any character from the character list, false otherwise.
  */
	private static _includesChar;
	/**
   * Calculates the entropy of a given password.
   *
   * @param {string} password - The password for which to calculate entropy.
   * @returns {number} The calculated password entropy.
  */
	static calculate(password: string): number;
}

export {};
