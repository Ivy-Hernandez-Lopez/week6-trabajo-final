const User = require("../models/User")

const userCreate = async () => {
  const user = {
    firstName: 'Dokja',
    lastName: "Kim",
    email: "dokja@gmail.com",
    password: "dokja1234",
    phone: "6186155"
  }
  await User.create(user)
}



module.exports = userCreate