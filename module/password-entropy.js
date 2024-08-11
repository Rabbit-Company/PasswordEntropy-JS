// src/password-entropy.ts
var PasswordEntropy;
((PasswordEntropy) => {
  PasswordEntropy.lcase = "abcdefghijklmnopqrstuvwxyz";
  PasswordEntropy.ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  PasswordEntropy.numb = "1234567890";
  PasswordEntropy.symbol = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";
  function _includesChar(text, charlist) {
    for (let i = 0;i < text.length; i++) {
      if (charlist.includes(text[i]))
        return true;
    }
    return false;
  }
  function calculate(password) {
    if (typeof password !== "string")
      return 0;
    let pool = 0;
    if (_includesChar(password, PasswordEntropy.lcase))
      pool += PasswordEntropy.lcase.length;
    if (_includesChar(password, PasswordEntropy.ucase))
      pool += PasswordEntropy.ucase.length;
    if (_includesChar(password, PasswordEntropy.numb))
      pool += PasswordEntropy.numb.length;
    if (_includesChar(password, PasswordEntropy.symbol))
      pool += PasswordEntropy.symbol.length;
    if (!_includesChar(password, PasswordEntropy.lcase + PasswordEntropy.ucase + PasswordEntropy.numb + PasswordEntropy.symbol))
      pool += 100;
    if (pool == 0)
      return 0;
    return Math.round(password.length * Math.log(pool) / Math.LN2);
  }
  PasswordEntropy.calculate = calculate;
})(PasswordEntropy ||= {});
var password_entropy_default = PasswordEntropy;
export {
  password_entropy_default as default
};
