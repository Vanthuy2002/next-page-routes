export const convertDataToArray = (input) => {
  const result = []
  for (let key in input) {
    result.push({ id: key, ...input[key] })
  }

  return result
}
