import data from "./data.js";
const objeto = JSON.parse(data);

const container = document.getElementById("conteiner");
    for (let e of objeto) {
        const card= document.createElement("div");
        card.classList.add("tarjeta");
        card.innerHTML =`
        <img src=${e.picture.large} alt=${e.name.first} ${e.name.last}/>
        <div class="texto">
        <h2> ${e.name.first} ${e.name.last}<h2>
        <p>${e.location.street.name} ${e.location.street.number}</p> 
        </div>
        `;
        container.appendChild(card);
    }


