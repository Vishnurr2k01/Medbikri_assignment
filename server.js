
const express = require("express");
const youtubeRouter = require("./routes/youtube");


const app = express();
const port = 3000;

app.use('/',youtubeRouter)


app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
