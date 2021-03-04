function getTotal1(subtotal: number, tax: number | undefined) {
    return subtotal * tax || 1
}

// Allowed operations
getTotal1(22, 1.2)
getTotal1(22, undefined)


// Forbidden operations
// getTotal1(22, false)
// getTotal1('22', false)
// getTotal1(22, 1.2, false)