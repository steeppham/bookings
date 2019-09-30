import { parseBooking, durationOfBookingInHours, isBookingValid } from './booking'
import { getHourlyRate } from './booking-rates'

export const calculateBooking = (booking) => {
  const parsedBooking = parseBooking(booking)
  const isValid = isBookingValid(parsedBooking)

  let total = 0
  if (isValid) {
    const duration = durationOfBookingInHours(parsedBooking)
    const rate = getHourlyRate(parsedBooking)
    total = duration * rate
  }

  return {
    id: booking.id,
    to: booking.to,
    from: booking.from,
    total,
    isValid
  }
}
