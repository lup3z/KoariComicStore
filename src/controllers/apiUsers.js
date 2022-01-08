const model = require("../models/usersModel");

const apiUsers = {

    /* GET: All Users API */
    allUsers: async function (req, res, next) {
        
        try {
            const result = await model.getAll();
            res.status(200).json({
                count: result.length,
                users:  result.map(item => ({
                  id: item.id,
                  name: item.nombre,
                  email: item.email,
                  detail: item.avatar  
                })), 
                error: null, 
                succes: true})
        } catch (error) {
            res.status(500).json({users: null, error: error, succes: false})
        }
    },

    /* GET: User by ID API */
    getUser: async function (req, res, next) {
        try {
            const result = await model.findByPk(req.params.id);
            res.status(200).json({
                user:{
                  id: result.id,
                  name: result.nombre,
                  lastName: result.apellido,
                  email: result.email,
                  detail: result.avatar  
                },
                error: null, 
                succes: true})
        } catch (error) {
            res.status(500).json({users: null, error: error, succes: false})
        }
    }

};

module.exports = apiUsers;
