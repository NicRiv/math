/**
 * Sucesión
 */

// sucesión: an
const scsLineal = (a) => {
    console.log('\nSucesion: a*n')
    // const a = 2
    let n = 1
    const s = () => a*n

    console.log(`[a = ${a}]`)
    while (n <= 10) {
        const v = s()
        console.log(`${n} : ${v}`)
        n++
    }
}
scsLineal(3)