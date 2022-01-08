const model = require("../models/productsModel");

const apiProducts = {
    /* GET: All Products API */
    allProducts: async function (req, res) {
        try {
            const result = await model.findAll();
            res.status(200).json({
                count: result.length,
                products:  result.map(item => ({
                  id: item.id,
                  name: item.nombre,
                  detail: item.descripcion,
                  price: item.precio,
                  image: item.imagen  
                })), 
                error: null, 
                succes: true})
        } catch (error) {
            res.status(500).json({products: null, error: error, succes: false})
        }
    },

    /* GET: Product by ID API */
    getProduct: async function (req, res) {
        try {
            const result = await model.findByPk(req.params.id);
            res.status(200).json({
                product:{
                  id: result.id,
                  name: result.nombre,
                  detail: result.descripcion,
                  volume: result.volumen,
                  author: result.autor,
                  artist: result.artista,
                  editorial: result.editorial,
                  pag: result.qDePaginas,
                  type: result.colorObyn,
                  edition: result.edicion,
                  price: result.precio,
                  image: result.imagen   
                },
                error: null, 
                succes: true})
        } catch (error) {
            res.status(500).json({users: null, error: error, succes: false})
        }
    }

};

module.exports = apiProducts;
