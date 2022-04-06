# node-logfirebase
> This is a nodejs + reactjs project to upload file to Firebase storage

**Step 1: Create a project in Firebase console**
![image](https://i.ibb.co/JHw7rSG/screenshot-console-firebase-google-com-2022-04-06-17-06-06.png)
- Choose Project Setting 
- Choose Service Account
- Generate new private key 
- Import Servicekey.json inside the project

**Step 2: Create backend folder to store Nodejs server**

`npm i express multer firebase-admin`

*- Create a firebase.js to config firebase admin SDK*

*- Open port 3001 for server and config upload tab*

`app.post('/upload', upload.single('file'),(req,res) => {
})`

`app.listen(3001, () => {
    console.log('Listening on port 3001')
})`
