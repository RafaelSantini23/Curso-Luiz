function formataHora() {
  const data = new Date();
  const diaSemana = diaDaSemana(data.getDay());
  const dia = data.getDate();
  const mes = getMonth(data.getMonth() + 1)
  const ano = data.getFullYear()
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());

  return `${diaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${min}`
}

function getMonth(mes) {
  const meses = {
    1: 'Janeiro',
    2: 'Fevereiro',
    3: 'Março',
    4: 'Abril',
    5: 'Maio',
    6: 'Junho',
    7: 'Julho',
    8: 'Agosto',
    9: 'Setembro',
    10: 'Outubro',
    11: 'Novembro',
    12: 'Dezembro',
  }

  return meses[mes] || '';
}

function diaDaSemana(dia) {
  const dias = {
    0: 'Domingo',
    1: 'Segunda-feira',
    2: 'Terça-feira',
    3: 'Quarta-feira',
    4: 'Quinta-feira',
    5: 'Sexta-feira',
    6: 'Sábado'
  }

  return dias[dia] || '';
}

function zeroAEsquerda(num) {
  return num < 10 ? `0${num}` : num
}

function setHora(msg) {
  const h1 = document.querySelector('h1')

  h1.innerHTML = msg

}
const dataFormada = formataHora();

setHora(dataFormada)

/*
 * Se eu tivesse lido a documentação
 * const h1 = document.querySelector('container h1')
 * const data = new Date();
 * h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'})
 * 
 */