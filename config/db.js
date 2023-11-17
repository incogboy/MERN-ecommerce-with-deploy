import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected to MongoDb Database ${conn.connection.host}`.bgMagenta.white)
    } catch (err) {
        console.log(`Error in MongoDB connection ${err}`.bgRed.white)
    }
}

export default connectDB