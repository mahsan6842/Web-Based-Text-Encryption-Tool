function processText() {
  const inputText = document.getElementById("inputText").value.trim();
  const algo = document.getElementById("algorithm").value;
  const password = document.getElementById("password").value.trim();
  const mode = document.getElementById("mode").value;
  const outputBox = document.getElementById("outputText");

  if (!inputText) return alert("⚠️ Please enter some text!");
  if (!algo) return alert("⚠️ Please select an encryption algorithm!");

  let output = "";

  try {
    switch (algo) {
      case "caesar":
        const shift = parseInt(password) || 3;
        output = (mode === "encrypt")
          ? caesarEncrypt(inputText, shift)
          : caesarDecrypt(inputText, shift);
        break;

      case "base64":
        output = (mode === "encrypt")
          ? btoa(inputText)
          : atob(inputText);
        break;

      case "aes":
        output = (mode === "encrypt")
          ? CryptoJS.AES.encrypt(inputText, password).toString()
          : CryptoJS.AES.decrypt(inputText, password).toString(CryptoJS.enc.Utf8);
        break;

      case "des":
        output = (mode === "encrypt")
          ? CryptoJS.DES.encrypt(inputText, password).toString()
          : CryptoJS.DES.decrypt(inputText, password).toString(CryptoJS.enc.Utf8);
        break;

      case "sha256":
        if (mode === "decrypt") {
          alert("❌ SHA-256 cannot be decrypted (it's a one-way hash).");
          return;
        }
        output = CryptoJS.SHA256(inputText).toString();
        break;

      default:
        alert("❌ Unsupported algorithm selected!");
        return;
    }

    outputBox.value = output || "(No output generated)";
  } catch (error) {
    outputBox.value = "❌ Error: Invalid input or password.";
  }
}

// Caesar Cipher functions
function caesarEncrypt(text, shift) {
  return text
    .split("")
    .map(char => shiftChar(char, shift))
    .join("");
}

function caesarDecrypt(text, shift) {
  return text
    .split("")
    .map(char => shiftChar(char, -shift))
    .join("");
}

function shiftChar(char, shift) {
  const A = 65, Z = 90, a = 97, z = 122;
  let code = char.charCodeAt(0);
  if (code >= A && code <= Z)
    return String.fromCharCode(((code - A + shift + 26) % 26) + A);
  if (code >= a && code <= z)
    return String.fromCharCode(((code - a + shift + 26) % 26) + a);
  return char;
}

// Copy output
function copyOutput() {
  const outputText = document.getElementById("outputText");
  outputText.select();
  document.execCommand("copy");
  alert("✅ Ciphertext copied to clipboard!");
}
