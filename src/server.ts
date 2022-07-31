import app from "./App";

require('dotenv').config()

const port = process.env.PORT || 3030

app.listen(port)