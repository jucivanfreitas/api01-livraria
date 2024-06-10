const { json } = require("express")
const fs = require("fs")

function getTodosFavoritos() {
    return JSON.parse( fs.readFileSync("./favoritos.json") )
}

function deletaFavoritoPorId (id){
  const livros =json.parse(fs.readFileSync('./favoritos.json'))
  const lifrosfiltrados= livros.filter(livro => livro.id !== id)
  fs.writeFileSync("favoritos.json",JSON.stringify(lifrosfiltrados))
}

function insereFavorito(id){
  const livros =JSON.parse(fs.readFileSync("livros.json"))
  const favoritos =json.parse(fs.readFileSync('./favoritos.json'))
  const livroInserido = livros.find(livro => livro.id === id)
  const novaListafavo =[...favoritos,livroInserido]
  fs.writeFileSync("favoritos.json",JSON.stringify(novaListafavo))
}



module.exports ={
  getTodosFavoritos, deletaFavoritoPorId,insereFavorito
}
