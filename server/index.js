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

app.get('/viewPeople', (req,res) => {//get all people's name from db table

    db.query("SELECT * FROM simplecrudtable",(err,result) =>{

        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.post('/insertPeople', (req,res) => {//Insert People to DB table

    const name = req.body.name;
    db.query(
        "INSERT INTO simplecrudtable(pName) VALUES(?)",
        [name],
        (err, result) => {
            if(err){
                console.log(err);
            }else{
                res.send("Success!");
            }
        });
});

app.post('/updatePeople', (req,res) => {//Update People to DB table

    const name = req.body.name;
    const id = req.body.id;
    db.query(
        "UPDATE simplecrudtable SET pName=? WHERE pId =?",
        [name,id],
        (err, result) => {
            if(err){
                console.log(err);
            }else{
                res.send("Success!");
            }
        });
});

app.listen(3090, () => {
    console.log("Connected! Server Running.");
})