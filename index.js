const express = require('express');
const app = express();
const PORT = 3;  
const path=require('path');

var cookieparser=require('cookie-parser');
app.use(express.static('public'));
const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({ extended: true }));
const urlroutes = require('./Router/route.js');
const  connectTomongoDB  = require('./connect.js');  
connectTomongoDB("----------------------")
app.use(express.json());
app.use(cookieparser());

app.post('/', urlroutes);
app.post('/savedata', urlroutes);

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));



app.get('/', (req, resp) => {
  resp.render('home.ejs');
});

app.post('/signup',urlroutes);

app.post('/login',urlroutes);
app.listen(PORT, () => {
  console.log(`Server is working on PORT ${PORT}`);
});


