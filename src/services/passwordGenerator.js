import bcrypt from "bcrypt";

const password="Admin"
const hashedPassword = await bcrypt.hash(password, 10);
console.log(hashedPassword,"hashedPassword")
