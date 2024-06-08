const express = require('express');
const app = express();
//app.use(express.json())
//const port = process.env.PORT || 3000;
//const rotaLivro = require("./Rotas/livro")



const port = process.env.PORT || 3000;




//app.get('/livros', rotaLivro);

// Start the server
app.get('/connect', (req, res) => {
  res.send('api conectaddddd....');
}); // http://localhost:3000/connect/


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
