import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import authRoute from './routes/authRoute.js'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoute from './routes/productRoute.js'
import cors from 'cors'

//configure env
dotenv.config()

//database config
connectDB()

//rest object
const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/category', categoryRoutes)
app.use('/api/v1/products', productRoute)

//rest api
app.get('/', (req, res) => {
    res.send({
        message: 'Welcome'
    })
})

//PORT
const PORT = process.env.PORT || 8000

//run listen
app.listen(PORT, () => {
    console.log(`server running ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white)
})