var inputTexto = document.querySelector("#inserir_texto");
var mostraFigura = document.querySelector(".mostra_figura");
var mostraTexto = document.querySelector(".mostra_texto");
var mensagem = document.querySelector(".mensagem");
var botaoCriptografar = document.querySelector(".botao_criptografar");
var botaoDescriptografar = document.querySelector(".botao_descriptografar");
var botaoCopiar = document.querySelector(".botao_copiar");

/*  - Captura o texto digitado e lança no quadro de mensagem ao lado; 
    - Faz aparecer o quadro de mensagem quando há algo digitado.
 */

inputTexto.addEventListener('input', function(event) {
    event.preventDefault();
    validaCaractere();
    var textoDigitado = this.value.toLowerCase();
    if (this.value.length>0) {
        mostraFigura.style.display = "none";
        mostraTexto.style.display = "inherit";
    } else {
        mostraFigura.style.display = "inherit";
        mostraTexto.style.display = "none";
    }
    mensagem.innerHTML = textoDigitado;
});

/*  - Restringe os caracteres para minúsculas e trava o teclado para as
    teclas que não são letras 
    - Tem um bug com os colchetes, chaves e acento que não consegui resolver - se o primeiro caractere for um deles
    , ele aparece - depois que há algum texto o código previne isso 
*/

function validaCaractere() {
    inputTexto.addEventListener('keydown', function (event) {
        var caracteres = /^[a-zA-Z\s]+$/; 
        var colchetes = /[\[\]\{\}´]/;
        if(!(caracteres.test(event.key)) || (colchetes.test(event.key))) {
            event.preventDefault();
        }
    });
}

/* - Função para a troca dos caracteres por strings com uma expressão regular */


function trocaLetra(regex,string) {
    resultado = mensagem.innerHTML.replace(regex, string);
    mensagem.textContent = resultado;
}


/* - Botões para criptografar e descriptografar */

botaoCriptografar.addEventListener('click', function() {
    trocaLetra(/e/g,"enter");
    trocaLetra(/i/g,"imes");
    trocaLetra(/a/g,"ai");
    trocaLetra(/o/g,"ober");
    trocaLetra(/u/g,"ufat");
});

botaoDescriptografar.addEventListener('click', function() {
    trocaLetra(/(enter)/g,"e");
    trocaLetra(/(imes)/g,"i");
    trocaLetra(/(ai)/g,"a");
    trocaLetra(/(ober)/g,"o");
    trocaLetra(/(ufat)/g,"u");
});

/* - Botão para fazer a cópia do texto no campo lateral da mensagem */

botaoCopiar.addEventListener('click', function() {
    var copia = document.createElement('textarea');
    copia.value = document.querySelector(".mensagem").value;
    copia.setAttribute('readonly', '');
    copia.style.position = 'absolute';
    copia.style.left = '-9999px';
    document.body.appendChild(copia);
    copia.select();
    copia.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(copia);
});