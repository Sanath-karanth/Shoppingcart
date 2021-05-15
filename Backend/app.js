const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<form method="POST"><input type="text" name="username"><button type="submit">Create user</button></form>')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});