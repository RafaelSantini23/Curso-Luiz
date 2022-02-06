const elementos = [
  {tag: 'p', texto: 'Qualquer texto que você quiser'},
  {tag: 'div', texto: 'Frase 2'},
  {tag: 'footer', texto: 'Frase 3'},
  {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
  const { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  let textoCriado = document.createTextNode(texto)

  tagCriada.appendChild(textoCriado)
  
  div.appendChild(tagCriada)
  console.log(tag,texto);
}

container.appendChild(div)