const mario = document.querySelector(".mario")
const pipe = document.querySelector('.pipe')

const jump = () =>{
mario.classList.add('jump')

setTimeout(() =>{

mario.classList.remove('jump')

},500)
}


const loop = setInterval(() =>{

 const pipePosition = pipe.offsetLeft;
 const marioPosition = + window.getComputedStyle(mario).bottom.replace('px','')

 
 if(pipePosition <= 120 && pipePosition > 0 && marioPosition <= 80){
    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px`
    mario.src= '../assets/semf-morto.png'
    var timer = new Timer()
    clearInterval(loop)
    document.append('div')
 }

},10)



function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (++timer < 0) {
            timer = duration;
        }
    }, 1000);
}
window.onload = function () {
    var duration = 0; // Converter para segundos
        display = document.querySelector('#timer'); // selecionando o timer
        startTimer(duration, display); // iniciando o timer
        
};

document.addEventListener('keydown',jump)