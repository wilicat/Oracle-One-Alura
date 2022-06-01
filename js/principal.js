var inputTexto = document.querySelector("#inserir_texto");

inputTexto.addEventListener('input', function(event) {
    event.preventDefault();
    var textoDigitado = "";
    var mostraFigura = document.querySelector(".mostra_figura");
    var mostraTexto = document.querySelector(".mostra_texto");
    var mensagem = document.querySelector(".mensagem");
    var textoDigitado = (event.target.value).toLowerCase();
    if (textoDigitado.length>0) {
        mostraFigura.style.display = "none";
        mostraTexto.style.display = "inherit";
    } else {
        mostraFigura.style.display = "inherit";
        mostraTexto.style.display = "none";
    }
    mensagem.innerHTML = textoDigitado;

});


var botaoCopiar = document.querySelector(".botao_copiar");

botaoCopiar.addEventListener('click', function() {
  
    var copia = document.createElement('textarea');
    copia.value = document.querySelector(".mensagem").innerText;
    copia.setAttribute('readonly', '');
    copia.style.position = 'absolute';
    copia.style.left = '-9999px';
    document.body.appendChild(copia);
    copia.select();
    copia.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(copia);


});



