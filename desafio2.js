function escondeModal(){
    let modal = document.getElementById("modal");
    modal.style = "display: none;"
}

function mostraModal(pergunta, resposta1, resposta2, callback){
    //atualiza o titulo
    let titulo = document.getElementById("modal_pergunta")
    titulo.innerText = pergunta

    //1
    let botao1 = document.getElementById("botao1")
    botao1.innerText = resposta1
    botao1.onclick = function(){
        callback(resposta1)
    }

    //2
    let botao2 = document.getElementById("botao2")
    botao2.innerText = resposta2
    botao2.onclick = function(){
        callback(resposta2)
    }

    // mostra modal
    let modal = document.getElementById("modal");
    modal.style = "display: block;"
}

function perguntaFullStack(escolha, callback){
    mostraModal(`Você quer continuar ${escolha} ou ser Full-Stack?`, escolha, "Full-Stack", function(escolhaFinal){
        callback(escolhaFinal)
    })
}

mostraModal("Você quer seguir para área de Front-End ou seguir para a área de Back-End?", "Front-End", "Back-End",function(resposta){
    console.log(resposta);
    escondeModal();
    if (resposta === "Front-End"){
        mostraModal("Você prefere estudar React ou Vue?", "React", "Vue", function(respostaFrontEnd){
            console.log(respostaFrontEnd);
            escondeModal();

            perguntaFullStack(resposta, function(escolhaFinal){
                if(escolhaFinal === "Full-Stack"){
                    document.write("você será Full-Stack")

                }else{
                    document.write(`você será ${resposta} com ${respostaFrontEnd}`)
                }  

            })
           
        });
    }else{
        mostraModal("Você prefere estudar C# ou Java?", "C#", "Java", function(respostaBackEnd){
            console.log(respostaBackEnd);
            escondeModal();

            perguntaFullStack(resposta, function(escolhaFinal){
                if(escolhaFinal === "Full-Stack"){
                    document.write("você será Full-Stack")

                }else{
                    document.write(`você será ${resposta} com ${respostaBackEnd}`)
                }  

            })
        });
    }
});

