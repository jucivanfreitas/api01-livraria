const express = require('express');
const app = express();
const cors =require("cors")
app.use(express.json())
//const port = process.env.PORT || 3000;
app.use(cors({origin:"*"}))
const rotaLivro = require("./Rotas/livro")
const rotaFavorito =require("./Rotas/favoritos")



const port = process.env.PORT || 3001;

app.use('/livros', rotaLivro)
app.use('/favoritos', rotaFavorito)



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
