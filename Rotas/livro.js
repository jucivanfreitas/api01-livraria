const { Router } = require("express")

const { getLivros, getLivro,getLivroNM, postLivro, patchLivro,  delLivros } = require("../Controladores/livro")

const router = Router();


//Rotas

// Sample route
router.get('/connect', (req, res) => {
  res.send('api conectada.....');
}); // http://localhost:3000/livros/
// https://api01-livraria.onrender.com/livros/

router.get('/', getLivros) //http://localhost:3000/livros/livros
router.get('/id', getLivro) //http://localhost:3000/livros/id?id=1
router.get('/nm', getLivroNM) //http://localhost:3000/livros/nm?nome=demai


router.post('/', postLivro)


router.patch('/id', patchLivro)
router.delete('/id', delLivros)


// Rotas
  module.exports = router
