function uniqWithReduce (array) {
  return array.reduce((prev, current) => {
    return prev.indexOf(current) === -1
      ? prev.concat(current)
      : prev
  }, [])
}

module.exports = uniqWithReduce
