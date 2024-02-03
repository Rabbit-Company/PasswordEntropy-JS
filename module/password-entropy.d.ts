export default class PasswordEntropy {
	static lcase: string;
	static ucase: string;
	static numb: string;
	static symbol: string;
	static includesChar(text: string, charlist: string): boolean;
	static calculate(password: string): number;
}

export {};
