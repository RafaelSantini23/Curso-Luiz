const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p')
const container = document.querySelector('.container')

const estilosBody = getComputedStyle(document.body);
const estiloContainer = getComputedStyle(container)

const backgroundColorBody = estilosBody.backgroundColor;
const colorContainer = estiloContainer.backgroundColor
console.log(backgroundColorBody);


for(let p of ps) {
  p.style.backgroundColor = backgroundColorBody
  p.style.color = colorContainer
  
}


