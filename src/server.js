const express = require('express');
const app = express();
const port = process.env.PORT || 3334;

app.use(express.static('./src/public/'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
