function geral() {
  const form = document.querySelector('.form');
  const inputPeso = form.querySelector('.peso')
  const inputAltura = form.querySelector('.altura')

  

  const resultado = document.querySelector('.resultado')


  form.addEventListener('submit', (e) => {
    function getImc(imc) {
      const classImc = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau1', 'Obesidade grau 2', 'Obesidade grau 3'];
      if (imc < 18.5) return classImc[0]
      if (imc >= 18.5 && imc <= 24.9) return classImc[1]
      if (imc >= 25 && imc <= 29.9) return classImc[2]
      if (imc >= 30 && imc <= 34.9) return classImc[3]
      if (imc >= 35 && imc <= 39.9) return classImc[4]
      if (imc > 40) return classImc[5]

    }

    function calculaImc() {
      const peso = Number(inputPeso.value);
      const altura = Number(inputAltura.value);
      
      const imc = Math.round(peso / altura ** 2);
      
      console.log(imc);
      if (!peso) {
        resultado.style.backgroundColor = 'red'
        return 'Digite um peso válido'
      } 
      if (!altura) {
        resultado.style.backgroundColor = 'red'
        return 'Digite uma altura válida'
      }

      return `Seu imc é ${imc} (${getImc(imc)})`
    }
    resultado.style.backgroundColor = 'green'
    resultado.innerHTML = calculaImc()


    e.preventDefault()
  })
}
geral();
