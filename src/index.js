module.exports = function reverse (n) {
  n = String(n)
    let result = ""
    if (n < 0) {n = -n}
  for(i = 0; i < n.length; i++){
    result = n[i] + result
  }
  return parseInt(result);
}
