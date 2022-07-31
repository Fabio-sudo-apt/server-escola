import app from "./App";
import ip from 'ip';

require('dotenv').config()

const port = process.env.PORT
const http = process.env.HTTP
const address = ip.address()

app.listen(port, () => {
    console.log(`Server on: ${http}://${address}:${port}`)
})