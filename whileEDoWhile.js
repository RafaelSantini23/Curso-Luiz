// const nome = 'Luiz';
// let i = 0;

// while (i < nome.length) {
//   console.log(nome[i]);
//   i++;;
// }

// console.log('Segue a vida...');

function random(min,max) {
  const r = Math.round(Math.random() * (max - min) + min);
  return r;
}
const min = 1;
const max = 50;


let rand = 10;
console.log(rand);

while(rand !== 10) {
  // rand = random(min, max);
  console.log(rand);
}

console.log('#####');

do {
  // rand = random(min, max);
  console.log(rand);
} while (rand !== 10);