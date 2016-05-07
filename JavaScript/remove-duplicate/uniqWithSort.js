function uniqWithSort (array) {
  return array
    .sort()
    .reduce((prev, current, index, arr) => {
      return (index === 0 || current !== arr[index - 1])
        ? prev.concat(current)
        : prev
    }, [])
}

module.exports = uniqWithSort
