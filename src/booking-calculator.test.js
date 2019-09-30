import { calculateBooking } from './booking-calculator'

describe('booking calculator', () => {
  describe('valid booking', () => {
    const booking = {
      id: 1,
      from: "2017-10-20T09:00:00+11:00",
      to: "2017-10-20T11:45:00+11:00"
    }

    it('should calculate total cost', () => {
      const result = calculateBooking(booking)
      expect(result.total).toEqual(104.5)
    })

    it('should be valid', () => {
      const result = calculateBooking(booking)
      expect(result.isValid).toBeTruthy()
    })

    it('should contain id', () => {
      const result = calculateBooking(booking)
      expect(result.id).toEqual(booking.id)
    })

    it('should contain ito and from time', () => {
      const result = calculateBooking(booking)
      expect(result.to).toEqual(booking.to)
      expect(result.from).toEqual(booking.from)
    })
  })

  describe('invalid booking', () => {
    const booking = {
      id: 1,
      from: "2017-10-23T08:00:00+11:00",
      to: "2017-10-23T08:30:00+11:00"
    }

    it('should be invalid', () => {
      const result = calculateBooking(booking)
      expect(result.isValid).toBeFalsy()
    })

    it('should total of 0', () => {
      const result = calculateBooking(booking)
      expect(result.total).toEqual(0)
    })
  });
})
