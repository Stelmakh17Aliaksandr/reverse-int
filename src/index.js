module.exports = function reverse (n) {
if (n < 0) {n = -n}
n = String(n)
let result = ""
  for(i = 0; i < n.length; i++){
    result = n[i] + result
  }
return parseInt(result);
}
