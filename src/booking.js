import moment from 'moment';

export const isValidBooking = (fromTimeString, toTimeString) => {
  var fromTime = moment(fromTimeString);
  var toTime = moment(toTimeString)

  var duration = moment.duration(toTime.diff(fromTime)).asHours()
  if (duration < 1 || duration >= 23) {
    return false
  }

  return true;
}

export const getRateType = (booking) => {
  var fromTime = moment(booking.from);

  var fromHourOfDay = fromTime.hour();
  if (fromHourOfDay > 6 && fromHourOfDay < 20) {
    return 'Day'
  }
  return 'Night'
}
