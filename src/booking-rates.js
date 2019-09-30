import { parseISO, getHours, isSaturday, isSunday } from 'date-fns'

export const rateType = Object.freeze({
  DAY: 'Day',
  NIGHT: 'Night',
  SATURDAY: 'Sat',
  SUNDAY: 'Sun'
});

const hourlyRate = {}
hourlyRate[rateType.DAY] = 38
hourlyRate[rateType.NIGHT] = 42.93
hourlyRate[rateType.SATURDAY] = 45.91
hourlyRate[rateType.SUNDAY] = 60.85

export const getRateType = (booking) => {

  if (isSaturday(booking.from)) {
    return rateType.SATURDAY
  }

  if(isSunday(booking.from)) {
    return rateType.SUNDAY
  }

  var fromHourOfDay = getHours(booking.from)
  if (fromHourOfDay > 6 && fromHourOfDay < 20) {
    return rateType.DAY
  }
  return rateType.NIGHT
}

export const getHourlyRate = (type) => {
  return hourlyRate[type]
}
