// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Date.prototype.setUTCMilliseconds property "length" has { ReadOnly, !
    DontDelete, DontEnum } attributes
es5id: 15.9.5.29_A3_T2
description: Checking DontDelete attribute
includes: [$FAIL.js]
---*/

if (delete Date.prototype.setUTCMilliseconds.length  !== true) {
  $ERROR('#1: The Date.prototype.setUTCMilliseconds.length property does not have the attributes DontDelete');
}

if (Date.prototype.setUTCMilliseconds.hasOwnProperty('length')) {
  $FAIL('#2: The Date.prototype.setUTCMilliseconds.length property does not have the attributes DontDelete');
}