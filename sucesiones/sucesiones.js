/**
 * Sucesión
 */

// sucesión: an
const scsLineal = (a) => {
    console.log('\nSucesion: a*n')

    let n = 1
    const s = () => a*n

    console.log(`[a = ${a}]`)
    while (n <= 10) {
        const res = s()
        console.log(`${n} : ${res}`)
        n++
    }
}
scsLineal(3)