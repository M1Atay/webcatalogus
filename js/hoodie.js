const hoodieElement = document.querySelector('.container-hoodie')//querySelector haald van html op

function fetchData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => showHoodie(data))

}

function showHoodie(data) {//hier wordt de plaatsing van cards bepaald
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        const row = createRow(element);
        console.log(hoodieElement)
        hoodieElement.innerHTML += row;
    }
    console.log(data)
}

function createRow(hoodie) {//hier wordt de beschrijving van de cards beschreven
    const row = `
    <div class="col">
    <div class="row row-cols-1 p-4 mx-5">
    <div class="card d-flex align-items-center";">
    <img src="${hoodie.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${hoodie.title}</h5>
      <p> ${hoodie.description}</p>
      <p>Kleur: ${hoodie.colour}</p>
      <p>Prijs: € ${hoodie.price}</p>
      <p>Maten: ${hoodie.sizes}</p>
    </div>
  </div>    
    `
    return row;
}