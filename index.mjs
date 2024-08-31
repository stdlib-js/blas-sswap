// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-float32vector-like@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import{ndarray as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-sswap@v0.2.2-esm/index.mjs";function r(r,o){if(!t(r))throw new TypeError(e("0GDDA",r));if(!t(o))throw new TypeError(e("0GDDB",o));if(r.length!==o.length)throw new RangeError(e("0GD3S",r.length,o.length));return s(r.length,r.data,r.strides[0],r.offset,o.data,o.strides[0],o.offset),o}export{r as default};
//# sourceMappingURL=index.mjs.map
