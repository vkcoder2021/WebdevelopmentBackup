import https from "https";

const options = {
  hostname: "bored-api.appbrewery.com",
  path: "/random",
  method: "GET",
};

const req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  //console.log('headers:', res.headers);
 let data="";
  res.on('data', (d) => {
    
    data=data+d;
    console.log(data);
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();