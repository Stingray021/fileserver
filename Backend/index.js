require('dotenv').config()
const express = require('express');
const cors = require('cors')
const router = require('./routes/index')
const app = express();
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())
app.use('/api', router)

const start = async () => {
    try {
        // await client.connect();
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
    //await client.end();
}
start();