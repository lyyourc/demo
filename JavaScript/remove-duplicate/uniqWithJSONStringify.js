function uniqWithJSONStringify (array) {
  const cache = {}

  return array.filter(item => {
    const stringfy = JSON.stringify(item)
    return cache[stringfy] ? false : (cache[stringfy] = true)
  })
}

module.exports = uniqWithJSONStringify
