class Person {

    name: string

    constructor(nameValue: string) {
        this.name = nameValue
    }

    greet() {
        console.log(`Hi! I'm ${this.name}`)
    }

    move(distance: number = 0) {
        console.log(`I moved ${distance} meters`)
    }
}


// Allowed operations
let john = new Person('John')
john.greet()
john.move(1)


// Forbidden operations
// let sarah = new Person(false)
// sarah.move('fast')