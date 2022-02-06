function soma(x,y) {
  if(
    typeof x !== 'number' || 
    typeof y !== 'number'
    ) {
    throw new Error('x e y precisam ser numeros');
  }
  return x + y;
}

try {
  console.log(soma(5,10));
  console.log(soma('1','dsad'));
} catch (error) {
  // console.log(error);
  console.log('Alguma coisa mais amigável pro usuário');
}

