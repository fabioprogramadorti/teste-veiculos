import express from 'express'

const app = express()

import { json, urlencoded } from 'body-parser'

app.use(urlencoded({ extended: true }))
app.use(json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('listening on port', PORT)
})