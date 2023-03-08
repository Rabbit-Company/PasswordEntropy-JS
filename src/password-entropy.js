export default class PasswordEntropy{

	static lcase = "abcdefghijklmnopqrstuvwxyz";
	static ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	static numb = "1234567890";
	static symbol = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";

	static includesChar(text, charlist){
		for(let i = 0; i < text.length; i++){
			if(charlist.includes(text[i])) return true;
		}
		return false;
	}

	static calculate(password){
		if(typeof(password) !== 'string') return 0;

		let pool = 0;
		if(this.includesChar(password, this.lcase)) pool += 26;
		if(this.includesChar(password, this.ucase)) pool += 26;
		if(this.includesChar(password, this.numb)) pool += 10;
		if(this.includesChar(password, this.symbol)) pool += 33;
		if(!this.includesChar(password, this.lcase + this.ucase + this.numb + this.symbol)) pool += 100;
		if(pool == 0) return 0;

		return Math.round(password.length * Math.log(pool) / Math.LN2);
	}
}