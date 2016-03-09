/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

'use strict';

/**
 * Wait until custom elements can initialize.
 * This function is used in indivisual element instances on createdCallback() and attachedCallback().
 * @param {Element} element
 * @return {Promise}
 */
const elementReady = function(element) {
  return elementReady._ready(element);
};

/**
 * Install actual implementation for elementReady(). This method is used by extensions.
 *
 * @param {Function} ready a function returns promise.
 */
elementReady.installImplementation = function(ready) {
  elementReady._ready = ready;
};

// Install default implementation
elementReady.installImplementation(element => Promise.resolve());

export default elementReady;
