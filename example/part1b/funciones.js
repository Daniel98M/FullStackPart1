const sum = (p1, p2) => { 
    console.log (p1) 
    console.log (p2) 
    return p1 + p2 
} 

const result = sum(1, 5)
console.log (result)

const square = p => p * p

console.log(square(7))

const t = [1, 2, 3]
const tSquared = t.map(p => p * p)
// tSquared ahora es [1, 4, 9]

console.log(t, tSquared)