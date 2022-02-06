function solucao(mapa) {

  let soma = 0;

  for ( const i in mapa ) {
    soma += mapa[ i ].split( "" ).filter( num => num == "+" ).length;
  }

  return soma;
}

console.log(solucao(['D+++++++XXXX','S+++++++XXXX']));