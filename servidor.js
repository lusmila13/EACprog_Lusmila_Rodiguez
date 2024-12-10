const express = require('express');
const app = express();
app.get('/', (_, res) => {
  let bio ={
    'titulo' : 'Spiderman a Traves del SpiderVerso',
    'puntuación': '10/10',
    'opinion': 'Spderman a Traves dele SpiderVerso se trata de cuando a Miles Morales es mordido por una araña radiactiva, luego Miles descubre qque su tío es  un villano, el mismo que quire ver a Spderman muerto, pero llega un día en el que Aaron su tío lo descubre, pero no le importa hy decide continuar con la misión, pero al fin de  cuenta el que muere es  el tío, y toda la ciudad de Brooklyn, Nuea York piensa que murio por culpa de Spiderman'
  }
  res.send(bio);
});

app.get('/:nombre', (req, res) => {
  // <- Aquí va la linea de código que debes escribir
  res.send(`Tu nombre es ${_______}`);
});

app.listen(3000);
