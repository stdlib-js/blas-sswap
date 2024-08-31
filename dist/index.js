"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var i=s(function(d,t){
var a=require('@stdlib/assert-is-float32vector-like/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist'),o=require('@stdlib/blas-base-sswap/dist').ndarray;function u(r,e){if(!a(r))throw new TypeError(n('0GDDA',r));if(!a(e))throw new TypeError(n('0GDDB',e));if(r.length!==e.length)throw new RangeError(n('0GD3S',r.length,e.length));return o(r.length,r.data,r.strides[0],r.offset,e.data,e.strides[0],e.offset),e}t.exports=u
});var g=i();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
