
var altura = 0
var largura = 0

function ajustarTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth
	//console.log(altura, largura)
}

ajustarTamanhoPalcoJogo()

function posicionarRandomicamente(){
    
    //remover o mosquito anterior, caso exista
    if( document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
    }
    var posicaoX = Math.floor(Math.random()*largura) 
    var posicaoY = Math.floor(Math.random()*altura) 

    popsiçãoX = posicaoX < 0 ? 0 : posicaoX
    popsiçãoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criação do elemento html dinamicamente
    var mosquito = document.createElement('img')
    mosquito.src = 'img/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()

    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'

    
    document.body.appendChild(mosquito)

    console.log(ladoAleatorio())
}

function tamanhoAleatorio(){
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

function ladoAleatorio(){

    var classe = Math.floor(Math.random() * 2)
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}