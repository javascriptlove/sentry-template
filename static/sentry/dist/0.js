webpackJsonpexports([0],{1508:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),i=t.n(r),o=t(12),s=t.n(o),a=t(1510),l=(t.n(a),t(1511)),f=(t.n(l),function(){function e(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(t.push(s.value),!n||t.length!==n);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(i)throw o}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),u={chars:a.diffChars,words:a.diffWords,lines:a.diffLines},d=i.a.createClass({displayName:"SplitDiff",propTypes:{base:r.PropTypes.string,target:r.PropTypes.string,type:r.PropTypes.oneOf(["lines","words","chars"])},getDefaultProps:function(){return{type:"lines"}},getInitialState:function(){return{}},render:function(){var e=this.props,n=e.className,t=e.type,r=e.base,o=e.target,a=s()("split-diff",n),l=u[t];if("function"!=typeof l)return null;var d=r.split("\n"),c=o.split("\n"),p=d.length>c.length?[d,c]:[c,d],h=f(p,1),v=h[0],m=v.map(function(e,n){return l(d[n]||"",c[n]||"",{newlineIsToken:!0})});return i.a.createElement("table",{className:a},i.a.createElement("tbody",null,m.map(function(e,n){var t=e.find(function(e){return e.added}),r=e.find(function(e){return e.removed});return i.a.createElement("tr",{key:n},i.a.createElement("td",{className:s()("split-view-cell",{"removed-row":r})},i.a.createElement("div",{className:"split-diff-row"},e.filter(function(e){return!e.added}).map(function(e,n){return i.a.createElement("span",{key:n,className:s()("split-view-word",{removed:e.removed})},e.value)}))),i.a.createElement("td",{style:{width:20}}),i.a.createElement("td",{className:s()("split-view-cell",{"added-row":t})},i.a.createElement("div",{className:"split-diff-row"},e.filter(function(e){return!e.removed}).map(function(e,n){return i.a.createElement("span",{key:n,className:s()("split-view-word",{added:e.added})},e.value)}))))})))}});n.default=d},1509:function(e,n,t){n=e.exports=t(61)(void 0),n.push([e.i,".split-diff{table-layout:fixed;border-collapse:collapse;width:100%}.split-diff .added-row{background-color:#f5fbf8}.split-diff .removed-row{background-color:#fcefee}.split-diff .removed{background-color:#f7ceca}.split-diff .added{background-color:#d8f0e4}.split-diff tbody{font-family:Monaco,Consolas,Courier New,monospace;font-size:13px}.split-diff .line-number-cell{vertical-align:top;white-space:nowrap;width:42px;text-align:center}.split-diff .line-number{padding:0 5px;min-width:20px}.split-diff .split-diff-row{display:flex;flex-wrap:wrap}.split-diff .split-view-cell{vertical-align:top}.split-diff .split-view-word{white-space:pre-wrap;word-break:break-all}",""])},1510:function(e,n,t){/*!

 diff v3.3.0

Software License Agreement (BSD License)

Copyright (c) 2009-2015, Kevin Decker <kpdecker@gmail.com>

All rights reserved.

Redistribution and use of this software in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above
  copyright notice, this list of conditions and the
  following disclaimer.

* Redistributions in binary form must reproduce the above
  copyright notice, this list of conditions and the
  following disclaimer in the documentation and/or other
  materials provided with the distribution.

* Neither the name of Kevin Decker nor the names of its
  contributors may be used to endorse or promote products
  derived from this software without specific prior
  written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT
OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
@license
*/
!function(n,t){e.exports=t()}(0,function(){return function(e){function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.canonicalize=n.convertChangesToXML=n.convertChangesToDMP=n.merge=n.parsePatch=n.applyPatches=n.applyPatch=n.createPatch=n.createTwoFilesPatch=n.structuredPatch=n.diffArrays=n.diffJson=n.diffCss=n.diffSentences=n.diffTrimmedLines=n.diffLines=n.diffWordsWithSpace=n.diffWords=n.diffChars=n.Diff=void 0;var i=t(1),o=r(i),s=t(2),a=t(3),l=t(5),f=t(6),u=t(7),d=t(8),c=t(9),p=t(10),h=t(11),v=t(13),m=t(14),g=t(16),w=t(17);n.Diff=o.default,n.diffChars=s.diffChars,n.diffWords=a.diffWords,n.diffWordsWithSpace=a.diffWordsWithSpace,n.diffLines=l.diffLines,n.diffTrimmedLines=l.diffTrimmedLines,n.diffSentences=f.diffSentences,n.diffCss=u.diffCss,n.diffJson=d.diffJson,n.diffArrays=c.diffArrays,n.structuredPatch=m.structuredPatch,n.createTwoFilesPatch=m.createTwoFilesPatch,n.createPatch=m.createPatch,n.applyPatch=p.applyPatch,n.applyPatches=p.applyPatches,n.parsePatch=h.parsePatch,n.merge=v.merge,n.convertChangesToDMP=g.convertChangesToDMP,n.convertChangesToXML=w.convertChangesToXML,n.canonicalize=d.canonicalize},function(e,n){"use strict";function t(){}function r(e,n,t,r,i){for(var o=0,s=n.length,a=0,l=0;o<s;o++){var f=n[o];if(f.removed){if(f.value=e.join(r.slice(l,l+f.count)),l+=f.count,o&&n[o-1].added){var u=n[o-1];n[o-1]=n[o],n[o]=u}}else{if(!f.added&&i){var d=t.slice(a,a+f.count);d=d.map(function(e,n){var t=r[l+n];return t.length>e.length?t:e}),f.value=e.join(d)}else f.value=e.join(t.slice(a,a+f.count));a+=f.count,f.added||(l+=f.count)}}var c=n[s-1];return s>1&&(c.added||c.removed)&&e.equals("",c.value)&&(n[s-2].value+=c.value,n.pop()),n}function i(e){return{newPos:e.newPos,components:e.components.slice(0)}}n.__esModule=!0,n.default=t,t.prototype={diff:function(e,n){function t(e){return a?(setTimeout(function(){a(void 0,e)},0),!0):e}function o(){for(var o=-1*d;o<=d;o+=2){var s=void 0,a=p[o-1],c=p[o+1],h=(c?c.newPos:0)-o;a&&(p[o-1]=void 0);var v=a&&a.newPos+1<f,m=c&&0<=h&&h<u;if(v||m){if(!v||m&&a.newPos<c.newPos?(s=i(c),l.pushComponent(s.components,void 0,!0)):(s=a,s.newPos++,l.pushComponent(s.components,!0,void 0)),h=l.extractCommon(s,n,e,o),s.newPos+1>=f&&h+1>=u)return t(r(l,s.components,n,e,l.useLongestToken));p[o]=s}else p[o]=void 0}d++}var s=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],a=s.callback;"function"==typeof s&&(a=s,s={}),this.options=s;var l=this;e=this.castInput(e),n=this.castInput(n),e=this.removeEmpty(this.tokenize(e)),n=this.removeEmpty(this.tokenize(n));var f=n.length,u=e.length,d=1,c=f+u,p=[{newPos:-1,components:[]}],h=this.extractCommon(p[0],n,e,0);if(p[0].newPos+1>=f&&h+1>=u)return t([{value:this.join(n),count:n.length}]);if(a)!function e(){setTimeout(function(){if(d>c)return a();o()||e()},0)}();else for(;d<=c;){var v=o();if(v)return v}},pushComponent:function(e,n,t){var r=e[e.length-1];r&&r.added===n&&r.removed===t?e[e.length-1]={count:r.count+1,added:n,removed:t}:e.push({count:1,added:n,removed:t})},extractCommon:function(e,n,t,r){for(var i=n.length,o=t.length,s=e.newPos,a=s-r,l=0;s+1<i&&a+1<o&&this.equals(n[s+1],t[a+1]);)s++,a++,l++;return l&&e.components.push({count:l}),e.newPos=s,a},equals:function(e,n){return e===n||this.options.ignoreCase&&e.toLowerCase()===n.toLowerCase()},removeEmpty:function(e){for(var n=[],t=0;t<e.length;t++)e[t]&&n.push(e[t]);return n},castInput:function(e){return e},tokenize:function(e){return e.split("")},join:function(e){return e.join("")}}},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t){return a.diff(e,n,t)}n.__esModule=!0,n.characterDiff=void 0,n.diffChars=i;var o=t(1),s=r(o),a=n.characterDiff=new s.default},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t){return t=(0,l.generateOptions)(t,{ignoreWhitespace:!0}),d.diff(e,n,t)}function o(e,n,t){return d.diff(e,n,t)}n.__esModule=!0,n.wordDiff=void 0,n.diffWords=i,n.diffWordsWithSpace=o;var s=t(1),a=r(s),l=t(4),f=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,u=/\S/,d=n.wordDiff=new a.default;d.equals=function(e,n){return this.options.ignoreCase&&(e=e.toLowerCase(),n=n.toLowerCase()),e===n||this.options.ignoreWhitespace&&!u.test(e)&&!u.test(n)},d.tokenize=function(e){for(var n=e.split(/(\s+|\b)/),t=0;t<n.length-1;t++)!n[t+1]&&n[t+2]&&f.test(n[t])&&f.test(n[t+2])&&(n[t]+=n[t+2],n.splice(t+1,2),t--);return n}},function(e,n){"use strict";function t(e,n){if("function"==typeof e)n.callback=e;else if(e)for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}n.__esModule=!0,n.generateOptions=t},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t){return f.diff(e,n,t)}function o(e,n,t){var r=(0,l.generateOptions)(t,{ignoreWhitespace:!0});return f.diff(e,n,r)}n.__esModule=!0,n.lineDiff=void 0,n.diffLines=i,n.diffTrimmedLines=o;var s=t(1),a=r(s),l=t(4),f=n.lineDiff=new a.default;f.tokenize=function(e){var n=[],t=e.split(/(\n|\r\n)/);t[t.length-1]||t.pop();for(var r=0;r<t.length;r++){var i=t[r];r%2&&!this.options.newlineIsToken?n[n.length-1]+=i:(this.options.ignoreWhitespace&&(i=i.trim()),n.push(i))}return n}},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t){return a.diff(e,n,t)}n.__esModule=!0,n.sentenceDiff=void 0,n.diffSentences=i;var o=t(1),s=r(o),a=n.sentenceDiff=new s.default;a.tokenize=function(e){return e.split(/(\S.+?[.!?])(?=\s+|$)/)}},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t){return a.diff(e,n,t)}n.__esModule=!0,n.cssDiff=void 0,n.diffCss=i;var o=t(1),s=r(o),a=n.cssDiff=new s.default;a.tokenize=function(e){return e.split(/([{}:;,]|\s+)/)}},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t){return d.diff(e,n,t)}function o(e,n,t){n=n||[],t=t||[];var r=void 0;for(r=0;r<n.length;r+=1)if(n[r]===e)return t[r];var i=void 0;if("[object Array]"===u.call(e)){for(n.push(e),i=new Array(e.length),t.push(i),r=0;r<e.length;r+=1)i[r]=o(e[r],n,t);return n.pop(),t.pop(),i}if(e&&e.toJSON&&(e=e.toJSON()),"object"===(void 0===e?"undefined":s(e))&&null!==e){n.push(e),i={},t.push(i);var a=[],l=void 0;for(l in e)e.hasOwnProperty(l)&&a.push(l);for(a.sort(),r=0;r<a.length;r+=1)l=a[r],i[l]=o(e[l],n,t);n.pop(),t.pop()}else i=e;return i}n.__esModule=!0,n.jsonDiff=void 0;var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};n.diffJson=i,n.canonicalize=o;var a=t(1),l=r(a),f=t(5),u=Object.prototype.toString,d=n.jsonDiff=new l.default;d.useLongestToken=!0,d.tokenize=f.lineDiff.tokenize,d.castInput=function(e){var n=this.options.undefinedReplacement;return"string"==typeof e?e:JSON.stringify(o(e),function(e,t){return void 0===t?n:t},"  ")},d.equals=function(e,n){return l.default.prototype.equals.call(d,e.replace(/,([\r\n])/g,"$1"),n.replace(/,([\r\n])/g,"$1"))}},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t){return a.diff(e,n,t)}n.__esModule=!0,n.arrayDiff=void 0,n.diffArrays=i;var o=t(1),s=r(o),a=n.arrayDiff=new s.default;a.tokenize=a.join=function(e){return e.slice()}},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n){function t(e,n){for(var t=0;t<e.lines.length;t++){var r=e.lines[t],o=r[0],s=r.substr(1);if(" "===o||"-"===o){if(!f(n+1,i[n],o,s)&&++u>d)return!1;n++}}return!0}var r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2];if("string"==typeof n&&(n=(0,s.parsePatch)(n)),Array.isArray(n)){if(n.length>1)throw new Error("applyPatch only works with a single input.");n=n[0]}for(var i=e.split(/\r\n|[\n\v\f\r\x85]/),o=e.match(/\r\n|[\n\v\f\r\x85]/g)||[],a=n.hunks,f=r.compareLine||function(e,n,t,r){return n===r},u=0,d=r.fuzzFactor||0,c=0,p=0,h=void 0,v=void 0,m=0;m<a.length;m++){for(var g=a[m],w=i.length-g.oldLines,y=0,x=p+g.oldStart-1,L=(0,l.default)(x,c,w);void 0!==y;y=L())if(t(g,x+y)){g.offset=p+=y;break}if(void 0===y)return!1;c=g.offset+g.oldStart+g.oldLines}for(var _=0,S=0;S<a.length;S++){var P=a[S],k=P.oldStart+P.offset+_-1;_+=P.newLines-P.oldLines;for(var b=0;b<P.lines.length;b++){var N=P.lines[b],M=N[0],C=N.substr(1),F=P.linedelimiters[b];if(" "===M)k++;else if("-"===M)i.splice(k,1),o.splice(k,1);else if("+"===M)i.splice(k,0,C),o.splice(k,0,F),k++;else if("\\"===M){var T=P.lines[b-1]?P.lines[b-1][0]:null;"+"===T?h=!0:"-"===T&&(v=!0)}}}if(h)for(;!i[i.length-1];)i.pop(),o.pop();else v&&(i.push(""),o.push("\n"));for(var D=0;D<i.length-1;D++)i[D]=i[D]+o[D];return i.join("")}function o(e,n){function t(){var o=e[r++];if(!o)return n.complete();n.loadFile(o,function(e,r){if(e)return n.complete(e);var s=i(r,o,n);n.patched(o,s,function(e){if(e)return n.complete(e);t()})})}"string"==typeof e&&(e=(0,s.parsePatch)(e));var r=0;t()}n.__esModule=!0,n.applyPatch=i,n.applyPatches=o;var s=t(11),a=t(12),l=r(a)},function(e,n){"use strict";function t(e){function n(){var e={};for(a.push(e);l<o.length;){var n=o[l];if(/^(\-\-\-|\+\+\+|@@)\s/.test(n))break;var s=/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(n);s&&(e.index=s[1]),l++}for(t(e),t(e),e.hunks=[];l<o.length;){var f=o[l];if(/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(f))break;if(/^@@/.test(f))e.hunks.push(r());else{if(f&&i.strict)throw new Error("Unknown line "+(l+1)+" "+JSON.stringify(f));l++}}}function t(e){var n=/^(---|\+\+\+)\s+([\S ]*)(?:\t(.*?)\s*)?$/,t=n.exec(o[l]);if(t){var r="---"===t[1]?"old":"new",i=t[2].replace(/\\\\/g,"\\");/^".*"$/.test(i)&&(i=i.substr(1,i.length-2)),e[r+"FileName"]=i,e[r+"Header"]=t[3],l++}}function r(){for(var e=l,n=o[l++],t=n.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),r={oldStart:+t[1],oldLines:+t[2]||1,newStart:+t[3],newLines:+t[4]||1,lines:[],linedelimiters:[]},a=0,f=0;l<o.length&&!(0===o[l].indexOf("--- ")&&l+2<o.length&&0===o[l+1].indexOf("+++ ")&&0===o[l+2].indexOf("@@"));l++){var u=o[l][0];if("+"!==u&&"-"!==u&&" "!==u&&"\\"!==u)break;r.lines.push(o[l]),r.linedelimiters.push(s[l]||"\n"),"+"===u?a++:"-"===u?f++:" "===u&&(a++,f++)}if(a||1!==r.newLines||(r.newLines=0),f||1!==r.oldLines||(r.oldLines=0),i.strict){if(a!==r.newLines)throw new Error("Added line count did not match for hunk at line "+(e+1));if(f!==r.oldLines)throw new Error("Removed line count did not match for hunk at line "+(e+1))}return r}for(var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=e.split(/\r\n|[\n\v\f\r\x85]/),s=e.match(/\r\n|[\n\v\f\r\x85]/g)||[],a=[],l=0;l<o.length;)n();return a}n.__esModule=!0,n.parsePatch=t},function(e,n){"use strict";n.__esModule=!0,n.default=function(e,n,t){var r=!0,i=!1,o=!1,s=1;return function a(){if(r&&!o){if(i?s++:r=!1,e+s<=t)return s;o=!0}if(!i)return o||(r=!0),n<=e-s?-s++:(i=!0,a())}}},function(e,n,t){"use strict";function r(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function i(e){var n=!1;e.oldLines=0,e.newLines=0,e.lines.forEach(function(t){if("string"!=typeof t)return void(n=!0);"+"!==t[0]&&" "!==t[0]||e.newLines++,"-"!==t[0]&&" "!==t[0]||e.oldLines++}),n&&(delete e.oldLines,delete e.newLines)}function o(e,n,t){e=s(e,t),n=s(n,t);var r={};(e.index||n.index)&&(r.index=e.index||n.index),(e.newFileName||n.newFileName)&&(a(e)?a(n)?(r.oldFileName=l(r,e.oldFileName,n.oldFileName),r.newFileName=l(r,e.newFileName,n.newFileName),r.oldHeader=l(r,e.oldHeader,n.oldHeader),r.newHeader=l(r,e.newHeader,n.newHeader)):(r.oldFileName=e.oldFileName,r.newFileName=e.newFileName,r.oldHeader=e.oldHeader,r.newHeader=e.newHeader):(r.oldFileName=n.oldFileName||e.oldFileName,r.newFileName=n.newFileName||e.newFileName,r.oldHeader=n.oldHeader||e.oldHeader,r.newHeader=n.newHeader||e.newHeader)),r.hunks=[];for(var i=0,o=0,c=0,p=0;i<e.hunks.length||o<n.hunks.length;){var h=e.hunks[i]||{oldStart:1/0},v=n.hunks[o]||{oldStart:1/0};if(f(h,v))r.hunks.push(u(h,c)),i++,p+=h.newLines-h.oldLines;else if(f(v,h))r.hunks.push(u(v,p)),o++,c+=v.newLines-v.oldLines;else{var m={oldStart:Math.min(h.oldStart,v.oldStart),oldLines:0,newStart:Math.min(h.newStart+c,v.oldStart+p),newLines:0,lines:[]};d(m,h.oldStart,h.lines,v.oldStart,v.lines),o++,i++,r.hunks.push(m)}}return r}function s(e,n){if("string"==typeof e){if(/^@@/m.test(e)||/^Index:/m.test(e))return(0,_.parsePatch)(e)[0];if(!n)throw new Error("Must provide a base reference or pass in a patch");return(0,L.structuredPatch)(void 0,void 0,n,e)}return e}function a(e){return e.newFileName&&e.newFileName!==e.oldFileName}function l(e,n,t){return n===t?n:(e.conflict=!0,{mine:n,theirs:t})}function f(e,n){return e.oldStart<n.oldStart&&e.oldStart+e.oldLines<n.oldStart}function u(e,n){return{oldStart:e.oldStart,oldLines:e.oldLines,newStart:e.newStart+n,newLines:e.newLines,lines:e.lines}}function d(e,n,t,o,s){var a={offset:n,lines:t,index:0},l={offset:o,lines:s,index:0};for(v(e,a,l),v(e,l,a);a.index<a.lines.length&&l.index<l.lines.length;){var f=a.lines[a.index],u=l.lines[l.index];if("-"!==f[0]&&"+"!==f[0]||"-"!==u[0]&&"+"!==u[0])if("+"===f[0]&&" "===u[0]){var d;(d=e.lines).push.apply(d,r(g(a)))}else if("+"===u[0]&&" "===f[0]){var w;(w=e.lines).push.apply(w,r(g(l)))}else"-"===f[0]&&" "===u[0]?p(e,a,l):"-"===u[0]&&" "===f[0]?p(e,l,a,!0):f===u?(e.lines.push(f),a.index++,l.index++):h(e,g(a),g(l));else c(e,a,l)}m(e,a),m(e,l),i(e)}function c(e,n,t){var i=g(n),o=g(t);if(y(i)&&y(o)){if((0,S.arrayStartsWith)(i,o)&&x(t,i,i.length-o.length)){var s;return void(s=e.lines).push.apply(s,r(i))}if((0,S.arrayStartsWith)(o,i)&&x(n,o,o.length-i.length)){var a;return void(a=e.lines).push.apply(a,r(o))}}else if((0,S.arrayEqual)(i,o)){var l;return void(l=e.lines).push.apply(l,r(i))}h(e,i,o)}function p(e,n,t,i){var o=g(n),s=w(t,o);if(s.merged){var a;(a=e.lines).push.apply(a,r(s.merged))}else h(e,i?s:o,i?o:s)}function h(e,n,t){e.conflict=!0,e.lines.push({conflict:!0,mine:n,theirs:t})}function v(e,n,t){for(;n.offset<t.offset&&n.index<n.lines.length;){var r=n.lines[n.index++];e.lines.push(r),n.offset++}}function m(e,n){for(;n.index<n.lines.length;){var t=n.lines[n.index++];e.lines.push(t)}}function g(e){for(var n=[],t=e.lines[e.index][0];e.index<e.lines.length;){var r=e.lines[e.index];if("-"===t&&"+"===r[0]&&(t="+"),t!==r[0])break;n.push(r),e.index++}return n}function w(e,n){for(var t=[],r=[],i=0,o=!1,s=!1;i<n.length&&e.index<e.lines.length;){var a=e.lines[e.index],l=n[i];if("+"===l[0])break;if(o=o||" "!==a[0],r.push(l),i++,"+"===a[0])for(s=!0;"+"===a[0];)t.push(a),a=e.lines[++e.index];l.substr(1)===a.substr(1)?(t.push(a),e.index++):s=!0}if("+"===(n[i]||"")[0]&&o&&(s=!0),s)return t;for(;i<n.length;)r.push(n[i++]);return{merged:r,changes:t}}function y(e){return e.reduce(function(e,n){return e&&"-"===n[0]},!0)}function x(e,n,t){for(var r=0;r<t;r++){var i=n[n.length-t+r].substr(1);if(e.lines[e.index+r]!==" "+i)return!1}return e.index+=t,!0}n.__esModule=!0,n.calcLineCount=i,n.merge=o;var L=t(14),_=t(11),S=t(15)},function(e,n,t){"use strict";function r(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function i(e,n,t,i,o,s,l){function f(e){return e.map(function(e){return" "+e})}l||(l={}),void 0===l.context&&(l.context=4);var u=(0,a.diffLines)(t,i,l);u.push({value:"",lines:[]});for(var d=[],c=0,p=0,h=[],v=1,m=1,g=function(e){var n=u[e],o=n.lines||n.value.replace(/\n$/,"").split("\n");if(n.lines=o,n.added||n.removed){var s;if(!c){var a=u[e-1];c=v,p=m,a&&(h=l.context>0?f(a.lines.slice(-l.context)):[],c-=h.length,p-=h.length)}(s=h).push.apply(s,r(o.map(function(e){return(n.added?"+":"-")+e}))),n.added?m+=o.length:v+=o.length}else{if(c)if(o.length<=2*l.context&&e<u.length-2){var g;(g=h).push.apply(g,r(f(o)))}else{var w,y=Math.min(o.length,l.context);(w=h).push.apply(w,r(f(o.slice(0,y))));var x={oldStart:c,oldLines:v-c+y,newStart:p,newLines:m-p+y,lines:h};if(e>=u.length-2&&o.length<=l.context){var L=/\n$/.test(t),_=/\n$/.test(i);0!=o.length||L?L&&_||h.push("\\ No newline at end of file"):h.splice(x.oldLines,0,"\\ No newline at end of file")}d.push(x),c=0,p=0,h=[]}v+=o.length,m+=o.length}},w=0;w<u.length;w++)g(w);return{oldFileName:e,newFileName:n,oldHeader:o,newHeader:s,hunks:d}}function o(e,n,t,r,o,s,a){var l=i(e,n,t,r,o,s,a),f=[];e==n&&f.push("Index: "+e),f.push("==================================================================="),f.push("--- "+l.oldFileName+(void 0===l.oldHeader?"":"\t"+l.oldHeader)),f.push("+++ "+l.newFileName+(void 0===l.newHeader?"":"\t"+l.newHeader));for(var u=0;u<l.hunks.length;u++){var d=l.hunks[u];f.push("@@ -"+d.oldStart+","+d.oldLines+" +"+d.newStart+","+d.newLines+" @@"),f.push.apply(f,d.lines)}return f.join("\n")+"\n"}function s(e,n,t,r,i,s){return o(e,e,n,t,r,i,s)}n.__esModule=!0,n.structuredPatch=i,n.createTwoFilesPatch=o,n.createPatch=s;var a=t(5)},function(e,n){"use strict";function t(e,n){return e.length===n.length&&r(e,n)}function r(e,n){if(n.length>e.length)return!1;for(var t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}n.__esModule=!0,n.arrayEqual=t,n.arrayStartsWith=r},function(e,n){"use strict";function t(e){for(var n=[],t=void 0,r=void 0,i=0;i<e.length;i++)t=e[i],r=t.added?1:t.removed?-1:0,n.push([r,t.value]);return n}n.__esModule=!0,n.convertChangesToDMP=t},function(e,n){"use strict";function t(e){for(var n=[],t=0;t<e.length;t++){var i=e[t];i.added?n.push("<ins>"):i.removed&&n.push("<del>"),n.push(r(i.value)),i.added?n.push("</ins>"):i.removed&&n.push("</del>")}return n.join("")}function r(e){var n=e;return n=n.replace(/&/g,"&amp;"),n=n.replace(/</g,"&lt;"),n=n.replace(/>/g,"&gt;"),n=n.replace(/"/g,"&quot;")}n.__esModule=!0,n.convertChangesToXML=t}])})},1511:function(e,n,t){var r=t(1509);"string"==typeof r&&(r=[[e.i,r,""]]);t(62)(r,{});r.locals&&(e.exports=r.locals)}});
//# sourceMappingURL=0.js.map