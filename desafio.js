function pulaLinha(){
    document.write("<br>")
}


let btn = document.getElementById("btn");
btn.onclick = function() {
    var nome = document.getElementById("nome")
    var anos = document.getElementById("idade")
    let linguagem = document.getElementById("linguagem")
    let msg = `Olá ${nome.value}, você tem ${anos.value} anos e já está aprendendo ${linguagem.value}!`

    document.write(msg);
    pulaLinha()
    pulaLinha()
    
    let resposta = prompt(`Você gosta de estudar ${linguagem.value}?`)
        if (resposta == "sim"){
            document.write( "Muito bom! Continue estudando e você terá muito sucesso")
        }
        else{
            document.write("Ahh que pena... Já tentou aprender outras linguagens?")
    }
}

==============================================================================================


