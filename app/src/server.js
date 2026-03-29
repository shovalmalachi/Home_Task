const express = require("express");
const path = require("path");
const { connectToDb } = require("./db");

const healthRouter = require("./routes/health");
const fruitsRouter = require("./routes/fruits");
const config = require("./config");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/health", healthRouter);
app.use("/api/fruits", fruitsRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

async function startServer() {
  try {
    await connectToDb();

    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
}

startServer();