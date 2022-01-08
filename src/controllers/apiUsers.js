const model = require("../models/usersModel");

const apiUsers = {

    /* GET: All Users API */
    allUsers: async function (req, res, next) {
        
        try {
            const result = await model.getAll();
            res.status(200).json({data: result, error: null, succes: true})
        } catch (error) {
            res.status(500).json({data: null, error: error, succes: false})
        }
    },

};
console.log("-----")
console.log(apiUsers)
module.exports = apiUsers;
