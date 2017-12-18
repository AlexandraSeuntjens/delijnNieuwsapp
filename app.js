var express = require("express");
var path = require("path");
var app = express();
var request = require('request');
var antwerpen, deurne, ekeren, gent, dendermonde, leuven;

request('https://www.delijn.be/rise-api-search/search/gemeenteNieuws/tcm:3-3176-1024/1/3', function (error, response, body) {
  antwerpen = body;
  console.log(body);
});

request('https://www.delijn.be/rise-api-search/search/gemeenteNieuws/tcm:3-4274-1024/1/3', function (error, response, body) {
  deurne = body;
  console.log(body);
});

request('https://www.delijn.be/rise-api-search/search/gemeenteNieuws/tcm:3-4312-1024/1/3', function (error, response, body) {
  merksem = body;
  console.log(body);
});

request('https://www.delijn.be/rise-api-search/search/gemeenteNieuws/tcm:3-6732-1024/1/3', function (error, response, body) {
  ekeren = body;
  console.log(body);
});

request('https://www.delijn.be/rise-api-search/search/gemeenteNieuws/tcm:3-478-1024/1/3', function (error, response, body) {
  gent = body;
  console.log(body);
});

request('https://www.delijn.be/rise-api-search/search/gemeenteNieuws/tcm:3-3003-1024/1/3', function (error, response, body) {
  dendermonde = body;
  console.log(body);
});

request('https://www.delijn.be/rise-api-search/search/gemeenteNieuws/tcm:3-3154-1024/1/3', function (error, response, body) {
  leuven = body;
  console.log(body);
});

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'))

app.get('/', function(req, res) {
    locatie = req.query.q
    res.render('index', {
      data : antwerpen
    });
});

app.get("/welkom", function(req, res) {
    res.render("welkom");
});

app.get("/zoek", function(req, res) {
    res.render("zoek");
});

app.get("/overzicht", function(req, res) {
    res.render("overzicht");
});

app.get("/detail", function(req, res) {
    res.render("detail");
});

app.get('/antwerpen', function(req, res) {
    res.render('antwerpen', {
      data : antwerpen
    });
});

app.get('/antwerpenA1', function(req, res) {
    res.render('antwerpenA1', {
      data : antwerpen
    });
});

app.get('/antwerpenA2', function(req, res) {
    res.render('antwerpenA2', {
      data : antwerpen
    });
});

app.get('/antwerpenA3', function(req, res) {
    res.render('antwerpenA3', {
      data : antwerpen
    });
});

app.get('/deurne', function(req, res) {
    res.render('deurne', {
      data : deurne
    });
});

app.get('/deurneA1', function(req, res) {
    res.render('deurneA1', {
      data : deurne
    });
});

app.get('/deurneA2', function(req, res) {
    res.render('deurneA2', {
      data : deurne
    });
});

app.get('/deurneA3', function(req, res) {
    res.render('deurneA3', {
      data : deurne
    });
});

app.get('/merksem', function(req, res) {
    res.render('merksem', {
      data : merksem
    });
});

app.get('/merksemA1', function(req, res) {
    res.render('merksemA1', {
      data : merksem
    });
});

app.get('/merksemA2', function(req, res) {
    res.render('merksemA2', {
      data : merksem
    });
});

app.get('/merksemA3', function(req, res) {
    res.render('merksemA3', {
      data : merksem
    });
});

app.get('/ekeren', function(req, res) {
    res.render('ekeren', {
      data : ekeren
    });
});

app.get('/ekerenA1', function(req, res) {
    res.render('ekerenA1', {
      data : ekeren
    });
});

app.get('/ekerenA2', function(req, res) {
    res.render('ekerenA2', {
      data : ekeren
    });
});

app.get('/ekerenA3', function(req, res) {
    res.render('ekerenA3', {
      data : ekeren
    });
});

app.get('/gent', function(req, res) {
    res.render('gent', {
      data : gent
    });
});

app.get('/gentA1', function(req, res) {
    res.render('gentA1', {
      data : gent
    });
});

app.get('/gentA2', function(req, res) {
    res.render('gentA2', {
      data : gent
    });
});

app.get('/gentA3', function(req, res) {
    res.render('gentA3', {
      data : gent
    });
});

app.get('/dendermonde', function(req, res) {
    res.render('dendermonde', {
      data : dendermonde
    });
});

app.get('/dendermondeA1', function(req, res) {
    res.render('dendermondeA1', {
      data : dendermonde
    });
});

app.get('/dendermondeA2', function(req, res) {
    res.render('dendermondeA2', {
      data : dendermonde
    });
});

app.get('/dendermondeA3', function(req, res) {
    res.render('dendermondeA3', {
      data : dendermonde
    });
});
app.get('/leuven', function(req, res) {
    res.render('leuven', {
      data : leuven
    });
});

app.get('/leuvenA1', function(req, res) {
    res.render('leuvenA1', {
      data : leuven
    });
});

app.get('/leuvenA2', function(req, res) {
    res.render('leuvenA2', {
      data : leuven
    });
});

app.get('/leuvenA3', function(req, res) {
    res.render('leuvenA3', {
      data : leuven
    });
});
app.get('/gent', function(req, res) {
    res.render('gent', {
      data : gent
    });
});

app.get('/gentA1', function(req, res) {
    res.render('gentA1', {
      data : gent
    });
});

app.get('/gentA2', function(req, res) {
    res.render('gentA2', {
      data : gent
    });
});

app.get('/gentA3', function(req, res) {
    res.render('gentA3', {
      data : gent
    });
});
app.get('/gent', function(req, res) {
    res.render('gent', {
      data : gent
    });
});

app.get('/gentA1', function(req, res) {
    res.render('gentA1', {
      data : gent
    });
});

app.get('/gentA2', function(req, res) {
    res.render('gentA2', {
      data : gent
    });
});

app.get('/gentA3', function(req, res) {
    res.render('gentA3', {
      data : gent
    });
});
app.get('/gent', function(req, res) {
    res.render('gent', {
      data : gent
    });
});

app.get('/gentA1', function(req, res) {
    res.render('gentA1', {
      data : gent
    });
});

app.get('/gentA2', function(req, res) {
    res.render('gentA2', {
      data : gent
    });
});

app.get('/gentA3', function(req, res) {
    res.render('gentA3', {
      data : gent
    });
});

app.listen(app.get('port'), function() {
  console.log('Node luistert op poort', app.get('port'));
});
