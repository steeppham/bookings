import { isValidBooking, getRateType } from './booking'

describe('minimum booking time', () => {
  it('should be a valid booking time', () => {
    var isValid = isValidBooking('2017-10-23T08:00:00+11:00', '2017-10-23T11:00:00+11:00');
    expect(isValid).toBeTruthy();
  })

  it('should be an invalid booking time when time is the same', () => {
    var isValid = isValidBooking('2017-10-23T08:00:00+11:00', '2017-10-23T08:00:00+11:00');
    expect(isValid).toBeFalsy();
  })

  it('should be an invalid booking time when time difference is less than 1 hr', () => {
    var isValid = isValidBooking('2017-10-23T08:00:00+11:00', '2017-10-23T08:30:00+11:00');
    expect(isValid).toBeFalsy();
  })

  it('should be an invalid booking time is over 24hrs', () => {
    var isValid = isValidBooking('2017-05-23T08:00:00+11:00', '2017-05-24T09:00:00+11:00');
    expect(isValid).toBeFalsy();
  })
})

describe('rate type', () => {
  it('should be a day rate', () => {
    var booking = {
      from: "2017-10-23T08:00:00+11:00",
      to: "2017-10-23T11:00:00+11:00"
    }
    var rateType = getRateType(booking);
    expect(rateType).toEqual('Day');
  })

  it('should be night rate', () => {
    var booking = {
      from: "2017-10-23T20:00:00+11:00",
      to: "2017-10-24T11:00:00+11:00"
    }
    var rateType = getRateType(booking);
    expect(rateType).toEqual('Night');
  })

  it('should be saturday rate', () => {
    var booking = {
      from: "2019-10-05T18:00:00+11:00",
      to: "2017-10-05T22:00:00+11:00"
    }
    var rateType = getRateType(booking);
    expect(rateType).toEqual('Sat');
  })

  it('should be sunday rate', () => {
    var booking = {
      from: "2019-10-06T18:00:00+11:00",
      to: "2017-10-06T22:00:00+11:00"
    }
    var rateType = getRateType(booking);
    expect(rateType).toEqual('Sun');
  })
})
