const { Router } = require("express");
const { getFavoritos, postfavoritos, apgaFavorito } = require("../Controladores/favorito");

const router =Router()
router.get('/', (req, res) => {
  res.send('api favoritos conectada com sucesso.....');
}); // http://localhost:3001/favoritos/
router.get('/all',getFavoritos ) //http://localhost:3000/livros/livros

router.post('/send', postfavoritos)
router.delete('/id', apgaFavorito)


// Rotas
module.exports = router
