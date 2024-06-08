const express = require('express');
const app = express();
app.use(express.json())
const port = process.env.PORT || 3000;
const rotaLivro = require("./Rotas/livro")



app.get('/livros', rotaLivro);

// Start the server


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
