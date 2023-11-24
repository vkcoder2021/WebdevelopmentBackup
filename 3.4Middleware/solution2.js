import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;
console.log("4");
app.use(morgan("combined"));
console.log("3");

app.get("/", (req, res) => {
  console.log("2");
  res.send("Hello");
});
console.log("1");
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
