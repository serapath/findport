# findport
find a free port on local system

# usage

`npm install findport`

```js
var findport = require('findport')
findport(function (err, port) {
  if (err) throw err
  console.log(port)
})
```
