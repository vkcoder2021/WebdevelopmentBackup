import https from "https";
import express from "express";
const app = express();
const port = 3000;



app.get("/",(req,res)=>{
    const options ={
    hostname:"bored-api.appbrewery.com",
    path:"/random",
    method:"GET",
    };
    console.log(options);
    const request =https.request(options,(response)=>{
        let data= "";
        console.log(response);
        response.on("data",(chunk)=>{
            data+=chunk;
        });
        response.on("end",()=>{
            try{
            const result=JSON.parse(data);
            res.render("solution.ejs",{activity:data})
            
            }catch(error){
             console.error("Failed to parse response",error.message);
             res.status(500).send("Failed to");
            }
        });
     
        
    });
    request.on('error',(error)=>{
        console.error("Failed to make request dd ",error.message);
        res.status(500).send("Failed ");
    });
    request.end();

});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });