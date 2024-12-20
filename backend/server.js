const express = require("express");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 8080;

app.use("/", async (req, res) => {
  try {
    return res.status(200).send({ message: "making get requset!" });
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
