const pessoa = {
  nome: 'Rafael',
  sobrenome: 'Santini',
  idade: 20,
  endereco: {
    rua: 'Av Brasil',
    numero: 320
  }

};


//Atribuição via desestruturação
const { nome, sobrenome, endereco: {rua, numero}, ...resto } = pessoa

console.log(nome, sobrenome, rua, numero);