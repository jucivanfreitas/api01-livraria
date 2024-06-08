const express = require('express');
const app = express();
app.use(express.json())
//const port = process.env.PORT || 3000;
const rotaLivro = require("./Rotas/livro")



const port = process.env.PORT || 3000;




app.use('/livros', rotaLivro)



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
