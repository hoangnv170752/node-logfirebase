const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const app = express();
const firebase = require('./firebase');
const bodyParser = require('body-parser');
const http = require('http');
const formidable = require('formidable');
var fs = require('fs');
var url = require('url');
const path = require('path');
const axios = require('axios');
const fetch = require('node-fetch');
const bucket = require('./firebase.js');
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json({extended: false}));

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "--" + file.originalname);
    }
})

// const upload = multer({
//     storage: multer.memoryStorage()
// })
const upload = multer({
    storage: fileStorageEngine
});
const options = {
    host: "jsonplaceholder.typicode.com",
    path: "/receive",
    method: "POST",
    headers: {
        'Accept': 'application/json'
    }
}

app.post('/upload', upload.single('file'),(req,res) => {
    console.log('Upload API')
    if(!req.file){
        res.status(400).send("Error: no files found")
    }
    const blob = firebase.bucket.file(req.file.originalname)

    const blobWriter = blob.createWriteStream({
        metadata: {
            contentType: req.file.minitype
        }
    })
    blobWriter.on('error', (err) => {
        console.log(err)
    })
    blobWriter.on('finish', () => {
        res.status(200).send('Uploaded file')
    })
    blobWriter.end(req.file.buffer)
})
app.post('/single', upload.single('file'),(req,res) => {
    console.log(req.file);
    res.send('Single file upload send');
});
app.post ('/uploadmulti', upload.array("files" , 2) ,(req,res) => {
    console.log(req.files);
    res.send("Multiple Files Upload");
})

app.listen(3001, () => {
    console.log('Listening on port 3001')
})