const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // options to avoid wornings in the console
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false, 
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1) //stop the process with warning
  }
}

module.exports = connectDB
