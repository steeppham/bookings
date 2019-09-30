import { isBookingValid, parseBooking } from './booking'

describe('isBookingValid', () => {
  it('should be a valid booking time', () => {
    const booking = { from: new Date('2017-10-23T08:00:00+11:00'), to: new Date('2017-10-23T11:00:00+11:00')}
    const isValid = isBookingValid(booking);
    expect(isValid).toBeTruthy();
  })

  it('should be an invalid booking time when time is the same', () => {
    const booking = { from: new Date('2017-10-23T08:00:00+11:00'), to: new Date('2017-10-23T08:00:00+11:00')}
    const isValid = isBookingValid(booking);
    expect(isValid).toBeFalsy();
  })

  it('should be an invalid booking time when time difference is less than 1 hr', () => {
    const booking = { from: new Date('2017-10-23T08:00:00+11:00'), to: new Date('2017-10-23T08:30:00+11:00')}
    const isValid = isBookingValid(booking);
    expect(isValid).toBeFalsy();
  })

  it('should be an invalid booking time is over 24hrs', () => {
    const booking = { from: new Date('2017-05-23T08:00:00+11:00'), to: new Date('2017-05-24T09:10:00+11:00')}
    const isValid = isBookingValid(booking);
    expect(isValid).toBeFalsy();
  })
})

describe('parseBooking', () => {
  const booking = { id: 1, from: '2017-10-23T08:00:00+11:00', to: '2017-10-24T08:30:00+11:00'}

  it('should contain to field as date time object', () => {
    const parsedBooking = parseBooking(booking)
    const toDateTime = parsedBooking.to
    expect(toDateTime.getDate()).toEqual(24)
    expect(toDateTime.getHours()).toEqual(8)
    expect(toDateTime.getMinutes()).toEqual(30)
    expect(toDateTime.getTimezoneOffset()).toEqual(-660)
  })

  it('should contain from field as date time object', () => {
    const parsedBooking = parseBooking(booking)
    const fromDateTime = parsedBooking.from
    expect(fromDateTime.getDate()).toEqual(23)
    expect(fromDateTime.getHours()).toEqual(8)
    expect(fromDateTime.getMinutes()).toEqual(0)
    expect(fromDateTime.getTimezoneOffset()).toEqual(-660)
  })

  it('should contain id field', () => {
    const parsedBooking = parseBooking(booking)
    expect(parsedBooking.id).toEqual(1)
  })
})
