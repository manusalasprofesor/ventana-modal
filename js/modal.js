let modal = document.querySelector('#modal');
let abrir = document.querySelector('#abrir');
let cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', function() {
    modal.classList.remove('oculta-modal');
});

cerrar.addEventListener('click', function() {
    modal.classList.add('oculta-modal');
})

window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.classList.add('oculta-modal');
    }
})