//função responsável pela troca de imagens
let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/ruan-richard-rodrigues-moRYg6k5-Kg-unsplash.jpg') {
      minhaImagem.setAttribute ('src','imagens/joeyy-lee-s8SJ8pmxPDA-unsplash.jpg');
    } else {
      minhaImagem.setAttribute ('src','imagens/ruan-richard-rodrigues-moRYg6k5-Kg-unsplash.jpg');
    }
}
//Responsável pela troca de usuário e impede valores nulos
let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');
function defineNomeUsuario() {
    let meuNome = prompt('Por favor,digite seu nome.');
    if(!meuNome||meuNome===null){
      defineNomeUsuario();
    }else{
    localStorage.setItem('nome', meuNome);
    meuCabecalho.textContent = 'Olá, ' + localStorage.getItem('nome') +' Seja bem-vindo(a)!';
  }
  }
  meuBotao.onclick = function() { 
    defineNomeUsuario();
  }
