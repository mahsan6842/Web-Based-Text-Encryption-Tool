# 🔐 Web-Based Text Encryption Tool

A single-page **web application** that allows users to encrypt and decrypt text using multiple algorithms such as **Caesar Cipher**, **AES**, **DES**, **Base64**, and **SHA-256 hashing**.  
It’s built with **HTML, CSS, and JavaScript (CryptoJS)** — no server required!


## 🚀 Project Overview

This tool provides a simple yet powerful way to understand and visualize how encryption algorithms work.  
Users can:
- Enter any text
- Choose an encryption algorithm
- Enter a key or password (if required)
- Encrypt or decrypt the text instantly  
- Copy or download the result easily

It’s perfect for students, developers, or anyone learning **cryptography and web security fundamentals**.



## 🧩 Features

✅ **Frontend (HTML, CSS, JS)**  
- User-friendly and responsive interface  
- Dropdown to select algorithm  
- Key/password input for AES, DES, and Caesar Cipher  
- Real-time encryption and decryption  
- Beautiful glassmorphism UI design  

✅ **Encryption Algorithms Implemented**
1. **Caesar Cipher** (Classic letter-shift cipher)  
2. **Base64** (Encoding/Decoding text)  
3. **AES** (Advanced Encryption Standard — symmetric key)  
4. **DES** (Data Encryption Standard)  
5. **SHA-256** (One-way cryptographic hash)

✅ **Additional Features**
- Copy-to-Clipboard  
- Clear/Reset Buttons  
- Download Output File  
- SHA-256 hash mode (Encrypt only)



## 🧠 How It Works

1. **Input Plaintext:**  
   Enter your text in the text area.

2. **Select Algorithm:**  
   Choose from Caesar, AES, DES, Base64, or SHA-256.

3. **Enter Key/Password (if required):**  
   - AES/DES: Password  
   - Caesar: Numeric Shift  
   - SHA-256: No key required

4. **Choose Mode:**  
   - *Encrypt / Hash*  
   - *Decrypt* (if applicable)

5. **Click Encrypt/Process:**  
   Output appears instantly!



## 🛠️ Tech Stack

