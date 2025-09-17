const express = require('express'); // on charge express
const app = express();
const port = 3000; // on decide que notre serveur se lancera sur le port 3000

// premiere route
// lorsqu'on lance la racine, on tombe sur notre message
app.get('/', (req, res) => {
  res.send('Hello pas hello! 👋');
});

//deuxième route
app.get('/pizza',(req, res) =>{
    res.send('J\'ai faim!')
})

// lorsque le serveur se lance correctement, on affiche dans notre console
// un message qui indique sur quel port est exécuté celui-ci
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

