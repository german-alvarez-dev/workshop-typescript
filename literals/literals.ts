type Keys = 'UP' | 'DOWN' | 'SHOOT'

class Ship {
    move(posX: number, posY: number, key: Keys) {
        /* ... */
    }
}


let martian = new Ship()

// Allowed operations
martian.move(20, 80, 'UP')
martian.move(20, 80, 'SHOOT')

// Forbidden operations
// martian.move(20, 80, 'RIGHT')
// martian.move(20, false, 'UP')
// martian.move(20, 80, 'UP', false)