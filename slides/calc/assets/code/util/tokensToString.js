const tokensToString = (
  tokens = []
) =>
  tokens.reduce((prev, current) =>
    prev + current.value
  , '')

module.exports = tokensToString
