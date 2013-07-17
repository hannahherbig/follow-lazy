var follow = require('follow')
  , Lazy = require('lazy')

// just a wrapper around follow
module.exports = function (opts) {
  var list = new Lazy
  
  follow(opts, function (err, change) {
    if (err) {
      // emit it so it's thrown if they don't listen to it
      list.emit('error', err)
    }
    
    // don't push it if it doesn't exist :P
    if (change) {
      list.push(change)
    }
  })
  
  return list
}
