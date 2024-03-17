var SetaDireita = window.document.getElementById("setadireita")
var Leonardo = window.document.getElementById("leonardo")
var Samanta = window.document.getElementById("samanta")
var Bruna = window.document.getElementById("bruna")
var SetaEsquerda = window.document.getElementById("setaesquerda")

function RolarParaDireita(){
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex; margin-top:60px"
    

}
function RolarParaEsquerda(){
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    SetaDireita.style = "display:flex; margin-top:55%"
    SetaEsquerda.style = "display:none"
}