const express = require('express');

const app = express()

const PORT = 3000

const routerMocks = require('./routes/mocks');
const routerExternal = require('./routes/external');

app.use("/mocks-data", routerMocks)
app.use("/external-data", routerExternal)

app.listen(PORT,()=>{
  console.log(`Escuchando en http://localhost:${PORT}`)
})