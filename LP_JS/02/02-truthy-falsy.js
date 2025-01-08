// Tudo que é avaliado em verdadeiro
// truthy: [], {}, número != 0, string não vazia
// falsy: null, undefined, 0, "", NaN
console.log(!![], !!{}, !!1, !!'aaa', true)

if ([] && {} && 1 && 'aaa' && true) {
  console.log('Tudo é truthy')
}

console.log(!!null, !!undefined, !!0, !!"", !!NaN)

console.log(!true)
console.log(!false)