document.addEventListener("submit", function(evento) {
    evento.preventDefault();
    let formulario = document.querySelector("main form");
    let dados = new FormData(formulario);
    let objeto = {};
    for(let key of dados.keys()){
        objeto[key]=dados.get(key)
    }
    let soma = Number(objeto["n1"]) + Number(objeto["n2"]);

    let h2 = document.querySelector( "h2" );
    h2.innerHTML = soma;
})
