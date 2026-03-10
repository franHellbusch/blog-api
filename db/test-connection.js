const { loadEnvFile } = require("node:process");
loadEnvFile(".env");

const pool = require("./config");

async function testConnection() {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("✅ Conexión exitosa a PostgreSQL");
    console.log("Hora del servidor:", result.rows[0].now);
    await pool.end();
  } catch (error) {
    console.error("❌ Error conectando:", error.message);
  }
}

testConnection();

const result = await pool.query("SELECT * FROM authors");

console.log(result.rows); // Array de objetos → lo que más usamos
console.log(result.rowCount); // Cuántas filas
console.log(result.command); // 'SELECT', 'INSERT', etc.
