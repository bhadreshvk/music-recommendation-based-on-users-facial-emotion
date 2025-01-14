
const exec = require('child_process').exec; 
const express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
//const methodOverride = require('method-override');
const session = require('express-session');
const app = express();
const mysql      = require('mysql');
let bodyParser=require("body-parser");
let connection = mysql.createConnection({
              host     : 'localhost',
              user     : 'root',
              password : 'NewPassword',
              database : 'test'
            });
 

   
connection.connect();
 
global.db = connection;
 
// all environments
//app.set('port', process.env.PORT || 8080);
//app.set('domain', '192.168.1.10');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))

// app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
              secret: 'music by your facial expression',
              resave: true,
              saveUninitialized: true,
              cookie: { maxAge: 9999999 }
            }))
 
// development only
 
app.get('/', routes.index);//call for main index page
app.get('/signup', user.signup);//call for signup page
app.post('/signup', user.signup);//call for signup post 
app.get('/login', routes.index);//call for login page
app.post('/login', user.login);//call for login post
app.get('/home/dashboard', user.dashboard);//call for dashboard page after login
app.get('/home/logout', user.logout);//call for logout
app.get('/home/profile',user.profile);//to render users profile
//Middleware
app.listen(8080)


var commands = [
  ' C:/ProgramData/Miniconda3/Scripts/activate.bat C:/ProgramData/Miniconda3 ',
  'cd C:/Users/Anandakumar VK/Downloads/em/music-recommendation-based-on-users-facial-emotion/src/',
  'conda activate tf',
  'python ./em.py',
]

exec(commands.join(' & '),
function(error, stdout, stderr){
  console.log(error)
  console.log(stdout)
  console.log(stderr)
}
);

/*
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated');
  });
});
*/
/*
Auhtors 
BHADRESH VK (AWH19CS017)  
SALIN NV (AWH19CS037)
SIDRATHUL MUNTHAHA PV (AWH19CS041)
SREEHARI KA(LAWH19CS050)
*/