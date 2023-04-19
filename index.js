const express = require('express');
const { dataBaseConnections } = require('./mongo/dataBaseConnections');
const userRouter = require('./src/routers/userRouter');
// const authRouter = require('./src/routers/authRouter');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
dataBaseConnections();
// app.use("/user/auth", authRouter)
app.use("/user", userRouter);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
    });
