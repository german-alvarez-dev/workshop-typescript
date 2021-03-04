interface bookingdata {
    name: string,
    cost: number
}

function showBooking2(bookingDetails: bookingdata) {
    return `${bookingDetails.name} has made a ${bookingDetails.cost}€ booking`
}


let details2 = { name: 'John Doe', cost: 376.22 }
showBooking2(details2)