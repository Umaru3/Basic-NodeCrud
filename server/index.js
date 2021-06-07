const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({ //db connection

    user: 'root',
    host: 'localhost',
    password:'',
    database: 'mysql',
});

app.listen(3090, () => {
    console.log("Connected! Server Running.");
})