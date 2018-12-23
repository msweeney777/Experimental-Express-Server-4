const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Current U.S. Senators by State'
  });
});

app.get('/List', (req, res) => {
  res.render('List.hbs', {
    pageTitle: 'Current U.S. Senators by State'
  });
});

app.get('/Key', (req, res) => {
  res.render('Abbreviation_Key.hbs', {
    pageTitle: 'Abbreviation Key'
  });
});

app.get('/Alabama', (req, res) => {
  res.render('Alabama.hbs', {
    pageTitle: 'Alabama'
  });
});

app.get('/Alaska', (req, res) => {
  res.render('Alaska.hbs', {
    pageTitle: 'Alaska'
  });
});

app.get('/Arizona', (req, res) => {
  res.render('Arizona.hbs', {
    pageTitle: 'Arizona'
  });
});

app.get('/Arkansas', (req, res) => {
  res.render('Arkansas.hbs', {
    pageTitle: 'Arkansas'
  });
});

app.get('/California', (req, res) => {
  res.render('California.hbs', {
    pageTitle: 'California'
  });
});



app.listen(3000, () => {
  console.log("Server up and running")
});
