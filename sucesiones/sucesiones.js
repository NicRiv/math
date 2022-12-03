/**
 * Sucesión
 */

// sucesión: n+a
const sSum = (a, n) => a+n 

// sucesión: n-a
const sResta = (a, n) => a-n

// sucesión: an
const sMult = (a, n) => a*n

// sucesión: n/a
const sDiv = (a, n) => n/a

// sucesión: n^a
const sPot = (a, n) => Math.pow(n, a)

// sucesión: n^(1/a)
const sRaiz = (a, n) => Math.pow(n, 1/a)

// sucesión: a^n
const sExp = (a, n) => Math.pow(a, n)

// sucesión: (-1)^n | cambio de signo {imp: -1, par: 1}
const sSigno = n => Math.pow(-1, n)

// sucesión: (-1)^n * a | cambio de signo {imp: -a, par: a}
const sAmplitud = (a, n) => Math.pow(-1, n) * a

// sucesión : (-1)^(n + 1) | cambio de signo {imp: 1, par: -1}
const sSignoInv = n => Math.pow(-1, n + 1)

// sucesión: (-1)^(n + 1) * a | cambio de signo {imp: a, par: -a}
const sAmplitudInv = n => Math.pow(-1, n + 1) * a
