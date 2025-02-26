(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __pow = Math.pow;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/plyr/dist/plyr.min.js
  var require_plyr_min = __commonJS({
    "node_modules/plyr/dist/plyr.min.js"(exports, module) {
      "object" == typeof navigator && function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Plyr = t();
      }(exports, function() {
        "use strict";
        function e(e2, t2, i2) {
          return (t2 = function(e3) {
            var t3 = function(e4, t4) {
              if ("object" != typeof e4 || null === e4) return e4;
              var i3 = e4[Symbol.toPrimitive];
              if (void 0 !== i3) {
                var s2 = i3.call(e4, t4 || "default");
                if ("object" != typeof s2) return s2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t4 ? String : Number)(e4);
            }(e3, "string");
            return "symbol" == typeof t3 ? t3 : String(t3);
          }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
        }
        function t(e2, t2) {
          for (var i2 = 0; i2 < t2.length; i2++) {
            var s2 = t2[i2];
            s2.enumerable = s2.enumerable || false, s2.configurable = true, "value" in s2 && (s2.writable = true), Object.defineProperty(e2, s2.key, s2);
          }
        }
        function i(e2, t2, i2) {
          return t2 in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
        }
        function s(e2, t2) {
          var i2 = Object.keys(e2);
          if (Object.getOwnPropertySymbols) {
            var s2 = Object.getOwnPropertySymbols(e2);
            t2 && (s2 = s2.filter(function(t3) {
              return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
            })), i2.push.apply(i2, s2);
          }
          return i2;
        }
        function n(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = null != arguments[t2] ? arguments[t2] : {};
            t2 % 2 ? s(Object(n2), true).forEach(function(t3) {
              i(e2, t3, n2[t3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : s(Object(n2)).forEach(function(t3) {
              Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
            });
          }
          return e2;
        }
        var a = { addCSS: true, thumbWidth: 15, watch: true };
        var l = function(e2) {
          return null != e2 ? e2.constructor : null;
        }, r = function(e2, t2) {
          return !!(e2 && t2 && e2 instanceof t2);
        }, o = function(e2) {
          return null == e2;
        }, c = function(e2) {
          return l(e2) === Object;
        }, u = function(e2) {
          return l(e2) === String;
        }, h = function(e2) {
          return Array.isArray(e2);
        }, d = function(e2) {
          return r(e2, NodeList);
        }, m = { nullOrUndefined: o, object: c, number: function(e2) {
          return l(e2) === Number && !Number.isNaN(e2);
        }, string: u, boolean: function(e2) {
          return l(e2) === Boolean;
        }, function: function(e2) {
          return l(e2) === Function;
        }, array: h, nodeList: d, element: function(e2) {
          return r(e2, Element);
        }, event: function(e2) {
          return r(e2, Event);
        }, empty: function(e2) {
          return o(e2) || (u(e2) || h(e2) || d(e2)) && !e2.length || c(e2) && !Object.keys(e2).length;
        } };
        function p(e2, t2) {
          if (1 > t2) {
            var i2 = function(e3) {
              var t3 = "".concat(e3).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
              return t3 ? Math.max(0, (t3[1] ? t3[1].length : 0) - (t3[2] ? +t3[2] : 0)) : 0;
            }(t2);
            return parseFloat(e2.toFixed(i2));
          }
          return Math.round(e2 / t2) * t2;
        }
        var g = function() {
          function e2(t2, i2) {
            (function(e3, t3) {
              if (!(e3 instanceof t3)) throw new TypeError("Cannot call a class as a function");
            })(this, e2), m.element(t2) ? this.element = t2 : m.string(t2) && (this.element = document.querySelector(t2)), m.element(this.element) && m.empty(this.element.rangeTouch) && (this.config = n({}, a, {}, i2), this.init());
          }
          return function(e3, i2, s2) {
            i2 && t(e3.prototype, i2), s2 && t(e3, s2);
          }(e2, [{ key: "init", value: function() {
            e2.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(true), this.element.rangeTouch = this);
          } }, { key: "destroy", value: function() {
            e2.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(false), this.element.rangeTouch = null);
          } }, { key: "listeners", value: function(e3) {
            var t2 = this, i2 = e3 ? "addEventListener" : "removeEventListener";
            ["touchstart", "touchmove", "touchend"].forEach(function(e4) {
              t2.element[i2](e4, function(e5) {
                return t2.set(e5);
              }, false);
            });
          } }, { key: "get", value: function(t2) {
            if (!e2.enabled || !m.event(t2)) return null;
            var i2, s2 = t2.target, n2 = t2.changedTouches[0], a2 = parseFloat(s2.getAttribute("min")) || 0, l2 = parseFloat(s2.getAttribute("max")) || 100, r2 = parseFloat(s2.getAttribute("step")) || 1, o2 = s2.getBoundingClientRect(), c2 = 100 / o2.width * (this.config.thumbWidth / 2) / 100;
            return 0 > (i2 = 100 / o2.width * (n2.clientX - o2.left)) ? i2 = 0 : 100 < i2 && (i2 = 100), 50 > i2 ? i2 -= (100 - 2 * i2) * c2 : 50 < i2 && (i2 += 2 * (i2 - 50) * c2), a2 + p(i2 / 100 * (l2 - a2), r2);
          } }, { key: "set", value: function(t2) {
            e2.enabled && m.event(t2) && !t2.target.disabled && (t2.preventDefault(), t2.target.value = this.get(t2), function(e3, t3) {
              if (e3 && t3) {
                var i2 = new Event(t3, { bubbles: true });
                e3.dispatchEvent(i2);
              }
            }(t2.target, "touchend" === t2.type ? "change" : "input"));
          } }], [{ key: "setup", value: function(t2) {
            var i2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, s2 = null;
            if (m.empty(t2) || m.string(t2) ? s2 = Array.from(document.querySelectorAll(m.string(t2) ? t2 : 'input[type="range"]')) : m.element(t2) ? s2 = [t2] : m.nodeList(t2) ? s2 = Array.from(t2) : m.array(t2) && (s2 = t2.filter(m.element)), m.empty(s2)) return null;
            var l2 = n({}, a, {}, i2);
            if (m.string(t2) && l2.watch) {
              var r2 = new MutationObserver(function(i3) {
                Array.from(i3).forEach(function(i4) {
                  Array.from(i4.addedNodes).forEach(function(i5) {
                    m.element(i5) && function(e3, t3) {
                      return (function() {
                        return Array.from(document.querySelectorAll(t3)).includes(this);
                      }).call(e3, t3);
                    }(i5, t2) && new e2(i5, l2);
                  });
                });
              });
              r2.observe(document.body, { childList: true, subtree: true });
            }
            return s2.map(function(t3) {
              return new e2(t3, i2);
            });
          } }, { key: "enabled", get: function() {
            return "ontouchstart" in document.documentElement;
          } }]), e2;
        }();
        const f = (e2) => null != e2 ? e2.constructor : null, y = (e2, t2) => Boolean(e2 && t2 && e2 instanceof t2), b = (e2) => null == e2, v = (e2) => f(e2) === Object, w = (e2) => f(e2) === String, T = (e2) => "function" == typeof e2, k = (e2) => Array.isArray(e2), C = (e2) => y(e2, NodeList), A = (e2) => b(e2) || (w(e2) || k(e2) || C(e2)) && !e2.length || v(e2) && !Object.keys(e2).length;
        var S = { nullOrUndefined: b, object: v, number: (e2) => f(e2) === Number && !Number.isNaN(e2), string: w, boolean: (e2) => f(e2) === Boolean, function: T, array: k, weakMap: (e2) => y(e2, WeakMap), nodeList: C, element: (e2) => null !== e2 && "object" == typeof e2 && 1 === e2.nodeType && "object" == typeof e2.style && "object" == typeof e2.ownerDocument, textNode: (e2) => f(e2) === Text, event: (e2) => y(e2, Event), keyboardEvent: (e2) => y(e2, KeyboardEvent), cue: (e2) => y(e2, window.TextTrackCue) || y(e2, window.VTTCue), track: (e2) => y(e2, TextTrack) || !b(e2) && w(e2.kind), promise: (e2) => y(e2, Promise) && T(e2.then), url: (e2) => {
          if (y(e2, window.URL)) return true;
          if (!w(e2)) return false;
          let t2 = e2;
          e2.startsWith("http://") && e2.startsWith("https://") || (t2 = "http://".concat(e2));
          try {
            return !A(new URL(t2).hostname);
          } catch (e3) {
            return false;
          }
        }, empty: A };
        const E = (() => {
          const e2 = document.createElement("span"), t2 = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }, i2 = Object.keys(t2).find((t3) => void 0 !== e2.style[t3]);
          return !!S.string(i2) && t2[i2];
        })();
        function P(e2, t2) {
          setTimeout(() => {
            try {
              e2.hidden = true, e2.offsetHeight, e2.hidden = false;
            } catch (e3) {
            }
          }, t2);
        }
        var M = { isIE: Boolean(window.document.documentMode), isEdge: /Edge/g.test(navigator.userAgent), isWebKit: "WebkitAppearance" in document.documentElement.style && !/Edge/g.test(navigator.userAgent), isIPhone: /iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1, isIPadOS: "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1, isIos: /iPad|iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1 };
        function N(e2, t2) {
          return t2.split(".").reduce((e3, t3) => e3 && e3[t3], e2);
        }
        function x(e2 = {}, ...t2) {
          if (!t2.length) return e2;
          const i2 = t2.shift();
          return S.object(i2) ? (Object.keys(i2).forEach((t3) => {
            S.object(i2[t3]) ? (Object.keys(e2).includes(t3) || Object.assign(e2, { [t3]: {} }), x(e2[t3], i2[t3])) : Object.assign(e2, { [t3]: i2[t3] });
          }), x(e2, ...t2)) : e2;
        }
        function L(e2, t2) {
          const i2 = e2.length ? e2 : [e2];
          Array.from(i2).reverse().forEach((e3, i3) => {
            const s2 = i3 > 0 ? t2.cloneNode(true) : t2, n2 = e3.parentNode, a2 = e3.nextSibling;
            s2.appendChild(e3), a2 ? n2.insertBefore(s2, a2) : n2.appendChild(s2);
          });
        }
        function I(e2, t2) {
          S.element(e2) && !S.empty(t2) && Object.entries(t2).filter(([, e3]) => !S.nullOrUndefined(e3)).forEach(([t3, i2]) => e2.setAttribute(t3, i2));
        }
        function $(e2, t2, i2) {
          const s2 = document.createElement(e2);
          return S.object(t2) && I(s2, t2), S.string(i2) && (s2.innerText = i2), s2;
        }
        function _(e2, t2, i2, s2) {
          S.element(t2) && t2.appendChild($(e2, i2, s2));
        }
        function O(e2) {
          S.nodeList(e2) || S.array(e2) ? Array.from(e2).forEach(O) : S.element(e2) && S.element(e2.parentNode) && e2.parentNode.removeChild(e2);
        }
        function j(e2) {
          if (!S.element(e2)) return;
          let { length: t2 } = e2.childNodes;
          for (; t2 > 0; ) e2.removeChild(e2.lastChild), t2 -= 1;
        }
        function q(e2, t2) {
          return S.element(t2) && S.element(t2.parentNode) && S.element(e2) ? (t2.parentNode.replaceChild(e2, t2), e2) : null;
        }
        function D(e2, t2) {
          if (!S.string(e2) || S.empty(e2)) return {};
          const i2 = {}, s2 = x({}, t2);
          return e2.split(",").forEach((e3) => {
            const t3 = e3.trim(), n2 = t3.replace(".", ""), a2 = t3.replace(/[[\]]/g, "").split("="), [l2] = a2, r2 = a2.length > 1 ? a2[1].replace(/["']/g, "") : "";
            switch (t3.charAt(0)) {
              case ".":
                S.string(s2.class) ? i2.class = "".concat(s2.class, " ").concat(n2) : i2.class = n2;
                break;
              case "#":
                i2.id = t3.replace("#", "");
                break;
              case "[":
                i2[l2] = r2;
            }
          }), x(s2, i2);
        }
        function H(e2, t2) {
          if (!S.element(e2)) return;
          let i2 = t2;
          S.boolean(i2) || (i2 = !e2.hidden), e2.hidden = i2;
        }
        function R(e2, t2, i2) {
          if (S.nodeList(e2)) return Array.from(e2).map((e3) => R(e3, t2, i2));
          if (S.element(e2)) {
            let s2 = "toggle";
            return void 0 !== i2 && (s2 = i2 ? "add" : "remove"), e2.classList[s2](t2), e2.classList.contains(t2);
          }
          return false;
        }
        function F(e2, t2) {
          return S.element(e2) && e2.classList.contains(t2);
        }
        function V(e2, t2) {
          const { prototype: i2 } = Element;
          return (i2.matches || i2.webkitMatchesSelector || i2.mozMatchesSelector || i2.msMatchesSelector || function() {
            return Array.from(document.querySelectorAll(t2)).includes(this);
          }).call(e2, t2);
        }
        function U(e2) {
          return this.elements.container.querySelectorAll(e2);
        }
        function B(e2) {
          return this.elements.container.querySelector(e2);
        }
        function W(e2 = null, t2 = false) {
          S.element(e2) && e2.focus({ preventScroll: true, focusVisible: t2 });
        }
        const z = { "audio/ogg": "vorbis", "audio/wav": "1", "video/webm": "vp8, vorbis", "video/mp4": "avc1.42E01E, mp4a.40.2", "video/ogg": "theora" }, K = { audio: "canPlayType" in document.createElement("audio"), video: "canPlayType" in document.createElement("video"), check(e2, t2) {
          const i2 = K[e2] || "html5" !== t2;
          return { api: i2, ui: i2 && K.rangeInput };
        }, pip: !(M.isIPhone || !S.function($("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || $("video").disablePictureInPicture)), airplay: S.function(window.WebKitPlaybackTargetAvailabilityEvent), playsinline: "playsInline" in document.createElement("video"), mime(e2) {
          if (S.empty(e2)) return false;
          const [t2] = e2.split("/");
          let i2 = e2;
          if (!this.isHTML5 || t2 !== this.type) return false;
          Object.keys(z).includes(i2) && (i2 += '; codecs="'.concat(z[e2], '"'));
          try {
            return Boolean(i2 && this.media.canPlayType(i2).replace(/no/, ""));
          } catch (e3) {
            return false;
          }
        }, textTracks: "textTracks" in document.createElement("video"), rangeInput: (() => {
          const e2 = document.createElement("input");
          return e2.type = "range", "range" === e2.type;
        })(), touch: "ontouchstart" in document.documentElement, transitions: false !== E, reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches }, Y = (() => {
          let e2 = false;
          try {
            const t2 = Object.defineProperty({}, "passive", { get: () => (e2 = true, null) });
            window.addEventListener("test", null, t2), window.removeEventListener("test", null, t2);
          } catch (e3) {
          }
          return e2;
        })();
        function Q(e2, t2, i2, s2 = false, n2 = true, a2 = false) {
          if (!e2 || !("addEventListener" in e2) || S.empty(t2) || !S.function(i2)) return;
          const l2 = t2.split(" ");
          let r2 = a2;
          Y && (r2 = { passive: n2, capture: a2 }), l2.forEach((t3) => {
            this && this.eventListeners && s2 && this.eventListeners.push({ element: e2, type: t3, callback: i2, options: r2 }), e2[s2 ? "addEventListener" : "removeEventListener"](t3, i2, r2);
          });
        }
        function X(e2, t2 = "", i2, s2 = true, n2 = false) {
          Q.call(this, e2, t2, i2, true, s2, n2);
        }
        function J(e2, t2 = "", i2, s2 = true, n2 = false) {
          Q.call(this, e2, t2, i2, false, s2, n2);
        }
        function G(e2, t2 = "", i2, s2 = true, n2 = false) {
          const a2 = (...l2) => {
            J(e2, t2, a2, s2, n2), i2.apply(this, l2);
          };
          Q.call(this, e2, t2, a2, true, s2, n2);
        }
        function Z(e2, t2 = "", i2 = false, s2 = {}) {
          if (!S.element(e2) || S.empty(t2)) return;
          const n2 = new CustomEvent(t2, { bubbles: i2, detail: __spreadProps(__spreadValues({}, s2), { plyr: this }) });
          e2.dispatchEvent(n2);
        }
        function ee() {
          this && this.eventListeners && (this.eventListeners.forEach((e2) => {
            const { element: t2, type: i2, callback: s2, options: n2 } = e2;
            t2.removeEventListener(i2, s2, n2);
          }), this.eventListeners = []);
        }
        function te() {
          return new Promise((e2) => this.ready ? setTimeout(e2, 0) : X.call(this, this.elements.container, "ready", e2)).then(() => {
          });
        }
        function ie(e2) {
          S.promise(e2) && e2.then(null, () => {
          });
        }
        function se(e2) {
          return S.array(e2) ? e2.filter((t2, i2) => e2.indexOf(t2) === i2) : e2;
        }
        function ne(e2, t2) {
          return S.array(e2) && e2.length ? e2.reduce((e3, i2) => Math.abs(i2 - t2) < Math.abs(e3 - t2) ? i2 : e3) : null;
        }
        function ae(e2) {
          return !(!window || !window.CSS) && window.CSS.supports(e2);
        }
        const le = [[1, 1], [4, 3], [3, 4], [5, 4], [4, 5], [3, 2], [2, 3], [16, 10], [10, 16], [16, 9], [9, 16], [21, 9], [9, 21], [32, 9], [9, 32]].reduce((e2, [t2, i2]) => __spreadProps(__spreadValues({}, e2), { [t2 / i2]: [t2, i2] }), {});
        function re(e2) {
          if (!(S.array(e2) || S.string(e2) && e2.includes(":"))) return false;
          return (S.array(e2) ? e2 : e2.split(":")).map(Number).every(S.number);
        }
        function oe(e2) {
          if (!S.array(e2) || !e2.every(S.number)) return null;
          const [t2, i2] = e2, s2 = (e3, t3) => 0 === t3 ? e3 : s2(t3, e3 % t3), n2 = s2(t2, i2);
          return [t2 / n2, i2 / n2];
        }
        function ce(e2) {
          const t2 = (e3) => re(e3) ? e3.split(":").map(Number) : null;
          let i2 = t2(e2);
          if (null === i2 && (i2 = t2(this.config.ratio)), null === i2 && !S.empty(this.embed) && S.array(this.embed.ratio) && ({ ratio: i2 } = this.embed), null === i2 && this.isHTML5) {
            const { videoWidth: e3, videoHeight: t3 } = this.media;
            i2 = [e3, t3];
          }
          return oe(i2);
        }
        function ue(e2) {
          if (!this.isVideo) return {};
          const { wrapper: t2 } = this.elements, i2 = ce.call(this, e2);
          if (!S.array(i2)) return {};
          const [s2, n2] = oe(i2), a2 = 100 / s2 * n2;
          if (ae("aspect-ratio: ".concat(s2, "/").concat(n2)) ? t2.style.aspectRatio = "".concat(s2, "/").concat(n2) : t2.style.paddingBottom = "".concat(a2, "%"), this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
            const e3 = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10), i3 = (e3 - a2) / (e3 / 50);
            this.fullscreen.active ? t2.style.paddingBottom = null : this.media.style.transform = "translateY(-".concat(i3, "%)");
          } else this.isHTML5 && t2.classList.add(this.config.classNames.videoFixedRatio);
          return { padding: a2, ratio: i2 };
        }
        function he(e2, t2, i2 = 0.05) {
          const s2 = e2 / t2, n2 = ne(Object.keys(le), s2);
          return Math.abs(n2 - s2) <= i2 ? le[n2] : [e2, t2];
        }
        const de = { getSources() {
          if (!this.isHTML5) return [];
          return Array.from(this.media.querySelectorAll("source")).filter((e2) => {
            const t2 = e2.getAttribute("type");
            return !!S.empty(t2) || K.mime.call(this, t2);
          });
        }, getQualityOptions() {
          return this.config.quality.forced ? this.config.quality.options : de.getSources.call(this).map((e2) => Number(e2.getAttribute("size"))).filter(Boolean);
        }, setup() {
          if (!this.isHTML5) return;
          const e2 = this;
          e2.options.speed = e2.config.speed.options, S.empty(this.config.ratio) || ue.call(e2), Object.defineProperty(e2.media, "quality", { get() {
            const t2 = de.getSources.call(e2).find((t3) => t3.getAttribute("src") === e2.source);
            return t2 && Number(t2.getAttribute("size"));
          }, set(t2) {
            if (e2.quality !== t2) {
              if (e2.config.quality.forced && S.function(e2.config.quality.onChange)) e2.config.quality.onChange(t2);
              else {
                const i2 = de.getSources.call(e2).find((e3) => Number(e3.getAttribute("size")) === t2);
                if (!i2) return;
                const { currentTime: s2, paused: n2, preload: a2, readyState: l2, playbackRate: r2 } = e2.media;
                e2.media.src = i2.getAttribute("src"), ("none" !== a2 || l2) && (e2.once("loadedmetadata", () => {
                  e2.speed = r2, e2.currentTime = s2, n2 || ie(e2.play());
                }), e2.media.load());
              }
              Z.call(e2, e2.media, "qualitychange", false, { quality: t2 });
            }
          } });
        }, cancelRequests() {
          this.isHTML5 && (O(de.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
        } };
        function me(e2, ...t2) {
          return S.empty(e2) ? e2 : e2.toString().replace(/{(\d+)}/g, (e3, i2) => t2[i2].toString());
        }
        const pe = (e2 = "", t2 = "", i2 = "") => e2.replace(new RegExp(t2.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i2.toString()), ge = (e2 = "") => e2.toString().replace(/\w\S*/g, (e3) => e3.charAt(0).toUpperCase() + e3.slice(1).toLowerCase());
        function fe(e2 = "") {
          let t2 = e2.toString();
          return t2 = function(e3 = "") {
            let t3 = e3.toString();
            return t3 = pe(t3, "-", " "), t3 = pe(t3, "_", " "), t3 = ge(t3), pe(t3, " ", "");
          }(t2), t2.charAt(0).toLowerCase() + t2.slice(1);
        }
        function ye(e2) {
          const t2 = document.createElement("div");
          return t2.appendChild(e2), t2.innerHTML;
        }
        const be = { pip: "PIP", airplay: "AirPlay", html5: "HTML5", vimeo: "Vimeo", youtube: "YouTube" }, ve = { get(e2 = "", t2 = {}) {
          if (S.empty(e2) || S.empty(t2)) return "";
          let i2 = N(t2.i18n, e2);
          if (S.empty(i2)) return Object.keys(be).includes(e2) ? be[e2] : "";
          const s2 = { "{seektime}": t2.seekTime, "{title}": t2.title };
          return Object.entries(s2).forEach(([e3, t3]) => {
            i2 = pe(i2, e3, t3);
          }), i2;
        } };
        class we {
          constructor(t2) {
            e(this, "get", (e2) => {
              if (!we.supported || !this.enabled) return null;
              const t3 = window.localStorage.getItem(this.key);
              if (S.empty(t3)) return null;
              const i2 = JSON.parse(t3);
              return S.string(e2) && e2.length ? i2[e2] : i2;
            }), e(this, "set", (e2) => {
              if (!we.supported || !this.enabled) return;
              if (!S.object(e2)) return;
              let t3 = this.get();
              S.empty(t3) && (t3 = {}), x(t3, e2);
              try {
                window.localStorage.setItem(this.key, JSON.stringify(t3));
              } catch (e3) {
              }
            }), this.enabled = t2.config.storage.enabled, this.key = t2.config.storage.key;
          }
          static get supported() {
            try {
              if (!("localStorage" in window)) return false;
              const e2 = "___test";
              return window.localStorage.setItem(e2, e2), window.localStorage.removeItem(e2), true;
            } catch (e2) {
              return false;
            }
          }
        }
        function Te(e2, t2 = "text") {
          return new Promise((i2, s2) => {
            try {
              const s3 = new XMLHttpRequest();
              if (!("withCredentials" in s3)) return;
              s3.addEventListener("load", () => {
                if ("text" === t2) try {
                  i2(JSON.parse(s3.responseText));
                } catch (e3) {
                  i2(s3.responseText);
                }
                else i2(s3.response);
              }), s3.addEventListener("error", () => {
                throw new Error(s3.status);
              }), s3.open("GET", e2, true), s3.responseType = t2, s3.send();
            } catch (e3) {
              s2(e3);
            }
          });
        }
        function ke(e2, t2) {
          if (!S.string(e2)) return;
          const i2 = "cache", s2 = S.string(t2);
          let n2 = false;
          const a2 = () => null !== document.getElementById(t2), l2 = (e3, t3) => {
            e3.innerHTML = t3, s2 && a2() || document.body.insertAdjacentElement("afterbegin", e3);
          };
          if (!s2 || !a2()) {
            const a3 = we.supported, r2 = document.createElement("div");
            if (r2.setAttribute("hidden", ""), s2 && r2.setAttribute("id", t2), a3) {
              const e3 = window.localStorage.getItem("".concat(i2, "-").concat(t2));
              if (n2 = null !== e3, n2) {
                const t3 = JSON.parse(e3);
                l2(r2, t3.content);
              }
            }
            Te(e2).then((e3) => {
              if (!S.empty(e3)) {
                if (a3) try {
                  window.localStorage.setItem("".concat(i2, "-").concat(t2), JSON.stringify({ content: e3 }));
                } catch (e4) {
                }
                l2(r2, e3);
              }
            }).catch(() => {
            });
          }
        }
        const Ce = (e2) => Math.trunc(e2 / 60 / 60 % 60, 10), Ae = (e2) => Math.trunc(e2 / 60 % 60, 10), Se = (e2) => Math.trunc(e2 % 60, 10);
        function Ee(e2 = 0, t2 = false, i2 = false) {
          if (!S.number(e2)) return Ee(void 0, t2, i2);
          const s2 = (e3) => "0".concat(e3).slice(-2);
          let n2 = Ce(e2);
          const a2 = Ae(e2), l2 = Se(e2);
          return n2 = t2 || n2 > 0 ? "".concat(n2, ":") : "", "".concat(i2 && e2 > 0 ? "-" : "").concat(n2).concat(s2(a2), ":").concat(s2(l2));
        }
        const Pe = { getIconUrl() {
          const e2 = new URL(this.config.iconUrl, window.location), t2 = window.location.host ? window.location.host : window.top.location.host, i2 = e2.host !== t2 || M.isIE && !window.svg4everybody;
          return { url: this.config.iconUrl, cors: i2 };
        }, findElements() {
          try {
            return this.elements.controls = B.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = { play: U.call(this, this.config.selectors.buttons.play), pause: B.call(this, this.config.selectors.buttons.pause), restart: B.call(this, this.config.selectors.buttons.restart), rewind: B.call(this, this.config.selectors.buttons.rewind), fastForward: B.call(this, this.config.selectors.buttons.fastForward), mute: B.call(this, this.config.selectors.buttons.mute), pip: B.call(this, this.config.selectors.buttons.pip), airplay: B.call(this, this.config.selectors.buttons.airplay), settings: B.call(this, this.config.selectors.buttons.settings), captions: B.call(this, this.config.selectors.buttons.captions), fullscreen: B.call(this, this.config.selectors.buttons.fullscreen) }, this.elements.progress = B.call(this, this.config.selectors.progress), this.elements.inputs = { seek: B.call(this, this.config.selectors.inputs.seek), volume: B.call(this, this.config.selectors.inputs.volume) }, this.elements.display = { buffer: B.call(this, this.config.selectors.display.buffer), currentTime: B.call(this, this.config.selectors.display.currentTime), duration: B.call(this, this.config.selectors.display.duration) }, S.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), true;
          } catch (e2) {
            return this.debug.warn("It looks like there is a problem with your custom controls HTML", e2), this.toggleNativeControls(true), false;
          }
        }, createIcon(e2, t2) {
          const i2 = "http://www.w3.org/2000/svg", s2 = Pe.getIconUrl.call(this), n2 = "".concat(s2.cors ? "" : s2.url, "#").concat(this.config.iconPrefix), a2 = document.createElementNS(i2, "svg");
          I(a2, x(t2, { "aria-hidden": "true", focusable: "false" }));
          const l2 = document.createElementNS(i2, "use"), r2 = "".concat(n2, "-").concat(e2);
          return "href" in l2 && l2.setAttributeNS("http://www.w3.org/1999/xlink", "href", r2), l2.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r2), a2.appendChild(l2), a2;
        }, createLabel(e2, t2 = {}) {
          const i2 = ve.get(e2, this.config);
          return $("span", __spreadProps(__spreadValues({}, t2), { class: [t2.class, this.config.classNames.hidden].filter(Boolean).join(" ") }), i2);
        }, createBadge(e2) {
          if (S.empty(e2)) return null;
          const t2 = $("span", { class: this.config.classNames.menu.value });
          return t2.appendChild($("span", { class: this.config.classNames.menu.badge }, e2)), t2;
        }, createButton(e2, t2) {
          const i2 = x({}, t2);
          let s2 = fe(e2);
          const n2 = { element: "button", toggle: false, label: null, icon: null, labelPressed: null, iconPressed: null };
          switch (["element", "icon", "label"].forEach((e3) => {
            Object.keys(i2).includes(e3) && (n2[e3] = i2[e3], delete i2[e3]);
          }), "button" !== n2.element || Object.keys(i2).includes("type") || (i2.type = "button"), Object.keys(i2).includes("class") ? i2.class.split(" ").some((e3) => e3 === this.config.classNames.control) || x(i2, { class: "".concat(i2.class, " ").concat(this.config.classNames.control) }) : i2.class = this.config.classNames.control, e2) {
            case "play":
              n2.toggle = true, n2.label = "play", n2.labelPressed = "pause", n2.icon = "play", n2.iconPressed = "pause";
              break;
            case "mute":
              n2.toggle = true, n2.label = "mute", n2.labelPressed = "unmute", n2.icon = "volume", n2.iconPressed = "muted";
              break;
            case "captions":
              n2.toggle = true, n2.label = "enableCaptions", n2.labelPressed = "disableCaptions", n2.icon = "captions-off", n2.iconPressed = "captions-on";
              break;
            case "fullscreen":
              n2.toggle = true, n2.label = "enterFullscreen", n2.labelPressed = "exitFullscreen", n2.icon = "enter-fullscreen", n2.iconPressed = "exit-fullscreen";
              break;
            case "play-large":
              i2.class += " ".concat(this.config.classNames.control, "--overlaid"), s2 = "play", n2.label = "play", n2.icon = "play";
              break;
            default:
              S.empty(n2.label) && (n2.label = s2), S.empty(n2.icon) && (n2.icon = e2);
          }
          const a2 = $(n2.element);
          return n2.toggle ? (a2.appendChild(Pe.createIcon.call(this, n2.iconPressed, { class: "icon--pressed" })), a2.appendChild(Pe.createIcon.call(this, n2.icon, { class: "icon--not-pressed" })), a2.appendChild(Pe.createLabel.call(this, n2.labelPressed, { class: "label--pressed" })), a2.appendChild(Pe.createLabel.call(this, n2.label, { class: "label--not-pressed" }))) : (a2.appendChild(Pe.createIcon.call(this, n2.icon)), a2.appendChild(Pe.createLabel.call(this, n2.label))), x(i2, D(this.config.selectors.buttons[s2], i2)), I(a2, i2), "play" === s2 ? (S.array(this.elements.buttons[s2]) || (this.elements.buttons[s2] = []), this.elements.buttons[s2].push(a2)) : this.elements.buttons[s2] = a2, a2;
        }, createRange(e2, t2) {
          const i2 = $("input", x(D(this.config.selectors.inputs[e2]), { type: "range", min: 0, max: 100, step: 0.01, value: 0, autocomplete: "off", role: "slider", "aria-label": ve.get(e2, this.config), "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": 0 }, t2));
          return this.elements.inputs[e2] = i2, Pe.updateRangeFill.call(this, i2), g.setup(i2), i2;
        }, createProgress(e2, t2) {
          const i2 = $("progress", x(D(this.config.selectors.display[e2]), { min: 0, max: 100, value: 0, role: "progressbar", "aria-hidden": true }, t2));
          if ("volume" !== e2) {
            i2.appendChild($("span", null, "0"));
            const t3 = { played: "played", buffer: "buffered" }[e2], s2 = t3 ? ve.get(t3, this.config) : "";
            i2.innerText = "% ".concat(s2.toLowerCase());
          }
          return this.elements.display[e2] = i2, i2;
        }, createTime(e2, t2) {
          const i2 = D(this.config.selectors.display[e2], t2), s2 = $("div", x(i2, { class: "".concat(i2.class ? i2.class : "", " ").concat(this.config.classNames.display.time, " ").trim(), "aria-label": ve.get(e2, this.config), role: "timer" }), "00:00");
          return this.elements.display[e2] = s2, s2;
        }, bindMenuItemShortcuts(e2, t2) {
          X.call(this, e2, "keydown keyup", (i2) => {
            if (![" ", "ArrowUp", "ArrowDown", "ArrowRight"].includes(i2.key)) return;
            if (i2.preventDefault(), i2.stopPropagation(), "keydown" === i2.type) return;
            const s2 = V(e2, '[role="menuitemradio"]');
            if (!s2 && [" ", "ArrowRight"].includes(i2.key)) Pe.showMenuPanel.call(this, t2, true);
            else {
              let t3;
              " " !== i2.key && ("ArrowDown" === i2.key || s2 && "ArrowRight" === i2.key ? (t3 = e2.nextElementSibling, S.element(t3) || (t3 = e2.parentNode.firstElementChild)) : (t3 = e2.previousElementSibling, S.element(t3) || (t3 = e2.parentNode.lastElementChild)), W.call(this, t3, true));
            }
          }, false), X.call(this, e2, "keyup", (e3) => {
            "Return" === e3.key && Pe.focusFirstMenuItem.call(this, null, true);
          });
        }, createMenuItem({ value: e2, list: t2, type: i2, title: s2, badge: n2 = null, checked: a2 = false }) {
          const l2 = D(this.config.selectors.inputs[i2]), r2 = $("button", x(l2, { type: "button", role: "menuitemradio", class: "".concat(this.config.classNames.control, " ").concat(l2.class ? l2.class : "").trim(), "aria-checked": a2, value: e2 })), o2 = $("span");
          o2.innerHTML = s2, S.element(n2) && o2.appendChild(n2), r2.appendChild(o2), Object.defineProperty(r2, "checked", { enumerable: true, get: () => "true" === r2.getAttribute("aria-checked"), set(e3) {
            e3 && Array.from(r2.parentNode.children).filter((e4) => V(e4, '[role="menuitemradio"]')).forEach((e4) => e4.setAttribute("aria-checked", "false")), r2.setAttribute("aria-checked", e3 ? "true" : "false");
          } }), this.listeners.bind(r2, "click keyup", (t3) => {
            if (!S.keyboardEvent(t3) || " " === t3.key) {
              switch (t3.preventDefault(), t3.stopPropagation(), r2.checked = true, i2) {
                case "language":
                  this.currentTrack = Number(e2);
                  break;
                case "quality":
                  this.quality = e2;
                  break;
                case "speed":
                  this.speed = parseFloat(e2);
              }
              Pe.showMenuPanel.call(this, "home", S.keyboardEvent(t3));
            }
          }, i2, false), Pe.bindMenuItemShortcuts.call(this, r2, i2), t2.appendChild(r2);
        }, formatTime(e2 = 0, t2 = false) {
          if (!S.number(e2)) return e2;
          return Ee(e2, Ce(this.duration) > 0, t2);
        }, updateTimeDisplay(e2 = null, t2 = 0, i2 = false) {
          S.element(e2) && S.number(t2) && (e2.innerText = Pe.formatTime(t2, i2));
        }, updateVolume() {
          this.supported.ui && (S.element(this.elements.inputs.volume) && Pe.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), S.element(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume));
        }, setRange(e2, t2 = 0) {
          S.element(e2) && (e2.value = t2, Pe.updateRangeFill.call(this, e2));
        }, updateProgress(e2) {
          if (!this.supported.ui || !S.event(e2)) return;
          let t2 = 0;
          const i2 = (e3, t3) => {
            const i3 = S.number(t3) ? t3 : 0, s3 = S.element(e3) ? e3 : this.elements.display.buffer;
            if (S.element(s3)) {
              s3.value = i3;
              const e4 = s3.getElementsByTagName("span")[0];
              S.element(e4) && (e4.childNodes[0].nodeValue = i3);
            }
          };
          if (e2) switch (e2.type) {
            case "timeupdate":
            case "seeking":
            case "seeked":
              s2 = this.currentTime, n2 = this.duration, t2 = 0 === s2 || 0 === n2 || Number.isNaN(s2) || Number.isNaN(n2) ? 0 : (s2 / n2 * 100).toFixed(2), "timeupdate" === e2.type && Pe.setRange.call(this, this.elements.inputs.seek, t2);
              break;
            case "playing":
            case "progress":
              i2(this.elements.display.buffer, 100 * this.buffered);
          }
          var s2, n2;
        }, updateRangeFill(e2) {
          const t2 = S.event(e2) ? e2.target : e2;
          if (S.element(t2) && "range" === t2.getAttribute("type")) {
            if (V(t2, this.config.selectors.inputs.seek)) {
              t2.setAttribute("aria-valuenow", this.currentTime);
              const e3 = Pe.formatTime(this.currentTime), i2 = Pe.formatTime(this.duration), s2 = ve.get("seekLabel", this.config);
              t2.setAttribute("aria-valuetext", s2.replace("{currentTime}", e3).replace("{duration}", i2));
            } else if (V(t2, this.config.selectors.inputs.volume)) {
              const e3 = 100 * t2.value;
              t2.setAttribute("aria-valuenow", e3), t2.setAttribute("aria-valuetext", "".concat(e3.toFixed(1), "%"));
            } else t2.setAttribute("aria-valuenow", t2.value);
            (M.isWebKit || M.isIPadOS) && t2.style.setProperty("--value", t2.value / t2.max * 100 + "%");
          }
        }, updateSeekTooltip(e2) {
          var t2, i2;
          if (!this.config.tooltips.seek || !S.element(this.elements.inputs.seek) || !S.element(this.elements.display.seekTooltip) || 0 === this.duration) return;
          const s2 = this.elements.display.seekTooltip, n2 = "".concat(this.config.classNames.tooltip, "--visible"), a2 = (e3) => R(s2, n2, e3);
          if (this.touch) return void a2(false);
          let l2 = 0;
          const r2 = this.elements.progress.getBoundingClientRect();
          if (S.event(e2)) l2 = 100 / r2.width * (e2.pageX - r2.left);
          else {
            if (!F(s2, n2)) return;
            l2 = parseFloat(s2.style.left, 10);
          }
          l2 < 0 ? l2 = 0 : l2 > 100 && (l2 = 100);
          const o2 = this.duration / 100 * l2;
          s2.innerText = Pe.formatTime(o2);
          const c2 = null === (t2 = this.config.markers) || void 0 === t2 || null === (i2 = t2.points) || void 0 === i2 ? void 0 : i2.find(({ time: e3 }) => e3 === Math.round(o2));
          c2 && s2.insertAdjacentHTML("afterbegin", "".concat(c2.label, "<br>")), s2.style.left = "".concat(l2, "%"), S.event(e2) && ["mouseenter", "mouseleave"].includes(e2.type) && a2("mouseenter" === e2.type);
        }, timeUpdate(e2) {
          const t2 = !S.element(this.elements.display.duration) && this.config.invertTime;
          Pe.updateTimeDisplay.call(this, this.elements.display.currentTime, t2 ? this.duration - this.currentTime : this.currentTime, t2), e2 && "timeupdate" === e2.type && this.media.seeking || Pe.updateProgress.call(this, e2);
        }, durationUpdate() {
          if (!this.supported.ui || !this.config.invertTime && this.currentTime) return;
          if (this.duration >= __pow(2, 32)) return H(this.elements.display.currentTime, true), void H(this.elements.progress, true);
          S.element(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
          const e2 = S.element(this.elements.display.duration);
          !e2 && this.config.displayDuration && this.paused && Pe.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e2 && Pe.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), this.config.markers.enabled && Pe.setMarkers.call(this), Pe.updateSeekTooltip.call(this);
        }, toggleMenuButton(e2, t2) {
          H(this.elements.settings.buttons[e2], !t2);
        }, updateSetting(e2, t2, i2) {
          const s2 = this.elements.settings.panels[e2];
          let n2 = null, a2 = t2;
          if ("captions" === e2) n2 = this.currentTrack;
          else {
            if (n2 = S.empty(i2) ? this[e2] : i2, S.empty(n2) && (n2 = this.config[e2].default), !S.empty(this.options[e2]) && !this.options[e2].includes(n2)) return void this.debug.warn("Unsupported value of '".concat(n2, "' for ").concat(e2));
            if (!this.config[e2].options.includes(n2)) return void this.debug.warn("Disabled value of '".concat(n2, "' for ").concat(e2));
          }
          if (S.element(a2) || (a2 = s2 && s2.querySelector('[role="menu"]')), !S.element(a2)) return;
          this.elements.settings.buttons[e2].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = Pe.getLabel.call(this, e2, n2);
          const l2 = a2 && a2.querySelector('[value="'.concat(n2, '"]'));
          S.element(l2) && (l2.checked = true);
        }, getLabel(e2, t2) {
          switch (e2) {
            case "speed":
              return 1 === t2 ? ve.get("normal", this.config) : "".concat(t2, "&times;");
            case "quality":
              if (S.number(t2)) {
                const e3 = ve.get("qualityLabel.".concat(t2), this.config);
                return e3.length ? e3 : "".concat(t2, "p");
              }
              return ge(t2);
            case "captions":
              return xe.getLabel.call(this);
            default:
              return null;
          }
        }, setQualityMenu(e2) {
          if (!S.element(this.elements.settings.panels.quality)) return;
          const t2 = "quality", i2 = this.elements.settings.panels.quality.querySelector('[role="menu"]');
          S.array(e2) && (this.options.quality = se(e2).filter((e3) => this.config.quality.options.includes(e3)));
          const s2 = !S.empty(this.options.quality) && this.options.quality.length > 1;
          if (Pe.toggleMenuButton.call(this, t2, s2), j(i2), Pe.checkMenu.call(this), !s2) return;
          const n2 = (e3) => {
            const t3 = ve.get("qualityBadge.".concat(e3), this.config);
            return t3.length ? Pe.createBadge.call(this, t3) : null;
          };
          this.options.quality.sort((e3, t3) => {
            const i3 = this.config.quality.options;
            return i3.indexOf(e3) > i3.indexOf(t3) ? 1 : -1;
          }).forEach((e3) => {
            Pe.createMenuItem.call(this, { value: e3, list: i2, type: t2, title: Pe.getLabel.call(this, "quality", e3), badge: n2(e3) });
          }), Pe.updateSetting.call(this, t2, i2);
        }, setCaptionsMenu() {
          if (!S.element(this.elements.settings.panels.captions)) return;
          const e2 = "captions", t2 = this.elements.settings.panels.captions.querySelector('[role="menu"]'), i2 = xe.getTracks.call(this), s2 = Boolean(i2.length);
          if (Pe.toggleMenuButton.call(this, e2, s2), j(t2), Pe.checkMenu.call(this), !s2) return;
          const n2 = i2.map((e3, i3) => ({ value: i3, checked: this.captions.toggled && this.currentTrack === i3, title: xe.getLabel.call(this, e3), badge: e3.language && Pe.createBadge.call(this, e3.language.toUpperCase()), list: t2, type: "language" }));
          n2.unshift({ value: -1, checked: !this.captions.toggled, title: ve.get("disabled", this.config), list: t2, type: "language" }), n2.forEach(Pe.createMenuItem.bind(this)), Pe.updateSetting.call(this, e2, t2);
        }, setSpeedMenu() {
          if (!S.element(this.elements.settings.panels.speed)) return;
          const e2 = "speed", t2 = this.elements.settings.panels.speed.querySelector('[role="menu"]');
          this.options.speed = this.options.speed.filter((e3) => e3 >= this.minimumSpeed && e3 <= this.maximumSpeed);
          const i2 = !S.empty(this.options.speed) && this.options.speed.length > 1;
          Pe.toggleMenuButton.call(this, e2, i2), j(t2), Pe.checkMenu.call(this), i2 && (this.options.speed.forEach((i3) => {
            Pe.createMenuItem.call(this, { value: i3, list: t2, type: e2, title: Pe.getLabel.call(this, "speed", i3) });
          }), Pe.updateSetting.call(this, e2, t2));
        }, checkMenu() {
          const { buttons: e2 } = this.elements.settings, t2 = !S.empty(e2) && Object.values(e2).some((e3) => !e3.hidden);
          H(this.elements.settings.menu, !t2);
        }, focusFirstMenuItem(e2, t2 = false) {
          if (this.elements.settings.popup.hidden) return;
          let i2 = e2;
          S.element(i2) || (i2 = Object.values(this.elements.settings.panels).find((e3) => !e3.hidden));
          const s2 = i2.querySelector('[role^="menuitem"]');
          W.call(this, s2, t2);
        }, toggleMenu(e2) {
          const { popup: t2 } = this.elements.settings, i2 = this.elements.buttons.settings;
          if (!S.element(t2) || !S.element(i2)) return;
          const { hidden: s2 } = t2;
          let n2 = s2;
          if (S.boolean(e2)) n2 = e2;
          else if (S.keyboardEvent(e2) && "Escape" === e2.key) n2 = false;
          else if (S.event(e2)) {
            const s3 = S.function(e2.composedPath) ? e2.composedPath()[0] : e2.target, a2 = t2.contains(s3);
            if (a2 || !a2 && e2.target !== i2 && n2) return;
          }
          i2.setAttribute("aria-expanded", n2), H(t2, !n2), R(this.elements.container, this.config.classNames.menu.open, n2), n2 && S.keyboardEvent(e2) ? Pe.focusFirstMenuItem.call(this, null, true) : n2 || s2 || W.call(this, i2, S.keyboardEvent(e2));
        }, getMenuSize(e2) {
          const t2 = e2.cloneNode(true);
          t2.style.position = "absolute", t2.style.opacity = 0, t2.removeAttribute("hidden"), e2.parentNode.appendChild(t2);
          const i2 = t2.scrollWidth, s2 = t2.scrollHeight;
          return O(t2), { width: i2, height: s2 };
        }, showMenuPanel(e2 = "", t2 = false) {
          const i2 = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(e2));
          if (!S.element(i2)) return;
          const s2 = i2.parentNode, n2 = Array.from(s2.children).find((e3) => !e3.hidden);
          if (K.transitions && !K.reducedMotion) {
            s2.style.width = "".concat(n2.scrollWidth, "px"), s2.style.height = "".concat(n2.scrollHeight, "px");
            const e3 = Pe.getMenuSize.call(this, i2), t3 = (e4) => {
              e4.target === s2 && ["width", "height"].includes(e4.propertyName) && (s2.style.width = "", s2.style.height = "", J.call(this, s2, E, t3));
            };
            X.call(this, s2, E, t3), s2.style.width = "".concat(e3.width, "px"), s2.style.height = "".concat(e3.height, "px");
          }
          H(n2, true), H(i2, false), Pe.focusFirstMenuItem.call(this, i2, t2);
        }, setDownloadUrl() {
          const e2 = this.elements.buttons.download;
          S.element(e2) && e2.setAttribute("href", this.download);
        }, create(e2) {
          const { bindMenuItemShortcuts: t2, createButton: i2, createProgress: s2, createRange: n2, createTime: a2, setQualityMenu: l2, setSpeedMenu: r2, showMenuPanel: o2 } = Pe;
          this.elements.controls = null, S.array(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i2.call(this, "play-large"));
          const c2 = $("div", D(this.config.selectors.controls.wrapper));
          this.elements.controls = c2;
          const u2 = { class: "plyr__controls__item" };
          return se(S.array(this.config.controls) ? this.config.controls : []).forEach((l3) => {
            if ("restart" === l3 && c2.appendChild(i2.call(this, "restart", u2)), "rewind" === l3 && c2.appendChild(i2.call(this, "rewind", u2)), "play" === l3 && c2.appendChild(i2.call(this, "play", u2)), "fast-forward" === l3 && c2.appendChild(i2.call(this, "fast-forward", u2)), "progress" === l3) {
              const t3 = $("div", { class: "".concat(u2.class, " plyr__progress__container") }), i3 = $("div", D(this.config.selectors.progress));
              if (i3.appendChild(n2.call(this, "seek", { id: "plyr-seek-".concat(e2.id) })), i3.appendChild(s2.call(this, "buffer")), this.config.tooltips.seek) {
                const e3 = $("span", { class: this.config.classNames.tooltip }, "00:00");
                i3.appendChild(e3), this.elements.display.seekTooltip = e3;
              }
              this.elements.progress = i3, t3.appendChild(this.elements.progress), c2.appendChild(t3);
            }
            if ("current-time" === l3 && c2.appendChild(a2.call(this, "currentTime", u2)), "duration" === l3 && c2.appendChild(a2.call(this, "duration", u2)), "mute" === l3 || "volume" === l3) {
              let { volume: t3 } = this.elements;
              if (S.element(t3) && c2.contains(t3) || (t3 = $("div", x({}, u2, { class: "".concat(u2.class, " plyr__volume").trim() })), this.elements.volume = t3, c2.appendChild(t3)), "mute" === l3 && t3.appendChild(i2.call(this, "mute")), "volume" === l3 && !M.isIos && !M.isIPadOS) {
                const i3 = { max: 1, step: 0.05, value: this.config.volume };
                t3.appendChild(n2.call(this, "volume", x(i3, { id: "plyr-volume-".concat(e2.id) })));
              }
            }
            if ("captions" === l3 && c2.appendChild(i2.call(this, "captions", u2)), "settings" === l3 && !S.empty(this.config.settings)) {
              const s3 = $("div", x({}, u2, { class: "".concat(u2.class, " plyr__menu").trim(), hidden: "" }));
              s3.appendChild(i2.call(this, "settings", { "aria-haspopup": true, "aria-controls": "plyr-settings-".concat(e2.id), "aria-expanded": false }));
              const n3 = $("div", { class: "plyr__menu__container", id: "plyr-settings-".concat(e2.id), hidden: "" }), a3 = $("div"), l4 = $("div", { id: "plyr-settings-".concat(e2.id, "-home") }), r3 = $("div", { role: "menu" });
              l4.appendChild(r3), a3.appendChild(l4), this.elements.settings.panels.home = l4, this.config.settings.forEach((i3) => {
                const s4 = $("button", x(D(this.config.selectors.buttons.settings), { type: "button", class: "".concat(this.config.classNames.control, " ").concat(this.config.classNames.control, "--forward"), role: "menuitem", "aria-haspopup": true, hidden: "" }));
                t2.call(this, s4, i3), X.call(this, s4, "click", () => {
                  o2.call(this, i3, false);
                });
                const n4 = $("span", null, ve.get(i3, this.config)), l5 = $("span", { class: this.config.classNames.menu.value });
                l5.innerHTML = e2[i3], n4.appendChild(l5), s4.appendChild(n4), r3.appendChild(s4);
                const c3 = $("div", { id: "plyr-settings-".concat(e2.id, "-").concat(i3), hidden: "" }), u3 = $("button", { type: "button", class: "".concat(this.config.classNames.control, " ").concat(this.config.classNames.control, "--back") });
                u3.appendChild($("span", { "aria-hidden": true }, ve.get(i3, this.config))), u3.appendChild($("span", { class: this.config.classNames.hidden }, ve.get("menuBack", this.config))), X.call(this, c3, "keydown", (e3) => {
                  "ArrowLeft" === e3.key && (e3.preventDefault(), e3.stopPropagation(), o2.call(this, "home", true));
                }, false), X.call(this, u3, "click", () => {
                  o2.call(this, "home", false);
                }), c3.appendChild(u3), c3.appendChild($("div", { role: "menu" })), a3.appendChild(c3), this.elements.settings.buttons[i3] = s4, this.elements.settings.panels[i3] = c3;
              }), n3.appendChild(a3), s3.appendChild(n3), c2.appendChild(s3), this.elements.settings.popup = n3, this.elements.settings.menu = s3;
            }
            if ("pip" === l3 && K.pip && c2.appendChild(i2.call(this, "pip", u2)), "airplay" === l3 && K.airplay && c2.appendChild(i2.call(this, "airplay", u2)), "download" === l3) {
              const e3 = x({}, u2, { element: "a", href: this.download, target: "_blank" });
              this.isHTML5 && (e3.download = "");
              const { download: t3 } = this.config.urls;
              !S.url(t3) && this.isEmbed && x(e3, { icon: "logo-".concat(this.provider), label: this.provider }), c2.appendChild(i2.call(this, "download", e3));
            }
            "fullscreen" === l3 && c2.appendChild(i2.call(this, "fullscreen", u2));
          }), this.isHTML5 && l2.call(this, de.getQualityOptions.call(this)), r2.call(this), c2;
        }, inject() {
          if (this.config.loadSprite) {
            const e3 = Pe.getIconUrl.call(this);
            e3.cors && ke(e3.url, "sprite-plyr");
          }
          this.id = Math.floor(1e4 * Math.random());
          let e2 = null;
          this.elements.controls = null;
          const t2 = { id: this.id, seektime: this.config.seekTime, title: this.config.title };
          let i2 = true;
          S.function(this.config.controls) && (this.config.controls = this.config.controls.call(this, t2)), this.config.controls || (this.config.controls = []), S.element(this.config.controls) || S.string(this.config.controls) ? e2 = this.config.controls : (e2 = Pe.create.call(this, { id: this.id, seektime: this.config.seekTime, speed: this.speed, quality: this.quality, captions: xe.getLabel.call(this) }), i2 = false);
          let s2;
          i2 && S.string(this.config.controls) && (e2 = ((e3) => {
            let i3 = e3;
            return Object.entries(t2).forEach(([e4, t3]) => {
              i3 = pe(i3, "{".concat(e4, "}"), t3);
            }), i3;
          })(e2)), S.string(this.config.selectors.controls.container) && (s2 = document.querySelector(this.config.selectors.controls.container)), S.element(s2) || (s2 = this.elements.container);
          if (s2[S.element(e2) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", e2), S.element(this.elements.controls) || Pe.findElements.call(this), !S.empty(this.elements.buttons)) {
            const e3 = (e4) => {
              const t3 = this.config.classNames.controlPressed;
              e4.setAttribute("aria-pressed", "false"), Object.defineProperty(e4, "pressed", { configurable: true, enumerable: true, get: () => F(e4, t3), set(i3 = false) {
                R(e4, t3, i3), e4.setAttribute("aria-pressed", i3 ? "true" : "false");
              } });
            };
            Object.values(this.elements.buttons).filter(Boolean).forEach((t3) => {
              S.array(t3) || S.nodeList(t3) ? Array.from(t3).filter(Boolean).forEach(e3) : e3(t3);
            });
          }
          if (M.isEdge && P(s2), this.config.tooltips.controls) {
            const { classNames: e3, selectors: t3 } = this.config, i3 = "".concat(t3.controls.wrapper, " ").concat(t3.labels, " .").concat(e3.hidden), s3 = U.call(this, i3);
            Array.from(s3).forEach((e4) => {
              R(e4, this.config.classNames.hidden, false), R(e4, this.config.classNames.tooltip, true);
            });
          }
        }, setMediaMetadata() {
          try {
            "mediaSession" in navigator && (navigator.mediaSession.metadata = new window.MediaMetadata({ title: this.config.mediaMetadata.title, artist: this.config.mediaMetadata.artist, album: this.config.mediaMetadata.album, artwork: this.config.mediaMetadata.artwork }));
          } catch (e2) {
          }
        }, setMarkers() {
          var e2, t2;
          if (!this.duration || this.elements.markers) return;
          const i2 = null === (e2 = this.config.markers) || void 0 === e2 || null === (t2 = e2.points) || void 0 === t2 ? void 0 : t2.filter(({ time: e3 }) => e3 > 0 && e3 < this.duration);
          if (null == i2 || !i2.length) return;
          const s2 = document.createDocumentFragment(), n2 = document.createDocumentFragment();
          let a2 = null;
          const l2 = "".concat(this.config.classNames.tooltip, "--visible"), r2 = (e3) => R(a2, l2, e3);
          i2.forEach((e3) => {
            const t3 = $("span", { class: this.config.classNames.marker }, ""), i3 = e3.time / this.duration * 100 + "%";
            a2 && (t3.addEventListener("mouseenter", () => {
              e3.label || (a2.style.left = i3, a2.innerHTML = e3.label, r2(true));
            }), t3.addEventListener("mouseleave", () => {
              r2(false);
            })), t3.addEventListener("click", () => {
              this.currentTime = e3.time;
            }), t3.style.left = i3, n2.appendChild(t3);
          }), s2.appendChild(n2), this.config.tooltips.seek || (a2 = $("span", { class: this.config.classNames.tooltip }, ""), s2.appendChild(a2)), this.elements.markers = { points: n2, tip: a2 }, this.elements.progress.appendChild(s2);
        } };
        function Me(e2, t2 = true) {
          let i2 = e2;
          if (t2) {
            const e3 = document.createElement("a");
            e3.href = i2, i2 = e3.href;
          }
          try {
            return new URL(i2);
          } catch (e3) {
            return null;
          }
        }
        function Ne(e2) {
          const t2 = new URLSearchParams();
          return S.object(e2) && Object.entries(e2).forEach(([e3, i2]) => {
            t2.set(e3, i2);
          }), t2;
        }
        const xe = { setup() {
          if (!this.supported.ui) return;
          if (!this.isVideo || this.isYouTube || this.isHTML5 && !K.textTracks) return void (S.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Pe.setCaptionsMenu.call(this));
          var e2, t2;
          if (S.element(this.elements.captions) || (this.elements.captions = $("div", D(this.config.selectors.captions)), this.elements.captions.setAttribute("dir", "auto"), e2 = this.elements.captions, t2 = this.elements.wrapper, S.element(e2) && S.element(t2) && t2.parentNode.insertBefore(e2, t2.nextSibling)), M.isIE && window.URL) {
            const e3 = this.media.querySelectorAll("track");
            Array.from(e3).forEach((e4) => {
              const t3 = e4.getAttribute("src"), i3 = Me(t3);
              null !== i3 && i3.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i3.protocol) && Te(t3, "blob").then((t4) => {
                e4.setAttribute("src", window.URL.createObjectURL(t4));
              }).catch(() => {
                O(e4);
              });
            });
          }
          const i2 = se((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map((e3) => e3.split("-")[0]));
          let s2 = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
          "auto" === s2 && ([s2] = i2);
          let n2 = this.storage.get("captions");
          if (S.boolean(n2) || ({ active: n2 } = this.config.captions), Object.assign(this.captions, { toggled: false, active: n2, language: s2, languages: i2 }), this.isHTML5) {
            const e3 = this.config.captions.update ? "addtrack removetrack" : "removetrack";
            X.call(this, this.media.textTracks, e3, xe.update.bind(this));
          }
          setTimeout(xe.update.bind(this), 0);
        }, update() {
          const e2 = xe.getTracks.call(this, true), { active: t2, language: i2, meta: s2, currentTrackNode: n2 } = this.captions, a2 = Boolean(e2.find((e3) => e3.language === i2));
          this.isHTML5 && this.isVideo && e2.filter((e3) => !s2.get(e3)).forEach((e3) => {
            this.debug.log("Track added", e3), s2.set(e3, { default: "showing" === e3.mode }), "showing" === e3.mode && (e3.mode = "hidden"), X.call(this, e3, "cuechange", () => xe.updateCues.call(this));
          }), (a2 && this.language !== i2 || !e2.includes(n2)) && (xe.setLanguage.call(this, i2), xe.toggle.call(this, t2 && a2)), this.elements && R(this.elements.container, this.config.classNames.captions.enabled, !S.empty(e2)), S.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Pe.setCaptionsMenu.call(this);
        }, toggle(e2, t2 = true) {
          if (!this.supported.ui) return;
          const { toggled: i2 } = this.captions, s2 = this.config.classNames.captions.active, n2 = S.nullOrUndefined(e2) ? !i2 : e2;
          if (n2 !== i2) {
            if (t2 || (this.captions.active = n2, this.storage.set({ captions: n2 })), !this.language && n2 && !t2) {
              const e3 = xe.getTracks.call(this), t3 = xe.findTrack.call(this, [this.captions.language, ...this.captions.languages], true);
              return this.captions.language = t3.language, void xe.set.call(this, e3.indexOf(t3));
            }
            this.elements.buttons.captions && (this.elements.buttons.captions.pressed = n2), R(this.elements.container, s2, n2), this.captions.toggled = n2, Pe.updateSetting.call(this, "captions"), Z.call(this, this.media, n2 ? "captionsenabled" : "captionsdisabled");
          }
          setTimeout(() => {
            n2 && this.captions.toggled && (this.captions.currentTrackNode.mode = "hidden");
          });
        }, set(e2, t2 = true) {
          const i2 = xe.getTracks.call(this);
          if (-1 !== e2) if (S.number(e2)) if (e2 in i2) {
            if (this.captions.currentTrack !== e2) {
              this.captions.currentTrack = e2;
              const s2 = i2[e2], { language: n2 } = s2 || {};
              this.captions.currentTrackNode = s2, Pe.updateSetting.call(this, "captions"), t2 || (this.captions.language = n2, this.storage.set({ language: n2 })), this.isVimeo && this.embed.enableTextTrack(n2), Z.call(this, this.media, "languagechange");
            }
            xe.toggle.call(this, true, t2), this.isHTML5 && this.isVideo && xe.updateCues.call(this);
          } else this.debug.warn("Track not found", e2);
          else this.debug.warn("Invalid caption argument", e2);
          else xe.toggle.call(this, false, t2);
        }, setLanguage(e2, t2 = true) {
          if (!S.string(e2)) return void this.debug.warn("Invalid language argument", e2);
          const i2 = e2.toLowerCase();
          this.captions.language = i2;
          const s2 = xe.getTracks.call(this), n2 = xe.findTrack.call(this, [i2]);
          xe.set.call(this, s2.indexOf(n2), t2);
        }, getTracks(e2 = false) {
          return Array.from((this.media || {}).textTracks || []).filter((t2) => !this.isHTML5 || e2 || this.captions.meta.has(t2)).filter((e3) => ["captions", "subtitles"].includes(e3.kind));
        }, findTrack(e2, t2 = false) {
          const i2 = xe.getTracks.call(this), s2 = (e3) => Number((this.captions.meta.get(e3) || {}).default), n2 = Array.from(i2).sort((e3, t3) => s2(t3) - s2(e3));
          let a2;
          return e2.every((e3) => (a2 = n2.find((t3) => t3.language === e3), !a2)), a2 || (t2 ? n2[0] : void 0);
        }, getCurrentTrack() {
          return xe.getTracks.call(this)[this.currentTrack];
        }, getLabel(e2) {
          let t2 = e2;
          return !S.track(t2) && K.textTracks && this.captions.toggled && (t2 = xe.getCurrentTrack.call(this)), S.track(t2) ? S.empty(t2.label) ? S.empty(t2.language) ? ve.get("enabled", this.config) : e2.language.toUpperCase() : t2.label : ve.get("disabled", this.config);
        }, updateCues(e2) {
          if (!this.supported.ui) return;
          if (!S.element(this.elements.captions)) return void this.debug.warn("No captions element to render to");
          if (!S.nullOrUndefined(e2) && !Array.isArray(e2)) return void this.debug.warn("updateCues: Invalid input", e2);
          let t2 = e2;
          if (!t2) {
            const e3 = xe.getCurrentTrack.call(this);
            t2 = Array.from((e3 || {}).activeCues || []).map((e4) => e4.getCueAsHTML()).map(ye);
          }
          const i2 = t2.map((e3) => e3.trim()).join("\n");
          if (i2 !== this.elements.captions.innerHTML) {
            j(this.elements.captions);
            const e3 = $("span", D(this.config.selectors.caption));
            e3.innerHTML = i2, this.elements.captions.appendChild(e3), Z.call(this, this.media, "cuechange");
          }
        } }, Le = { enabled: true, title: "", debug: false, autoplay: false, autopause: true, playsinline: true, seekTime: 10, volume: 1, muted: false, duration: null, displayDuration: true, invertTime: true, toggleInvert: true, ratio: null, clickToPlay: true, hideControls: true, resetOnEnd: false, disableContextMenu: true, loadSprite: true, iconPrefix: "plyr", iconUrl: "https://cdn.plyr.io/3.7.8/plyr.svg", blankVideo: "https://cdn.plyr.io/static/blank.mp4", quality: { default: 576, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240], forced: false, onChange: null }, loop: { active: false }, speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] }, keyboard: { focused: true, global: false }, tooltips: { controls: false, seek: true }, captions: { active: false, language: "auto", update: false }, fullscreen: { enabled: true, fallback: true, iosNative: false }, storage: { enabled: true, key: "plyr" }, controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"], settings: ["captions", "quality", "speed"], i18n: { restart: "Restart", rewind: "Rewind {seektime}s", play: "Play", pause: "Pause", fastForward: "Forward {seektime}s", seek: "Seek", seekLabel: "{currentTime} of {duration}", played: "Played", buffered: "Buffered", currentTime: "Current time", duration: "Duration", volume: "Volume", mute: "Mute", unmute: "Unmute", enableCaptions: "Enable captions", disableCaptions: "Disable captions", download: "Download", enterFullscreen: "Enter fullscreen", exitFullscreen: "Exit fullscreen", frameTitle: "Player for {title}", captions: "Captions", settings: "Settings", pip: "PIP", menuBack: "Go back to previous menu", speed: "Speed", normal: "Normal", quality: "Quality", loop: "Loop", start: "Start", end: "End", all: "All", reset: "Reset", disabled: "Disabled", enabled: "Enabled", advertisement: "Ad", qualityBadge: { 2160: "4K", 1440: "HD", 1080: "HD", 720: "HD", 576: "SD", 480: "SD" } }, urls: { download: null, vimeo: { sdk: "https://player.vimeo.com/api/player.js", iframe: "https://player.vimeo.com/video/{0}?{1}", api: "https://vimeo.com/api/oembed.json?url={0}" }, youtube: { sdk: "https://www.youtube.com/iframe_api", api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}" }, googleIMA: { sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js" } }, listeners: { seek: null, play: null, pause: null, restart: null, rewind: null, fastForward: null, mute: null, volume: null, captions: null, download: null, fullscreen: null, pip: null, airplay: null, speed: null, quality: null, loop: null, language: null }, events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"], selectors: { editable: "input, textarea, select, [contenteditable]", container: ".plyr", controls: { container: null, wrapper: ".plyr__controls" }, labels: "[data-plyr]", buttons: { play: '[data-plyr="play"]', pause: '[data-plyr="pause"]', restart: '[data-plyr="restart"]', rewind: '[data-plyr="rewind"]', fastForward: '[data-plyr="fast-forward"]', mute: '[data-plyr="mute"]', captions: '[data-plyr="captions"]', download: '[data-plyr="download"]', fullscreen: '[data-plyr="fullscreen"]', pip: '[data-plyr="pip"]', airplay: '[data-plyr="airplay"]', settings: '[data-plyr="settings"]', loop: '[data-plyr="loop"]' }, inputs: { seek: '[data-plyr="seek"]', volume: '[data-plyr="volume"]', speed: '[data-plyr="speed"]', language: '[data-plyr="language"]', quality: '[data-plyr="quality"]' }, display: { currentTime: ".plyr__time--current", duration: ".plyr__time--duration", buffer: ".plyr__progress__buffer", loop: ".plyr__progress__loop", volume: ".plyr__volume--display" }, progress: ".plyr__progress", captions: ".plyr__captions", caption: ".plyr__caption" }, classNames: { type: "plyr--{0}", provider: "plyr--{0}", video: "plyr__video-wrapper", embed: "plyr__video-embed", videoFixedRatio: "plyr__video-wrapper--fixed-ratio", embedContainer: "plyr__video-embed__container", poster: "plyr__poster", posterEnabled: "plyr__poster-enabled", ads: "plyr__ads", control: "plyr__control", controlPressed: "plyr__control--pressed", playing: "plyr--playing", paused: "plyr--paused", stopped: "plyr--stopped", loading: "plyr--loading", hover: "plyr--hover", tooltip: "plyr__tooltip", cues: "plyr__cues", marker: "plyr__progress__marker", hidden: "plyr__sr-only", hideControls: "plyr--hide-controls", isTouch: "plyr--is-touch", uiSupported: "plyr--full-ui", noTransition: "plyr--no-transition", display: { time: "plyr__time" }, menu: { value: "plyr__menu__value", badge: "plyr__badge", open: "plyr--menu-open" }, captions: { enabled: "plyr--captions-enabled", active: "plyr--captions-active" }, fullscreen: { enabled: "plyr--fullscreen-enabled", fallback: "plyr--fullscreen-fallback" }, pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" }, airplay: { supported: "plyr--airplay-supported", active: "plyr--airplay-active" }, previewThumbnails: { thumbContainer: "plyr__preview-thumb", thumbContainerShown: "plyr__preview-thumb--is-shown", imageContainer: "plyr__preview-thumb__image-container", timeContainer: "plyr__preview-thumb__time-container", scrubbingContainer: "plyr__preview-scrubbing", scrubbingContainerShown: "plyr__preview-scrubbing--is-shown" } }, attributes: { embed: { provider: "data-plyr-provider", id: "data-plyr-embed-id", hash: "data-plyr-embed-hash" } }, ads: { enabled: false, publisherId: "", tagUrl: "" }, previewThumbnails: { enabled: false, src: "" }, vimeo: { byline: false, portrait: false, title: false, speed: true, transparent: false, customControls: true, referrerPolicy: null, premium: false }, youtube: { rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1, customControls: true, noCookie: false }, mediaMetadata: { title: "", artist: "", album: "", artwork: [] }, markers: { enabled: false, points: [] } }, Ie = "picture-in-picture", $e = "inline", _e = { html5: "html5", youtube: "youtube", vimeo: "vimeo" }, Oe = "audio", je = "video";
        const qe = () => {
        };
        class De {
          constructor(e2 = false) {
            this.enabled = window.console && e2, this.enabled && this.log("Debugging enabled");
          }
          get log() {
            return this.enabled ? Function.prototype.bind.call(console.log, console) : qe;
          }
          get warn() {
            return this.enabled ? Function.prototype.bind.call(console.warn, console) : qe;
          }
          get error() {
            return this.enabled ? Function.prototype.bind.call(console.error, console) : qe;
          }
        }
        class He {
          constructor(t2) {
            e(this, "onChange", () => {
              if (!this.supported) return;
              const e2 = this.player.elements.buttons.fullscreen;
              S.element(e2) && (e2.pressed = this.active);
              const t3 = this.target === this.player.media ? this.target : this.player.elements.container;
              Z.call(this.player, t3, this.active ? "enterfullscreen" : "exitfullscreen", true);
            }), e(this, "toggleFallback", (e2 = false) => {
              var _a, _b;
              if (e2 ? this.scrollPosition = { x: (_a = window.scrollX) != null ? _a : 0, y: (_b = window.scrollY) != null ? _b : 0 } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e2 ? "hidden" : "", R(this.target, this.player.config.classNames.fullscreen.fallback, e2), M.isIos) {
                let t3 = document.head.querySelector('meta[name="viewport"]');
                const i2 = "viewport-fit=cover";
                t3 || (t3 = document.createElement("meta"), t3.setAttribute("name", "viewport"));
                const s2 = S.string(t3.content) && t3.content.includes(i2);
                e2 ? (this.cleanupViewport = !s2, s2 || (t3.content += ",".concat(i2))) : this.cleanupViewport && (t3.content = t3.content.split(",").filter((e3) => e3.trim() !== i2).join(","));
              }
              this.onChange();
            }), e(this, "trapFocus", (e2) => {
              if (M.isIos || M.isIPadOS || !this.active || "Tab" !== e2.key) return;
              const t3 = document.activeElement, i2 = U.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"), [s2] = i2, n2 = i2[i2.length - 1];
              t3 !== n2 || e2.shiftKey ? t3 === s2 && e2.shiftKey && (n2.focus(), e2.preventDefault()) : (s2.focus(), e2.preventDefault());
            }), e(this, "update", () => {
              if (this.supported) {
                let e2;
                e2 = this.forceFallback ? "Fallback (forced)" : He.nativeSupported ? "Native" : "Fallback", this.player.debug.log("".concat(e2, " fullscreen enabled"));
              } else this.player.debug.log("Fullscreen not supported and fallback disabled");
              R(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.supported);
            }), e(this, "enter", () => {
              this.supported && (M.isIos && this.player.config.fullscreen.iosNative ? this.player.isVimeo ? this.player.embed.requestFullscreen() : this.target.webkitEnterFullscreen() : !He.nativeSupported || this.forceFallback ? this.toggleFallback(true) : this.prefix ? S.empty(this.prefix) || this.target["".concat(this.prefix, "Request").concat(this.property)]() : this.target.requestFullscreen({ navigationUI: "hide" }));
            }), e(this, "exit", () => {
              if (this.supported) if (M.isIos && this.player.config.fullscreen.iosNative) this.player.isVimeo ? this.player.embed.exitFullscreen() : this.target.webkitEnterFullscreen(), ie(this.player.play());
              else if (!He.nativeSupported || this.forceFallback) this.toggleFallback(false);
              else if (this.prefix) {
                if (!S.empty(this.prefix)) {
                  const e2 = "moz" === this.prefix ? "Cancel" : "Exit";
                  document["".concat(this.prefix).concat(e2).concat(this.property)]();
                }
              } else (document.cancelFullScreen || document.exitFullscreen).call(document);
            }), e(this, "toggle", () => {
              this.active ? this.exit() : this.enter();
            }), this.player = t2, this.prefix = He.prefix, this.property = He.property, this.scrollPosition = { x: 0, y: 0 }, this.forceFallback = "force" === t2.config.fullscreen.fallback, this.player.elements.fullscreen = t2.config.fullscreen.container && function(e2, t3) {
              const { prototype: i2 } = Element;
              return (i2.closest || function() {
                let e3 = this;
                do {
                  if (V.matches(e3, t3)) return e3;
                  e3 = e3.parentElement || e3.parentNode;
                } while (null !== e3 && 1 === e3.nodeType);
                return null;
              }).call(e2, t3);
            }(this.player.elements.container, t2.config.fullscreen.container), X.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), () => {
              this.onChange();
            }), X.call(this.player, this.player.elements.container, "dblclick", (e2) => {
              S.element(this.player.elements.controls) && this.player.elements.controls.contains(e2.target) || this.player.listeners.proxy(e2, this.toggle, "fullscreen");
            }), X.call(this, this.player.elements.container, "keydown", (e2) => this.trapFocus(e2)), this.update();
          }
          static get nativeSupported() {
            return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
          }
          get useNative() {
            return He.nativeSupported && !this.forceFallback;
          }
          static get prefix() {
            if (S.function(document.exitFullscreen)) return "";
            let e2 = "";
            return ["webkit", "moz", "ms"].some((t2) => !(!S.function(document["".concat(t2, "ExitFullscreen")]) && !S.function(document["".concat(t2, "CancelFullScreen")])) && (e2 = t2, true)), e2;
          }
          static get property() {
            return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
          }
          get supported() {
            return [this.player.config.fullscreen.enabled, this.player.isVideo, He.nativeSupported || this.player.config.fullscreen.fallback, !this.player.isYouTube || He.nativeSupported || !M.isIos || this.player.config.playsinline && !this.player.config.fullscreen.iosNative].every(Boolean);
          }
          get active() {
            if (!this.supported) return false;
            if (!He.nativeSupported || this.forceFallback) return F(this.target, this.player.config.classNames.fullscreen.fallback);
            const e2 = this.prefix ? this.target.getRootNode()["".concat(this.prefix).concat(this.property, "Element")] : this.target.getRootNode().fullscreenElement;
            return e2 && e2.shadowRoot ? e2 === this.target.getRootNode().host : e2 === this.target;
          }
          get target() {
            var _a;
            return M.isIos && this.player.config.fullscreen.iosNative ? this.player.media : (_a = this.player.elements.fullscreen) != null ? _a : this.player.elements.container;
          }
        }
        function Re(e2, t2 = 1) {
          return new Promise((i2, s2) => {
            const n2 = new Image(), a2 = () => {
              delete n2.onload, delete n2.onerror, (n2.naturalWidth >= t2 ? i2 : s2)(n2);
            };
            Object.assign(n2, { onload: a2, onerror: a2, src: e2 });
          });
        }
        const Fe = { addStyleHook() {
          R(this.elements.container, this.config.selectors.container.replace(".", ""), true), R(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
        }, toggleNativeControls(e2 = false) {
          e2 && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
        }, build() {
          if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void Fe.toggleNativeControls.call(this, true);
          S.element(this.elements.controls) || (Pe.inject.call(this), this.listeners.controls()), Fe.toggleNativeControls.call(this), this.isHTML5 && xe.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, Pe.updateVolume.call(this), Pe.timeUpdate.call(this), Pe.durationUpdate.call(this), Fe.checkPlaying.call(this), R(this.elements.container, this.config.classNames.pip.supported, K.pip && this.isHTML5 && this.isVideo), R(this.elements.container, this.config.classNames.airplay.supported, K.airplay && this.isHTML5), R(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = true, setTimeout(() => {
            Z.call(this, this.media, "ready");
          }, 0), Fe.setTitle.call(this), this.poster && Fe.setPoster.call(this, this.poster, false).catch(() => {
          }), this.config.duration && Pe.durationUpdate.call(this), this.config.mediaMetadata && Pe.setMediaMetadata.call(this);
        }, setTitle() {
          let e2 = ve.get("play", this.config);
          if (S.string(this.config.title) && !S.empty(this.config.title) && (e2 += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach((t2) => {
            t2.setAttribute("aria-label", e2);
          }), this.isEmbed) {
            const e3 = B.call(this, "iframe");
            if (!S.element(e3)) return;
            const t2 = S.empty(this.config.title) ? "video" : this.config.title, i2 = ve.get("frameTitle", this.config);
            e3.setAttribute("title", i2.replace("{title}", t2));
          }
        }, togglePoster(e2) {
          R(this.elements.container, this.config.classNames.posterEnabled, e2);
        }, setPoster(e2, t2 = true) {
          return t2 && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e2), this.elements.poster.removeAttribute("hidden"), te.call(this).then(() => Re(e2)).catch((t3) => {
            throw e2 === this.poster && Fe.togglePoster.call(this, false), t3;
          }).then(() => {
            if (e2 !== this.poster) throw new Error("setPoster cancelled by later call to setPoster");
          }).then(() => (Object.assign(this.elements.poster.style, { backgroundImage: "url('".concat(e2, "')"), backgroundSize: "" }), Fe.togglePoster.call(this, true), e2)));
        }, checkPlaying(e2) {
          R(this.elements.container, this.config.classNames.playing, this.playing), R(this.elements.container, this.config.classNames.paused, this.paused), R(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((e3) => {
            Object.assign(e3, { pressed: this.playing }), e3.setAttribute("aria-label", ve.get(this.playing ? "pause" : "play", this.config));
          }), S.event(e2) && "timeupdate" === e2.type || Fe.toggleControls.call(this);
        }, checkLoading(e2) {
          this.loading = ["stalled", "waiting"].includes(e2.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(() => {
            R(this.elements.container, this.config.classNames.loading, this.loading), Fe.toggleControls.call(this);
          }, this.loading ? 250 : 0);
        }, toggleControls(e2) {
          const { controls: t2 } = this.elements;
          if (t2 && this.config.hideControls) {
            const i2 = this.touch && this.lastSeekTime + 2e3 > Date.now();
            this.toggleControls(Boolean(e2 || this.loading || this.paused || t2.pressed || t2.hover || i2));
          }
        }, migrateStyles() {
          Object.values(__spreadValues({}, this.media.style)).filter((e2) => !S.empty(e2) && S.string(e2) && e2.startsWith("--plyr")).forEach((e2) => {
            this.elements.container.style.setProperty(e2, this.media.style.getPropertyValue(e2)), this.media.style.removeProperty(e2);
          }), S.empty(this.media.style) && this.media.removeAttribute("style");
        } };
        class Ve {
          constructor(t2) {
            e(this, "firstTouch", () => {
              const { player: e2 } = this, { elements: t3 } = e2;
              e2.touch = true, R(t3.container, e2.config.classNames.isTouch, true);
            }), e(this, "global", (e2 = true) => {
              const { player: t3 } = this;
              t3.config.keyboard.global && Q.call(t3, window, "keydown keyup", this.handleKey, e2, false), Q.call(t3, document.body, "click", this.toggleMenu, e2), G.call(t3, document.body, "touchstart", this.firstTouch);
            }), e(this, "container", () => {
              const { player: e2 } = this, { config: t3, elements: i2, timers: s2 } = e2;
              !t3.keyboard.global && t3.keyboard.focused && X.call(e2, i2.container, "keydown keyup", this.handleKey, false), X.call(e2, i2.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (t4) => {
                const { controls: n3 } = i2;
                n3 && "enterfullscreen" === t4.type && (n3.pressed = false, n3.hover = false);
                let a3 = 0;
                ["touchstart", "touchmove", "mousemove"].includes(t4.type) && (Fe.toggleControls.call(e2, true), a3 = e2.touch ? 3e3 : 2e3), clearTimeout(s2.controls), s2.controls = setTimeout(() => Fe.toggleControls.call(e2, false), a3);
              });
              const n2 = () => {
                if (!e2.isVimeo || e2.config.vimeo.premium) return;
                const t4 = i2.wrapper, { active: s3 } = e2.fullscreen, [n3, a3] = ce.call(e2), l2 = ae("aspect-ratio: ".concat(n3, " / ").concat(a3));
                if (!s3) return void (l2 ? (t4.style.width = null, t4.style.height = null) : (t4.style.maxWidth = null, t4.style.margin = null));
                const [r2, o2] = [Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)], c2 = r2 / o2 > n3 / a3;
                l2 ? (t4.style.width = c2 ? "auto" : "100%", t4.style.height = c2 ? "100%" : "auto") : (t4.style.maxWidth = c2 ? o2 / a3 * n3 + "px" : null, t4.style.margin = c2 ? "0 auto" : null);
              }, a2 = () => {
                clearTimeout(s2.resized), s2.resized = setTimeout(n2, 50);
              };
              X.call(e2, i2.container, "enterfullscreen exitfullscreen", (t4) => {
                const { target: s3 } = e2.fullscreen;
                if (s3 !== i2.container) return;
                if (!e2.isEmbed && S.empty(e2.config.ratio)) return;
                n2();
                ("enterfullscreen" === t4.type ? X : J).call(e2, window, "resize", a2);
              });
            }), e(this, "media", () => {
              const { player: e2 } = this, { elements: t3 } = e2;
              if (X.call(e2, e2.media, "timeupdate seeking seeked", (t4) => Pe.timeUpdate.call(e2, t4)), X.call(e2, e2.media, "durationchange loadeddata loadedmetadata", (t4) => Pe.durationUpdate.call(e2, t4)), X.call(e2, e2.media, "ended", () => {
                e2.isHTML5 && e2.isVideo && e2.config.resetOnEnd && (e2.restart(), e2.pause());
              }), X.call(e2, e2.media, "progress playing seeking seeked", (t4) => Pe.updateProgress.call(e2, t4)), X.call(e2, e2.media, "volumechange", (t4) => Pe.updateVolume.call(e2, t4)), X.call(e2, e2.media, "playing play pause ended emptied timeupdate", (t4) => Fe.checkPlaying.call(e2, t4)), X.call(e2, e2.media, "waiting canplay seeked playing", (t4) => Fe.checkLoading.call(e2, t4)), e2.supported.ui && e2.config.clickToPlay && !e2.isAudio) {
                const i3 = B.call(e2, ".".concat(e2.config.classNames.video));
                if (!S.element(i3)) return;
                X.call(e2, t3.container, "click", (s2) => {
                  ([t3.container, i3].includes(s2.target) || i3.contains(s2.target)) && (e2.touch && e2.config.hideControls || (e2.ended ? (this.proxy(s2, e2.restart, "restart"), this.proxy(s2, () => {
                    ie(e2.play());
                  }, "play")) : this.proxy(s2, () => {
                    ie(e2.togglePlay());
                  }, "play")));
                });
              }
              e2.supported.ui && e2.config.disableContextMenu && X.call(e2, t3.wrapper, "contextmenu", (e3) => {
                e3.preventDefault();
              }, false), X.call(e2, e2.media, "volumechange", () => {
                e2.storage.set({ volume: e2.volume, muted: e2.muted });
              }), X.call(e2, e2.media, "ratechange", () => {
                Pe.updateSetting.call(e2, "speed"), e2.storage.set({ speed: e2.speed });
              }), X.call(e2, e2.media, "qualitychange", (t4) => {
                Pe.updateSetting.call(e2, "quality", null, t4.detail.quality);
              }), X.call(e2, e2.media, "ready qualitychange", () => {
                Pe.setDownloadUrl.call(e2);
              });
              const i2 = e2.config.events.concat(["keyup", "keydown"]).join(" ");
              X.call(e2, e2.media, i2, (i3) => {
                let { detail: s2 = {} } = i3;
                "error" === i3.type && (s2 = e2.media.error), Z.call(e2, t3.container, i3.type, true, s2);
              });
            }), e(this, "proxy", (e2, t3, i2) => {
              const { player: s2 } = this, n2 = s2.config.listeners[i2];
              let a2 = true;
              S.function(n2) && (a2 = n2.call(s2, e2)), false !== a2 && S.function(t3) && t3.call(s2, e2);
            }), e(this, "bind", (e2, t3, i2, s2, n2 = true) => {
              const { player: a2 } = this, l2 = a2.config.listeners[s2], r2 = S.function(l2);
              X.call(a2, e2, t3, (e3) => this.proxy(e3, i2, s2), n2 && !r2);
            }), e(this, "controls", () => {
              const { player: e2 } = this, { elements: t3 } = e2, i2 = M.isIE ? "change" : "input";
              if (t3.buttons.play && Array.from(t3.buttons.play).forEach((t4) => {
                this.bind(t4, "click", () => {
                  ie(e2.togglePlay());
                }, "play");
              }), this.bind(t3.buttons.restart, "click", e2.restart, "restart"), this.bind(t3.buttons.rewind, "click", () => {
                e2.lastSeekTime = Date.now(), e2.rewind();
              }, "rewind"), this.bind(t3.buttons.fastForward, "click", () => {
                e2.lastSeekTime = Date.now(), e2.forward();
              }, "fastForward"), this.bind(t3.buttons.mute, "click", () => {
                e2.muted = !e2.muted;
              }, "mute"), this.bind(t3.buttons.captions, "click", () => e2.toggleCaptions()), this.bind(t3.buttons.download, "click", () => {
                Z.call(e2, e2.media, "download");
              }, "download"), this.bind(t3.buttons.fullscreen, "click", () => {
                e2.fullscreen.toggle();
              }, "fullscreen"), this.bind(t3.buttons.pip, "click", () => {
                e2.pip = "toggle";
              }, "pip"), this.bind(t3.buttons.airplay, "click", e2.airplay, "airplay"), this.bind(t3.buttons.settings, "click", (t4) => {
                t4.stopPropagation(), t4.preventDefault(), Pe.toggleMenu.call(e2, t4);
              }, null, false), this.bind(t3.buttons.settings, "keyup", (t4) => {
                [" ", "Enter"].includes(t4.key) && ("Enter" !== t4.key ? (t4.preventDefault(), t4.stopPropagation(), Pe.toggleMenu.call(e2, t4)) : Pe.focusFirstMenuItem.call(e2, null, true));
              }, null, false), this.bind(t3.settings.menu, "keydown", (t4) => {
                "Escape" === t4.key && Pe.toggleMenu.call(e2, t4);
              }), this.bind(t3.inputs.seek, "mousedown mousemove", (e3) => {
                const i3 = t3.progress.getBoundingClientRect(), s2 = 100 / i3.width * (e3.pageX - i3.left);
                e3.currentTarget.setAttribute("seek-value", s2);
              }), this.bind(t3.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (t4) => {
                const i3 = t4.currentTarget, s2 = "play-on-seeked";
                if (S.keyboardEvent(t4) && !["ArrowLeft", "ArrowRight"].includes(t4.key)) return;
                e2.lastSeekTime = Date.now();
                const n2 = i3.hasAttribute(s2), a2 = ["mouseup", "touchend", "keyup"].includes(t4.type);
                n2 && a2 ? (i3.removeAttribute(s2), ie(e2.play())) : !a2 && e2.playing && (i3.setAttribute(s2, ""), e2.pause());
              }), M.isIos) {
                const t4 = U.call(e2, 'input[type="range"]');
                Array.from(t4).forEach((e3) => this.bind(e3, i2, (e4) => P(e4.target)));
              }
              this.bind(t3.inputs.seek, i2, (t4) => {
                const i3 = t4.currentTarget;
                let s2 = i3.getAttribute("seek-value");
                S.empty(s2) && (s2 = i3.value), i3.removeAttribute("seek-value"), e2.currentTime = s2 / i3.max * e2.duration;
              }, "seek"), this.bind(t3.progress, "mouseenter mouseleave mousemove", (t4) => Pe.updateSeekTooltip.call(e2, t4)), this.bind(t3.progress, "mousemove touchmove", (t4) => {
                const { previewThumbnails: i3 } = e2;
                i3 && i3.loaded && i3.startMove(t4);
              }), this.bind(t3.progress, "mouseleave touchend click", () => {
                const { previewThumbnails: t4 } = e2;
                t4 && t4.loaded && t4.endMove(false, true);
              }), this.bind(t3.progress, "mousedown touchstart", (t4) => {
                const { previewThumbnails: i3 } = e2;
                i3 && i3.loaded && i3.startScrubbing(t4);
              }), this.bind(t3.progress, "mouseup touchend", (t4) => {
                const { previewThumbnails: i3 } = e2;
                i3 && i3.loaded && i3.endScrubbing(t4);
              }), M.isWebKit && Array.from(U.call(e2, 'input[type="range"]')).forEach((t4) => {
                this.bind(t4, "input", (t5) => Pe.updateRangeFill.call(e2, t5.target));
              }), e2.config.toggleInvert && !S.element(t3.display.duration) && this.bind(t3.display.currentTime, "click", () => {
                0 !== e2.currentTime && (e2.config.invertTime = !e2.config.invertTime, Pe.timeUpdate.call(e2));
              }), this.bind(t3.inputs.volume, i2, (t4) => {
                e2.volume = t4.target.value;
              }, "volume"), this.bind(t3.controls, "mouseenter mouseleave", (i3) => {
                t3.controls.hover = !e2.touch && "mouseenter" === i3.type;
              }), t3.fullscreen && Array.from(t3.fullscreen.children).filter((e3) => !e3.contains(t3.container)).forEach((i3) => {
                this.bind(i3, "mouseenter mouseleave", (i4) => {
                  t3.controls && (t3.controls.hover = !e2.touch && "mouseenter" === i4.type);
                });
              }), this.bind(t3.controls, "mousedown mouseup touchstart touchend touchcancel", (e3) => {
                t3.controls.pressed = ["mousedown", "touchstart"].includes(e3.type);
              }), this.bind(t3.controls, "focusin", () => {
                const { config: i3, timers: s2 } = e2;
                R(t3.controls, i3.classNames.noTransition, true), Fe.toggleControls.call(e2, true), setTimeout(() => {
                  R(t3.controls, i3.classNames.noTransition, false);
                }, 0);
                const n2 = this.touch ? 3e3 : 4e3;
                clearTimeout(s2.controls), s2.controls = setTimeout(() => Fe.toggleControls.call(e2, false), n2);
              }), this.bind(t3.inputs.volume, "wheel", (t4) => {
                const i3 = t4.webkitDirectionInvertedFromDevice, [s2, n2] = [t4.deltaX, -t4.deltaY].map((e3) => i3 ? -e3 : e3), a2 = Math.sign(Math.abs(s2) > Math.abs(n2) ? s2 : n2);
                e2.increaseVolume(a2 / 50);
                const { volume: l2 } = e2.media;
                (1 === a2 && l2 < 1 || -1 === a2 && l2 > 0) && t4.preventDefault();
              }, "volume", false);
            }), this.player = t2, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.firstTouch = this.firstTouch.bind(this);
          }
          handleKey(e2) {
            const { player: t2 } = this, { elements: i2 } = t2, { key: s2, type: n2, altKey: a2, ctrlKey: l2, metaKey: r2, shiftKey: o2 } = e2, c2 = "keydown" === n2, u2 = c2 && s2 === this.lastKey;
            if (a2 || l2 || r2 || o2) return;
            if (!s2) return;
            if (c2) {
              const n3 = document.activeElement;
              if (S.element(n3)) {
                const { editable: s3 } = t2.config.selectors, { seek: a3 } = i2.inputs;
                if (n3 !== a3 && V(n3, s3)) return;
                if (" " === e2.key && V(n3, 'button, [role^="menuitem"]')) return;
              }
              switch ([" ", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "c", "f", "k", "l", "m"].includes(s2) && (e2.preventDefault(), e2.stopPropagation()), s2) {
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                  u2 || (h2 = parseInt(s2, 10), t2.currentTime = t2.duration / 10 * h2);
                  break;
                case " ":
                case "k":
                  u2 || ie(t2.togglePlay());
                  break;
                case "ArrowUp":
                  t2.increaseVolume(0.1);
                  break;
                case "ArrowDown":
                  t2.decreaseVolume(0.1);
                  break;
                case "m":
                  u2 || (t2.muted = !t2.muted);
                  break;
                case "ArrowRight":
                  t2.forward();
                  break;
                case "ArrowLeft":
                  t2.rewind();
                  break;
                case "f":
                  t2.fullscreen.toggle();
                  break;
                case "c":
                  u2 || t2.toggleCaptions();
                  break;
                case "l":
                  t2.loop = !t2.loop;
              }
              "Escape" === s2 && !t2.fullscreen.usingNative && t2.fullscreen.active && t2.fullscreen.toggle(), this.lastKey = s2;
            } else this.lastKey = null;
            var h2;
          }
          toggleMenu(e2) {
            Pe.toggleMenu.call(this.player, e2);
          }
        }
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
        var Ue = function(e2, t2) {
          return e2(t2 = { exports: {} }, t2.exports), t2.exports;
        }(function(e2, t2) {
          e2.exports = function() {
            var e3 = function() {
            }, t3 = {}, i2 = {}, s2 = {};
            function n2(e4, t4) {
              e4 = e4.push ? e4 : [e4];
              var n3, a3, l3, r3 = [], o3 = e4.length, c3 = o3;
              for (n3 = function(e5, i3) {
                i3.length && r3.push(e5), --c3 || t4(r3);
              }; o3--; ) a3 = e4[o3], (l3 = i2[a3]) ? n3(a3, l3) : (s2[a3] = s2[a3] || []).push(n3);
            }
            function a2(e4, t4) {
              if (e4) {
                var n3 = s2[e4];
                if (i2[e4] = t4, n3) for (; n3.length; ) n3[0](e4, t4), n3.splice(0, 1);
              }
            }
            function l2(t4, i3) {
              t4.call && (t4 = { success: t4 }), i3.length ? (t4.error || e3)(i3) : (t4.success || e3)(t4);
            }
            function r2(t4, i3, s3, n3) {
              var a3, l3, o3 = document, c3 = s3.async, u2 = (s3.numRetries || 0) + 1, h2 = s3.before || e3, d2 = t4.replace(/[\?|#].*$/, ""), m2 = t4.replace(/^(css|img)!/, "");
              n3 = n3 || 0, /(^css!|\.css$)/.test(d2) ? ((l3 = o3.createElement("link")).rel = "stylesheet", l3.href = m2, (a3 = "hideFocus" in l3) && l3.relList && (a3 = 0, l3.rel = "preload", l3.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d2) ? (l3 = o3.createElement("img")).src = m2 : ((l3 = o3.createElement("script")).src = t4, l3.async = void 0 === c3 || c3), l3.onload = l3.onerror = l3.onbeforeload = function(e4) {
                var o4 = e4.type[0];
                if (a3) try {
                  l3.sheet.cssText.length || (o4 = "e");
                } catch (e5) {
                  18 != e5.code && (o4 = "e");
                }
                if ("e" == o4) {
                  if ((n3 += 1) < u2) return r2(t4, i3, s3, n3);
                } else if ("preload" == l3.rel && "style" == l3.as) return l3.rel = "stylesheet";
                i3(t4, o4, e4.defaultPrevented);
              }, false !== h2(t4, l3) && o3.head.appendChild(l3);
            }
            function o2(e4, t4, i3) {
              var s3, n3, a3 = (e4 = e4.push ? e4 : [e4]).length, l3 = a3, o3 = [];
              for (s3 = function(e5, i4, s4) {
                if ("e" == i4 && o3.push(e5), "b" == i4) {
                  if (!s4) return;
                  o3.push(e5);
                }
                --a3 || t4(o3);
              }, n3 = 0; n3 < l3; n3++) r2(e4[n3], s3, i3);
            }
            function c2(e4, i3, s3) {
              var n3, r3;
              if (i3 && i3.trim && (n3 = i3), r3 = (n3 ? s3 : i3) || {}, n3) {
                if (n3 in t3) throw "LoadJS";
                t3[n3] = true;
              }
              function c3(t4, i4) {
                o2(e4, function(e5) {
                  l2(r3, e5), t4 && l2({ success: t4, error: i4 }, e5), a2(n3, e5);
                }, r3);
              }
              if (r3.returnPromise) return new Promise(c3);
              c3();
            }
            return c2.ready = function(e4, t4) {
              return n2(e4, function(e5) {
                l2(t4, e5);
              }), c2;
            }, c2.done = function(e4) {
              a2(e4, []);
            }, c2.reset = function() {
              t3 = {}, i2 = {}, s2 = {};
            }, c2.isDefined = function(e4) {
              return e4 in t3;
            }, c2;
          }();
        });
        function Be(e2) {
          return new Promise((t2, i2) => {
            Ue(e2, { success: t2, error: i2 });
          });
        }
        function We(e2) {
          e2 && !this.embed.hasPlayed && (this.embed.hasPlayed = true), this.media.paused === e2 && (this.media.paused = !e2, Z.call(this, this.media, e2 ? "play" : "pause"));
        }
        const ze = { setup() {
          const e2 = this;
          R(e2.elements.wrapper, e2.config.classNames.embed, true), e2.options.speed = e2.config.speed.options, ue.call(e2), S.object(window.Vimeo) ? ze.ready.call(e2) : Be(e2.config.urls.vimeo.sdk).then(() => {
            ze.ready.call(e2);
          }).catch((t2) => {
            e2.debug.warn("Vimeo SDK (player.js) failed to load", t2);
          });
        }, ready() {
          const e2 = this, t2 = e2.config.vimeo, _a = t2, { premium: i2, referrerPolicy: s2 } = _a, n2 = __objRest(_a, ["premium", "referrerPolicy"]);
          let a2 = e2.media.getAttribute("src"), l2 = "";
          S.empty(a2) ? (a2 = e2.media.getAttribute(e2.config.attributes.embed.id), l2 = e2.media.getAttribute(e2.config.attributes.embed.hash)) : l2 = function(e3) {
            const t3 = e3.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);
            return t3 && 5 === t3.length ? t3[4] : null;
          }(a2);
          const r2 = l2 ? { h: l2 } : {};
          i2 && Object.assign(n2, { controls: false, sidedock: false });
          const o2 = Ne(__spreadValues(__spreadValues({ loop: e2.config.loop.active, autoplay: e2.autoplay, muted: e2.muted, gesture: "media", playsinline: e2.config.playsinline }, r2), n2)), c2 = (u2 = a2, S.empty(u2) ? null : S.number(Number(u2)) ? u2 : u2.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : u2);
          var u2;
          const h2 = $("iframe"), d2 = me(e2.config.urls.vimeo.iframe, c2, o2);
          if (h2.setAttribute("src", d2), h2.setAttribute("allowfullscreen", ""), h2.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; ")), S.empty(s2) || h2.setAttribute("referrerPolicy", s2), i2 || !t2.customControls) h2.setAttribute("data-poster", e2.poster), e2.media = q(h2, e2.media);
          else {
            const t3 = $("div", { class: e2.config.classNames.embedContainer, "data-poster": e2.poster });
            t3.appendChild(h2), e2.media = q(t3, e2.media);
          }
          t2.customControls || Te(me(e2.config.urls.vimeo.api, d2)).then((t3) => {
            !S.empty(t3) && t3.thumbnail_url && Fe.setPoster.call(e2, t3.thumbnail_url).catch(() => {
            });
          }), e2.embed = new window.Vimeo.Player(h2, { autopause: e2.config.autopause, muted: e2.muted }), e2.media.paused = true, e2.media.currentTime = 0, e2.supported.ui && e2.embed.disableTextTrack(), e2.media.play = () => (We.call(e2, true), e2.embed.play()), e2.media.pause = () => (We.call(e2, false), e2.embed.pause()), e2.media.stop = () => {
            e2.pause(), e2.currentTime = 0;
          };
          let { currentTime: m2 } = e2.media;
          Object.defineProperty(e2.media, "currentTime", { get: () => m2, set(t3) {
            const { embed: i3, media: s3, paused: n3, volume: a3 } = e2, l3 = n3 && !i3.hasPlayed;
            s3.seeking = true, Z.call(e2, s3, "seeking"), Promise.resolve(l3 && i3.setVolume(0)).then(() => i3.setCurrentTime(t3)).then(() => l3 && i3.pause()).then(() => l3 && i3.setVolume(a3)).catch(() => {
            });
          } });
          let p2 = e2.config.speed.selected;
          Object.defineProperty(e2.media, "playbackRate", { get: () => p2, set(t3) {
            e2.embed.setPlaybackRate(t3).then(() => {
              p2 = t3, Z.call(e2, e2.media, "ratechange");
            }).catch(() => {
              e2.options.speed = [1];
            });
          } });
          let { volume: g2 } = e2.config;
          Object.defineProperty(e2.media, "volume", { get: () => g2, set(t3) {
            e2.embed.setVolume(t3).then(() => {
              g2 = t3, Z.call(e2, e2.media, "volumechange");
            });
          } });
          let { muted: f2 } = e2.config;
          Object.defineProperty(e2.media, "muted", { get: () => f2, set(t3) {
            const i3 = !!S.boolean(t3) && t3;
            e2.embed.setMuted(!!i3 || e2.config.muted).then(() => {
              f2 = i3, Z.call(e2, e2.media, "volumechange");
            });
          } });
          let y2, { loop: b2 } = e2.config;
          Object.defineProperty(e2.media, "loop", { get: () => b2, set(t3) {
            const i3 = S.boolean(t3) ? t3 : e2.config.loop.active;
            e2.embed.setLoop(i3).then(() => {
              b2 = i3;
            });
          } }), e2.embed.getVideoUrl().then((t3) => {
            y2 = t3, Pe.setDownloadUrl.call(e2);
          }).catch((e3) => {
            this.debug.warn(e3);
          }), Object.defineProperty(e2.media, "currentSrc", { get: () => y2 }), Object.defineProperty(e2.media, "ended", { get: () => e2.currentTime === e2.duration }), Promise.all([e2.embed.getVideoWidth(), e2.embed.getVideoHeight()]).then((t3) => {
            const [i3, s3] = t3;
            e2.embed.ratio = he(i3, s3), ue.call(this);
          }), e2.embed.setAutopause(e2.config.autopause).then((t3) => {
            e2.config.autopause = t3;
          }), e2.embed.getVideoTitle().then((t3) => {
            e2.config.title = t3, Fe.setTitle.call(this);
          }), e2.embed.getCurrentTime().then((t3) => {
            m2 = t3, Z.call(e2, e2.media, "timeupdate");
          }), e2.embed.getDuration().then((t3) => {
            e2.media.duration = t3, Z.call(e2, e2.media, "durationchange");
          }), e2.embed.getTextTracks().then((t3) => {
            e2.media.textTracks = t3, xe.setup.call(e2);
          }), e2.embed.on("cuechange", ({ cues: t3 = [] }) => {
            const i3 = t3.map((e3) => function(e4) {
              const t4 = document.createDocumentFragment(), i4 = document.createElement("div");
              return t4.appendChild(i4), i4.innerHTML = e4, t4.firstChild.innerText;
            }(e3.text));
            xe.updateCues.call(e2, i3);
          }), e2.embed.on("loaded", () => {
            if (e2.embed.getPaused().then((t3) => {
              We.call(e2, !t3), t3 || Z.call(e2, e2.media, "playing");
            }), S.element(e2.embed.element) && e2.supported.ui) {
              e2.embed.element.setAttribute("tabindex", -1);
            }
          }), e2.embed.on("bufferstart", () => {
            Z.call(e2, e2.media, "waiting");
          }), e2.embed.on("bufferend", () => {
            Z.call(e2, e2.media, "playing");
          }), e2.embed.on("play", () => {
            We.call(e2, true), Z.call(e2, e2.media, "playing");
          }), e2.embed.on("pause", () => {
            We.call(e2, false);
          }), e2.embed.on("timeupdate", (t3) => {
            e2.media.seeking = false, m2 = t3.seconds, Z.call(e2, e2.media, "timeupdate");
          }), e2.embed.on("progress", (t3) => {
            e2.media.buffered = t3.percent, Z.call(e2, e2.media, "progress"), 1 === parseInt(t3.percent, 10) && Z.call(e2, e2.media, "canplaythrough"), e2.embed.getDuration().then((t4) => {
              t4 !== e2.media.duration && (e2.media.duration = t4, Z.call(e2, e2.media, "durationchange"));
            });
          }), e2.embed.on("seeked", () => {
            e2.media.seeking = false, Z.call(e2, e2.media, "seeked");
          }), e2.embed.on("ended", () => {
            e2.media.paused = true, Z.call(e2, e2.media, "ended");
          }), e2.embed.on("error", (t3) => {
            e2.media.error = t3, Z.call(e2, e2.media, "error");
          }), t2.customControls && setTimeout(() => Fe.build.call(e2), 0);
        } };
        function Ke(e2) {
          e2 && !this.embed.hasPlayed && (this.embed.hasPlayed = true), this.media.paused === e2 && (this.media.paused = !e2, Z.call(this, this.media, e2 ? "play" : "pause"));
        }
        function Ye(e2) {
          return e2.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0;
        }
        const Qe = { setup() {
          if (R(this.elements.wrapper, this.config.classNames.embed, true), S.object(window.YT) && S.function(window.YT.Player)) Qe.ready.call(this);
          else {
            const e2 = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = () => {
              S.function(e2) && e2(), Qe.ready.call(this);
            }, Be(this.config.urls.youtube.sdk).catch((e3) => {
              this.debug.warn("YouTube API failed to load", e3);
            });
          }
        }, getTitle(e2) {
          Te(me(this.config.urls.youtube.api, e2)).then((e3) => {
            if (S.object(e3)) {
              const { title: t2, height: i2, width: s2 } = e3;
              this.config.title = t2, Fe.setTitle.call(this), this.embed.ratio = he(s2, i2);
            }
            ue.call(this);
          }).catch(() => {
            ue.call(this);
          });
        }, ready() {
          const e2 = this, t2 = e2.config.youtube, i2 = e2.media && e2.media.getAttribute("id");
          if (!S.empty(i2) && i2.startsWith("youtube-")) return;
          let s2 = e2.media.getAttribute("src");
          S.empty(s2) && (s2 = e2.media.getAttribute(this.config.attributes.embed.id));
          const n2 = (a2 = s2, S.empty(a2) ? null : a2.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : a2);
          var a2;
          const l2 = $("div", { id: "".concat(e2.provider, "-").concat(Math.floor(1e4 * Math.random())), "data-poster": t2.customControls ? e2.poster : void 0 });
          if (e2.media = q(l2, e2.media), t2.customControls) {
            const t3 = (e3) => "https://i.ytimg.com/vi/".concat(n2, "/").concat(e3, "default.jpg");
            Re(t3("maxres"), 121).catch(() => Re(t3("sd"), 121)).catch(() => Re(t3("hq"))).then((t4) => Fe.setPoster.call(e2, t4.src)).then((t4) => {
              t4.includes("maxres") || (e2.elements.poster.style.backgroundSize = "cover");
            }).catch(() => {
            });
          }
          e2.embed = new window.YT.Player(e2.media, { videoId: n2, host: Ye(t2), playerVars: x({}, { autoplay: e2.config.autoplay ? 1 : 0, hl: e2.config.hl, controls: e2.supported.ui && t2.customControls ? 0 : 1, disablekb: 1, playsinline: e2.config.playsinline && !e2.config.fullscreen.iosNative ? 1 : 0, cc_load_policy: e2.captions.active ? 1 : 0, cc_lang_pref: e2.config.captions.language, widget_referrer: window ? window.location.href : null }, t2), events: { onError(t3) {
            if (!e2.media.error) {
              const i3 = t3.data, s3 = { 2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.", 5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.", 100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.", 101: "The owner of the requested video does not allow it to be played in embedded players.", 150: "The owner of the requested video does not allow it to be played in embedded players." }[i3] || "An unknown error occurred";
              e2.media.error = { code: i3, message: s3 }, Z.call(e2, e2.media, "error");
            }
          }, onPlaybackRateChange(t3) {
            const i3 = t3.target;
            e2.media.playbackRate = i3.getPlaybackRate(), Z.call(e2, e2.media, "ratechange");
          }, onReady(i3) {
            if (S.function(e2.media.play)) return;
            const s3 = i3.target;
            Qe.getTitle.call(e2, n2), e2.media.play = () => {
              Ke.call(e2, true), s3.playVideo();
            }, e2.media.pause = () => {
              Ke.call(e2, false), s3.pauseVideo();
            }, e2.media.stop = () => {
              s3.stopVideo();
            }, e2.media.duration = s3.getDuration(), e2.media.paused = true, e2.media.currentTime = 0, Object.defineProperty(e2.media, "currentTime", { get: () => Number(s3.getCurrentTime()), set(t3) {
              e2.paused && !e2.embed.hasPlayed && e2.embed.mute(), e2.media.seeking = true, Z.call(e2, e2.media, "seeking"), s3.seekTo(t3);
            } }), Object.defineProperty(e2.media, "playbackRate", { get: () => s3.getPlaybackRate(), set(e3) {
              s3.setPlaybackRate(e3);
            } });
            let { volume: a3 } = e2.config;
            Object.defineProperty(e2.media, "volume", { get: () => a3, set(t3) {
              a3 = t3, s3.setVolume(100 * a3), Z.call(e2, e2.media, "volumechange");
            } });
            let { muted: l3 } = e2.config;
            Object.defineProperty(e2.media, "muted", { get: () => l3, set(t3) {
              const i4 = S.boolean(t3) ? t3 : l3;
              l3 = i4, s3[i4 ? "mute" : "unMute"](), s3.setVolume(100 * a3), Z.call(e2, e2.media, "volumechange");
            } }), Object.defineProperty(e2.media, "currentSrc", { get: () => s3.getVideoUrl() }), Object.defineProperty(e2.media, "ended", { get: () => e2.currentTime === e2.duration });
            const r2 = s3.getAvailablePlaybackRates();
            e2.options.speed = r2.filter((t3) => e2.config.speed.options.includes(t3)), e2.supported.ui && t2.customControls && e2.media.setAttribute("tabindex", -1), Z.call(e2, e2.media, "timeupdate"), Z.call(e2, e2.media, "durationchange"), clearInterval(e2.timers.buffering), e2.timers.buffering = setInterval(() => {
              e2.media.buffered = s3.getVideoLoadedFraction(), (null === e2.media.lastBuffered || e2.media.lastBuffered < e2.media.buffered) && Z.call(e2, e2.media, "progress"), e2.media.lastBuffered = e2.media.buffered, 1 === e2.media.buffered && (clearInterval(e2.timers.buffering), Z.call(e2, e2.media, "canplaythrough"));
            }, 200), t2.customControls && setTimeout(() => Fe.build.call(e2), 50);
          }, onStateChange(i3) {
            const s3 = i3.target;
            clearInterval(e2.timers.playing);
            switch (e2.media.seeking && [1, 2].includes(i3.data) && (e2.media.seeking = false, Z.call(e2, e2.media, "seeked")), i3.data) {
              case -1:
                Z.call(e2, e2.media, "timeupdate"), e2.media.buffered = s3.getVideoLoadedFraction(), Z.call(e2, e2.media, "progress");
                break;
              case 0:
                Ke.call(e2, false), e2.media.loop ? (s3.stopVideo(), s3.playVideo()) : Z.call(e2, e2.media, "ended");
                break;
              case 1:
                t2.customControls && !e2.config.autoplay && e2.media.paused && !e2.embed.hasPlayed ? e2.media.pause() : (Ke.call(e2, true), Z.call(e2, e2.media, "playing"), e2.timers.playing = setInterval(() => {
                  Z.call(e2, e2.media, "timeupdate");
                }, 50), e2.media.duration !== s3.getDuration() && (e2.media.duration = s3.getDuration(), Z.call(e2, e2.media, "durationchange")));
                break;
              case 2:
                e2.muted || e2.embed.unMute(), Ke.call(e2, false);
                break;
              case 3:
                Z.call(e2, e2.media, "waiting");
            }
            Z.call(e2, e2.elements.container, "statechange", false, { code: i3.data });
          } } });
        } }, Xe = { setup() {
          this.media ? (R(this.elements.container, this.config.classNames.type.replace("{0}", this.type), true), R(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), true), this.isEmbed && R(this.elements.container, this.config.classNames.type.replace("{0}", "video"), true), this.isVideo && (this.elements.wrapper = $("div", { class: this.config.classNames.video }), L(this.media, this.elements.wrapper), this.elements.poster = $("div", { class: this.config.classNames.poster }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? de.setup.call(this) : this.isYouTube ? Qe.setup.call(this) : this.isVimeo && ze.setup.call(this)) : this.debug.warn("No media element found!");
        } };
        class Je {
          constructor(t2) {
            e(this, "load", () => {
              this.enabled && (S.object(window.google) && S.object(window.google.ima) ? this.ready() : Be(this.player.config.urls.googleIMA.sdk).then(() => {
                this.ready();
              }).catch(() => {
                this.trigger("error", new Error("Google IMA SDK failed to load"));
              }));
            }), e(this, "ready", () => {
              var e2;
              this.enabled || ((e2 = this).manager && e2.manager.destroy(), e2.elements.displayContainer && e2.elements.displayContainer.destroy(), e2.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(() => {
                this.clearSafetyTimer("onAdsManagerLoaded()");
              }), this.listeners(), this.setupIMA();
            }), e(this, "setupIMA", () => {
              this.elements.container = $("div", { class: this.player.config.classNames.ads }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (e2) => this.onAdsManagerLoaded(e2), false), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e2) => this.onAdError(e2), false), this.requestAds();
            }), e(this, "requestAds", () => {
              const { container: e2 } = this.player.elements;
              try {
                const t3 = new google.ima.AdsRequest();
                t3.adTagUrl = this.tagUrl, t3.linearAdSlotWidth = e2.offsetWidth, t3.linearAdSlotHeight = e2.offsetHeight, t3.nonLinearAdSlotWidth = e2.offsetWidth, t3.nonLinearAdSlotHeight = e2.offsetHeight, t3.forceNonLinearFullSlot = false, t3.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t3);
              } catch (e3) {
                this.onAdError(e3);
              }
            }), e(this, "pollCountdown", (e2 = false) => {
              if (!e2) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
              this.countdownTimer = setInterval(() => {
                const e3 = Ee(Math.max(this.manager.getRemainingTime(), 0)), t3 = "".concat(ve.get("advertisement", this.player.config), " - ").concat(e3);
                this.elements.container.setAttribute("data-badge-text", t3);
              }, 100);
            }), e(this, "onAdsManagerLoaded", (e2) => {
              if (!this.enabled) return;
              const t3 = new google.ima.AdsRenderingSettings();
              t3.restoreCustomPlaybackStateOnAdBreakComplete = true, t3.enablePreloading = true, this.manager = e2.getAdsManager(this.player, t3), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e3) => this.onAdError(e3)), Object.keys(google.ima.AdEvent.Type).forEach((e3) => {
                this.manager.addEventListener(google.ima.AdEvent.Type[e3], (e4) => this.onAdEvent(e4));
              }), this.trigger("loaded");
            }), e(this, "addCuePoints", () => {
              S.empty(this.cuePoints) || this.cuePoints.forEach((e2) => {
                if (0 !== e2 && -1 !== e2 && e2 < this.player.duration) {
                  const t3 = this.player.elements.progress;
                  if (S.element(t3)) {
                    const i2 = 100 / this.player.duration * e2, s2 = $("span", { class: this.player.config.classNames.cues });
                    s2.style.left = "".concat(i2.toString(), "%"), t3.appendChild(s2);
                  }
                }
              });
            }), e(this, "onAdEvent", (e2) => {
              const { container: t3 } = this.player.elements, i2 = e2.getAd(), s2 = e2.getAdData();
              switch (((e3) => {
                Z.call(this.player, this.player.media, "ads".concat(e3.replace(/_/g, "").toLowerCase()));
              })(e2.type), e2.type) {
                case google.ima.AdEvent.Type.LOADED:
                  this.trigger("loaded"), this.pollCountdown(true), i2.isLinear() || (i2.width = t3.offsetWidth, i2.height = t3.offsetHeight);
                  break;
                case google.ima.AdEvent.Type.STARTED:
                  this.manager.setVolume(this.player.volume);
                  break;
                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                  this.player.ended ? this.loadAds() : this.loader.contentComplete();
                  break;
                case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                  this.pauseContent();
                  break;
                case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                  this.pollCountdown(), this.resumeContent();
                  break;
                case google.ima.AdEvent.Type.LOG:
                  s2.adError && this.player.debug.warn("Non-fatal ad error: ".concat(s2.adError.getMessage()));
              }
            }), e(this, "onAdError", (e2) => {
              this.cancel(), this.player.debug.warn("Ads error", e2);
            }), e(this, "listeners", () => {
              const { container: e2 } = this.player.elements;
              let t3;
              this.player.on("canplay", () => {
                this.addCuePoints();
              }), this.player.on("ended", () => {
                this.loader.contentComplete();
              }), this.player.on("timeupdate", () => {
                t3 = this.player.currentTime;
              }), this.player.on("seeked", () => {
                const e3 = this.player.currentTime;
                S.empty(this.cuePoints) || this.cuePoints.forEach((i2, s2) => {
                  t3 < i2 && i2 < e3 && (this.manager.discardAdBreak(), this.cuePoints.splice(s2, 1));
                });
              }), window.addEventListener("resize", () => {
                this.manager && this.manager.resize(e2.offsetWidth, e2.offsetHeight, google.ima.ViewMode.NORMAL);
              });
            }), e(this, "play", () => {
              const { container: e2 } = this.player.elements;
              this.managerPromise || this.resumeContent(), this.managerPromise.then(() => {
                this.manager.setVolume(this.player.volume), this.elements.displayContainer.initialize();
                try {
                  this.initialized || (this.manager.init(e2.offsetWidth, e2.offsetHeight, google.ima.ViewMode.NORMAL), this.manager.start()), this.initialized = true;
                } catch (e3) {
                  this.onAdError(e3);
                }
              }).catch(() => {
              });
            }), e(this, "resumeContent", () => {
              this.elements.container.style.zIndex = "", this.playing = false, ie(this.player.media.play());
            }), e(this, "pauseContent", () => {
              this.elements.container.style.zIndex = 3, this.playing = true, this.player.media.pause();
            }), e(this, "cancel", () => {
              this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds();
            }), e(this, "loadAds", () => {
              this.managerPromise.then(() => {
                this.manager && this.manager.destroy(), this.managerPromise = new Promise((e2) => {
                  this.on("loaded", e2), this.player.debug.log(this.manager);
                }), this.initialized = false, this.requestAds();
              }).catch(() => {
              });
            }), e(this, "trigger", (e2, ...t3) => {
              const i2 = this.events[e2];
              S.array(i2) && i2.forEach((e3) => {
                S.function(e3) && e3.apply(this, t3);
              });
            }), e(this, "on", (e2, t3) => (S.array(this.events[e2]) || (this.events[e2] = []), this.events[e2].push(t3), this)), e(this, "startSafetyTimer", (e2, t3) => {
              this.player.debug.log("Safety timer invoked from: ".concat(t3)), this.safetyTimer = setTimeout(() => {
                this.cancel(), this.clearSafetyTimer("startSafetyTimer()");
              }, e2);
            }), e(this, "clearSafetyTimer", (e2) => {
              S.nullOrUndefined(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: ".concat(e2)), clearTimeout(this.safetyTimer), this.safetyTimer = null);
            }), this.player = t2, this.config = t2.config.ads, this.playing = false, this.initialized = false, this.elements = { container: null, displayContainer: null }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((e2, t3) => {
              this.on("loaded", e2), this.on("error", t3);
            }), this.load();
          }
          get enabled() {
            const { config: e2 } = this;
            return this.player.isHTML5 && this.player.isVideo && e2.enabled && (!S.empty(e2.publisherId) || S.url(e2.tagUrl));
          }
          get tagUrl() {
            const { config: e2 } = this;
            if (S.url(e2.tagUrl)) return e2.tagUrl;
            return "https://go.aniview.com/api/adserver6/vast/?".concat(Ne({ AV_PUBLISHERID: "58c25bb0073ef448b1087ad6", AV_CHANNELID: "5a0458dc28a06145e4519d21", AV_URL: window.location.hostname, cb: Date.now(), AV_WIDTH: 640, AV_HEIGHT: 480, AV_CDIM2: e2.publisherId }));
          }
        }
        function Ge(e2 = 0, t2 = 0, i2 = 255) {
          return Math.min(Math.max(e2, t2), i2);
        }
        const Ze = (e2) => {
          const t2 = [];
          return e2.split(/\r\n\r\n|\n\n|\r\r/).forEach((e3) => {
            const i2 = {};
            e3.split(/\r\n|\n|\r/).forEach((e4) => {
              if (S.number(i2.startTime)) {
                if (!S.empty(e4.trim()) && S.empty(i2.text)) {
                  const t3 = e4.trim().split("#xywh=");
                  [i2.text] = t3, t3[1] && ([i2.x, i2.y, i2.w, i2.h] = t3[1].split(","));
                }
              } else {
                const t3 = e4.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                t3 && (i2.startTime = 60 * Number(t3[1] || 0) * 60 + 60 * Number(t3[2]) + Number(t3[3]) + Number("0.".concat(t3[4])), i2.endTime = 60 * Number(t3[6] || 0) * 60 + 60 * Number(t3[7]) + Number(t3[8]) + Number("0.".concat(t3[9])));
              }
            }), i2.text && t2.push(i2);
          }), t2;
        }, et = (e2, t2) => {
          const i2 = {};
          return e2 > t2.width / t2.height ? (i2.width = t2.width, i2.height = 1 / e2 * t2.width) : (i2.height = t2.height, i2.width = e2 * t2.height), i2;
        };
        class tt {
          constructor(t2) {
            e(this, "load", () => {
              this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then(() => {
                this.enabled && (this.render(), this.determineContainerAutoSizing(), this.listeners(), this.loaded = true);
              });
            }), e(this, "getThumbnails", () => new Promise((e2) => {
              const { src: t3 } = this.player.config.previewThumbnails;
              if (S.empty(t3)) throw new Error("Missing previewThumbnails.src config attribute");
              const i2 = () => {
                this.thumbnails.sort((e3, t4) => e3.height - t4.height), this.player.debug.log("Preview thumbnails", this.thumbnails), e2();
              };
              if (S.function(t3)) t3((e3) => {
                this.thumbnails = e3, i2();
              });
              else {
                const e3 = (S.string(t3) ? [t3] : t3).map((e4) => this.getThumbnail(e4));
                Promise.all(e3).then(i2);
              }
            })), e(this, "getThumbnail", (e2) => new Promise((t3) => {
              Te(e2).then((i2) => {
                const s2 = { frames: Ze(i2), height: null, urlPrefix: "" };
                s2.frames[0].text.startsWith("/") || s2.frames[0].text.startsWith("http://") || s2.frames[0].text.startsWith("https://") || (s2.urlPrefix = e2.substring(0, e2.lastIndexOf("/") + 1));
                const n2 = new Image();
                n2.onload = () => {
                  s2.height = n2.naturalHeight, s2.width = n2.naturalWidth, this.thumbnails.push(s2), t3();
                }, n2.src = s2.urlPrefix + s2.frames[0].text;
              });
            })), e(this, "startMove", (e2) => {
              if (this.loaded && S.event(e2) && ["touchmove", "mousemove"].includes(e2.type) && this.player.media.duration) {
                if ("touchmove" === e2.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                else {
                  var t3, i2;
                  const s2 = this.player.elements.progress.getBoundingClientRect(), n2 = 100 / s2.width * (e2.pageX - s2.left);
                  this.seekTime = this.player.media.duration * (n2 / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e2.pageX, this.elements.thumb.time.innerText = Ee(this.seekTime);
                  const a2 = null === (t3 = this.player.config.markers) || void 0 === t3 || null === (i2 = t3.points) || void 0 === i2 ? void 0 : i2.find(({ time: e3 }) => e3 === Math.round(this.seekTime));
                  a2 && this.elements.thumb.time.insertAdjacentHTML("afterbegin", "".concat(a2.label, "<br>"));
                }
                this.showImageAtCurrentTime();
              }
            }), e(this, "endMove", () => {
              this.toggleThumbContainer(false, true);
            }), e(this, "startScrubbing", (e2) => {
              (S.nullOrUndefined(e2.button) || false === e2.button || 0 === e2.button) && (this.mouseDown = true, this.player.media.duration && (this.toggleScrubbingContainer(true), this.toggleThumbContainer(false, true), this.showImageAtCurrentTime()));
            }), e(this, "endScrubbing", () => {
              this.mouseDown = false, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(false) : G.call(this.player, this.player.media, "timeupdate", () => {
                this.mouseDown || this.toggleScrubbingContainer(false);
              });
            }), e(this, "listeners", () => {
              this.player.on("play", () => {
                this.toggleThumbContainer(false, true);
              }), this.player.on("seeked", () => {
                this.toggleThumbContainer(false);
              }), this.player.on("timeupdate", () => {
                this.lastTime = this.player.media.currentTime;
              });
            }), e(this, "render", () => {
              this.elements.thumb.container = $("div", { class: this.player.config.classNames.previewThumbnails.thumbContainer }), this.elements.thumb.imageContainer = $("div", { class: this.player.config.classNames.previewThumbnails.imageContainer }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
              const e2 = $("div", { class: this.player.config.classNames.previewThumbnails.timeContainer });
              this.elements.thumb.time = $("span", {}, "00:00"), e2.appendChild(this.elements.thumb.time), this.elements.thumb.imageContainer.appendChild(e2), S.element(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = $("div", { class: this.player.config.classNames.previewThumbnails.scrubbingContainer }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
            }), e(this, "destroy", () => {
              this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove();
            }), e(this, "showImageAtCurrentTime", () => {
              this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
              const e2 = this.thumbnails[0].frames.findIndex((e3) => this.seekTime >= e3.startTime && this.seekTime <= e3.endTime), t3 = e2 >= 0;
              let i2 = 0;
              this.mouseDown || this.toggleThumbContainer(t3), t3 && (this.thumbnails.forEach((t4, s2) => {
                this.loadedImages.includes(t4.frames[e2].text) && (i2 = s2);
              }), e2 !== this.showingThumb && (this.showingThumb = e2, this.loadImage(i2)));
            }), e(this, "loadImage", (e2 = 0) => {
              const t3 = this.showingThumb, i2 = this.thumbnails[e2], { urlPrefix: s2 } = i2, n2 = i2.frames[t3], a2 = i2.frames[t3].text, l2 = s2 + a2;
              if (this.currentImageElement && this.currentImageElement.dataset.filename === a2) this.showImage(this.currentImageElement, n2, e2, t3, a2, false), this.currentImageElement.dataset.index = t3, this.removeOldImages(this.currentImageElement);
              else {
                this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                const i3 = new Image();
                i3.src = l2, i3.dataset.index = t3, i3.dataset.filename = a2, this.showingThumbFilename = a2, this.player.debug.log("Loading image: ".concat(l2)), i3.onload = () => this.showImage(i3, n2, e2, t3, a2, true), this.loadingImage = i3, this.removeOldImages(i3);
              }
            }), e(this, "showImage", (e2, t3, i2, s2, n2, a2 = true) => {
              this.player.debug.log("Showing thumb: ".concat(n2, ". num: ").concat(s2, ". qual: ").concat(i2, ". newimg: ").concat(a2)), this.setImageSizeAndOffset(e2, t3), a2 && (this.currentImageContainer.appendChild(e2), this.currentImageElement = e2, this.loadedImages.includes(n2) || this.loadedImages.push(n2)), this.preloadNearby(s2, true).then(this.preloadNearby(s2, false)).then(this.getHigherQuality(i2, e2, t3, n2));
            }), e(this, "removeOldImages", (e2) => {
              Array.from(this.currentImageContainer.children).forEach((t3) => {
                if ("img" !== t3.tagName.toLowerCase()) return;
                const i2 = this.usingSprites ? 500 : 1e3;
                if (t3.dataset.index !== e2.dataset.index && !t3.dataset.deleting) {
                  t3.dataset.deleting = true;
                  const { currentImageContainer: e3 } = this;
                  setTimeout(() => {
                    e3.removeChild(t3), this.player.debug.log("Removing thumb: ".concat(t3.dataset.filename));
                  }, i2);
                }
              });
            }), e(this, "preloadNearby", (e2, t3 = true) => new Promise((i2) => {
              setTimeout(() => {
                const s2 = this.thumbnails[0].frames[e2].text;
                if (this.showingThumbFilename === s2) {
                  let n2;
                  n2 = t3 ? this.thumbnails[0].frames.slice(e2) : this.thumbnails[0].frames.slice(0, e2).reverse();
                  let a2 = false;
                  n2.forEach((e3) => {
                    const t4 = e3.text;
                    if (t4 !== s2 && !this.loadedImages.includes(t4)) {
                      a2 = true, this.player.debug.log("Preloading thumb filename: ".concat(t4));
                      const { urlPrefix: e4 } = this.thumbnails[0], s3 = e4 + t4, n3 = new Image();
                      n3.src = s3, n3.onload = () => {
                        this.player.debug.log("Preloaded thumb filename: ".concat(t4)), this.loadedImages.includes(t4) || this.loadedImages.push(t4), i2();
                      };
                    }
                  }), a2 || i2();
                }
              }, 300);
            })), e(this, "getHigherQuality", (e2, t3, i2, s2) => {
              if (e2 < this.thumbnails.length - 1) {
                let n2 = t3.naturalHeight;
                this.usingSprites && (n2 = i2.h), n2 < this.thumbContainerHeight && setTimeout(() => {
                  this.showingThumbFilename === s2 && (this.player.debug.log("Showing higher quality thumb for: ".concat(s2)), this.loadImage(e2 + 1));
                }, 300);
              }
            }), e(this, "toggleThumbContainer", (e2 = false, t3 = false) => {
              const i2 = this.player.config.classNames.previewThumbnails.thumbContainerShown;
              this.elements.thumb.container.classList.toggle(i2, e2), !e2 && t3 && (this.showingThumb = null, this.showingThumbFilename = null);
            }), e(this, "toggleScrubbingContainer", (e2 = false) => {
              const t3 = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
              this.elements.scrubbing.container.classList.toggle(t3, e2), e2 || (this.showingThumb = null, this.showingThumbFilename = null);
            }), e(this, "determineContainerAutoSizing", () => {
              (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = true);
            }), e(this, "setThumbContainerSizeAndPos", () => {
              const { imageContainer: e2 } = this.elements.thumb;
              if (this.sizeSpecifiedInCSS) {
                if (e2.clientHeight > 20 && e2.clientWidth < 20) {
                  const t3 = Math.floor(e2.clientHeight * this.thumbAspectRatio);
                  e2.style.width = "".concat(t3, "px");
                } else if (e2.clientHeight < 20 && e2.clientWidth > 20) {
                  const t3 = Math.floor(e2.clientWidth / this.thumbAspectRatio);
                  e2.style.height = "".concat(t3, "px");
                }
              } else {
                const t3 = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                e2.style.height = "".concat(this.thumbContainerHeight, "px"), e2.style.width = "".concat(t3, "px");
              }
              this.setThumbContainerPos();
            }), e(this, "setThumbContainerPos", () => {
              const e2 = this.player.elements.progress.getBoundingClientRect(), t3 = this.player.elements.container.getBoundingClientRect(), { container: i2 } = this.elements.thumb, s2 = t3.left - e2.left + 10, n2 = t3.right - e2.left - i2.clientWidth - 10, a2 = this.mousePosX - e2.left - i2.clientWidth / 2, l2 = Ge(a2, s2, n2);
              i2.style.left = "".concat(l2, "px"), i2.style.setProperty("--preview-arrow-offset", a2 - l2 + "px");
            }), e(this, "setScrubbingContainerSize", () => {
              const { width: e2, height: t3 } = et(this.thumbAspectRatio, { width: this.player.media.clientWidth, height: this.player.media.clientHeight });
              this.elements.scrubbing.container.style.width = "".concat(e2, "px"), this.elements.scrubbing.container.style.height = "".concat(t3, "px");
            }), e(this, "setImageSizeAndOffset", (e2, t3) => {
              if (!this.usingSprites) return;
              const i2 = this.thumbContainerHeight / t3.h;
              e2.style.height = e2.naturalHeight * i2 + "px", e2.style.width = e2.naturalWidth * i2 + "px", e2.style.left = "-".concat(t3.x * i2, "px"), e2.style.top = "-".concat(t3.y * i2, "px");
            }), this.player = t2, this.thumbnails = [], this.loaded = false, this.lastMouseMoveTime = Date.now(), this.mouseDown = false, this.loadedImages = [], this.elements = { thumb: {}, scrubbing: {} }, this.load();
          }
          get enabled() {
            return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
          }
          get currentImageContainer() {
            return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
          }
          get usingSprites() {
            return Object.keys(this.thumbnails[0].frames[0]).includes("w");
          }
          get thumbAspectRatio() {
            return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height;
          }
          get thumbContainerHeight() {
            if (this.mouseDown) {
              const { height: e2 } = et(this.thumbAspectRatio, { width: this.player.media.clientWidth, height: this.player.media.clientHeight });
              return e2;
            }
            return this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
          }
          get currentImageElement() {
            return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
          }
          set currentImageElement(e2) {
            this.mouseDown ? this.currentScrubbingImageElement = e2 : this.currentThumbnailImageElement = e2;
          }
        }
        const it = { insertElements(e2, t2) {
          S.string(t2) ? _(e2, this.media, { src: t2 }) : S.array(t2) && t2.forEach((t3) => {
            _(e2, this.media, t3);
          });
        }, change(e2) {
          N(e2, "sources.length") ? (de.cancelRequests.call(this), this.destroy.call(this, () => {
            this.options.quality = [], O(this.media), this.media = null, S.element(this.elements.container) && this.elements.container.removeAttribute("class");
            const { sources: t2, type: i2 } = e2, [{ provider: s2 = _e.html5, src: n2 }] = t2, a2 = "html5" === s2 ? i2 : "div", l2 = "html5" === s2 ? {} : { src: n2 };
            Object.assign(this, { provider: s2, type: i2, supported: K.check(i2, s2, this.config.playsinline), media: $(a2, l2) }), this.elements.container.appendChild(this.media), S.boolean(e2.autoplay) && (this.config.autoplay = e2.autoplay), this.isHTML5 && (this.config.crossorigin && this.media.setAttribute("crossorigin", ""), this.config.autoplay && this.media.setAttribute("autoplay", ""), S.empty(e2.poster) || (this.poster = e2.poster), this.config.loop.active && this.media.setAttribute("loop", ""), this.config.muted && this.media.setAttribute("muted", ""), this.config.playsinline && this.media.setAttribute("playsinline", "")), Fe.addStyleHook.call(this), this.isHTML5 && it.insertElements.call(this, "source", t2), this.config.title = e2.title, Xe.setup.call(this), this.isHTML5 && Object.keys(e2).includes("tracks") && it.insertElements.call(this, "track", e2.tracks), (this.isHTML5 || this.isEmbed && !this.supported.ui) && Fe.build.call(this), this.isHTML5 && this.media.load(), S.empty(e2.previewThumbnails) || (Object.assign(this.config.previewThumbnails, e2.previewThumbnails), this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this))), this.fullscreen.update();
          }, true)) : this.debug.warn("Invalid source format");
        } };
        class st {
          constructor(t2, i2) {
            if (e(this, "play", () => S.function(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then(() => this.ads.play()).catch(() => ie(this.media.play())), this.media.play()) : null), e(this, "pause", () => this.playing && S.function(this.media.pause) ? this.media.pause() : null), e(this, "togglePlay", (e2) => (S.boolean(e2) ? e2 : !this.playing) ? this.play() : this.pause()), e(this, "stop", () => {
              this.isHTML5 ? (this.pause(), this.restart()) : S.function(this.media.stop) && this.media.stop();
            }), e(this, "restart", () => {
              this.currentTime = 0;
            }), e(this, "rewind", (e2) => {
              this.currentTime -= S.number(e2) ? e2 : this.config.seekTime;
            }), e(this, "forward", (e2) => {
              this.currentTime += S.number(e2) ? e2 : this.config.seekTime;
            }), e(this, "increaseVolume", (e2) => {
              const t3 = this.media.muted ? 0 : this.volume;
              this.volume = t3 + (S.number(e2) ? e2 : 0);
            }), e(this, "decreaseVolume", (e2) => {
              this.increaseVolume(-e2);
            }), e(this, "airplay", () => {
              K.airplay && this.media.webkitShowPlaybackTargetPicker();
            }), e(this, "toggleControls", (e2) => {
              if (this.supported.ui && !this.isAudio) {
                const t3 = F(this.elements.container, this.config.classNames.hideControls), i3 = void 0 === e2 ? void 0 : !e2, s3 = R(this.elements.container, this.config.classNames.hideControls, i3);
                if (s3 && S.array(this.config.controls) && this.config.controls.includes("settings") && !S.empty(this.config.settings) && Pe.toggleMenu.call(this, false), s3 !== t3) {
                  const e3 = s3 ? "controlshidden" : "controlsshown";
                  Z.call(this, this.media, e3);
                }
                return !s3;
              }
              return false;
            }), e(this, "on", (e2, t3) => {
              X.call(this, this.elements.container, e2, t3);
            }), e(this, "once", (e2, t3) => {
              G.call(this, this.elements.container, e2, t3);
            }), e(this, "off", (e2, t3) => {
              J(this.elements.container, e2, t3);
            }), e(this, "destroy", (e2, t3 = false) => {
              if (!this.ready) return;
              const i3 = () => {
                document.body.style.overflow = "", this.embed = null, t3 ? (Object.keys(this.elements).length && (O(this.elements.buttons.play), O(this.elements.captions), O(this.elements.controls), O(this.elements.wrapper), this.elements.buttons.play = null, this.elements.captions = null, this.elements.controls = null, this.elements.wrapper = null), S.function(e2) && e2()) : (ee.call(this), de.cancelRequests.call(this), q(this.elements.original, this.elements.container), Z.call(this, this.elements.original, "destroyed", true), S.function(e2) && e2.call(this.elements.original), this.ready = false, setTimeout(() => {
                  this.elements = null, this.media = null;
                }, 200));
              };
              this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (Fe.toggleNativeControls.call(this, true), i3()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && S.function(this.embed.destroy) && this.embed.destroy(), i3()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i3), setTimeout(i3, 200));
            }), e(this, "supports", (e2) => K.mime.call(this, e2)), this.timers = {}, this.ready = false, this.loading = false, this.failed = false, this.touch = K.touch, this.media = t2, S.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || S.nodeList(this.media) || S.array(this.media)) && (this.media = this.media[0]), this.config = x({}, Le, st.defaults, i2 || {}, (() => {
              try {
                return JSON.parse(this.media.getAttribute("data-plyr-config"));
              } catch (e2) {
                return {};
              }
            })()), this.elements = { container: null, fullscreen: null, captions: null, buttons: {}, display: {}, progress: {}, inputs: {}, settings: { popup: null, menu: null, panels: {}, buttons: {} } }, this.captions = { active: null, currentTrack: -1, meta: /* @__PURE__ */ new WeakMap() }, this.fullscreen = { active: false }, this.options = { speed: [], quality: [] }, this.debug = new De(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", K), S.nullOrUndefined(this.media) || !S.element(this.media)) return void this.debug.error("Setup failed: no suitable element passed");
            if (this.media.plyr) return void this.debug.warn("Target already setup");
            if (!this.config.enabled) return void this.debug.error("Setup failed: disabled by config");
            if (!K.check().api) return void this.debug.error("Setup failed: no support");
            const s2 = this.media.cloneNode(true);
            s2.autoplay = false, this.elements.original = s2;
            const n2 = this.media.tagName.toLowerCase();
            let a2 = null, l2 = null;
            switch (n2) {
              case "div":
                if (a2 = this.media.querySelector("iframe"), S.element(a2)) {
                  if (l2 = Me(a2.getAttribute("src")), this.provider = function(e2) {
                    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e2) ? _e.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e2) ? _e.vimeo : null;
                  }(l2.toString()), this.elements.container = this.media, this.media = a2, this.elements.container.className = "", l2.search.length) {
                    const e2 = ["1", "true"];
                    e2.includes(l2.searchParams.get("autoplay")) && (this.config.autoplay = true), e2.includes(l2.searchParams.get("loop")) && (this.config.loop.active = true), this.isYouTube ? (this.config.playsinline = e2.includes(l2.searchParams.get("playsinline")), this.config.youtube.hl = l2.searchParams.get("hl")) : this.config.playsinline = true;
                  }
                } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                if (S.empty(this.provider) || !Object.values(_e).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                this.type = je;
                break;
              case "video":
              case "audio":
                this.type = n2, this.provider = _e.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = true), this.media.hasAttribute("autoplay") && (this.config.autoplay = true), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = true), this.media.hasAttribute("muted") && (this.config.muted = true), this.media.hasAttribute("loop") && (this.config.loop.active = true);
                break;
              default:
                return void this.debug.error("Setup failed: unsupported type");
            }
            this.supported = K.check(this.type, this.provider), this.supported.api ? (this.eventListeners = [], this.listeners = new Ve(this), this.storage = new we(this), this.media.plyr = this, S.element(this.elements.container) || (this.elements.container = $("div"), L(this.media, this.elements.container)), Fe.migrateStyles.call(this), Fe.addStyleHook.call(this), Xe.setup.call(this), this.config.debug && X.call(this, this.elements.container, this.config.events.join(" "), (e2) => {
              this.debug.log("event: ".concat(e2.type));
            }), this.fullscreen = new He(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && Fe.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new Je(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", () => ie(this.play())), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this))) : this.debug.error("Setup failed: no support");
          }
          get isHTML5() {
            return this.provider === _e.html5;
          }
          get isEmbed() {
            return this.isYouTube || this.isVimeo;
          }
          get isYouTube() {
            return this.provider === _e.youtube;
          }
          get isVimeo() {
            return this.provider === _e.vimeo;
          }
          get isVideo() {
            return this.type === je;
          }
          get isAudio() {
            return this.type === Oe;
          }
          get playing() {
            return Boolean(this.ready && !this.paused && !this.ended);
          }
          get paused() {
            return Boolean(this.media.paused);
          }
          get stopped() {
            return Boolean(this.paused && 0 === this.currentTime);
          }
          get ended() {
            return Boolean(this.media.ended);
          }
          set currentTime(e2) {
            if (!this.duration) return;
            const t2 = S.number(e2) && e2 > 0;
            this.media.currentTime = t2 ? Math.min(e2, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"));
          }
          get currentTime() {
            return Number(this.media.currentTime);
          }
          get buffered() {
            const { buffered: e2 } = this.media;
            return S.number(e2) ? e2 : e2 && e2.length && this.duration > 0 ? e2.end(0) / this.duration : 0;
          }
          get seeking() {
            return Boolean(this.media.seeking);
          }
          get duration() {
            const e2 = parseFloat(this.config.duration), t2 = (this.media || {}).duration, i2 = S.number(t2) && t2 !== 1 / 0 ? t2 : 0;
            return e2 || i2;
          }
          set volume(e2) {
            let t2 = e2;
            S.string(t2) && (t2 = Number(t2)), S.number(t2) || (t2 = this.storage.get("volume")), S.number(t2) || ({ volume: t2 } = this.config), t2 > 1 && (t2 = 1), t2 < 0 && (t2 = 0), this.config.volume = t2, this.media.volume = t2, !S.empty(e2) && this.muted && t2 > 0 && (this.muted = false);
          }
          get volume() {
            return Number(this.media.volume);
          }
          set muted(e2) {
            let t2 = e2;
            S.boolean(t2) || (t2 = this.storage.get("muted")), S.boolean(t2) || (t2 = this.config.muted), this.config.muted = t2, this.media.muted = t2;
          }
          get muted() {
            return Boolean(this.media.muted);
          }
          get hasAudio() {
            return !this.isHTML5 || (!!this.isAudio || (Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)));
          }
          set speed(e2) {
            let t2 = null;
            S.number(e2) && (t2 = e2), S.number(t2) || (t2 = this.storage.get("speed")), S.number(t2) || (t2 = this.config.speed.selected);
            const { minimumSpeed: i2, maximumSpeed: s2 } = this;
            t2 = Ge(t2, i2, s2), this.config.speed.selected = t2, setTimeout(() => {
              this.media && (this.media.playbackRate = t2);
            }, 0);
          }
          get speed() {
            return Number(this.media.playbackRate);
          }
          get minimumSpeed() {
            return this.isYouTube ? Math.min(...this.options.speed) : this.isVimeo ? 0.5 : 0.0625;
          }
          get maximumSpeed() {
            return this.isYouTube ? Math.max(...this.options.speed) : this.isVimeo ? 2 : 16;
          }
          set quality(e2) {
            const t2 = this.config.quality, i2 = this.options.quality;
            if (!i2.length) return;
            let s2 = [!S.empty(e2) && Number(e2), this.storage.get("quality"), t2.selected, t2.default].find(S.number), n2 = true;
            if (!i2.includes(s2)) {
              const e3 = ne(i2, s2);
              this.debug.warn("Unsupported quality option: ".concat(s2, ", using ").concat(e3, " instead")), s2 = e3, n2 = false;
            }
            t2.selected = s2, this.media.quality = s2, n2 && this.storage.set({ quality: s2 });
          }
          get quality() {
            return this.media.quality;
          }
          set loop(e2) {
            const t2 = S.boolean(e2) ? e2 : this.config.loop.active;
            this.config.loop.active = t2, this.media.loop = t2;
          }
          get loop() {
            return Boolean(this.media.loop);
          }
          set source(e2) {
            it.change.call(this, e2);
          }
          get source() {
            return this.media.currentSrc;
          }
          get download() {
            const { download: e2 } = this.config.urls;
            return S.url(e2) ? e2 : this.source;
          }
          set download(e2) {
            S.url(e2) && (this.config.urls.download = e2, Pe.setDownloadUrl.call(this));
          }
          set poster(e2) {
            this.isVideo ? Fe.setPoster.call(this, e2, false).catch(() => {
            }) : this.debug.warn("Poster can only be set for video");
          }
          get poster() {
            return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null;
          }
          get ratio() {
            if (!this.isVideo) return null;
            const e2 = oe(ce.call(this));
            return S.array(e2) ? e2.join(":") : e2;
          }
          set ratio(e2) {
            this.isVideo ? S.string(e2) && re(e2) ? (this.config.ratio = oe(e2), ue.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(e2, ")")) : this.debug.warn("Aspect ratio can only be set for video");
          }
          set autoplay(e2) {
            this.config.autoplay = S.boolean(e2) ? e2 : this.config.autoplay;
          }
          get autoplay() {
            return Boolean(this.config.autoplay);
          }
          toggleCaptions(e2) {
            xe.toggle.call(this, e2, false);
          }
          set currentTrack(e2) {
            xe.set.call(this, e2, false), xe.setup.call(this);
          }
          get currentTrack() {
            const { toggled: e2, currentTrack: t2 } = this.captions;
            return e2 ? t2 : -1;
          }
          set language(e2) {
            xe.setLanguage.call(this, e2, false);
          }
          get language() {
            return (xe.getCurrentTrack.call(this) || {}).language;
          }
          set pip(e2) {
            if (!K.pip) return;
            const t2 = S.boolean(e2) ? e2 : !this.pip;
            S.function(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t2 ? Ie : $e), S.function(this.media.requestPictureInPicture) && (!this.pip && t2 ? this.media.requestPictureInPicture() : this.pip && !t2 && document.exitPictureInPicture());
          }
          get pip() {
            return K.pip ? S.empty(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Ie : null;
          }
          setPreviewThumbnails(e2) {
            this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), Object.assign(this.config.previewThumbnails, e2), this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this));
          }
          static supported(e2, t2) {
            return K.check(e2, t2);
          }
          static loadSprite(e2, t2) {
            return ke(e2, t2);
          }
          static setup(e2, t2 = {}) {
            let i2 = null;
            return S.string(e2) ? i2 = Array.from(document.querySelectorAll(e2)) : S.nodeList(e2) ? i2 = Array.from(e2) : S.array(e2) && (i2 = e2.filter(S.element)), S.empty(i2) ? null : i2.map((e3) => new st(e3, t2));
          }
        }
        var nt;
        return st.defaults = (nt = Le, JSON.parse(JSON.stringify(nt))), st;
      });
    }
  });

  // assets/js/functions/common.js
  var ENVIRONMENT = "development";
  function isDev() {
    return ENVIRONMENT === "development";
  }
  function devLog(...variable) {
    if (isDev() === false) return;
    console.log(...variable);
  }

  // assets/js/functions/modals.js
  function Modals() {
    devLog("Modal function is running");
    const handleModalState = (modalName, state) => {
      const modals = document.querySelectorAll(
        '[modal][data-modal-name="'.concat(modalName, '"]')
      );
      if (!modals) {
        devLog('Modal "'.concat(modalName, '" not found.'));
        return;
      }
      modals.forEach((modal) => {
        modal.dataset.active = state;
      });
      devLog('Modal "'.concat(modalName, '" state set to "').concat(state, '".'));
    };
    const addEventListeners = (selector, action, actionName) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        const modalName = element.dataset.modalName;
        element.addEventListener("click", () => {
          action(modalName);
        });
        devLog('"'.concat(actionName, '" triggered for modal "').concat(modalName, '".'));
      });
    };
    addEventListeners(
      "[modal-opener]",
      (modalName) => handleModalState(modalName, "true"),
      "Open"
    );
    addEventListeners(
      "[modal-closer]",
      (modalName) => handleModalState(modalName, "false"),
      "Close"
    );
    addEventListeners(
      "[modal-toggler]",
      (modalName) => {
        const modal = document.querySelector(
          '[modal][data-modal-name="'.concat(modalName, '"]')
        );
        if (!modal) {
          devLog('Toggle failed: Modal "'.concat(modalName, '" not found.'));
          return;
        }
        const newState = modal.dataset.active === "true" ? "false" : "true";
        devLog('Toggling modal "'.concat(modalName, '" to "').concat(newState, '".'));
        handleModalState(modalName, newState);
      },
      "Toggle"
    );
  }

  // node_modules/swiper/shared/ssr-window.esm.mjs
  function isObject(obj) {
    return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
  }
  function extend(target, src) {
    if (target === void 0) {
      target = {};
    }
    if (src === void 0) {
      src = {};
    }
    Object.keys(src).forEach((key) => {
      if (typeof target[key] === "undefined") target[key] = src[key];
      else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
        extend(target[key], src[key]);
      }
    });
  }
  var ssrDocument = {
    body: {},
    addEventListener() {
    },
    removeEventListener() {
    },
    activeElement: {
      blur() {
      },
      nodeName: ""
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return {
        initEvent() {
        }
      };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {
        },
        getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function getDocument() {
    const doc = typeof document !== "undefined" ? document : {};
    extend(doc, ssrDocument);
    return doc;
  }
  var ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState() {
      },
      pushState() {
      },
      go() {
      },
      back() {
      }
    },
    CustomEvent: function CustomEvent2() {
      return this;
    },
    addEventListener() {
    },
    removeEventListener() {
    },
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        }
      };
    },
    Image() {
    },
    Date() {
    },
    screen: {},
    setTimeout() {
    },
    clearTimeout() {
    },
    matchMedia() {
      return {};
    },
    requestAnimationFrame(callback) {
      if (typeof setTimeout === "undefined") {
        callback();
        return null;
      }
      return setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
      if (typeof setTimeout === "undefined") {
        return;
      }
      clearTimeout(id);
    }
  };
  function getWindow() {
    const win = typeof window !== "undefined" ? window : {};
    extend(win, ssrWindow);
    return win;
  }

  // node_modules/swiper/shared/utils.mjs
  function classesToTokens(classes2) {
    if (classes2 === void 0) {
      classes2 = "";
    }
    return classes2.trim().split(" ").filter((c) => !!c.trim());
  }
  function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key) => {
      try {
        object[key] = null;
      } catch (e) {
      }
      try {
        delete object[key];
      } catch (e) {
      }
    });
  }
  function nextTick(callback, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return setTimeout(callback, delay);
  }
  function now() {
    return Date.now();
  }
  function getComputedStyle2(el) {
    const window2 = getWindow();
    let style;
    if (window2.getComputedStyle) {
      style = window2.getComputedStyle(el, null);
    }
    if (!style && el.currentStyle) {
      style = el.currentStyle;
    }
    if (!style) {
      style = el.style;
    }
    return style;
  }
  function getTranslate(el, axis) {
    if (axis === void 0) {
      axis = "x";
    }
    const window2 = getWindow();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle2(el);
    if (window2.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(",").length > 6) {
        curTransform = curTransform.split(", ").map((a) => a.replace(",", ".")).join(", ");
      }
      transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
      matrix = transformMatrix.toString().split(",");
    }
    if (axis === "x") {
      if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m41;
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
      else curTransform = parseFloat(matrix[4]);
    }
    if (axis === "y") {
      if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m42;
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
      else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  }
  function isObject2(o) {
    return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
  }
  function isNode(node) {
    if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
      return node instanceof HTMLElement;
    }
    return node && (node.nodeType === 1 || node.nodeType === 11);
  }
  function extend2() {
    const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
    const noExtend = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < arguments.length; i += 1) {
      const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
      if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
        const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== void 0 && desc.enumerable) {
            if (isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend2(to[nextKey], nextSource[nextKey]);
              }
            } else if (!isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              to[nextKey] = {};
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend2(to[nextKey], nextSource[nextKey]);
              }
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  }
  function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
  }
  function animateCSSModeScroll(_ref) {
    let {
      swiper,
      targetPosition,
      side
    } = _ref;
    const window2 = getWindow();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = "none";
    window2.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? "next" : "prev";
    const isOutOfBound = (current, target) => {
      return dir === "next" && current >= target || dir === "prev" && current <= target;
    };
    const animate = () => {
      time = (/* @__PURE__ */ new Date()).getTime();
      if (startTime === null) {
        startTime = time;
      }
      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
      let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
      if (isOutOfBound(currentPosition, targetPosition)) {
        currentPosition = targetPosition;
      }
      swiper.wrapperEl.scrollTo({
        [side]: currentPosition
      });
      if (isOutOfBound(currentPosition, targetPosition)) {
        swiper.wrapperEl.style.overflow = "hidden";
        swiper.wrapperEl.style.scrollSnapType = "";
        setTimeout(() => {
          swiper.wrapperEl.style.overflow = "";
          swiper.wrapperEl.scrollTo({
            [side]: currentPosition
          });
        });
        window2.cancelAnimationFrame(swiper.cssModeFrameID);
        return;
      }
      swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
    };
    animate();
  }
  function getSlideTransformEl(slideEl) {
    return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
  }
  function elementChildren(element, selector) {
    if (selector === void 0) {
      selector = "";
    }
    const window2 = getWindow();
    const children = [...element.children];
    if (window2.HTMLSlotElement && element instanceof HTMLSlotElement) {
      children.push(...element.assignedElements());
    }
    if (!selector) {
      return children;
    }
    return children.filter((el) => el.matches(selector));
  }
  function elementIsChildOfSlot(el, slot) {
    var _a, _b;
    const elementsQueue = [slot];
    while (elementsQueue.length > 0) {
      const elementToCheck = elementsQueue.shift();
      if (el === elementToCheck) {
        return true;
      }
      elementsQueue.push(...elementToCheck.children, ...((_a = elementToCheck.shadowRoot) == null ? void 0 : _a.children) || [], ...((_b = elementToCheck.assignedElements) == null ? void 0 : _b.call(elementToCheck)) || []);
    }
  }
  function elementIsChildOf(el, parent) {
    const window2 = getWindow();
    let isChild = parent.contains(el);
    if (!isChild && window2.HTMLSlotElement && parent instanceof HTMLSlotElement) {
      const children = [...parent.assignedElements()];
      isChild = children.includes(el);
      if (!isChild) {
        isChild = elementIsChildOfSlot(el, parent);
      }
    }
    return isChild;
  }
  function showWarning(text) {
    try {
      console.warn(text);
      return;
    } catch (err) {
    }
  }
  function createElement(tag, classes2) {
    if (classes2 === void 0) {
      classes2 = [];
    }
    const el = document.createElement(tag);
    el.classList.add(...Array.isArray(classes2) ? classes2 : classesToTokens(classes2));
    return el;
  }
  function elementOffset(el) {
    const window2 = getWindow();
    const document2 = getDocument();
    const box = el.getBoundingClientRect();
    const body = document2.body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === window2 ? window2.scrollY : el.scrollTop;
    const scrollLeft = el === window2 ? window2.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }
  function elementPrevAll(el, selector) {
    const prevEls = [];
    while (el.previousElementSibling) {
      const prev = el.previousElementSibling;
      if (selector) {
        if (prev.matches(selector)) prevEls.push(prev);
      } else prevEls.push(prev);
      el = prev;
    }
    return prevEls;
  }
  function elementNextAll(el, selector) {
    const nextEls = [];
    while (el.nextElementSibling) {
      const next = el.nextElementSibling;
      if (selector) {
        if (next.matches(selector)) nextEls.push(next);
      } else nextEls.push(next);
      el = next;
    }
    return nextEls;
  }
  function elementStyle(el, prop) {
    const window2 = getWindow();
    return window2.getComputedStyle(el, null).getPropertyValue(prop);
  }
  function elementIndex(el) {
    let child = el;
    let i;
    if (child) {
      i = 0;
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) i += 1;
      }
      return i;
    }
    return void 0;
  }
  function elementParents(el, selector) {
    const parents = [];
    let parent = el.parentElement;
    while (parent) {
      if (selector) {
        if (parent.matches(selector)) parents.push(parent);
      } else {
        parents.push(parent);
      }
      parent = parent.parentElement;
    }
    return parents;
  }
  function elementTransitionEnd(el, callback) {
    function fireCallBack(e) {
      if (e.target !== el) return;
      callback.call(el, e);
      el.removeEventListener("transitionend", fireCallBack);
    }
    if (callback) {
      el.addEventListener("transitionend", fireCallBack);
    }
  }
  function elementOuterSize(el, size, includeMargins) {
    const window2 = getWindow();
    if (includeMargins) {
      return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
    }
    return el.offsetWidth;
  }
  function makeElementsArray(el) {
    return (Array.isArray(el) ? el : [el]).filter((e) => !!e);
  }
  function getRotateFix(swiper) {
    return (v) => {
      if (Math.abs(v) > 0 && swiper.browser && swiper.browser.need3dFix && Math.abs(v) % 90 === 0) {
        return v + 1e-3;
      }
      return v;
    };
  }

  // node_modules/swiper/shared/swiper-core.mjs
  var support;
  function calcSupport() {
    const window2 = getWindow();
    const document2 = getDocument();
    return {
      smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
      touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
    };
  }
  function getSupport() {
    if (!support) {
      support = calcSupport();
    }
    return support;
  }
  var deviceCached;
  function calcDevice(_temp) {
    let {
      userAgent
    } = _temp === void 0 ? {} : _temp;
    const support2 = getSupport();
    const window2 = getWindow();
    const platform = window2.navigator.platform;
    const ua = userAgent || window2.navigator.userAgent;
    const device = {
      ios: false,
      android: false
    };
    const screenWidth = window2.screen.width;
    const screenHeight = window2.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === "Win32";
    let macos = platform === "MacIntel";
    const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    if (!ipad && macos && support2.touch && iPadScreens.indexOf("".concat(screenWidth, "x").concat(screenHeight)) >= 0) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      if (!ipad) ipad = [0, 1, "13_0_0"];
      macos = false;
    }
    if (android && !windows) {
      device.os = "android";
      device.android = true;
    }
    if (ipad || iphone || ipod) {
      device.os = "ios";
      device.ios = true;
    }
    return device;
  }
  function getDevice(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }
    if (!deviceCached) {
      deviceCached = calcDevice(overrides);
    }
    return deviceCached;
  }
  var browser;
  function calcBrowser() {
    const window2 = getWindow();
    const device = getDevice();
    let needPerspectiveFix = false;
    function isSafari() {
      const ua = window2.navigator.userAgent.toLowerCase();
      return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
    }
    if (isSafari()) {
      const ua = String(window2.navigator.userAgent);
      if (ua.includes("Version/")) {
        const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num) => Number(num));
        needPerspectiveFix = major < 16 || major === 16 && minor < 2;
      }
    }
    const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent);
    const isSafariBrowser = isSafari();
    const need3dFix = isSafariBrowser || isWebView && device.ios;
    return {
      isSafari: needPerspectiveFix || isSafariBrowser,
      needPerspectiveFix,
      need3dFix,
      isWebView
    };
  }
  function getBrowser() {
    if (!browser) {
      browser = calcBrowser();
    }
    return browser;
  }
  function Resize(_ref) {
    let {
      swiper,
      on,
      emit
    } = _ref;
    const window2 = getWindow();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      emit("beforeResize");
      emit("resize");
    };
    const createObserver = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      observer = new ResizeObserver((entries) => {
        animationFrame = window2.requestAnimationFrame(() => {
          const {
            width,
            height
          } = swiper;
          let newWidth = width;
          let newHeight = height;
          entries.forEach((_ref2) => {
            let {
              contentBoxSize,
              contentRect,
              target
            } = _ref2;
            if (target && target !== swiper.el) return;
            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
          });
          if (newWidth !== width || newHeight !== height) {
            resizeHandler();
          }
        });
      });
      observer.observe(swiper.el);
    };
    const removeObserver = () => {
      if (animationFrame) {
        window2.cancelAnimationFrame(animationFrame);
      }
      if (observer && observer.unobserve && swiper.el) {
        observer.unobserve(swiper.el);
        observer = null;
      }
    };
    const orientationChangeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      emit("orientationchange");
    };
    on("init", () => {
      if (swiper.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
        createObserver();
        return;
      }
      window2.addEventListener("resize", resizeHandler);
      window2.addEventListener("orientationchange", orientationChangeHandler);
    });
    on("destroy", () => {
      removeObserver();
      window2.removeEventListener("resize", resizeHandler);
      window2.removeEventListener("orientationchange", orientationChangeHandler);
    });
  }
  function Observer(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    const observers = [];
    const window2 = getWindow();
    const attach = function(target, options) {
      if (options === void 0) {
        options = {};
      }
      const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
      const observer = new ObserverFunc((mutations) => {
        if (swiper.__preventObserver__) return;
        if (mutations.length === 1) {
          emit("observerUpdate", mutations[0]);
          return;
        }
        const observerUpdate = function observerUpdate2() {
          emit("observerUpdate", mutations[0]);
        };
        if (window2.requestAnimationFrame) {
          window2.requestAnimationFrame(observerUpdate);
        } else {
          window2.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes: typeof options.attributes === "undefined" ? true : options.attributes,
        childList: swiper.isElement || (typeof options.childList === "undefined" ? true : options).childList,
        characterData: typeof options.characterData === "undefined" ? true : options.characterData
      });
      observers.push(observer);
    };
    const init = () => {
      if (!swiper.params.observer) return;
      if (swiper.params.observeParents) {
        const containerParents = elementParents(swiper.hostEl);
        for (let i = 0; i < containerParents.length; i += 1) {
          attach(containerParents[i]);
        }
      }
      attach(swiper.hostEl, {
        childList: swiper.params.observeSlideChildren
      });
      attach(swiper.wrapperEl, {
        attributes: false
      });
    };
    const destroy = () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
      observers.splice(0, observers.length);
    };
    extendParams({
      observer: false,
      observeParents: false,
      observeSlideChildren: false
    });
    on("init", init);
    on("destroy", destroy);
  }
  var eventsEmitter = {
    on(events2, handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed) return self2;
      if (typeof handler !== "function") return self2;
      const method = priority ? "unshift" : "push";
      events2.split(" ").forEach((event2) => {
        if (!self2.eventsListeners[event2]) self2.eventsListeners[event2] = [];
        self2.eventsListeners[event2][method](handler);
      });
      return self2;
    },
    once(events2, handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed) return self2;
      if (typeof handler !== "function") return self2;
      function onceHandler() {
        self2.off(events2, onceHandler);
        if (onceHandler.__emitterProxy) {
          delete onceHandler.__emitterProxy;
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        handler.apply(self2, args);
      }
      onceHandler.__emitterProxy = handler;
      return self2.on(events2, onceHandler, priority);
    },
    onAny(handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed) return self2;
      if (typeof handler !== "function") return self2;
      const method = priority ? "unshift" : "push";
      if (self2.eventsAnyListeners.indexOf(handler) < 0) {
        self2.eventsAnyListeners[method](handler);
      }
      return self2;
    },
    offAny(handler) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed) return self2;
      if (!self2.eventsAnyListeners) return self2;
      const index = self2.eventsAnyListeners.indexOf(handler);
      if (index >= 0) {
        self2.eventsAnyListeners.splice(index, 1);
      }
      return self2;
    },
    off(events2, handler) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed) return self2;
      if (!self2.eventsListeners) return self2;
      events2.split(" ").forEach((event2) => {
        if (typeof handler === "undefined") {
          self2.eventsListeners[event2] = [];
        } else if (self2.eventsListeners[event2]) {
          self2.eventsListeners[event2].forEach((eventHandler, index) => {
            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
              self2.eventsListeners[event2].splice(index, 1);
            }
          });
        }
      });
      return self2;
    },
    emit() {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed) return self2;
      if (!self2.eventsListeners) return self2;
      let events2;
      let data;
      let context;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (typeof args[0] === "string" || Array.isArray(args[0])) {
        events2 = args[0];
        data = args.slice(1, args.length);
        context = self2;
      } else {
        events2 = args[0].events;
        data = args[0].data;
        context = args[0].context || self2;
      }
      data.unshift(context);
      const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
      eventsArray.forEach((event2) => {
        if (self2.eventsAnyListeners && self2.eventsAnyListeners.length) {
          self2.eventsAnyListeners.forEach((eventHandler) => {
            eventHandler.apply(context, [event2, ...data]);
          });
        }
        if (self2.eventsListeners && self2.eventsListeners[event2]) {
          self2.eventsListeners[event2].forEach((eventHandler) => {
            eventHandler.apply(context, data);
          });
        }
      });
      return self2;
    }
  };
  function updateSize() {
    const swiper = this;
    let width;
    let height;
    const el = swiper.el;
    if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
      width = swiper.params.width;
    } else {
      width = el.clientWidth;
    }
    if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
      height = swiper.params.height;
    } else {
      height = el.clientHeight;
    }
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
      return;
    }
    width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
    height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    Object.assign(swiper, {
      width,
      height,
      size: swiper.isHorizontal() ? width : height
    });
  }
  function updateSlides() {
    const swiper = this;
    function getDirectionPropertyValue(node, label) {
      return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const {
      wrapperEl,
      slidesEl,
      size: swiperSize,
      rtlTranslate: rtl,
      wrongRTL
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = elementChildren(slidesEl, ".".concat(swiper.params.slideClass, ", swiper-slide"));
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === "undefined") {
      return;
    }
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    swiper.virtualSize = -spaceBetween;
    slides.forEach((slideEl) => {
      if (rtl) {
        slideEl.style.marginLeft = "";
      } else {
        slideEl.style.marginRight = "";
      }
      slideEl.style.marginBottom = "";
      slideEl.style.marginTop = "";
    });
    if (params.centeredSlides && params.cssMode) {
      setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
      setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) {
      swiper.grid.initSlides(slides);
    } else if (swiper.grid) {
      swiper.grid.unsetSlides();
    }
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
      return typeof params.breakpoints[key].slidesPerView !== "undefined";
    }).length > 0;
    for (let i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      let slide2;
      if (slides[i]) slide2 = slides[i];
      if (gridEnabled) {
        swiper.grid.updateSlide(i, slide2, slides);
      }
      if (slides[i] && elementStyle(slide2, "display") === "none") continue;
      if (params.slidesPerView === "auto") {
        if (shouldResetSlideSize) {
          slides[i].style[swiper.getDirectionLabel("width")] = "";
        }
        const slideStyles = getComputedStyle(slide2);
        const currentTransform = slide2.style.transform;
        const currentWebKitTransform = slide2.style.webkitTransform;
        if (currentTransform) {
          slide2.style.transform = "none";
        }
        if (currentWebKitTransform) {
          slide2.style.webkitTransform = "none";
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal() ? elementOuterSize(slide2, "width", true) : elementOuterSize(slide2, "height", true);
        } else {
          const width = getDirectionPropertyValue(slideStyles, "width");
          const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
          const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
          const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
          const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
          const boxSizing = slideStyles.getPropertyValue("box-sizing");
          if (boxSizing && boxSizing === "border-box") {
            slideSize = width + marginLeft + marginRight;
          } else {
            const {
              clientWidth,
              offsetWidth
            } = slide2;
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
          }
        }
        if (currentTransform) {
          slide2.style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide2.style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths) slideSize = Math.floor(slideSize);
      } else {
        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
        if (params.roundLengths) slideSize = Math.floor(slideSize);
        if (slides[i]) {
          slides[i].style[swiper.getDirectionLabel("width")] = "".concat(slideSize, "px");
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);
      if (params.centeredSlides) {
        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }
      swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
      wrapperEl.style.width = "".concat(swiper.virtualSize + spaceBetween, "px");
    }
    if (params.setWrapperSize) {
      wrapperEl.style[swiper.getDirectionLabel("width")] = "".concat(swiper.virtualSize + spaceBetween, "px");
    }
    if (gridEnabled) {
      swiper.grid.updateWrapperSize(slideSize, snapGrid);
    }
    if (!params.centeredSlides) {
      const newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (isVirtual && params.loop) {
      const size = slidesSizesGrid[0] + spaceBetween;
      if (params.slidesPerGroup > 1) {
        const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
        const groupSize = size * params.slidesPerGroup;
        for (let i = 0; i < groups; i += 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
        }
      }
      for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
        if (params.slidesPerGroup === 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + size);
        }
        slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
        swiper.virtualSize += size;
      }
    }
    if (snapGrid.length === 0) snapGrid = [0];
    if (spaceBetween !== 0) {
      const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
      slides.filter((_, slideIndex) => {
        if (!params.cssMode || params.loop) return true;
        if (slideIndex === slides.length - 1) {
          return false;
        }
        return true;
      }).forEach((slideEl) => {
        slideEl.style[key] = "".concat(spaceBetween, "px");
      });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
      snapGrid = snapGrid.map((snap) => {
        if (snap <= 0) return -offsetBefore;
        if (snap > maxSnap) return maxSnap + offsetAfter;
        return snap;
      });
    }
    if (params.centerInsufficientSlides) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
      if (allSlidesSize + offsetSize < swiperSize) {
        const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
        snapGrid.forEach((snap, snapIndex) => {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach((snap, snapIndex) => {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }
    Object.assign(swiper, {
      slides,
      snapGrid,
      slidesGrid,
      slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
      setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "".concat(-snapGrid[0], "px"));
      setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "".concat(swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2, "px"));
      const addToSnapGrid = -swiper.snapGrid[0];
      const addToSlidesGrid = -swiper.slidesGrid[0];
      swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid);
      swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) {
      swiper.emit("slidesLengthChange");
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) swiper.checkOverflow();
      swiper.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit("slidesGridLengthChange");
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    swiper.emit("slidesUpdated");
    if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
      const backFaceHiddenClass = "".concat(params.containerModifierClass, "backface-hidden");
      const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
      if (slidesLength <= params.maxBackfaceHiddenSlides) {
        if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
      } else if (hasClassBackfaceClassAdded) {
        swiper.el.classList.remove(backFaceHiddenClass);
      }
    }
  }
  function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i;
    if (typeof speed === "number") {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    const getSlideByIndex = (index) => {
      if (isVirtual) {
        return swiper.slides[swiper.getSlideIndexByData(index)];
      }
      return swiper.slides[index];
    };
    if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
      if (swiper.params.centeredSlides) {
        (swiper.visibleSlides || []).forEach((slide2) => {
          activeSlides.push(slide2);
        });
      } else {
        for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
          const index = swiper.activeIndex + i;
          if (index > swiper.slides.length && !isVirtual) break;
          activeSlides.push(getSlideByIndex(index));
        }
      }
    } else {
      activeSlides.push(getSlideByIndex(swiper.activeIndex));
    }
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== "undefined") {
        const height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }
    if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = "".concat(newHeight, "px");
  }
  function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
    for (let i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
    }
  }
  var toggleSlideClasses$1 = (slideEl, condition, className) => {
    if (condition && !slideEl.classList.contains(className)) {
      slideEl.classList.add(className);
    } else if (!condition && slideEl.classList.contains(className)) {
      slideEl.classList.remove(className);
    }
  };
  function updateSlidesProgress(translate2) {
    if (translate2 === void 0) {
      translate2 = this && this.translate || 0;
    }
    const swiper = this;
    const params = swiper.params;
    const {
      slides,
      rtlTranslate: rtl,
      snapGrid
    } = swiper;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
    let offsetCenter = -translate2;
    if (rtl) offsetCenter = translate2;
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    let spaceBetween = params.spaceBetween;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slide2 = slides[i];
      let slideOffset = slide2.swiperSlideOffset;
      if (params.cssMode && params.centeredSlides) {
        slideOffset -= slides[0].swiperSlideOffset;
      }
      const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
      const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
      const slideBefore = -(offsetCenter - slideOffset);
      const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
      const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
      if (isVisible) {
        swiper.visibleSlides.push(slide2);
        swiper.visibleSlidesIndexes.push(i);
      }
      toggleSlideClasses$1(slide2, isVisible, params.slideVisibleClass);
      toggleSlideClasses$1(slide2, isFullyVisible, params.slideFullyVisibleClass);
      slide2.progress = rtl ? -slideProgress : slideProgress;
      slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
  }
  function updateProgress(translate2) {
    const swiper = this;
    if (typeof translate2 === "undefined") {
      const multiplier = swiper.rtlTranslate ? -1 : 1;
      translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let {
      progress,
      isBeginning,
      isEnd,
      progressLoop
    } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate2 - swiper.minTranslate()) / translatesDiff;
      const isBeginningRounded = Math.abs(translate2 - swiper.minTranslate()) < 1;
      const isEndRounded = Math.abs(translate2 - swiper.maxTranslate()) < 1;
      isBeginning = isBeginningRounded || progress <= 0;
      isEnd = isEndRounded || progress >= 1;
      if (isBeginningRounded) progress = 0;
      if (isEndRounded) progress = 1;
    }
    if (params.loop) {
      const firstSlideIndex = swiper.getSlideIndexByData(0);
      const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
      const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
      const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
      const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
      const translateAbs = Math.abs(translate2);
      if (translateAbs >= firstSlideTranslate) {
        progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
      } else {
        progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
      }
      if (progressLoop > 1) progressLoop -= 1;
    }
    Object.assign(swiper, {
      progress,
      progressLoop,
      isBeginning,
      isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate2);
    if (isBeginning && !wasBeginning) {
      swiper.emit("reachBeginning toEdge");
    }
    if (isEnd && !wasEnd) {
      swiper.emit("reachEnd toEdge");
    }
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
      swiper.emit("fromEdge");
    }
    swiper.emit("progress", progress);
  }
  var toggleSlideClasses = (slideEl, condition, className) => {
    if (condition && !slideEl.classList.contains(className)) {
      slideEl.classList.add(className);
    } else if (!condition && slideEl.classList.contains(className)) {
      slideEl.classList.remove(className);
    }
  };
  function updateSlidesClasses() {
    const swiper = this;
    const {
      slides,
      params,
      slidesEl,
      activeIndex
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const getFilteredSlide = (selector) => {
      return elementChildren(slidesEl, ".".concat(params.slideClass).concat(selector, ", swiper-slide").concat(selector))[0];
    };
    let activeSlide;
    let prevSlide;
    let nextSlide;
    if (isVirtual) {
      if (params.loop) {
        let slideIndex = activeIndex - swiper.virtual.slidesBefore;
        if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
        if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
        activeSlide = getFilteredSlide('[data-swiper-slide-index="'.concat(slideIndex, '"]'));
      } else {
        activeSlide = getFilteredSlide('[data-swiper-slide-index="'.concat(activeIndex, '"]'));
      }
    } else {
      if (gridEnabled) {
        activeSlide = slides.find((slideEl) => slideEl.column === activeIndex);
        nextSlide = slides.find((slideEl) => slideEl.column === activeIndex + 1);
        prevSlide = slides.find((slideEl) => slideEl.column === activeIndex - 1);
      } else {
        activeSlide = slides[activeIndex];
      }
    }
    if (activeSlide) {
      if (!gridEnabled) {
        nextSlide = elementNextAll(activeSlide, ".".concat(params.slideClass, ", swiper-slide"))[0];
        if (params.loop && !nextSlide) {
          nextSlide = slides[0];
        }
        prevSlide = elementPrevAll(activeSlide, ".".concat(params.slideClass, ", swiper-slide"))[0];
        if (params.loop && !prevSlide === 0) {
          prevSlide = slides[slides.length - 1];
        }
      }
    }
    slides.forEach((slideEl) => {
      toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
      toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
      toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
    });
    swiper.emitSlidesClasses();
  }
  var processLazyPreloader = (swiper, imageEl) => {
    if (!swiper || swiper.destroyed || !swiper.params) return;
    const slideSelector = () => swiper.isElement ? "swiper-slide" : ".".concat(swiper.params.slideClass);
    const slideEl = imageEl.closest(slideSelector());
    if (slideEl) {
      let lazyEl = slideEl.querySelector(".".concat(swiper.params.lazyPreloaderClass));
      if (!lazyEl && swiper.isElement) {
        if (slideEl.shadowRoot) {
          lazyEl = slideEl.shadowRoot.querySelector(".".concat(swiper.params.lazyPreloaderClass));
        } else {
          requestAnimationFrame(() => {
            if (slideEl.shadowRoot) {
              lazyEl = slideEl.shadowRoot.querySelector(".".concat(swiper.params.lazyPreloaderClass));
              if (lazyEl) lazyEl.remove();
            }
          });
        }
      }
      if (lazyEl) lazyEl.remove();
    }
  };
  var unlazy = (swiper, index) => {
    if (!swiper.slides[index]) return;
    const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
    if (imageEl) imageEl.removeAttribute("loading");
  };
  var preload = (swiper) => {
    if (!swiper || swiper.destroyed || !swiper.params) return;
    let amount = swiper.params.lazyPreloadPrevNext;
    const len = swiper.slides.length;
    if (!len || !amount || amount < 0) return;
    amount = Math.min(amount, len);
    const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
    const activeIndex = swiper.activeIndex;
    if (swiper.params.grid && swiper.params.grid.rows > 1) {
      const activeColumn = activeIndex;
      const preloadColumns = [activeColumn - amount];
      preloadColumns.push(...Array.from({
        length: amount
      }).map((_, i) => {
        return activeColumn + slidesPerView + i;
      }));
      swiper.slides.forEach((slideEl, i) => {
        if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
      });
      return;
    }
    const slideIndexLastInView = activeIndex + slidesPerView - 1;
    if (swiper.params.rewind || swiper.params.loop) {
      for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
        const realIndex = (i % len + len) % len;
        if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
      }
    } else {
      for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
        if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
          unlazy(swiper, i);
        }
      }
    }
  };
  function getActiveIndexByTranslate(swiper) {
    const {
      slidesGrid,
      params
    } = swiper;
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    let activeIndex;
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== "undefined") {
        if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate2 >= slidesGrid[i]) {
        activeIndex = i;
      }
    }
    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
    }
    return activeIndex;
  }
  function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const {
      snapGrid,
      params,
      activeIndex: previousIndex,
      realIndex: previousRealIndex,
      snapIndex: previousSnapIndex
    } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    const getVirtualRealIndex = (aIndex) => {
      let realIndex2 = aIndex - swiper.virtual.slidesBefore;
      if (realIndex2 < 0) {
        realIndex2 = swiper.virtual.slides.length + realIndex2;
      }
      if (realIndex2 >= swiper.virtual.slides.length) {
        realIndex2 -= swiper.virtual.slides.length;
      }
      return realIndex2;
    };
    if (typeof activeIndex === "undefined") {
      activeIndex = getActiveIndexByTranslate(swiper);
    }
    if (snapGrid.indexOf(translate2) >= 0) {
      snapIndex = snapGrid.indexOf(translate2);
    } else {
      const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex && !swiper.params.loop) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit("snapIndexChange");
      }
      return;
    }
    if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.realIndex = getVirtualRealIndex(activeIndex);
      return;
    }
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    let realIndex;
    if (swiper.virtual && params.virtual.enabled && params.loop) {
      realIndex = getVirtualRealIndex(activeIndex);
    } else if (gridEnabled) {
      const firstSlideInColumn = swiper.slides.find((slideEl) => slideEl.column === activeIndex);
      let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
      if (Number.isNaN(activeSlideIndex)) {
        activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
      }
      realIndex = Math.floor(activeSlideIndex / params.grid.rows);
    } else if (swiper.slides[activeIndex]) {
      const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
      if (slideIndex) {
        realIndex = parseInt(slideIndex, 10);
      } else {
        realIndex = activeIndex;
      }
    } else {
      realIndex = activeIndex;
    }
    Object.assign(swiper, {
      previousSnapIndex,
      snapIndex,
      previousRealIndex,
      realIndex,
      previousIndex,
      activeIndex
    });
    if (swiper.initialized) {
      preload(swiper);
    }
    swiper.emit("activeIndexChange");
    swiper.emit("snapIndexChange");
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
      if (previousRealIndex !== realIndex) {
        swiper.emit("realIndexChange");
      }
      swiper.emit("slideChange");
    }
  }
  function updateClickedSlide(el, path) {
    const swiper = this;
    const params = swiper.params;
    let slide2 = el.closest(".".concat(params.slideClass, ", swiper-slide"));
    if (!slide2 && swiper.isElement && path && path.length > 1 && path.includes(el)) {
      [...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
        if (!slide2 && pathEl.matches && pathEl.matches(".".concat(params.slideClass, ", swiper-slide"))) {
          slide2 = pathEl;
        }
      });
    }
    let slideFound = false;
    let slideIndex;
    if (slide2) {
      for (let i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide2) {
          slideFound = true;
          slideIndex = i;
          break;
        }
      }
    }
    if (slide2 && slideFound) {
      swiper.clickedSlide = slide2;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
      } else {
        swiper.clickedIndex = slideIndex;
      }
    } else {
      swiper.clickedSlide = void 0;
      swiper.clickedIndex = void 0;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }
  var update = {
    updateSize,
    updateSlides,
    updateAutoHeight,
    updateSlidesOffset,
    updateSlidesProgress,
    updateProgress,
    updateSlidesClasses,
    updateActiveIndex,
    updateClickedSlide
  };
  function getSwiperTranslate(axis) {
    if (axis === void 0) {
      axis = this.isHorizontal() ? "x" : "y";
    }
    const swiper = this;
    const {
      params,
      rtlTranslate: rtl,
      translate: translate2,
      wrapperEl
    } = swiper;
    if (params.virtualTranslate) {
      return rtl ? -translate2 : translate2;
    }
    if (params.cssMode) {
      return translate2;
    }
    let currentTranslate = getTranslate(wrapperEl, axis);
    currentTranslate += swiper.cssOverflowAdjustment();
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
  }
  function setTranslate(translate2, byController) {
    const swiper = this;
    const {
      rtlTranslate: rtl,
      params,
      wrapperEl,
      progress
    } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) {
      x = rtl ? -translate2 : translate2;
    } else {
      y = translate2;
    }
    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
    } else if (!params.virtualTranslate) {
      if (swiper.isHorizontal()) {
        x -= swiper.cssOverflowAdjustment();
      } else {
        y -= swiper.cssOverflowAdjustment();
      }
      wrapperEl.style.transform = "translate3d(".concat(x, "px, ").concat(y, "px, ").concat(z, "px)");
    }
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate2);
    }
    swiper.emit("setTranslate", swiper.translate, byController);
  }
  function minTranslate() {
    return -this.snapGrid[0];
  }
  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function translateTo(translate2, speed, runCallbacks, translateBounds, internal) {
    if (translate2 === void 0) {
      translate2 = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (translateBounds === void 0) {
      translateBounds = true;
    }
    const swiper = this;
    const {
      params,
      wrapperEl
    } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    const minTranslate2 = swiper.minTranslate();
    const maxTranslate2 = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate2 > minTranslate2) newTranslate = minTranslate2;
    else if (translateBounds && translate2 < maxTranslate2) newTranslate = maxTranslate2;
    else newTranslate = translate2;
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: -newTranslate,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: -newTranslate,
          behavior: "smooth"
        });
      }
      return true;
    }
    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionEnd");
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionStart");
      }
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd2(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;
            swiper.animating = false;
            if (runCallbacks) {
              swiper.emit("transitionEnd");
            }
          };
        }
        swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
      }
    }
    return true;
  }
  var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate,
    minTranslate,
    maxTranslate,
    translateTo
  };
  function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) {
      swiper.wrapperEl.style.transitionDuration = "".concat(duration, "ms");
      swiper.wrapperEl.style.transitionDelay = duration === 0 ? "0ms" : "";
    }
    swiper.emit("setTransition", duration, byController);
  }
  function transitionEmit(_ref) {
    let {
      swiper,
      runCallbacks,
      direction,
      step
    } = _ref;
    const {
      activeIndex,
      previousIndex
    } = swiper;
    let dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) dir = "next";
      else if (activeIndex < previousIndex) dir = "prev";
      else dir = "reset";
    }
    swiper.emit("transition".concat(step));
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === "reset") {
        swiper.emit("slideResetTransition".concat(step));
        return;
      }
      swiper.emit("slideChangeTransition".concat(step));
      if (dir === "next") {
        swiper.emit("slideNextTransition".concat(step));
      } else {
        swiper.emit("slidePrevTransition".concat(step));
      }
    }
  }
  function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params
    } = swiper;
    if (params.cssMode) return;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "Start"
    });
  }
  function transitionEnd(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params
    } = swiper;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "End"
    });
  }
  var transition = {
    setTransition,
    transitionStart,
    transitionEnd
  };
  function slideTo(index, speed, runCallbacks, internal, initial) {
    if (index === void 0) {
      index = 0;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === "string") {
      index = parseInt(index, 10);
    }
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    const {
      params,
      snapGrid,
      slidesGrid,
      previousIndex,
      activeIndex,
      rtlTranslate: rtl,
      wrapperEl,
      enabled
    } = swiper;
    if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    const translate2 = -snapGrid[snapIndex];
    if (params.normalizeSlideIndex) {
      for (let i = 0; i < slidesGrid.length; i += 1) {
        const normalizedTranslate = -Math.floor(translate2 * 100);
        const normalizedGrid = Math.floor(slidesGrid[i] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== "undefined") {
          if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
            slideIndex = i;
          } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
            slideIndex = i + 1;
          }
        } else if (normalizedTranslate >= normalizedGrid) {
          slideIndex = i;
        }
      }
    }
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && (rtl ? translate2 > swiper.translate && translate2 > swiper.minTranslate() : translate2 < swiper.translate && translate2 < swiper.minTranslate())) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) {
          return false;
        }
      }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) {
      swiper.emit("beforeSlideChangeStart");
    }
    swiper.updateProgress(translate2);
    let direction;
    if (slideIndex > activeIndex) direction = "next";
    else if (slideIndex < activeIndex) direction = "prev";
    else direction = "reset";
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    const isInitialVirtual = isVirtual && initial;
    if (!isInitialVirtual && (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate)) {
      swiper.updateActiveIndex(slideIndex);
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== "slide") {
        swiper.setTranslate(translate2);
      }
      if (direction !== "reset") {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      const t = rtl ? translate2 : -translate2;
      if (speed === 0) {
        if (isVirtual) {
          swiper.wrapperEl.style.scrollSnapType = "none";
          swiper._immediateVirtual = true;
        }
        if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
          swiper._cssModeVirtualInitialSet = true;
          requestAnimationFrame(() => {
            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
          });
        } else {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
        }
        if (isVirtual) {
          requestAnimationFrame(() => {
            swiper.wrapperEl.style.scrollSnapType = "";
            swiper._immediateVirtual = false;
          });
        }
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: t,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: t,
          behavior: "smooth"
        });
      }
      return true;
    }
    const browser2 = getBrowser();
    const isSafari = browser2.isSafari;
    if (isVirtual && !initial && isSafari && swiper.isElement) {
      swiper.virtual.update(false, false, slideIndex);
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate2);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit("beforeTransitionStart", speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) {
      swiper.transitionEnd(runCallbacks, direction);
    } else if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd2(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }
      swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
  }
  function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) {
      index = 0;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === "string") {
      const indexAsNumber = parseInt(index, 10);
      index = indexAsNumber;
    }
    const swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
    let newIndex = index;
    if (swiper.params.loop) {
      if (swiper.virtual && swiper.params.virtual.enabled) {
        newIndex = newIndex + swiper.virtual.slidesBefore;
      } else {
        let targetSlideIndex;
        if (gridEnabled) {
          const slideIndex = newIndex * swiper.params.grid.rows;
          targetSlideIndex = swiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex).column;
        } else {
          targetSlideIndex = swiper.getSlideIndexByData(newIndex);
        }
        const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
        const {
          centeredSlides
        } = swiper.params;
        let slidesPerView = swiper.params.slidesPerView;
        if (slidesPerView === "auto") {
          slidesPerView = swiper.slidesPerViewDynamic();
        } else {
          slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
          if (centeredSlides && slidesPerView % 2 === 0) {
            slidesPerView = slidesPerView + 1;
          }
        }
        let needLoopFix = cols - targetSlideIndex < slidesPerView;
        if (centeredSlides) {
          needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
        }
        if (internal && centeredSlides && swiper.params.slidesPerView !== "auto" && !gridEnabled) {
          needLoopFix = false;
        }
        if (needLoopFix) {
          const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
          swiper.loopFix({
            direction,
            slideTo: true,
            activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
            slideRealIndex: direction === "next" ? swiper.realIndex : void 0
          });
        }
        if (gridEnabled) {
          const slideIndex = newIndex * swiper.params.grid.rows;
          newIndex = swiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex).column;
        } else {
          newIndex = swiper.getSlideIndexByData(newIndex);
        }
      }
    }
    requestAnimationFrame(() => {
      swiper.slideTo(newIndex, speed, runCallbacks, internal);
    });
    return swiper;
  }
  function slideNext(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      enabled,
      params,
      animating
    } = swiper;
    if (!enabled || swiper.destroyed) return swiper;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
    }
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding) return false;
      swiper.loopFix({
        direction: "next"
      });
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
      if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
        requestAnimationFrame(() => {
          swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        });
        return true;
      }
    }
    if (params.rewind && swiper.isEnd) {
      return swiper.slideTo(0, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
  }
  function slidePrev(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params,
      snapGrid,
      slidesGrid,
      rtlTranslate,
      enabled,
      animating
    } = swiper;
    if (!enabled || swiper.destroyed) return swiper;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding) return false;
      swiper.loopFix({
        direction: "prev"
      });
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
    }
    const translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0) return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate2);
    const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
    const isFreeMode = params.freeMode && params.freeMode.enabled;
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === "undefined" && (params.cssMode || isFreeMode)) {
      let prevSnapIndex;
      snapGrid.forEach((snap, snapIndex) => {
        if (normalizedTranslate >= snap) {
          prevSnapIndex = snapIndex;
        }
      });
      if (typeof prevSnapIndex !== "undefined") {
        prevSnap = isFreeMode ? snapGrid[prevSnapIndex] : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
      }
    }
    let prevIndex = 0;
    if (typeof prevSnap !== "undefined") {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
      if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
        prevIndex = Math.max(prevIndex, 0);
      }
    }
    if (params.rewind && swiper.isBeginning) {
      const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(prevIndex, speed, runCallbacks, internal);
      });
      return true;
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }
  function slideReset(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }
  function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (threshold === void 0) {
      threshold = 0.5;
    }
    const swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate2 >= swiper.snapGrid[snapIndex]) {
      const currentSnap = swiper.snapGrid[snapIndex];
      const nextSnap = swiper.snapGrid[snapIndex + 1];
      if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
        index += swiper.params.slidesPerGroup;
      }
    } else {
      const prevSnap = swiper.snapGrid[snapIndex - 1];
      const currentSnap = swiper.snapGrid[snapIndex];
      if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
        index -= swiper.params.slidesPerGroup;
      }
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
  }
  function slideToClickedSlide() {
    const swiper = this;
    if (swiper.destroyed) return;
    const {
      params,
      slidesEl
    } = swiper;
    const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    const slideSelector = swiper.isElement ? "swiper-slide" : ".".concat(params.slideClass);
    if (params.loop) {
      if (swiper.animating) return;
      realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
      if (params.centeredSlides) {
        if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
          swiper.loopFix();
          slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, "".concat(slideSelector, '[data-swiper-slide-index="').concat(realIndex, '"]'))[0]);
          nextTick(() => {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, "".concat(slideSelector, '[data-swiper-slide-index="').concat(realIndex, '"]'))[0]);
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  var slide = {
    slideTo,
    slideToLoop,
    slideNext,
    slidePrev,
    slideReset,
    slideToClosest,
    slideToClickedSlide
  };
  function loopCreate(slideRealIndex) {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
    const initSlides = () => {
      const slides = elementChildren(slidesEl, ".".concat(params.slideClass, ", swiper-slide"));
      slides.forEach((el, index) => {
        el.setAttribute("data-swiper-slide-index", index);
      });
    };
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
    const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
    const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
    const addBlankSlides = (amountOfSlides) => {
      for (let i = 0; i < amountOfSlides; i += 1) {
        const slideEl = swiper.isElement ? createElement("swiper-slide", [params.slideBlankClass]) : createElement("div", [params.slideClass, params.slideBlankClass]);
        swiper.slidesEl.append(slideEl);
      }
    };
    if (shouldFillGroup) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
        addBlankSlides(slidesToAdd);
        swiper.recalcSlides();
        swiper.updateSlides();
      } else {
        showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      }
      initSlides();
    } else if (shouldFillGrid) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
        addBlankSlides(slidesToAdd);
        swiper.recalcSlides();
        swiper.updateSlides();
      } else {
        showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      }
      initSlides();
    } else {
      initSlides();
    }
    swiper.loopFix({
      slideRealIndex,
      direction: params.centeredSlides ? void 0 : "next"
    });
  }
  function loopFix(_temp) {
    let {
      slideRealIndex,
      slideTo: slideTo2 = true,
      direction,
      setTranslate: setTranslate2,
      activeSlideIndex,
      byController,
      byMousewheel
    } = _temp === void 0 ? {} : _temp;
    const swiper = this;
    if (!swiper.params.loop) return;
    swiper.emit("beforeLoopFix");
    const {
      slides,
      allowSlidePrev,
      allowSlideNext,
      slidesEl,
      params
    } = swiper;
    const {
      centeredSlides
    } = params;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    if (swiper.virtual && params.virtual.enabled) {
      if (slideTo2) {
        if (!params.centeredSlides && swiper.snapIndex === 0) {
          swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
        } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
          swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
        } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
          swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
        }
      }
      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;
      swiper.emit("loopFix");
      return;
    }
    let slidesPerView = params.slidesPerView;
    if (slidesPerView === "auto") {
      slidesPerView = swiper.slidesPerViewDynamic();
    } else {
      slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
      if (centeredSlides && slidesPerView % 2 === 0) {
        slidesPerView = slidesPerView + 1;
      }
    }
    const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
    let loopedSlides = slidesPerGroup;
    if (loopedSlides % slidesPerGroup !== 0) {
      loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
    }
    loopedSlides += params.loopAdditionalSlides;
    swiper.loopedSlides = loopedSlides;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    if (slides.length < slidesPerView + loopedSlides) {
      showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters");
    } else if (gridEnabled && params.grid.fill === "row") {
      showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    }
    const prependSlidesIndexes = [];
    const appendSlidesIndexes = [];
    let activeIndex = swiper.activeIndex;
    if (typeof activeSlideIndex === "undefined") {
      activeSlideIndex = swiper.getSlideIndex(slides.find((el) => el.classList.contains(params.slideActiveClass)));
    } else {
      activeIndex = activeSlideIndex;
    }
    const isNext = direction === "next" || !direction;
    const isPrev = direction === "prev" || !direction;
    let slidesPrepended = 0;
    let slidesAppended = 0;
    const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
    const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
    const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate2 === "undefined" ? -slidesPerView / 2 + 0.5 : 0);
    if (activeColIndexWithShift < loopedSlides) {
      slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
      for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
        const index = i - Math.floor(i / cols) * cols;
        if (gridEnabled) {
          const colIndexToPrepend = cols - index - 1;
          for (let i2 = slides.length - 1; i2 >= 0; i2 -= 1) {
            if (slides[i2].column === colIndexToPrepend) prependSlidesIndexes.push(i2);
          }
        } else {
          prependSlidesIndexes.push(cols - index - 1);
        }
      }
    } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
      slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
      for (let i = 0; i < slidesAppended; i += 1) {
        const index = i - Math.floor(i / cols) * cols;
        if (gridEnabled) {
          slides.forEach((slide2, slideIndex) => {
            if (slide2.column === index) appendSlidesIndexes.push(slideIndex);
          });
        } else {
          appendSlidesIndexes.push(index);
        }
      }
    }
    swiper.__preventObserver__ = true;
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
    if (isPrev) {
      prependSlidesIndexes.forEach((index) => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.prepend(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    if (isNext) {
      appendSlidesIndexes.forEach((index) => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.append(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    swiper.recalcSlides();
    if (params.slidesPerView === "auto") {
      swiper.updateSlides();
    } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
      swiper.slides.forEach((slide2, slideIndex) => {
        swiper.grid.updateSlide(slideIndex, slide2, swiper.slides);
      });
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    if (slideTo2) {
      if (prependSlidesIndexes.length > 0 && isPrev) {
        if (typeof slideRealIndex === "undefined") {
          const currentSlideTranslate = swiper.slidesGrid[activeIndex];
          const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - diff);
          } else {
            swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
            if (setTranslate2) {
              swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
              swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          if (setTranslate2) {
            const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
            swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
            swiper.touchEventsData.currentTranslate = swiper.translate;
          }
        }
      } else if (appendSlidesIndexes.length > 0 && isNext) {
        if (typeof slideRealIndex === "undefined") {
          const currentSlideTranslate = swiper.slidesGrid[activeIndex];
          const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - diff);
          } else {
            swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
            if (setTranslate2) {
              swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
              swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
        }
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.controller && swiper.controller.control && !byController) {
      const loopParams = {
        slideRealIndex,
        direction,
        setTranslate: setTranslate2,
        activeSlideIndex,
        byController: true
      };
      if (Array.isArray(swiper.controller.control)) {
        swiper.controller.control.forEach((c) => {
          if (!c.destroyed && c.params.loop) c.loopFix(__spreadProps(__spreadValues({}, loopParams), {
            slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo2 : false
          }));
        });
      } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
        swiper.controller.control.loopFix(__spreadProps(__spreadValues({}, loopParams), {
          slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo2 : false
        }));
      }
    }
    swiper.emit("loopFix");
  }
  function loopDestroy() {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
    swiper.recalcSlides();
    const newSlidesOrder = [];
    swiper.slides.forEach((slideEl) => {
      const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
      newSlidesOrder[index] = slideEl;
    });
    swiper.slides.forEach((slideEl) => {
      slideEl.removeAttribute("data-swiper-slide-index");
    });
    newSlidesOrder.forEach((slideEl) => {
      slidesEl.append(slideEl);
    });
    swiper.recalcSlides();
    swiper.slideTo(swiper.realIndex, 0);
  }
  var loop = {
    loopCreate,
    loopFix,
    loopDestroy
  };
  function setGrabCursor(moving) {
    const swiper = this;
    if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    el.style.cursor = "move";
    el.style.cursor = moving ? "grabbing" : "grab";
    if (swiper.isElement) {
      requestAnimationFrame(() => {
        swiper.__preventObserver__ = false;
      });
    }
  }
  function unsetGrabCursor() {
    const swiper = this;
    if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
      return;
    }
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
    if (swiper.isElement) {
      requestAnimationFrame(() => {
        swiper.__preventObserver__ = false;
      });
    }
  }
  var grabCursor = {
    setGrabCursor,
    unsetGrabCursor
  };
  function closestElement(selector, base) {
    if (base === void 0) {
      base = this;
    }
    function __closestFrom(el) {
      if (!el || el === getDocument() || el === getWindow()) return null;
      if (el.assignedSlot) el = el.assignedSlot;
      const found = el.closest(selector);
      if (!found && !el.getRootNode) {
        return null;
      }
      return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
  }
  function preventEdgeSwipe(swiper, event2, startX) {
    const window2 = getWindow();
    const {
      params
    } = swiper;
    const edgeSwipeDetection = params.edgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
      if (edgeSwipeDetection === "prevent") {
        event2.preventDefault();
        return true;
      }
      return false;
    }
    return true;
  }
  function onTouchStart(event2) {
    const swiper = this;
    const document2 = getDocument();
    let e = event2;
    if (e.originalEvent) e = e.originalEvent;
    const data = swiper.touchEventsData;
    if (e.type === "pointerdown") {
      if (data.pointerId !== null && data.pointerId !== e.pointerId) {
        return;
      }
      data.pointerId = e.pointerId;
    } else if (e.type === "touchstart" && e.targetTouches.length === 1) {
      data.touchId = e.targetTouches[0].identifier;
    }
    if (e.type === "touchstart") {
      preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
      return;
    }
    const {
      params,
      touches,
      enabled
    } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && e.pointerType === "mouse") return;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    if (!swiper.animating && params.cssMode && params.loop) {
      swiper.loopFix();
    }
    let targetEl = e.target;
    if (params.touchEventsTarget === "wrapper") {
      if (!elementIsChildOf(targetEl, swiper.wrapperEl)) return;
    }
    if ("which" in e && e.which === 3) return;
    if ("button" in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return;
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
    const eventPath = e.composedPath ? e.composedPath() : e.path;
    if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
      targetEl = eventPath[0];
    }
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : ".".concat(params.noSwipingClass);
    const isTargetShadow = !!(e.target && e.target.shadowRoot);
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!targetEl.closest(params.swipeHandler)) return;
    }
    touches.currentX = e.pageX;
    touches.currentY = e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY;
    if (!preventEdgeSwipe(swiper, e, startX)) {
      return;
    }
    Object.assign(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: void 0,
      startMoving: void 0
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = void 0;
    if (params.threshold > 0) data.allowThresholdMove = false;
    let preventDefault = true;
    if (targetEl.matches(data.focusableElements)) {
      preventDefault = false;
      if (targetEl.nodeName === "SELECT") {
        data.isTouched = false;
      }
    }
    if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl && (e.pointerType === "mouse" || e.pointerType !== "mouse" && !targetEl.matches(data.focusableElements))) {
      document2.activeElement.blur();
    }
    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
      e.preventDefault();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
      swiper.freeMode.onTouchStart();
    }
    swiper.emit("touchStart", e);
  }
  function onTouchMove(event2) {
    const document2 = getDocument();
    const swiper = this;
    const data = swiper.touchEventsData;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      enabled
    } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && event2.pointerType === "mouse") return;
    let e = event2;
    if (e.originalEvent) e = e.originalEvent;
    if (e.type === "pointermove") {
      if (data.touchId !== null) return;
      const id = e.pointerId;
      if (id !== data.pointerId) return;
    }
    let targetTouch;
    if (e.type === "touchmove") {
      targetTouch = [...e.changedTouches].find((t) => t.identifier === data.touchId);
      if (!targetTouch || targetTouch.identifier !== data.touchId) return;
    } else {
      targetTouch = e;
    }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit("touchMoveOpposite", e);
      }
      return;
    }
    const pageX = targetTouch.pageX;
    const pageY = targetTouch.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      if (!e.target.matches(data.focusableElements)) {
        swiper.allowClick = false;
      }
      if (data.isTouched) {
        Object.assign(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY
        });
        data.touchStartTime = now();
      }
      return;
    }
    if (params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
        return;
      }
    }
    if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== e.target && e.pointerType !== "mouse") {
      document2.activeElement.blur();
    }
    if (document2.activeElement) {
      if (e.target === document2.activeElement && e.target.matches(data.focusableElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit("touchMove", e);
    }
    touches.previousX = touches.currentX;
    touches.previousY = touches.currentY;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(__pow(diffX, 2) + __pow(diffY, 2)) < swiper.params.threshold) return;
    if (typeof data.isScrolling === "undefined") {
      let touchAngle;
      if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
        data.isScrolling = false;
      } else {
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    if (typeof data.startMoving === "undefined") {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling || e.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) {
      e.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }
    let diff = swiper.isHorizontal() ? diffX : diffY;
    let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
    if (params.oneWayMovement) {
      diff = Math.abs(diff) * (rtl ? 1 : -1);
      touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
    }
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) {
      diff = -diff;
      touchesDiff = -touchesDiff;
    }
    const prevTouchesDirection = swiper.touchesDirection;
    swiper.swipeDirection = diff > 0 ? "prev" : "next";
    swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
    const isLoop = swiper.params.loop && !params.cssMode;
    const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
    if (!data.isMoved) {
      if (isLoop && allowLoopFix) {
        swiper.loopFix({
          direction: swiper.swipeDirection
        });
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        const evt = new window.CustomEvent("transitionend", {
          bubbles: true,
          cancelable: true,
          detail: {
            bySwiperTouchMove: true
          }
        });
        swiper.wrapperEl.dispatchEvent(evt);
      }
      data.allowMomentumBounce = false;
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit("sliderFirstMove", e);
    }
    let loopFixed;
    (/* @__PURE__ */ new Date()).getTime();
    if (params._loopSwapReset !== false && data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY,
        startTranslate: data.currentTranslate
      });
      data.loopSwapReset = true;
      data.startTranslate = data.currentTranslate;
      return;
    }
    swiper.emit("sliderMove", e);
    data.isMoved = true;
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if (diff > 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
        swiper.loopFix({
          direction: "prev",
          setTranslate: true,
          activeSlideIndex: 0
        });
      }
      if (data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper.minTranslate() - 1 + __pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
        }
      }
    } else if (diff < 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
        swiper.loopFix({
          direction: "next",
          setTranslate: true,
          activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
        });
      }
      if (data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper.maxTranslate() + 1 - __pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
        }
      }
    }
    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }
    if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
      data.currentTranslate = data.startTranslate;
    }
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }
    if (!params.followFinger || params.cssMode) return;
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
      swiper.freeMode.onTouchMove();
    }
    swiper.updateProgress(data.currentTranslate);
    swiper.setTranslate(data.currentTranslate);
  }
  function onTouchEnd(event2) {
    const swiper = this;
    const data = swiper.touchEventsData;
    let e = event2;
    if (e.originalEvent) e = e.originalEvent;
    let targetTouch;
    const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
    if (!isTouchEvent) {
      if (data.touchId !== null) return;
      if (e.pointerId !== data.pointerId) return;
      targetTouch = e;
    } else {
      targetTouch = [...e.changedTouches].find((t) => t.identifier === data.touchId);
      if (!targetTouch || targetTouch.identifier !== data.touchId) return;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type)) {
      const proceed = ["pointercancel", "contextmenu"].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
      if (!proceed) {
        return;
      }
    }
    data.pointerId = null;
    data.touchId = null;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      slidesGrid,
      enabled
    } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && e.pointerType === "mouse") return;
    if (data.allowTouchCallbacks) {
      swiper.emit("touchEnd", e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }
    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (swiper.allowClick) {
      const pathTree = e.path || e.composedPath && e.composedPath();
      swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
      swiper.emit("tap click", e);
      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        swiper.emit("doubleTap doubleClick", e);
      }
    }
    data.lastClickTime = now();
    nextTick(() => {
      if (!swiper.destroyed) swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }
    if (params.cssMode) {
      return;
    }
    if (params.freeMode && params.freeMode.enabled) {
      swiper.freeMode.onTouchEnd({
        currentPos
      });
      return;
    }
    const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
      const increment2 = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (typeof slidesGrid[i + increment2] !== "undefined") {
        if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment2]) {
          stopIndex = i;
          groupSize = slidesGrid[i + increment2] - slidesGrid[i];
        }
      } else if (swipeToLast || currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
      if (swiper.isBeginning) {
        rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      } else if (swiper.isEnd) {
        rewindFirstIndex = 0;
      }
    }
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === "next") {
        if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
        else swiper.slideTo(stopIndex);
      }
      if (swiper.swipeDirection === "prev") {
        if (ratio > 1 - params.longSwipesRatio) {
          swiper.slideTo(stopIndex + increment);
        } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
          swiper.slideTo(rewindLastIndex);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    } else {
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === "next") {
          swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
        }
        if (swiper.swipeDirection === "prev") {
          swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
        }
      } else if (e.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + increment);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }
  function onResize() {
    const swiper = this;
    const {
      params,
      el
    } = swiper;
    if (el && el.offsetWidth === 0) return;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    const {
      allowSlideNext,
      allowSlidePrev,
      snapGrid
    } = swiper;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    const isVirtualLoop = isVirtual && params.loop;
    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      if (swiper.params.loop && !isVirtual) {
        swiper.slideToLoop(swiper.realIndex, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
    }
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      clearTimeout(swiper.autoplay.resizeTimeout);
      swiper.autoplay.resizeTimeout = setTimeout(() => {
        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
          swiper.autoplay.resume();
        }
      }, 500);
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }
  function onClick(e) {
    const swiper = this;
    if (!swiper.enabled) return;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) e.preventDefault();
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }
  function onScroll() {
    const swiper = this;
    const {
      wrapperEl,
      rtlTranslate,
      enabled
    } = swiper;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) {
      swiper.translate = -wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollTop;
    }
    if (swiper.translate === 0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== swiper.progress) {
      swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    }
    swiper.emit("setTranslate", swiper.translate, false);
  }
  function onLoad(e) {
    const swiper = this;
    processLazyPreloader(swiper, e.target);
    if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) {
      return;
    }
    swiper.update();
  }
  function onDocumentTouchStart() {
    const swiper = this;
    if (swiper.documentTouchHandlerProceeded) return;
    swiper.documentTouchHandlerProceeded = true;
    if (swiper.params.touchReleaseOnEdges) {
      swiper.el.style.touchAction = "auto";
    }
  }
  var events = (swiper, method) => {
    const document2 = getDocument();
    const {
      params,
      el,
      wrapperEl,
      device
    } = swiper;
    const capture = !!params.nested;
    const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
    const swiperMethod = method;
    if (!el || typeof el === "string") return;
    document2[domMethod]("touchstart", swiper.onDocumentTouchStart, {
      passive: false,
      capture
    });
    el[domMethod]("touchstart", swiper.onTouchStart, {
      passive: false
    });
    el[domMethod]("pointerdown", swiper.onTouchStart, {
      passive: false
    });
    document2[domMethod]("touchmove", swiper.onTouchMove, {
      passive: false,
      capture
    });
    document2[domMethod]("pointermove", swiper.onTouchMove, {
      passive: false,
      capture
    });
    document2[domMethod]("touchend", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerup", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointercancel", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("touchcancel", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerout", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerleave", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("contextmenu", swiper.onTouchEnd, {
      passive: true
    });
    if (params.preventClicks || params.preventClicksPropagation) {
      el[domMethod]("click", swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl[domMethod]("scroll", swiper.onScroll);
    }
    if (params.updateOnWindowResize) {
      swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
    } else {
      swiper[swiperMethod]("observerUpdate", onResize, true);
    }
    el[domMethod]("load", swiper.onLoad, {
      capture: true
    });
  };
  function attachEvents() {
    const swiper = this;
    const {
      params
    } = swiper;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }
    swiper.onClick = onClick.bind(swiper);
    swiper.onLoad = onLoad.bind(swiper);
    events(swiper, "on");
  }
  function detachEvents() {
    const swiper = this;
    events(swiper, "off");
  }
  var events$1 = {
    attachEvents,
    detachEvents
  };
  var isGridEnabled = (swiper, params) => {
    return swiper.grid && params.grid && params.grid.rows > 1;
  };
  function setBreakpoint() {
    const swiper = this;
    const {
      realIndex,
      initialized,
      params,
      el
    } = swiper;
    const breakpoints2 = params.breakpoints;
    if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0) return;
    const document2 = getDocument();
    const breakpointsBase = params.breakpointsBase === "window" || !params.breakpointsBase ? params.breakpointsBase : "container";
    const breakpointContainer = ["window", "container"].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document2.querySelector(params.breakpointsBase);
    const breakpoint = swiper.getBreakpoint(breakpoints2, breakpointsBase, breakpointContainer);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasGrabCursor = swiper.params.grabCursor;
    const isGrabCursor = breakpointParams.grabCursor;
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove("".concat(params.containerModifierClass, "grid"), "".concat(params.containerModifierClass, "grid-column"));
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add("".concat(params.containerModifierClass, "grid"));
      if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
        el.classList.add("".concat(params.containerModifierClass, "grid-column"));
      }
      swiper.emitContainerClasses();
    }
    if (wasGrabCursor && !isGrabCursor) {
      swiper.unsetGrabCursor();
    } else if (!wasGrabCursor && isGrabCursor) {
      swiper.setGrabCursor();
    }
    ["navigation", "pagination", "scrollbar"].forEach((prop) => {
      if (typeof breakpointParams[prop] === "undefined") return;
      const wasModuleEnabled = params[prop] && params[prop].enabled;
      const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
      if (wasModuleEnabled && !isModuleEnabled) {
        swiper[prop].disable();
      }
      if (!wasModuleEnabled && isModuleEnabled) {
        swiper[prop].enable();
      }
    });
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    const wasLoop = params.loop;
    if (directionChanged && initialized) {
      swiper.changeDirection();
    }
    extend2(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    const hasLoop = swiper.params.loop;
    Object.assign(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) {
      swiper.disable();
    } else if (!wasEnabled && isEnabled) {
      swiper.enable();
    }
    swiper.currentBreakpoint = breakpoint;
    swiper.emit("_beforeBreakpoint", breakpointParams);
    if (initialized) {
      if (needsReLoop) {
        swiper.loopDestroy();
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      } else if (!wasLoop && hasLoop) {
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      } else if (wasLoop && !hasLoop) {
        swiper.loopDestroy();
      }
    }
    swiper.emit("breakpoint", breakpointParams);
  }
  function getBreakpoint(breakpoints2, base, containerEl) {
    if (base === void 0) {
      base = "window";
    }
    if (!breakpoints2 || base === "container" && !containerEl) return void 0;
    let breakpoint = false;
    const window2 = getWindow();
    const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints2).map((point) => {
      if (typeof point === "string" && point.indexOf("@") === 0) {
        const minRatio = parseFloat(point.substr(1));
        const value = currentHeight * minRatio;
        return {
          value,
          point
        };
      }
      return {
        value: point,
        point
      };
    });
    points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
    for (let i = 0; i < points.length; i += 1) {
      const {
        point,
        value
      } = points[i];
      if (base === "window") {
        if (window2.matchMedia("(min-width: ".concat(value, "px)")).matches) {
          breakpoint = point;
        }
      } else if (value <= containerEl.clientWidth) {
        breakpoint = point;
      }
    }
    return breakpoint || "max";
  }
  var breakpoints = {
    setBreakpoint,
    getBreakpoint
  };
  function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item) => {
      if (typeof item === "object") {
        Object.keys(item).forEach((classNames) => {
          if (item[classNames]) {
            resultClasses.push(prefix + classNames);
          }
        });
      } else if (typeof item === "string") {
        resultClasses.push(prefix + item);
      }
    });
    return resultClasses;
  }
  function addClasses() {
    const swiper = this;
    const {
      classNames,
      params,
      rtl,
      el,
      device
    } = swiper;
    const suffixes = prepareClasses(["initialized", params.direction, {
      "free-mode": swiper.params.freeMode && params.freeMode.enabled
    }, {
      "autoheight": params.autoHeight
    }, {
      "rtl": rtl
    }, {
      "grid": params.grid && params.grid.rows > 1
    }, {
      "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
    }, {
      "android": device.android
    }, {
      "ios": device.ios
    }, {
      "css-mode": params.cssMode
    }, {
      "centered": params.cssMode && params.centeredSlides
    }, {
      "watch-progress": params.watchSlidesProgress
    }], params.containerModifierClass);
    classNames.push(...suffixes);
    el.classList.add(...classNames);
    swiper.emitContainerClasses();
  }
  function removeClasses() {
    const swiper = this;
    const {
      el,
      classNames
    } = swiper;
    if (!el || typeof el === "string") return;
    el.classList.remove(...classNames);
    swiper.emitContainerClasses();
  }
  var classes = {
    addClasses,
    removeClasses
  };
  function checkOverflow() {
    const swiper = this;
    const {
      isLocked: wasLocked,
      params
    } = swiper;
    const {
      slidesOffsetBefore
    } = params;
    if (slidesOffsetBefore) {
      const lastSlideIndex = swiper.slides.length - 1;
      const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
      swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }
    if (params.allowSlideNext === true) {
      swiper.allowSlideNext = !swiper.isLocked;
    }
    if (params.allowSlidePrev === true) {
      swiper.allowSlidePrev = !swiper.isLocked;
    }
    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
    }
    if (wasLocked !== swiper.isLocked) {
      swiper.emit(swiper.isLocked ? "lock" : "unlock");
    }
  }
  var checkOverflow$1 = {
    checkOverflow
  };
  var defaults = {
    init: true,
    direction: "horizontal",
    oneWayMovement: false,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    eventsPrefix: "swiper",
    enabled: true,
    focusableElements: "input, select, option, textarea, button, video, label",
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: "slide",
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: void 0,
    breakpointsBase: "window",
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 5,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // loop
    loop: false,
    loopAddBlankSlides: true,
    loopAdditionalSlides: 0,
    loopPreventsSliding: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: "swiper-",
    // NEW
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
  };
  function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj) {
      if (obj === void 0) {
        obj = {};
      }
      const moduleParamName = Object.keys(obj)[0];
      const moduleParams = obj[moduleParamName];
      if (typeof moduleParams !== "object" || moduleParams === null) {
        extend2(allModulesParams, obj);
        return;
      }
      if (params[moduleParamName] === true) {
        params[moduleParamName] = {
          enabled: true
        };
      }
      if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
        params[moduleParamName].auto = true;
      }
      if (["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
        params[moduleParamName].auto = true;
      }
      if (!(moduleParamName in params && "enabled" in moduleParams)) {
        extend2(allModulesParams, obj);
        return;
      }
      if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
        params[moduleParamName].enabled = true;
      }
      if (!params[moduleParamName]) params[moduleParamName] = {
        enabled: false
      };
      extend2(allModulesParams, obj);
    };
  }
  var prototypes = {
    eventsEmitter,
    update,
    translate,
    transition,
    slide,
    loop,
    grabCursor,
    events: events$1,
    breakpoints,
    checkOverflow: checkOverflow$1,
    classes
  };
  var extendedDefaults = {};
  var Swiper = class _Swiper {
    constructor() {
      let el;
      let params;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
        params = args[0];
      } else {
        [el, params] = args;
      }
      if (!params) params = {};
      params = extend2({}, params);
      if (el && !params.el) params.el = el;
      const document2 = getDocument();
      if (params.el && typeof params.el === "string" && document2.querySelectorAll(params.el).length > 1) {
        const swipers = [];
        document2.querySelectorAll(params.el).forEach((containerEl) => {
          const newParams = extend2({}, params, {
            el: containerEl
          });
          swipers.push(new _Swiper(newParams));
        });
        return swipers;
      }
      const swiper = this;
      swiper.__swiper__ = true;
      swiper.support = getSupport();
      swiper.device = getDevice({
        userAgent: params.userAgent
      });
      swiper.browser = getBrowser();
      swiper.eventsListeners = {};
      swiper.eventsAnyListeners = [];
      swiper.modules = [...swiper.__modules__];
      if (params.modules && Array.isArray(params.modules)) {
        swiper.modules.push(...params.modules);
      }
      const allModulesParams = {};
      swiper.modules.forEach((mod) => {
        mod({
          params,
          swiper,
          extendParams: moduleExtendParams(params, allModulesParams),
          on: swiper.on.bind(swiper),
          once: swiper.once.bind(swiper),
          off: swiper.off.bind(swiper),
          emit: swiper.emit.bind(swiper)
        });
      });
      const swiperParams = extend2({}, defaults, allModulesParams);
      swiper.params = extend2({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = extend2({}, swiper.params);
      swiper.passedParams = extend2({}, params);
      if (swiper.params && swiper.params.on) {
        Object.keys(swiper.params.on).forEach((eventName) => {
          swiper.on(eventName, swiper.params.on[eventName]);
        });
      }
      if (swiper.params && swiper.params.onAny) {
        swiper.onAny(swiper.params.onAny);
      }
      Object.assign(swiper, {
        enabled: swiper.params.enabled,
        el,
        // Classes
        classNames: [],
        // Slides
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal() {
          return swiper.params.direction === "horizontal";
        },
        isVertical() {
          return swiper.params.direction === "vertical";
        },
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: true,
        isEnd: false,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / __pow(2, 23)) * __pow(2, 23);
        },
        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
        // Touch Events
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          // Form elements to match
          focusableElements: swiper.params.focusableElements,
          // Last click time
          lastClickTime: 0,
          clickTimeout: void 0,
          // Velocities
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null
        },
        // Clicks
        allowClick: true,
        // Touches
        allowTouchMove: swiper.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0
      });
      swiper.emit("_swiper");
      if (swiper.params.init) {
        swiper.init();
      }
      return swiper;
    }
    getDirectionLabel(property) {
      if (this.isHorizontal()) {
        return property;
      }
      return {
        "width": "height",
        "margin-top": "margin-left",
        "margin-bottom ": "margin-right",
        "margin-left": "margin-top",
        "margin-right": "margin-bottom",
        "padding-left": "padding-top",
        "padding-right": "padding-bottom",
        "marginRight": "marginBottom"
      }[property];
    }
    getSlideIndex(slideEl) {
      const {
        slidesEl,
        params
      } = this;
      const slides = elementChildren(slidesEl, ".".concat(params.slideClass, ", swiper-slide"));
      const firstSlideIndex = elementIndex(slides[0]);
      return elementIndex(slideEl) - firstSlideIndex;
    }
    getSlideIndexByData(index) {
      return this.getSlideIndex(this.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === index));
    }
    recalcSlides() {
      const swiper = this;
      const {
        slidesEl,
        params
      } = swiper;
      swiper.slides = elementChildren(slidesEl, ".".concat(params.slideClass, ", swiper-slide"));
    }
    enable() {
      const swiper = this;
      if (swiper.enabled) return;
      swiper.enabled = true;
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }
      swiper.emit("enable");
    }
    disable() {
      const swiper = this;
      if (!swiper.enabled) return;
      swiper.enabled = false;
      if (swiper.params.grabCursor) {
        swiper.unsetGrabCursor();
      }
      swiper.emit("disable");
    }
    setProgress(progress, speed) {
      const swiper = this;
      progress = Math.min(Math.max(progress, 0), 1);
      const min = swiper.minTranslate();
      const max = swiper.maxTranslate();
      const current = (max - min) * progress + min;
      swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el) return;
      const cls = swiper.el.className.split(" ").filter((className) => {
        return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
      });
      swiper.emit("_containerClasses", cls.join(" "));
    }
    getSlideClasses(slideEl) {
      const swiper = this;
      if (swiper.destroyed) return "";
      return slideEl.className.split(" ").filter((className) => {
        return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
      }).join(" ");
    }
    emitSlidesClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el) return;
      const updates = [];
      swiper.slides.forEach((slideEl) => {
        const classNames = swiper.getSlideClasses(slideEl);
        updates.push({
          slideEl,
          classNames
        });
        swiper.emit("_slideClass", slideEl, classNames);
      });
      swiper.emit("_slideClasses", updates);
    }
    slidesPerViewDynamic(view, exact) {
      if (view === void 0) {
        view = "current";
      }
      if (exact === void 0) {
        exact = false;
      }
      const swiper = this;
      const {
        params,
        slides,
        slidesGrid,
        slidesSizesGrid,
        size: swiperSize,
        activeIndex
      } = swiper;
      let spv = 1;
      if (typeof params.slidesPerView === "number") return params.slidesPerView;
      if (params.centeredSlides) {
        let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
        let breakLoop;
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += Math.ceil(slides[i].swiperSlideSize);
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
      } else {
        if (view === "current") {
          for (let i = activeIndex + 1; i < slides.length; i += 1) {
            const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        } else {
          for (let i = activeIndex - 1; i >= 0; i -= 1) {
            const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        }
      }
      return spv;
    }
    update() {
      const swiper = this;
      if (!swiper || swiper.destroyed) return;
      const {
        snapGrid,
        params
      } = swiper;
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
        if (imageEl.complete) {
          processLazyPreloader(swiper, imageEl);
        }
      });
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      function setTranslate2() {
        const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      let translated;
      if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
        setTranslate2();
        if (params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
          const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
          translated = swiper.slideTo(slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate2();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit("update");
    }
    changeDirection(newDirection, needUpdate) {
      if (needUpdate === void 0) {
        needUpdate = true;
      }
      const swiper = this;
      const currentDirection = swiper.params.direction;
      if (!newDirection) {
        newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
      }
      if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
        return swiper;
      }
      swiper.el.classList.remove("".concat(swiper.params.containerModifierClass).concat(currentDirection));
      swiper.el.classList.add("".concat(swiper.params.containerModifierClass).concat(newDirection));
      swiper.emitContainerClasses();
      swiper.params.direction = newDirection;
      swiper.slides.forEach((slideEl) => {
        if (newDirection === "vertical") {
          slideEl.style.width = "";
        } else {
          slideEl.style.height = "";
        }
      });
      swiper.emit("changeDirection");
      if (needUpdate) swiper.update();
      return swiper;
    }
    changeLanguageDirection(direction) {
      const swiper = this;
      if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
      swiper.rtl = direction === "rtl";
      swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
      if (swiper.rtl) {
        swiper.el.classList.add("".concat(swiper.params.containerModifierClass, "rtl"));
        swiper.el.dir = "rtl";
      } else {
        swiper.el.classList.remove("".concat(swiper.params.containerModifierClass, "rtl"));
        swiper.el.dir = "ltr";
      }
      swiper.update();
    }
    mount(element) {
      const swiper = this;
      if (swiper.mounted) return true;
      let el = element || swiper.params.el;
      if (typeof el === "string") {
        el = document.querySelector(el);
      }
      if (!el) {
        return false;
      }
      el.swiper = swiper;
      if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
        swiper.isElement = true;
      }
      const getWrapperSelector = () => {
        return ".".concat((swiper.params.wrapperClass || "").trim().split(" ").join("."));
      };
      const getWrapper = () => {
        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
          const res = el.shadowRoot.querySelector(getWrapperSelector());
          return res;
        }
        return elementChildren(el, getWrapperSelector())[0];
      };
      let wrapperEl = getWrapper();
      if (!wrapperEl && swiper.params.createElements) {
        wrapperEl = createElement("div", swiper.params.wrapperClass);
        el.append(wrapperEl);
        elementChildren(el, ".".concat(swiper.params.slideClass)).forEach((slideEl) => {
          wrapperEl.append(slideEl);
        });
      }
      Object.assign(swiper, {
        el,
        wrapperEl,
        slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
        hostEl: swiper.isElement ? el.parentNode.host : el,
        mounted: true,
        // RTL
        rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
        rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
        wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
      });
      return true;
    }
    init(el) {
      const swiper = this;
      if (swiper.initialized) return swiper;
      const mounted = swiper.mount(el);
      if (mounted === false) return swiper;
      swiper.emit("beforeInit");
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.addClasses();
      swiper.updateSize();
      swiper.updateSlides();
      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }
      if (swiper.params.grabCursor && swiper.enabled) {
        swiper.setGrabCursor();
      }
      if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
        swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
      }
      if (swiper.params.loop) {
        swiper.loopCreate();
      }
      swiper.attachEvents();
      const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
      if (swiper.isElement) {
        lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
      }
      lazyElements.forEach((imageEl) => {
        if (imageEl.complete) {
          processLazyPreloader(swiper, imageEl);
        } else {
          imageEl.addEventListener("load", (e) => {
            processLazyPreloader(swiper, e.target);
          });
        }
      });
      preload(swiper);
      swiper.initialized = true;
      preload(swiper);
      swiper.emit("init");
      swiper.emit("afterInit");
      return swiper;
    }
    destroy(deleteInstance, cleanStyles) {
      if (deleteInstance === void 0) {
        deleteInstance = true;
      }
      if (cleanStyles === void 0) {
        cleanStyles = true;
      }
      const swiper = this;
      const {
        params,
        el,
        wrapperEl,
        slides
      } = swiper;
      if (typeof swiper.params === "undefined" || swiper.destroyed) {
        return null;
      }
      swiper.emit("beforeDestroy");
      swiper.initialized = false;
      swiper.detachEvents();
      if (params.loop) {
        swiper.loopDestroy();
      }
      if (cleanStyles) {
        swiper.removeClasses();
        if (el && typeof el !== "string") {
          el.removeAttribute("style");
        }
        if (wrapperEl) {
          wrapperEl.removeAttribute("style");
        }
        if (slides && slides.length) {
          slides.forEach((slideEl) => {
            slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            slideEl.removeAttribute("style");
            slideEl.removeAttribute("data-swiper-slide-index");
          });
        }
      }
      swiper.emit("destroy");
      Object.keys(swiper.eventsListeners).forEach((eventName) => {
        swiper.off(eventName);
      });
      if (deleteInstance !== false) {
        if (swiper.el && typeof swiper.el !== "string") {
          swiper.el.swiper = null;
        }
        deleteProps(swiper);
      }
      swiper.destroyed = true;
      return null;
    }
    static extendDefaults(newDefaults) {
      extend2(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
      return extendedDefaults;
    }
    static get defaults() {
      return defaults;
    }
    static installModule(mod) {
      if (!_Swiper.prototype.__modules__) _Swiper.prototype.__modules__ = [];
      const modules2 = _Swiper.prototype.__modules__;
      if (typeof mod === "function" && modules2.indexOf(mod) < 0) {
        modules2.push(mod);
      }
    }
    static use(module) {
      if (Array.isArray(module)) {
        module.forEach((m) => _Swiper.installModule(m));
        return _Swiper;
      }
      _Swiper.installModule(module);
      return _Swiper;
    }
  };
  Object.keys(prototypes).forEach((prototypeGroup) => {
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  });
  Swiper.use([Resize, Observer]);

  // node_modules/swiper/modules/virtual.mjs
  function Virtual(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    extendParams({
      virtual: {
        enabled: false,
        slides: [],
        cache: true,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: true,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    });
    let cssModeTimeout;
    const document2 = getDocument();
    swiper.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: []
    };
    const tempDOM = document2.createElement("div");
    function renderSlide(slide2, index) {
      const params = swiper.params.virtual;
      if (params.cache && swiper.virtual.cache[index]) {
        return swiper.virtual.cache[index];
      }
      let slideEl;
      if (params.renderSlide) {
        slideEl = params.renderSlide.call(swiper, slide2, index);
        if (typeof slideEl === "string") {
          tempDOM.innerHTML = slideEl;
          slideEl = tempDOM.children[0];
        }
      } else if (swiper.isElement) {
        slideEl = createElement("swiper-slide");
      } else {
        slideEl = createElement("div", swiper.params.slideClass);
      }
      slideEl.setAttribute("data-swiper-slide-index", index);
      if (!params.renderSlide) {
        slideEl.innerHTML = slide2;
      }
      if (params.cache) {
        swiper.virtual.cache[index] = slideEl;
      }
      return slideEl;
    }
    function update2(force, beforeInit, forceActiveIndex) {
      const {
        slidesPerView,
        slidesPerGroup,
        centeredSlides,
        loop: isLoop,
        initialSlide
      } = swiper.params;
      if (beforeInit && !isLoop && initialSlide > 0) {
        return;
      }
      const {
        addSlidesBefore,
        addSlidesAfter
      } = swiper.params.virtual;
      const {
        from: previousFrom,
        to: previousTo,
        slides,
        slidesGrid: previousSlidesGrid,
        offset: previousOffset
      } = swiper.virtual;
      if (!swiper.params.cssMode) {
        swiper.updateActiveIndex();
      }
      const activeIndex = typeof forceActiveIndex === "undefined" ? swiper.activeIndex || 0 : forceActiveIndex;
      let offsetProp;
      if (swiper.rtlTranslate) offsetProp = "right";
      else offsetProp = swiper.isHorizontal() ? "left" : "top";
      let slidesAfter;
      let slidesBefore;
      if (centeredSlides) {
        slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
        slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
      } else {
        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
        slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
      }
      let from = activeIndex - slidesBefore;
      let to = activeIndex + slidesAfter;
      if (!isLoop) {
        from = Math.max(from, 0);
        to = Math.min(to, slides.length - 1);
      }
      let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
      if (isLoop && activeIndex >= slidesBefore) {
        from -= slidesBefore;
        if (!centeredSlides) offset += swiper.slidesGrid[0];
      } else if (isLoop && activeIndex < slidesBefore) {
        from = -slidesBefore;
        if (centeredSlides) offset += swiper.slidesGrid[0];
      }
      Object.assign(swiper.virtual, {
        from,
        to,
        offset,
        slidesGrid: swiper.slidesGrid,
        slidesBefore,
        slidesAfter
      });
      function onRendered() {
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        emit("virtualUpdate");
      }
      if (previousFrom === from && previousTo === to && !force) {
        if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
          swiper.slides.forEach((slideEl) => {
            slideEl.style[offsetProp] = "".concat(offset - Math.abs(swiper.cssOverflowAdjustment()), "px");
          });
        }
        swiper.updateProgress();
        emit("virtualUpdate");
        return;
      }
      if (swiper.params.virtual.renderExternal) {
        swiper.params.virtual.renderExternal.call(swiper, {
          offset,
          from,
          to,
          slides: function getSlides() {
            const slidesToRender = [];
            for (let i = from; i <= to; i += 1) {
              slidesToRender.push(slides[i]);
            }
            return slidesToRender;
          }()
        });
        if (swiper.params.virtual.renderExternalUpdate) {
          onRendered();
        } else {
          emit("virtualUpdate");
        }
        return;
      }
      const prependIndexes = [];
      const appendIndexes = [];
      const getSlideIndex = (index) => {
        let slideIndex = index;
        if (index < 0) {
          slideIndex = slides.length + index;
        } else if (slideIndex >= slides.length) {
          slideIndex = slideIndex - slides.length;
        }
        return slideIndex;
      };
      if (force) {
        swiper.slides.filter((el) => el.matches(".".concat(swiper.params.slideClass, ", swiper-slide"))).forEach((slideEl) => {
          slideEl.remove();
        });
      } else {
        for (let i = previousFrom; i <= previousTo; i += 1) {
          if (i < from || i > to) {
            const slideIndex = getSlideIndex(i);
            swiper.slides.filter((el) => el.matches(".".concat(swiper.params.slideClass, '[data-swiper-slide-index="').concat(slideIndex, '"], swiper-slide[data-swiper-slide-index="').concat(slideIndex, '"]'))).forEach((slideEl) => {
              slideEl.remove();
            });
          }
        }
      }
      const loopFrom = isLoop ? -slides.length : 0;
      const loopTo = isLoop ? slides.length * 2 : slides.length;
      for (let i = loopFrom; i < loopTo; i += 1) {
        if (i >= from && i <= to) {
          const slideIndex = getSlideIndex(i);
          if (typeof previousTo === "undefined" || force) {
            appendIndexes.push(slideIndex);
          } else {
            if (i > previousTo) appendIndexes.push(slideIndex);
            if (i < previousFrom) prependIndexes.push(slideIndex);
          }
        }
      }
      appendIndexes.forEach((index) => {
        swiper.slidesEl.append(renderSlide(slides[index], index));
      });
      if (isLoop) {
        for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
          const index = prependIndexes[i];
          swiper.slidesEl.prepend(renderSlide(slides[index], index));
        }
      } else {
        prependIndexes.sort((a, b) => b - a);
        prependIndexes.forEach((index) => {
          swiper.slidesEl.prepend(renderSlide(slides[index], index));
        });
      }
      elementChildren(swiper.slidesEl, ".swiper-slide, swiper-slide").forEach((slideEl) => {
        slideEl.style[offsetProp] = "".concat(offset - Math.abs(swiper.cssOverflowAdjustment()), "px");
      });
      onRendered();
    }
    function appendSlide2(slides) {
      if (typeof slides === "object" && "length" in slides) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) swiper.virtual.slides.push(slides[i]);
        }
      } else {
        swiper.virtual.slides.push(slides);
      }
      update2(true);
    }
    function prependSlide2(slides) {
      const activeIndex = swiper.activeIndex;
      let newActiveIndex = activeIndex + 1;
      let numberOfNewSlides = 1;
      if (Array.isArray(slides)) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
        }
        newActiveIndex = activeIndex + slides.length;
        numberOfNewSlides = slides.length;
      } else {
        swiper.virtual.slides.unshift(slides);
      }
      if (swiper.params.virtual.cache) {
        const cache = swiper.virtual.cache;
        const newCache = {};
        Object.keys(cache).forEach((cachedIndex) => {
          const cachedEl = cache[cachedIndex];
          const cachedElIndex = cachedEl.getAttribute("data-swiper-slide-index");
          if (cachedElIndex) {
            cachedEl.setAttribute("data-swiper-slide-index", parseInt(cachedElIndex, 10) + numberOfNewSlides);
          }
          newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
        });
        swiper.virtual.cache = newCache;
      }
      update2(true);
      swiper.slideTo(newActiveIndex, 0);
    }
    function removeSlide2(slidesIndexes) {
      if (typeof slidesIndexes === "undefined" || slidesIndexes === null) return;
      let activeIndex = swiper.activeIndex;
      if (Array.isArray(slidesIndexes)) {
        for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes[i]];
            Object.keys(swiper.virtual.cache).forEach((key) => {
              if (key > slidesIndexes) {
                swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
                swiper.virtual.cache[key - 1].setAttribute("data-swiper-slide-index", key - 1);
                delete swiper.virtual.cache[key];
              }
            });
          }
          swiper.virtual.slides.splice(slidesIndexes[i], 1);
          if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
          activeIndex = Math.max(activeIndex, 0);
        }
      } else {
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes];
          Object.keys(swiper.virtual.cache).forEach((key) => {
            if (key > slidesIndexes) {
              swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
              swiper.virtual.cache[key - 1].setAttribute("data-swiper-slide-index", key - 1);
              delete swiper.virtual.cache[key];
            }
          });
        }
        swiper.virtual.slides.splice(slidesIndexes, 1);
        if (slidesIndexes < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
      update2(true);
      swiper.slideTo(activeIndex, 0);
    }
    function removeAllSlides2() {
      swiper.virtual.slides = [];
      if (swiper.params.virtual.cache) {
        swiper.virtual.cache = {};
      }
      update2(true);
      swiper.slideTo(0, 0);
    }
    on("beforeInit", () => {
      if (!swiper.params.virtual.enabled) return;
      let domSlidesAssigned;
      if (typeof swiper.passedParams.virtual.slides === "undefined") {
        const slides = [...swiper.slidesEl.children].filter((el) => el.matches(".".concat(swiper.params.slideClass, ", swiper-slide")));
        if (slides && slides.length) {
          swiper.virtual.slides = [...slides];
          domSlidesAssigned = true;
          slides.forEach((slideEl, slideIndex) => {
            slideEl.setAttribute("data-swiper-slide-index", slideIndex);
            swiper.virtual.cache[slideIndex] = slideEl;
            slideEl.remove();
          });
        }
      }
      if (!domSlidesAssigned) {
        swiper.virtual.slides = swiper.params.virtual.slides;
      }
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "virtual"));
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
      update2(false, true);
    });
    on("setTranslate", () => {
      if (!swiper.params.virtual.enabled) return;
      if (swiper.params.cssMode && !swiper._immediateVirtual) {
        clearTimeout(cssModeTimeout);
        cssModeTimeout = setTimeout(() => {
          update2();
        }, 100);
      } else {
        update2();
      }
    });
    on("init update resize", () => {
      if (!swiper.params.virtual.enabled) return;
      if (swiper.params.cssMode) {
        setCSSProperty(swiper.wrapperEl, "--swiper-virtual-size", "".concat(swiper.virtualSize, "px"));
      }
    });
    Object.assign(swiper.virtual, {
      appendSlide: appendSlide2,
      prependSlide: prependSlide2,
      removeSlide: removeSlide2,
      removeAllSlides: removeAllSlides2,
      update: update2
    });
  }

  // node_modules/swiper/modules/keyboard.mjs
  function Keyboard(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    const document2 = getDocument();
    const window2 = getWindow();
    swiper.keyboard = {
      enabled: false
    };
    extendParams({
      keyboard: {
        enabled: false,
        onlyInViewport: true,
        pageUpDown: true
      }
    });
    function handle(event2) {
      if (!swiper.enabled) return;
      const {
        rtlTranslate: rtl
      } = swiper;
      let e = event2;
      if (e.originalEvent) e = e.originalEvent;
      const kc = e.keyCode || e.charCode;
      const pageUpDown = swiper.params.keyboard.pageUpDown;
      const isPageUp = pageUpDown && kc === 33;
      const isPageDown = pageUpDown && kc === 34;
      const isArrowLeft = kc === 37;
      const isArrowRight = kc === 39;
      const isArrowUp = kc === 38;
      const isArrowDown = kc === 40;
      if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
        return false;
      }
      if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
        return false;
      }
      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return void 0;
      }
      if (document2.activeElement && document2.activeElement.nodeName && (document2.activeElement.nodeName.toLowerCase() === "input" || document2.activeElement.nodeName.toLowerCase() === "textarea")) {
        return void 0;
      }
      if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
        let inView = false;
        if (elementParents(swiper.el, ".".concat(swiper.params.slideClass, ", swiper-slide")).length > 0 && elementParents(swiper.el, ".".concat(swiper.params.slideActiveClass)).length === 0) {
          return void 0;
        }
        const el = swiper.el;
        const swiperWidth = el.clientWidth;
        const swiperHeight = el.clientHeight;
        const windowWidth = window2.innerWidth;
        const windowHeight = window2.innerHeight;
        const swiperOffset = elementOffset(el);
        if (rtl) swiperOffset.left -= el.scrollLeft;
        const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
        for (let i = 0; i < swiperCoord.length; i += 1) {
          const point = swiperCoord[i];
          if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
            if (point[0] === 0 && point[1] === 0) continue;
            inView = true;
          }
        }
        if (!inView) return void 0;
      }
      if (swiper.isHorizontal()) {
        if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
          if (e.preventDefault) e.preventDefault();
          else e.returnValue = false;
        }
        if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
        if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
      } else {
        if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
          if (e.preventDefault) e.preventDefault();
          else e.returnValue = false;
        }
        if (isPageDown || isArrowDown) swiper.slideNext();
        if (isPageUp || isArrowUp) swiper.slidePrev();
      }
      emit("keyPress", kc);
      return void 0;
    }
    function enable() {
      if (swiper.keyboard.enabled) return;
      document2.addEventListener("keydown", handle);
      swiper.keyboard.enabled = true;
    }
    function disable() {
      if (!swiper.keyboard.enabled) return;
      document2.removeEventListener("keydown", handle);
      swiper.keyboard.enabled = false;
    }
    on("init", () => {
      if (swiper.params.keyboard.enabled) {
        enable();
      }
    });
    on("destroy", () => {
      if (swiper.keyboard.enabled) {
        disable();
      }
    });
    Object.assign(swiper.keyboard, {
      enable,
      disable
    });
  }

  // node_modules/swiper/modules/mousewheel.mjs
  function Mousewheel(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    const window2 = getWindow();
    extendParams({
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null,
        noMousewheelClass: "swiper-no-mousewheel"
      }
    });
    swiper.mousewheel = {
      enabled: false
    };
    let timeout;
    let lastScrollTime = now();
    let lastEventBeforeSnap;
    const recentWheelEvents = [];
    function normalize(e) {
      const PIXEL_STEP = 10;
      const LINE_HEIGHT = 40;
      const PAGE_HEIGHT = 800;
      let sX = 0;
      let sY = 0;
      let pX = 0;
      let pY = 0;
      if ("detail" in e) {
        sY = e.detail;
      }
      if ("wheelDelta" in e) {
        sY = -e.wheelDelta / 120;
      }
      if ("wheelDeltaY" in e) {
        sY = -e.wheelDeltaY / 120;
      }
      if ("wheelDeltaX" in e) {
        sX = -e.wheelDeltaX / 120;
      }
      if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }
      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;
      if ("deltaY" in e) {
        pY = e.deltaY;
      }
      if ("deltaX" in e) {
        pX = e.deltaX;
      }
      if (e.shiftKey && !pX) {
        pX = pY;
        pY = 0;
      }
      if ((pX || pY) && e.deltaMode) {
        if (e.deltaMode === 1) {
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else {
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      }
      if (pX && !sX) {
        sX = pX < 1 ? -1 : 1;
      }
      if (pY && !sY) {
        sY = pY < 1 ? -1 : 1;
      }
      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY
      };
    }
    function handleMouseEnter() {
      if (!swiper.enabled) return;
      swiper.mouseEntered = true;
    }
    function handleMouseLeave() {
      if (!swiper.enabled) return;
      swiper.mouseEntered = false;
    }
    function animateSlider(newEvent) {
      if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
        return false;
      }
      if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
        return false;
      }
      if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
        return true;
      }
      if (newEvent.direction < 0) {
        if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
          swiper.slideNext();
          emit("scroll", newEvent.raw);
        }
      } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
        swiper.slidePrev();
        emit("scroll", newEvent.raw);
      }
      lastScrollTime = new window2.Date().getTime();
      return false;
    }
    function releaseScroll(newEvent) {
      const params = swiper.params.mousewheel;
      if (newEvent.direction < 0) {
        if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
          return true;
        }
      } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
        return true;
      }
      return false;
    }
    function handle(event2) {
      let e = event2;
      let disableParentSwiper = true;
      if (!swiper.enabled) return;
      if (event2.target.closest(".".concat(swiper.params.mousewheel.noMousewheelClass))) return;
      const params = swiper.params.mousewheel;
      if (swiper.params.cssMode) {
        e.preventDefault();
      }
      let targetEl = swiper.el;
      if (swiper.params.mousewheel.eventsTarget !== "container") {
        targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
      }
      const targetElContainsTarget = targetEl && targetEl.contains(e.target);
      if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
      if (e.originalEvent) e = e.originalEvent;
      let delta = 0;
      const rtlFactor = swiper.rtlTranslate ? -1 : 1;
      const data = normalize(e);
      if (params.forceToAxis) {
        if (swiper.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
          else return true;
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
        else return true;
      } else {
        delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
      }
      if (delta === 0) return true;
      if (params.invert) delta = -delta;
      let positions = swiper.getTranslate() + delta * params.sensitivity;
      if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
      if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();
      disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
      if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
      if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
        const newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta),
          raw: event2
        };
        if (recentWheelEvents.length >= 2) {
          recentWheelEvents.shift();
        }
        const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
        recentWheelEvents.push(newEvent);
        if (prevEvent) {
          if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
            animateSlider(newEvent);
          }
        } else {
          animateSlider(newEvent);
        }
        if (releaseScroll(newEvent)) {
          return true;
        }
      } else {
        const newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta)
        };
        const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
        if (!ignoreWheelEvents) {
          lastEventBeforeSnap = void 0;
          let position = swiper.getTranslate() + delta * params.sensitivity;
          const wasBeginning = swiper.isBeginning;
          const wasEnd = swiper.isEnd;
          if (position >= swiper.minTranslate()) position = swiper.minTranslate();
          if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
          swiper.setTransition(0);
          swiper.setTranslate(position);
          swiper.updateProgress();
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
          if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
            swiper.updateSlidesClasses();
          }
          if (swiper.params.loop) {
            swiper.loopFix({
              direction: newEvent.direction < 0 ? "next" : "prev",
              byMousewheel: true
            });
          }
          if (swiper.params.freeMode.sticky) {
            clearTimeout(timeout);
            timeout = void 0;
            if (recentWheelEvents.length >= 15) {
              recentWheelEvents.shift();
            }
            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
            const firstEvent = recentWheelEvents[0];
            recentWheelEvents.push(newEvent);
            if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
              recentWheelEvents.splice(0);
            } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
              const snapToThreshold = delta > 0 ? 0.8 : 0.2;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              timeout = nextTick(() => {
                if (swiper.destroyed || !swiper.params) return;
                swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
              }, 0);
            }
            if (!timeout) {
              timeout = nextTick(() => {
                if (swiper.destroyed || !swiper.params) return;
                const snapToThreshold = 0.5;
                lastEventBeforeSnap = newEvent;
                recentWheelEvents.splice(0);
                swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
              }, 500);
            }
          }
          if (!ignoreWheelEvents) emit("scroll", e);
          if (swiper.params.autoplay && swiper.params.autoplay.disableOnInteraction) swiper.autoplay.stop();
          if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
            return true;
          }
        }
      }
      if (e.preventDefault) e.preventDefault();
      else e.returnValue = false;
      return false;
    }
    function events2(method) {
      let targetEl = swiper.el;
      if (swiper.params.mousewheel.eventsTarget !== "container") {
        targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
      }
      targetEl[method]("mouseenter", handleMouseEnter);
      targetEl[method]("mouseleave", handleMouseLeave);
      targetEl[method]("wheel", handle);
    }
    function enable() {
      if (swiper.params.cssMode) {
        swiper.wrapperEl.removeEventListener("wheel", handle);
        return true;
      }
      if (swiper.mousewheel.enabled) return false;
      events2("addEventListener");
      swiper.mousewheel.enabled = true;
      return true;
    }
    function disable() {
      if (swiper.params.cssMode) {
        swiper.wrapperEl.addEventListener(event, handle);
        return true;
      }
      if (!swiper.mousewheel.enabled) return false;
      events2("removeEventListener");
      swiper.mousewheel.enabled = false;
      return true;
    }
    on("init", () => {
      if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
        disable();
      }
      if (swiper.params.mousewheel.enabled) enable();
    });
    on("destroy", () => {
      if (swiper.params.cssMode) {
        enable();
      }
      if (swiper.mousewheel.enabled) disable();
    });
    Object.assign(swiper.mousewheel, {
      enable,
      disable
    });
  }

  // node_modules/swiper/shared/create-element-if-not-defined.mjs
  function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
    if (swiper.params.createElements) {
      Object.keys(checkProps).forEach((key) => {
        if (!params[key] && params.auto === true) {
          let element = elementChildren(swiper.el, ".".concat(checkProps[key]))[0];
          if (!element) {
            element = createElement("div", checkProps[key]);
            element.className = checkProps[key];
            swiper.el.append(element);
          }
          params[key] = element;
          originalParams[key] = element;
        }
      });
    }
    return params;
  }

  // node_modules/swiper/modules/navigation.mjs
  function Navigation(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    extendParams({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: false,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled"
      }
    });
    swiper.navigation = {
      nextEl: null,
      prevEl: null
    };
    function getEl(el) {
      let res;
      if (el && typeof el === "string" && swiper.isElement) {
        res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
        if (res) return res;
      }
      if (el) {
        if (typeof el === "string") res = [...document.querySelectorAll(el)];
        if (swiper.params.uniqueNavElements && typeof el === "string" && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
          res = swiper.el.querySelector(el);
        } else if (res && res.length === 1) {
          res = res[0];
        }
      }
      if (el && !res) return el;
      return res;
    }
    function toggleEl(el, disabled) {
      const params = swiper.params.navigation;
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        if (subEl) {
          subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
          if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
          if (swiper.params.watchOverflow && swiper.enabled) {
            subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
          }
        }
      });
    }
    function update2() {
      const {
        nextEl,
        prevEl
      } = swiper.navigation;
      if (swiper.params.loop) {
        toggleEl(prevEl, false);
        toggleEl(nextEl, false);
        return;
      }
      toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
      toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e) {
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
      swiper.slidePrev();
      emit("navigationPrev");
    }
    function onNextClick(e) {
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
      swiper.slideNext();
      emit("navigationNext");
    }
    function init() {
      const params = swiper.params.navigation;
      swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      });
      if (!(params.nextEl || params.prevEl)) return;
      let nextEl = getEl(params.nextEl);
      let prevEl = getEl(params.prevEl);
      Object.assign(swiper.navigation, {
        nextEl,
        prevEl
      });
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const initButton = (el, dir) => {
        if (el) {
          el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
        }
        if (!swiper.enabled && el) {
          el.classList.add(...params.lockClass.split(" "));
        }
      };
      nextEl.forEach((el) => initButton(el, "next"));
      prevEl.forEach((el) => initButton(el, "prev"));
    }
    function destroy() {
      let {
        nextEl,
        prevEl
      } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const destroyButton = (el, dir) => {
        el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
        el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
      };
      nextEl.forEach((el) => destroyButton(el, "next"));
      prevEl.forEach((el) => destroyButton(el, "prev"));
    }
    on("init", () => {
      if (swiper.params.navigation.enabled === false) {
        disable();
      } else {
        init();
        update2();
      }
    });
    on("toEdge fromEdge lock unlock", () => {
      update2();
    });
    on("destroy", () => {
      destroy();
    });
    on("enable disable", () => {
      let {
        nextEl,
        prevEl
      } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (swiper.enabled) {
        update2();
        return;
      }
      [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.add(swiper.params.navigation.lockClass));
    });
    on("click", (_s, e) => {
      let {
        nextEl,
        prevEl
      } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const targetEl = e.target;
      let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
      if (swiper.isElement && !targetIsButton) {
        const path = e.path || e.composedPath && e.composedPath();
        if (path) {
          targetIsButton = path.find((pathEl) => nextEl.includes(pathEl) || prevEl.includes(pathEl));
        }
      }
      if (swiper.params.navigation.hideOnClick && !targetIsButton) {
        if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
        let isHidden;
        if (nextEl.length) {
          isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
        } else if (prevEl.length) {
          isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
        }
        if (isHidden === true) {
          emit("navigationShow");
        } else {
          emit("navigationHide");
        }
        [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.toggle(swiper.params.navigation.hiddenClass));
      }
    });
    const enable = () => {
      swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
      init();
      update2();
    };
    const disable = () => {
      swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
      destroy();
    };
    Object.assign(swiper.navigation, {
      enable,
      disable,
      update: update2,
      init,
      destroy
    });
  }

  // node_modules/swiper/shared/classes-to-selector.mjs
  function classesToSelector(classes2) {
    if (classes2 === void 0) {
      classes2 = "";
    }
    return ".".concat(classes2.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, "."));
  }

  // node_modules/swiper/modules/pagination.mjs
  function Pagination(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    const pfx = "swiper-pagination";
    extendParams({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: "bullets",
        // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: (number) => number,
        formatFractionTotal: (number) => number,
        bulletClass: "".concat(pfx, "-bullet"),
        bulletActiveClass: "".concat(pfx, "-bullet-active"),
        modifierClass: "".concat(pfx, "-"),
        currentClass: "".concat(pfx, "-current"),
        totalClass: "".concat(pfx, "-total"),
        hiddenClass: "".concat(pfx, "-hidden"),
        progressbarFillClass: "".concat(pfx, "-progressbar-fill"),
        progressbarOppositeClass: "".concat(pfx, "-progressbar-opposite"),
        clickableClass: "".concat(pfx, "-clickable"),
        lockClass: "".concat(pfx, "-lock"),
        horizontalClass: "".concat(pfx, "-horizontal"),
        verticalClass: "".concat(pfx, "-vertical"),
        paginationDisabledClass: "".concat(pfx, "-disabled")
      }
    });
    swiper.pagination = {
      el: null,
      bullets: []
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    function isPaginationDisabled() {
      return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
    }
    function setSideBullets(bulletEl, position) {
      const {
        bulletActiveClass
      } = swiper.params.pagination;
      if (!bulletEl) return;
      bulletEl = bulletEl["".concat(position === "prev" ? "previous" : "next", "ElementSibling")];
      if (bulletEl) {
        bulletEl.classList.add("".concat(bulletActiveClass, "-").concat(position));
        bulletEl = bulletEl["".concat(position === "prev" ? "previous" : "next", "ElementSibling")];
        if (bulletEl) {
          bulletEl.classList.add("".concat(bulletActiveClass, "-").concat(position, "-").concat(position));
        }
      }
    }
    function getMoveDirection(prevIndex, nextIndex, length) {
      prevIndex = prevIndex % length;
      nextIndex = nextIndex % length;
      if (nextIndex === prevIndex + 1) {
        return "next";
      } else if (nextIndex === prevIndex - 1) {
        return "previous";
      }
      return;
    }
    function onBulletClick(e) {
      const bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
      if (!bulletEl) {
        return;
      }
      e.preventDefault();
      const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
      if (swiper.params.loop) {
        if (swiper.realIndex === index) return;
        const moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);
        if (moveDirection === "next") {
          swiper.slideNext();
        } else if (moveDirection === "previous") {
          swiper.slidePrev();
        } else {
          swiper.slideToLoop(index);
        }
      } else {
        swiper.slideTo(index);
      }
    }
    function update2() {
      const rtl = swiper.rtl;
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      let el = swiper.pagination.el;
      el = makeElementsArray(el);
      let current;
      let previousIndex;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.loop) {
        previousIndex = swiper.previousRealIndex || 0;
        current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
      } else if (typeof swiper.snapIndex !== "undefined") {
        current = swiper.snapIndex;
        previousIndex = swiper.previousSnapIndex;
      } else {
        previousIndex = swiper.previousIndex || 0;
        current = swiper.activeIndex || 0;
      }
      if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        const bullets = swiper.pagination.bullets;
        let firstIndex;
        let lastIndex;
        let midIndex;
        if (params.dynamicBullets) {
          bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
          el.forEach((subEl) => {
            subEl.style[swiper.isHorizontal() ? "width" : "height"] = "".concat(bulletSize * (params.dynamicMainBullets + 4), "px");
          });
          if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
            dynamicBulletIndex += current - (previousIndex || 0);
            if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
              dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (dynamicBulletIndex < 0) {
              dynamicBulletIndex = 0;
            }
          }
          firstIndex = Math.max(current - dynamicBulletIndex, 0);
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.forEach((bulletEl) => {
          const classesToRemove = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => "".concat(params.bulletActiveClass).concat(suffix))].map((s) => typeof s === "string" && s.includes(" ") ? s.split(" ") : s).flat();
          bulletEl.classList.remove(...classesToRemove);
        });
        if (el.length > 1) {
          bullets.forEach((bullet) => {
            const bulletIndex = elementIndex(bullet);
            if (bulletIndex === current) {
              bullet.classList.add(...params.bulletActiveClass.split(" "));
            } else if (swiper.isElement) {
              bullet.setAttribute("part", "bullet");
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                bullet.classList.add(..."".concat(params.bulletActiveClass, "-main").split(" "));
              }
              if (bulletIndex === firstIndex) {
                setSideBullets(bullet, "prev");
              }
              if (bulletIndex === lastIndex) {
                setSideBullets(bullet, "next");
              }
            }
          });
        } else {
          const bullet = bullets[current];
          if (bullet) {
            bullet.classList.add(...params.bulletActiveClass.split(" "));
          }
          if (swiper.isElement) {
            bullets.forEach((bulletEl, bulletIndex) => {
              bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
            });
          }
          if (params.dynamicBullets) {
            const firstDisplayedBullet = bullets[firstIndex];
            const lastDisplayedBullet = bullets[lastIndex];
            for (let i = firstIndex; i <= lastIndex; i += 1) {
              if (bullets[i]) {
                bullets[i].classList.add(..."".concat(params.bulletActiveClass, "-main").split(" "));
              }
            }
            setSideBullets(firstDisplayedBullet, "prev");
            setSideBullets(lastDisplayedBullet, "next");
          }
        }
        if (params.dynamicBullets) {
          const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
          const offsetProp = rtl ? "right" : "left";
          bullets.forEach((bullet) => {
            bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = "".concat(bulletsOffset, "px");
          });
        }
      }
      el.forEach((subEl, subElIndex) => {
        if (params.type === "fraction") {
          subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach((fractionEl) => {
            fractionEl.textContent = params.formatFractionCurrent(current + 1);
          });
          subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach((totalEl) => {
            totalEl.textContent = params.formatFractionTotal(total);
          });
        }
        if (params.type === "progressbar") {
          let progressbarDirection;
          if (params.progressbarOpposite) {
            progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
          } else {
            progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
          }
          const scale = (current + 1) / total;
          let scaleX = 1;
          let scaleY = 1;
          if (progressbarDirection === "horizontal") {
            scaleX = scale;
          } else {
            scaleY = scale;
          }
          subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach((progressEl) => {
            progressEl.style.transform = "translate3d(0,0,0) scaleX(".concat(scaleX, ") scaleY(").concat(scaleY, ")");
            progressEl.style.transitionDuration = "".concat(swiper.params.speed, "ms");
          });
        }
        if (params.type === "custom" && params.renderCustom) {
          subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
          if (subElIndex === 0) emit("paginationRender", subEl);
        } else {
          if (subElIndex === 0) emit("paginationRender", subEl);
          emit("paginationUpdate", subEl);
        }
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
        }
      });
    }
    function render() {
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
      let el = swiper.pagination.el;
      el = makeElementsArray(el);
      let paginationHTML = "";
      if (params.type === "bullets") {
        let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
          numberOfBullets = slidesLength;
        }
        for (let i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
          } else {
            paginationHTML += "<".concat(params.bulletElement, " ").concat(swiper.isElement ? 'part="bullet"' : "", ' class="').concat(params.bulletClass, '"></').concat(params.bulletElement, ">");
          }
        }
      }
      if (params.type === "fraction") {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = '<span class="'.concat(params.currentClass, '"></span>') + " / " + '<span class="'.concat(params.totalClass, '"></span>');
        }
      }
      if (params.type === "progressbar") {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = '<span class="'.concat(params.progressbarFillClass, '"></span>');
        }
      }
      swiper.pagination.bullets = [];
      el.forEach((subEl) => {
        if (params.type !== "custom") {
          subEl.innerHTML = paginationHTML || "";
        }
        if (params.type === "bullets") {
          swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
        }
      });
      if (params.type !== "custom") {
        emit("paginationRender", el[0]);
      }
    }
    function init() {
      swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
        el: "swiper-pagination"
      });
      const params = swiper.params.pagination;
      if (!params.el) return;
      let el;
      if (typeof params.el === "string" && swiper.isElement) {
        el = swiper.el.querySelector(params.el);
      }
      if (!el && typeof params.el === "string") {
        el = [...document.querySelectorAll(params.el)];
      }
      if (!el) {
        el = params.el;
      }
      if (!el || el.length === 0) return;
      if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
        el = [...swiper.el.querySelectorAll(params.el)];
        if (el.length > 1) {
          el = el.find((subEl) => {
            if (elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
            return true;
          });
        }
      }
      if (Array.isArray(el) && el.length === 1) el = el[0];
      Object.assign(swiper.pagination, {
        el
      });
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        if (params.type === "bullets" && params.clickable) {
          subEl.classList.add(...(params.clickableClass || "").split(" "));
        }
        subEl.classList.add(params.modifierClass + params.type);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.type === "bullets" && params.dynamicBullets) {
          subEl.classList.add("".concat(params.modifierClass).concat(params.type, "-dynamic"));
          dynamicBulletIndex = 0;
          if (params.dynamicMainBullets < 1) {
            params.dynamicMainBullets = 1;
          }
        }
        if (params.type === "progressbar" && params.progressbarOpposite) {
          subEl.classList.add(params.progressbarOppositeClass);
        }
        if (params.clickable) {
          subEl.addEventListener("click", onBulletClick);
        }
        if (!swiper.enabled) {
          subEl.classList.add(params.lockClass);
        }
      });
    }
    function destroy() {
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      let el = swiper.pagination.el;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => {
          subEl.classList.remove(params.hiddenClass);
          subEl.classList.remove(params.modifierClass + params.type);
          subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
          if (params.clickable) {
            subEl.classList.remove(...(params.clickableClass || "").split(" "));
            subEl.removeEventListener("click", onBulletClick);
          }
        });
      }
      if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl) => subEl.classList.remove(...params.bulletActiveClass.split(" ")));
    }
    on("changeDirection", () => {
      if (!swiper.pagination || !swiper.pagination.el) return;
      const params = swiper.params.pagination;
      let {
        el
      } = swiper.pagination;
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.classList.remove(params.horizontalClass, params.verticalClass);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      });
    });
    on("init", () => {
      if (swiper.params.pagination.enabled === false) {
        disable();
      } else {
        init();
        render();
        update2();
      }
    });
    on("activeIndexChange", () => {
      if (typeof swiper.snapIndex === "undefined") {
        update2();
      }
    });
    on("snapIndexChange", () => {
      update2();
    });
    on("snapGridLengthChange", () => {
      render();
      update2();
    });
    on("destroy", () => {
      destroy();
    });
    on("enable disable", () => {
      let {
        el
      } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass));
      }
    });
    on("lock unlock", () => {
      update2();
    });
    on("click", (_s, e) => {
      const targetEl = e.target;
      const el = makeElementsArray(swiper.pagination.el);
      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
        if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
        const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
        if (isHidden === true) {
          emit("paginationShow");
        } else {
          emit("paginationHide");
        }
        el.forEach((subEl) => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
      }
    });
    const enable = () => {
      swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
      let {
        el
      } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
      }
      init();
      render();
      update2();
    };
    const disable = () => {
      swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
      let {
        el
      } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
      }
      destroy();
    };
    Object.assign(swiper.pagination, {
      enable,
      disable,
      render,
      update: update2,
      init,
      destroy
    });
  }

  // node_modules/swiper/modules/scrollbar.mjs
  function Scrollbar(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    const document2 = getDocument();
    let isTouched = false;
    let timeout = null;
    let dragTimeout = null;
    let dragStartPos;
    let dragSize;
    let trackSize;
    let divider;
    extendParams({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag",
        scrollbarDisabledClass: "swiper-scrollbar-disabled",
        horizontalClass: "swiper-scrollbar-horizontal",
        verticalClass: "swiper-scrollbar-vertical"
      }
    });
    swiper.scrollbar = {
      el: null,
      dragEl: null
    };
    function setTranslate2() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      const {
        scrollbar,
        rtlTranslate: rtl
      } = swiper;
      const {
        dragEl,
        el
      } = scrollbar;
      const params = swiper.params.scrollbar;
      const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
      let newSize = dragSize;
      let newPos = (trackSize - dragSize) * progress;
      if (rtl) {
        newPos = -newPos;
        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }
      if (swiper.isHorizontal()) {
        dragEl.style.transform = "translate3d(".concat(newPos, "px, 0, 0)");
        dragEl.style.width = "".concat(newSize, "px");
      } else {
        dragEl.style.transform = "translate3d(0px, ".concat(newPos, "px, 0)");
        dragEl.style.height = "".concat(newSize, "px");
      }
      if (params.hide) {
        clearTimeout(timeout);
        el.style.opacity = 1;
        timeout = setTimeout(() => {
          el.style.opacity = 0;
          el.style.transitionDuration = "400ms";
        }, 1e3);
      }
    }
    function setTransition2(duration) {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      swiper.scrollbar.dragEl.style.transitionDuration = "".concat(duration, "ms");
    }
    function updateSize2() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      const {
        scrollbar
      } = swiper;
      const {
        dragEl,
        el
      } = scrollbar;
      dragEl.style.width = "";
      dragEl.style.height = "";
      trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
      divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
      if (swiper.params.scrollbar.dragSize === "auto") {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
      }
      if (swiper.isHorizontal()) {
        dragEl.style.width = "".concat(dragSize, "px");
      } else {
        dragEl.style.height = "".concat(dragSize, "px");
      }
      if (divider >= 1) {
        el.style.display = "none";
      } else {
        el.style.display = "";
      }
      if (swiper.params.scrollbar.hide) {
        el.style.opacity = 0;
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        scrollbar.el.classList[swiper.isLocked ? "add" : "remove"](swiper.params.scrollbar.lockClass);
      }
    }
    function getPointerPosition(e) {
      return swiper.isHorizontal() ? e.clientX : e.clientY;
    }
    function setDragPosition(e) {
      const {
        scrollbar,
        rtlTranslate: rtl
      } = swiper;
      const {
        el
      } = scrollbar;
      let positionRatio;
      positionRatio = (getPointerPosition(e) - elementOffset(el)[swiper.isHorizontal() ? "left" : "top"] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
      if (rtl) {
        positionRatio = 1 - positionRatio;
      }
      const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
      swiper.updateProgress(position);
      swiper.setTranslate(position);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    function onDragStart(e) {
      const params = swiper.params.scrollbar;
      const {
        scrollbar,
        wrapperEl
      } = swiper;
      const {
        el,
        dragEl
      } = scrollbar;
      isTouched = true;
      dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? "left" : "top"] : null;
      e.preventDefault();
      e.stopPropagation();
      wrapperEl.style.transitionDuration = "100ms";
      dragEl.style.transitionDuration = "100ms";
      setDragPosition(e);
      clearTimeout(dragTimeout);
      el.style.transitionDuration = "0ms";
      if (params.hide) {
        el.style.opacity = 1;
      }
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style["scroll-snap-type"] = "none";
      }
      emit("scrollbarDragStart", e);
    }
    function onDragMove(e) {
      const {
        scrollbar,
        wrapperEl
      } = swiper;
      const {
        el,
        dragEl
      } = scrollbar;
      if (!isTouched) return;
      if (e.preventDefault && e.cancelable) e.preventDefault();
      else e.returnValue = false;
      setDragPosition(e);
      wrapperEl.style.transitionDuration = "0ms";
      el.style.transitionDuration = "0ms";
      dragEl.style.transitionDuration = "0ms";
      emit("scrollbarDragMove", e);
    }
    function onDragEnd(e) {
      const params = swiper.params.scrollbar;
      const {
        scrollbar,
        wrapperEl
      } = swiper;
      const {
        el
      } = scrollbar;
      if (!isTouched) return;
      isTouched = false;
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style["scroll-snap-type"] = "";
        wrapperEl.style.transitionDuration = "";
      }
      if (params.hide) {
        clearTimeout(dragTimeout);
        dragTimeout = nextTick(() => {
          el.style.opacity = 0;
          el.style.transitionDuration = "400ms";
        }, 1e3);
      }
      emit("scrollbarDragEnd", e);
      if (params.snapOnRelease) {
        swiper.slideToClosest();
      }
    }
    function events2(method) {
      const {
        scrollbar,
        params
      } = swiper;
      const el = scrollbar.el;
      if (!el) return;
      const target = el;
      const activeListener = params.passiveListeners ? {
        passive: false,
        capture: false
      } : false;
      const passiveListener = params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      if (!target) return;
      const eventMethod = method === "on" ? "addEventListener" : "removeEventListener";
      target[eventMethod]("pointerdown", onDragStart, activeListener);
      document2[eventMethod]("pointermove", onDragMove, activeListener);
      document2[eventMethod]("pointerup", onDragEnd, passiveListener);
    }
    function enableDraggable() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      events2("on");
    }
    function disableDraggable() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      events2("off");
    }
    function init() {
      const {
        scrollbar,
        el: swiperEl
      } = swiper;
      swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
        el: "swiper-scrollbar"
      });
      const params = swiper.params.scrollbar;
      if (!params.el) return;
      let el;
      if (typeof params.el === "string" && swiper.isElement) {
        el = swiper.el.querySelector(params.el);
      }
      if (!el && typeof params.el === "string") {
        el = document2.querySelectorAll(params.el);
        if (!el.length) return;
      } else if (!el) {
        el = params.el;
      }
      if (swiper.params.uniqueNavElements && typeof params.el === "string" && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
        el = swiperEl.querySelector(params.el);
      }
      if (el.length > 0) el = el[0];
      el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      let dragEl;
      if (el) {
        dragEl = el.querySelector(classesToSelector(swiper.params.scrollbar.dragClass));
        if (!dragEl) {
          dragEl = createElement("div", swiper.params.scrollbar.dragClass);
          el.append(dragEl);
        }
      }
      Object.assign(scrollbar, {
        el,
        dragEl
      });
      if (params.draggable) {
        enableDraggable();
      }
      if (el) {
        el.classList[swiper.enabled ? "remove" : "add"](...classesToTokens(swiper.params.scrollbar.lockClass));
      }
    }
    function destroy() {
      const params = swiper.params.scrollbar;
      const el = swiper.scrollbar.el;
      if (el) {
        el.classList.remove(...classesToTokens(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass));
      }
      disableDraggable();
    }
    on("changeDirection", () => {
      if (!swiper.scrollbar || !swiper.scrollbar.el) return;
      const params = swiper.params.scrollbar;
      let {
        el
      } = swiper.scrollbar;
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.classList.remove(params.horizontalClass, params.verticalClass);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      });
    });
    on("init", () => {
      if (swiper.params.scrollbar.enabled === false) {
        disable();
      } else {
        init();
        updateSize2();
        setTranslate2();
      }
    });
    on("update resize observerUpdate lock unlock changeDirection", () => {
      updateSize2();
    });
    on("setTranslate", () => {
      setTranslate2();
    });
    on("setTransition", (_s, duration) => {
      setTransition2(duration);
    });
    on("enable disable", () => {
      const {
        el
      } = swiper.scrollbar;
      if (el) {
        el.classList[swiper.enabled ? "remove" : "add"](...classesToTokens(swiper.params.scrollbar.lockClass));
      }
    });
    on("destroy", () => {
      destroy();
    });
    const enable = () => {
      swiper.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
      if (swiper.scrollbar.el) {
        swiper.scrollbar.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
      }
      init();
      updateSize2();
      setTranslate2();
    };
    const disable = () => {
      swiper.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
      if (swiper.scrollbar.el) {
        swiper.scrollbar.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
      }
      destroy();
    };
    Object.assign(swiper.scrollbar, {
      enable,
      disable,
      updateSize: updateSize2,
      setTranslate: setTranslate2,
      init,
      destroy
    });
  }

  // node_modules/swiper/modules/parallax.mjs
  function Parallax(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      parallax: {
        enabled: false
      }
    });
    const elementsSelector = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]";
    const setTransform = (el, progress) => {
      const {
        rtl
      } = swiper;
      const rtlFactor = rtl ? -1 : 1;
      const p = el.getAttribute("data-swiper-parallax") || "0";
      let x = el.getAttribute("data-swiper-parallax-x");
      let y = el.getAttribute("data-swiper-parallax-y");
      const scale = el.getAttribute("data-swiper-parallax-scale");
      const opacity = el.getAttribute("data-swiper-parallax-opacity");
      const rotate = el.getAttribute("data-swiper-parallax-rotate");
      if (x || y) {
        x = x || "0";
        y = y || "0";
      } else if (swiper.isHorizontal()) {
        x = p;
        y = "0";
      } else {
        y = p;
        x = "0";
      }
      if (x.indexOf("%") >= 0) {
        x = "".concat(parseInt(x, 10) * progress * rtlFactor, "%");
      } else {
        x = "".concat(x * progress * rtlFactor, "px");
      }
      if (y.indexOf("%") >= 0) {
        y = "".concat(parseInt(y, 10) * progress, "%");
      } else {
        y = "".concat(y * progress, "px");
      }
      if (typeof opacity !== "undefined" && opacity !== null) {
        const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
        el.style.opacity = currentOpacity;
      }
      let transform = "translate3d(".concat(x, ", ").concat(y, ", 0px)");
      if (typeof scale !== "undefined" && scale !== null) {
        const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
        transform += " scale(".concat(currentScale, ")");
      }
      if (rotate && typeof rotate !== "undefined" && rotate !== null) {
        const currentRotate = rotate * progress * -1;
        transform += " rotate(".concat(currentRotate, "deg)");
      }
      el.style.transform = transform;
    };
    const setTranslate2 = () => {
      const {
        el,
        slides,
        progress,
        snapGrid,
        isElement
      } = swiper;
      const elements = elementChildren(el, elementsSelector);
      if (swiper.isElement) {
        elements.push(...elementChildren(swiper.hostEl, elementsSelector));
      }
      elements.forEach((subEl) => {
        setTransform(subEl, progress);
      });
      slides.forEach((slideEl, slideIndex) => {
        let slideProgress = slideEl.progress;
        if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== "auto") {
          slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
        }
        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
        slideEl.querySelectorAll("".concat(elementsSelector, ", [data-swiper-parallax-rotate]")).forEach((subEl) => {
          setTransform(subEl, slideProgress);
        });
      });
    };
    const setTransition2 = function(duration) {
      if (duration === void 0) {
        duration = swiper.params.speed;
      }
      const {
        el,
        hostEl
      } = swiper;
      const elements = [...el.querySelectorAll(elementsSelector)];
      if (swiper.isElement) {
        elements.push(...hostEl.querySelectorAll(elementsSelector));
      }
      elements.forEach((parallaxEl) => {
        let parallaxDuration = parseInt(parallaxEl.getAttribute("data-swiper-parallax-duration"), 10) || duration;
        if (duration === 0) parallaxDuration = 0;
        parallaxEl.style.transitionDuration = "".concat(parallaxDuration, "ms");
      });
    };
    on("beforeInit", () => {
      if (!swiper.params.parallax.enabled) return;
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    });
    on("init", () => {
      if (!swiper.params.parallax.enabled) return;
      setTranslate2();
    });
    on("setTranslate", () => {
      if (!swiper.params.parallax.enabled) return;
      setTranslate2();
    });
    on("setTransition", (_swiper, duration) => {
      if (!swiper.params.parallax.enabled) return;
      setTransition2(duration);
    });
  }

  // node_modules/swiper/modules/zoom.mjs
  function Zoom(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    const window2 = getWindow();
    extendParams({
      zoom: {
        enabled: false,
        limitToOriginalSize: false,
        maxRatio: 3,
        minRatio: 1,
        panOnMouseMove: false,
        toggle: true,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    });
    swiper.zoom = {
      enabled: false
    };
    let currentScale = 1;
    let isScaling = false;
    let isPanningWithMouse = false;
    let mousePanStart = {
      x: 0,
      y: 0
    };
    const mousePanSensitivity = -3;
    let fakeGestureTouched;
    let fakeGestureMoved;
    const evCache = [];
    const gesture = {
      originX: 0,
      originY: 0,
      slideEl: void 0,
      slideWidth: void 0,
      slideHeight: void 0,
      imageEl: void 0,
      imageWrapEl: void 0,
      maxRatio: 3
    };
    const image = {
      isTouched: void 0,
      isMoved: void 0,
      currentX: void 0,
      currentY: void 0,
      minX: void 0,
      minY: void 0,
      maxX: void 0,
      maxY: void 0,
      width: void 0,
      height: void 0,
      startX: void 0,
      startY: void 0,
      touchesStart: {},
      touchesCurrent: {}
    };
    const velocity = {
      x: void 0,
      y: void 0,
      prevPositionX: void 0,
      prevPositionY: void 0,
      prevTime: void 0
    };
    let scale = 1;
    Object.defineProperty(swiper.zoom, "scale", {
      get() {
        return scale;
      },
      set(value) {
        if (scale !== value) {
          const imageEl = gesture.imageEl;
          const slideEl = gesture.slideEl;
          emit("zoomChange", value, imageEl, slideEl);
        }
        scale = value;
      }
    });
    function getDistanceBetweenTouches() {
      if (evCache.length < 2) return 1;
      const x1 = evCache[0].pageX;
      const y1 = evCache[0].pageY;
      const x2 = evCache[1].pageX;
      const y2 = evCache[1].pageY;
      const distance = Math.sqrt(__pow(x2 - x1, 2) + __pow(y2 - y1, 2));
      return distance;
    }
    function getMaxRatio() {
      const params = swiper.params.zoom;
      const maxRatio = gesture.imageWrapEl.getAttribute("data-swiper-zoom") || params.maxRatio;
      if (params.limitToOriginalSize && gesture.imageEl && gesture.imageEl.naturalWidth) {
        const imageMaxRatio = gesture.imageEl.naturalWidth / gesture.imageEl.offsetWidth;
        return Math.min(imageMaxRatio, maxRatio);
      }
      return maxRatio;
    }
    function getScaleOrigin() {
      if (evCache.length < 2) return {
        x: null,
        y: null
      };
      const box = gesture.imageEl.getBoundingClientRect();
      return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window2.scrollX) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window2.scrollY) / currentScale];
    }
    function getSlideSelector() {
      return swiper.isElement ? "swiper-slide" : ".".concat(swiper.params.slideClass);
    }
    function eventWithinSlide(e) {
      const slideSelector = getSlideSelector();
      if (e.target.matches(slideSelector)) return true;
      if (swiper.slides.filter((slideEl) => slideEl.contains(e.target)).length > 0) return true;
      return false;
    }
    function eventWithinZoomContainer(e) {
      const selector = ".".concat(swiper.params.zoom.containerClass);
      if (e.target.matches(selector)) return true;
      if ([...swiper.hostEl.querySelectorAll(selector)].filter((containerEl) => containerEl.contains(e.target)).length > 0) return true;
      return false;
    }
    function onGestureStart(e) {
      if (e.pointerType === "mouse") {
        evCache.splice(0, evCache.length);
      }
      if (!eventWithinSlide(e)) return;
      const params = swiper.params.zoom;
      fakeGestureTouched = false;
      fakeGestureMoved = false;
      evCache.push(e);
      if (evCache.length < 2) {
        return;
      }
      fakeGestureTouched = true;
      gesture.scaleStart = getDistanceBetweenTouches();
      if (!gesture.slideEl) {
        gesture.slideEl = e.target.closest(".".concat(swiper.params.slideClass, ", swiper-slide"));
        if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
        let imageEl = gesture.slideEl.querySelector(".".concat(params.containerClass));
        if (imageEl) {
          imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
        }
        gesture.imageEl = imageEl;
        if (imageEl) {
          gesture.imageWrapEl = elementParents(gesture.imageEl, ".".concat(params.containerClass))[0];
        } else {
          gesture.imageWrapEl = void 0;
        }
        if (!gesture.imageWrapEl) {
          gesture.imageEl = void 0;
          return;
        }
        gesture.maxRatio = getMaxRatio();
      }
      if (gesture.imageEl) {
        const [originX, originY] = getScaleOrigin();
        gesture.originX = originX;
        gesture.originY = originY;
        gesture.imageEl.style.transitionDuration = "0ms";
      }
      isScaling = true;
    }
    function onGestureChange(e) {
      if (!eventWithinSlide(e)) return;
      const params = swiper.params.zoom;
      const zoom = swiper.zoom;
      const pointerIndex = evCache.findIndex((cachedEv) => cachedEv.pointerId === e.pointerId);
      if (pointerIndex >= 0) evCache[pointerIndex] = e;
      if (evCache.length < 2) {
        return;
      }
      fakeGestureMoved = true;
      gesture.scaleMove = getDistanceBetweenTouches();
      if (!gesture.imageEl) {
        return;
      }
      zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
      if (zoom.scale > gesture.maxRatio) {
        zoom.scale = gesture.maxRatio - 1 + __pow(zoom.scale - gesture.maxRatio + 1, 0.5);
      }
      if (zoom.scale < params.minRatio) {
        zoom.scale = params.minRatio + 1 - __pow(params.minRatio - zoom.scale + 1, 0.5);
      }
      gesture.imageEl.style.transform = "translate3d(0,0,0) scale(".concat(zoom.scale, ")");
    }
    function onGestureEnd(e) {
      if (!eventWithinSlide(e)) return;
      if (e.pointerType === "mouse" && e.type === "pointerout") return;
      const params = swiper.params.zoom;
      const zoom = swiper.zoom;
      const pointerIndex = evCache.findIndex((cachedEv) => cachedEv.pointerId === e.pointerId);
      if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
      if (!fakeGestureTouched || !fakeGestureMoved) {
        return;
      }
      fakeGestureTouched = false;
      fakeGestureMoved = false;
      if (!gesture.imageEl) return;
      zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
      gesture.imageEl.style.transitionDuration = "".concat(swiper.params.speed, "ms");
      gesture.imageEl.style.transform = "translate3d(0,0,0) scale(".concat(zoom.scale, ")");
      currentScale = zoom.scale;
      isScaling = false;
      if (zoom.scale > 1 && gesture.slideEl) {
        gesture.slideEl.classList.add("".concat(params.zoomedSlideClass));
      } else if (zoom.scale <= 1 && gesture.slideEl) {
        gesture.slideEl.classList.remove("".concat(params.zoomedSlideClass));
      }
      if (zoom.scale === 1) {
        gesture.originX = 0;
        gesture.originY = 0;
        gesture.slideEl = void 0;
      }
    }
    let allowTouchMoveTimeout;
    function allowTouchMove() {
      swiper.touchEventsData.preventTouchMoveFromPointerMove = false;
    }
    function preventTouchMove() {
      clearTimeout(allowTouchMoveTimeout);
      swiper.touchEventsData.preventTouchMoveFromPointerMove = true;
      allowTouchMoveTimeout = setTimeout(() => {
        if (swiper.destroyed) return;
        allowTouchMove();
      });
    }
    function onTouchStart2(e) {
      const device = swiper.device;
      if (!gesture.imageEl) return;
      if (image.isTouched) return;
      if (device.android && e.cancelable) e.preventDefault();
      image.isTouched = true;
      const event2 = evCache.length > 0 ? evCache[0] : e;
      image.touchesStart.x = event2.pageX;
      image.touchesStart.y = event2.pageY;
    }
    function onTouchMove2(e) {
      const isMouseEvent = e.pointerType === "mouse";
      const isMousePan = isMouseEvent && swiper.params.zoom.panOnMouseMove;
      if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) {
        return;
      }
      const zoom = swiper.zoom;
      if (!gesture.imageEl) {
        return;
      }
      if (!image.isTouched || !gesture.slideEl) {
        if (isMousePan) onMouseMove(e);
        return;
      }
      if (isMousePan) {
        onMouseMove(e);
        return;
      }
      if (!image.isMoved) {
        image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
        image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
        image.startX = getTranslate(gesture.imageWrapEl, "x") || 0;
        image.startY = getTranslate(gesture.imageWrapEl, "y") || 0;
        gesture.slideWidth = gesture.slideEl.offsetWidth;
        gesture.slideHeight = gesture.slideEl.offsetHeight;
        gesture.imageWrapEl.style.transitionDuration = "0ms";
      }
      const scaledWidth = image.width * zoom.scale;
      const scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
      image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
      const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
      if (touchesDiff > 5) {
        swiper.allowClick = false;
      }
      if (!image.isMoved && !isScaling) {
        if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
          image.isTouched = false;
          allowTouchMove();
          return;
        }
        if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
          image.isTouched = false;
          allowTouchMove();
          return;
        }
      }
      if (e.cancelable) {
        e.preventDefault();
      }
      e.stopPropagation();
      preventTouchMove();
      image.isMoved = true;
      const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
      const {
        originX,
        originY
      } = gesture;
      image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
      image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
      if (image.currentX < image.minX) {
        image.currentX = image.minX + 1 - __pow(image.minX - image.currentX + 1, 0.8);
      }
      if (image.currentX > image.maxX) {
        image.currentX = image.maxX - 1 + __pow(image.currentX - image.maxX + 1, 0.8);
      }
      if (image.currentY < image.minY) {
        image.currentY = image.minY + 1 - __pow(image.minY - image.currentY + 1, 0.8);
      }
      if (image.currentY > image.maxY) {
        image.currentY = image.maxY - 1 + __pow(image.currentY - image.maxY + 1, 0.8);
      }
      if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
      if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
      if (!velocity.prevTime) velocity.prevTime = Date.now();
      velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
      velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
      velocity.prevPositionX = image.touchesCurrent.x;
      velocity.prevPositionY = image.touchesCurrent.y;
      velocity.prevTime = Date.now();
      gesture.imageWrapEl.style.transform = "translate3d(".concat(image.currentX, "px, ").concat(image.currentY, "px,0)");
    }
    function onTouchEnd2() {
      const zoom = swiper.zoom;
      evCache.length = 0;
      if (!gesture.imageEl) return;
      if (!image.isTouched || !image.isMoved) {
        image.isTouched = false;
        image.isMoved = false;
        return;
      }
      image.isTouched = false;
      image.isMoved = false;
      let momentumDurationX = 300;
      let momentumDurationY = 300;
      const momentumDistanceX = velocity.x * momentumDurationX;
      const newPositionX = image.currentX + momentumDistanceX;
      const momentumDistanceY = velocity.y * momentumDurationY;
      const newPositionY = image.currentY + momentumDistanceY;
      if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
      if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
      const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
      image.currentX = newPositionX;
      image.currentY = newPositionY;
      const scaledWidth = image.width * zoom.scale;
      const scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
      image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
      gesture.imageWrapEl.style.transitionDuration = "".concat(momentumDuration, "ms");
      gesture.imageWrapEl.style.transform = "translate3d(".concat(image.currentX, "px, ").concat(image.currentY, "px,0)");
    }
    function onTransitionEnd() {
      const zoom = swiper.zoom;
      if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
        if (gesture.imageEl) {
          gesture.imageEl.style.transform = "translate3d(0,0,0) scale(1)";
        }
        if (gesture.imageWrapEl) {
          gesture.imageWrapEl.style.transform = "translate3d(0,0,0)";
        }
        gesture.slideEl.classList.remove("".concat(swiper.params.zoom.zoomedSlideClass));
        zoom.scale = 1;
        currentScale = 1;
        gesture.slideEl = void 0;
        gesture.imageEl = void 0;
        gesture.imageWrapEl = void 0;
        gesture.originX = 0;
        gesture.originY = 0;
      }
    }
    function onMouseMove(e) {
      if (currentScale <= 1 || !gesture.imageWrapEl) return;
      if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
      const currentTransform = window2.getComputedStyle(gesture.imageWrapEl).transform;
      const matrix = new window2.DOMMatrix(currentTransform);
      if (!isPanningWithMouse) {
        isPanningWithMouse = true;
        mousePanStart.x = e.clientX;
        mousePanStart.y = e.clientY;
        image.startX = matrix.e;
        image.startY = matrix.f;
        image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
        image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
        gesture.slideWidth = gesture.slideEl.offsetWidth;
        gesture.slideHeight = gesture.slideEl.offsetHeight;
        return;
      }
      const deltaX = (e.clientX - mousePanStart.x) * mousePanSensitivity;
      const deltaY = (e.clientY - mousePanStart.y) * mousePanSensitivity;
      const scaledWidth = image.width * currentScale;
      const scaledHeight = image.height * currentScale;
      const slideWidth = gesture.slideWidth;
      const slideHeight = gesture.slideHeight;
      const minX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      const maxX = -minX;
      const minY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      const maxY = -minY;
      const newX = Math.max(Math.min(image.startX + deltaX, maxX), minX);
      const newY = Math.max(Math.min(image.startY + deltaY, maxY), minY);
      gesture.imageWrapEl.style.transitionDuration = "0ms";
      gesture.imageWrapEl.style.transform = "translate3d(".concat(newX, "px, ").concat(newY, "px, 0)");
      mousePanStart.x = e.clientX;
      mousePanStart.y = e.clientY;
      image.startX = newX;
      image.startY = newY;
    }
    function zoomIn(e) {
      const zoom = swiper.zoom;
      const params = swiper.params.zoom;
      if (!gesture.slideEl) {
        if (e && e.target) {
          gesture.slideEl = e.target.closest(".".concat(swiper.params.slideClass, ", swiper-slide"));
        }
        if (!gesture.slideEl) {
          if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
            gesture.slideEl = elementChildren(swiper.slidesEl, ".".concat(swiper.params.slideActiveClass))[0];
          } else {
            gesture.slideEl = swiper.slides[swiper.activeIndex];
          }
        }
        let imageEl = gesture.slideEl.querySelector(".".concat(params.containerClass));
        if (imageEl) {
          imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
        }
        gesture.imageEl = imageEl;
        if (imageEl) {
          gesture.imageWrapEl = elementParents(gesture.imageEl, ".".concat(params.containerClass))[0];
        } else {
          gesture.imageWrapEl = void 0;
        }
      }
      if (!gesture.imageEl || !gesture.imageWrapEl) return;
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style.overflow = "hidden";
        swiper.wrapperEl.style.touchAction = "none";
      }
      gesture.slideEl.classList.add("".concat(params.zoomedSlideClass));
      let touchX;
      let touchY;
      let offsetX;
      let offsetY;
      let diffX;
      let diffY;
      let translateX;
      let translateY;
      let imageWidth;
      let imageHeight;
      let scaledWidth;
      let scaledHeight;
      let translateMinX;
      let translateMinY;
      let translateMaxX;
      let translateMaxY;
      let slideWidth;
      let slideHeight;
      if (typeof image.touchesStart.x === "undefined" && e) {
        touchX = e.pageX;
        touchY = e.pageY;
      } else {
        touchX = image.touchesStart.x;
        touchY = image.touchesStart.y;
      }
      const forceZoomRatio = typeof e === "number" ? e : null;
      if (currentScale === 1 && forceZoomRatio) {
        touchX = void 0;
        touchY = void 0;
        image.touchesStart.x = void 0;
        image.touchesStart.y = void 0;
      }
      const maxRatio = getMaxRatio();
      zoom.scale = forceZoomRatio || maxRatio;
      currentScale = forceZoomRatio || maxRatio;
      if (e && !(currentScale === 1 && forceZoomRatio)) {
        slideWidth = gesture.slideEl.offsetWidth;
        slideHeight = gesture.slideEl.offsetHeight;
        offsetX = elementOffset(gesture.slideEl).left + window2.scrollX;
        offsetY = elementOffset(gesture.slideEl).top + window2.scrollY;
        diffX = offsetX + slideWidth / 2 - touchX;
        diffY = offsetY + slideHeight / 2 - touchY;
        imageWidth = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
        imageHeight = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
        scaledWidth = imageWidth * zoom.scale;
        scaledHeight = imageHeight * zoom.scale;
        translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
        translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;
        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;
        if (translateX < translateMinX) {
          translateX = translateMinX;
        }
        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }
        if (translateY < translateMinY) {
          translateY = translateMinY;
        }
        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      } else {
        translateX = 0;
        translateY = 0;
      }
      if (forceZoomRatio && zoom.scale === 1) {
        gesture.originX = 0;
        gesture.originY = 0;
      }
      gesture.imageWrapEl.style.transitionDuration = "300ms";
      gesture.imageWrapEl.style.transform = "translate3d(".concat(translateX, "px, ").concat(translateY, "px,0)");
      gesture.imageEl.style.transitionDuration = "300ms";
      gesture.imageEl.style.transform = "translate3d(0,0,0) scale(".concat(zoom.scale, ")");
    }
    function zoomOut() {
      const zoom = swiper.zoom;
      const params = swiper.params.zoom;
      if (!gesture.slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.slideEl = elementChildren(swiper.slidesEl, ".".concat(swiper.params.slideActiveClass))[0];
        } else {
          gesture.slideEl = swiper.slides[swiper.activeIndex];
        }
        let imageEl = gesture.slideEl.querySelector(".".concat(params.containerClass));
        if (imageEl) {
          imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
        }
        gesture.imageEl = imageEl;
        if (imageEl) {
          gesture.imageWrapEl = elementParents(gesture.imageEl, ".".concat(params.containerClass))[0];
        } else {
          gesture.imageWrapEl = void 0;
        }
      }
      if (!gesture.imageEl || !gesture.imageWrapEl) return;
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style.overflow = "";
        swiper.wrapperEl.style.touchAction = "";
      }
      zoom.scale = 1;
      currentScale = 1;
      image.touchesStart.x = void 0;
      image.touchesStart.y = void 0;
      gesture.imageWrapEl.style.transitionDuration = "300ms";
      gesture.imageWrapEl.style.transform = "translate3d(0,0,0)";
      gesture.imageEl.style.transitionDuration = "300ms";
      gesture.imageEl.style.transform = "translate3d(0,0,0) scale(1)";
      gesture.slideEl.classList.remove("".concat(params.zoomedSlideClass));
      gesture.slideEl = void 0;
      gesture.originX = 0;
      gesture.originY = 0;
      if (swiper.params.zoom.panOnMouseMove) {
        mousePanStart = {
          x: 0,
          y: 0
        };
        if (isPanningWithMouse) {
          isPanningWithMouse = false;
          image.startX = 0;
          image.startY = 0;
        }
      }
    }
    function zoomToggle(e) {
      const zoom = swiper.zoom;
      if (zoom.scale && zoom.scale !== 1) {
        zoomOut();
      } else {
        zoomIn(e);
      }
    }
    function getListeners() {
      const passiveListener = swiper.params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      const activeListenerWithCapture = swiper.params.passiveListeners ? {
        passive: false,
        capture: true
      } : true;
      return {
        passiveListener,
        activeListenerWithCapture
      };
    }
    function enable() {
      const zoom = swiper.zoom;
      if (zoom.enabled) return;
      zoom.enabled = true;
      const {
        passiveListener,
        activeListenerWithCapture
      } = getListeners();
      swiper.wrapperEl.addEventListener("pointerdown", onGestureStart, passiveListener);
      swiper.wrapperEl.addEventListener("pointermove", onGestureChange, activeListenerWithCapture);
      ["pointerup", "pointercancel", "pointerout"].forEach((eventName) => {
        swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
      });
      swiper.wrapperEl.addEventListener("pointermove", onTouchMove2, activeListenerWithCapture);
    }
    function disable() {
      const zoom = swiper.zoom;
      if (!zoom.enabled) return;
      zoom.enabled = false;
      const {
        passiveListener,
        activeListenerWithCapture
      } = getListeners();
      swiper.wrapperEl.removeEventListener("pointerdown", onGestureStart, passiveListener);
      swiper.wrapperEl.removeEventListener("pointermove", onGestureChange, activeListenerWithCapture);
      ["pointerup", "pointercancel", "pointerout"].forEach((eventName) => {
        swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
      });
      swiper.wrapperEl.removeEventListener("pointermove", onTouchMove2, activeListenerWithCapture);
    }
    on("init", () => {
      if (swiper.params.zoom.enabled) {
        enable();
      }
    });
    on("destroy", () => {
      disable();
    });
    on("touchStart", (_s, e) => {
      if (!swiper.zoom.enabled) return;
      onTouchStart2(e);
    });
    on("touchEnd", (_s, e) => {
      if (!swiper.zoom.enabled) return;
      onTouchEnd2();
    });
    on("doubleTap", (_s, e) => {
      if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
        zoomToggle(e);
      }
    });
    on("transitionEnd", () => {
      if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
        onTransitionEnd();
      }
    });
    on("slideChange", () => {
      if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
        onTransitionEnd();
      }
    });
    Object.assign(swiper.zoom, {
      enable,
      disable,
      in: zoomIn,
      out: zoomOut,
      toggle: zoomToggle
    });
  }

  // node_modules/swiper/modules/controller.mjs
  function Controller(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      controller: {
        control: void 0,
        inverse: false,
        by: "slide"
        // or 'container'
      }
    });
    swiper.controller = {
      control: void 0
    };
    function LinearSpline(x, y) {
      const binarySearch = /* @__PURE__ */ function search() {
        let maxIndex;
        let minIndex;
        let guess;
        return (array, val) => {
          minIndex = -1;
          maxIndex = array.length;
          while (maxIndex - minIndex > 1) {
            guess = maxIndex + minIndex >> 1;
            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }
          return maxIndex;
        };
      }();
      this.x = x;
      this.y = y;
      this.lastIndex = x.length - 1;
      let i1;
      let i3;
      this.interpolate = function interpolate(x2) {
        if (!x2) return 0;
        i3 = binarySearch(this.x, x2);
        i1 = i3 - 1;
        return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
      };
      return this;
    }
    function getInterpolateFunction(c) {
      swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
    }
    function setTranslate2(_t, byController) {
      const controlled = swiper.controller.control;
      let multiplier;
      let controlledTranslate;
      const Swiper2 = swiper.constructor;
      function setControlledTranslate(c) {
        if (c.destroyed) return;
        const translate2 = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
        if (swiper.params.controller.by === "slide") {
          getInterpolateFunction(c);
          controlledTranslate = -swiper.controller.spline.interpolate(-translate2);
        }
        if (!controlledTranslate || swiper.params.controller.by === "container") {
          multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
          if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
            multiplier = 1;
          }
          controlledTranslate = (translate2 - swiper.minTranslate()) * multiplier + c.minTranslate();
        }
        if (swiper.params.controller.inverse) {
          controlledTranslate = c.maxTranslate() - controlledTranslate;
        }
        c.updateProgress(controlledTranslate);
        c.setTranslate(controlledTranslate, swiper);
        c.updateActiveIndex();
        c.updateSlidesClasses();
      }
      if (Array.isArray(controlled)) {
        for (let i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper2) {
            setControlledTranslate(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper2 && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    }
    function setTransition2(duration, byController) {
      const Swiper2 = swiper.constructor;
      const controlled = swiper.controller.control;
      let i;
      function setControlledTransition(c) {
        if (c.destroyed) return;
        c.setTransition(duration, swiper);
        if (duration !== 0) {
          c.transitionStart();
          if (c.params.autoHeight) {
            nextTick(() => {
              c.updateAutoHeight();
            });
          }
          elementTransitionEnd(c.wrapperEl, () => {
            if (!controlled) return;
            c.transitionEnd();
          });
        }
      }
      if (Array.isArray(controlled)) {
        for (i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper2) {
            setControlledTransition(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper2 && byController !== controlled) {
        setControlledTransition(controlled);
      }
    }
    function removeSpline() {
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = void 0;
        delete swiper.controller.spline;
      }
    }
    on("beforeInit", () => {
      if (typeof window !== "undefined" && // eslint-disable-line
      (typeof swiper.params.controller.control === "string" || swiper.params.controller.control instanceof HTMLElement)) {
        const controlElements = typeof swiper.params.controller.control === "string" ? [...document.querySelectorAll(swiper.params.controller.control)] : [swiper.params.controller.control];
        controlElements.forEach((controlElement) => {
          if (!swiper.controller.control) swiper.controller.control = [];
          if (controlElement && controlElement.swiper) {
            swiper.controller.control.push(controlElement.swiper);
          } else if (controlElement) {
            const eventName = "".concat(swiper.params.eventsPrefix, "init");
            const onControllerSwiper = (e) => {
              swiper.controller.control.push(e.detail[0]);
              swiper.update();
              controlElement.removeEventListener(eventName, onControllerSwiper);
            };
            controlElement.addEventListener(eventName, onControllerSwiper);
          }
        });
        return;
      }
      swiper.controller.control = swiper.params.controller.control;
    });
    on("update", () => {
      removeSpline();
    });
    on("resize", () => {
      removeSpline();
    });
    on("observerUpdate", () => {
      removeSpline();
    });
    on("setTranslate", (_s, translate2, byController) => {
      if (!swiper.controller.control || swiper.controller.control.destroyed) return;
      swiper.controller.setTranslate(translate2, byController);
    });
    on("setTransition", (_s, duration, byController) => {
      if (!swiper.controller.control || swiper.controller.control.destroyed) return;
      swiper.controller.setTransition(duration, byController);
    });
    Object.assign(swiper.controller, {
      setTranslate: setTranslate2,
      setTransition: setTransition2
    });
  }

  // node_modules/swiper/modules/a11y.mjs
  function A11y(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      a11y: {
        enabled: true,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        slideLabelMessage: "{{index}} / {{slidesLength}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        containerRole: null,
        itemRoleDescriptionMessage: null,
        slideRole: "group",
        id: null,
        scrollOnFocus: true
      }
    });
    swiper.a11y = {
      clicked: false
    };
    let liveRegion = null;
    let preventFocusHandler;
    let focusTargetSlideEl;
    let visibilityChangedTimestamp = (/* @__PURE__ */ new Date()).getTime();
    function notify(message) {
      const notification = liveRegion;
      if (notification.length === 0) return;
      notification.innerHTML = "";
      notification.innerHTML = message;
    }
    function getRandomNumber(size) {
      if (size === void 0) {
        size = 16;
      }
      const randomChar = () => Math.round(16 * Math.random()).toString(16);
      return "x".repeat(size).replace(/x/g, randomChar);
    }
    function makeElFocusable(el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("tabIndex", "0");
      });
    }
    function makeElNotFocusable(el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("tabIndex", "-1");
      });
    }
    function addElRole(el, role) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("role", role);
      });
    }
    function addElRoleDescription(el, description) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-roledescription", description);
      });
    }
    function addElControls(el, controls) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-controls", controls);
      });
    }
    function addElLabel(el, label) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-label", label);
      });
    }
    function addElId(el, id) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("id", id);
      });
    }
    function addElLive(el, live) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-live", live);
      });
    }
    function disableEl(el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-disabled", true);
      });
    }
    function enableEl(el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-disabled", false);
      });
    }
    function onEnterOrSpaceKey(e) {
      if (e.keyCode !== 13 && e.keyCode !== 32) return;
      const params = swiper.params.a11y;
      const targetEl = e.target;
      if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
        if (!e.target.matches(classesToSelector(swiper.params.pagination.bulletClass))) return;
      }
      if (swiper.navigation && swiper.navigation.prevEl && swiper.navigation.nextEl) {
        const prevEls = makeElementsArray(swiper.navigation.prevEl);
        const nextEls = makeElementsArray(swiper.navigation.nextEl);
        if (nextEls.includes(targetEl)) {
          if (!(swiper.isEnd && !swiper.params.loop)) {
            swiper.slideNext();
          }
          if (swiper.isEnd) {
            notify(params.lastSlideMessage);
          } else {
            notify(params.nextSlideMessage);
          }
        }
        if (prevEls.includes(targetEl)) {
          if (!(swiper.isBeginning && !swiper.params.loop)) {
            swiper.slidePrev();
          }
          if (swiper.isBeginning) {
            notify(params.firstSlideMessage);
          } else {
            notify(params.prevSlideMessage);
          }
        }
      }
      if (swiper.pagination && targetEl.matches(classesToSelector(swiper.params.pagination.bulletClass))) {
        targetEl.click();
      }
    }
    function updateNavigation() {
      if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
      const {
        nextEl,
        prevEl
      } = swiper.navigation;
      if (prevEl) {
        if (swiper.isBeginning) {
          disableEl(prevEl);
          makeElNotFocusable(prevEl);
        } else {
          enableEl(prevEl);
          makeElFocusable(prevEl);
        }
      }
      if (nextEl) {
        if (swiper.isEnd) {
          disableEl(nextEl);
          makeElNotFocusable(nextEl);
        } else {
          enableEl(nextEl);
          makeElFocusable(nextEl);
        }
      }
    }
    function hasPagination() {
      return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
    }
    function hasClickablePagination() {
      return hasPagination() && swiper.params.pagination.clickable;
    }
    function updatePagination() {
      const params = swiper.params.a11y;
      if (!hasPagination()) return;
      swiper.pagination.bullets.forEach((bulletEl) => {
        if (swiper.params.pagination.clickable) {
          makeElFocusable(bulletEl);
          if (!swiper.params.pagination.renderBullet) {
            addElRole(bulletEl, "button");
            addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, elementIndex(bulletEl) + 1));
          }
        }
        if (bulletEl.matches(classesToSelector(swiper.params.pagination.bulletActiveClass))) {
          bulletEl.setAttribute("aria-current", "true");
        } else {
          bulletEl.removeAttribute("aria-current");
        }
      });
    }
    const initNavEl = (el, wrapperId, message) => {
      makeElFocusable(el);
      if (el.tagName !== "BUTTON") {
        addElRole(el, "button");
        el.addEventListener("keydown", onEnterOrSpaceKey);
      }
      addElLabel(el, message);
      addElControls(el, wrapperId);
    };
    const handlePointerDown = (e) => {
      if (focusTargetSlideEl && focusTargetSlideEl !== e.target && !focusTargetSlideEl.contains(e.target)) {
        preventFocusHandler = true;
      }
      swiper.a11y.clicked = true;
    };
    const handlePointerUp = () => {
      preventFocusHandler = false;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!swiper.destroyed) {
            swiper.a11y.clicked = false;
          }
        });
      });
    };
    const onVisibilityChange = (e) => {
      visibilityChangedTimestamp = (/* @__PURE__ */ new Date()).getTime();
    };
    const handleFocus = (e) => {
      if (swiper.a11y.clicked || !swiper.params.a11y.scrollOnFocus) return;
      if ((/* @__PURE__ */ new Date()).getTime() - visibilityChangedTimestamp < 100) return;
      const slideEl = e.target.closest(".".concat(swiper.params.slideClass, ", swiper-slide"));
      if (!slideEl || !swiper.slides.includes(slideEl)) return;
      focusTargetSlideEl = slideEl;
      const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
      const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
      if (isActive || isVisible) return;
      if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
      if (swiper.isHorizontal()) {
        swiper.el.scrollLeft = 0;
      } else {
        swiper.el.scrollTop = 0;
      }
      requestAnimationFrame(() => {
        if (preventFocusHandler) return;
        if (swiper.params.loop) {
          swiper.slideToLoop(parseInt(slideEl.getAttribute("data-swiper-slide-index")), 0);
        } else {
          swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
        }
        preventFocusHandler = false;
      });
    };
    const initSlides = () => {
      const params = swiper.params.a11y;
      if (params.itemRoleDescriptionMessage) {
        addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
      }
      if (params.slideRole) {
        addElRole(swiper.slides, params.slideRole);
      }
      const slidesLength = swiper.slides.length;
      if (params.slideLabelMessage) {
        swiper.slides.forEach((slideEl, index) => {
          const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10) : index;
          const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
          addElLabel(slideEl, ariaLabelMessage);
        });
      }
    };
    const init = () => {
      const params = swiper.params.a11y;
      swiper.el.append(liveRegion);
      const containerEl = swiper.el;
      if (params.containerRoleDescriptionMessage) {
        addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
      }
      if (params.containerMessage) {
        addElLabel(containerEl, params.containerMessage);
      }
      if (params.containerRole) {
        addElRole(containerEl, params.containerRole);
      }
      const wrapperEl = swiper.wrapperEl;
      const wrapperId = params.id || wrapperEl.getAttribute("id") || "swiper-wrapper-".concat(getRandomNumber(16));
      const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? "off" : "polite";
      addElId(wrapperEl, wrapperId);
      addElLive(wrapperEl, live);
      initSlides();
      let {
        nextEl,
        prevEl
      } = swiper.navigation ? swiper.navigation : {};
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (nextEl) {
        nextEl.forEach((el) => initNavEl(el, wrapperId, params.nextSlideMessage));
      }
      if (prevEl) {
        prevEl.forEach((el) => initNavEl(el, wrapperId, params.prevSlideMessage));
      }
      if (hasClickablePagination()) {
        const paginationEl = makeElementsArray(swiper.pagination.el);
        paginationEl.forEach((el) => {
          el.addEventListener("keydown", onEnterOrSpaceKey);
        });
      }
      const document2 = getDocument();
      document2.addEventListener("visibilitychange", onVisibilityChange);
      swiper.el.addEventListener("focus", handleFocus, true);
      swiper.el.addEventListener("focus", handleFocus, true);
      swiper.el.addEventListener("pointerdown", handlePointerDown, true);
      swiper.el.addEventListener("pointerup", handlePointerUp, true);
    };
    function destroy() {
      if (liveRegion) liveRegion.remove();
      let {
        nextEl,
        prevEl
      } = swiper.navigation ? swiper.navigation : {};
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (nextEl) {
        nextEl.forEach((el) => el.removeEventListener("keydown", onEnterOrSpaceKey));
      }
      if (prevEl) {
        prevEl.forEach((el) => el.removeEventListener("keydown", onEnterOrSpaceKey));
      }
      if (hasClickablePagination()) {
        const paginationEl = makeElementsArray(swiper.pagination.el);
        paginationEl.forEach((el) => {
          el.removeEventListener("keydown", onEnterOrSpaceKey);
        });
      }
      const document2 = getDocument();
      document2.removeEventListener("visibilitychange", onVisibilityChange);
      if (swiper.el && typeof swiper.el !== "string") {
        swiper.el.removeEventListener("focus", handleFocus, true);
        swiper.el.removeEventListener("pointerdown", handlePointerDown, true);
        swiper.el.removeEventListener("pointerup", handlePointerUp, true);
      }
    }
    on("beforeInit", () => {
      liveRegion = createElement("span", swiper.params.a11y.notificationClass);
      liveRegion.setAttribute("aria-live", "assertive");
      liveRegion.setAttribute("aria-atomic", "true");
    });
    on("afterInit", () => {
      if (!swiper.params.a11y.enabled) return;
      init();
    });
    on("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
      if (!swiper.params.a11y.enabled) return;
      initSlides();
    });
    on("fromEdge toEdge afterInit lock unlock", () => {
      if (!swiper.params.a11y.enabled) return;
      updateNavigation();
    });
    on("paginationUpdate", () => {
      if (!swiper.params.a11y.enabled) return;
      updatePagination();
    });
    on("destroy", () => {
      if (!swiper.params.a11y.enabled) return;
      destroy();
    });
  }

  // node_modules/swiper/modules/history.mjs
  function History(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      history: {
        enabled: false,
        root: "",
        replaceState: false,
        key: "slides",
        keepQuery: false
      }
    });
    let initialized = false;
    let paths = {};
    const slugify = (text) => {
      return text.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    };
    const getPathValues = (urlOverride) => {
      const window2 = getWindow();
      let location2;
      if (urlOverride) {
        location2 = new URL(urlOverride);
      } else {
        location2 = window2.location;
      }
      const pathArray = location2.pathname.slice(1).split("/").filter((part) => part !== "");
      const total = pathArray.length;
      const key = pathArray[total - 2];
      const value = pathArray[total - 1];
      return {
        key,
        value
      };
    };
    const setHistory = (key, index) => {
      const window2 = getWindow();
      if (!initialized || !swiper.params.history.enabled) return;
      let location2;
      if (swiper.params.url) {
        location2 = new URL(swiper.params.url);
      } else {
        location2 = window2.location;
      }
      const slide2 = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector('[data-swiper-slide-index="'.concat(index, '"]')) : swiper.slides[index];
      let value = slugify(slide2.getAttribute("data-history"));
      if (swiper.params.history.root.length > 0) {
        let root = swiper.params.history.root;
        if (root[root.length - 1] === "/") root = root.slice(0, root.length - 1);
        value = "".concat(root, "/").concat(key ? "".concat(key, "/") : "").concat(value);
      } else if (!location2.pathname.includes(key)) {
        value = "".concat(key ? "".concat(key, "/") : "").concat(value);
      }
      if (swiper.params.history.keepQuery) {
        value += location2.search;
      }
      const currentState = window2.history.state;
      if (currentState && currentState.value === value) {
        return;
      }
      if (swiper.params.history.replaceState) {
        window2.history.replaceState({
          value
        }, null, value);
      } else {
        window2.history.pushState({
          value
        }, null, value);
      }
    };
    const scrollToSlide = (speed, value, runCallbacks) => {
      if (value) {
        for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
          const slide2 = swiper.slides[i];
          const slideHistory = slugify(slide2.getAttribute("data-history"));
          if (slideHistory === value) {
            const index = swiper.getSlideIndex(slide2);
            swiper.slideTo(index, speed, runCallbacks);
          }
        }
      } else {
        swiper.slideTo(0, speed, runCallbacks);
      }
    };
    const setHistoryPopState = () => {
      paths = getPathValues(swiper.params.url);
      scrollToSlide(swiper.params.speed, paths.value, false);
    };
    const init = () => {
      const window2 = getWindow();
      if (!swiper.params.history) return;
      if (!window2.history || !window2.history.pushState) {
        swiper.params.history.enabled = false;
        swiper.params.hashNavigation.enabled = true;
        return;
      }
      initialized = true;
      paths = getPathValues(swiper.params.url);
      if (!paths.key && !paths.value) {
        if (!swiper.params.history.replaceState) {
          window2.addEventListener("popstate", setHistoryPopState);
        }
        return;
      }
      scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
      if (!swiper.params.history.replaceState) {
        window2.addEventListener("popstate", setHistoryPopState);
      }
    };
    const destroy = () => {
      const window2 = getWindow();
      if (!swiper.params.history.replaceState) {
        window2.removeEventListener("popstate", setHistoryPopState);
      }
    };
    on("init", () => {
      if (swiper.params.history.enabled) {
        init();
      }
    });
    on("destroy", () => {
      if (swiper.params.history.enabled) {
        destroy();
      }
    });
    on("transitionEnd _freeModeNoMomentumRelease", () => {
      if (initialized) {
        setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    });
    on("slideChange", () => {
      if (initialized && swiper.params.cssMode) {
        setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    });
  }

  // node_modules/swiper/modules/hash-navigation.mjs
  function HashNavigation(_ref) {
    let {
      swiper,
      extendParams,
      emit,
      on
    } = _ref;
    let initialized = false;
    const document2 = getDocument();
    const window2 = getWindow();
    extendParams({
      hashNavigation: {
        enabled: false,
        replaceState: false,
        watchState: false,
        getSlideIndex(_s, hash) {
          if (swiper.virtual && swiper.params.virtual.enabled) {
            const slideWithHash = swiper.slides.find((slideEl) => slideEl.getAttribute("data-hash") === hash);
            if (!slideWithHash) return 0;
            const index = parseInt(slideWithHash.getAttribute("data-swiper-slide-index"), 10);
            return index;
          }
          return swiper.getSlideIndex(elementChildren(swiper.slidesEl, ".".concat(swiper.params.slideClass, '[data-hash="').concat(hash, '"], swiper-slide[data-hash="').concat(hash, '"]'))[0]);
        }
      }
    });
    const onHashChange = () => {
      emit("hashChange");
      const newHash = document2.location.hash.replace("#", "");
      const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector('[data-swiper-slide-index="'.concat(swiper.activeIndex, '"]')) : swiper.slides[swiper.activeIndex];
      const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute("data-hash") : "";
      if (newHash !== activeSlideHash) {
        const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
        if (typeof newIndex === "undefined" || Number.isNaN(newIndex)) return;
        swiper.slideTo(newIndex);
      }
    };
    const setHash = () => {
      if (!initialized || !swiper.params.hashNavigation.enabled) return;
      const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector('[data-swiper-slide-index="'.concat(swiper.activeIndex, '"]')) : swiper.slides[swiper.activeIndex];
      const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute("data-hash") || activeSlideEl.getAttribute("data-history") : "";
      if (swiper.params.hashNavigation.replaceState && window2.history && window2.history.replaceState) {
        window2.history.replaceState(null, null, "#".concat(activeSlideHash) || "");
        emit("hashSet");
      } else {
        document2.location.hash = activeSlideHash || "";
        emit("hashSet");
      }
    };
    const init = () => {
      if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
      initialized = true;
      const hash = document2.location.hash.replace("#", "");
      if (hash) {
        const speed = 0;
        const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
        swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
      }
      if (swiper.params.hashNavigation.watchState) {
        window2.addEventListener("hashchange", onHashChange);
      }
    };
    const destroy = () => {
      if (swiper.params.hashNavigation.watchState) {
        window2.removeEventListener("hashchange", onHashChange);
      }
    };
    on("init", () => {
      if (swiper.params.hashNavigation.enabled) {
        init();
      }
    });
    on("destroy", () => {
      if (swiper.params.hashNavigation.enabled) {
        destroy();
      }
    });
    on("transitionEnd _freeModeNoMomentumRelease", () => {
      if (initialized) {
        setHash();
      }
    });
    on("slideChange", () => {
      if (initialized && swiper.params.cssMode) {
        setHash();
      }
    });
  }

  // node_modules/swiper/modules/autoplay.mjs
  function Autoplay(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit,
      params
    } = _ref;
    swiper.autoplay = {
      running: false,
      paused: false,
      timeLeft: 0
    };
    extendParams({
      autoplay: {
        enabled: false,
        delay: 3e3,
        waitForTransition: true,
        disableOnInteraction: false,
        stopOnLastSlide: false,
        reverseDirection: false,
        pauseOnMouseEnter: false
      }
    });
    let timeout;
    let raf;
    let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
    let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
    let autoplayTimeLeft;
    let autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
    let wasPaused;
    let isTouched;
    let pausedByTouch;
    let touchStartTimeout;
    let slideChanged;
    let pausedByInteraction;
    let pausedByPointerEnter;
    function onTransitionEnd(e) {
      if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
      if (e.target !== swiper.wrapperEl) return;
      swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
      if (pausedByPointerEnter || e.detail && e.detail.bySwiperTouchMove) {
        return;
      }
      resume();
    }
    const calcTimeLeft = () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (swiper.autoplay.paused) {
        wasPaused = true;
      } else if (wasPaused) {
        autoplayDelayCurrent = autoplayTimeLeft;
        wasPaused = false;
      }
      const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (/* @__PURE__ */ new Date()).getTime();
      swiper.autoplay.timeLeft = timeLeft;
      emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
      raf = requestAnimationFrame(() => {
        calcTimeLeft();
      });
    };
    const getSlideDelay = () => {
      let activeSlideEl;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        activeSlideEl = swiper.slides.find((slideEl) => slideEl.classList.contains("swiper-slide-active"));
      } else {
        activeSlideEl = swiper.slides[swiper.activeIndex];
      }
      if (!activeSlideEl) return void 0;
      const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
      return currentSlideDelay;
    };
    const run = (delayForce) => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      cancelAnimationFrame(raf);
      calcTimeLeft();
      let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
      autoplayDelayTotal = swiper.params.autoplay.delay;
      autoplayDelayCurrent = swiper.params.autoplay.delay;
      const currentSlideDelay = getSlideDelay();
      if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
        delay = currentSlideDelay;
        autoplayDelayTotal = currentSlideDelay;
        autoplayDelayCurrent = currentSlideDelay;
      }
      autoplayTimeLeft = delay;
      const speed = swiper.params.speed;
      const proceed = () => {
        if (!swiper || swiper.destroyed) return;
        if (swiper.params.autoplay.reverseDirection) {
          if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
            swiper.slidePrev(speed, true, true);
            emit("autoplay");
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(swiper.slides.length - 1, speed, true, true);
            emit("autoplay");
          }
        } else {
          if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
            swiper.slideNext(speed, true, true);
            emit("autoplay");
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(0, speed, true, true);
            emit("autoplay");
          }
        }
        if (swiper.params.cssMode) {
          autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
          requestAnimationFrame(() => {
            run();
          });
        }
      };
      if (delay > 0) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          proceed();
        }, delay);
      } else {
        requestAnimationFrame(() => {
          proceed();
        });
      }
      return delay;
    };
    const start = () => {
      autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
      swiper.autoplay.running = true;
      run();
      emit("autoplayStart");
    };
    const stop = () => {
      swiper.autoplay.running = false;
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
      emit("autoplayStop");
    };
    const pause = (internal, reset) => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      clearTimeout(timeout);
      if (!internal) {
        pausedByInteraction = true;
      }
      const proceed = () => {
        emit("autoplayPause");
        if (swiper.params.autoplay.waitForTransition) {
          swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd);
        } else {
          resume();
        }
      };
      swiper.autoplay.paused = true;
      if (reset) {
        if (slideChanged) {
          autoplayTimeLeft = swiper.params.autoplay.delay;
        }
        slideChanged = false;
        proceed();
        return;
      }
      const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
      autoplayTimeLeft = delay - ((/* @__PURE__ */ new Date()).getTime() - autoplayStartTime);
      if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
      if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
      proceed();
    };
    const resume = () => {
      if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
      autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
      if (pausedByInteraction) {
        pausedByInteraction = false;
        run(autoplayTimeLeft);
      } else {
        run();
      }
      swiper.autoplay.paused = false;
      emit("autoplayResume");
    };
    const onVisibilityChange = () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      const document2 = getDocument();
      if (document2.visibilityState === "hidden") {
        pausedByInteraction = true;
        pause(true);
      }
      if (document2.visibilityState === "visible") {
        resume();
      }
    };
    const onPointerEnter = (e) => {
      if (e.pointerType !== "mouse") return;
      pausedByInteraction = true;
      pausedByPointerEnter = true;
      if (swiper.animating || swiper.autoplay.paused) return;
      pause(true);
    };
    const onPointerLeave = (e) => {
      if (e.pointerType !== "mouse") return;
      pausedByPointerEnter = false;
      if (swiper.autoplay.paused) {
        resume();
      }
    };
    const attachMouseEvents = () => {
      if (swiper.params.autoplay.pauseOnMouseEnter) {
        swiper.el.addEventListener("pointerenter", onPointerEnter);
        swiper.el.addEventListener("pointerleave", onPointerLeave);
      }
    };
    const detachMouseEvents = () => {
      if (swiper.el && typeof swiper.el !== "string") {
        swiper.el.removeEventListener("pointerenter", onPointerEnter);
        swiper.el.removeEventListener("pointerleave", onPointerLeave);
      }
    };
    const attachDocumentEvents = () => {
      const document2 = getDocument();
      document2.addEventListener("visibilitychange", onVisibilityChange);
    };
    const detachDocumentEvents = () => {
      const document2 = getDocument();
      document2.removeEventListener("visibilitychange", onVisibilityChange);
    };
    on("init", () => {
      if (swiper.params.autoplay.enabled) {
        attachMouseEvents();
        attachDocumentEvents();
        start();
      }
    });
    on("destroy", () => {
      detachMouseEvents();
      detachDocumentEvents();
      if (swiper.autoplay.running) {
        stop();
      }
    });
    on("_freeModeStaticRelease", () => {
      if (pausedByTouch || pausedByInteraction) {
        resume();
      }
    });
    on("_freeModeNoMomentumRelease", () => {
      if (!swiper.params.autoplay.disableOnInteraction) {
        pause(true, true);
      } else {
        stop();
      }
    });
    on("beforeTransitionStart", (_s, speed, internal) => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (internal || !swiper.params.autoplay.disableOnInteraction) {
        pause(true, true);
      } else {
        stop();
      }
    });
    on("sliderFirstMove", () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
        return;
      }
      isTouched = true;
      pausedByTouch = false;
      pausedByInteraction = false;
      touchStartTimeout = setTimeout(() => {
        pausedByInteraction = true;
        pausedByTouch = true;
        pause(true);
      }, 200);
    });
    on("touchEnd", () => {
      if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
      clearTimeout(touchStartTimeout);
      clearTimeout(timeout);
      if (swiper.params.autoplay.disableOnInteraction) {
        pausedByTouch = false;
        isTouched = false;
        return;
      }
      if (pausedByTouch && swiper.params.cssMode) resume();
      pausedByTouch = false;
      isTouched = false;
    });
    on("slideChange", () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      slideChanged = true;
    });
    Object.assign(swiper.autoplay, {
      start,
      stop,
      pause,
      resume
    });
  }

  // node_modules/swiper/modules/thumbs.mjs
  function Thumb(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: true,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-thumbs"
      }
    });
    let initialized = false;
    let swiperCreated = false;
    swiper.thumbs = {
      swiper: null
    };
    function onThumbClick() {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      const clickedIndex = thumbsSwiper.clickedIndex;
      const clickedSlide = thumbsSwiper.clickedSlide;
      if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
      if (typeof clickedIndex === "undefined" || clickedIndex === null) return;
      let slideToIndex;
      if (thumbsSwiper.params.loop) {
        slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
      } else {
        slideToIndex = clickedIndex;
      }
      if (swiper.params.loop) {
        swiper.slideToLoop(slideToIndex);
      } else {
        swiper.slideTo(slideToIndex);
      }
    }
    function init() {
      const {
        thumbs: thumbsParams
      } = swiper.params;
      if (initialized) return false;
      initialized = true;
      const SwiperClass = swiper.constructor;
      if (thumbsParams.swiper instanceof SwiperClass) {
        swiper.thumbs.swiper = thumbsParams.swiper;
        Object.assign(swiper.thumbs.swiper.originalParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
        Object.assign(swiper.thumbs.swiper.params, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
        swiper.thumbs.swiper.update();
      } else if (isObject2(thumbsParams.swiper)) {
        const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
        Object.assign(thumbsSwiperParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
        swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
        swiperCreated = true;
      }
      swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
      swiper.thumbs.swiper.on("tap", onThumbClick);
      return true;
    }
    function update2(initial) {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      const slidesPerView = thumbsSwiper.params.slidesPerView === "auto" ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
      let thumbsToActivate = 1;
      const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
        thumbsToActivate = swiper.params.slidesPerView;
      }
      if (!swiper.params.thumbs.multipleActiveThumbs) {
        thumbsToActivate = 1;
      }
      thumbsToActivate = Math.floor(thumbsToActivate);
      thumbsSwiper.slides.forEach((slideEl) => slideEl.classList.remove(thumbActiveClass));
      if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
        for (let i = 0; i < thumbsToActivate; i += 1) {
          elementChildren(thumbsSwiper.slidesEl, '[data-swiper-slide-index="'.concat(swiper.realIndex + i, '"]')).forEach((slideEl) => {
            slideEl.classList.add(thumbActiveClass);
          });
        }
      } else {
        for (let i = 0; i < thumbsToActivate; i += 1) {
          if (thumbsSwiper.slides[swiper.realIndex + i]) {
            thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
          }
        }
      }
      const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
      const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
      if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
        const currentThumbsIndex = thumbsSwiper.activeIndex;
        let newThumbsIndex;
        let direction;
        if (thumbsSwiper.params.loop) {
          const newThumbsSlide = thumbsSwiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") === "".concat(swiper.realIndex));
          newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
          direction = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
        } else {
          newThumbsIndex = swiper.realIndex;
          direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
        }
        if (useOffset) {
          newThumbsIndex += direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
        }
        if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
          if (thumbsSwiper.params.centeredSlides) {
            if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
            } else {
              newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
            }
          } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : void 0);
        }
      }
    }
    on("beforeInit", () => {
      const {
        thumbs
      } = swiper.params;
      if (!thumbs || !thumbs.swiper) return;
      if (typeof thumbs.swiper === "string" || thumbs.swiper instanceof HTMLElement) {
        const document2 = getDocument();
        const getThumbsElementAndInit = () => {
          const thumbsElement = typeof thumbs.swiper === "string" ? document2.querySelector(thumbs.swiper) : thumbs.swiper;
          if (thumbsElement && thumbsElement.swiper) {
            thumbs.swiper = thumbsElement.swiper;
            init();
            update2(true);
          } else if (thumbsElement) {
            const eventName = "".concat(swiper.params.eventsPrefix, "init");
            const onThumbsSwiper = (e) => {
              thumbs.swiper = e.detail[0];
              thumbsElement.removeEventListener(eventName, onThumbsSwiper);
              init();
              update2(true);
              thumbs.swiper.update();
              swiper.update();
            };
            thumbsElement.addEventListener(eventName, onThumbsSwiper);
          }
          return thumbsElement;
        };
        const watchForThumbsToAppear = () => {
          if (swiper.destroyed) return;
          const thumbsElement = getThumbsElementAndInit();
          if (!thumbsElement) {
            requestAnimationFrame(watchForThumbsToAppear);
          }
        };
        requestAnimationFrame(watchForThumbsToAppear);
      } else {
        init();
        update2(true);
      }
    });
    on("slideChange update resize observerUpdate", () => {
      update2();
    });
    on("setTransition", (_s, duration) => {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      thumbsSwiper.setTransition(duration);
    });
    on("beforeDestroy", () => {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      if (swiperCreated) {
        thumbsSwiper.destroy();
      }
    });
    Object.assign(swiper.thumbs, {
      init,
      update: update2
    });
  }

  // node_modules/swiper/modules/free-mode.mjs
  function freeMode(_ref) {
    let {
      swiper,
      extendParams,
      emit,
      once
    } = _ref;
    extendParams({
      freeMode: {
        enabled: false,
        momentum: true,
        momentumRatio: 1,
        momentumBounce: true,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
        sticky: false,
        minimumVelocity: 0.02
      }
    });
    function onTouchStart2() {
      if (swiper.params.cssMode) return;
      const translate2 = swiper.getTranslate();
      swiper.setTranslate(translate2);
      swiper.setTransition(0);
      swiper.touchEventsData.velocities.length = 0;
      swiper.freeMode.onTouchEnd({
        currentPos: swiper.rtl ? swiper.translate : -swiper.translate
      });
    }
    function onTouchMove2() {
      if (swiper.params.cssMode) return;
      const {
        touchEventsData: data,
        touches
      } = swiper;
      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? "startX" : "startY"],
          time: data.touchStartTime
        });
      }
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
        time: now()
      });
    }
    function onTouchEnd2(_ref2) {
      let {
        currentPos
      } = _ref2;
      if (swiper.params.cssMode) return;
      const {
        params,
        wrapperEl,
        rtlTranslate: rtl,
        snapGrid,
        touchEventsData: data
      } = swiper;
      const touchEndTime = now();
      const timeDiff = touchEndTime - data.touchStartTime;
      if (currentPos < -swiper.minTranslate()) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (currentPos > -swiper.maxTranslate()) {
        if (swiper.slides.length < snapGrid.length) {
          swiper.slideTo(snapGrid.length - 1);
        } else {
          swiper.slideTo(swiper.slides.length - 1);
        }
        return;
      }
      if (params.freeMode.momentum) {
        if (data.velocities.length > 1) {
          const lastMoveEvent = data.velocities.pop();
          const velocityEvent = data.velocities.pop();
          const distance = lastMoveEvent.position - velocityEvent.position;
          const time = lastMoveEvent.time - velocityEvent.time;
          swiper.velocity = distance / time;
          swiper.velocity /= 2;
          if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
            swiper.velocity = 0;
          }
          if (time > 150 || now() - lastMoveEvent.time > 300) {
            swiper.velocity = 0;
          }
        } else {
          swiper.velocity = 0;
        }
        swiper.velocity *= params.freeMode.momentumVelocityRatio;
        data.velocities.length = 0;
        let momentumDuration = 1e3 * params.freeMode.momentumRatio;
        const momentumDistance = swiper.velocity * momentumDuration;
        let newPosition = swiper.translate + momentumDistance;
        if (rtl) newPosition = -newPosition;
        let doBounce = false;
        let afterBouncePosition;
        const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
        let needsLoopFix;
        if (newPosition < swiper.maxTranslate()) {
          if (params.freeMode.momentumBounce) {
            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
              newPosition = swiper.maxTranslate() - bounceAmount;
            }
            afterBouncePosition = swiper.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.maxTranslate();
          }
          if (params.loop && params.centeredSlides) needsLoopFix = true;
        } else if (newPosition > swiper.minTranslate()) {
          if (params.freeMode.momentumBounce) {
            if (newPosition - swiper.minTranslate() > bounceAmount) {
              newPosition = swiper.minTranslate() + bounceAmount;
            }
            afterBouncePosition = swiper.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.minTranslate();
          }
          if (params.loop && params.centeredSlides) needsLoopFix = true;
        } else if (params.freeMode.sticky) {
          let nextSlide;
          for (let j = 0; j < snapGrid.length; j += 1) {
            if (snapGrid[j] > -newPosition) {
              nextSlide = j;
              break;
            }
          }
          if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === "next") {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }
          newPosition = -newPosition;
        }
        if (needsLoopFix) {
          once("transitionEnd", () => {
            swiper.loopFix();
          });
        }
        if (swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
          } else {
            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
          }
          if (params.freeMode.sticky) {
            const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
            const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
            if (moveDistance < currentSlideSize) {
              momentumDuration = params.speed;
            } else if (moveDistance < 2 * currentSlideSize) {
              momentumDuration = params.speed * 1.5;
            } else {
              momentumDuration = params.speed * 2.5;
            }
          }
        } else if (params.freeMode.sticky) {
          swiper.slideToClosest();
          return;
        }
        if (params.freeMode.momentumBounce && doBounce) {
          swiper.updateProgress(afterBouncePosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          swiper.animating = true;
          elementTransitionEnd(wrapperEl, () => {
            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
            emit("momentumBounce");
            swiper.setTransition(params.speed);
            setTimeout(() => {
              swiper.setTranslate(afterBouncePosition);
              elementTransitionEnd(wrapperEl, () => {
                if (!swiper || swiper.destroyed) return;
                swiper.transitionEnd();
              });
            }, 0);
          });
        } else if (swiper.velocity) {
          emit("_freeModeNoMomentumRelease");
          swiper.updateProgress(newPosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          if (!swiper.animating) {
            swiper.animating = true;
            elementTransitionEnd(wrapperEl, () => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }
        } else {
          swiper.updateProgress(newPosition);
        }
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      } else if (params.freeMode) {
        emit("_freeModeNoMomentumRelease");
      }
      if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
        emit("_freeModeStaticRelease");
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
    }
    Object.assign(swiper, {
      freeMode: {
        onTouchStart: onTouchStart2,
        onTouchMove: onTouchMove2,
        onTouchEnd: onTouchEnd2
      }
    });
  }

  // node_modules/swiper/modules/grid.mjs
  function Grid(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      grid: {
        rows: 1,
        fill: "column"
      }
    });
    let slidesNumberEvenToRows;
    let slidesPerRow;
    let numFullColumns;
    let wasMultiRow;
    const getSpaceBetween = () => {
      let spaceBetween = swiper.params.spaceBetween;
      if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
        spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
      } else if (typeof spaceBetween === "string") {
        spaceBetween = parseFloat(spaceBetween);
      }
      return spaceBetween;
    };
    const initSlides = (slides) => {
      const {
        slidesPerView
      } = swiper.params;
      const {
        rows,
        fill
      } = swiper.params.grid;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
      numFullColumns = Math.floor(slidesLength / rows);
      if (Math.floor(slidesLength / rows) === slidesLength / rows) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
      }
      if (slidesPerView !== "auto" && fill === "row") {
        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
      }
      slidesPerRow = slidesNumberEvenToRows / rows;
    };
    const unsetSlides = () => {
      if (swiper.slides) {
        swiper.slides.forEach((slide2) => {
          if (slide2.swiperSlideGridSet) {
            slide2.style.height = "";
            slide2.style[swiper.getDirectionLabel("margin-top")] = "";
          }
        });
      }
    };
    const updateSlide = (i, slide2, slides) => {
      const {
        slidesPerGroup
      } = swiper.params;
      const spaceBetween = getSpaceBetween();
      const {
        rows,
        fill
      } = swiper.params.grid;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
      let newSlideOrderIndex;
      let column;
      let row;
      if (fill === "row" && slidesPerGroup > 1) {
        const groupIndex = Math.floor(i / (slidesPerGroup * rows));
        const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
        const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
        row = Math.floor(slideIndexInGroup / columnsInGroup);
        column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
        newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
        slide2.style.order = newSlideOrderIndex;
      } else if (fill === "column") {
        column = Math.floor(i / rows);
        row = i - column * rows;
        if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
          row += 1;
          if (row >= rows) {
            row = 0;
            column += 1;
          }
        }
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - row * slidesPerRow;
      }
      slide2.row = row;
      slide2.column = column;
      slide2.style.height = "calc((100% - ".concat((rows - 1) * spaceBetween, "px) / ").concat(rows, ")");
      slide2.style[swiper.getDirectionLabel("margin-top")] = row !== 0 ? spaceBetween && "".concat(spaceBetween, "px") : "";
      slide2.swiperSlideGridSet = true;
    };
    const updateWrapperSize = (slideSize, snapGrid) => {
      const {
        centeredSlides,
        roundLengths
      } = swiper.params;
      const spaceBetween = getSpaceBetween();
      const {
        rows
      } = swiper.params.grid;
      swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
      swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
      if (!swiper.params.cssMode) {
        swiper.wrapperEl.style[swiper.getDirectionLabel("width")] = "".concat(swiper.virtualSize + spaceBetween, "px");
      }
      if (centeredSlides) {
        const newSlidesGrid = [];
        for (let i = 0; i < snapGrid.length; i += 1) {
          let slidesGridItem = snapGrid[i];
          if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
          if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
        }
        snapGrid.splice(0, snapGrid.length);
        snapGrid.push(...newSlidesGrid);
      }
    };
    const onInit = () => {
      wasMultiRow = swiper.params.grid && swiper.params.grid.rows > 1;
    };
    const onUpdate = () => {
      const {
        params,
        el
      } = swiper;
      const isMultiRow = params.grid && params.grid.rows > 1;
      if (wasMultiRow && !isMultiRow) {
        el.classList.remove("".concat(params.containerModifierClass, "grid"), "".concat(params.containerModifierClass, "grid-column"));
        numFullColumns = 1;
        swiper.emitContainerClasses();
      } else if (!wasMultiRow && isMultiRow) {
        el.classList.add("".concat(params.containerModifierClass, "grid"));
        if (params.grid.fill === "column") {
          el.classList.add("".concat(params.containerModifierClass, "grid-column"));
        }
        swiper.emitContainerClasses();
      }
      wasMultiRow = isMultiRow;
    };
    on("init", onInit);
    on("update", onUpdate);
    swiper.grid = {
      initSlides,
      unsetSlides,
      updateSlide,
      updateWrapperSize
    };
  }

  // node_modules/swiper/modules/manipulation.mjs
  function appendSlide(slides) {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    if (params.loop) {
      swiper.loopDestroy();
    }
    const appendElement = (slideEl) => {
      if (typeof slideEl === "string") {
        const tempDOM = document.createElement("div");
        tempDOM.innerHTML = slideEl;
        slidesEl.append(tempDOM.children[0]);
        tempDOM.innerHTML = "";
      } else {
        slidesEl.append(slideEl);
      }
    };
    if (typeof slides === "object" && "length" in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) appendElement(slides[i]);
      }
    } else {
      appendElement(slides);
    }
    swiper.recalcSlides();
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
      swiper.update();
    }
  }
  function prependSlide(slides) {
    const swiper = this;
    const {
      params,
      activeIndex,
      slidesEl
    } = swiper;
    if (params.loop) {
      swiper.loopDestroy();
    }
    let newActiveIndex = activeIndex + 1;
    const prependElement = (slideEl) => {
      if (typeof slideEl === "string") {
        const tempDOM = document.createElement("div");
        tempDOM.innerHTML = slideEl;
        slidesEl.prepend(tempDOM.children[0]);
        tempDOM.innerHTML = "";
      } else {
        slidesEl.prepend(slideEl);
      }
    };
    if (typeof slides === "object" && "length" in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) prependElement(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
    } else {
      prependElement(slides);
    }
    swiper.recalcSlides();
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
      swiper.update();
    }
    swiper.slideTo(newActiveIndex, 0, false);
  }
  function addSlide(index, slides) {
    const swiper = this;
    const {
      params,
      activeIndex,
      slidesEl
    } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.recalcSlides();
    }
    const baseLength = swiper.slides.length;
    if (index <= 0) {
      swiper.prependSlide(slides);
      return;
    }
    if (index >= baseLength) {
      swiper.appendSlide(slides);
      return;
    }
    let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    const slidesBuffer = [];
    for (let i = baseLength - 1; i >= index; i -= 1) {
      const currentSlide = swiper.slides[i];
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }
    if (typeof slides === "object" && "length" in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) slidesEl.append(slides[i]);
      }
      newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else {
      slidesEl.append(slides);
    }
    for (let i = 0; i < slidesBuffer.length; i += 1) {
      slidesEl.append(slidesBuffer[i]);
    }
    swiper.recalcSlides();
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }
  function removeSlide(slidesIndexes) {
    const swiper = this;
    const {
      params,
      activeIndex
    } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
    }
    let newActiveIndex = activeIndexBuffer;
    let indexToRemove;
    if (typeof slidesIndexes === "object" && "length" in slidesIndexes) {
      for (let i = 0; i < slidesIndexes.length; i += 1) {
        indexToRemove = slidesIndexes[i];
        if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
      newActiveIndex = Math.max(newActiveIndex, 0);
    }
    swiper.recalcSlides();
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }
  function removeAllSlides() {
    const swiper = this;
    const slidesIndexes = [];
    for (let i = 0; i < swiper.slides.length; i += 1) {
      slidesIndexes.push(i);
    }
    swiper.removeSlide(slidesIndexes);
  }
  function Manipulation(_ref) {
    let {
      swiper
    } = _ref;
    Object.assign(swiper, {
      appendSlide: appendSlide.bind(swiper),
      prependSlide: prependSlide.bind(swiper),
      addSlide: addSlide.bind(swiper),
      removeSlide: removeSlide.bind(swiper),
      removeAllSlides: removeAllSlides.bind(swiper)
    });
  }

  // node_modules/swiper/shared/effect-init.mjs
  function effectInit(params) {
    const {
      effect,
      swiper,
      on,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      overwriteParams,
      perspective,
      recreateShadows,
      getEffectParams
    } = params;
    on("beforeInit", () => {
      if (swiper.params.effect !== effect) return;
      swiper.classNames.push("".concat(swiper.params.containerModifierClass).concat(effect));
      if (perspective && perspective()) {
        swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
      }
      const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
      Object.assign(swiper.params, overwriteParamsResult);
      Object.assign(swiper.originalParams, overwriteParamsResult);
    });
    on("setTranslate", () => {
      if (swiper.params.effect !== effect) return;
      setTranslate2();
    });
    on("setTransition", (_s, duration) => {
      if (swiper.params.effect !== effect) return;
      setTransition2(duration);
    });
    on("transitionEnd", () => {
      if (swiper.params.effect !== effect) return;
      if (recreateShadows) {
        if (!getEffectParams || !getEffectParams().slideShadows) return;
        swiper.slides.forEach((slideEl) => {
          slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => shadowEl.remove());
        });
        recreateShadows();
      }
    });
    let requireUpdateOnVirtual;
    on("virtualUpdate", () => {
      if (swiper.params.effect !== effect) return;
      if (!swiper.slides.length) {
        requireUpdateOnVirtual = true;
      }
      requestAnimationFrame(() => {
        if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
          setTranslate2();
          requireUpdateOnVirtual = false;
        }
      });
    });
  }

  // node_modules/swiper/shared/effect-target.mjs
  function effectTarget(effectParams, slideEl) {
    const transformEl = getSlideTransformEl(slideEl);
    if (transformEl !== slideEl) {
      transformEl.style.backfaceVisibility = "hidden";
      transformEl.style["-webkit-backface-visibility"] = "hidden";
    }
    return transformEl;
  }

  // node_modules/swiper/shared/effect-virtual-transition-end.mjs
  function effectVirtualTransitionEnd(_ref) {
    let {
      swiper,
      duration,
      transformElements,
      allSlides
    } = _ref;
    const {
      activeIndex
    } = swiper;
    const getSlide = (el) => {
      if (!el.parentElement) {
        const slide2 = swiper.slides.find((slideEl) => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode);
        return slide2;
      }
      return el.parentElement;
    };
    if (swiper.params.virtualTranslate && duration !== 0) {
      let eventTriggered = false;
      let transitionEndTarget;
      if (allSlides) {
        transitionEndTarget = transformElements;
      } else {
        transitionEndTarget = transformElements.filter((transformEl) => {
          const el = transformEl.classList.contains("swiper-slide-transform") ? getSlide(transformEl) : transformEl;
          return swiper.getSlideIndex(el) === activeIndex;
        });
      }
      transitionEndTarget.forEach((el) => {
        elementTransitionEnd(el, () => {
          if (eventTriggered) return;
          if (!swiper || swiper.destroyed) return;
          eventTriggered = true;
          swiper.animating = false;
          const evt = new window.CustomEvent("transitionend", {
            bubbles: true,
            cancelable: true
          });
          swiper.wrapperEl.dispatchEvent(evt);
        });
      });
    }
  }

  // node_modules/swiper/modules/effect-fade.mjs
  function EffectFade(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      fadeEffect: {
        crossFade: false
      }
    });
    const setTranslate2 = () => {
      const {
        slides
      } = swiper;
      const params = swiper.params.fadeEffect;
      for (let i = 0; i < slides.length; i += 1) {
        const slideEl = swiper.slides[i];
        const offset = slideEl.swiperSlideOffset;
        let tx = -offset;
        if (!swiper.params.virtualTranslate) tx -= swiper.translate;
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.opacity = slideOpacity;
        targetEl.style.transform = "translate3d(".concat(tx, "px, ").concat(ty, "px, 0px)");
      }
    };
    const setTransition2 = (duration) => {
      const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = "".concat(duration, "ms");
      });
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements,
        allSlides: true
      });
    };
    effectInit({
      effect: "fade",
      swiper,
      on,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: !swiper.params.cssMode
      })
    });
  }

  // node_modules/swiper/modules/effect-cube.mjs
  function EffectCube(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
      }
    });
    const createSlideShadows = (slideEl, progress, isHorizontal) => {
      let shadowBefore = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
      let shadowAfter = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
      if (!shadowBefore) {
        shadowBefore = createElement("div", "swiper-slide-shadow-cube swiper-slide-shadow-".concat(isHorizontal ? "left" : "top").split(" "));
        slideEl.append(shadowBefore);
      }
      if (!shadowAfter) {
        shadowAfter = createElement("div", "swiper-slide-shadow-cube swiper-slide-shadow-".concat(isHorizontal ? "right" : "bottom").split(" "));
        slideEl.append(shadowAfter);
      }
      if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
      if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = () => {
      const isHorizontal = swiper.isHorizontal();
      swiper.slides.forEach((slideEl) => {
        const progress = Math.max(Math.min(slideEl.progress, 1), -1);
        createSlideShadows(slideEl, progress, isHorizontal);
      });
    };
    const setTranslate2 = () => {
      const {
        el,
        wrapperEl,
        slides,
        width: swiperWidth,
        height: swiperHeight,
        rtlTranslate: rtl,
        size: swiperSize,
        browser: browser2
      } = swiper;
      const r = getRotateFix(swiper);
      const params = swiper.params.cubeEffect;
      const isHorizontal = swiper.isHorizontal();
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      let wrapperRotate = 0;
      let cubeShadowEl;
      if (params.shadow) {
        if (isHorizontal) {
          cubeShadowEl = swiper.wrapperEl.querySelector(".swiper-cube-shadow");
          if (!cubeShadowEl) {
            cubeShadowEl = createElement("div", "swiper-cube-shadow");
            swiper.wrapperEl.append(cubeShadowEl);
          }
          cubeShadowEl.style.height = "".concat(swiperWidth, "px");
        } else {
          cubeShadowEl = el.querySelector(".swiper-cube-shadow");
          if (!cubeShadowEl) {
            cubeShadowEl = createElement("div", "swiper-cube-shadow");
            el.append(cubeShadowEl);
          }
        }
      }
      for (let i = 0; i < slides.length; i += 1) {
        const slideEl = slides[i];
        let slideIndex = i;
        if (isVirtual) {
          slideIndex = parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10);
        }
        let slideAngle = slideIndex * 90;
        let round = Math.floor(slideAngle / 360);
        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }
        const progress = Math.max(Math.min(slideEl.progress, 1), -1);
        let tx = 0;
        let ty = 0;
        let tz = 0;
        if (slideIndex % 4 === 0) {
          tx = -round * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + round * 4 * swiperSize;
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = 3 * swiperSize + swiperSize * 4 * round;
        }
        if (rtl) {
          tx = -tx;
        }
        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }
        const transform = "rotateX(".concat(r(isHorizontal ? 0 : -slideAngle), "deg) rotateY(").concat(r(isHorizontal ? slideAngle : 0), "deg) translate3d(").concat(tx, "px, ").concat(ty, "px, ").concat(tz, "px)");
        if (progress <= 1 && progress > -1) {
          wrapperRotate = slideIndex * 90 + progress * 90;
          if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
        }
        slideEl.style.transform = transform;
        if (params.slideShadows) {
          createSlideShadows(slideEl, progress, isHorizontal);
        }
      }
      wrapperEl.style.transformOrigin = "50% 50% -".concat(swiperSize / 2, "px");
      wrapperEl.style["-webkit-transform-origin"] = "50% 50% -".concat(swiperSize / 2, "px");
      if (params.shadow) {
        if (isHorizontal) {
          cubeShadowEl.style.transform = "translate3d(0px, ".concat(swiperWidth / 2 + params.shadowOffset, "px, ").concat(-swiperWidth / 2, "px) rotateX(89.99deg) rotateZ(0deg) scale(").concat(params.shadowScale, ")");
        } else {
          const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
          const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
          const scale1 = params.shadowScale;
          const scale2 = params.shadowScale / multiplier;
          const offset = params.shadowOffset;
          cubeShadowEl.style.transform = "scale3d(".concat(scale1, ", 1, ").concat(scale2, ") translate3d(0px, ").concat(swiperHeight / 2 + offset, "px, ").concat(-swiperHeight / 2 / scale2, "px) rotateX(-89.99deg)");
        }
      }
      const zFactor = (browser2.isSafari || browser2.isWebView) && browser2.needPerspectiveFix ? -swiperSize / 2 : 0;
      wrapperEl.style.transform = "translate3d(0px,0,".concat(zFactor, "px) rotateX(").concat(r(swiper.isHorizontal() ? 0 : wrapperRotate), "deg) rotateY(").concat(r(swiper.isHorizontal() ? -wrapperRotate : 0), "deg)");
      wrapperEl.style.setProperty("--swiper-cube-translate-z", "".concat(zFactor, "px"));
    };
    const setTransition2 = (duration) => {
      const {
        el,
        slides
      } = swiper;
      slides.forEach((slideEl) => {
        slideEl.style.transitionDuration = "".concat(duration, "ms");
        slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((subEl) => {
          subEl.style.transitionDuration = "".concat(duration, "ms");
        });
      });
      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        const shadowEl = el.querySelector(".swiper-cube-shadow");
        if (shadowEl) shadowEl.style.transitionDuration = "".concat(duration, "ms");
      }
    };
    effectInit({
      effect: "cube",
      swiper,
      on,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      recreateShadows,
      getEffectParams: () => swiper.params.cubeEffect,
      perspective: () => true,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true
      })
    });
  }

  // node_modules/swiper/shared/create-shadow.mjs
  function createShadow(suffix, slideEl, side) {
    const shadowClass = "swiper-slide-shadow".concat(side ? "-".concat(side) : "").concat(suffix ? " swiper-slide-shadow-".concat(suffix) : "");
    const shadowContainer = getSlideTransformEl(slideEl);
    let shadowEl = shadowContainer.querySelector(".".concat(shadowClass.split(" ").join(".")));
    if (!shadowEl) {
      shadowEl = createElement("div", shadowClass.split(" "));
      shadowContainer.append(shadowEl);
    }
    return shadowEl;
  }

  // node_modules/swiper/modules/effect-flip.mjs
  function EffectFlip(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      flipEffect: {
        slideShadows: true,
        limitRotation: true
      }
    });
    const createSlideShadows = (slideEl, progress) => {
      let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
      let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
      if (!shadowBefore) {
        shadowBefore = createShadow("flip", slideEl, swiper.isHorizontal() ? "left" : "top");
      }
      if (!shadowAfter) {
        shadowAfter = createShadow("flip", slideEl, swiper.isHorizontal() ? "right" : "bottom");
      }
      if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
      if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = () => {
      swiper.params.flipEffect;
      swiper.slides.forEach((slideEl) => {
        let progress = slideEl.progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min(slideEl.progress, 1), -1);
        }
        createSlideShadows(slideEl, progress);
      });
    };
    const setTranslate2 = () => {
      const {
        slides,
        rtlTranslate: rtl
      } = swiper;
      const params = swiper.params.flipEffect;
      const rotateFix = getRotateFix(swiper);
      for (let i = 0; i < slides.length; i += 1) {
        const slideEl = slides[i];
        let progress = slideEl.progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min(slideEl.progress, 1), -1);
        }
        const offset = slideEl.swiperSlideOffset;
        const rotate = -180 * progress;
        let rotateY = rotate;
        let rotateX = 0;
        let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }
        slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
        if (params.slideShadows) {
          createSlideShadows(slideEl, progress);
        }
        const transform = "translate3d(".concat(tx, "px, ").concat(ty, "px, 0px) rotateX(").concat(rotateFix(rotateX), "deg) rotateY(").concat(rotateFix(rotateY), "deg)");
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = transform;
      }
    };
    const setTransition2 = (duration) => {
      const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = "".concat(duration, "ms");
        el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => {
          shadowEl.style.transitionDuration = "".concat(duration, "ms");
        });
      });
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements
      });
    };
    effectInit({
      effect: "flip",
      swiper,
      on,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      recreateShadows,
      getEffectParams: () => swiper.params.flipEffect,
      perspective: () => true,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: !swiper.params.cssMode
      })
    });
  }

  // node_modules/swiper/modules/effect-coverflow.mjs
  function EffectCoverflow(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: true
      }
    });
    const setTranslate2 = () => {
      const {
        width: swiperWidth,
        height: swiperHeight,
        slides,
        slidesSizesGrid
      } = swiper;
      const params = swiper.params.coverflowEffect;
      const isHorizontal = swiper.isHorizontal();
      const transform = swiper.translate;
      const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
      const rotate = isHorizontal ? params.rotate : -params.rotate;
      const translate2 = params.depth;
      const r = getRotateFix(swiper);
      for (let i = 0, length = slides.length; i < length; i += 1) {
        const slideEl = slides[i];
        const slideSize = slidesSizesGrid[i];
        const slideOffset = slideEl.swiperSlideOffset;
        const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
        const offsetMultiplier = typeof params.modifier === "function" ? params.modifier(centerOffset) : centerOffset * params.modifier;
        let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        let translateZ = -translate2 * Math.abs(offsetMultiplier);
        let stretch = params.stretch;
        if (typeof stretch === "string" && stretch.indexOf("%") !== -1) {
          stretch = parseFloat(params.stretch) / 100 * slideSize;
        }
        let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
        let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
        let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);
        if (Math.abs(translateX) < 1e-3) translateX = 0;
        if (Math.abs(translateY) < 1e-3) translateY = 0;
        if (Math.abs(translateZ) < 1e-3) translateZ = 0;
        if (Math.abs(rotateY) < 1e-3) rotateY = 0;
        if (Math.abs(rotateX) < 1e-3) rotateX = 0;
        if (Math.abs(scale) < 1e-3) scale = 0;
        const slideTransform = "translate3d(".concat(translateX, "px,").concat(translateY, "px,").concat(translateZ, "px)  rotateX(").concat(r(rotateX), "deg) rotateY(").concat(r(rotateY), "deg) scale(").concat(scale, ")");
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = slideTransform;
        slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          let shadowBeforeEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
          let shadowAfterEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
          if (!shadowBeforeEl) {
            shadowBeforeEl = createShadow("coverflow", slideEl, isHorizontal ? "left" : "top");
          }
          if (!shadowAfterEl) {
            shadowAfterEl = createShadow("coverflow", slideEl, isHorizontal ? "right" : "bottom");
          }
          if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
          if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
        }
      }
    };
    const setTransition2 = (duration) => {
      const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = "".concat(duration, "ms");
        el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => {
          shadowEl.style.transitionDuration = "".concat(duration, "ms");
        });
      });
    };
    effectInit({
      effect: "coverflow",
      swiper,
      on,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      perspective: () => true,
      overwriteParams: () => ({
        watchSlidesProgress: true
      })
    });
  }

  // node_modules/swiper/modules/effect-creative.mjs
  function EffectCreative(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      creativeEffect: {
        limitProgress: 1,
        shadowPerProgress: false,
        progressMultiplier: 1,
        perspective: true,
        prev: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        },
        next: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        }
      }
    });
    const getTranslateValue = (value) => {
      if (typeof value === "string") return value;
      return "".concat(value, "px");
    };
    const setTranslate2 = () => {
      const {
        slides,
        wrapperEl,
        slidesSizesGrid
      } = swiper;
      const params = swiper.params.creativeEffect;
      const {
        progressMultiplier: multiplier
      } = params;
      const isCenteredSlides = swiper.params.centeredSlides;
      const rotateFix = getRotateFix(swiper);
      if (isCenteredSlides) {
        const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
        wrapperEl.style.transform = "translateX(calc(50% - ".concat(margin, "px))");
      }
      for (let i = 0; i < slides.length; i += 1) {
        const slideEl = slides[i];
        const slideProgress = slideEl.progress;
        const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
        let originalProgress = progress;
        if (!isCenteredSlides) {
          originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
        }
        const offset = slideEl.swiperSlideOffset;
        const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
        const r = [0, 0, 0];
        let custom = false;
        if (!swiper.isHorizontal()) {
          t[1] = t[0];
          t[0] = 0;
        }
        let data = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1
        };
        if (progress < 0) {
          data = params.next;
          custom = true;
        } else if (progress > 0) {
          data = params.prev;
          custom = true;
        }
        t.forEach((value, index) => {
          t[index] = "calc(".concat(value, "px + (").concat(getTranslateValue(data.translate[index]), " * ").concat(Math.abs(progress * multiplier), "))");
        });
        r.forEach((value, index) => {
          let val = data.rotate[index] * Math.abs(progress * multiplier);
          r[index] = val;
        });
        slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
        const translateString = t.join(", ");
        const rotateString = "rotateX(".concat(rotateFix(r[0]), "deg) rotateY(").concat(rotateFix(r[1]), "deg) rotateZ(").concat(rotateFix(r[2]), "deg)");
        const scaleString = originalProgress < 0 ? "scale(".concat(1 + (1 - data.scale) * originalProgress * multiplier, ")") : "scale(".concat(1 - (1 - data.scale) * originalProgress * multiplier, ")");
        const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
        const transform = "translate3d(".concat(translateString, ") ").concat(rotateString, " ").concat(scaleString);
        if (custom && data.shadow || !custom) {
          let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
          if (!shadowEl && data.shadow) {
            shadowEl = createShadow("creative", slideEl);
          }
          if (shadowEl) {
            const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
            shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
          }
        }
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = transform;
        targetEl.style.opacity = opacityString;
        if (data.origin) {
          targetEl.style.transformOrigin = data.origin;
        }
      }
    };
    const setTransition2 = (duration) => {
      const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = "".concat(duration, "ms");
        el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl) => {
          shadowEl.style.transitionDuration = "".concat(duration, "ms");
        });
      });
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements,
        allSlides: true
      });
    };
    effectInit({
      effect: "creative",
      swiper,
      on,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      perspective: () => swiper.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: true,
        virtualTranslate: !swiper.params.cssMode
      })
    });
  }

  // node_modules/swiper/modules/effect-cards.mjs
  function EffectCards(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      cardsEffect: {
        slideShadows: true,
        rotate: true,
        perSlideRotate: 2,
        perSlideOffset: 8
      }
    });
    const setTranslate2 = () => {
      const {
        slides,
        activeIndex,
        rtlTranslate: rtl
      } = swiper;
      const params = swiper.params.cardsEffect;
      const {
        startTranslate,
        isTouched
      } = swiper.touchEventsData;
      const currentTranslate = rtl ? -swiper.translate : swiper.translate;
      for (let i = 0; i < slides.length; i += 1) {
        const slideEl = slides[i];
        const slideProgress = slideEl.progress;
        const progress = Math.min(Math.max(slideProgress, -4), 4);
        let offset = slideEl.swiperSlideOffset;
        if (swiper.params.centeredSlides && !swiper.params.cssMode) {
          swiper.wrapperEl.style.transform = "translateX(".concat(swiper.minTranslate(), "px)");
        }
        if (swiper.params.centeredSlides && swiper.params.cssMode) {
          offset -= slides[0].swiperSlideOffset;
        }
        let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
        let tY = 0;
        const tZ = -100 * Math.abs(progress);
        let scale = 1;
        let rotate = -params.perSlideRotate * progress;
        let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
        const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
        const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
        const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
        if (isSwipeToNext || isSwipeToPrev) {
          const subProgress = __pow(1 - Math.abs((Math.abs(progress) - 0.5) / 0.5), 0.5);
          rotate += -28 * progress * subProgress;
          scale += -0.5 * subProgress;
          tXAdd += 96 * subProgress;
          tY = "".concat(-25 * subProgress * Math.abs(progress), "%");
        }
        if (progress < 0) {
          tX = "calc(".concat(tX, "px ").concat(rtl ? "-" : "+", " (").concat(tXAdd * Math.abs(progress), "%))");
        } else if (progress > 0) {
          tX = "calc(".concat(tX, "px ").concat(rtl ? "-" : "+", " (-").concat(tXAdd * Math.abs(progress), "%))");
        } else {
          tX = "".concat(tX, "px");
        }
        if (!swiper.isHorizontal()) {
          const prevY = tY;
          tY = tX;
          tX = prevY;
        }
        const scaleString = progress < 0 ? "".concat(1 + (1 - scale) * progress) : "".concat(1 - (1 - scale) * progress);
        const transform = "\n        translate3d(".concat(tX, ", ").concat(tY, ", ").concat(tZ, "px)\n        rotateZ(").concat(params.rotate ? rtl ? -rotate : rotate : 0, "deg)\n        scale(").concat(scaleString, ")\n      ");
        if (params.slideShadows) {
          let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
          if (!shadowEl) {
            shadowEl = createShadow("cards", slideEl);
          }
          if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
        }
        slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = transform;
      }
    };
    const setTransition2 = (duration) => {
      const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = "".concat(duration, "ms");
        el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl) => {
          shadowEl.style.transitionDuration = "".concat(duration, "ms");
        });
      });
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements
      });
    };
    effectInit({
      effect: "cards",
      swiper,
      on,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      perspective: () => true,
      overwriteParams: () => ({
        _loopSwapReset: false,
        watchSlidesProgress: true,
        loopAdditionalSlides: 3,
        centeredSlides: true,
        virtualTranslate: !swiper.params.cssMode
      })
    });
  }

  // node_modules/swiper/swiper-bundle.mjs
  var modules = [Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Controller, A11y, History, HashNavigation, Autoplay, Thumb, freeMode, Grid, Manipulation, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCreative, EffectCards];
  Swiper.use(modules);

  // node_modules/swiper/shared/update-swiper.mjs
  var paramsList = [
    "eventsPrefix",
    "injectStyles",
    "injectStylesUrls",
    "modules",
    "init",
    "_direction",
    "oneWayMovement",
    "swiperElementNodeName",
    "touchEventsTarget",
    "initialSlide",
    "_speed",
    "cssMode",
    "updateOnWindowResize",
    "resizeObserver",
    "nested",
    "focusableElements",
    "_enabled",
    "_width",
    "_height",
    "preventInteractionOnTransition",
    "userAgent",
    "url",
    "_edgeSwipeDetection",
    "_edgeSwipeThreshold",
    "_freeMode",
    "_autoHeight",
    "setWrapperSize",
    "virtualTranslate",
    "_effect",
    "breakpoints",
    "breakpointsBase",
    "_spaceBetween",
    "_slidesPerView",
    "maxBackfaceHiddenSlides",
    "_grid",
    "_slidesPerGroup",
    "_slidesPerGroupSkip",
    "_slidesPerGroupAuto",
    "_centeredSlides",
    "_centeredSlidesBounds",
    "_slidesOffsetBefore",
    "_slidesOffsetAfter",
    "normalizeSlideIndex",
    "_centerInsufficientSlides",
    "_watchOverflow",
    "roundLengths",
    "touchRatio",
    "touchAngle",
    "simulateTouch",
    "_shortSwipes",
    "_longSwipes",
    "longSwipesRatio",
    "longSwipesMs",
    "_followFinger",
    "allowTouchMove",
    "_threshold",
    "touchMoveStopPropagation",
    "touchStartPreventDefault",
    "touchStartForcePreventDefault",
    "touchReleaseOnEdges",
    "uniqueNavElements",
    "_resistance",
    "_resistanceRatio",
    "_watchSlidesProgress",
    "_grabCursor",
    "preventClicks",
    "preventClicksPropagation",
    "_slideToClickedSlide",
    "_loop",
    "loopAdditionalSlides",
    "loopAddBlankSlides",
    "loopPreventsSliding",
    "_rewind",
    "_allowSlidePrev",
    "_allowSlideNext",
    "_swipeHandler",
    "_noSwiping",
    "noSwipingClass",
    "noSwipingSelector",
    "passiveListeners",
    "containerModifierClass",
    "slideClass",
    "slideActiveClass",
    "slideVisibleClass",
    "slideFullyVisibleClass",
    "slideNextClass",
    "slidePrevClass",
    "slideBlankClass",
    "wrapperClass",
    "lazyPreloaderClass",
    "lazyPreloadPrevNext",
    "runCallbacksOnInit",
    "observer",
    "observeParents",
    "observeSlideChildren",
    // modules
    "a11y",
    "_autoplay",
    "_controller",
    "coverflowEffect",
    "cubeEffect",
    "fadeEffect",
    "flipEffect",
    "creativeEffect",
    "cardsEffect",
    "hashNavigation",
    "history",
    "keyboard",
    "mousewheel",
    "_navigation",
    "_pagination",
    "parallax",
    "_scrollbar",
    "_thumbs",
    "virtual",
    "zoom",
    "control"
  ];
  function isObject3(o) {
    return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object" && !o.__swiper__;
  }
  function extend3(target, src) {
    const noExtend = ["__proto__", "constructor", "prototype"];
    Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
      if (typeof target[key] === "undefined") target[key] = src[key];
      else if (isObject3(src[key]) && isObject3(target[key]) && Object.keys(src[key]).length > 0) {
        if (src[key].__swiper__) target[key] = src[key];
        else extend3(target[key], src[key]);
      } else {
        target[key] = src[key];
      }
    });
  }
  function needsNavigation(params) {
    if (params === void 0) {
      params = {};
    }
    return params.navigation && typeof params.navigation.nextEl === "undefined" && typeof params.navigation.prevEl === "undefined";
  }
  function needsPagination(params) {
    if (params === void 0) {
      params = {};
    }
    return params.pagination && typeof params.pagination.el === "undefined";
  }
  function needsScrollbar(params) {
    if (params === void 0) {
      params = {};
    }
    return params.scrollbar && typeof params.scrollbar.el === "undefined";
  }
  function attrToProp(attrName) {
    if (attrName === void 0) {
      attrName = "";
    }
    return attrName.replace(/-[a-z]/g, (l) => l.toUpperCase().replace("-", ""));
  }
  function updateSwiper(_ref) {
    let {
      swiper,
      slides,
      passedParams,
      changedParams,
      nextEl,
      prevEl,
      scrollbarEl,
      paginationEl
    } = _ref;
    const updateParams = changedParams.filter((key) => key !== "children" && key !== "direction" && key !== "wrapperClass");
    const {
      params: currentParams,
      pagination,
      navigation,
      scrollbar,
      virtual,
      thumbs
    } = swiper;
    let needThumbsInit;
    let needControllerInit;
    let needPaginationInit;
    let needScrollbarInit;
    let needNavigationInit;
    let loopNeedDestroy;
    let loopNeedEnable;
    let loopNeedReloop;
    if (changedParams.includes("thumbs") && passedParams.thumbs && passedParams.thumbs.swiper && !passedParams.thumbs.swiper.destroyed && currentParams.thumbs && (!currentParams.thumbs.swiper || currentParams.thumbs.swiper.destroyed)) {
      needThumbsInit = true;
    }
    if (changedParams.includes("controller") && passedParams.controller && passedParams.controller.control && currentParams.controller && !currentParams.controller.control) {
      needControllerInit = true;
    }
    if (changedParams.includes("pagination") && passedParams.pagination && (passedParams.pagination.el || paginationEl) && (currentParams.pagination || currentParams.pagination === false) && pagination && !pagination.el) {
      needPaginationInit = true;
    }
    if (changedParams.includes("scrollbar") && passedParams.scrollbar && (passedParams.scrollbar.el || scrollbarEl) && (currentParams.scrollbar || currentParams.scrollbar === false) && scrollbar && !scrollbar.el) {
      needScrollbarInit = true;
    }
    if (changedParams.includes("navigation") && passedParams.navigation && (passedParams.navigation.prevEl || prevEl) && (passedParams.navigation.nextEl || nextEl) && (currentParams.navigation || currentParams.navigation === false) && navigation && !navigation.prevEl && !navigation.nextEl) {
      needNavigationInit = true;
    }
    const destroyModule = (mod) => {
      if (!swiper[mod]) return;
      swiper[mod].destroy();
      if (mod === "navigation") {
        if (swiper.isElement) {
          swiper[mod].prevEl.remove();
          swiper[mod].nextEl.remove();
        }
        currentParams[mod].prevEl = void 0;
        currentParams[mod].nextEl = void 0;
        swiper[mod].prevEl = void 0;
        swiper[mod].nextEl = void 0;
      } else {
        if (swiper.isElement) {
          swiper[mod].el.remove();
        }
        currentParams[mod].el = void 0;
        swiper[mod].el = void 0;
      }
    };
    if (changedParams.includes("loop") && swiper.isElement) {
      if (currentParams.loop && !passedParams.loop) {
        loopNeedDestroy = true;
      } else if (!currentParams.loop && passedParams.loop) {
        loopNeedEnable = true;
      } else {
        loopNeedReloop = true;
      }
    }
    updateParams.forEach((key) => {
      if (isObject3(currentParams[key]) && isObject3(passedParams[key])) {
        Object.assign(currentParams[key], passedParams[key]);
        if ((key === "navigation" || key === "pagination" || key === "scrollbar") && "enabled" in passedParams[key] && !passedParams[key].enabled) {
          destroyModule(key);
        }
      } else {
        const newValue = passedParams[key];
        if ((newValue === true || newValue === false) && (key === "navigation" || key === "pagination" || key === "scrollbar")) {
          if (newValue === false) {
            destroyModule(key);
          }
        } else {
          currentParams[key] = passedParams[key];
        }
      }
    });
    if (updateParams.includes("controller") && !needControllerInit && swiper.controller && swiper.controller.control && currentParams.controller && currentParams.controller.control) {
      swiper.controller.control = currentParams.controller.control;
    }
    if (changedParams.includes("children") && slides && virtual && currentParams.virtual.enabled) {
      virtual.slides = slides;
      virtual.update(true);
    } else if (changedParams.includes("virtual") && virtual && currentParams.virtual.enabled) {
      if (slides) virtual.slides = slides;
      virtual.update(true);
    }
    if (changedParams.includes("children") && slides && currentParams.loop) {
      loopNeedReloop = true;
    }
    if (needThumbsInit) {
      const initialized = thumbs.init();
      if (initialized) thumbs.update(true);
    }
    if (needControllerInit) {
      swiper.controller.control = currentParams.controller.control;
    }
    if (needPaginationInit) {
      if (swiper.isElement && (!paginationEl || typeof paginationEl === "string")) {
        paginationEl = document.createElement("div");
        paginationEl.classList.add("swiper-pagination");
        paginationEl.part.add("pagination");
        swiper.el.appendChild(paginationEl);
      }
      if (paginationEl) currentParams.pagination.el = paginationEl;
      pagination.init();
      pagination.render();
      pagination.update();
    }
    if (needScrollbarInit) {
      if (swiper.isElement && (!scrollbarEl || typeof scrollbarEl === "string")) {
        scrollbarEl = document.createElement("div");
        scrollbarEl.classList.add("swiper-scrollbar");
        scrollbarEl.part.add("scrollbar");
        swiper.el.appendChild(scrollbarEl);
      }
      if (scrollbarEl) currentParams.scrollbar.el = scrollbarEl;
      scrollbar.init();
      scrollbar.updateSize();
      scrollbar.setTranslate();
    }
    if (needNavigationInit) {
      if (swiper.isElement) {
        if (!nextEl || typeof nextEl === "string") {
          nextEl = document.createElement("div");
          nextEl.classList.add("swiper-button-next");
          nextEl.innerHTML = swiper.hostEl.constructor.nextButtonSvg;
          nextEl.part.add("button-next");
          swiper.el.appendChild(nextEl);
        }
        if (!prevEl || typeof prevEl === "string") {
          prevEl = document.createElement("div");
          prevEl.classList.add("swiper-button-prev");
          prevEl.innerHTML = swiper.hostEl.constructor.prevButtonSvg;
          prevEl.part.add("button-prev");
          swiper.el.appendChild(prevEl);
        }
      }
      if (nextEl) currentParams.navigation.nextEl = nextEl;
      if (prevEl) currentParams.navigation.prevEl = prevEl;
      navigation.init();
      navigation.update();
    }
    if (changedParams.includes("allowSlideNext")) {
      swiper.allowSlideNext = passedParams.allowSlideNext;
    }
    if (changedParams.includes("allowSlidePrev")) {
      swiper.allowSlidePrev = passedParams.allowSlidePrev;
    }
    if (changedParams.includes("direction")) {
      swiper.changeDirection(passedParams.direction, false);
    }
    if (loopNeedDestroy || loopNeedReloop) {
      swiper.loopDestroy();
    }
    if (loopNeedEnable || loopNeedReloop) {
      swiper.loopCreate();
    }
    swiper.update();
  }

  // node_modules/swiper/shared/get-element-params.mjs
  var formatValue = (val) => {
    if (parseFloat(val) === Number(val)) return Number(val);
    if (val === "true") return true;
    if (val === "") return true;
    if (val === "false") return false;
    if (val === "null") return null;
    if (val === "undefined") return void 0;
    if (typeof val === "string" && val.includes("{") && val.includes("}") && val.includes('"')) {
      let v;
      try {
        v = JSON.parse(val);
      } catch (err) {
        v = val;
      }
      return v;
    }
    return val;
  };
  var modulesParamsList = ["a11y", "autoplay", "controller", "cards-effect", "coverflow-effect", "creative-effect", "cube-effect", "fade-effect", "flip-effect", "free-mode", "grid", "hash-navigation", "history", "keyboard", "mousewheel", "navigation", "pagination", "parallax", "scrollbar", "thumbs", "virtual", "zoom"];
  function getParams(element, propName, propValue) {
    const params = {};
    const passedParams = {};
    extend3(params, defaults);
    const localParamsList = [...paramsList, "on"];
    const allowedParams = localParamsList.map((key) => key.replace(/_/, ""));
    localParamsList.forEach((paramName) => {
      paramName = paramName.replace("_", "");
      if (typeof element[paramName] !== "undefined") {
        passedParams[paramName] = element[paramName];
      }
    });
    const attrsList = [...element.attributes];
    if (typeof propName === "string" && typeof propValue !== "undefined") {
      attrsList.push({
        name: propName,
        value: isObject3(propValue) ? __spreadValues({}, propValue) : propValue
      });
    }
    attrsList.forEach((attr) => {
      const moduleParam = modulesParamsList.find((mParam) => attr.name.startsWith("".concat(mParam, "-")));
      if (moduleParam) {
        const parentObjName = attrToProp(moduleParam);
        const subObjName = attrToProp(attr.name.split("".concat(moduleParam, "-"))[1]);
        if (typeof passedParams[parentObjName] === "undefined") passedParams[parentObjName] = {};
        if (passedParams[parentObjName] === true) {
          passedParams[parentObjName] = {
            enabled: true
          };
        }
        passedParams[parentObjName][subObjName] = formatValue(attr.value);
      } else {
        const name = attrToProp(attr.name);
        if (!allowedParams.includes(name)) return;
        const value = formatValue(attr.value);
        if (passedParams[name] && modulesParamsList.includes(attr.name) && !isObject3(value)) {
          if (passedParams[name].constructor !== Object) {
            passedParams[name] = {};
          }
          passedParams[name].enabled = !!value;
        } else {
          passedParams[name] = value;
        }
      }
    });
    extend3(params, passedParams);
    if (params.navigation) {
      params.navigation = __spreadValues({
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
      }, params.navigation !== true ? params.navigation : {});
    } else if (params.navigation === false) {
      delete params.navigation;
    }
    if (params.scrollbar) {
      params.scrollbar = __spreadValues({
        el: ".swiper-scrollbar"
      }, params.scrollbar !== true ? params.scrollbar : {});
    } else if (params.scrollbar === false) {
      delete params.scrollbar;
    }
    if (params.pagination) {
      params.pagination = __spreadValues({
        el: ".swiper-pagination"
      }, params.pagination !== true ? params.pagination : {});
    } else if (params.pagination === false) {
      delete params.pagination;
    }
    return {
      params,
      passedParams
    };
  }

  // node_modules/swiper/swiper-element-bundle.mjs
  var SwiperCSS = ":host{--swiper-theme-color:#007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{width:100%;height:100%;margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);box-sizing:content-box}.swiper-android ::slotted(swiper-slide),.swiper-ios ::slotted(swiper-slide),.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}::slotted(swiper-slide){flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}::slotted(.swiper-slide-invisible-blank){visibility:hidden}.swiper-autoheight,.swiper-autoheight ::slotted(swiper-slide){height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden ::slotted(swiper-slide){transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d ::slotted(swiper-slide){transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode ::slotted(swiper-slide){scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode ::slotted(swiper-slide){scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered ::slotted(swiper-slide){scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal ::slotted(swiper-slide):first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical ::slotted(swiper-slide):first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-virtual ::slotted(swiper-slide){-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:host{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:var(--swiper-navigation-top-offset,50%);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next svg,.swiper-button-prev svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-next svg,.swiper-rtl .swiper-button-prev svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset,10px);left:auto}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:var(--swiper-pagination-bottom,8px);top:var(--swiper-pagination-top,auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius,50%);background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:var(--swiper-pagination-right,8px);left:var(--swiper-pagination-left,auto);top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:var(--swiper-pagination-progressbar-size,4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset,1%);bottom:var(--swiper-scrollbar-bottom,4px);top:var(--swiper-scrollbar-top,auto);z-index:50;height:var(--swiper-scrollbar-size,4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;left:var(--swiper-scrollbar-left,auto);right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);z-index:50;width:var(--swiper-scrollbar-size,4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}::slotted(.swiper-slide-zoomed){cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode ::slotted(swiper-slide){transition-timing-function:ease-out}.swiper-fade ::slotted(swiper-slide){pointer-events:none;transition-property:opacity}.swiper-fade ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-fade ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-fade ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper.swiper-cube{overflow:visible}.swiper-cube ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-cube.swiper-rtl ::slotted(swiper-slide){transform-origin:100% 0}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-next),.swiper-cube ::slotted(.swiper-slide-prev){pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-cube ::slotted(.swiper-slide-next)+::slotted(swiper-slide){pointer-events:auto;visibility:visible}.swiper.swiper-flip{overflow:visible}.swiper-flip ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-flip ::slotted(.swiper-slide-active),.swiper-flip ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-creative ::slotted(swiper-slide){-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper.swiper-cards{overflow:visible}.swiper-cards ::slotted(swiper-slide){transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}";
  var SwiperSlideCSS = "::slotted(.swiper-slide-shadow),::slotted(.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-top){position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}::slotted(.swiper-slide-shadow){background:rgba(0,0,0,.15)}::slotted(.swiper-slide-shadow-left){background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-right){background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-top){background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-bottom){background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear;width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-zoom-container){width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}::slotted(.swiper-zoom-container)>canvas,::slotted(.swiper-zoom-container)>img,::slotted(.swiper-zoom-container)>svg{max-width:100%;max-height:100%;object-fit:contain}";
  var DummyHTMLElement = class {
  };
  var ClassToExtend = typeof window === "undefined" || typeof HTMLElement === "undefined" ? DummyHTMLElement : HTMLElement;
  var arrowSvg = '<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>\n    ';
  var addStyle = (shadowRoot, styles) => {
    if (typeof CSSStyleSheet !== "undefined" && shadowRoot.adoptedStyleSheets) {
      const styleSheet = new CSSStyleSheet();
      styleSheet.replaceSync(styles);
      shadowRoot.adoptedStyleSheets = [styleSheet];
    } else {
      const style = document.createElement("style");
      style.rel = "stylesheet";
      style.textContent = styles;
      shadowRoot.appendChild(style);
    }
  };
  var SwiperContainer = class extends ClassToExtend {
    constructor() {
      super();
      this.attachShadow({
        mode: "open"
      });
    }
    static get nextButtonSvg() {
      return arrowSvg;
    }
    static get prevButtonSvg() {
      return arrowSvg.replace("/></svg>", ' transform-origin="center" transform="rotate(180)"/></svg>');
    }
    cssStyles() {
      return [
        SwiperCSS,
        // eslint-disable-line
        ...this.injectStyles && Array.isArray(this.injectStyles) ? this.injectStyles : []
      ].join("\n");
    }
    cssLinks() {
      return this.injectStylesUrls || [];
    }
    calcSlideSlots() {
      const currentSideSlots = this.slideSlots || 0;
      const slideSlotChildren = [...this.querySelectorAll("[slot^=slide-]")].map((child) => {
        return parseInt(child.getAttribute("slot").split("slide-")[1], 10);
      });
      this.slideSlots = slideSlotChildren.length ? Math.max(...slideSlotChildren) + 1 : 0;
      if (!this.rendered) return;
      if (this.slideSlots > currentSideSlots) {
        for (let i = currentSideSlots; i < this.slideSlots; i += 1) {
          const slideEl = document.createElement("swiper-slide");
          slideEl.setAttribute("part", "slide slide-".concat(i + 1));
          const slotEl = document.createElement("slot");
          slotEl.setAttribute("name", "slide-".concat(i + 1));
          slideEl.appendChild(slotEl);
          this.shadowRoot.querySelector(".swiper-wrapper").appendChild(slideEl);
        }
      } else if (this.slideSlots < currentSideSlots) {
        const slides = this.swiper.slides;
        for (let i = slides.length - 1; i >= 0; i -= 1) {
          if (i > this.slideSlots) {
            slides[i].remove();
          }
        }
      }
    }
    render() {
      if (this.rendered) return;
      this.calcSlideSlots();
      let localStyles = this.cssStyles();
      if (this.slideSlots > 0) {
        localStyles = localStyles.replace(/::slotted\(([a-z-0-9.]*)\)/g, "$1");
      }
      if (localStyles.length) {
        addStyle(this.shadowRoot, localStyles);
      }
      this.cssLinks().forEach((url) => {
        const linkExists = this.shadowRoot.querySelector('link[href="'.concat(url, '"]'));
        if (linkExists) return;
        const linkEl = document.createElement("link");
        linkEl.rel = "stylesheet";
        linkEl.href = url;
        this.shadowRoot.appendChild(linkEl);
      });
      const el = document.createElement("div");
      el.classList.add("swiper");
      el.part = "container";
      el.innerHTML = '\n      <slot name="container-start"></slot>\n      <div class="swiper-wrapper" part="wrapper">\n        <slot></slot>\n        '.concat(Array.from({
        length: this.slideSlots
      }).map((_, index) => '\n        <swiper-slide part="slide slide-'.concat(index, '">\n          <slot name="slide-').concat(index, '"></slot>\n        </swiper-slide>\n        ')).join(""), '\n      </div>\n      <slot name="container-end"></slot>\n      ').concat(needsNavigation(this.passedParams) ? '\n        <div part="button-prev" class="swiper-button-prev">'.concat(this.constructor.prevButtonSvg, '</div>\n        <div part="button-next" class="swiper-button-next">').concat(this.constructor.nextButtonSvg, "</div>\n      ") : "", "\n      ").concat(needsPagination(this.passedParams) ? '\n        <div part="pagination" class="swiper-pagination"></div>\n      ' : "", "\n      ").concat(needsScrollbar(this.passedParams) ? '\n        <div part="scrollbar" class="swiper-scrollbar"></div>\n      ' : "", "\n    ");
      this.shadowRoot.appendChild(el);
      this.rendered = true;
    }
    initialize() {
      var _this = this;
      if (this.initialized) return;
      this.initialized = true;
      const {
        params: swiperParams,
        passedParams
      } = getParams(this);
      this.swiperParams = swiperParams;
      this.passedParams = passedParams;
      delete this.swiperParams.init;
      this.render();
      this.swiper = new Swiper(this.shadowRoot.querySelector(".swiper"), __spreadProps(__spreadValues(__spreadValues({}, swiperParams.virtual ? {} : {
        observer: true
      }), swiperParams), {
        touchEventsTarget: "container",
        onAny: function(name) {
          if (name === "observerUpdate") {
            _this.calcSlideSlots();
          }
          const eventName = swiperParams.eventsPrefix ? "".concat(swiperParams.eventsPrefix).concat(name.toLowerCase()) : name.toLowerCase();
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          const event2 = new CustomEvent(eventName, {
            detail: args,
            bubbles: name !== "hashChange",
            cancelable: true
          });
          _this.dispatchEvent(event2);
        }
      }));
    }
    connectedCallback() {
      if (this.initialized && this.nested && this.closest("swiper-slide") && this.closest("swiper-slide").swiperLoopMoveDOM) {
        return;
      }
      if (this.init === false || this.getAttribute("init") === "false") {
        return;
      }
      this.initialize();
    }
    disconnectedCallback() {
      if (this.nested && this.closest("swiper-slide") && this.closest("swiper-slide").swiperLoopMoveDOM) {
        return;
      }
      if (this.swiper && this.swiper.destroy) {
        this.swiper.destroy();
      }
      this.initialized = false;
    }
    updateSwiperOnPropChange(propName, propValue) {
      const {
        params: swiperParams,
        passedParams
      } = getParams(this, propName, propValue);
      this.passedParams = passedParams;
      this.swiperParams = swiperParams;
      if (this.swiper && this.swiper.params[propName] === propValue) {
        return;
      }
      updateSwiper(__spreadValues(__spreadValues(__spreadValues({
        swiper: this.swiper,
        passedParams: this.passedParams,
        changedParams: [attrToProp(propName)]
      }, propName === "navigation" && passedParams[propName] ? {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
      } : {}), propName === "pagination" && passedParams[propName] ? {
        paginationEl: ".swiper-pagination"
      } : {}), propName === "scrollbar" && passedParams[propName] ? {
        scrollbarEl: ".swiper-scrollbar"
      } : {}));
    }
    attributeChangedCallback(attr, prevValue, newValue) {
      if (!this.initialized) return;
      if (prevValue === "true" && newValue === null) {
        newValue = false;
      }
      this.updateSwiperOnPropChange(attr, newValue);
    }
    static get observedAttributes() {
      const attrs = paramsList.filter((param) => param.includes("_")).map((param) => param.replace(/[A-Z]/g, (v) => "-".concat(v)).replace("_", "").toLowerCase());
      return attrs;
    }
  };
  paramsList.forEach((paramName) => {
    if (paramName === "init") return;
    paramName = paramName.replace("_", "");
    Object.defineProperty(SwiperContainer.prototype, paramName, {
      configurable: true,
      get() {
        return (this.passedParams || {})[paramName];
      },
      set(value) {
        if (!this.passedParams) this.passedParams = {};
        this.passedParams[paramName] = value;
        if (!this.initialized) return;
        this.updateSwiperOnPropChange(paramName, value);
      }
    });
  });
  var SwiperSlide = class extends ClassToExtend {
    constructor() {
      super();
      this.attachShadow({
        mode: "open"
      });
    }
    render() {
      const lazy = this.lazy || this.getAttribute("lazy") === "" || this.getAttribute("lazy") === "true";
      addStyle(this.shadowRoot, SwiperSlideCSS);
      this.shadowRoot.appendChild(document.createElement("slot"));
      if (lazy) {
        const lazyDiv = document.createElement("div");
        lazyDiv.classList.add("swiper-lazy-preloader");
        lazyDiv.part.add("preloader");
        this.shadowRoot.appendChild(lazyDiv);
      }
    }
    initialize() {
      this.render();
    }
    connectedCallback() {
      this.initialize();
    }
  };
  var register = () => {
    if (typeof window === "undefined") return;
    if (!window.customElements.get("swiper-container")) window.customElements.define("swiper-container", SwiperContainer);
    if (!window.customElements.get("swiper-slide")) window.customElements.define("swiper-slide", SwiperSlide);
  };
  if (typeof window !== "undefined") {
    window.SwiperElementRegisterParams = (params) => {
      paramsList.push(...params);
    };
  }

  // assets/js/functions/Swiper.js
  function ThemeSwiper() {
    register();
  }
  var Swiper_default = ThemeSwiper;

  // assets/js/functions/like.js
  function postLike() {
    if (!localStorage.getItem("guest_user_id")) {
      const guestUserId2 = Math.floor(1e5 + Math.random() * 9e5).toString();
      localStorage.setItem("guest_user_id", guestUserId2);
    }
    const guestUserId = localStorage.getItem("guest_user_id");
    const postId = jQuery(".like-container").data("post-id");
    const likeCount = jQuery(".like-count");
    const iconEmpty = jQuery(".like-icon-empty");
    const iconRed = jQuery(".like-icon-red");
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "{}");
    if (likedPosts[postId] === true) {
      iconEmpty.addClass("hidden");
      iconRed.removeClass("hidden");
    } else {
      iconRed.addClass("hidden");
      iconEmpty.removeClass("hidden");
    }
    jQuery(".like-container .like-icon").on("click", function() {
      jQuery.ajax({
        url: themeData.restUrl + "cyn/v1/postLike",
        type: "POST",
        data: {
          post_id: postId,
          guest_user_id: guestUserId
        },
        success: function(response) {
          if (response.success) {
            if (response.data.liked) {
              iconEmpty.addClass("hidden");
              iconRed.removeClass("hidden");
              likedPosts[postId] = true;
            } else {
              iconRed.addClass("hidden");
              iconEmpty.removeClass("hidden");
              likedPosts[postId] = false;
            }
            localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
            likeCount.text(response.data.like_count);
          }
        }
      });
    });
  }

  // assets/js/functions/comment.js
  function comment() {
    const commentForm = document.querySelector("#commentform");
    const commentCountElement = document.querySelector(".comment-count");
    if (commentForm) {
      commentForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const formData = new FormData(commentForm);
        fetch(commentForm.action, {
          method: "POST",
          body: formData
        }).then((response) => response.text()).then(() => {
          location.reload();
        }).catch((error) => {
          console.error("Error:", error);
        });
      });
    }
  }

  // assets/js/functions/plyr.js
  var import_plyr = __toESM(require_plyr_min());
  function PlyrLibs() {
    const plyrElements = document.querySelectorAll(".plyr_element");
    plyrElements.forEach((el) => {
      const player = new import_plyr.default(el);
      console.log(el);
    });
  }

  // assets/js/functions/scrollTop-btn.js
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("scrollToTopButton");
    if (button) {
      button.addEventListener("click", scrollToTop);
    }
  });

  // assets/js/index.js
  Modals();
  Swiper_default();
  postLike();
  comment();
  PlyrLibs();
  scrollToTop();
})();
