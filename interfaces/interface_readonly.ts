interface ROarray {
    readonly [index: number]: string | number
}


let drinks: ROarray = ['water', 'cola', 'beer', 33]


// Forbidden operations
// drinks.push('juice')
// drinks[4] = 'juice'