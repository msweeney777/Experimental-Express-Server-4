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

app.get('/Colorado', (req, res) => {
  res.render('Colorado.hbs', {
    pageTitle: 'Colorado'
  });
});

app.get('/Connecticut', (req, res) => {
  res.render('Connecticut.hbs', {
    pageTitle: 'Connecticut'
  });
});

app.get('/Delaware', (req, res) => {
  res.render('Delaware.hbs', {
    pageTitle: 'Delaware'
  });
});

app.get('/Florida', (req, res) => {
  res.render('Florida.hbs', {
    pageTitle: 'Florida'
  });
});

app.get('/Georgia', (req, res) => {
  res.render('Georgia.hbs', {
    pageTitle: 'Georgia'
  });
});

app.get('/Hawaii', (req, res) => {
  res.render('Hawaii.hbs', {
    pageTitle: 'Hawaii'
  });
});

app.get('/Idaho', (req, res) => {
  res.render('Idaho.hbs', {
    pageTitle: 'Idaho'
  });
});

app.get('/Illinois', (req, res) => {
  res.render('Illinois.hbs', {
    pageTitle: 'Illinois'
  });
});

app.get('/Indiana', (req, res) => {
  res.render('Indiana.hbs', {
    pageTitle: 'Indiana'
  });
});

app.get('/Iowa', (req, res) => {
  res.render('Iowa.hbs', {
    pageTitle: 'Iowa'
  });
});

app.get('/Kansas', (req, res) => {
  res.render('Kansas.hbs', {
    pageTitle: 'Kansas'
  });
});

app.get('/Kentucky', (req, res) => {
  res.render('Kentucky.hbs', {
    pageTitle: 'Kentucky'
  });
});

app.get('/Louisiana', (req, res) => {
  res.render('Louisiana.hbs', {
    pageTitle: 'Louisiana'
  });
});

app.get('/Maine', (req, res) => {
  res.render('Maine.hbs', {
    pageTitle: 'Maine'
  });
});

app.get('/Maryland', (req, res) => {
  res.render('Maryland.hbs', {
    pageTitle: 'Maryland'
  });
});

app.get('/Massachusetts', (req, res) => {
  res.render('Massachusetts.hbs', {
    pageTitle: 'Massachusetts'
  });
});

app.get('/Michigan', (req, res) => {
  res.render('Michigan.hbs', {
    pageTitle: 'Michigan'
  });
});

app.get('/Minnesota', (req, res) => {
  res.render('Minnesota.hbs', {
    pageTitle: 'Minnesota'
  });
});

app.get('/Mississippi', (req, res) => {
  res.render('Mississippi.hbs', {
    pageTitle: 'Mississippi'
  });
});

app.get('/Missouri', (req, res) => {
  res.render('Missouri.hbs', {
    pageTitle: 'Missouri'
  });
});

app.get('/Montana', (req, res) => {
  res.render('Montana.hbs', {
    pageTitle: 'Montana'
  });
});

app.get('/Nebraska', (req, res) => {
  res.render('Nebraska.hbs', {
    pageTitle: 'Nebraska'
  });
});

app.get('/Nevada', (req, res) => {
  res.render('Nevada.hbs', {
    pageTitle: 'Nevada'
  });
});

app.get('/New_Hampshire', (req, res) => {
  res.render('New_Hampshire.hbs', {
    pageTitle: 'New Hampshire'
  });
});

app.get('/New_Jersey', (req, res) => {
  res.render('New_Jersey.hbs', {
    pageTitle: 'New Jersey'
  });
});

app.get('/New_Mexico', (req, res) => {
  res.render('New_Mexico.hbs', {
    pageTitle: 'New Mexico'
  });
});

app.get('/New_York', (req, res) => {
  res.render('New_York.hbs', {
    pageTitle: 'New York'
  });
});

app.get('/North_Carolina', (req, res) => {
  res.render('North_Carolina.hbs', {
    pageTitle: 'North Carolina'
  });
});

app.get('/North_Dakota', (req, res) => {
  res.render('North_Dakota.hbs', {
    pageTitle: 'North Dakota'
  });
});

app.get('/Ohio', (req, res) => {
  res.render('Ohio.hbs', {
    pageTitle: 'Ohio'
  });
});

app.get('/Oklahoma', (req, res) => {
  res.render('Oklahoma.hbs', {
    pageTitle: 'Oklahoma'
  });
});

app.get('/Oregon', (req, res) => {
  res.render('Oregon.hbs', {
    pageTitle: 'Oregon'
  });
});

app.get('/Pennsylvania', (req, res) => {
  res.render('Pennsylvania.hbs', {
    pageTitle: 'Pennsylvania'
  });
});

app.get('/Rhode_Island', (req, res) => {
  res.render('Rhode_Island.hbs', {
    pageTitle: 'Rhode Island'
  });
});

app.get('/South_Carolina', (req, res) => {
  res.render('South_Carolina.hbs', {
    pageTitle: 'South Carolina'
  });
});

app.get('/South_Dakota', (req, res) => {
  res.render('South_Dakota.hbs', {
    pageTitle: 'South Dakota'
  });
});

app.get('/Tennessee', (req, res) => {
  res.render('Tennessee.hbs', {
    pageTitle: 'Tennessee'
  });
});

app.get('/Texas', (req, res) => {
  res.render('Texas.hbs', {
    pageTitle: 'Texas'
  });
});

app.get('/Utah', (req, res) => {
  res.render('Utah.hbs', {
    pageTitle: 'Utah'
  });
});

app.get('/Vermont', (req, res) => {
  res.render('Vermont.hbs', {
    pageTitle: 'Vermont'
  });
});

app.get('/Virginia', (req, res) => {
  res.render('Virginia.hbs', {
    pageTitle: 'Virginia'
  });
});

app.get('/Washington', (req, res) => {
  res.render('Washington.hbs', {
    pageTitle: 'Washington'
  });
});

app.get('/West_Virginia', (req, res) => {
  res.render('West_Virginia.hbs', {
    pageTitle: 'West Virginia'
  });
});

app.get('/Wisconsin', (req, res) => {
  res.render('Wisconsin.hbs', {
    pageTitle: 'Wisconsin'
  });
});

app.get('/Wyoming', (req, res) => {
  res.render('Wyoming.hbs', {
    pageTitle: 'Wyoming'
  });
});

app.listen(3000, () => {
  console.log("Server up and running")
});
