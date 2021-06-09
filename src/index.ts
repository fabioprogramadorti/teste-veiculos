import express from 'express'
import { dbInit } from './db/config'
import veiculosRoutes from './routes/veiculos.routes'

const app = express()

import { json, urlencoded } from 'body-parser'

app.use(urlencoded({ extended: true }))
app.use(json())

// Start mongodb connection
dbInit()

app.use('/veiculos', veiculosRoutes)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('listening on port', PORT)
})