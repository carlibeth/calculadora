document.querySelectorAll('.operaciones').forEach((el) => {
    el.addEventListener('click', (ev) => {
        document.querySelector('#pantalla').innerHTML += el.innerHTML;
    });
});

document.querySelector('#igual').addEventListener('click', function (ev) {
    document.querySelector('#pantalla').innerHTML = eval(
        document.querySelector('#pantalla').innerHTML
    )
});

document.querySelector('#AC').addEventListener('click', function (ev) {
    let resultado = document.querySelector('#pantalla').innerHTML
    document.querySelector('#pantalla').innerHTML = resultado.slice(0, -1)
    

});

document.querySelector('#CE').addEventListener('click', function (ev) {
    document.querySelector('#pantalla').innerHTML = "";

});
