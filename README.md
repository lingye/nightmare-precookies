# nightmare-precookies

## Usage
Require the library and pass the Nightmare library as a reference to attach the plugin actions:

```js
var Nightmare = require('nightmare');
require('nightmare-precookies')(Nightmare);
```

### .preCookies(cookies)

## Example
```js
await nightmare.preCookies(`myCookie:hi`).goto(`https://www.github.com`)
```