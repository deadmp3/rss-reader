import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import axios from 'axios';

const app = express();

app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname, '../assets')));
app.get('/', (req, res) => res.sendFile('index.html', { root: path.join(__dirname, '../assets') }));
app.post('/rss', (req, res) => {
  axios.get(req.body.url)
    .then(r => res.send(r.data))
    .catch(err => console.log(err));
});

app.listen(process.env.PORT || 3000);
