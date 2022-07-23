const express = require('express');
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

//ROOT ENDPOINT
app.get("/",(req, res)=>{
    res.send("Api shoes by Amos");
});

const routerApi = require('./routes/main.controller');

app.use(express.json());

//CORS
var whitelist = ['http://127.0.0.1:5500','http://127.0.0.1:5501', "http://localhost:3000"]
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin || !origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
};
app.use(cors(corsOptions));


app.listen(port, () => {
    console.log('Servidor express listening...');
});

routerApi(app);