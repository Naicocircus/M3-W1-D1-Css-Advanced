// funzione per rimuover Twitter al caricamento del dom-------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a').forEach(function (link) {
        if (link.textContent === 'Twitter') {
            link.remove();
        }
    })
});

//funzione per la rimozione de jumbotron-------------------------------------
document.body.addEventListener('click', function (event) {

    if (event.target.matches('.lead.mb-0 a')) {
        event.preventDefault();

        const jumbotronElement = event.target.closest('.jumbotron');

        if (jumbotronElement) {
            jumbotronElement.remove();
        }
    }
});

//funzione per il nome dell'autore con l'alert---------------------------------
let authorLinks = document.querySelectorAll('.blog-post-meta a');

// Aggiungi un event listener per ogni link
authorLinks.forEach(function (link) {
    link.addEventListener('mouseover', function () {

        const authorName = link.textContent;
        alert(`Autore: ${authorName}`);
    });
});