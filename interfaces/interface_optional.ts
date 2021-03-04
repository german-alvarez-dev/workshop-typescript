interface bookingdata {
    name: string,
    cost: number,
    discount?: boolean
}

function showBooking3(bookingDetails: bookingdata) {
    return `${bookingDetails.name} has made a ${bookingDetails.cost}€ booking ${bookingDetails.discount && 'incl. doscount'}`
}


let details3 = { name: 'John Doe', cost: 376.22 }
showBooking3(details3)