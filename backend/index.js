const express = require('express')
const multer = require('multer')
const app = express()
const firebase = require('./firebase')

app.use(express.urlencoded({extended: false}))
app.use(express.json({extended: false}))

const upload = multer({
    storage: multer.memoryStorage()
})

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


app.listen(3001, () => {
    console.log('Listening on port 3001')
})