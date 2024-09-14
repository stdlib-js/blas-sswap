"use strict";var b=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var T=b(function(C,E){"use strict";var w=require("@stdlib/assert-is-float32ndarray-like"),x=require("@stdlib/assert-is-negative-integer").isPrimitive,p=require("@stdlib/ndarray-base-assert-is-read-only"),V=require("@stdlib/array-base-assert-has-equal-values-indexed"),S=require("@stdlib/math-base-special-fast-min"),k=require("@stdlib/array-base-without"),q=require("@stdlib/ndarray-base-ndarraylike2ndarray"),F=require("@stdlib/ndarray-base-normalize-index"),c=require("@stdlib/ndarray-iter-stacks"),I=require("@stdlib/ndarray-base-numel"),y=require("@stdlib/blas-base-sswap").ndarray,s=require("@stdlib/string-format");function N(n,r){var e,a,u,g,h,t,i,o,v,d,l,f,m;if(!w(n))throw new TypeError(s("invalid argument. First argument must be an ndarray containing single-precision floating-point numbers. Value: `%s`.",n));if(!w(r))throw new TypeError(s("invalid argument. Second argument must be an ndarray containing single-precision floating-point numbers. Value: `%s`.",r));if(p(n)||p(r))throw new Error("invalid argument. Cannot write to read-only array.");if(t=q(n),i=q(r),a=t.shape,u=i.shape,a.length<1)throw new TypeError(s("invalid argument. First argument must have at least one dimension."));if(u.length<1)throw new TypeError(s("invalid argument. Second argument must have at least one dimension."));if(!V(a,u))throw new Error("invalid arguments. The first and second arguments must have the shape.");if(arguments.length>2){if(e=arguments[2],!x(e))throw new TypeError(s("invalid argument. Third argument must be a negative integer. Value: `%s`.",e))}else e=-1;if(d=S(a.length,u.length)-1,e=F(e,d),e===-1)throw new RangeError(s("invalid argument. Third argument must be a value on the interval: [%d,%d]. Value: `%d`.",-d,-1,arguments[2]));if(l=a[e],a.length===1)return y(l,t.data,t.strides[0],t.offset,i.data,i.strides[0],i.offset),r;for(f=I(k(a,e)),g=c(t,[e]),h=c(i,[e]),m=0;m<f;m++)o=g.next().value,v=h.next().value,y(l,o.data,o.strides[0],o.offset,v.data,v.strides[0],v.offset);return r}E.exports=N});var R=T();module.exports=R;
/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
