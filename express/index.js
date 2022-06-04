const express = require('express');
const mysql = require('mysql');
const cors = require('cors')


const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'Apollo'
})

connection.connect((err) => {
    if (!err) {
        console.log('Connected to MYSQL')
    }
})

const app = express();
app.use((express.json()));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is true !!!')
})

// app.get('/publications', (req, res) => {
//     connection.query('SELECT * FROM publication', (err, data) => {
//         if (!data) {
//             return res.status(400).send()
//         }
//         res.status(200).send(data)
//     })
// })

app.get('/aze', (req, res) => {
    connection.query("SELECT * FROM publication"), (err, data) => {
        if (!data) {
            return res.status(400).send()
        }
        res.status(200).send(data)
    }
})
app.get('/tr', (req, res) => {
    connection.query('SELECT * FROM publication WHERE publication_name=' + "'tr'"), (err, data) => {
        if (!data) {
            return res.status(400).send()
        }
        res.status(200).send(data)
    }
})
app.get('/eng', (req, res) => {
    connection.query('SELECT * FROM publication WHERE publication_name=' + "'eng'"), (err, data) => {
        if (!data) {
            return res.status(400).send()
        }
        res.status(200).send(data)
    }
})

app.listen(3000, function () {
    console.log('Server started add 3000 port')
})