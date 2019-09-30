import { getRateType } from './booking-rates'

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
