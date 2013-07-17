var follow = require('./index')
  , inspect = require('util').inspect

follow({ db: 'http://isaacs.ic.ht/registry', include_docs: true, since: 'now' })
.forEach(function (x) {
  console.log(inspect(x, { colors: true, depth: null }))
})
