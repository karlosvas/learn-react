'use strict'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await res.json()
    const { fact } = data
    return fact
}

// export const getRandomFact = (setFact) => {
//     return fetch(CAT_ENDPOINT_RANDOM_FACT)
//         .then(res => {
//             return res.json()
//         })
//         .then(data => {
//             const { fact } = data
//             return fact
//         })
// }
