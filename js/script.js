function showScreen(id){

    let screens = document.querySelectorAll(".screen");

    screens.forEach(screen=>{
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    let buttons=document.querySelectorAll("nav button");

    buttons.forEach(btn=>{
        btn.classList.remove("selected");
    });

    document.querySelector(`[onclick="showScreen('${id}')"]`).classList.add("selected");

}

document.querySelector("nav button").classList.add("selected");

function caricaPartecipanti(){

    const lista = document.getElementById("listaPartecipanti");

    lista.innerHTML = "";

    partecipanti.forEach(persona=>{

        lista.innerHTML += `

        <div class="player-card" onclick="apriScheda(${partecipanti.indexOf(persona)})">

            <img src="img/partecipanti/${persona.foto}">

            <div>

                <h3>${persona.nome}</h3>

                <p>${persona.squadra}</p>

            </div>

        </div>

        `;

    });

}

caricaPartecipanti();

const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const content = button.nextElementSibling;

        if(content.style.display === "block"){

            content.style.display = "none";

        }else{

            content.style.display = "block";

        }

    });

});

function caricaAlbo(){

    const lista=document.getElementById("listaAlbo");

    lista.innerHTML="";

    albo.forEach(stagione=>{

        lista.innerHTML+=`

        <div class="mvp-card">

            <h3>${stagione.stagione}</h3>

            <p>🏆 ${stagione.campione}</p>

        </div>

        `;

    });

}

caricaAlbo();

function apriScheda(index) {
    
    const p = partecipanti[index];

    const foto = document.getElementById("schedaFoto");
    const nome = document.getElementById("schedaNome");
    const squadra = document.getElementById("schedaSquadra");
    const nomeExtra = document.getElementById("schedaNomeExtra");
    const descrizione = document.getElementById("schedaDescrizione");
    const lista = document.getElementById("schedaRosa");
    const scheda = document.getElementById("schedaPartecipante");

    if (!foto || !nome || !squadra || !descrizione || !lista || !scheda) {
        console.error("Errore: elementi della scheda non trovati.");
        return;
    }

    nome.textContent = p.nome;
    foto.src = "img/partecipanti/" + p.foto;
    nomeExtra.textContent = p.nomeExtra;
    document.getElementById("schedaImmagine").src =
    "img/partecipanti/" + p.immagine;
    
    squadra.textContent = p.squadra;
    document.getElementById("schedaDescrizione").innerHTML = p.descrizione;

    lista.innerHTML = "";

    scheda.style.display = "flex";

}

function chiudiScheda() {

    const scheda = document.getElementById("schedaPartecipante");

    if (scheda) {
        scheda.style.display = "none";
    }

}

function apriCoppa(coppa) {

    const scheda = document.getElementById("schedaCoppa");

    const nome = document.getElementById("coppaNome");

    const logo = document.getElementById("coppaLogo");

    const immagineA = document.getElementById("gironeA");
    const immagineB = document.getElementById("gironeB");
    const tabellone = document.getElementById("tabellone");


    if (coppa === "coppa1") {

        nome.textContent = "COPPA SANTIRCHIO";

        logo.src = "img/coppe/logo-coppa1.png";

        immagineA.src = "img/coppe/coppa1-girone-a.png";
        immagineB.src = "img/coppe/coppa1-girone-b.png";
        tabellone.src = "img/coppe/tabellone.png";
    
    }


    if (coppa === "coppa2") {

        nome.textContent = "SUPERCOPPA SANTIRCHIO";

        logo.src = "img/coppe/logo-coppa2.png";

        immagineA.src = "img/coppe/coppa2-fase-iniziale.png";
        immagineB.src = "img/coppe/coppa2-fase-finale.png";

    }


    scheda.style.display = "flex";

}


function chiudiCoppa() {

    document.getElementById("schedaCoppa").style.display = "none";

}