let divData = document.getElementById("divData");

function getData (){
    const promesa = fetch ("https://freetestapi.com/api/v1/products",
                    {method: "GET"});
    promesa.then( (response) => {
            response.json().then(
                (data) => {
                    console.log(data);
                    createCards(data);
                })
            .catch((error) => console.log("Problema con el json", error));   
    })
    .catch((err) => console.log("Existió un problema con la solicitud", err));
}

function createCards(products){
    console.log(products.length);
    // console.log(products[0].name);

    // Crear una card por cada producto con sus datos esenciales:

    // forEach itera en cada elemento del arreglo 
    // element representa un objeto del arreglo products
    // .image, .name y .description son los titulos de los datos dados en cada elemento del divData
    products.forEach(element => {
    let card = `    <div class="card" style="width: 27rem;">
                    <img src="${element.image}" class="card-img-top" alt="image-product">
                    <div class="card-body"> <strong>${element.name}</strong>
                    <p class="card-text">${element.description}</p>
                    </div>
                    </div>`
        
    divData.insertAdjacentHTML('beforeend', card); // Inserta la información en la card 

    });

}

getData();

