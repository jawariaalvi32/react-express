const mongoose = require('mongoose')

async function dbConnect() {
    try {
        await mongoose.connect('mongodb+srv://jawaria:j@w@ri@123@cluster0.sudam.mongodb.net/PostDB?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
          });
          console.log("Connected")
    } catch(e) {
        console.log(e)
    }
}

module.exports = dbConnect