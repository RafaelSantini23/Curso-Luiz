// For in -> lê os índices ou chaves do objeto
//                0       1       2
// const frutas = ['Pera', 'Maçã', 'Uva'];

const pessoa = {
  nome: 'Rafael',
  sobrenome: 'Santini',
  idade: 20
};

// const chave = 'nome'

// console.log(pessoa[chave]);

for(let chave in pessoa) {
  console.log(chave, pessoa[chave]); // Em objetos se eu percorrer somente as chaves ele vai me dar nome, sobrenome, idade porem se eu percorrer o objeto e as chaves ele ira me dar os valores Rafael, Santini, 20
}

// for(let index in frutas) {
//   console.log(frutas[index]);
// }
// for(let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }