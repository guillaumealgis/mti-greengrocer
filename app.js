
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Unique id
(function() {
    function S4() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
    function guid() {
       return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    if ( typeof Object.prototype.uniqueId == "undefined" ) {
        Object.prototype.uniqueId = function() {
            if ( typeof this.__uniqueid == "undefined" ) {
                this.__uniqueid = guid();
            }
            return this.__uniqueid;
        };
    }
})();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

// FIXME: Add routes

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
