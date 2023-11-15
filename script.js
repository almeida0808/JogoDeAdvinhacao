const randomNum = Math.round(Math.random() * 10)
let numTentativas = 1
const main = document.querySelector('main')


function clicar(event){
event.preventDefault()

const numInput = document.querySelector("#numInput");

if(Number(numInput.value) === randomNum){
    var confettiSettings = { target: 'my-canvas' };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    document.querySelector(".tela1").classList.add("hide")
    document.querySelector(".tela2").classList.remove("hide")

main.style.border = "3px solid rgba(0, 255, 42, 0.37)";

if(numTentativas == 1){
document.querySelector(".tela2 h2").innerText = `Você acertou em ${numTentativas} tentativa`

}else{
document.querySelector(".tela2 h2").innerText = `Você acertou em ${numTentativas} tentativas`
}
}else{
    document.querySelector(".tela1 h3").innerText = "(Não foi dessa vez tente novamente)"
}

numTentativas++
}





//CLICAR NO BOTÃO PRA ENVIAR A RESPOSTA
const btnEnviar = document.querySelector("#button1")
btnEnviar.addEventListener('click', clicar)

//CLICAR NO BOTÃO PRA JOGAR NOVAMENTE
const btnReset = document.querySelector("#button2")

btnReset.addEventListener('click' , voltar)

function voltar(){
    document.querySelector(".tela2").classList.toggle("hide")
  
    
}
