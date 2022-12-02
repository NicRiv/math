/**
 * Sucesión
 */

// sucesión: n+a
const sSum = (a, n) => a+n 
// const scsSum = (a, max) => {
//     console.log('\nSucesion: n+a')

//     let n = 1
//     const s = () => n+a

//     console.log(`[a = ${a}]`)
//     while (n <= max) {
//         const res = s()
//         console.log(`${n} : ${res}`)
//         n++
//     }
// }
// scsSum(2, 10)

// sucesión: n-a
const scsResta = (a, max) => {
    console.log('\nSucesion: n-a')

    let n = 1
    const s = () => n-a

    console.log(`[a = ${a}]`)
    while (n <= max) {
        const res = s()
        console.log(`${n} : ${res}`)
        n++
    }
}
// scsResta(2, 10)

// sucesión: an
const scsMult = (a, max) => {
    console.log('\nSucesion: a*n')

    let n = 1
    const s = () => a*n

    console.log(`[a = ${a}]`)
    while (n <= max) {
        const res = s()
        console.log(`${n} : ${res}`)
        n++
    }
}
// scsMult(3, 10)

// sucesión: n/a
const scsDiv = (a, max) => {
    console.log('\nSucesion: n/a')

    let n = 1
    const s = () => n/a

    console.log(`[a = ${a}]`)
    while (n <= max) {
        const res = s()
        console.log(`${n} : ${res}`)
        n++
    }
}
// scsDiv(2, 10)

// sucesión: n^a
const scsPot = (a, max) => {
    console.log('\nSucesion: n^a')

    let n = 1
    const s = () => Math.pow(n, a)

    console.log(`[a = ${a}]`)
    while (n <= max) {
        const res = s()
        console.log(`${n} : ${res}`)
        n++
    }
}
// scsPot(2, 10)

// sucesión: n^(1/a)
const scsRaiz = (a, max) => {
    console.log('\nSucesion: n^(1/a)')

    let n = 1
    const s = () => Math.pow(n, 1/a)

    console.log(`[a = ${a}]`)
    while (n <= max) {
        const res = s()
        console.log(`${n} : ${res}`)
        n++
    }
}
// scsRaiz(2, 10)