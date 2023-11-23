import express from "express";
const app=express();
const port=3000; 
app.get("/",(req,res)=>{
res.send("<h1>Home Page</h1>");
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}.`);
});
console.log("HII")
// https://developer.mozilla.org/en-US/docs/web/HTTP/Status   -->Link for error details like 400 