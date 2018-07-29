const formatTimestamp = ts => `${new Date(ts * 1000)}`
const prettyString = obj =>
  JSON.stringify(obj, null, 2)

export {
  formatTimestamp,
  prettyString,
}
