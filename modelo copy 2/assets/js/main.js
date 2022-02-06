const elementos = {
  nome: 'Rafael',
  sobrenome: 'Santini',
  idade: 20

};


const container = document.querySelector('.container');
const div = document.createElement('div');

for(let chave in elementos) {

  const paragrafo = document.createElement('p')
  const titulo = document.createTextNode(`${chave}: ${elementos[chave]} `)
  
  paragrafo.appendChild(titulo)

  div.appendChild(paragrafo)
}

container.appendChild(div)