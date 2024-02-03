/**
 * PasswordEntropy class provides methods for calculating password entropy.
*/
export default class PasswordEntropy{

	/**
   * Lowercase letters: "abcdefghijklmnopqrstuvwxyz".
   * @type {string}
  */
	static lcase: string = "abcdefghijklmnopqrstuvwxyz";
	/**
   * Uppercase letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".
   * @type {string}
  */
	static ucase: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	/**
   * Numbers: "1234567890".
   * @type {string}
  */
	static numb: string = "1234567890";
	/**
   * Symbols: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ".
   * @type {string}
  */
	static symbol: string = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";

	/**
   * Checks if the given text includes any character from the provided character list.
   *
   * @private
   * @param {string} text - The text to check.
	 * @param {string} charlist - The character list to check against.
	 * @returns {boolean} True if the text includes any character from the character list, false otherwise.
  */
	private static _includesChar(text: string, charlist: string): boolean{
		for(let i = 0; i < text.length; i++){
			if(charlist.includes(text[i])) return true;
		}
		return false;
	}

	/**
   * Calculates the entropy of a given password.
   *
   * @param {string} password - The password for which to calculate entropy.
   * @returns {number} The calculated password entropy.
  */
	static calculate(password: string): number{
		if(typeof(password) !== 'string') return 0;

		let pool = 0;
		if(this._includesChar(password, this.lcase)) pool += 26;
		if(this._includesChar(password, this.ucase)) pool += 26;
		if(this._includesChar(password, this.numb)) pool += 10;
		if(this._includesChar(password, this.symbol)) pool += 33;
		if(!this._includesChar(password, this.lcase + this.ucase + this.numb + this.symbol)) pool += 100;
		if(pool == 0) return 0;

		return Math.round(password.length * Math.log(pool) / Math.LN2);
	}
}