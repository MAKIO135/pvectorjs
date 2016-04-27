PVectorJS
=========
A JavaScript 2D/3D vector class for common vector operations based on Processing.js PVector class and Victor.js 


## Installation

### Node.js / Browserify

```bash
npm install pvectorjs --save
```

```javascript
var PVector = require( 'pvectorjs' );
var vec = new PVector( 42, 1337 );
```

### Bower

```bash
bower install pvectorjs --save
```

### Global object

Include the pre-built script.

```html
<script src="./build/pvector.js"></script>
<script>
var vec = new PVector( 42, 1337 );
</script>
```

# Documentation
[ documentation/doc.md ](https://github.com/MAKIO135/pvectorjs/blob/master/documentation/doc.md)

## Build & test

```bash
npm run build
```

```bash
npm test
```

## License

MIT
