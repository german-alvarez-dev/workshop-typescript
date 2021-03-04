function getTotal3(subtotal: number, tax: number = 1) {
    return subtotal * tax
}

// Allowed operations
getTotal3(22, 1.2)
getTotal3(22)