const path = require("path")

module.exports = {
  resolve: {
    alias: {
      models: path.join(__dirname, "src", "models"),
      components: path.join(__dirname, "src", "components"),
      lib: path.join(__dirname, "src", "lib"),
    }
  }
}