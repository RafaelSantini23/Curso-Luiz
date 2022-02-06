function fizzBuzz(numero) {
  if(typeof numero !== 'number') {
    throw new Error('O valor precisa ser um número');
  }
  if(numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
  if(numero % 3 === 0) return 'Fizz';
  if(numero % 5 === 0) return 'Buzz';
  return numero;
}

try {
  for(let i = 0; i <= 100;i++) {
    console.log(i, fizzBuzz(i));
  }
  
} catch (error) {
  console.log('Não é um número');
}
