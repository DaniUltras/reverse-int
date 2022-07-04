const reverseNumbers = (number) => {
  let newNumber = [...number.toString()].map(Number).reverse().join('')
  return newNumber
}
