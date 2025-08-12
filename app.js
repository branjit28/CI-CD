const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Raghul Raj D M, Am from CI/CD Pipeline! executed by Ranjit');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
