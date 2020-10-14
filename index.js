const server = require("./server")
const userRouter = require("./routes/usersRoutes/userRoute");
const authRouter = require("./routes/authRoutes/authRoute")

server.use("/users", userRouter);
server.use("/auth", authRouter);

server.get("/", (req, res) => {
  res.status(200).json({ INDEX: "Server is running..." });
});