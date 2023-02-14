export const random = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const shuffle = arr => {
  let res = []
  while (arr.length > 0) {
    const pos = random(0, arr.length - 1)
    res.push(arr[pos])
    arr.splice(pos, 1)
  }
  return res
}
