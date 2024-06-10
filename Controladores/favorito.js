// controladores de favorito
const{is} =require("express/lib/request")
const { getTodosFavoritos, insereFavorito } = require("../Servicos/favorito")




function getFavoritos(req,res){
  try {
    const livros= getTodosFavoritos()
    res.send(livros)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}
function postfavoritos(req, res) {

  try {
      const id=req.query.id
      insereFavorito(id)
      res.send('Livro favoritado  com sucesso!')
      res.status(201)

  }catch (error) {
      res.status(500)
      res.send(error.message)
  }
}

function apgaFavorito(req,res){
  try {
    const id =req.query.id
    deletaFavoritoPorId(id)
    if (!Number(id))  {
      res.status(422).json({code: 422, error: 'ID digitado é inválido. dígite um número inteiro. ' + id + '. Tente outro id.', resolution: '400 Bad req'})
      return;

  }


  } catch (error) {
    res.status(500).send(error.message);

  }
}

module.exports= {getFavoritos, apgaFavorito,postfavoritos}
