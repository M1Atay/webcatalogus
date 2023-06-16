const shirtElement = document.querySelector('.container-shirt')//html element wordt opgehaald

function fetchData(url) { //function voor json data veranderen
  fetch(url)
    .then((response) => response.json())
    .then((data) => showShirt(data));
}

function showShirt(data) { //hier wordt de plaatsing van cards bepaald
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const row = createRow(element);
    console.log(shirtElement);
    shirtElement.innerHTML += row;
  }
  console.log(data);
}

function createRow(shirt) { //hier wordt de beschrijving van de cards beschreven
  const row = `  <div class="col"> 
   <div class="row row-cols-1 p-4 mx-5"> 
    <div class="card d-flex align-items-center";">  
    <img src="${shirt.imageUrl}" class="card-img-top" alt="...">  
    <div class="card-body">   <h5 class="card-title">${shirt.title}</h5> 
     <p> ${shirt.description}</p>
     <p>Kleur: ${shirt.colour}</p>   
     <p>Prijs: € ${shirt.price}</p>   
     <p>Maten: ${shirt.sizes}</p> 
     </div>
       </div>    `;
  return row;
}
