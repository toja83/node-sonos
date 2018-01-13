var sonos = require('../')
var debug = require('debug')('search')

sonos.DeviceDiscovery(function (sonos) {
  debug("Found Sonos '%s'", sonos.host)
  sonos.currentTrack(function (err, track) {
    if (err) throw err
    console.log(track || 'Nothing Playing')
  })
})
