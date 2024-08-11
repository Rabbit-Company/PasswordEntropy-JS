import PasswordEntropy from "./password-entropy";

const passwordInput = document.getElementById("password") as HTMLInputElement | null;
const resultElement = document.getElementById("result") as HTMLElement | null;

if (passwordInput && resultElement) {
	passwordInput.addEventListener("input", () => {
		resultElement.innerText = PasswordEntropy.calculate(passwordInput.value).toString();
	});
}

document.getElementById("btn-start")?.addEventListener("click", () => {
	const amountInput = document.getElementById("amount") as HTMLInputElement | null;
	const perfElement = document.getElementById("perf") as HTMLElement | null;

	if (!amountInput || !perfElement) return;

	let amount = parseInt(amountInput.value, 10);
	if (amount < 1) amount = 1;
	if (amount > 100000) amount = 100000;

	let passwords: string[] = [];
	let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";
	let timerStart = Date.now();

	perfElement.innerText = "1. Performance test has started.\n";

	let timer = Date.now();
	for (let i = 0; i < amount; i++) {
		let password = "";
		for (let j = 0; j <= 10; j++) {
			let randomNumber = Math.floor(Math.random() * chars.length);
			password += chars.substring(randomNumber, randomNumber + 1);
		}
		passwords[i] = password;
	}
	perfElement.innerText += "2. " + amount + " random passwords generated in " + calcT(timer) + " milliseconds.\n";

	timer = Date.now();
	for (let i = 0; i < amount; i++) {
		PasswordEntropy.calculate(passwords[i]);
	}
	perfElement.innerText += "3. Entropy has been calculated for " + amount + " passwords in " + calcT(timer) + " milliseconds.\n";

	perfElement.innerText += "4. Performance test has completed in " + calcT(timerStart) + " milliseconds.\n";
});

function calcT(timer: number) {
	return Date.now() - timer;
}
