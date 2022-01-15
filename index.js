import express from "express";
const PORT = 5000;

//middleware
import bodyParser from "body-parser";
//dependencies
import userRoutes from "./routes/user.route.js";
const app = express();

app.use(bodyParser.json());
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("This is HomePage");
});

app.listen(PORT, () => {
  console.log(`Server is Running on port:http://localhost:${PORT}`);
});
