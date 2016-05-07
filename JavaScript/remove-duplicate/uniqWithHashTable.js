function uniqWithHashTable (array) {
  const cache = Object.create(null)

  return array.filter(item => {
    return cache[item] ? false : (cache[item] = true)
  })
}

module.exports = uniqWithHashTable
