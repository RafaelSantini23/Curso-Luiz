const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


function criaLi() {
  const li = document.createElement('li');
  return li;

}

function limparInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}

function criaBotaoApagar(li) {
  li.innerText += '  '
  const botaoApagar = document.createElement('button');
  const texto = document.createTextNode('Apagar');
  botaoApagar.appendChild(texto)
  
  botaoApagar.setAttribute('class', 'apagar')
  
  li.appendChild(botaoApagar)
  
  
}

inputTarefa.addEventListener('keypress', (e) => {
  if (!inputTarefa.value) return;
  if (e.keyCode === 13) criaTarefa(inputTarefa.value)
  
  
})


function criaTarefa(textoInput) {
  const li = criaLi();
  const texto = document.createTextNode(textoInput);
  const linha = document.createElement('hr');
  

  li.appendChild(texto);
  tarefas.appendChild(li);
  criaBotaoApagar(li);
  li.appendChild(linha);
  
  limparInput();
  salvarTarefas();

  linha.setAttribute('class', 'linha');
}

btnTarefa.addEventListener('click', (e) => {
  if (!inputTarefa.value) return;
  // console.log(e);
  
  criaTarefa(inputTarefa.value)
});

document.addEventListener('click', (e) => {
  const el = e.target;
  
  if (el.classList.contains('apagar')) {
    el.parentElement.remove()
    salvarTarefas();
  }
  // console.log(el);
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li')
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto)
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas)

  localStorage.setItem('tarefas', tarefasJSON)
  // console.log(liTarefas);
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas')
  const listaDeTarefas = JSON.parse(tarefas)

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa)
  }
}
adicionaTarefasSalvas()


