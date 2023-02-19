const botaoCompartilhar = document.querySelector('#imagemCompartilhar');
const caixaCompartilhar = document.querySelector('#boxCompartilhar');

botaoCompartilhar.addEventListener('click', () => {
  caixaCompartilhar.classList.toggle('invisivel');
})