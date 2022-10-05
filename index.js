document.getElementById("password").addEventListener('input', () => {
	let password = document.getElementById("password").value;

	document.getElementById("result").innerText = PasswordEntropy.calculate(password);
});

function calcT(timer){
  return Date.now() - timer;
}

document.getElementById("btn-start").addEventListener('click', () => {
	let amount = document.getElementById("amount").value;
	if(amount < 1) amount = 1;
  if(amount > 100000) amount = 100000;
	let perf = document.getElementById("perf");
	let passwords = [];
	let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";
	let timerStart = Date.now();

	perf.innerText = "1. Performance test has started.\n";

	let timer = Date.now();
  for(let i = 0; i < amount; i++){
		let password = "";
		for (let i = 0; i <= 10; i++) {
			let randomNumber = Math.floor(Math.random() * chars.length);
			password += chars.substring(randomNumber, randomNumber + 1);
		}
    passwords[i] = password;
  }
  perf.innerText += "2. " + amount + " random passwords generated in " + calcT(timer) + " milliseconds.\n";

	timer = Date.now();
	for(let i = 0; i < amount; i++){
		PasswordEntropy.calculate(passwords[i]);
	}
	perf.innerText += "3. Entropy has been calculated for " + amount + " passwords in " + calcT(timer) + " milliseconds.\n";

	perf.innerText += "4. Performance test has completed in " + calcT(timerStart) + " milliseconds.\n";
});