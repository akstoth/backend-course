// Importa o luxon, como objeto, para utilizar mais informações
const { DateTime, Interval} = require('luxon')

const agora = DateTime.now()

console.log(agora.month)

// Em JavaScript, é considerado o indice 0, logo monstrará o mês atual -1
console.log(new Date().getMonth())
console.log(new Date().getDate())

 // Mostra a data do computador local e padrão dos EUA
console.log(new Date().toLocaleString())
console.log(new Date().toLocaleString('en-US'))

// Para consultar a formatação, consultar npm docs luxon
const dataDoAniversario = DateTime.fromFormat('20/08/1996','dd/MM/yyyy')

console.log(dataDoAniversario.month)
console.log(dataDoAniversario.day)
console.log(dataDoAniversario.year)
console.log(dataDoAniversario)

const idade = Interval.fromDateTimes(dataDoAniversario, agora).length('year')
console.log(Math.floor(idade))

// Outros formatos de data
const isoDate = '2020-11-19T21:22:00-0300'
const RFC = 'Thu, 19 Nov 2020 21:22:00 -0300'

console.log(DateTime.fromISO(isoDate).toLocaleString())
console.log(DateTime.fromRFC2822(RFC).toLocaleString())
