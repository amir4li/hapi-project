const userController = require("./../controller/userController");
const authController = require("./../controller/authController");
const userSchema = require("./../validator/userSchema");

module.exports = [
    {
        method: "POST",
        path: "/api/v1/users/signup",
        handler: authController.signup,
        options: {
            validate: {
                payload: userSchema
            },
            auth: false
        }
    },
    {
        method: "POST",
        path: "/api/v1/users/login",
        handler: authController.login,
        options: {
            validate: {
                payload: userSchema
            },
            auth: false
        }
    },
    {
        method: "GET",
        path: "/api/v1/users/",
        handler: userController.getAllUsers
    },
    {
        method: "GET",
        path: "/api/v1/users/{id}",
        handler: userController.getUser
    }
]