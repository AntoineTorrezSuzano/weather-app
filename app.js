import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { fetch_weather } from './src/fetch_weather.js'
import cors from 'cors'

const app = express()
const port = 3000

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(cors())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/api', async (req, res) => {
    try {
        const data = await fetch_weather();
        res.send(data);
    } catch (error) {
        console.error('Weather fetch failed:', error);
        res.status(500).send({error: "Failed to fetch weather data"});
    }

})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
