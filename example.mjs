import express from 'express';
import honeypots from './index.mjs';

const app = express();

app.use(honeypots());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
