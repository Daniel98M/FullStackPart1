const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // se imprime 1, 2
console.log(rest)          // se imprime [3, 4 ,5]