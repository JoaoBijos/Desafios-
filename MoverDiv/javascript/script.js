var eixoX = 0;
var eixoY = 0;
let rotate1 = 0

function moveDiv(event){
    var div1 = document.getElementById("div1"); // recupera a div
    var tecla = event.keyCode; // acha o código da tecla 

    // 37 = esquerda
    // 38 = cima
    // 39 = direita
    // 40 = baixo

    let width = window.outerWidth
    let piece = div1.offsetWidth

    if(tecla === 37){
        eixoX = eixoX >= 30 ? eixoX -= 30 : 0; // faz a validação para ver se a peça pode ir mais para a esquerda 
        div1.style.left = eixoX + 'px';
        div1.style.backgroundColor = 'green';
        document.body.style.backgroundColor = 'red'
    } 
    else if(tecla === 38) {
        girarPeca() 
    } 
    else if(tecla === 39) {
        let validation = eixoX >= 0 && ((eixoX + ( piece / 2 )) - 20) <= width; // faz a validação para ver se a peça pode ir mais para a direita  
        eixoX = validation ? eixoX += 30 : width - 68;
        console.log(eixoX)
        div1.style.left = eixoX + 'px';
        div1.style.backgroundColor = 'orange';
        document.body.style.backgroundColor = 'blue'
    } 
    else if(tecla === 40) {
        eixoY += 30;
        div1.style.top = eixoY + 'px';
        div1.style.backgroundColor = 'yellow';
        document.body.style.backgroundColor = 'purple'
    }

    function girarPeca(){
        rotate1 = rotate1 < 360 ? rotate1 += 90 : 0;
        div1.style.transform = `rotate(${rotate1}deg)`
        div1.style.backgroundColor = 'blue';
        document.body.style.backgroundColor = 'green'
    }
}

document.addEventListener("keydown",moveDiv); 