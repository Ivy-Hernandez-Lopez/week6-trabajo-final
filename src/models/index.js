const User = require("./User")
const Category = require("./Category")
const Product = require("./Product")

//relaciones
Product.belongsTo(Category)
Category.hasMany(Product)