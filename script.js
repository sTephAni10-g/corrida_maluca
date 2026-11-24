const carro1 = document.getElementById("carro1");
const carro2 = document.getElementById("carro2");

const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");

const reiniciar = document.getElementById("reiniciar");
const turbo = document.getElementById("turbo");

const mensagem = document.getElementById("mensagem");
const chegada = document.getElementById("chegada");

let position1 = 0;
let position2 = 0;
let terminou = false;

function acelerar(jogador){
    if(terminou) return;

    const limit = Math.max(0, chegada.offsetLeft - carro1.offsetWidth);
    if(jogador === 1){
        position1 = Math.min(position1 + 15,limite)
        carro1.style.left = '${position1}px';

        if(position1 >= limite){
            mensagem.textContent = "🏆 Jogador 1 venceu! 🏆";
            terminou = true;
        }
    }

     if(terminou) return;

    const limite = Math.max(0, chegada.offsetLeft - carro1.offsetWidth);
    if(jogador === 2){
        position2 = Math.min(position2 + 15,limite)
        carro1.style.left = '${position1}px';

        if(position2 >= limite){
            mensagem.textContent = "🏆 Jogador 2 venceu! 🏆";
            terminou = true;
        }
    }
}

    botao1.addEventListener("click", function() {acelerar(1)});
    botao2.addEventListener("click", function() {acelerar(2)});

    document.addEventListener("keydown", function(evento){
        if(evento.repeat) return;

        const tecla = evento.key.toLowerCase();

        if(tecla === "a"){
            acelerar(1);
        }

        if(tecla === "l"){
            acelerar(2);
        }
    });

    reiniciar.addEventListener("click", function(){
        position1 = 0;
        position2 = 0;
        terminou = false;

        carro1.style.left = "0px"
        carro2.style.left = "0px"

        mensagem.textContent = "Preparar, apontar, já!"
    });




    
    turbo.addEventListener("click", function(){
        if(tecla === "d"){
            acelerar(1);
            carro1.style.left = "5px"
        }

        if(tecla === "j"){
            acelerar(2);
            carro1.style.left = "5px"
        }

        if(tecla "d" this.click){
            tecla "j" *não pode ser apertada
        }

        if(tecla "j" this.click){
            tecla "d" não pode ser apertada
        }
    });

    //BOTÃO G dá o turbo 
    //O turbo faz o carro andar 5 px
    //só pode ser usado uma vez