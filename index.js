import data from "./data.js";
const objeto = JSON.parse(data); // Paso el archivo tipo JSON a un arreglo llamado objeto

const container = document.getElementById("conteiner"); //Se conecta con la parte de html, especificamente con la seccion que tiene como id conteiner
   
    // Leo el arreglo objeto, y por cada elemento armo una tarjeta.
    
    for (let e of objeto) {
        container.appendChild(crearTarjeta(e)); // Esta parte nose lo que hace, pero se que tiene que estar.
    }
    // Esta función crea una tarjeta con el elemento que se le pasa por parametro.
    // La tarjeto la meto en un div, donde le coloco la imagen y otro div con el nombre y la direccion.
    // Lo hice en otro div para que me quede el nombre arriba y la direccion abajo
    function crearTarjeta(e){
        const card= document.createElement("div");
        card.classList.add("tarjeta");
        card.innerHTML =`
        <img src=${e.picture.large} alt=${e.name.first} ${e.name.last}/>  
        <div class="texto">
        <h2> ${e.name.first} ${e.name.last}<h2>
        <p>${e.location.street.name} ${e.location.street.number}</p> 
        </div>
        `;

        return card;
           

    }


