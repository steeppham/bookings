import { readInput, writeOutput } from './input-output'
import { calculateBooking } from './booking-calculator'

main()

export function main() {
  const bookings = readInput('input.json')
  const results = bookings.map(booking => calculateBooking(booking))

  const fields = ['id', 'from', 'to', 'isValid', 'total']
  writeOutput('output.json', fields,results)
}
