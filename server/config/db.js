const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();

async function dbConnect() {
    try {
        await mongoose.connect(process.env.mongooseUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
          });
          console.log("Connected")
          mongoose.connection.on('connected', function () {//connected
            console.log('Mongoose is connected');
          });
      
          mongoose.connection.on('disconnected', function () {//disconnected
            console.log("Mongoose is disconnected");
            process.exit(1);
          });
          mongoose.connection.on('error', function (err) {//any error
          console.log("Mongoose connection error", err);
          process.exit(1);
        });
    } catch(e) {
        console.log(e)
    }
}

module.exports = dbConnect