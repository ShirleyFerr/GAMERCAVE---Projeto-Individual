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

function voltarHome(){
    window.location.href = '../homepage.html';
}


// criar bloco para nova publicacao enviar e desaparecer depois
var containerNewPubli;
var content_publi;

function novaPublicacao(){
    //cria todo o html e atribui o css via js em vez do doc html
    containerNewPubli = document.createElement('div');
    containerNewPubli.classList.add('new-publi');

    var boxNewPubli = document.createElement('div');
    boxNewPubli.classList.add('new-publi-box');
    containerNewPubli.appendChild(boxNewPubli);
   
    var textAreaPubli = document.createElement('textarea');
    textAreaPubli.id = 'ipt_contentPubli';
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
    var idUser = sessionStorage.ID_USUARIO;
    var content_publi = document.getElementById('ipt_contentPubli').value;

    if (content_publi == ''){
        console.error('nenhum conteúdo na publicacao');
        alert('O conteúdo da publicacão não pode ser vazio');
        return false
    } 
    fetch('/publicacao/criarNewPubli', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            publiContentServer: content_publi, 
            idUser: idUser,
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
    content_publi = '';
    console.log('tela de nova publicacao foi excluida!')
}


