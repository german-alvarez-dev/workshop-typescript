class Animal {
    public name: string
    private gender: string

    constructor(nameValue: string, genderValue: string) {
        this.name = nameValue
        this.gender = genderValue
    }
}



// Allowed operations
let owl = new Animal('Owl', 'Male')
console.log(owl.name)


// Forbidden operations
// console.log(owl.gender)