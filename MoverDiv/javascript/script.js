var eixoX = 0;
var eixoY = 0;

function moveDiv(event){
    var div1 = document.getElementById("div1"); // recupera a div
    var tecla = event.keyCode; // acha o código da tecla 
    console.log(tecla) // usei pra verificar se estava achando as teclas corretamente 


    // 37 = esquerda
    // 38 = cima
    // 39 = direita
    // 40 = baixo

    // de acordo com a tecla é adicionado ou retirado 10px dentro do eixo x/y, e a cor é alterada 
    if(tecla === 37){
        eixoX -= 30;
        div1.style.left = eixoX + 'px';
        div1.style.backgroundColor = 'green';
        document.body.style.backgroundColor = 'red'
    } else if(tecla === 38) {
        eixoY -= 30;
        div1.style.top = eixoY + 'px';
        div1.style.backgroundColor = 'blue';
        document.body.style.backgroundColor = 'green'
    } else if(tecla === 39) {
        eixoX += 30;
        div1.style.left = eixoX + 'px';
        div1.style.backgroundColor = 'orange';
        document.body.style.backgroundColor = 'blue'
    } else if(tecla === 40) {
        eixoY += 30;
        div1.style.top = eixoY + 'px';
        div1.style.backgroundColor = 'yellow';
        document.body.style.backgroundColor = 'purple'
    }
}

document.addEventListener("keydown",moveDiv); // faz o evento acontecer, chama a função 