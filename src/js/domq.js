import {
  D,
  isArray,
  noop,
  find,
  closest,
  css,
  addClass,
  hasClass,
  removeClass,
  attr,
  removeAttr,
  append,
  remove,
  html,
  empty,
  width,
  height,
  scrollTop,
  scrollLeft,
  offset,
  offsetParent,
  position,
  on,
  off,
  show,
  hide,
  anim,
  animate,
  fadeTo,
  fadeIn
} from 'domq.js/dist/domq.modular.js';

const $ = D;

const methods = {
  isArray,
  noop,
}

const fnMethods = {
  find,
  closest,
  css,
  addClass,
  hasClass,
  removeClass,
  attr,
  removeAttr,
  append,
  remove,
  empty,
  html,
  width,
  height,
  scrollTop,
  scrollLeft,
  offset,
  offsetParent,
  position,
  on,
  off,
  show,
  hide,
  anim,
  animate,
  fadeTo,
  fadeIn
}

$.extend(methods);
$.fn.extend(fnMethods);

window.D =D;

export default $;