const express = require('express');
const app = express();
app.get('/', (_, res) => {
  let bio ={
    'Titulo de  la reseña' : 'Spiderman a Traves del SpiderVerso',
    'Puntuación': '10/10',
    'Opinion': 'Spderman a Traves dele SpiderVerso se trata de cuando a Miles Morales es mordido por una araña radiactiva, luego Miles descubre qque su tío es  un villano, el mismo que quire ver a Spderman muerto, pero llega un día en el que Aaron su tío lo descubre, pero no le importa hy decide continuar con la misión, pero al fin de  cuenta el que muere es  el tío, y toda la ciudad de Brooklyn, Nuea York piensa que murio por culpa de Spiderman'
  }
  let Disney ={
    'Titulo de la reseña' : 'Disney',
    'Puntuación' : '9.5/10',
    'Opinion' : 'Diney es un programa de televisión desde hace 101 años, hace una decada que lo hermanos Walt y Roy Disney fundaron esta conpañia, hoy en día en 2024 se dio la triste noticia de que la compañia Disney cerrara definitivamente'
  }
  res.send([bio, Disney]);
});

app.get('/:nombre', (req, res) => {
  // <- Aquí va la linea de código que debes escribir
  res.send(`Tu nombre es ${_______}`);
});

app.listen(3000);
