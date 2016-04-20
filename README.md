PVectorJS
=========
A JavaScript vector class for common vector operations based on Processing.js PVector class and Victor.js  


## Installation

### Node.js / Browserify

```bash
npm install pvector --save
```

```javascript
var PVector = require('pvector');
var vec = new PVector(42, 1337);
```

### Bower

```bash
bower install pvector --save
```

### Global object

Include the pre-built script.

```html
<script src="./build/pvector.js"></script>
<script>
var vec = new PVector(42, 1337);
</script>
```

## Build & test

```bash
npm run build
```

```bash
npm test
```

## License

MIT
