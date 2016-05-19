module.exports = function () {
  this.filter("cssfmt", function(data) {
    try {
      return require("cssfmt").process(data.toString())
     } catch (e) { throw e }
  })
}
