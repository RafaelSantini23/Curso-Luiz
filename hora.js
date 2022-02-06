function mostraHora() {
  const data = new Date();

  let a = data.setTime(0)

  return a++
}

const timer = setInterval(() => {
  console.log(mostraHora());
}, 1000);

setTimeout(() => {
  clearInterval(timer)
}, 3000);

