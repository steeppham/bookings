import { parseISO, differenceInHours } from 'date-fns'

export const isValidBooking = (fromTimeString, toTimeString) => {
  var fromTime = parseISO(fromTimeString);
  var toTime = parseISO(toTimeString)

  var difference = differenceInHours(toTime, fromTime)
  if (difference < 1 || difference > 24) {
    return false
  }
  return true;
}
