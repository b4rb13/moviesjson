import movies from "./film.json";

const list = document.getElementById("list");

list.innerHTML = movies
  .map((movie) => {
    return createListItem(movie);
  })
  .join("");

function createLanguages(languages) {
  let arr = languages?.split(", ");
  return arr
    .map((lang) => {
      return `<li>${lang}</li>`;
    })
    .join("");
}

function createGallery(images, title) {
  return images
    .map((url) => {
      return `<img src="${url}" alt="${title}" title="${title}">`;
    })
    .join("");
}

function createListItem(movie) {
  return `
        <li>
        <div style="display: flex; justify-content: space-between;">
        <div class="left-content">
            <h2>${movie.Title}</h2>
            <h3>Director: ${movie.Director}</h3>
        </div>  
        <div class="right-content">
            <div class="right-info">
                <h4>${movie.Year}</h4>
                <h4>${movie.Runtime}</h4>
                <h4>${movie.Genre}</h4>
            </div>
            <div>
                <ul class="languages">
                    ${createLanguages(movie.Language)}
                </ul>
            </div>
        </div>
        </div>
        <div class="images">
            ${createGallery(movie.Images, movie.Title)}
        </div>
    </li>
    `;
}
