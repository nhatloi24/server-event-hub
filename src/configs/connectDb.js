const { default: mongoose } = require('mongoose');

require('dotenv').config();

const dbURL = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.b9eheom.mongodb.net/?retryWrites=true&w=majority`

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(dbURL)

        console.log(`Connect successfully to mongoDb`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}
module.exports = connectDB;