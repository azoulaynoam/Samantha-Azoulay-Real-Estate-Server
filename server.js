const compression = require('compression')
const express = require('express'),
    app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const autoIncrement = require('mongoose-auto-increment')
const path = require('path')
const multer = require('multer')

mongoose.Promise = global.Promise;
const uri = "";
var connection = mongoose.createConnection(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
autoIncrement.initialize(connection);

module.exports.connection = connection;

var User = require('./api/models/userModel')
var Session = require('./api/models/sessionModel')
var Property = require('./api/models/propertyModel')
var routes = require('./api/routes/propertyRoute') //importing route with all methods

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './build/uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const upload_files = multer({ storage: storage, fileFilter: (req, file, cb) => {
    console.log(file)
    if (file.fieldname === "images"){
        if (file.mimetype.indexOf('image/') === 0)
        {
            cb(null, true)
        } else {
            cb("Image type not supported", false)
        }
    }
    else if (file.fieldname === "video"){
        if (file.mimetype.indexOf('video/') === 0){
            cb(null, true)
        } else {
            cb("Video type not supported", false)
        }
    } else {
        cb("File type not supported", false)
    }
}})

app.use(compression())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.static('build'));
routes(app, upload_files)
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/build/index.html'))
});

app.listen(4000)

console.log('Azoulay Real-Estate API Started')