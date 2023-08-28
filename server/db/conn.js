const mongoose = require('mongoose');

const uri = process.env.URI ;

mongoose.set('strictQuery', true);

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  const connectToServer = async () => {
    try {
        await mongoose.connect(uri, options);
        console.log("Connected to MongoDB");
    }
    catch(err) {
        console.error("Error connecting to MongoDB:", err);
    } 
}

module.exports = {connectToServer};