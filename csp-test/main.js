var express = require("express");
var app     = express();
var path    = require("path");

app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", 
        "script-src 'self' 'unsafe-inline' *.jquery.com;" + 
        "connect-src 'self' *.yahooapis.com *.jnj.com");
    return next();
});

/**
 * This sample sets restrictive CSP headers in order to test how a browser will react to blocking certain content types.
 */
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);

console.log("Running at Port 3000");