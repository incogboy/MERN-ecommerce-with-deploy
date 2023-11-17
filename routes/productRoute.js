import express from 'express'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
import {
    brainTreePaymentController,
    brainTreeTokenController,
    createProductController,
    deleteProductController,
    getProductController,
    getSingleProductController,
    productCategoryController,
    productCountController,
    productFiltersController,
    productListController,
    productPhotoController,
    relatedProductController,
    searchProductController,
    updateProductController
} from '../controllers/productController.js'
import formidable from 'express-formidable'

const router = express.Router()

//create product || POST
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController)

//update product || PUT
router.put('/update-product/:id', requireSignIn, isAdmin, formidable(), updateProductController)


//get all products || GET
router.get('/get-product', getProductController)

//get single products || GET
router.get('/single-product/:slug', getSingleProductController)

//get photo || GET
router.get('/product-photo/:pid', productPhotoController)

//delete product || delete
router.delete('/delete-product/:id', requireSignIn, isAdmin, deleteProductController)

//filter product
router.post('/product-filters', productFiltersController)

//product count
router.get('/product-count', productCountController)

//product per page
router.get('/product-list/:page', productListController)

//search product
router.get('/search/:keyword', searchProductController)

//similar product
router.get('/related-product/:pid/:cid', relatedProductController)

//category wise product
router.get('/product-category/:slug', productCategoryController)

//payment route
router.post('/braintree/payment', requireSignIn, brainTreePaymentController)

//payment token
router.get('/braintree/token', brainTreeTokenController)

export default router