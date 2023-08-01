'use strict';



const express = require('express');
const app = express();

const QRCode = require('qrcode');


const PORT = 3000;


app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));

app.get("/", async (req,res)=>{
    console.log(req.query.url);
    await QRCode.toFile('pet_info.svg', req.query.url, {
        type: 'svg'
    });
    res.sendFile(__dirname + '/pet_info.svg');
});

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}!`);
});
