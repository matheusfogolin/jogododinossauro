const dinossauro = document.querySelector('.dinossauro');
const background = document.querySelector('.background')
let isJumping = false; // constante criada para não bugar o pulo
let position = 0;

function handleKeyDown(event) { // clique do teclado
    if(event.keyCode === 32 || event.keyCode === 38){
        if (!isJumping){
            jump();
        }
        
    }
}

function jump () { // função para o dinossauro pular

    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval)
        //descendo
            let downInterval = setInterval(() => {

                 if (position <= 0){
                     clearInterval(downInterval);
                     isJumping = false;
                 } else {
                    position -= 20;
                    dinossauro.style.bottom = position + 'px';                     

                 }
            }, 20)
    } else{
        //subindo
        position += 20;
        dinossauro.style.bottom = position + 'px';
        }




    }, 20);
}

function createCactus() { // função de criação do cacto
    const cactus = document.createElement('div'); 
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000; // criação de cactos
    
    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        
        if (cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            //gameover
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1><link rel ="stylesheet" href="style.css"></link>'
            
        }else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20)

    setTimeout(createCactus, randomTime); // criação de cactos
}

createCactus();

document.addEventListener('keydown', handleKeyDown);