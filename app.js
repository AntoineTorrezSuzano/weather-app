const express = require('express')
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(express.static('public'));

app.use('/www', express.static('public'));
app.get('/', (req, res) => {
    
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

//API KEY WEATHER APP : 6ad97f1c03fd36e7b9cbf23cf9b74b4b