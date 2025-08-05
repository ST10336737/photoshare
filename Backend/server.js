import express from 'express'
import dotenv from 'dotenv'
import fs from 'fs'
import https from 'https'
import { Certificate } from 'crypto';
// We are loading the enviroments variables from .env
dotenv.config();

//Initialise express app
const app = express();
const PORT = process.env.PORT || 5000;

// Adding middleware to parse JSON Bodies; Middleware using software that you did not create yourself
app.use(express.json())

//Add basic route
app.get('/',(req,res) =>{

    res.send('Welcome to the PhotoShare API');
})

//secure certificate (making use of the mkcerts)
const sslOptions ={
    key: fs.readFileSync('./certs/localhost-key.pem'),
     Cert: fs.readFileSync('./certs/localhost.pem')
}
//Start the HTTPS server
https.createServer(sslOptions, app).listen(PORT,()=>{console.log('Https is running ${PORT}');
    
})

//Remember you can use the same way you used for the Agent app.
//Used (choco install mkcert) has different libraries this is what youn use 
// mkcert install
//mkcert localhost
//https://github.com/FiloSottile/mkcert#installation