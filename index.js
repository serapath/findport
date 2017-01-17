var net = require('net')

module.exports = findport

function findport (cb) {
  var server = net.createServer()
  server.unref()
  server.on('error', cb)
  server.listen(0, function () {
    var port = server.address().port
    server.close(function () { cb(null, port) })
  })
}
