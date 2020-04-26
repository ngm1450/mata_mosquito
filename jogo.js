
var altura = 0
var largura = 0

function ajustarTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth
	//console.log(altura, largura)
}

ajustarTamanhoPalcoJogo()

function posicionarRandomicamente(){
    
    var posicaoX = Math.floor(Math.random()*largura) - 90
    var posicaoY = Math.floor(Math.random()*altura) - 90

    popsiçãoX = posicaoX < 0 ? 0 : posicaoX
    popsiçãoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criação do elemento html dinamicamente
    var mosquito = document.createElement('img')
    mosquito.src = 'img/mosquito.png'
    mosquito.className = determinarTamanhoAleatorio()

    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    
    document.body.appendChild(mosquito)

    console.log(determinarTamanhoAleatorio())
}

function determinarTamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    console.log(classe)
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}