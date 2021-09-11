// Made by Charlie McMahon, Copyright 2021.
// 11th September 2021

var express = require('express')
var multer  = require('multer')
var port = 3000;

let ejs = require('ejs');

var app = express()

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) { // Make sure that there aren't any duplicates
      cb(null, `image-${(Math.round(Date.now() / 1000))}.${file.originalname.split('.').pop()}`) // Set filename to the original file name + current time.
    }
})
var upload = multer({ storage: storage })


app.use('/cdn',express.static('uploads'));
app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));

app.set('view engine', 'ejs');

app.post('/upload', upload.single('profile-file'), function (req, res, next) {
  // req.file is the `profile-file` file from form
  // req.body will hold the text fields, if there were any
  console.log(JSON.stringify(req.file))
	// change path
	var cdnPath = req.file.path;
	cdnPath = cdnPath.replace('uploads','');

	res.render('res.ejs', {
    url: `https://image-uploads.cdn.webdesign.maccastech.com.au/cdn${cdnPath}`
  });
})
   

app.listen(port,() => console.log(`Server running on port ${port}!\nClick http://localhost:3000/`))