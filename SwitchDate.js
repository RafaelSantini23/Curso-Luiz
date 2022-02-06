function getDayWeekText(diaSemana) {
  let diaSemanaTexto;
  switch (diaSemana) {
    case 0:
     return diaSemanaTexto = 'Domingo'
    case 1:
     return diaSemanaTexto = 'Segunda-Feira'
    case 2:
      return diaSemanaTexto = 'Terça'
    case 3:
      return diaSemanaTexto = 'Quarta'
    case 4:
      return diaSemanaTexto = 'Quinta'
    case 5:
      return diaSemanaTexto = 'Sexta'
    case 6:
      return diaSemanaTexto = 'Sábado'
  
    default:
     return diaSemanaTexto = '';
  }

}


const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay()
const diaSemanaTexto = getDayWeekText(diaSemana)

console.log(diaSemana, diaSemanaTexto);




 
// function diaDaSemana(dia) {
//   const dias = {
//     0: 'Domingo',
//     1: 'Segunda-Feira',
//     2: 'Terça',
//     3: 'Quarta',
//     4: 'Quinta',
//     5: 'Sexta',
//     6: 'Sábado',
//   }

//   return dias[dia] || '';

// }

