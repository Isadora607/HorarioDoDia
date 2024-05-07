


function carregar() {

var imagem = window.document.querySelector('img#picture')
var msg = window.document.querySelector('p#msg')
//var horario = new Date()
//var hora = horario.getHours()
var hora = 18

if (hora < 12) {
    msg.innerHTML = (`Bom dia, agora são ${hora} horas`)
    imagem.src = 'imagens/manha.png'
    document.body.style.background = 'pink'
} else if (hora < 18) {
    msg.innerHTML = (`Boa Tarde, agora são ${hora} horas`)
    imagem.src = 'imagens/tarde.png'
    document.body.style.background = 'orange'
} else {
    msg.innerHTML = (`Boa Noite, agora são ${hora} horas`)
    imagem.src = 'imagens/noite.png'
    document.body.style.background = 'black'

}
}