const AuthController = {

    login: async (res, req) => {
        res.status(200).json({

            success: true,
            message: "Login Successful"
        })
    },

    signup: async (res, req) => {

        try {

            res.status(200).json({
                success: true,
                message: "Signup Successful"
            })
        } catch (error) {

            res.status(500).json({
                success: false,
                message: "Signup Failed"
            })

        }


    },

    forgetPassword: async (res, req) => {
        res.status(200).json({
            success: true,
            message: "Forget Password Successful"
        })
    },

    changePassword: async (res, req) => {
        res.status(200).json({
            success: true,
            message: "Change Password Successful"

        })
    },

    sendOPT: async (res, req) => {
        res.status(200).json({
            success: true,
            message: "OTP sent successfully"
        })
    }

}

module.exports = AuthController;