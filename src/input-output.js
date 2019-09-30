import fs from 'fs'

export const readInput = (file) => {
  const rawdata = fs.readFileSync(file);
  return JSON.parse(rawdata);
}

export const writeOutput = (file, fields, output) => {
  const data = JSON.stringify(output, fields, 2)
  fs.writeFileSync(file, data)
}
