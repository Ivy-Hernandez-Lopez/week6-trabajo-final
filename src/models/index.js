const User = require("./User")
const Category = require("./Category")
const Product = require('./Product')
const Cart = require("./Cart")
const Purchase = require("./Purchase")
const ProductImg = require("./ProductImg")

//Product -> categoryId
//product--> categoryId
Product.belongsTo(Category)
Category.hasMany(Product)

//cart--> userId
Cart.belongsTo(User)
User.hasMany(Cart)

//cart--> productId
Cart.belongsTo(Product)
Product.hasMany(Cart)

//purchase--> userId
Purchase.belongsTo(User)
User.hasMany(Purchase)

//purchase--> productId
Purchase.belongsTo(Product)
Product.hasMany(Purchase)

//productImg--> productId
ProductImg.belongsTo(Product)
Product.hasMany(ProductImg)