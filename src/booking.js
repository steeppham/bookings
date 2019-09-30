import { parseISO, differenceInMinutes } from 'date-fns'

export const isBookingValid = (booking) => {
  const difference = durationOfBookingInHours(booking)
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

export const durationOfBookingInHours = (booking) => differenceInMinutes(booking.to, booking.from) / 60
