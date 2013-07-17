# follow-lazy

[follow][] with [lazy lists][]

[follow]: https://github.com/iriscouch/follow
[lazy lists]: https://github.com/pkrumins/node-lazy

# Usage

``` js
var follow = require('follow-lazy')

follow({ db: 'http://isaacs.ic.ht/registry', since: 'now' })
.forEach(function (x) {
  console.log(x)
})
```

# License

MIT
