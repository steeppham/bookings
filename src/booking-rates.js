import { parseISO, getHours, isSaturday, isSunday } from 'date-fns'

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
