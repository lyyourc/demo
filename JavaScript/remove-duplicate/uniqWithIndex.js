function uniqWithIndex (array) {
  return array.filter((item, index, arr) =>
    arr.indexOf(item) === index
  )
}

module.exports = uniqWithIndex
