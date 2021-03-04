function getTotal2(subtotal: number, tax?: number | undefined) {
    return subtotal * tax || 1
}

// Allowed operations
getTotal2(22, 1.2)
getTotal2(22)