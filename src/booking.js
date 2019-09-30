import { parseISO, differenceInHours, getHours, isSaturday, isSunday } from 'date-fns'

export const isValidBooking = (fromTimeString, toTimeString) => {
  var fromTime = parseISO(fromTimeString);
  var toTime = parseISO(toTimeString)

  var difference = differenceInHours(toTime, fromTime)
  if (difference < 1 || difference > 24) {
    return false
  }
  return true;
}

export const getRateType = (booking) => {
  var fromTime = parseISO(booking.from);

  if (isSaturday(fromTime)) {
    return 'Sat'
  }

  if(isSunday(fromTime)) {
    return 'Sun'
  }

  var fromHourOfDay = getHours(fromTime)
  if (fromHourOfDay > 6 && fromHourOfDay < 20) {
    return 'Day'
  }
  return 'Night'
}
