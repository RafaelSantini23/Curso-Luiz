function mostraHora(hora) {
  if(hora && !(hora instanceof Date)) {
    throw new TypeError('Esperando instância de Date.');
  }

  if(!hora) {
    hora = new Date();
  }

  return hora.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
  
}


try {
  // const data = new Date('01-01-1970 12:58:12')
  const hora = mostraHora();
  console.log(hora);
} catch(e) {
  // tratar erro
  // console.log('Não é uma hora');
  //console.log(e);
} finally {
  console.log('Finalizou');
}