| Component | Technology Used |
|------------|------------------|
| **Frontend** | HTML5, CSS3, JavaScript |
| **Encryption Library** | [CryptoJS](https://cdnjs.com/libraries/crypto-js) |
| **Styling** | Custom CSS (Glassmorphism + Gradient UI) |
| **Backend** | None — all in-browser logic |
| **Hosting (optional)** | GitHub Pages / Netlify |


## 📸 Screenshots
- 🖥️ Main Interface  
<img width="706" height="314" alt="image" src="https://github.com/user-attachments/assets/9b55994b-465c-49c8-a6bd-1153e4e16350" />

<img width="898" height="383" alt="image" src="https://github.com/user-attachments/assets/676ec62c-1481-475e-842c-62d24293f836" />

Example:

- 🔐 Encryption Output
- <img width="893" height="389" alt="image" src="https://github.com/user-attachments/assets/d4a40de1-c37b-47bb-ba9f-587595bd5f04" />
- <img width="905" height="377" alt="image" src="https://github.com/user-attachments/assets/d98d5eea-be89-4e42-a788-45c655a9db39" />
- <img width="902" height="366" alt="image" src="https://github.com/user-attachments/assets/1f866612-91b8-4510-b453-2e01448d06b7" />
- <img width="907" height="383" alt="image" src="https://github.com/user-attachments/assets/0e8991f0-e381-48e3-a420-e6ebe6edbfed" />
- <img width="895" height="370" alt="image" src="https://github.com/user-attachments/assets/f68dd613-9569-4a32-881f-a1b89982639e" />



 

- 🔓 Decryption Example
- <img width="905" height="341" alt="image" src="https://github.com/user-attachments/assets/314421ed-58d6-41db-a773-9d0534ac54cf" />
- <img width="920" height="373" alt="image" src="https://github.com/user-attachments/assets/834f7a24-dbef-4398-bedf-ee644e0c7034" />
- <img width="905" height="376" alt="image" src="https://github.com/user-attachments/assets/f8eaca55-fe85-4eb9-ba2b-04fc8575ec07" />
-<img width="914" height="367" alt="image" src="https://github.com/user-attachments/assets/3cfabf9e-4fa9-4a32-9252-242761b5531a" />
- Mode: Encrypt (Decryption disabled) in SHA-256 Hashing




- 💾 Downloaded Ciphertext  

---

## 🧮 Sample Inputs & Outputs

### 🔹 **1. Caesar Cipher**
**Plain Text:** HELLO WORLD  
**Key (Shift):** 3  
**Mode:** Encrypt  
**Output:** KHOOR ZRUOG  

**Decryption:** Shift 3 → HELLO WORLD  

---

### 🔹 **2. Base64 Encoding**
**Plain Text:** Hello, this is a Base64 test.  
**Mode:** Encrypt  
**Output:** SGVsbG8sIHRoaXMgaXMgYSBCYXNlNjQgdGVzdC4=  

**Decryption:** → Hello, this is a Base64 test.  

---

### 🔹 **3. AES Encryption**
**Plain Text:** This is a secret message.  
**Password:** myPassword123  
**Mode:** Encrypt  
**Output:** U2FsdGVkX1+N/1ls1Q2k4Vh4wldoV+oKJea7zQ3IjcU=  

**Decryption:** Same password → “This is a secret message.”  

---

### 🔹 **4. DES Encryption**
**Plain Text:** DES example text  
**Password:** abc123  
**Mode:** Encrypt  
**Output:** U2FsdGVkX1/AznkOZ7YI8AaRveQ3Cq6Uq3XALfS4IsQ=  

**Decryption:** Same password → “DES example text”  

---

### 🔹 **5. SHA-256 Hashing**
**Plain Text:** mypassword  
**Mode:** Encrypt (Hash only)  
**Output:**  
`34819d7beeabb9260a5c854bc85b3e44b15bff32a4d5c0d6a5b8f06c3b5b9f1b`  

*(Cannot be decrypted — one-way hash)*  

---

## 📘 Example 2 (Additional Inputs)

### 🔸 Caesar Cipher
**Plain Text:** ENCRYPTION TOOL  
**Shift:** 5  
**Output:** JSHWDUYNSL YTTQ  

---

### 🔸 AES Example
**Plain Text:** Confidential data must stay safe.  
**Password:** secureKey2025  
**Output:** `U2FsdGVkX1+xLhrb1tU6rUJ2o4JYzVshShJ1vY+WgD8=`  

---

### 🔸 SHA-256 Example
**Plain Text:** securepassword2025  
**Output:**  
`5dc4f758b5ccaf2d61b53b89b6df8353c55e4a84a687dcfc5a28d3a5ce2fcbbe`

---

## 🧰 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/web-text-encryption-tool.git
   cd web-text-encryption-tool


# Run the project
Just open index.html in your browser!
(No backend or server required)

Optional: Host Online

GitHub Pages

Netlify

Vercel

# Project Demo Link
https://drive.google.com/file/d/1g5_qANmzaqcNMimhxOfBsmAtMzcPQ_iE/view?usp=sharing


# 🔒 Security Note

This tool is for educational and demo purposes only.
Do not use it for encrypting real confidential data — browser-based cryptography can be intercepted or reversed depending on implementation.

# 👨‍💻 Author

Developed By: Muhammad Ahsan
🎓 Computer Science Student
📧 Email: mahsan6842@gmail.com



🏁 Conclusion

The Web-Based Text Encryption Tool demonstrates how cryptography can be implemented in web applications using JavaScript.
It combines both classical (Caesar) and modern (AES, DES, SHA-256) techniques — making it an excellent educational project for learning secure data handling.

📚 References

CryptoJS Documentation

MDN Web Docs: atob() / btoa()

Wikipedia: Cryptographic Algorithms
