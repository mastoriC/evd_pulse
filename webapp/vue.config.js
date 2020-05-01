const path = require("path")

module.exports = {
    outputDir: path.resolve(__dirname, ".."),
    publicPath: process.env.NODE_ENV === 'production'
    ? '/evd_pulse/'
    : '/'
}