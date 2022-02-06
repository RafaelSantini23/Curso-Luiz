function mostraHora() {
  const data = new Date('01-01-1970 00:00:00');

  data.getSeconds() + 1;
  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12:false,
  });
}

function funcaoDoIntervalo() {
  console.log(mostraHora());
}

const timer = setInterval( () => {
  console.log(mostraHora());
}, 1000);

setTimeout(() => {
  clearInterval(timer);
}, 3000);

setTimeout(() => {
  console.log('Olá mundo');
}, 5000);