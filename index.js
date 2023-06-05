const express = require('express');
const app = express();
const parcelController = require('./controllers/parcelmachine');

app.use(express.json());
app.use('/', parcelController);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
