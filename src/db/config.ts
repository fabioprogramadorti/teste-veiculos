// Conexão mongodb
import mongoose from 'mongoose'

const dbName = process.env.DB_NAME || 'veiculos'

export const dbInit = () => {

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }

  var connectionString = `mongodb://localhost:27017/${dbName}`

  mongoose.connect(connectionString, options)
    .then(res => {
      console.log('MongoDB connected successfuly')
    })
    .catch(err => {
      console.error(`An error occurred on the database connection: ${err.message}`)
    })
}
