function showBooking(bookingDetails: { name: string, cost: number }) {
    return `${bookingDetails.name} has made a ${bookingDetails.cost}€ booking`
}


let details = { name: 'John Doe', cost: 376.22 }
showBooking(details)