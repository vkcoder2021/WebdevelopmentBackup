import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Angela</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
// https://youtu.be/FkwZfFT_v9Q?si=9XMWOnuUNaLN0aWL
//Link if in case error happen while running nodemon 
//Run Window Powershell as Administrator,then run Get-ExecutionPolicy 
//Set-ExecutionPolicy Unrestricted 
