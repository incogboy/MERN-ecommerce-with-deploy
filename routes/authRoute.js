import express from "express";
import { registerController, loginController, testController, forgotPasswordController, UpdateProfileController, getOrdersController, getAllOrdersController, orderStatusController } from '../controllers/authController.js'
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post('/register', registerController)

//LOGIN || METHOD POST
router.post('/login', loginController)

//Forgot Password || POST
router.post('/forgot-password', forgotPasswordController)

//test routes
router.get('/test', requireSignIn, isAdmin, testController)

//Protected user route auth
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true })
})

//Protected admin route auth
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true })
})

//Update Profile
router.put('/profile', requireSignIn, UpdateProfileController)

//orders
router.get('/orders', requireSignIn, getOrdersController)

//all orders
router.get('/all-orders', requireSignIn, isAdmin, getAllOrdersController)

//order status update
router.put('/order-status/:orderId', requireSignIn, isAdmin, orderStatusController)

export default router