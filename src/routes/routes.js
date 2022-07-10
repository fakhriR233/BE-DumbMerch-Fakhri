const express = require ("express")
const { register, login } = require("../controllers/auth")
const { addCategory, getCategory, showCategory } = require("../controllers/category")
const { addProduct, getProduct } = require("../controllers/product")
const { getTransactions, addTransactions } = require("../controllers/transaction")
const { registerUser, showAllUsers, showUser, updateUser, deleteUser } = require("../controllers/user")

const {auth} = require("../middlewares/auth")

const router = express.Router()

router.get("/users", showAllUsers)
router.get("/user/:id", showUser)

router.post("/user", registerUser)
router.patch("/user/:id", updateUser)
router.delete("/user/:id", deleteUser)

//products
router.get("/products", auth, getProduct)
router.post("/products", addProduct)

//transactions
router.get("/transaction", getTransactions)
router.post("/transaction", addTransactions)

//category
router.get("/categories", getCategory)
router.get("/category/:id", showCategory)
router.post("/category", addCategory)

//register and login
router.post("/register", register)
router.post("/login", login)



module.exports = router