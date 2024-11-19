import express from "express";

const app = express();
app.listen(3000, () => {
  console.log("Servidor escutando...");
});

app.get("/api", (req, res) => {
  res.status(200).send("Boas vindas à imersão! Agora são 10:30 da manhã!");
});
