let express = require('express');
let app = express();
let path = require('path');
app.set('trust proxy', true);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');
app.use(express.static('public'));
app.use('/',(req, res)=>{
    res.render('index');
});
app.listen(8080, function() {
    console.log('Started HTTP server on port', 8080);
});
