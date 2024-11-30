// funcoes para cada tela 
function mostrarTimeline(){
    window.location.href = '../timeline.html';
}

function mostrarDiscover(){
    window.location.href = '../discover.html';
}

function mostrarDash(){
    window.location.href = '../dashboard.html';
} 

function mostrarPerfil(){
    window.location.href = '../perfil.html';
}


// criar bloco para nova publicacao enviar e desaparecer depois
var containerNewPubli;
var contentPubli;

function novaPublicacao(){
    //cria todo o html e atribui o css via js em vez do doc html
    containerNewPubli = document.createElement('div');
    containerNewPubli.classList.add('new-publi');

    var boxNewPubli = document.createElement('div');
    boxNewPubli.classList.add('new-publi-box');
    containerNewPubli.appendChild(boxNewPubli);
   
    var textAreaPubli = document.createElement('textarea');
    textAreaPubli.id = 'ipt_contentPubli';
    contentPubli = document.getElementById('ipt_contentPubli');
    textAreaPubli.placeholder = 'Escreva algo para compartilhar...';
    boxNewPubli.appendChild(textAreaPubli);
    
    var btnPublicar = document.createElement('button');
    btnPublicar.innerText = 'Publicar';
    btnPublicar.onclick = publicar;
    boxNewPubli.appendChild(btnPublicar);

    var btnCancelar = document.createElement('button');
    btnCancelar.innerText = 'Cancelar';
    btnCancelar.onclick = cancelar;
    boxNewPubli.appendChild(btnCancelar);

    document.body.appendChild(containerNewPubli);
    console.log('tela para nova publicação apareceu com sucesso!')
}

function cancelar(){
    containerNewPubli.remove();
    contentPubli = '';
}

function publicar(){

    var content_publi = contentPubli;

    if (content_publi == ''){
        console.error('nenhum conteúdo na publicacao')
        return false
    } 
    fetch('/publicacao/criarNewPubli', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            publiContentServer: content_publi 
        }),
    })
    .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            console.log('Publicacao realizada com sucesso');
        } else {
          
            throw "Houve um erro ao tentar publicar!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        
        return false;
      });

    containerNewPubli.remove();
    contentPubli = '';
    console.log('tela de nova publicacao foi excluida!')
}


// timeline pegar as publis do banco e adicionar no site
function mostrarPublicoes(){
    cardPubli.classList.add('publicacao')

    var cardHeader = document.createElement('div');
    cardHeader.classList.add('cabecalho-publicacao');
    cardPubli.appendChild(cardHeader);

    cardIdentify.classList.add('userIndentify');
    cardHeader.appendChild(cardIdentify);

    imgUser.src = './assets/userIcon.png';
    cardIdentify.appendChild(imgUser);

    divUserName.classList.add('userDiv');
    cardIdentify.appendChild(divUserName);


    //esquece isso e faz um for 
    


    document.body.appendChild(cardPubli);
}