//            0123...
// const nomes = ['Rafael','Farias','Santini'];

// for(let i = 0;i < nomes.length; i++) {
//   console.log(nomes[i]);
// }

// console.log('###');


// for(let i in nomes) {
//   console.log(nomes[i]);
// }

// console.log('###');

// for(let valor of nomes) {
//   console.log(valor);
// } // com o for of eu acesso diretamente o valor dos indices ou seja eu não precisaria fazer nomes[valor] pois apenas colocando o valor ele acessa todos os valores do array

// console.log('###');

// //com o foreach posso ter o valor o indice e o array
// nomes.forEach(function (valor,indice, array){
//   console.log(valor, indice, array);
// });

const pessoa = {
  nome: 'Rafael',
  sobrenome: 'Santini'
};
// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

for(let key in pessoa) {
  console.log(key, pessoa[key]);
}

