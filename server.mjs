import express from 'express';
import bodyParser from 'body-parser';

const app = express();

import home from './app/index.mjs'
import contact from './app/views/contact.mjs'

import plot from './app/api/plot.mjs'


app.get('/', home);
app.get('/contact', contact);

app.use(bodyParser.json())

app.post('/api/plot', plot);

app.listen('3000')

