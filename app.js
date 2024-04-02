const blob = document.getElementById("blob");

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 2000, fill: "forwards" });

}




const letters = "aeiouyaeiouyaeoui".toUpperCase()

document.querySelector(".multiletters").onmouseover = event => {
    let iterations = 0;


    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => {
            if(index < iterations) {
                return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 12)]
        })
        .join("");

        if (iterations >= event.target.dataset.value.length) {
            clearInterval(interval);
        } 

        iterations += 1 / 4;
    }, 15)
}

function ajouterClasseEtRediriger() {
    var element1 = document.getElementById('animelem');
    var element2 = document.getElementById('animelem2');
    element1.classList.add('transitionAnimation');
    element2.classList.add('transitionAnimation');

    // Redirection vers une autre page après 1 seconde (1000 millisecondes)
    setTimeout(function() {
        window.location.href = './Pages/pokeTV.html';
    }, 1200);
}

// Ajout d'un écouteur d'événement au clic sur le bouton
document.getElementById('bouton1').addEventListener('click', ajouterClasseEtRediriger);
document.getElementById('bouton2').addEventListener('click', ajouterClasseEtRediriger);