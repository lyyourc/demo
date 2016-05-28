console.log(
  process.argv.slice(2)
    .reduce((prev, current) => prev + Number(current), 0)
)