import { parseISO, differenceInHours } from 'date-fns'

export const isBookingValid = (booking) => {
  const difference = differenceInHours(booking.to, booking.from)
  if (difference < 1 || difference > 24) {
    return false
  }
  return true
}

export const parseBooking = (booking) => ({
  id: booking.id,
  from: parseISO(booking.from),
  to: parseISO(booking.to)
})
