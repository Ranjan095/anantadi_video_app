const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const { json } = require("body-parser");
const authRouter = require("./routes/authRoutes");


const app = express();
app.use(json())
const PORT = process.env.PORT || 8080;

app.get("/", async (req, res) => {
  try {
    return res.status(200).send({ message: "making get requset!" });
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

app.use('/api/auth', authRouter);
// app.use('/api/videos', videoRoutes);

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log("Db has been connected!");
    console.log(`App is listening on ${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
