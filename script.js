const wrapperLogin = document.querySelector('.wrapper-login');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup  = document.querySelector('.btnLogin-popup');
const iconClose  = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=> {
  wrapperLogin.classList.add('active')
});

loginLink.addEventListener('click', ()=> {
  wrapperLogin.classList.remove('active')
});

btnPopup.addEventListener('click', ()=> {
  wrapperLogin.classList.add('active-popup')
});

iconClose.addEventListener('click', ()=> {
  wrapperLogin.classList.remove('active-popup')
});


//Validação

const formLogin = document.getElementById('form-login')
const emailLogin = document.getElementById('email-login')
const passwordLogin = document.getElementById('password-login')

const formCadastro = document.getElementById('form-cadastro');
const name = document.getElementById('name');
const lastName = document.getElementById('last-name');
const dataNasc = document.getElementById('data-nasc');
const emailCadastro = document.getElementById('email-cadastro');
const passwordCadastro = document.getElementById('password-cadastro');
const number = document.getElementById('number');


const formFilmes = document.getElementById('form-filmes');
const filmReleaseDate = document.getElementById('release-date');
const classificacao = document.getElementById('classificacao');
const preco = document.getElementById('preco');


const formPerfil = document.getElementById('form-perfil');
const estado = document.getElementById('estado');
const cep = document.getElementById('cep')


const formReview = document.getElementById('form-analise');
const notaFilme = document.getElementById('nota-filme')

const errorElement1 = document.getElementById('error1');
const errorElement2 = document.getElementById('error2');
const errorElement3 = document.getElementById('error3');
const errorElement4 = document.getElementById('error4');
const errorElement6 = document.getElementById('error6');

formLogin.addEventListener('submit', (e) => {
  let messages = [];
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(emailLogin.value === '' || emailLogin.value === null){
    messages.push('Digite um email');
  } else if (!emailLogin.value.match(emailPattern)){
    messages.push('Email inválido')
  }

  if (passwordLogin.value.length <= 6){
    messages.push('A senha deve conter mais do que 6 caracteres');
  } else if (passwordLogin.value.length >= 15) {
    messages.push('A senha deve conter menos do que 15 caracteres');
  }

  if (messages.length > 0){
    e.preventDefault();
    errorElement1.innerText = messages.join(', ');
  } else {
    alert('Login efetuado com sucesso!')
  }

  e.preventDefault();
});


formCadastro.addEventListener('submit', (e) => {
  let messages = [];
  if (name.value === '' || name.value === null) {
    messages.push('Digite um nome');
  }

  if (lastName.value === '' || lastName.value === null) {
    messages.push('Digite um sobrenome');
  }

  const re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

  if (!dataNasc.value.match(re)){
    messages.push('Data inválida')
  }

  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(emailCadastro.value === '' || emailCadastro.value === null){
    messages.push('Digite um email');
  } else if (!emailCadastro.value.match(emailPattern)){
    messages.push('Email inválido')
  }

  if (passwordCadastro.value.length <= 6){
    messages.push('A senha deve conter mais do que 6 caracteres');
  } else if (passwordCadastro.value.length >= 15) {
    messages.push('A senha deve conter menos do que 15 caracteres');
  }

  if (messages.length > 0){
    e.preventDefault();
    errorElement2.innerText = messages.join(', ');
  } else {
    alert('Cadastro efetuado com sucesso!')
  }

  e.preventDefault();

});

formFilmes.addEventListener('submit', (e) => {
  let messages = [];
  
  const re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

  if (filmReleaseDate.value === '' || !filmReleaseDate.value.match(re)){
    messages.push('Data inválida')
  }

  if(classificacao.value === '' || classificacao.value === 'Escolha uma opção'){
    messages.push('Escolha uma opção de classificação indicativa')
  }

  if (preco.value <= 0){
    messages.push('O preço do filme deve ser maior do que R$ 0')
  } else if (preco.value > 100){
    messages.push('Preço muito alto, escolha um valor abaixo de R$ 100')
  }

  if (messages.length > 0){
    e.preventDefault();
    errorElement3.innerText = messages.join(', ');
  } else {
    alert('Filme cadastrado com sucesso!');
  }

  e.preventDefault();
});


formReview.addEventListener('submit', (e) => {
  let messages = [];

  if(notaFilme.value === '' || notaFilme.value === 'Escolha uma opção'){
    messages.push('Escolha uma nota para o filme')
  }

  if (messages.length > 0){
    e.preventDefault();
    errorElement4.innerText = messages.join(', ');
  } else {
    alert('Análise enviada com sucesso!');
  }

  e.preventDefault();
});


formPerfil.addEventListener('submit', (e) => {
  let messages = [];
  const cepRef = /^[0-9]{2}\.[0-9]{3}-[0-9]{3}$/;

  if(estado.value === '' || estado.value === 'Escolha uma opção'){
    messages.push('Escolha uma opção de estado')
  }

  if(cep.value === '' || cep.value === null){
    messages.push('Por favor, informe um cep');
  } else if (!cep.value.match(cepRef)){
    messages.push('Informe um cep válido')
  }


  if (messages.length > 0){
    e.preventDefault();
    errorElement6.innerText = messages.join(', ');
  } else {
    alert('Endereço cadastrado com sucesso!')
  }

  e.preventDefault();
});
