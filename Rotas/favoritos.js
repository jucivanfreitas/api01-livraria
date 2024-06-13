const { Router } = require("express");
const { getFavoritos, postfavoritos, apgaFavorito } = require("../Controladores/favorito");

const router =Router()
router.get('/', (req, res) => {
  res.send('API favoritos conectada com sucesso.....');
});

router.get('/all', getFavoritos);

router.post('/:id', postFavoritos);

router.delete('/:id', deleteFavorito);

// Rotas
module.exports = router
