"use strict";
(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var o;
  var r;
  var f;
  var e;
  var c;
  var s;
  var a;
  var h = {};
  var v = [];
  var p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var y = Array.isArray;
  function d(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function _(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function g(l3, u3, t3) {
    var i3, o3, r3, f3 = {};
    for (r3 in u3)
      "key" == r3 ? i3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps)
      for (r3 in l3.defaultProps)
        void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
    return b(l3, f3, i3, o3, null);
  }
  function b(n2, t3, i3, o3, r3) {
    var f3 = { type: n2, props: t3, key: i3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r3 ? ++u : r3, __i: -1, __u: 0 };
    return null == r3 && null != l.vnode && l.vnode(f3), f3;
  }
  function w(n2) {
    return n2.children;
  }
  function k(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function x(n2, l3) {
    if (null == l3)
      return n2.__ ? x(n2.__, n2.__i + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n2.type ? x(n2) : null;
  }
  function C(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return C(n2);
    }
  }
  function P(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !S.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(S);
  }
  function S() {
    var n2, u3, t3, o3, r3, e3, c3, s3;
    for (i.sort(f); n2 = i.shift(); )
      n2.__d && (u3 = i.length, o3 = void 0, e3 = (r3 = (t3 = n2).__v).__e, c3 = [], s3 = [], t3.__P && ((o3 = d({}, r3)).__v = r3.__v + 1, l.vnode && l.vnode(o3), O(t3.__P, o3, r3, t3.__n, void 0 !== t3.__P.ownerSVGElement, 32 & r3.__u ? [e3] : null, c3, null == e3 ? x(r3) : e3, !!(32 & r3.__u), s3), o3.__v = r3.__v, o3.__.__k[o3.__i] = o3, j(c3, o3, s3), o3.__e != e3 && C(o3)), i.length > u3 && i.sort(f));
    S.__r = 0;
  }
  function $(n2, l3, u3, t3, i3, o3, r3, f3, e3, c3, s3) {
    var a3, p2, y2, d3, _2, g2 = t3 && t3.__k || v, b2 = l3.length;
    for (u3.__d = e3, I(u3, l3, g2), e3 = u3.__d, a3 = 0; a3 < b2; a3++)
      null != (y2 = u3.__k[a3]) && "boolean" != typeof y2 && "function" != typeof y2 && (p2 = -1 === y2.__i ? h : g2[y2.__i] || h, y2.__i = a3, O(n2, y2, p2, i3, o3, r3, f3, e3, c3, s3), d3 = y2.__e, y2.ref && p2.ref != y2.ref && (p2.ref && N(p2.ref, null, y2), s3.push(y2.ref, y2.__c || d3, y2)), null == _2 && null != d3 && (_2 = d3), 65536 & y2.__u || p2.__k === y2.__k ? (e3 && !e3.isConnected && (e3 = x(p2)), e3 = H(y2, e3, n2)) : "function" == typeof y2.type && void 0 !== y2.__d ? e3 = y2.__d : d3 && (e3 = d3.nextSibling), y2.__d = void 0, y2.__u &= -196609);
    u3.__d = e3, u3.__e = _2;
  }
  function I(n2, l3, u3) {
    var t3, i3, o3, r3, f3, e3 = l3.length, c3 = u3.length, s3 = c3, a3 = 0;
    for (n2.__k = [], t3 = 0; t3 < e3; t3++)
      r3 = t3 + a3, null != (i3 = n2.__k[t3] = null == (i3 = l3[t3]) || "boolean" == typeof i3 || "function" == typeof i3 ? null : "string" == typeof i3 || "number" == typeof i3 || "bigint" == typeof i3 || i3.constructor == String ? b(null, i3, null, null, null) : y(i3) ? b(w, { children: i3 }, null, null, null) : void 0 === i3.constructor && i3.__b > 0 ? b(i3.type, i3.props, i3.key, i3.ref ? i3.ref : null, i3.__v) : i3) ? (i3.__ = n2, i3.__b = n2.__b + 1, f3 = A(i3, u3, r3, s3), i3.__i = f3, o3 = null, -1 !== f3 && (s3--, (o3 = u3[f3]) && (o3.__u |= 131072)), null == o3 || null === o3.__v ? (-1 == f3 && a3--, "function" != typeof i3.type && (i3.__u |= 65536)) : f3 !== r3 && (f3 === r3 + 1 ? a3++ : f3 > r3 ? s3 > e3 - r3 ? a3 += f3 - r3 : a3-- : f3 < r3 ? f3 == r3 - 1 && (a3 = f3 - r3) : a3 = 0, f3 !== t3 + a3 && (i3.__u |= 65536))) : (o3 = u3[r3]) && null == o3.key && o3.__e && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = x(o3)), q(o3, o3, false), u3[r3] = null, s3--);
    if (s3)
      for (t3 = 0; t3 < c3; t3++)
        null != (o3 = u3[t3]) && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = x(o3)), q(o3, o3));
  }
  function H(n2, l3, u3) {
    var t3, i3;
    if ("function" == typeof n2.type) {
      for (t3 = n2.__k, i3 = 0; t3 && i3 < t3.length; i3++)
        t3[i3] && (t3[i3].__ = n2, l3 = H(t3[i3], l3, u3));
      return l3;
    }
    n2.__e != l3 && (u3.insertBefore(n2.__e, l3 || null), l3 = n2.__e);
    do {
      l3 = l3 && l3.nextSibling;
    } while (null != l3 && 8 === l3.nodeType);
    return l3;
  }
  function A(n2, l3, u3, t3) {
    var i3 = n2.key, o3 = n2.type, r3 = u3 - 1, f3 = u3 + 1, e3 = l3[u3];
    if (null === e3 || e3 && i3 == e3.key && o3 === e3.type && 0 == (131072 & e3.__u))
      return u3;
    if (t3 > (null != e3 && 0 == (131072 & e3.__u) ? 1 : 0))
      for (; r3 >= 0 || f3 < l3.length; ) {
        if (r3 >= 0) {
          if ((e3 = l3[r3]) && 0 == (131072 & e3.__u) && i3 == e3.key && o3 === e3.type)
            return r3;
          r3--;
        }
        if (f3 < l3.length) {
          if ((e3 = l3[f3]) && 0 == (131072 & e3.__u) && i3 == e3.key && o3 === e3.type)
            return f3;
          f3++;
        }
      }
    return -1;
  }
  function F(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || p.test(l3) ? u3 : u3 + "px";
  }
  function L(n2, l3, u3, t3, i3) {
    var o3;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n2.style.cssText = u3;
        else {
          if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3)
            for (l3 in t3)
              u3 && l3 in u3 || F(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              t3 && u3[l3] === t3[l3] || F(n2.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        o3 = l3 !== (l3 = l3.replace(/(PointerCapture)$|Capture$/i, "$1")), l3 = l3.toLowerCase() in n2 || "onFocusOut" === l3 || "onFocusIn" === l3 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? t3 ? u3.u = t3.u : (u3.u = e, n2.addEventListener(l3, o3 ? s : c, o3)) : n2.removeEventListener(l3, o3 ? s : c, o3);
      else {
        if (i3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && l3 in n2)
          try {
            n2[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n3) {
          }
        "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
      }
  }
  function M(n2) {
    return function(u3) {
      if (this.l) {
        var t3 = this.l[u3.type + n2];
        if (null == u3.t)
          u3.t = e++;
        else if (u3.t < t3.u)
          return;
        return t3(l.event ? l.event(u3) : u3);
      }
    };
  }
  function O(n2, u3, t3, i3, o3, r3, f3, e3, c3, s3) {
    var a3, h3, v3, p2, _2, g2, b2, m2, x3, C3, P3, S2, I2, H2, T, A2 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    128 & t3.__u && (c3 = !!(32 & t3.__u), r3 = [e3 = u3.__e = t3.__e]), (a3 = l.__b) && a3(u3);
    n:
      if ("function" == typeof A2)
        try {
          if (m2 = u3.props, x3 = (a3 = A2.contextType) && i3[a3.__c], C3 = a3 ? x3 ? x3.props.value : a3.__ : i3, t3.__c ? b2 = (h3 = u3.__c = t3.__c).__ = h3.__E : ("prototype" in A2 && A2.prototype.render ? u3.__c = h3 = new A2(m2, C3) : (u3.__c = h3 = new k(m2, C3), h3.constructor = A2, h3.render = B), x3 && x3.sub(h3), h3.props = m2, h3.state || (h3.state = {}), h3.context = C3, h3.__n = i3, v3 = h3.__d = true, h3.__h = [], h3._sb = []), null == h3.__s && (h3.__s = h3.state), null != A2.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = d({}, h3.__s)), d(h3.__s, A2.getDerivedStateFromProps(m2, h3.__s))), p2 = h3.props, _2 = h3.state, h3.__v = u3, v3)
            null == A2.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
          else {
            if (null == A2.getDerivedStateFromProps && m2 !== p2 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(m2, C3), !h3.__e && (null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(m2, h3.__s, C3) || u3.__v === t3.__v)) {
              for (u3.__v !== t3.__v && (h3.props = m2, h3.state = h3.__s, h3.__d = false), u3.__e = t3.__e, u3.__k = t3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), P3 = 0; P3 < h3._sb.length; P3++)
                h3.__h.push(h3._sb[P3]);
              h3._sb = [], h3.__h.length && f3.push(h3);
              break n;
            }
            null != h3.componentWillUpdate && h3.componentWillUpdate(m2, h3.__s, C3), null != h3.componentDidUpdate && h3.__h.push(function() {
              h3.componentDidUpdate(p2, _2, g2);
            });
          }
          if (h3.context = C3, h3.props = m2, h3.__P = n2, h3.__e = false, S2 = l.__r, I2 = 0, "prototype" in A2 && A2.prototype.render) {
            for (h3.state = h3.__s, h3.__d = false, S2 && S2(u3), a3 = h3.render(h3.props, h3.state, h3.context), H2 = 0; H2 < h3._sb.length; H2++)
              h3.__h.push(h3._sb[H2]);
            h3._sb = [];
          } else
            do {
              h3.__d = false, S2 && S2(u3), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
            } while (h3.__d && ++I2 < 25);
          h3.state = h3.__s, null != h3.getChildContext && (i3 = d(d({}, i3), h3.getChildContext())), v3 || null == h3.getSnapshotBeforeUpdate || (g2 = h3.getSnapshotBeforeUpdate(p2, _2)), $(n2, y(T = null != a3 && a3.type === w && null == a3.key ? a3.props.children : a3) ? T : [T], u3, t3, i3, o3, r3, f3, e3, c3, s3), h3.base = u3.__e, u3.__u &= -161, h3.__h.length && f3.push(h3), b2 && (h3.__E = h3.__ = null);
        } catch (n3) {
          u3.__v = null, c3 || null != r3 ? (u3.__e = e3, u3.__u |= c3 ? 160 : 32, r3[r3.indexOf(e3)] = null) : (u3.__e = t3.__e, u3.__k = t3.__k), l.__e(n3, u3, t3);
        }
      else
        null == r3 && u3.__v === t3.__v ? (u3.__k = t3.__k, u3.__e = t3.__e) : u3.__e = z(t3.__e, u3, t3, i3, o3, r3, f3, c3, s3);
    (a3 = l.diffed) && a3(u3);
  }
  function j(n2, u3, t3) {
    u3.__d = void 0;
    for (var i3 = 0; i3 < t3.length; i3++)
      N(t3[i3], t3[++i3], t3[++i3]);
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function z(l3, u3, t3, i3, o3, r3, f3, e3, c3) {
    var s3, a3, v3, p2, d3, g2, b2, m2 = t3.props, w3 = u3.props, k3 = u3.type;
    if ("svg" === k3 && (o3 = true), null != r3) {
      for (s3 = 0; s3 < r3.length; s3++)
        if ((d3 = r3[s3]) && "setAttribute" in d3 == !!k3 && (k3 ? d3.localName === k3 : 3 === d3.nodeType)) {
          l3 = d3, r3[s3] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === k3)
        return document.createTextNode(w3);
      l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", k3) : document.createElement(k3, w3.is && w3), r3 = null, e3 = false;
    }
    if (null === k3)
      m2 === w3 || e3 && l3.data === w3 || (l3.data = w3);
    else {
      if (r3 = r3 && n.call(l3.childNodes), m2 = t3.props || h, !e3 && null != r3)
        for (m2 = {}, s3 = 0; s3 < l3.attributes.length; s3++)
          m2[(d3 = l3.attributes[s3]).name] = d3.value;
      for (s3 in m2)
        d3 = m2[s3], "children" == s3 || ("dangerouslySetInnerHTML" == s3 ? v3 = d3 : "key" === s3 || s3 in w3 || L(l3, s3, null, d3, o3));
      for (s3 in w3)
        d3 = w3[s3], "children" == s3 ? p2 = d3 : "dangerouslySetInnerHTML" == s3 ? a3 = d3 : "value" == s3 ? g2 = d3 : "checked" == s3 ? b2 = d3 : "key" === s3 || e3 && "function" != typeof d3 || m2[s3] === d3 || L(l3, s3, d3, m2[s3], o3);
      if (a3)
        e3 || v3 && (a3.__html === v3.__html || a3.__html === l3.innerHTML) || (l3.innerHTML = a3.__html), u3.__k = [];
      else if (v3 && (l3.innerHTML = ""), $(l3, y(p2) ? p2 : [p2], u3, t3, i3, o3 && "foreignObject" !== k3, r3, f3, r3 ? r3[0] : t3.__k && x(t3, 0), e3, c3), null != r3)
        for (s3 = r3.length; s3--; )
          null != r3[s3] && _(r3[s3]);
      e3 || (s3 = "value", void 0 !== g2 && (g2 !== l3[s3] || "progress" === k3 && !g2 || "option" === k3 && g2 !== m2[s3]) && L(l3, s3, g2, m2[s3], false), s3 = "checked", void 0 !== b2 && b2 !== l3[s3] && L(l3, s3, b2, m2[s3], false));
    }
    return l3;
  }
  function N(n2, u3, t3) {
    try {
      "function" == typeof n2 ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function q(n2, u3, t3) {
    var i3, o3;
    if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current !== n2.__e || N(i3, null, u3)), null != (i3 = n2.__c)) {
      if (i3.componentWillUnmount)
        try {
          i3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      i3.base = i3.__P = null;
    }
    if (i3 = n2.__k)
      for (o3 = 0; o3 < i3.length; o3++)
        i3[o3] && q(i3[o3], u3, t3 || "function" != typeof n2.type);
    t3 || null == n2.__e || _(n2.__e), n2.__c = n2.__ = n2.__e = n2.__d = void 0;
  }
  function B(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function D(u3, t3, i3) {
    var o3, r3, f3, e3;
    l.__ && l.__(u3, t3), r3 = (o3 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, f3 = [], e3 = [], O(t3, u3 = (!o3 && i3 || t3).__k = g(w, null, [u3]), r3 || h, h, void 0 !== t3.ownerSVGElement, !o3 && i3 ? [i3] : r3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f3, !o3 && i3 ? i3 : r3 ? r3.__e : t3.firstChild, o3, e3), j(f3, u3, e3);
  }
  function J(n2, l3) {
    var u3 = { __c: l3 = "__cC" + a++, __: n2, Consumer: function(n3, l4) {
      return n3.children(l4);
    }, Provider: function(n3) {
      var u4, t3;
      return this.getChildContext || (u4 = [], (t3 = {})[l3] = this, this.getChildContext = function() {
        return t3;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && u4.some(function(n5) {
          n5.__e = true, P(n5);
        });
      }, this.sub = function(n4) {
        u4.push(n4);
        var l4 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u4.splice(u4.indexOf(n4), 1), l4 && l4.call(n4);
        };
      }), n3.children;
    } };
    return u3.Provider.__ = u3.Consumer.contextType = u3;
  }
  n = v.slice, l = { __e: function(n2, l3, u3, t3) {
    for (var i3, o3, r3; l3 = l3.__; )
      if ((i3 = l3.__c) && !i3.__)
        try {
          if ((o3 = i3.constructor) && null != o3.getDerivedStateFromError && (i3.setState(o3.getDerivedStateFromError(n2)), r3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), r3 = i3.__d), r3)
            return i3.__E = i3;
        } catch (l4) {
          n2 = l4;
        }
    throw n2;
  } }, u = 0, t = function(n2) {
    return null != n2 && null == n2.constructor;
  }, k.prototype.setState = function(n2, l3) {
    var u3;
    u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u3), this.props)), n2 && d(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), P(this));
  }, k.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), P(this));
  }, k.prototype.render = w, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
    return n2.__v.__b - l3.__v.__b;
  }, S.__r = 0, e = 0, c = M(false), s = M(true), a = 0;

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u2;
  var i2;
  var o2 = 0;
  var f2 = [];
  var c2 = [];
  var e2 = l;
  var a2 = e2.__b;
  var v2 = e2.__r;
  var l2 = e2.diffed;
  var m = e2.__c;
  var s2 = e2.unmount;
  var d2 = e2.__;
  function h2(n2, t3) {
    e2.__h && e2.__h(r2, n2, o2 || t3), o2 = 0;
    var u3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n2 >= u3.__.length && u3.__.push({ __V: c2 }), u3.__[n2];
  }
  function F2(n2) {
    return o2 = 5, q2(function() {
      return { current: n2 };
    }, []);
  }
  function q2(n2, r3) {
    var u3 = h2(t2++, 7);
    return C2(u3.__H, r3) ? (u3.__V = n2(), u3.i = r3, u3.__h = n2, u3.__V) : u3.__;
  }
  function x2(n2, t3) {
    return o2 = 8, q2(function() {
      return n2;
    }, t3);
  }
  function P2(n2) {
    var u3 = r2.context[n2.__c], i3 = h2(t2++, 9);
    return i3.c = n2, u3 ? (null == i3.__ && (i3.__ = true, u3.sub(r2)), u3.props.value) : n2.__;
  }
  function j2() {
    for (var n2; n2 = f2.shift(); )
      if (n2.__P && n2.__H)
        try {
          n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
        } catch (t3) {
          n2.__H.__h = [], e2.__e(t3, n2.__v);
        }
  }
  e2.__b = function(n2) {
    r2 = null, a2 && a2(n2);
  }, e2.__ = function(n2, t3) {
    n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), d2 && d2(n2, t3);
  }, e2.__r = function(n2) {
    v2 && v2(n2), t2 = 0;
    var i3 = (r2 = n2.__c).__H;
    i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
    })) : (i3.__h.forEach(z2), i3.__h.forEach(B2), i3.__h = [], t2 = 0)), u2 = r2;
  }, e2.diffed = function(n2) {
    l2 && l2(n2);
    var t3 = n2.__c;
    t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i2 === e2.requestAnimationFrame || ((i2 = e2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
      n3.i && (n3.__H = n3.i), n3.__V !== c2 && (n3.__ = n3.__V), n3.i = void 0, n3.__V = c2;
    })), u2 = r2 = null;
  }, e2.__c = function(n2, t3) {
    t3.some(function(n3) {
      try {
        n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
          return !n4.__ || B2(n4);
        });
      } catch (r3) {
        t3.some(function(n4) {
          n4.__h && (n4.__h = []);
        }), t3 = [], e2.__e(r3, n3.__v);
      }
    }), m && m(n2, t3);
  }, e2.unmount = function(n2) {
    s2 && s2(n2);
    var t3, r3 = n2.__c;
    r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
      try {
        z2(n3);
      } catch (n4) {
        t3 = n4;
      }
    }), r3.__H = void 0, t3 && e2.__e(t3, r3.__v));
  };
  var k2 = "function" == typeof requestAnimationFrame;
  function w2(n2) {
    var t3, r3 = function() {
      clearTimeout(u3), k2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u3 = setTimeout(r3, 100);
    k2 && (t3 = requestAnimationFrame(r3));
  }
  function z2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function B2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function C2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }

  // src/context.tsx
  var AppPropsContext = J(null);
  var RadioContext = J(null);

  // src/controls.tsx
  function RadioButton(props) {
    const context = P2(RadioContext);
    const ref = F2(null);
    const onChange = x2(() => {
      if (ref.current?.value) {
        props.onChanged(props.value);
      }
    }, [props]);
    return /* @__PURE__ */ g("label", { class: "option", for: props.value }, /* @__PURE__ */ g("input", { type: "radio", id: props.value, name: context.propKey, checked: props.selected, onChange, ref }), /* @__PURE__ */ g("div", { class: "option-description" }, /* @__PURE__ */ g("div", { class: "option-title" }, props.name), /* @__PURE__ */ g("div", { class: "option-blurb" }, props.description)));
  }
  function CheckBox(props) {
    const ref = F2(null);
    const changed = x2(() => {
      props.onChanged(ref.current.checked);
    }, [props.onChanged]);
    return /* @__PURE__ */ g("label", { class: "option", for: props.id }, /* @__PURE__ */ g("input", { type: "checkbox", id: props.id, checked: props.isChecked, onChange: changed, ref }), /* @__PURE__ */ g("div", { class: "option-description" }, /* @__PURE__ */ g("div", { class: "option-title" }, props.name), /* @__PURE__ */ g("div", { class: "option-blurb" }, props.description)));
  }
  function TextBox(props) {
    const appProps = P2(AppPropsContext);
    const ref = F2(null);
    const updateValue = x2(() => {
      update({ ...appProps, [props.propKey]: ref.current.value });
    }, [ref, appProps, props]);
    return /* @__PURE__ */ g("label", { class: "option" }, /* @__PURE__ */ g("div", { class: "option-description" }, /* @__PURE__ */ g("div", { class: "option-title" }, props.name), /* @__PURE__ */ g("div", { class: "option-blurb" }, props.description), /* @__PURE__ */ g("input", { type: "textbox", value: appProps[props.propKey], onChange: updateValue, ref })));
  }

  // src/options-helpers.tsx
  function makeRadioGroup(targetProp, ...values) {
    return /* @__PURE__ */ g(RadioContext.Provider, { value: { propKey: targetProp } }, /* @__PURE__ */ g(AppPropsContext.Consumer, null, (appProps) => {
      return values.map(([value, name, description]) => {
        const onChanged = x2((value2) => {
          update({ ...appProps, [targetProp]: value2 });
        }, [appProps]);
        return /* @__PURE__ */ g(
          RadioButton,
          {
            value,
            name,
            description,
            selected: appProps[targetProp] === value,
            onChanged
          }
        );
      });
    }));
  }
  function makeCheckboxList(...values) {
    return /* @__PURE__ */ g(AppPropsContext.Consumer, null, (appProps) => {
      return values.map(([keyName, name, description]) => {
        const onChanged = x2((checked) => {
          update({ ...appProps, [keyName]: checked });
        }, [appProps]);
        return /* @__PURE__ */ g(
          CheckBox,
          {
            id: keyName,
            name,
            description,
            isChecked: appProps[keyName],
            onChanged
          }
        );
      });
    });
  }

  // src/options.tsx
  var Environment = makeRadioGroup(
    "environment",
    ["web", "Webpages", "Client-side code running in a browser"],
    ["nodejs", "NodeJS", "Backend code running in Node.JS"],
    ["donebun", "bun, deno, ts-node, tsx, etc.", "Backend code running a TypeScript-aware runtimes"],
    ["agnostic", "Anywhere", "Platform-agnostic code that can run in any environment"]
  );
  var RuntimeVersion = makeRadioGroup(
    "runtimeVersion",
    ["runtime-next", "Latest", "Use any JS features, including those that may not be in all runtimes yet"],
    ["runtime-modern", "ES 2022", "ECMAScript 2022 is the most recent version supported by all major browsers and supported Node versions"],
    ["runtime-older", "ES 2016", "Older unsupported versions of Node may only support ECMAScript 2016"]
  );
  var ModuleSystem = makeRadioGroup(
    "module",
    ["esm", "ECMAScript Modules (ESM)", "Modern module system using 'import' syntax. Recommended if you are using a bundler"],
    ["commonjs", "CommonJS", "Classic NodeJS modules using 'require' and 'module.exports'. Supported by bundlers, but not required"]
  );
  var Bundler = makeRadioGroup(
    "bundler",
    ["use-bundler", "Yes", "You will need to separately configure your bundler"],
    ["no-bundler", "No", "Use tsc to produce JS files"]
  );
  var JSXGroup = makeRadioGroup(
    "jsx",
    ["newer", "Yes", ""],
    ["no-jsx", "No", ""]
  );
  var GoodIdeas = makeCheckboxList(
    ["verbatimModuleSyntax", /* @__PURE__ */ g("pre", null, "verbatimModuleSyntax"), "Always CommonJS and ESM import syntax when importing from modules of that type"],
    ["isolatedModules", /* @__PURE__ */ g("pre", null, "isolatedModules"), "Use bundler-friendly syntax for faster builds"],
    ["composite", /* @__PURE__ */ g("pre", null, "composite"), "Strictly define the set of input and output files for this config"]
  );
  var Strictness = makeCheckboxList(
    ["noUncheckedIndexedAccess", /* @__PURE__ */ g("pre", null, "noUncheckedIndexedAccess"), "Assume that all array and string indexes might be out-of-bounds"],
    ["exactOptionalPropertyTypes", /* @__PURE__ */ g("pre", null, "exactOptionalPropertyTypes"), "Disallow undefined to be set to an optional property unless it's explicitly allowed"]
  );
  var Style = makeCheckboxList(
    ["noImplicitReturns", /* @__PURE__ */ g("pre", null, "noImplicitReturns"), "Functions must explicitly return if a value is required"],
    ["noImplicitOverride", /* @__PURE__ */ g("pre", null, "noImplicitOverride"), "If a method is override, it must be marked as such"],
    ["noUnusedLocals", /* @__PURE__ */ g("pre", null, "noUnusedLocals"), "Local variables must be used if declared"],
    ["noUnusedParameters", /* @__PURE__ */ g("pre", null, "noUnusedParameters"), "Parameters must be used if declared"],
    ["noFallthroughCasesInSwitch", /* @__PURE__ */ g("pre", null, "noFallthroughCasesInSwitch"), "Make it an error for code to flow from one switch case to the next"],
    ["noPropertyAccessFromIndexSignature", /* @__PURE__ */ g("pre", null, "noPropertyAccessFromIndexSignature"), "Index signatures must be accessed through index notation instead of property access"]
  );

  // src/main.tsx
  var PageNames = [
    "Environment",
    "Runtime-Target",
    "Bundler",
    "File-Layout",
    "Module-System",
    "JSX",
    "Good-Ideas",
    "Strictness-Options",
    "Style-Options"
  ];
  var update = (() => {
    const renderTarget = document.getElementById("app") ?? (() => {
      throw new Error("Couldn't find div#app");
    })();
    let props = {
      pageName: PageNames[0],
      srcDir: "./src",
      outDir: "./dist",
      environment: "web",
      runtimeVersion: "runtime-modern",
      module: "esm",
      bundler: "no-bundler",
      jsx: "no-jsx",
      verbatimModuleSyntax: true,
      isolatedModules: true,
      composite: true,
      exactOptionalPropertyTypes: true,
      noUncheckedIndexedAccess: true,
      noImplicitReturns: false,
      noImplicitOverride: false,
      noUnusedLocals: false,
      noUnusedParameters: false,
      noFallthroughCasesInSwitch: false,
      noPropertyAccessFromIndexSignature: false
    };
    const saved = window.localStorage.getItem("saved-props");
    if (saved) {
      const urlParams = new URLSearchParams(window.location.search);
      const clear = urlParams.get("clear");
      if (clear) {
        window.location.search = "";
      } else {
        props = { ...props, ...JSON.parse(saved) };
      }
    }
    mut(props);
    return mut;
    function mut(newProps) {
      props = newProps;
      D(/* @__PURE__ */ g(App, { ...props }), renderTarget);
      window.localStorage.setItem("saved-props", JSON.stringify(props, void 0, 2));
    }
  })();
  function App(props) {
    return /* @__PURE__ */ g(AppPropsContext.Provider, { value: props }, getPage());
    function getPage() {
      switch (props.pageName) {
        case "Environment":
          return /* @__PURE__ */ g(Page_Environment, null);
        case "Runtime-Target":
          return /* @__PURE__ */ g(Page_RuntimeTarget, null);
        case "Bundler":
          return /* @__PURE__ */ g(Page_Bundler, null);
        case "File-Layout":
          return /* @__PURE__ */ g(Page_FileLayout, null);
        case "Module-System":
          return /* @__PURE__ */ g(Page_ModuleSystem, null);
        case "JSX":
          return /* @__PURE__ */ g(Page_JSX, null);
        case "Good-Ideas":
          return /* @__PURE__ */ g(Page_GoodIdeas, null);
        case "Strictness-Options":
          return /* @__PURE__ */ g(Page_Strictness, null);
        case "Style-Options":
          return /* @__PURE__ */ g(Page_Style, null);
      }
      return /* @__PURE__ */ g(Page_Environment, null);
    }
  }
  function Page_Environment() {
    return /* @__PURE__ */ g(w, null, /* @__PURE__ */ g("h2", { class: "header" }, "Environment"), /* @__PURE__ */ g("div", { class: "explanation" }, "Where will your code be running? Note that if you have different runtime environments and aren't writing platform-agnostic code, you'll need to use multiple tsconfig files."), /* @__PURE__ */ g("div", { class: "options" }, Environment), /* @__PURE__ */ g(NavBar, null));
  }
  function Page_RuntimeTarget() {
    return /* @__PURE__ */ g(w, null, /* @__PURE__ */ g("h2", { class: "header" }, "Runtime Version"), /* @__PURE__ */ g("div", { class: "explanation" }, "How old of a JavaScript version do you need to support?"), /* @__PURE__ */ g("div", { class: "options" }, RuntimeVersion), /* @__PURE__ */ g(NavBar, null));
  }
  function Page_ModuleSystem() {
    return /* @__PURE__ */ g(w, null, /* @__PURE__ */ g("h2", { class: "header" }, "Module System"), /* @__PURE__ */ g("div", { class: "explanation" }, "Are you primarily writing ECMAScript modules (ESM) or CommonJS modules?"), /* @__PURE__ */ g("div", { class: "options" }, ModuleSystem), /* @__PURE__ */ g(NavBar, null));
  }
  function Page_Bundler() {
    return /* @__PURE__ */ g(w, null, /* @__PURE__ */ g("h2", { class: "header" }, "Bundler"), /* @__PURE__ */ g("div", { class: "explanation" }, "Do you want to use a tool like esbuild, rollup, webpack, parcel, etc, to produce JS from your TypeScript files?"), /* @__PURE__ */ g("div", { class: "options" }, Bundler), /* @__PURE__ */ g(NavBar, null));
  }
  function Page_JSX() {
    return /* @__PURE__ */ g(w, null, /* @__PURE__ */ g("h2", { class: "header" }, "JSX"), /* @__PURE__ */ g("div", { class: "explanation" }, "Are you using JSX syntax?"), /* @__PURE__ */ g("div", { class: "options" }, JSXGroup), /* @__PURE__ */ g(NavBar, null));
  }
  function Page_FileLayout() {
    return /* @__PURE__ */ g(w, null, /* @__PURE__ */ g("h2", { class: "header" }, "File Layout"), /* @__PURE__ */ g("div", { class: "explanation" }, "How will you arrange your project on disk?"), /* @__PURE__ */ g("div", { class: "options" }, /* @__PURE__ */ g(TextBox, { propKey: "srcDir", name: "Source Directory", description: "Location of input files" }), /* @__PURE__ */ g(TextBox, { propKey: "outDir", name: "Output Directory", description: "Where .js, .d.ts, and other outputs should be built to" })), /* @__PURE__ */ g(NavBar, null));
  }
  function Page_GoodIdeas() {
    return /* @__PURE__ */ g(w, null, /* @__PURE__ */ g("h2", { class: "header" }, "Additional Configuration Checks"), /* @__PURE__ */ g("div", { class: "explanation" }, "We recommend these options for new codebases, though you might have reason to turn them off. They're easiest to comply with in a new project but can be a lot of work to enable later."), /* @__PURE__ */ g("div", { class: "options" }, GoodIdeas), /* @__PURE__ */ g(NavBar, null));
  }
  function Page_Strictness() {
    return /* @__PURE__ */ g(w, null, /* @__PURE__ */ g("h2", { class: "header" }, "Strictness Options"), /* @__PURE__ */ g("div", { class: "explanation" }, "You can enable some additional strictness options that are not on by default. These may or may not be a good fit for the way you write code."), /* @__PURE__ */ g("div", { class: "options" }, Strictness), /* @__PURE__ */ g(NavBar, null));
  }
  function Page_Style() {
    return /* @__PURE__ */ g(w, null, /* @__PURE__ */ g("h2", { class: "header" }, "Coding Style Options"), /* @__PURE__ */ g("div", { class: "explanation" }, "You can enable some additional style checks that are not on by default. These do not affect the correctness of a program, just the way you write code."), /* @__PURE__ */ g("div", { class: "options" }, Style), /* @__PURE__ */ g(NavBar, null));
  }
  function NavBar() {
    const props = P2(AppPropsContext);
    const goNext = x2(() => {
      update({ ...props, pageName: getNextPage(props) });
    }, [props]);
    const goBack = x2(() => {
      update({ ...props, pageName: getPreviousPage(props) });
    }, [props]);
    return /* @__PURE__ */ g("div", { class: "navigation-bar" }, /* @__PURE__ */ g("button", { class: "back", onClick: goBack }, "Back"), /* @__PURE__ */ g(ProgressBar, null), /* @__PURE__ */ g("button", { class: "next", onClick: goNext }, "Next"));
  }
  function ProgressBar() {
    const props = P2(AppPropsContext);
    const currentIndex = PageNames.indexOf(props.pageName);
    return /* @__PURE__ */ g("div", { class: "progress-bar" }, PageNames.map((pageName, index) => {
      if (index < currentIndex) {
        return /* @__PURE__ */ g("div", { title: pageName, class: "progress-done" }, "\u2611\uFE0F");
      } else if (index === currentIndex) {
        return /* @__PURE__ */ g("div", { title: pageName, class: "progress-current" }, "\u{1F535}");
      } else {
        return /* @__PURE__ */ g("div", { title: pageName, class: "progress-next" }, "\u{1F518}");
      }
    }));
  }
  function getNextPage(props) {
    return PageNames[PageNames.indexOf(props.pageName) + 1];
  }
  function getPreviousPage(props) {
    return PageNames[PageNames.indexOf(props.pageName) - 1];
  }
})();
