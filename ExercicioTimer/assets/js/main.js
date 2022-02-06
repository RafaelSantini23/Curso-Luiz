function relogio() {
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000); 
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const relogio = document.querySelector('.relogio');

  const iniciar = document.querySelector('.iniciar');
  const pausar = document.querySelector('.pausar');
  const zerar = document.querySelector('.zerar');


  let segundos = 0;
  let timer;

  function start() {
    clearInterval(timer)
    timer = setInterval(() => {
      relogio.innerHTML = criaHoraDosSegundos(segundos)
      segundos++
    }, 1000);
    return timer;
  }
  function stop() {

    const stop = setTimeout(() => {
      clearInterval(timer)
    }, 1000);
    return stop
  }
  function reset() {
    clearInterval(timer)
    segundos = 0;
    return relogio.innerHTML = '00:00:00'
  }

  document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('zerar')) {
      reset();
    }
    if (el.classList.contains('iniciar')) {
      start();
    }
    if (el.classList.contains('pausar')) {
      stop();
    }
  });
}

relogio();
