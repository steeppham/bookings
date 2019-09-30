import { getRateType, rateType, getHourlyRate } from './booking-rates'

describe('rate type', () => {
  it('should be a day rate', () => {
    const booking = {
      from: new Date("2017-10-23T08:00:00+11:00"),
      to: new Date("2017-10-23T11:00:00+11:00")
    }
    const type = getRateType(booking);
    expect(type).toEqual(rateType.DAY);
  })

  it('should be night rate', () => {
    const booking = {
      from: new Date("2017-10-23T20:00:00+11:00"),
      to: new Date("2017-10-24T11:00:00+11:00")
    }
    const type = getRateType(booking);
    expect(type).toEqual(rateType.NIGHT);
  })

  it('should be saturday rate', () => {
    const booking = {
      from: new Date("2019-10-05T18:00:00+11:00"),
      to: new Date("2017-10-05T22:00:00+11:00")
    }
    const type = getRateType(booking);
    expect(type).toEqual(rateType.SATURDAY);
  })

  it('should be sunday rate', () => {
    const booking = {
      from: new Date("2019-10-06T18:00:00+11:00"),
      to: new Date("2017-10-06T22:00:00+11:00")
    }
    const type = getRateType(booking);
    expect(type).toEqual(rateType.SUNDAY);
  })
})

describe('get hourly rate', () => {
  it('should return day hourly rate', () => {
    const booking = {
      from: new Date("2017-10-23T08:00:00+11:00"),
      to: new Date("2017-10-23T11:00:00+11:00")
    }
    const rate = getHourlyRate(booking)
    expect(rate).toEqual(38)
  })

  it('should return night hourly rate', () => {
    const booking = {
      from: new Date("2017-10-23T20:00:00+11:00"),
      to: new Date("2017-10-24T11:00:00+11:00")
    }
    const rate = getHourlyRate(booking)
    expect(rate).toEqual(42.93)
  })
})
