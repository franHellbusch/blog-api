const { loadEnvFile } = require("node:process");
const express = require("express");
const authorsRouter = require("./routes/authors.routes");
const postsRouter = require("./routes/posts.routes");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

if (process.env.NODE_ENV !== "production") {
  loadEnvFile(".env");
}

const app = express();
const PORT = process.env.PORT || 3000;

const swaggerDocument = YAML.load("./openapi.yaml");

app.use(express.json());

// Documentacion Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/authors", authorsRouter);
app.use("/api/posts", postsRouter);

app.get("/", (req, res) => {
  res.json({ message: "Blog API", version: "1.0" });
});

app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📚 Documentación en http://localhost:${PORT}/api-docs`);
});
