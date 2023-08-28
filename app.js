// No arquivo "app.js"
let filmes = []; // Definindo a variável filmes como um array vazio

document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.querySelector('.add');
  const filmesContainer = document.getElementById('filmes-container');

  addButton.addEventListener('click', adicionarFilme);

  function adicionarFilme() {
    const titleInput = document.getElementById('title').value;
    const ratingInput = document.getElementById('rating').value;

    const filme = {
      title: titleInput,
      rating: ratingInput
    };

    filmes.push(filme);

    document.getElementById('title').value = '';
    document.getElementById('rating').value = '';

    console.log(filmes);

    exibirFilmes();
  }

  function exibirFilmes() {
    filmesContainer.innerHTML = '';

    for (let i = 0; i < filmes.length; i++) {
      const filme = filmes[i];
      const filmeHTML = `<p>${filme.title} - Rating: ${filme.rating}</p>`;
      filmesContainer.innerHTML += filmeHTML;
    }
  }
});









































