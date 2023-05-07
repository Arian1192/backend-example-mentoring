// app.js
const express = require("express");
const responseTime = require("response-time");
const { dataBaseConnections } = require("./mongo/dataBaseConnections");
const authRouter = require("./src/routers/authRouter");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const userRouter = require("./src/routers/userRouter");
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(responseTime());
dataBaseConnections();

app.use("/user/auth", authRouter);
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
