async function cargarPeliculas() {
  const res = await fetch('https://imdb-api.com/en/API/Top250Movies/k_s1lf3nzh');
  const data = await res.json();
  const elements = data['items'];
  console.log(elements);
  for (element in elements) {
      console.log(elements[element]);
      $('#cards').append(`<div class="col" style='margin:1rem;text-align:center;' id="${elements[element].id}">
      <img style='display:block;' src='${elements[element].image}'>
      ${elements[element].title}
      </div>`);
  }
}


window.onload = cargarPeliculas()


// Searchbar

let searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keyup',() => {
  text = searchBar.value.toLowerCase();
});