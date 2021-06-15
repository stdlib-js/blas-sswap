<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# sswap

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Interchange two single-precision floating-point vectors.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-sswap
```

</section>

<section class="usage">

## Usage

```javascript
var sswap = require( '@stdlib/blas-sswap' );
```

#### sswap( x, y )

Interchanges two single-precision floating-point vectors `x` and `y`.

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var array = require( '@stdlib/ndarray-array' );

var x = array( new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] ) );
var y = array( new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] ) );

sswap( x, y );

var xbuf = x.data;
// returns <Float32Array>[ 2.0, 6.0, -1.0, -4.0, 8.0 ]

var ybuf = y.data;
// returns <Float32Array>[ 4.0, 2.0, -3.0, 5.0, -1.0 ]
```

The function has the following parameters:

-   **x**: a 1-dimensional [`ndarray`][@stdlib/ndarray/array] whose underlying data type is `float32`.
-   **y**: a 1-dimensional [`ndarray`][@stdlib/ndarray/array] whose underlying data type is `float32`.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `sswap()` provides a higher-level interface to the [BLAS][blas] level 1 function [`sswap`][@stdlib/blas/base/sswap].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var Float32Array = require( '@stdlib/array-float32' );
var array = require( '@stdlib/ndarray-array' );
var sswap = require( '@stdlib/blas-sswap' );

var x = array( new Float32Array( 10 ) );
var y = array( new Float32Array( 10 ) );

var rand1 = discreteUniform.factory( 0, 100 );
var rand2 = discreteUniform.factory( 0, 10 );

var i;
for ( i = 0; i < x.length; i++ ) {
    x.set( i, rand1() );
    y.set( i, rand2() );
}
console.log( x.data );
console.log( y.data );

sswap( x, y );
console.log( x.data );
console.log( y.data );
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-sswap.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-sswap

[test-image]: https://github.com/stdlib-js/blas-sswap/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/blas-sswap/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-sswap/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-sswap?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-sswap
[dependencies-url]: https://david-dm.org/stdlib-js/blas-sswap/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-sswap/main/LICENSE

[blas]: http://www.netlib.org/blas

[@stdlib/blas/base/sswap]: https://github.com/stdlib-js/stdlib

[@stdlib/ndarray/array]: https://github.com/stdlib-js/stdlib

</section>

<!-- /.links -->
