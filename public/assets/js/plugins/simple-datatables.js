(function (f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f();
    } else if (typeof define === "function" && define.amd) {
        define([], f);
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window;
        } else if (typeof global !== "undefined") {
            g = global;
        } else if (typeof self !== "undefined") {
            g = self;
        } else {
            g = this;
        }
        g.simpleDatatables = f();
    }
})(function () {
    var define, module, exports;
    return (function () {
        function r(e, n, t) {
            function o(i, f) {
                if (!n[i]) {
                    if (!e[i]) {
                        var c = "function" == typeof require && require;
                        if (!f && c) return c(i, !0);
                        if (u) return u(i, !0);
                        var a = new Error("Cannot find module '" + i + "'");
                        throw ((a.code = "MODULE_NOT_FOUND"), a);
                    }
                    var p = (n[i] = { exports: {} });
                    e[i][0].call(
                        p.exports,
                        function (r) {
                            var n = e[i][1][r];
                            return o(n || r);
                        },
                        p,
                        p.exports,
                        r,
                        e,
                        n,
                        t
                    );
                }
                return n[i].exports;
            }
            for (
                var u = "function" == typeof require && require, i = 0;
                i < t.length;
                i++
            )
                o(t[i]);
            return o;
        }
        return r;
    })()(
        {
            1: [
                function (require, module, exports) {
                    (function (global) {
                        (function () {
                            "use strict";
                            const t = (t) =>
                                    "[object Object]" ===
                                    Object.prototype.toString.call(t),
                                e = (e) => {
                                    let s = !1;
                                    try {
                                        s = JSON.parse(e);
                                    } catch (t) {
                                        return !1;
                                    }
                                    return (
                                        !(
                                            null === s ||
                                            (!Array.isArray(s) && !t(s))
                                        ) && s
                                    );
                                },
                                s = (t, e) => {
                                    const s = document.createElement(t);
                                    if (e && "object" == typeof e)
                                        for (const t in e)
                                            "html" === t
                                                ? (s.innerHTML = e[t])
                                                : s.setAttribute(t, e[t]);
                                    return s;
                                },
                                i = (t) =>
                                    ["#text", "#comment"].includes(t.nodeName)
                                        ? t.data
                                        : t.childNodes
                                        ? t.childNodes.map((t) => i(t)).join("")
                                        : "",
                                n = (t) => {
                                    if (null == t) return "";
                                    if (
                                        t.hasOwnProperty("text") ||
                                        t.hasOwnProperty("data")
                                    ) {
                                        const e = t;
                                        return e.text ?? n(e.data);
                                    }
                                    return t.hasOwnProperty("nodeName")
                                        ? i(t)
                                        : String(t);
                                },
                                a = function (t) {
                                    return t
                                        .replace(/&/g, "&amp;")
                                        .replace(/</g, "&lt;")
                                        .replace(/>/g, "&gt;")
                                        .replace(/"/g, "&quot;");
                                },
                                o = function (t, e) {
                                    let s = 0,
                                        i = 0;
                                    for (; s < t + 1; ) {
                                        e[i].hidden || (s += 1), (i += 1);
                                    }
                                    return i - 1;
                                },
                                r = function (t) {
                                    const e = {};
                                    if (t)
                                        for (const s of t) e[s.name] = s.value;
                                    return e;
                                },
                                l = (t) =>
                                    t
                                        ? t
                                              .trim()
                                              .split(" ")
                                              .map((t) => `.${t}`)
                                              .join("")
                                        : null,
                                d = (t, e) => {
                                    const s = e
                                        ?.split(" ")
                                        .some((e) => !t.classList.contains(e));
                                    return !s;
                                },
                                c = (t, e) =>
                                    t ? (e ? `${t} ${e}` : t) : e || "";
                            var h = (function () {
                                function t(t) {
                                    var e = this;
                                    void 0 === t && (t = {}),
                                        Object.entries(t).forEach(function (t) {
                                            var s = t[0],
                                                i = t[1];
                                            return (e[s] = i);
                                        });
                                }
                                return (
                                    (t.prototype.toString = function () {
                                        return JSON.stringify(this);
                                    }),
                                    (t.prototype.setValue = function (t, e) {
                                        return (this[t] = e), this;
                                    }),
                                    t
                                );
                            })();
                            function u(t) {
                                for (
                                    var e = arguments, s = [], i = 1;
                                    i < arguments.length;
                                    i++
                                )
                                    s[i - 1] = e[i];
                                return (
                                    null != t &&
                                    s.some(function (e) {
                                        var s, i;
                                        return (
                                            "function" ==
                                                typeof (null ===
                                                    (i =
                                                        null ===
                                                            (s =
                                                                null == t
                                                                    ? void 0
                                                                    : t.ownerDocument) ||
                                                        void 0 === s
                                                            ? void 0
                                                            : s.defaultView) ||
                                                void 0 === i
                                                    ? void 0
                                                    : i[e]) &&
                                            t instanceof
                                                t.ownerDocument.defaultView[e]
                                        );
                                    })
                                );
                            }
                            function p(t, e, s) {
                                var i;
                                return (
                                    "#text" === t.nodeName
                                        ? (i = s.document.createTextNode(
                                              t.data
                                          ))
                                        : "#comment" === t.nodeName
                                        ? (i = s.document.createComment(t.data))
                                        : (e
                                              ? (i = s.document.createElementNS(
                                                    "http://www.w3.org/2000/svg",
                                                    t.nodeName
                                                ))
                                              : "svg" ===
                                                t.nodeName.toLowerCase()
                                              ? ((i =
                                                    s.document.createElementNS(
                                                        "http://www.w3.org/2000/svg",
                                                        "svg"
                                                    )),
                                                (e = !0))
                                              : (i = s.document.createElement(
                                                    t.nodeName
                                                )),
                                          t.attributes &&
                                              Object.entries(
                                                  t.attributes
                                              ).forEach(function (t) {
                                                  var e = t[0],
                                                      s = t[1];
                                                  return i.setAttribute(e, s);
                                              }),
                                          t.childNodes &&
                                              t.childNodes.forEach(function (
                                                  t
                                              ) {
                                                  return i.appendChild(
                                                      p(t, e, s)
                                                  );
                                              }),
                                          s.valueDiffing &&
                                              (t.value &&
                                                  u(
                                                      i,
                                                      "HTMLButtonElement",
                                                      "HTMLDataElement",
                                                      "HTMLInputElement",
                                                      "HTMLLIElement",
                                                      "HTMLMeterElement",
                                                      "HTMLOptionElement",
                                                      "HTMLProgressElement",
                                                      "HTMLParamElement"
                                                  ) &&
                                                  (i.value = t.value),
                                              t.checked &&
                                                  u(i, "HTMLInputElement") &&
                                                  (i.checked = t.checked),
                                              t.selected &&
                                                  u(i, "HTMLOptionElement") &&
                                                  (i.selected = t.selected))),
                                    i
                                );
                            }
                            var f = function (t, e) {
                                for (e = e.slice(); e.length > 0; ) {
                                    var s = e.splice(0, 1)[0];
                                    t = t.childNodes[s];
                                }
                                return t;
                            };
                            function m(t, e, s) {
                                var i,
                                    n,
                                    a,
                                    o = e[s._const.action],
                                    r = e[s._const.route];
                                [
                                    s._const.addElement,
                                    s._const.addTextElement,
                                ].includes(o) || (i = f(t, r));
                                var l = { diff: e, node: i };
                                if (s.preDiffApply(l)) return !0;
                                switch (o) {
                                    case s._const.addAttribute:
                                        if (!i || !u(i, "Element")) return !1;
                                        i.setAttribute(
                                            e[s._const.name],
                                            e[s._const.value]
                                        );
                                        break;
                                    case s._const.modifyAttribute:
                                        if (!i || !u(i, "Element")) return !1;
                                        i.setAttribute(
                                            e[s._const.name],
                                            e[s._const.newValue]
                                        ),
                                            u(i, "HTMLInputElement") &&
                                                "value" === e[s._const.name] &&
                                                (i.value =
                                                    e[s._const.newValue]);
                                        break;
                                    case s._const.removeAttribute:
                                        if (!i || !u(i, "Element")) return !1;
                                        i.removeAttribute(e[s._const.name]);
                                        break;
                                    case s._const.modifyTextElement:
                                        if (!i || !u(i, "Text")) return !1;
                                        s.textDiff(
                                            i,
                                            i.data,
                                            e[s._const.oldValue],
                                            e[s._const.newValue]
                                        ),
                                            u(
                                                i.parentNode,
                                                "HTMLTextAreaElement"
                                            ) &&
                                                (i.parentNode.value =
                                                    e[s._const.newValue]);
                                        break;
                                    case s._const.modifyValue:
                                        if (!i || void 0 === i.value) return !1;
                                        i.value = e[s._const.newValue];
                                        break;
                                    case s._const.modifyComment:
                                        if (!i || !u(i, "Comment")) return !1;
                                        s.textDiff(
                                            i,
                                            i.data,
                                            e[s._const.oldValue],
                                            e[s._const.newValue]
                                        );
                                        break;
                                    case s._const.modifyChecked:
                                        if (!i || void 0 === i.checked)
                                            return !1;
                                        i.checked = e[s._const.newValue];
                                        break;
                                    case s._const.modifySelected:
                                        if (!i || void 0 === i.selected)
                                            return !1;
                                        i.selected = e[s._const.newValue];
                                        break;
                                    case s._const.replaceElement:
                                        var d =
                                            "svg" ===
                                                e[
                                                    s._const.newValue
                                                ].nodeName.toLowerCase() ||
                                            "http://www.w3.org/2000/svg" ===
                                                i.parentNode.namespaceURI;
                                        i.parentNode.replaceChild(
                                            p(e[s._const.newValue], d, s),
                                            i
                                        );
                                        break;
                                    case s._const.relocateGroup:
                                        Array.apply(
                                            void 0,
                                            new Array(e[s._const.groupLength])
                                        )
                                            .map(function () {
                                                return i.removeChild(
                                                    i.childNodes[
                                                        e[s._const.from]
                                                    ]
                                                );
                                            })
                                            .forEach(function (t, n) {
                                                0 === n &&
                                                    (a =
                                                        i.childNodes[
                                                            e[s._const.to]
                                                        ]),
                                                    i.insertBefore(
                                                        t,
                                                        a || null
                                                    );
                                            });
                                        break;
                                    case s._const.removeElement:
                                        i.parentNode.removeChild(i);
                                        break;
                                    case s._const.addElement:
                                        var c = (m = r.slice()).splice(
                                            m.length - 1,
                                            1
                                        )[0];
                                        if (!u((i = f(t, m)), "Element"))
                                            return !1;
                                        i.insertBefore(
                                            p(
                                                e[s._const.element],
                                                "http://www.w3.org/2000/svg" ===
                                                    i.namespaceURI,
                                                s
                                            ),
                                            i.childNodes[c] || null
                                        );
                                        break;
                                    case s._const.removeTextElement:
                                        if (!i || 3 !== i.nodeType) return !1;
                                        var h = i.parentNode;
                                        h.removeChild(i),
                                            u(h, "HTMLTextAreaElement") &&
                                                (h.value = "");
                                        break;
                                    case s._const.addTextElement:
                                        var m;
                                        c = (m = r.slice()).splice(
                                            m.length - 1,
                                            1
                                        )[0];
                                        if (
                                            ((n = s.document.createTextNode(
                                                e[s._const.value]
                                            )),
                                            !(i = f(t, m)).childNodes)
                                        )
                                            return !1;
                                        i.insertBefore(
                                            n,
                                            i.childNodes[c] || null
                                        ),
                                            u(
                                                i.parentNode,
                                                "HTMLTextAreaElement"
                                            ) &&
                                                (i.parentNode.value =
                                                    e[s._const.value]);
                                        break;
                                    default:
                                        console.log("unknown action");
                                }
                                return (
                                    s.postDiffApply({
                                        diff: l.diff,
                                        node: l.node,
                                        newNode: n,
                                    }),
                                    !0
                                );
                            }
                            function g(t, e, s) {
                                var i = t[e];
                                (t[e] = t[s]), (t[s] = i);
                            }
                            function b(t, e, s) {
                                (e = e.slice()).reverse(),
                                    e.forEach(function (e) {
                                        !(function (t, e, s) {
                                            switch (e[s._const.action]) {
                                                case s._const.addAttribute:
                                                    (e[s._const.action] =
                                                        s._const.removeAttribute),
                                                        m(t, e, s);
                                                    break;
                                                case s._const.modifyAttribute:
                                                    g(
                                                        e,
                                                        s._const.oldValue,
                                                        s._const.newValue
                                                    ),
                                                        m(t, e, s);
                                                    break;
                                                case s._const.removeAttribute:
                                                    (e[s._const.action] =
                                                        s._const.addAttribute),
                                                        m(t, e, s);
                                                    break;
                                                case s._const.modifyTextElement:
                                                case s._const.modifyValue:
                                                case s._const.modifyComment:
                                                case s._const.modifyChecked:
                                                case s._const.modifySelected:
                                                case s._const.replaceElement:
                                                    g(
                                                        e,
                                                        s._const.oldValue,
                                                        s._const.newValue
                                                    ),
                                                        m(t, e, s);
                                                    break;
                                                case s._const.relocateGroup:
                                                    g(
                                                        e,
                                                        s._const.from,
                                                        s._const.to
                                                    ),
                                                        m(t, e, s);
                                                    break;
                                                case s._const.removeElement:
                                                    (e[s._const.action] =
                                                        s._const.addElement),
                                                        m(t, e, s);
                                                    break;
                                                case s._const.addElement:
                                                    (e[s._const.action] =
                                                        s._const.removeElement),
                                                        m(t, e, s);
                                                    break;
                                                case s._const.removeTextElement:
                                                    (e[s._const.action] =
                                                        s._const.addTextElement),
                                                        m(t, e, s);
                                                    break;
                                                case s._const.addTextElement:
                                                    (e[s._const.action] =
                                                        s._const.removeTextElement),
                                                        m(t, e, s);
                                                    break;
                                                default:
                                                    console.log(
                                                        "unknown action"
                                                    );
                                            }
                                        })(t, e, s);
                                    });
                            }
                            var v = function () {
                                return (
                                    (v =
                                        Object.assign ||
                                        function (t) {
                                            for (
                                                var e,
                                                    s = arguments,
                                                    i = 1,
                                                    n = arguments.length;
                                                i < n;
                                                i++
                                            )
                                                for (var a in (e = s[i]))
                                                    Object.prototype.hasOwnProperty.call(
                                                        e,
                                                        a
                                                    ) && (t[a] = e[a]);
                                            return t;
                                        }),
                                    v.apply(this, arguments)
                                );
                            };
                            "function" == typeof SuppressedError &&
                                SuppressedError;
                            var w = function (t) {
                                    var e = [];
                                    return (
                                        e.push(t.nodeName),
                                        "#text" !== t.nodeName &&
                                            "#comment" !== t.nodeName &&
                                            t.attributes &&
                                            (t.attributes.class &&
                                                e.push(
                                                    ""
                                                        .concat(t.nodeName, ".")
                                                        .concat(
                                                            t.attributes.class.replace(
                                                                / /g,
                                                                "."
                                                            )
                                                        )
                                                ),
                                            t.attributes.id &&
                                                e.push(
                                                    ""
                                                        .concat(t.nodeName, "#")
                                                        .concat(t.attributes.id)
                                                )),
                                        e
                                    );
                                },
                                _ = function (t) {
                                    var e = {},
                                        s = {};
                                    return (
                                        t.forEach(function (t) {
                                            w(t).forEach(function (t) {
                                                var i = t in e;
                                                i || t in s
                                                    ? i &&
                                                      (delete e[t], (s[t] = !0))
                                                    : (e[t] = !0);
                                            });
                                        }),
                                        e
                                    );
                                },
                                y = function (t, e) {
                                    var s = _(t),
                                        i = _(e),
                                        n = {};
                                    return (
                                        Object.keys(s).forEach(function (t) {
                                            i[t] && (n[t] = !0);
                                        }),
                                        n
                                    );
                                },
                                N = function (t) {
                                    return (
                                        delete t.outerDone,
                                        delete t.innerDone,
                                        delete t.valueDone,
                                        !t.childNodes || t.childNodes.every(N)
                                    );
                                },
                                x = function (t) {
                                    if (
                                        Object.prototype.hasOwnProperty.call(
                                            t,
                                            "data"
                                        )
                                    )
                                        return {
                                            nodeName:
                                                "#text" === t.nodeName
                                                    ? "#text"
                                                    : "#comment",
                                            data: t.data,
                                        };
                                    var e = { nodeName: t.nodeName };
                                    return (
                                        Object.prototype.hasOwnProperty.call(
                                            t,
                                            "attributes"
                                        ) &&
                                            (e.attributes = v(
                                                {},
                                                t.attributes
                                            )),
                                        Object.prototype.hasOwnProperty.call(
                                            t,
                                            "checked"
                                        ) && (e.checked = t.checked),
                                        Object.prototype.hasOwnProperty.call(
                                            t,
                                            "value"
                                        ) && (e.value = t.value),
                                        Object.prototype.hasOwnProperty.call(
                                            t,
                                            "selected"
                                        ) && (e.selected = t.selected),
                                        Object.prototype.hasOwnProperty.call(
                                            t,
                                            "childNodes"
                                        ) &&
                                            (e.childNodes = t.childNodes.map(
                                                function (t) {
                                                    return x(t);
                                                }
                                            )),
                                        e
                                    );
                                },
                                D = function (t, e) {
                                    if (
                                        ![
                                            "nodeName",
                                            "value",
                                            "checked",
                                            "selected",
                                            "data",
                                        ].every(function (s) {
                                            return t[s] === e[s];
                                        })
                                    )
                                        return !1;
                                    if (
                                        Object.prototype.hasOwnProperty.call(
                                            t,
                                            "data"
                                        )
                                    )
                                        return !0;
                                    if (
                                        Boolean(t.attributes) !==
                                        Boolean(e.attributes)
                                    )
                                        return !1;
                                    if (
                                        Boolean(t.childNodes) !==
                                        Boolean(e.childNodes)
                                    )
                                        return !1;
                                    if (t.attributes) {
                                        var s = Object.keys(t.attributes),
                                            i = Object.keys(e.attributes);
                                        if (s.length !== i.length) return !1;
                                        if (
                                            !s.every(function (s) {
                                                return (
                                                    t.attributes[s] ===
                                                    e.attributes[s]
                                                );
                                            })
                                        )
                                            return !1;
                                    }
                                    if (t.childNodes) {
                                        if (
                                            t.childNodes.length !==
                                            e.childNodes.length
                                        )
                                            return !1;
                                        if (
                                            !t.childNodes.every(function (
                                                t,
                                                s
                                            ) {
                                                return D(t, e.childNodes[s]);
                                            })
                                        )
                                            return !1;
                                    }
                                    return !0;
                                },
                                M = function (t, e, s, i, n) {
                                    if ((void 0 === n && (n = !1), !t || !e))
                                        return !1;
                                    if (t.nodeName !== e.nodeName) return !1;
                                    if (
                                        ["#text", "#comment"].includes(
                                            t.nodeName
                                        )
                                    )
                                        return !!n || t.data === e.data;
                                    if (t.nodeName in s) return !0;
                                    if (t.attributes && e.attributes) {
                                        if (t.attributes.id) {
                                            if (
                                                t.attributes.id !==
                                                e.attributes.id
                                            )
                                                return !1;
                                            if (
                                                ""
                                                    .concat(t.nodeName, "#")
                                                    .concat(t.attributes.id) in
                                                s
                                            )
                                                return !0;
                                        }
                                        if (
                                            t.attributes.class &&
                                            t.attributes.class ===
                                                e.attributes.class
                                        )
                                            if (
                                                ""
                                                    .concat(t.nodeName, ".")
                                                    .concat(
                                                        t.attributes.class.replace(
                                                            / /g,
                                                            "."
                                                        )
                                                    ) in s
                                            )
                                                return !0;
                                    }
                                    if (i) return !0;
                                    var a = t.childNodes
                                            ? t.childNodes.slice().reverse()
                                            : [],
                                        o = e.childNodes
                                            ? e.childNodes.slice().reverse()
                                            : [];
                                    if (a.length !== o.length) return !1;
                                    if (n)
                                        return a.every(function (t, e) {
                                            return t.nodeName === o[e].nodeName;
                                        });
                                    var r = y(a, o);
                                    return a.every(function (t, e) {
                                        return M(t, o[e], r, !0, !0);
                                    });
                                },
                                O = function (t, e) {
                                    return Array.apply(
                                        void 0,
                                        new Array(t)
                                    ).map(function () {
                                        return e;
                                    });
                                },
                                E = function (t, e) {
                                    for (
                                        var s = t.childNodes
                                                ? t.childNodes
                                                : [],
                                            i = e.childNodes
                                                ? e.childNodes
                                                : [],
                                            n = O(s.length, !1),
                                            a = O(i.length, !1),
                                            o = [],
                                            r = function () {
                                                return arguments[1];
                                            },
                                            l = !1,
                                            d = function () {
                                                var t = (function (t, e, s, i) {
                                                    var n = 0,
                                                        a = [],
                                                        o = t.length,
                                                        r = e.length,
                                                        l = Array.apply(
                                                            void 0,
                                                            new Array(o + 1)
                                                        ).map(function () {
                                                            return [];
                                                        }),
                                                        d = y(t, e),
                                                        c = o === r;
                                                    c &&
                                                        t.some(function (t, s) {
                                                            var i = w(t),
                                                                n = w(e[s]);
                                                            return i.length !==
                                                                n.length
                                                                ? ((c = !1), !0)
                                                                : (i.some(
                                                                      function (
                                                                          t,
                                                                          e
                                                                      ) {
                                                                          if (
                                                                              t !==
                                                                              n[
                                                                                  e
                                                                              ]
                                                                          )
                                                                              return (
                                                                                  (c =
                                                                                      !1),
                                                                                  !0
                                                                              );
                                                                      }
                                                                  ),
                                                                  !c || void 0);
                                                        });
                                                    for (var h = 0; h < o; h++)
                                                        for (
                                                            var u = t[h], p = 0;
                                                            p < r;
                                                            p++
                                                        ) {
                                                            var f = e[p];
                                                            s[h] ||
                                                            i[p] ||
                                                            !M(u, f, d, c)
                                                                ? (l[h + 1][
                                                                      p + 1
                                                                  ] = 0)
                                                                : ((l[h + 1][
                                                                      p + 1
                                                                  ] = l[h][p]
                                                                      ? l[h][
                                                                            p
                                                                        ] + 1
                                                                      : 1),
                                                                  l[h + 1][
                                                                      p + 1
                                                                  ] >= n &&
                                                                      ((n =
                                                                          l[
                                                                              h +
                                                                                  1
                                                                          ][
                                                                              p +
                                                                                  1
                                                                          ]),
                                                                      (a = [
                                                                          h + 1,
                                                                          p + 1,
                                                                      ])));
                                                        }
                                                    return (
                                                        0 !== n && {
                                                            oldValue: a[0] - n,
                                                            newValue: a[1] - n,
                                                            length: n,
                                                        }
                                                    );
                                                })(s, i, n, a);
                                                t
                                                    ? (o.push(t),
                                                      Array.apply(
                                                          void 0,
                                                          new Array(t.length)
                                                      )
                                                          .map(r)
                                                          .forEach(function (
                                                              e
                                                          ) {
                                                              return (function (
                                                                  t,
                                                                  e,
                                                                  s,
                                                                  i
                                                              ) {
                                                                  (t[
                                                                      s.oldValue +
                                                                          i
                                                                  ] = !0),
                                                                      (e[
                                                                          s.newValue +
                                                                              i
                                                                      ] = !0);
                                                              })(n, a, t, e);
                                                          }))
                                                    : (l = !0);
                                            };
                                        !l;

                                    )
                                        d();
                                    return (
                                        (t.subsets = o), (t.subsetsAge = 100), o
                                    );
                                },
                                V = (function () {
                                    function t() {
                                        this.list = [];
                                    }
                                    return (
                                        (t.prototype.add = function (t) {
                                            var e;
                                            (e = this.list).push.apply(e, t);
                                        }),
                                        (t.prototype.forEach = function (t) {
                                            this.list.forEach(function (e) {
                                                return t(e);
                                            });
                                        }),
                                        t
                                    );
                                })();
                            function $(t, e) {
                                var s,
                                    i,
                                    n = t;
                                for (e = e.slice(); e.length > 0; )
                                    (i = e.splice(0, 1)[0]),
                                        (s = n),
                                        (n = n.childNodes
                                            ? n.childNodes[i]
                                            : void 0);
                                return { node: n, parentNode: s, nodeIndex: i };
                            }
                            function C(t, e, s) {
                                return (
                                    e.forEach(function (e) {
                                        !(function (t, e, s) {
                                            var i, n, a, o;
                                            if (
                                                ![
                                                    s._const.addElement,
                                                    s._const.addTextElement,
                                                ].includes(e[s._const.action])
                                            ) {
                                                var r = $(t, e[s._const.route]);
                                                (n = r.node),
                                                    (a = r.parentNode),
                                                    (o = r.nodeIndex);
                                            }
                                            var l,
                                                d,
                                                c = [],
                                                h = { diff: e, node: n };
                                            if (s.preVirtualDiffApply(h))
                                                return !0;
                                            switch (e[s._const.action]) {
                                                case s._const.addAttribute:
                                                    n.attributes ||
                                                        (n.attributes = {}),
                                                        (n.attributes[
                                                            e[s._const.name]
                                                        ] = e[s._const.value]),
                                                        "checked" ===
                                                        e[s._const.name]
                                                            ? (n.checked = !0)
                                                            : "selected" ===
                                                              e[s._const.name]
                                                            ? (n.selected = !0)
                                                            : "INPUT" ===
                                                                  n.nodeName &&
                                                              "value" ===
                                                                  e[
                                                                      s._const
                                                                          .name
                                                                  ] &&
                                                              (n.value =
                                                                  e[
                                                                      s._const.value
                                                                  ]);
                                                    break;
                                                case s._const.modifyAttribute:
                                                    n.attributes[
                                                        e[s._const.name]
                                                    ] = e[s._const.newValue];
                                                    break;
                                                case s._const.removeAttribute:
                                                    delete n.attributes[
                                                        e[s._const.name]
                                                    ],
                                                        0 ===
                                                            Object.keys(
                                                                n.attributes
                                                            ).length &&
                                                            delete n.attributes,
                                                        "checked" ===
                                                        e[s._const.name]
                                                            ? (n.checked = !1)
                                                            : "selected" ===
                                                              e[s._const.name]
                                                            ? delete n.selected
                                                            : "INPUT" ===
                                                                  n.nodeName &&
                                                              "value" ===
                                                                  e[
                                                                      s._const
                                                                          .name
                                                                  ] &&
                                                              delete n.value;
                                                    break;
                                                case s._const.modifyTextElement:
                                                    (n.data =
                                                        e[s._const.newValue]),
                                                        "TEXTAREA" ===
                                                            a.nodeName &&
                                                            (a.value =
                                                                e[
                                                                    s._const.newValue
                                                                ]);
                                                    break;
                                                case s._const.modifyValue:
                                                    n.value =
                                                        e[s._const.newValue];
                                                    break;
                                                case s._const.modifyComment:
                                                    n.data =
                                                        e[s._const.newValue];
                                                    break;
                                                case s._const.modifyChecked:
                                                    n.checked =
                                                        e[s._const.newValue];
                                                    break;
                                                case s._const.modifySelected:
                                                    n.selected =
                                                        e[s._const.newValue];
                                                    break;
                                                case s._const.replaceElement:
                                                    (l = x(
                                                        e[s._const.newValue]
                                                    )),
                                                        (a.childNodes[o] = l);
                                                    break;
                                                case s._const.relocateGroup:
                                                    n.childNodes
                                                        .splice(
                                                            e[s._const.from],
                                                            e[
                                                                s._const
                                                                    .groupLength
                                                            ]
                                                        )
                                                        .reverse()
                                                        .forEach(function (t) {
                                                            return n.childNodes.splice(
                                                                e[s._const.to],
                                                                0,
                                                                t
                                                            );
                                                        }),
                                                        n.subsets &&
                                                            n.subsets.forEach(
                                                                function (t) {
                                                                    if (
                                                                        e[
                                                                            s
                                                                                ._const
                                                                                .from
                                                                        ] <
                                                                            e[
                                                                                s
                                                                                    ._const
                                                                                    .to
                                                                            ] &&
                                                                        t.oldValue <=
                                                                            e[
                                                                                s
                                                                                    ._const
                                                                                    .to
                                                                            ] &&
                                                                        t.oldValue >
                                                                            e[
                                                                                s
                                                                                    ._const
                                                                                    .from
                                                                            ]
                                                                    )
                                                                        (t.oldValue -=
                                                                            e[
                                                                                s._const.groupLength
                                                                            ]),
                                                                            (i =
                                                                                t.oldValue +
                                                                                t.length -
                                                                                e[
                                                                                    s
                                                                                        ._const
                                                                                        .to
                                                                                ]) >
                                                                                0 &&
                                                                                (c.push(
                                                                                    {
                                                                                        oldValue:
                                                                                            e[
                                                                                                s
                                                                                                    ._const
                                                                                                    .to
                                                                                            ] +
                                                                                            e[
                                                                                                s
                                                                                                    ._const
                                                                                                    .groupLength
                                                                                            ],
                                                                                        newValue:
                                                                                            t.newValue +
                                                                                            t.length -
                                                                                            i,
                                                                                        length: i,
                                                                                    }
                                                                                ),
                                                                                (t.length -=
                                                                                    i));
                                                                    else if (
                                                                        e[
                                                                            s
                                                                                ._const
                                                                                .from
                                                                        ] >
                                                                            e[
                                                                                s
                                                                                    ._const
                                                                                    .to
                                                                            ] &&
                                                                        t.oldValue >
                                                                            e[
                                                                                s
                                                                                    ._const
                                                                                    .to
                                                                            ] &&
                                                                        t.oldValue <
                                                                            e[
                                                                                s
                                                                                    ._const
                                                                                    .from
                                                                            ]
                                                                    ) {
                                                                        var i;
                                                                        (t.oldValue +=
                                                                            e[
                                                                                s._const.groupLength
                                                                            ]),
                                                                            (i =
                                                                                t.oldValue +
                                                                                t.length -
                                                                                e[
                                                                                    s
                                                                                        ._const
                                                                                        .to
                                                                                ]) >
                                                                                0 &&
                                                                                (c.push(
                                                                                    {
                                                                                        oldValue:
                                                                                            e[
                                                                                                s
                                                                                                    ._const
                                                                                                    .to
                                                                                            ] +
                                                                                            e[
                                                                                                s
                                                                                                    ._const
                                                                                                    .groupLength
                                                                                            ],
                                                                                        newValue:
                                                                                            t.newValue +
                                                                                            t.length -
                                                                                            i,
                                                                                        length: i,
                                                                                    }
                                                                                ),
                                                                                (t.length -=
                                                                                    i));
                                                                    } else
                                                                        t.oldValue ===
                                                                            e[
                                                                                s
                                                                                    ._const
                                                                                    .from
                                                                            ] &&
                                                                            (t.oldValue =
                                                                                e[
                                                                                    s._const.to
                                                                                ]);
                                                                }
                                                            );
                                                    break;
                                                case s._const.removeElement:
                                                    a.childNodes.splice(o, 1),
                                                        a.subsets &&
                                                            a.subsets.forEach(
                                                                function (t) {
                                                                    t.oldValue >
                                                                    o
                                                                        ? (t.oldValue -= 1)
                                                                        : t.oldValue ===
                                                                          o
                                                                        ? (t.delete =
                                                                              !0)
                                                                        : t.oldValue <
                                                                              o &&
                                                                          t.oldValue +
                                                                              t.length >
                                                                              o &&
                                                                          (t.oldValue +
                                                                              t.length -
                                                                              1 ===
                                                                          o
                                                                              ? t.length--
                                                                              : (c.push(
                                                                                    {
                                                                                        newValue:
                                                                                            t.newValue +
                                                                                            o -
                                                                                            t.oldValue,
                                                                                        oldValue:
                                                                                            o,
                                                                                        length:
                                                                                            t.length -
                                                                                            o +
                                                                                            t.oldValue -
                                                                                            1,
                                                                                    }
                                                                                ),
                                                                                (t.length =
                                                                                    o -
                                                                                    t.oldValue)));
                                                                }
                                                            ),
                                                        (n = a);
                                                    break;
                                                case s._const.addElement:
                                                    var u = (d =
                                                        e[
                                                            s._const.route
                                                        ].slice()).splice(
                                                        d.length - 1,
                                                        1
                                                    )[0];
                                                    (n =
                                                        null ===
                                                            (i = $(t, d)) ||
                                                        void 0 === i
                                                            ? void 0
                                                            : i.node),
                                                        (l = x(
                                                            e[s._const.element]
                                                        )),
                                                        n.childNodes ||
                                                            (n.childNodes = []),
                                                        u >= n.childNodes.length
                                                            ? n.childNodes.push(
                                                                  l
                                                              )
                                                            : n.childNodes.splice(
                                                                  u,
                                                                  0,
                                                                  l
                                                              ),
                                                        n.subsets &&
                                                            n.subsets.forEach(
                                                                function (t) {
                                                                    if (
                                                                        t.oldValue >=
                                                                        u
                                                                    )
                                                                        t.oldValue += 1;
                                                                    else if (
                                                                        t.oldValue <
                                                                            u &&
                                                                        t.oldValue +
                                                                            t.length >
                                                                            u
                                                                    ) {
                                                                        var e =
                                                                            t.oldValue +
                                                                            t.length -
                                                                            u;
                                                                        c.push({
                                                                            newValue:
                                                                                t.newValue +
                                                                                t.length -
                                                                                e,
                                                                            oldValue:
                                                                                u +
                                                                                1,
                                                                            length: e,
                                                                        }),
                                                                            (t.length -=
                                                                                e);
                                                                    }
                                                                }
                                                            );
                                                    break;
                                                case s._const.removeTextElement:
                                                    a.childNodes.splice(o, 1),
                                                        "TEXTAREA" ===
                                                            a.nodeName &&
                                                            delete a.value,
                                                        a.subsets &&
                                                            a.subsets.forEach(
                                                                function (t) {
                                                                    t.oldValue >
                                                                    o
                                                                        ? (t.oldValue -= 1)
                                                                        : t.oldValue ===
                                                                          o
                                                                        ? (t.delete =
                                                                              !0)
                                                                        : t.oldValue <
                                                                              o &&
                                                                          t.oldValue +
                                                                              t.length >
                                                                              o &&
                                                                          (t.oldValue +
                                                                              t.length -
                                                                              1 ===
                                                                          o
                                                                              ? t.length--
                                                                              : (c.push(
                                                                                    {
                                                                                        newValue:
                                                                                            t.newValue +
                                                                                            o -
                                                                                            t.oldValue,
                                                                                        oldValue:
                                                                                            o,
                                                                                        length:
                                                                                            t.length -
                                                                                            o +
                                                                                            t.oldValue -
                                                                                            1,
                                                                                    }
                                                                                ),
                                                                                (t.length =
                                                                                    o -
                                                                                    t.oldValue)));
                                                                }
                                                            ),
                                                        (n = a);
                                                    break;
                                                case s._const.addTextElement:
                                                    var p = (d =
                                                        e[
                                                            s._const.route
                                                        ].slice()).splice(
                                                        d.length - 1,
                                                        1
                                                    )[0];
                                                    (l = {
                                                        nodeName: "#text",
                                                        data: e[s._const.value],
                                                    }),
                                                        (n = $(t, d).node)
                                                            .childNodes ||
                                                            (n.childNodes = []),
                                                        p >= n.childNodes.length
                                                            ? n.childNodes.push(
                                                                  l
                                                              )
                                                            : n.childNodes.splice(
                                                                  p,
                                                                  0,
                                                                  l
                                                              ),
                                                        "TEXTAREA" ===
                                                            n.nodeName &&
                                                            (n.value =
                                                                e[
                                                                    s._const.newValue
                                                                ]),
                                                        n.subsets &&
                                                            n.subsets.forEach(
                                                                function (t) {
                                                                    if (
                                                                        (t.oldValue >=
                                                                            p &&
                                                                            (t.oldValue += 1),
                                                                        t.oldValue <
                                                                            p &&
                                                                            t.oldValue +
                                                                                t.length >
                                                                                p)
                                                                    ) {
                                                                        var e =
                                                                            t.oldValue +
                                                                            t.length -
                                                                            p;
                                                                        c.push({
                                                                            newValue:
                                                                                t.newValue +
                                                                                t.length -
                                                                                e,
                                                                            oldValue:
                                                                                p +
                                                                                1,
                                                                            length: e,
                                                                        }),
                                                                            (t.length -=
                                                                                e);
                                                                    }
                                                                }
                                                            );
                                                    break;
                                                default:
                                                    console.log(
                                                        "unknown action"
                                                    );
                                            }
                                            n.subsets &&
                                                ((n.subsets = n.subsets.filter(
                                                    function (t) {
                                                        return (
                                                            !t.delete &&
                                                            t.oldValue !==
                                                                t.newValue
                                                        );
                                                    }
                                                )),
                                                c.length &&
                                                    (n.subsets =
                                                        n.subsets.concat(c))),
                                                s.postVirtualDiffApply({
                                                    node: h.node,
                                                    diff: h.diff,
                                                    newNode: l,
                                                });
                                        })(t, e, s);
                                    }),
                                    !0
                                );
                            }
                            function S(t, e) {
                                void 0 === e && (e = { valueDiffing: !0 });
                                var s = { nodeName: t.nodeName };
                                if (u(t, "Text", "Comment")) s.data = t.data;
                                else {
                                    if (t.attributes && t.attributes.length > 0)
                                        (s.attributes = {}),
                                            Array.prototype.slice
                                                .call(t.attributes)
                                                .forEach(function (t) {
                                                    return (s.attributes[
                                                        t.name
                                                    ] = t.value);
                                                });
                                    if (t.childNodes && t.childNodes.length > 0)
                                        (s.childNodes = []),
                                            Array.prototype.slice
                                                .call(t.childNodes)
                                                .forEach(function (t) {
                                                    return s.childNodes.push(
                                                        S(t, e)
                                                    );
                                                });
                                    e.valueDiffing &&
                                        (u(t, "HTMLTextAreaElement") &&
                                            (s.value = t.value),
                                        u(t, "HTMLInputElement") &&
                                        ["radio", "checkbox"].includes(
                                            t.type.toLowerCase()
                                        ) &&
                                        void 0 !== t.checked
                                            ? (s.checked = t.checked)
                                            : u(
                                                  t,
                                                  "HTMLButtonElement",
                                                  "HTMLDataElement",
                                                  "HTMLInputElement",
                                                  "HTMLLIElement",
                                                  "HTMLMeterElement",
                                                  "HTMLOptionElement",
                                                  "HTMLProgressElement",
                                                  "HTMLParamElement"
                                              ) && (s.value = t.value),
                                        u(t, "HTMLOptionElement") &&
                                            (s.selected = t.selected));
                                }
                                return s;
                            }
                            var k =
                                    /<\s*\/*[a-zA-Z:_][a-zA-Z0-9:_\-.]*\s*(?:"[^"]*"['"]*|'[^']*'['"]*|[^'"/>])*\/*\s*>|<!--(?:.|\n|\r)*?-->/g,
                                T =
                                    /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
                            function A(t) {
                                return t
                                    .replace(/&lt;/g, "<")
                                    .replace(/&gt;/g, ">")
                                    .replace(/&amp;/g, "&");
                            }
                            var L = {
                                    area: !0,
                                    base: !0,
                                    br: !0,
                                    col: !0,
                                    embed: !0,
                                    hr: !0,
                                    img: !0,
                                    input: !0,
                                    keygen: !0,
                                    link: !0,
                                    menuItem: !0,
                                    meta: !0,
                                    param: !0,
                                    source: !0,
                                    track: !0,
                                    wbr: !0,
                                },
                                P = function (t, e) {
                                    var s = { nodeName: "", attributes: {} },
                                        i = !1,
                                        n = t.match(/<\/?([^\s]+?)[/\s>]/);
                                    if (
                                        n &&
                                        ((s.nodeName =
                                            e || "svg" === n[1]
                                                ? n[1]
                                                : n[1].toUpperCase()),
                                        (L[n[1]] ||
                                            "/" === t.charAt(t.length - 2)) &&
                                            (i = !0),
                                        s.nodeName.startsWith("!--"))
                                    ) {
                                        var a = t.indexOf("--\x3e");
                                        return {
                                            type: "comment",
                                            node: {
                                                nodeName: "#comment",
                                                data:
                                                    -1 !== a
                                                        ? t.slice(4, a)
                                                        : "",
                                            },
                                            voidElement: i,
                                        };
                                    }
                                    for (
                                        var o = new RegExp(T), r = null, l = !1;
                                        !l;

                                    )
                                        if (null === (r = o.exec(t))) l = !0;
                                        else if (r[0].trim())
                                            if (r[1]) {
                                                var d = r[1].trim(),
                                                    c = [d, ""];
                                                d.indexOf("=") > -1 &&
                                                    (c = d.split("=")),
                                                    (s.attributes[c[0]] = c[1]),
                                                    o.lastIndex--;
                                            } else
                                                r[2] &&
                                                    (s.attributes[r[2]] = r[3]
                                                        .trim()
                                                        .substring(
                                                            1,
                                                            r[3].length - 1
                                                        ));
                                    return {
                                        type: "tag",
                                        node: s,
                                        voidElement: i,
                                    };
                                },
                                R = function (t, e) {
                                    void 0 === e &&
                                        (e = {
                                            valueDiffing: !0,
                                            caseSensitive: !1,
                                        });
                                    var s,
                                        i = [],
                                        n = -1,
                                        a = [],
                                        o = !1;
                                    if (0 !== t.indexOf("<")) {
                                        var r = t.indexOf("<");
                                        i.push({
                                            nodeName: "#text",
                                            data:
                                                -1 === r
                                                    ? t
                                                    : t.substring(0, r),
                                        });
                                    }
                                    return (
                                        t.replace(k, function (r, l) {
                                            var d = "/" !== r.charAt(1),
                                                c = r.startsWith("\x3c!--"),
                                                h = l + r.length,
                                                u = t.charAt(h);
                                            if (c) {
                                                var p = P(
                                                    r,
                                                    e.caseSensitive
                                                ).node;
                                                if (n < 0) return i.push(p), "";
                                                var f = a[n];
                                                return (
                                                    f &&
                                                        p.nodeName &&
                                                        (f.node.childNodes ||
                                                            (f.node.childNodes =
                                                                []),
                                                        f.node.childNodes.push(
                                                            p
                                                        )),
                                                    ""
                                                );
                                            }
                                            if (d) {
                                                if (
                                                    ("svg" ===
                                                        (s = P(
                                                            r,
                                                            e.caseSensitive || o
                                                        )).node.nodeName &&
                                                        (o = !0),
                                                    n++,
                                                    !s.voidElement &&
                                                        u &&
                                                        "<" !== u)
                                                ) {
                                                    s.node.childNodes ||
                                                        (s.node.childNodes =
                                                            []);
                                                    var m = A(
                                                        t.slice(
                                                            h,
                                                            t.indexOf("<", h)
                                                        )
                                                    );
                                                    s.node.childNodes.push({
                                                        nodeName: "#text",
                                                        data: m,
                                                    }),
                                                        e.valueDiffing &&
                                                            "TEXTAREA" ===
                                                                s.node
                                                                    .nodeName &&
                                                            (s.node.value = m);
                                                }
                                                0 === n &&
                                                    s.node.nodeName &&
                                                    i.push(s.node);
                                                var g = a[n - 1];
                                                g &&
                                                    s.node.nodeName &&
                                                    (g.node.childNodes ||
                                                        (g.node.childNodes =
                                                            []),
                                                    g.node.childNodes.push(
                                                        s.node
                                                    )),
                                                    (a[n] = s);
                                            }
                                            if (
                                                (!d || s.voidElement) &&
                                                (n > -1 &&
                                                    (s.voidElement ||
                                                        (e.caseSensitive &&
                                                            s.node.nodeName ===
                                                                r.slice(
                                                                    2,
                                                                    -1
                                                                )) ||
                                                        (!e.caseSensitive &&
                                                            s.node.nodeName.toUpperCase() ===
                                                                r
                                                                    .slice(
                                                                        2,
                                                                        -1
                                                                    )
                                                                    .toUpperCase())) &&
                                                    --n > -1 &&
                                                    ("svg" ===
                                                        s.node.nodeName &&
                                                        (o = !1),
                                                    (s = a[n])),
                                                "<" !== u && u)
                                            ) {
                                                var b =
                                                        -1 === n
                                                            ? i
                                                            : a[n].node
                                                                  .childNodes ||
                                                              [],
                                                    v = t.indexOf("<", h);
                                                m = A(
                                                    t.slice(
                                                        h,
                                                        -1 === v ? void 0 : v
                                                    )
                                                );
                                                b.push({
                                                    nodeName: "#text",
                                                    data: m,
                                                });
                                            }
                                            return "";
                                        }),
                                        i[0]
                                    );
                                },
                                H = (function () {
                                    function t(t, e, s) {
                                        (this.options = s),
                                            (this.t1 =
                                                "undefined" != typeof Element &&
                                                u(t, "Element")
                                                    ? S(t, this.options)
                                                    : "string" == typeof t
                                                    ? R(t, this.options)
                                                    : JSON.parse(
                                                          JSON.stringify(t)
                                                      )),
                                            (this.t2 =
                                                "undefined" != typeof Element &&
                                                u(e, "Element")
                                                    ? S(e, this.options)
                                                    : "string" == typeof e
                                                    ? R(e, this.options)
                                                    : JSON.parse(
                                                          JSON.stringify(e)
                                                      )),
                                            (this.diffcount = 0),
                                            (this.foundAll = !1),
                                            this.debug &&
                                                ((this.t1Orig =
                                                    "undefined" !=
                                                        typeof Element &&
                                                    u(t, "Element")
                                                        ? S(t, this.options)
                                                        : "string" == typeof t
                                                        ? R(t, this.options)
                                                        : JSON.parse(
                                                              JSON.stringify(t)
                                                          )),
                                                (this.t2Orig =
                                                    "undefined" !=
                                                        typeof Element &&
                                                    u(e, "Element")
                                                        ? S(e, this.options)
                                                        : "string" == typeof e
                                                        ? R(e, this.options)
                                                        : JSON.parse(
                                                              JSON.stringify(e)
                                                          ))),
                                            (this.tracker = new V());
                                    }
                                    return (
                                        (t.prototype.init = function () {
                                            return this.findDiffs(
                                                this.t1,
                                                this.t2
                                            );
                                        }),
                                        (t.prototype.findDiffs = function (
                                            t,
                                            e
                                        ) {
                                            var s;
                                            do {
                                                if (
                                                    this.options.debug &&
                                                    ((this.diffcount += 1),
                                                    this.diffcount >
                                                        this.options.diffcap)
                                                )
                                                    throw new Error(
                                                        "surpassed diffcap:"
                                                            .concat(
                                                                JSON.stringify(
                                                                    this.t1Orig
                                                                ),
                                                                " -> "
                                                            )
                                                            .concat(
                                                                JSON.stringify(
                                                                    this.t2Orig
                                                                )
                                                            )
                                                    );
                                                0 ===
                                                    (s = this.findNextDiff(
                                                        t,
                                                        e,
                                                        []
                                                    )).length &&
                                                    (D(t, e) ||
                                                        (this.foundAll
                                                            ? console.error(
                                                                  "Could not find remaining diffs!"
                                                              )
                                                            : ((this.foundAll =
                                                                  !0),
                                                              N(t),
                                                              (s =
                                                                  this.findNextDiff(
                                                                      t,
                                                                      e,
                                                                      []
                                                                  ))))),
                                                    s.length > 0 &&
                                                        ((this.foundAll = !1),
                                                        this.tracker.add(s),
                                                        C(t, s, this.options));
                                            } while (s.length > 0);
                                            return this.tracker.list;
                                        }),
                                        (t.prototype.findNextDiff = function (
                                            t,
                                            e,
                                            s
                                        ) {
                                            var i, n;
                                            if (
                                                this.options.maxDepth &&
                                                s.length > this.options.maxDepth
                                            )
                                                return [];
                                            if (!t.outerDone) {
                                                if (
                                                    ((i = this.findOuterDiff(
                                                        t,
                                                        e,
                                                        s
                                                    )),
                                                    this.options
                                                        .filterOuterDiff &&
                                                        (n =
                                                            this.options.filterOuterDiff(
                                                                t,
                                                                e,
                                                                i
                                                            )) &&
                                                        (i = n),
                                                    i.length > 0)
                                                )
                                                    return (
                                                        (t.outerDone = !0), i
                                                    );
                                                t.outerDone = !0;
                                            }
                                            if (
                                                Object.prototype.hasOwnProperty.call(
                                                    t,
                                                    "data"
                                                )
                                            )
                                                return [];
                                            if (!t.innerDone) {
                                                if (
                                                    (i = this.findInnerDiff(
                                                        t,
                                                        e,
                                                        s
                                                    )).length > 0
                                                )
                                                    return i;
                                                t.innerDone = !0;
                                            }
                                            if (
                                                this.options.valueDiffing &&
                                                !t.valueDone
                                            ) {
                                                if (
                                                    (i = this.findValueDiff(
                                                        t,
                                                        e,
                                                        s
                                                    )).length > 0
                                                )
                                                    return (
                                                        (t.valueDone = !0), i
                                                    );
                                                t.valueDone = !0;
                                            }
                                            return [];
                                        }),
                                        (t.prototype.findOuterDiff = function (
                                            t,
                                            e,
                                            s
                                        ) {
                                            var i,
                                                n,
                                                a,
                                                o,
                                                r,
                                                l,
                                                d = [];
                                            if (t.nodeName !== e.nodeName) {
                                                if (!s.length)
                                                    throw new Error(
                                                        "Top level nodes have to be of the same kind."
                                                    );
                                                return [
                                                    new h()
                                                        .setValue(
                                                            this.options._const
                                                                .action,
                                                            this.options._const
                                                                .replaceElement
                                                        )
                                                        .setValue(
                                                            this.options._const
                                                                .oldValue,
                                                            x(t)
                                                        )
                                                        .setValue(
                                                            this.options._const
                                                                .newValue,
                                                            x(e)
                                                        )
                                                        .setValue(
                                                            this.options._const
                                                                .route,
                                                            s
                                                        ),
                                                ];
                                            }
                                            if (
                                                s.length &&
                                                this.options.diffcap <
                                                    Math.abs(
                                                        (t.childNodes || [])
                                                            .length -
                                                            (e.childNodes || [])
                                                                .length
                                                    )
                                            )
                                                return [
                                                    new h()
                                                        .setValue(
                                                            this.options._const
                                                                .action,
                                                            this.options._const
                                                                .replaceElement
                                                        )
                                                        .setValue(
                                                            this.options._const
                                                                .oldValue,
                                                            x(t)
                                                        )
                                                        .setValue(
                                                            this.options._const
                                                                .newValue,
                                                            x(e)
                                                        )
                                                        .setValue(
                                                            this.options._const
                                                                .route,
                                                            s
                                                        ),
                                                ];
                                            if (
                                                Object.prototype.hasOwnProperty.call(
                                                    t,
                                                    "data"
                                                ) &&
                                                t.data !== e.data
                                            )
                                                return "#text" === t.nodeName
                                                    ? [
                                                          new h()
                                                              .setValue(
                                                                  this.options
                                                                      ._const
                                                                      .action,
                                                                  this.options
                                                                      ._const
                                                                      .modifyTextElement
                                                              )
                                                              .setValue(
                                                                  this.options
                                                                      ._const
                                                                      .route,
                                                                  s
                                                              )
                                                              .setValue(
                                                                  this.options
                                                                      ._const
                                                                      .oldValue,
                                                                  t.data
                                                              )
                                                              .setValue(
                                                                  this.options
                                                                      ._const
                                                                      .newValue,
                                                                  e.data
                                                              ),
                                                      ]
                                                    : [
                                                          new h()
                                                              .setValue(
                                                                  this.options
                                                                      ._const
                                                                      .action,
                                                                  this.options
                                                                      ._const
                                                                      .modifyComment
                                                              )
                                                              .setValue(
                                                                  this.options
                                                                      ._const
                                                                      .route,
                                                                  s
                                                              )
                                                              .setValue(
                                                                  this.options
                                                                      ._const
                                                                      .oldValue,
                                                                  t.data
                                                              )
                                                              .setValue(
                                                                  this.options
                                                                      ._const
                                                                      .newValue,
                                                                  e.data
                                                              ),
                                                      ];
                                            for (
                                                n = t.attributes
                                                    ? Object.keys(
                                                          t.attributes
                                                      ).sort()
                                                    : [],
                                                    a = e.attributes
                                                        ? Object.keys(
                                                              e.attributes
                                                          ).sort()
                                                        : [],
                                                    o = n.length,
                                                    l = 0;
                                                l < o;
                                                l++
                                            )
                                                (i = n[l]),
                                                    -1 === (r = a.indexOf(i))
                                                        ? d.push(
                                                              new h()
                                                                  .setValue(
                                                                      this
                                                                          .options
                                                                          ._const
                                                                          .action,
                                                                      this
                                                                          .options
                                                                          ._const
                                                                          .removeAttribute
                                                                  )
                                                                  .setValue(
                                                                      this
                                                                          .options
                                                                          ._const
                                                                          .route,
                                                                      s
                                                                  )
                                                                  .setValue(
                                                                      this
                                                                          .options
                                                                          ._const
                                                                          .name,
                                                                      i
                                                                  )
                                                                  .setValue(
                                                                      this
                                                                          .options
                                                                          ._const
                                                                          .value,
                                                                      t
                                                                          .attributes[
                                                                          i
                                                                      ]
                                                                  )
                                                          )
                                                        : (a.splice(r, 1),
                                                          t.attributes[i] !==
                                                              e.attributes[i] &&
                                                              d.push(
                                                                  new h()
                                                                      .setValue(
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .action,
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .modifyAttribute
                                                                      )
                                                                      .setValue(
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .route,
                                                                          s
                                                                      )
                                                                      .setValue(
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .name,
                                                                          i
                                                                      )
                                                                      .setValue(
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .oldValue,
                                                                          t
                                                                              .attributes[
                                                                              i
                                                                          ]
                                                                      )
                                                                      .setValue(
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .newValue,
                                                                          e
                                                                              .attributes[
                                                                              i
                                                                          ]
                                                                      )
                                                              ));
                                            for (
                                                o = a.length, l = 0;
                                                l < o;
                                                l++
                                            )
                                                (i = a[l]),
                                                    d.push(
                                                        new h()
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .action,
                                                                this.options
                                                                    ._const
                                                                    .addAttribute
                                                            )
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .route,
                                                                s
                                                            )
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .name,
                                                                i
                                                            )
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .value,
                                                                e.attributes[i]
                                                            )
                                                    );
                                            return d;
                                        }),
                                        (t.prototype.findInnerDiff = function (
                                            t,
                                            e,
                                            s
                                        ) {
                                            var i = t.childNodes
                                                    ? t.childNodes.slice()
                                                    : [],
                                                n = e.childNodes
                                                    ? e.childNodes.slice()
                                                    : [],
                                                a = Math.max(
                                                    i.length,
                                                    n.length
                                                ),
                                                o = Math.abs(
                                                    i.length - n.length
                                                ),
                                                r = [],
                                                l = 0;
                                            if (
                                                !this.options.maxChildCount ||
                                                a < this.options.maxChildCount
                                            ) {
                                                var d = Boolean(
                                                        t.subsets &&
                                                            t.subsetsAge--
                                                    ),
                                                    c = d
                                                        ? t.subsets
                                                        : t.childNodes &&
                                                          e.childNodes
                                                        ? E(t, e)
                                                        : [];
                                                if (
                                                    c.length > 0 &&
                                                    (r =
                                                        this.attemptGroupRelocation(
                                                            t,
                                                            e,
                                                            c,
                                                            s,
                                                            d
                                                        )).length > 0
                                                )
                                                    return r;
                                            }
                                            for (var u = 0; u < a; u += 1) {
                                                var p = i[u],
                                                    f = n[u];
                                                o &&
                                                    (p && !f
                                                        ? "#text" === p.nodeName
                                                            ? (r.push(
                                                                  new h()
                                                                      .setValue(
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .action,
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .removeTextElement
                                                                      )
                                                                      .setValue(
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .route,
                                                                          s.concat(
                                                                              l
                                                                          )
                                                                      )
                                                                      .setValue(
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .value,
                                                                          p.data
                                                                      )
                                                              ),
                                                              (l -= 1))
                                                            : (r.push(
                                                                  new h()
                                                                      .setValue(
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .action,
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .removeElement
                                                                      )
                                                                      .setValue(
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .route,
                                                                          s.concat(
                                                                              l
                                                                          )
                                                                      )
                                                                      .setValue(
                                                                          this
                                                                              .options
                                                                              ._const
                                                                              .element,
                                                                          x(p)
                                                                      )
                                                              ),
                                                              (l -= 1))
                                                        : f &&
                                                          !p &&
                                                          ("#text" ===
                                                          f.nodeName
                                                              ? r.push(
                                                                    new h()
                                                                        .setValue(
                                                                            this
                                                                                .options
                                                                                ._const
                                                                                .action,
                                                                            this
                                                                                .options
                                                                                ._const
                                                                                .addTextElement
                                                                        )
                                                                        .setValue(
                                                                            this
                                                                                .options
                                                                                ._const
                                                                                .route,
                                                                            s.concat(
                                                                                l
                                                                            )
                                                                        )
                                                                        .setValue(
                                                                            this
                                                                                .options
                                                                                ._const
                                                                                .value,
                                                                            f.data
                                                                        )
                                                                )
                                                              : r.push(
                                                                    new h()
                                                                        .setValue(
                                                                            this
                                                                                .options
                                                                                ._const
                                                                                .action,
                                                                            this
                                                                                .options
                                                                                ._const
                                                                                .addElement
                                                                        )
                                                                        .setValue(
                                                                            this
                                                                                .options
                                                                                ._const
                                                                                .route,
                                                                            s.concat(
                                                                                l
                                                                            )
                                                                        )
                                                                        .setValue(
                                                                            this
                                                                                .options
                                                                                ._const
                                                                                .element,
                                                                            x(f)
                                                                        )
                                                                ))),
                                                    p &&
                                                        f &&
                                                        (!this.options
                                                            .maxChildCount ||
                                                        a <
                                                            this.options
                                                                .maxChildCount
                                                            ? (r = r.concat(
                                                                  this.findNextDiff(
                                                                      p,
                                                                      f,
                                                                      s.concat(
                                                                          l
                                                                      )
                                                                  )
                                                              ))
                                                            : D(p, f) ||
                                                              (i.length >
                                                              n.length
                                                                  ? ("#text" ===
                                                                    p.nodeName
                                                                        ? r.push(
                                                                              new h()
                                                                                  .setValue(
                                                                                      this
                                                                                          .options
                                                                                          ._const
                                                                                          .action,
                                                                                      this
                                                                                          .options
                                                                                          ._const
                                                                                          .removeTextElement
                                                                                  )
                                                                                  .setValue(
                                                                                      this
                                                                                          .options
                                                                                          ._const
                                                                                          .route,
                                                                                      s.concat(
                                                                                          l
                                                                                      )
                                                                                  )
                                                                                  .setValue(
                                                                                      this
                                                                                          .options
                                                                                          ._const
                                                                                          .value,
                                                                                      p.data
                                                                                  )
                                                                          )
                                                                        : r.push(
                                                                              new h()
                                                                                  .setValue(
                                                                                      this
                                                                                          .options
                                                                                          ._const
                                                                                          .action,
                                                                                      this
                                                                                          .options
                                                                                          ._const
                                                                                          .removeElement
                                                                                  )
                                                                                  .setValue(
                                                                                      this
                                                                                          .options
                                                                                          ._const
                                                                                          .element,
                                                                                      x(
                                                                                          p
                                                                                      )
                                                                                  )
                                                                                  .setValue(
                                                                                      this
                                                                                          .options
                                                                                          ._const
                                                                                          .route,
                                                                                      s.concat(
                                                                                          l
                                                                                      )
                                                                                  )
                                                                          ),
                                                                    i.splice(
                                                                        u,
                                                                        1
                                                                    ),
                                                                    (u -= 1),
                                                                    (l -= 1),
                                                                    (o -= 1))
                                                                  : i.length <
                                                                    n.length
                                                                  ? ((r =
                                                                        r.concat(
                                                                            [
                                                                                new h()
                                                                                    .setValue(
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .action,
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .addElement
                                                                                    )
                                                                                    .setValue(
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .element,
                                                                                        x(
                                                                                            f
                                                                                        )
                                                                                    )
                                                                                    .setValue(
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .route,
                                                                                        s.concat(
                                                                                            l
                                                                                        )
                                                                                    ),
                                                                            ]
                                                                        )),
                                                                    i.splice(
                                                                        u,
                                                                        0,
                                                                        x(f)
                                                                    ),
                                                                    (o -= 1))
                                                                  : (r =
                                                                        r.concat(
                                                                            [
                                                                                new h()
                                                                                    .setValue(
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .action,
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .replaceElement
                                                                                    )
                                                                                    .setValue(
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .oldValue,
                                                                                        x(
                                                                                            p
                                                                                        )
                                                                                    )
                                                                                    .setValue(
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .newValue,
                                                                                        x(
                                                                                            f
                                                                                        )
                                                                                    )
                                                                                    .setValue(
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .route,
                                                                                        s.concat(
                                                                                            l
                                                                                        )
                                                                                    ),
                                                                            ]
                                                                        )))),
                                                    (l += 1);
                                            }
                                            return (t.innerDone = !0), r;
                                        }),
                                        (t.prototype.attemptGroupRelocation =
                                            function (t, e, s, i, n) {
                                                for (
                                                    var a,
                                                        o,
                                                        r,
                                                        l,
                                                        d,
                                                        c = (function (
                                                            t,
                                                            e,
                                                            s
                                                        ) {
                                                            var i = t.childNodes
                                                                    ? O(
                                                                          t
                                                                              .childNodes
                                                                              .length,
                                                                          !0
                                                                      )
                                                                    : [],
                                                                n = e.childNodes
                                                                    ? O(
                                                                          e
                                                                              .childNodes
                                                                              .length,
                                                                          !0
                                                                      )
                                                                    : [],
                                                                a = 0;
                                                            return (
                                                                s.forEach(
                                                                    function (
                                                                        t
                                                                    ) {
                                                                        for (
                                                                            var e =
                                                                                    t.oldValue +
                                                                                    t.length,
                                                                                s =
                                                                                    t.newValue +
                                                                                    t.length,
                                                                                o =
                                                                                    t.oldValue;
                                                                            o <
                                                                            e;
                                                                            o += 1
                                                                        )
                                                                            i[
                                                                                o
                                                                            ] =
                                                                                a;
                                                                        for (
                                                                            o =
                                                                                t.newValue;
                                                                            o <
                                                                            s;
                                                                            o += 1
                                                                        )
                                                                            n[
                                                                                o
                                                                            ] =
                                                                                a;
                                                                        a += 1;
                                                                    }
                                                                ),
                                                                {
                                                                    gaps1: i,
                                                                    gaps2: n,
                                                                }
                                                            );
                                                        })(t, e, s),
                                                        u = c.gaps1,
                                                        p = c.gaps2,
                                                        f =
                                                            t.childNodes.slice(),
                                                        m =
                                                            e.childNodes.slice(),
                                                        g = Math.min(
                                                            u.length,
                                                            p.length
                                                        ),
                                                        b = [],
                                                        v = 0,
                                                        w = 0;
                                                    v < g;
                                                    w += 1, v += 1
                                                )
                                                    if (
                                                        !n ||
                                                        (!0 !== u[v] &&
                                                            !0 !== p[v])
                                                    ) {
                                                        if (!0 === u[w])
                                                            if (
                                                                "#text" ===
                                                                (l = f[w])
                                                                    .nodeName
                                                            )
                                                                if (
                                                                    "#text" ===
                                                                    m[v]
                                                                        .nodeName
                                                                ) {
                                                                    if (
                                                                        l.data !==
                                                                        m[v]
                                                                            .data
                                                                    ) {
                                                                        for (
                                                                            var _ =
                                                                                w;
                                                                            f.length >
                                                                                _ +
                                                                                    1 &&
                                                                            "#text" ===
                                                                                f[
                                                                                    _ +
                                                                                        1
                                                                                ]
                                                                                    .nodeName;

                                                                        )
                                                                            if (
                                                                                ((_ += 1),
                                                                                m[
                                                                                    v
                                                                                ]
                                                                                    .data ===
                                                                                    f[
                                                                                        _
                                                                                    ]
                                                                                        .data)
                                                                            ) {
                                                                                d =
                                                                                    !0;
                                                                                break;
                                                                            }
                                                                        d ||
                                                                            b.push(
                                                                                new h()
                                                                                    .setValue(
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .action,
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .modifyTextElement
                                                                                    )
                                                                                    .setValue(
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .route,
                                                                                        i.concat(
                                                                                            w
                                                                                        )
                                                                                    )
                                                                                    .setValue(
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .oldValue,
                                                                                        l.data
                                                                                    )
                                                                                    .setValue(
                                                                                        this
                                                                                            .options
                                                                                            ._const
                                                                                            .newValue,
                                                                                        m[
                                                                                            v
                                                                                        ]
                                                                                            .data
                                                                                    )
                                                                            );
                                                                    }
                                                                } else
                                                                    b.push(
                                                                        new h()
                                                                            .setValue(
                                                                                this
                                                                                    .options
                                                                                    ._const
                                                                                    .action,
                                                                                this
                                                                                    .options
                                                                                    ._const
                                                                                    .removeTextElement
                                                                            )
                                                                            .setValue(
                                                                                this
                                                                                    .options
                                                                                    ._const
                                                                                    .route,
                                                                                i.concat(
                                                                                    w
                                                                                )
                                                                            )
                                                                            .setValue(
                                                                                this
                                                                                    .options
                                                                                    ._const
                                                                                    .value,
                                                                                l.data
                                                                            )
                                                                    ),
                                                                        u.splice(
                                                                            w,
                                                                            1
                                                                        ),
                                                                        f.splice(
                                                                            w,
                                                                            1
                                                                        ),
                                                                        (g =
                                                                            Math.min(
                                                                                u.length,
                                                                                p.length
                                                                            )),
                                                                        (w -= 1),
                                                                        (v -= 1);
                                                            else
                                                                !0 === p[v]
                                                                    ? b.push(
                                                                          new h()
                                                                              .setValue(
                                                                                  this
                                                                                      .options
                                                                                      ._const
                                                                                      .action,
                                                                                  this
                                                                                      .options
                                                                                      ._const
                                                                                      .replaceElement
                                                                              )
                                                                              .setValue(
                                                                                  this
                                                                                      .options
                                                                                      ._const
                                                                                      .oldValue,
                                                                                  x(
                                                                                      l
                                                                                  )
                                                                              )
                                                                              .setValue(
                                                                                  this
                                                                                      .options
                                                                                      ._const
                                                                                      .newValue,
                                                                                  x(
                                                                                      m[
                                                                                          v
                                                                                      ]
                                                                                  )
                                                                              )
                                                                              .setValue(
                                                                                  this
                                                                                      .options
                                                                                      ._const
                                                                                      .route,
                                                                                  i.concat(
                                                                                      w
                                                                                  )
                                                                              )
                                                                      )
                                                                    : (b.push(
                                                                          new h()
                                                                              .setValue(
                                                                                  this
                                                                                      .options
                                                                                      ._const
                                                                                      .action,
                                                                                  this
                                                                                      .options
                                                                                      ._const
                                                                                      .removeElement
                                                                              )
                                                                              .setValue(
                                                                                  this
                                                                                      .options
                                                                                      ._const
                                                                                      .route,
                                                                                  i.concat(
                                                                                      w
                                                                                  )
                                                                              )
                                                                              .setValue(
                                                                                  this
                                                                                      .options
                                                                                      ._const
                                                                                      .element,
                                                                                  x(
                                                                                      l
                                                                                  )
                                                                              )
                                                                      ),
                                                                      u.splice(
                                                                          w,
                                                                          1
                                                                      ),
                                                                      f.splice(
                                                                          w,
                                                                          1
                                                                      ),
                                                                      (g =
                                                                          Math.min(
                                                                              u.length,
                                                                              p.length
                                                                          )),
                                                                      (w -= 1),
                                                                      (v -= 1));
                                                        else if (!0 === p[v])
                                                            "#text" ===
                                                            (l = m[v]).nodeName
                                                                ? (b.push(
                                                                      new h()
                                                                          .setValue(
                                                                              this
                                                                                  .options
                                                                                  ._const
                                                                                  .action,
                                                                              this
                                                                                  .options
                                                                                  ._const
                                                                                  .addTextElement
                                                                          )
                                                                          .setValue(
                                                                              this
                                                                                  .options
                                                                                  ._const
                                                                                  .route,
                                                                              i.concat(
                                                                                  w
                                                                              )
                                                                          )
                                                                          .setValue(
                                                                              this
                                                                                  .options
                                                                                  ._const
                                                                                  .value,
                                                                              l.data
                                                                          )
                                                                  ),
                                                                  u.splice(
                                                                      w,
                                                                      0,
                                                                      !0
                                                                  ),
                                                                  f.splice(
                                                                      w,
                                                                      0,
                                                                      {
                                                                          nodeName:
                                                                              "#text",
                                                                          data: l.data,
                                                                      }
                                                                  ),
                                                                  (g = Math.min(
                                                                      u.length,
                                                                      p.length
                                                                  )))
                                                                : (b.push(
                                                                      new h()
                                                                          .setValue(
                                                                              this
                                                                                  .options
                                                                                  ._const
                                                                                  .action,
                                                                              this
                                                                                  .options
                                                                                  ._const
                                                                                  .addElement
                                                                          )
                                                                          .setValue(
                                                                              this
                                                                                  .options
                                                                                  ._const
                                                                                  .route,
                                                                              i.concat(
                                                                                  w
                                                                              )
                                                                          )
                                                                          .setValue(
                                                                              this
                                                                                  .options
                                                                                  ._const
                                                                                  .element,
                                                                              x(
                                                                                  l
                                                                              )
                                                                          )
                                                                  ),
                                                                  u.splice(
                                                                      w,
                                                                      0,
                                                                      !0
                                                                  ),
                                                                  f.splice(
                                                                      w,
                                                                      0,
                                                                      x(l)
                                                                  ),
                                                                  (g = Math.min(
                                                                      u.length,
                                                                      p.length
                                                                  )));
                                                        else if (
                                                            u[w] !== p[v]
                                                        ) {
                                                            if (b.length > 0)
                                                                return b;
                                                            if (
                                                                ((r = s[u[w]]),
                                                                (o = Math.min(
                                                                    r.newValue,
                                                                    f.length -
                                                                        r.length
                                                                )) !==
                                                                    r.oldValue)
                                                            ) {
                                                                a = !1;
                                                                for (
                                                                    var y = 0;
                                                                    y <
                                                                    r.length;
                                                                    y += 1
                                                                )
                                                                    M(
                                                                        f[
                                                                            o +
                                                                                y
                                                                        ],
                                                                        f[
                                                                            r.oldValue +
                                                                                y
                                                                        ],
                                                                        {},
                                                                        !1,
                                                                        !0
                                                                    ) ||
                                                                        (a =
                                                                            !0);
                                                                if (a)
                                                                    return [
                                                                        new h()
                                                                            .setValue(
                                                                                this
                                                                                    .options
                                                                                    ._const
                                                                                    .action,
                                                                                this
                                                                                    .options
                                                                                    ._const
                                                                                    .relocateGroup
                                                                            )
                                                                            .setValue(
                                                                                this
                                                                                    .options
                                                                                    ._const
                                                                                    .groupLength,
                                                                                r.length
                                                                            )
                                                                            .setValue(
                                                                                this
                                                                                    .options
                                                                                    ._const
                                                                                    .from,
                                                                                r.oldValue
                                                                            )
                                                                            .setValue(
                                                                                this
                                                                                    .options
                                                                                    ._const
                                                                                    .to,
                                                                                o
                                                                            )
                                                                            .setValue(
                                                                                this
                                                                                    .options
                                                                                    ._const
                                                                                    .route,
                                                                                i
                                                                            ),
                                                                    ];
                                                            }
                                                        }
                                                    } else;
                                                return b;
                                            }),
                                        (t.prototype.findValueDiff = function (
                                            t,
                                            e,
                                            s
                                        ) {
                                            var i = [];
                                            return (
                                                t.selected !== e.selected &&
                                                    i.push(
                                                        new h()
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .action,
                                                                this.options
                                                                    ._const
                                                                    .modifySelected
                                                            )
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .oldValue,
                                                                t.selected
                                                            )
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .newValue,
                                                                e.selected
                                                            )
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .route,
                                                                s
                                                            )
                                                    ),
                                                (t.value || e.value) &&
                                                    t.value !== e.value &&
                                                    "OPTION" !== t.nodeName &&
                                                    i.push(
                                                        new h()
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .action,
                                                                this.options
                                                                    ._const
                                                                    .modifyValue
                                                            )
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .oldValue,
                                                                t.value || ""
                                                            )
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .newValue,
                                                                e.value || ""
                                                            )
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .route,
                                                                s
                                                            )
                                                    ),
                                                t.checked !== e.checked &&
                                                    i.push(
                                                        new h()
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .action,
                                                                this.options
                                                                    ._const
                                                                    .modifyChecked
                                                            )
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .oldValue,
                                                                t.checked
                                                            )
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .newValue,
                                                                e.checked
                                                            )
                                                            .setValue(
                                                                this.options
                                                                    ._const
                                                                    .route,
                                                                s
                                                            )
                                                    ),
                                                i
                                            );
                                        }),
                                        t
                                    );
                                })(),
                                I = {
                                    debug: !1,
                                    diffcap: 10,
                                    maxDepth: !1,
                                    maxChildCount: 50,
                                    valueDiffing: !0,
                                    textDiff: function (t, e, s, i) {
                                        t.data = i;
                                    },
                                    preVirtualDiffApply: function () {},
                                    postVirtualDiffApply: function () {},
                                    preDiffApply: function () {},
                                    postDiffApply: function () {},
                                    filterOuterDiff: null,
                                    compress: !1,
                                    _const: !1,
                                    document:
                                        !(
                                            "undefined" == typeof window ||
                                            !window.document
                                        ) && window.document,
                                    components: [],
                                },
                                Y = (function () {
                                    function t(t) {
                                        if (
                                            (void 0 === t && (t = {}),
                                            Object.entries(I).forEach(function (
                                                e
                                            ) {
                                                var s = e[0],
                                                    i = e[1];
                                                Object.prototype.hasOwnProperty.call(
                                                    t,
                                                    s
                                                ) || (t[s] = i);
                                            }),
                                            !t._const)
                                        ) {
                                            var e = [
                                                    "addAttribute",
                                                    "modifyAttribute",
                                                    "removeAttribute",
                                                    "modifyTextElement",
                                                    "relocateGroup",
                                                    "removeElement",
                                                    "addElement",
                                                    "removeTextElement",
                                                    "addTextElement",
                                                    "replaceElement",
                                                    "modifyValue",
                                                    "modifyChecked",
                                                    "modifySelected",
                                                    "modifyComment",
                                                    "action",
                                                    "route",
                                                    "oldValue",
                                                    "newValue",
                                                    "element",
                                                    "group",
                                                    "groupLength",
                                                    "from",
                                                    "to",
                                                    "name",
                                                    "value",
                                                    "data",
                                                    "attributes",
                                                    "nodeName",
                                                    "childNodes",
                                                    "checked",
                                                    "selected",
                                                ],
                                                s = {};
                                            t.compress
                                                ? e.forEach(function (t, e) {
                                                      return (s[t] = e);
                                                  })
                                                : e.forEach(function (t) {
                                                      return (s[t] = t);
                                                  }),
                                                (t._const = s);
                                        }
                                        this.options = t;
                                    }
                                    return (
                                        (t.prototype.apply = function (t, e) {
                                            return (function (t, e, s) {
                                                return e.every(function (e) {
                                                    return m(t, e, s);
                                                });
                                            })(t, e, this.options);
                                        }),
                                        (t.prototype.undo = function (t, e) {
                                            return b(t, e, this.options);
                                        }),
                                        (t.prototype.diff = function (t, e) {
                                            return new H(
                                                t,
                                                e,
                                                this.options
                                            ).init();
                                        }),
                                        t
                                    );
                                })();
                            const j = (
                                    t,
                                    e,
                                    s,
                                    {
                                        classes: i,
                                        format: n,
                                        hiddenHeader: a,
                                        sortable: o,
                                        scrollY: r,
                                        type: l,
                                    },
                                    { noColumnWidths: d, unhideHeader: h }
                                ) => ({
                                    nodeName: "TR",
                                    childNodes: t
                                        .map((t, u) => {
                                            const p = e[u] || {
                                                type: l,
                                                format: n,
                                                sortable: !0,
                                                searchable: !0,
                                            };
                                            if (p.hidden) return;
                                            const f = t.attributes
                                                ? { ...t.attributes }
                                                : {};
                                            if (
                                                (p.sortable &&
                                                    o &&
                                                    (!r.length || h) &&
                                                    (p.filter
                                                        ? (f[
                                                              "data-filterable"
                                                          ] = "true")
                                                        : (f["data-sortable"] =
                                                              "true")),
                                                p.headerClass &&
                                                    (f.class = c(
                                                        f.class,
                                                        p.headerClass
                                                    )),
                                                s.sort && s.sort.column === u)
                                            ) {
                                                const t =
                                                    "asc" === s.sort.dir
                                                        ? i.ascending
                                                        : i.descending;
                                                (f.class = c(f.class, t)),
                                                    (f["aria-sort"] =
                                                        "asc" === s.sort.dir
                                                            ? "ascending"
                                                            : "descending");
                                            } else
                                                s.filters[u] &&
                                                    (f.class = c(
                                                        f.class,
                                                        i.filterActive
                                                    ));
                                            if (s.widths[u] && !d) {
                                                const t = `width: ${s.widths[u]}%;`;
                                                f.style = c(f.style, t);
                                            }
                                            if (r.length && !h) {
                                                const t =
                                                    "padding-bottom: 0;padding-top: 0;border: 0;";
                                                f.style = c(f.style, t);
                                            }
                                            const m =
                                                "html" === t.type
                                                    ? t.data
                                                    : [
                                                          {
                                                              nodeName: "#text",
                                                              data:
                                                                  t.text ??
                                                                  String(
                                                                      t.data
                                                                  ),
                                                          },
                                                      ];
                                            return {
                                                nodeName: "TH",
                                                attributes: f,
                                                childNodes:
                                                    (!a && !r.length) || h
                                                        ? p.sortable && o
                                                            ? [
                                                                  {
                                                                      nodeName:
                                                                          "BUTTON",
                                                                      attributes:
                                                                          {
                                                                              class: p.filter
                                                                                  ? i.filter
                                                                                  : i.sorter,
                                                                          },
                                                                      childNodes:
                                                                          m,
                                                                  },
                                                              ]
                                                            : m
                                                        : [
                                                              {
                                                                  nodeName:
                                                                      "#text",
                                                                  data: "",
                                                              },
                                                          ],
                                            };
                                        })
                                        .filter((t) => t),
                                }),
                                q = (
                                    t,
                                    e,
                                    s,
                                    i,
                                    a,
                                    o,
                                    {
                                        classes: r,
                                        hiddenHeader: l,
                                        header: d,
                                        footer: h,
                                        format: u,
                                        sortable: p,
                                        scrollY: f,
                                        type: m,
                                        rowRender: g,
                                        tabIndex: b,
                                    },
                                    {
                                        noColumnWidths: v,
                                        unhideHeader: w,
                                        renderHeader: _,
                                    },
                                    y,
                                    N
                                ) => {
                                    const x = {
                                        nodeName: "TABLE",
                                        attributes: { ...t },
                                        childNodes: [
                                            {
                                                nodeName: "TBODY",
                                                childNodes: s.map(
                                                    ({ row: t, index: e }) => {
                                                        const s = {
                                                            nodeName: "TR",
                                                            attributes: {
                                                                ...t.attributes,
                                                                "data-index":
                                                                    String(e),
                                                            },
                                                            childNodes: t.cells
                                                                .map((t, s) => {
                                                                    const o = i[
                                                                        s
                                                                    ] || {
                                                                        type: m,
                                                                        format: u,
                                                                        sortable:
                                                                            !0,
                                                                        searchable:
                                                                            !0,
                                                                    };
                                                                    if (
                                                                        o.hidden
                                                                    )
                                                                        return;
                                                                    const r = {
                                                                        nodeName:
                                                                            "TD",
                                                                        attributes:
                                                                            t.attributes
                                                                                ? {
                                                                                      ...t.attributes,
                                                                                  }
                                                                                : {},
                                                                        childNodes:
                                                                            "html" ===
                                                                            o.type
                                                                                ? t.data
                                                                                : [
                                                                                      {
                                                                                          nodeName:
                                                                                              "#text",
                                                                                          data: n(
                                                                                              t
                                                                                          ),
                                                                                      },
                                                                                  ],
                                                                    };
                                                                    if (
                                                                        (d ||
                                                                            h ||
                                                                            !a
                                                                                .widths[
                                                                                s
                                                                            ] ||
                                                                            v ||
                                                                            (r.attributes.style =
                                                                                c(
                                                                                    r
                                                                                        .attributes
                                                                                        .style,
                                                                                    `width: ${a.widths[s]}%;`
                                                                                )),
                                                                        o.cellClass &&
                                                                            (r.attributes.class =
                                                                                c(
                                                                                    r
                                                                                        .attributes
                                                                                        .class,
                                                                                    o.cellClass
                                                                                )),
                                                                        o.render)
                                                                    ) {
                                                                        const i =
                                                                            o.render(
                                                                                t.data,
                                                                                r,
                                                                                e,
                                                                                s
                                                                            );
                                                                        if (i) {
                                                                            if (
                                                                                "string" !=
                                                                                typeof i
                                                                            )
                                                                                return i;
                                                                            {
                                                                                const t =
                                                                                    R(
                                                                                        `<td>${i}</td>`
                                                                                    );
                                                                                1 ===
                                                                                    t
                                                                                        .childNodes
                                                                                        .length &&
                                                                                [
                                                                                    "#text",
                                                                                    "#comment",
                                                                                ].includes(
                                                                                    t
                                                                                        .childNodes[0]
                                                                                        .nodeName
                                                                                )
                                                                                    ? (r.childNodes[0].data =
                                                                                          i)
                                                                                    : (r.childNodes =
                                                                                          t.childNodes);
                                                                            }
                                                                        }
                                                                    }
                                                                    return r;
                                                                })
                                                                .filter(
                                                                    (t) => t
                                                                ),
                                                        };
                                                        if (
                                                            (e === o &&
                                                                (s.attributes.class =
                                                                    c(
                                                                        s
                                                                            .attributes
                                                                            .class,
                                                                        r.cursor
                                                                    )),
                                                            g)
                                                        ) {
                                                            const i = g(
                                                                t,
                                                                s,
                                                                e
                                                            );
                                                            if (i) {
                                                                if (
                                                                    "string" !=
                                                                    typeof i
                                                                )
                                                                    return i;
                                                                {
                                                                    const t = R(
                                                                        `<tr>${i}</tr>`
                                                                    );
                                                                    !t.childNodes ||
                                                                    (1 ===
                                                                        t
                                                                            .childNodes
                                                                            .length &&
                                                                        [
                                                                            "#text",
                                                                            "#comment",
                                                                        ].includes(
                                                                            t
                                                                                .childNodes[0]
                                                                                .nodeName
                                                                        ))
                                                                        ? (s.childNodes[0].data =
                                                                              i)
                                                                        : (s.childNodes =
                                                                              t.childNodes);
                                                                }
                                                            }
                                                        }
                                                        return s;
                                                    }
                                                ),
                                            },
                                        ],
                                    };
                                    if (
                                        ((x.attributes.class = c(
                                            x.attributes.class,
                                            r.table
                                        )),
                                        d || h || _)
                                    ) {
                                        const t = j(
                                            e,
                                            i,
                                            a,
                                            {
                                                classes: r,
                                                hiddenHeader: l,
                                                sortable: p,
                                                scrollY: f,
                                            },
                                            {
                                                noColumnWidths: v,
                                                unhideHeader: w,
                                            }
                                        );
                                        if (d || _) {
                                            const e = {
                                                nodeName: "THEAD",
                                                childNodes: [t],
                                            };
                                            (!f.length && !l) ||
                                                w ||
                                                (e.attributes = {
                                                    style: "height: 0px;",
                                                }),
                                                x.childNodes.unshift(e);
                                        }
                                        if (h) {
                                            const e = {
                                                nodeName: "TFOOT",
                                                childNodes: [
                                                    d ? structuredClone(t) : t,
                                                ],
                                            };
                                            (!f.length && !l) ||
                                                w ||
                                                (e.attributes = {
                                                    style: "height: 0px;",
                                                }),
                                                x.childNodes.push(e);
                                        }
                                    }
                                    return (
                                        y.forEach((t) => x.childNodes.push(t)),
                                        N.forEach((t) => x.childNodes.push(t)),
                                        !1 !== b &&
                                            (x.attributes.tabindex = String(b)),
                                        x
                                    );
                                };
                            "undefined" != typeof globalThis
                                ? globalThis
                                : "undefined" != typeof window
                                ? window
                                : "undefined" != typeof global
                                ? global
                                : "undefined" != typeof self && self;
                            function F(t) {
                                return t &&
                                    t.__esModule &&
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        "default"
                                    )
                                    ? t.default
                                    : t;
                            }
                            var B = { exports: {} },
                                z = F(
                                    (B.exports = (function () {
                                        var t = 1e3,
                                            e = 6e4,
                                            s = 36e5,
                                            i = "millisecond",
                                            n = "second",
                                            a = "minute",
                                            o = "hour",
                                            r = "day",
                                            l = "week",
                                            d = "month",
                                            c = "quarter",
                                            h = "year",
                                            u = "date",
                                            p = "Invalid Date",
                                            f =
                                                /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                                            m =
                                                /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                                            g = {
                                                name: "en",
                                                weekdays:
                                                    "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                                                        "_"
                                                    ),
                                                months: "January_February_March_April_May_June_July_August_September_October_November_December".split(
                                                    "_"
                                                ),
                                                ordinal: function (t) {
                                                    var e = [
                                                            "th",
                                                            "st",
                                                            "nd",
                                                            "rd",
                                                        ],
                                                        s = t % 100;
                                                    return (
                                                        "[" +
                                                        t +
                                                        (e[(s - 20) % 10] ||
                                                            e[s] ||
                                                            e[0]) +
                                                        "]"
                                                    );
                                                },
                                            },
                                            b = function (t, e, s) {
                                                var i = String(t);
                                                return !i || i.length >= e
                                                    ? t
                                                    : "" +
                                                          Array(
                                                              e + 1 - i.length
                                                          ).join(s) +
                                                          t;
                                            },
                                            v = {
                                                s: b,
                                                z: function (t) {
                                                    var e = -t.utcOffset(),
                                                        s = Math.abs(e),
                                                        i = Math.floor(s / 60),
                                                        n = s % 60;
                                                    return (
                                                        (e <= 0 ? "+" : "-") +
                                                        b(i, 2, "0") +
                                                        ":" +
                                                        b(n, 2, "0")
                                                    );
                                                },
                                                m: function t(e, s) {
                                                    if (e.date() < s.date())
                                                        return -t(s, e);
                                                    var i =
                                                            12 *
                                                                (s.year() -
                                                                    e.year()) +
                                                            (s.month() -
                                                                e.month()),
                                                        n = e.clone().add(i, d),
                                                        a = s - n < 0,
                                                        o = e
                                                            .clone()
                                                            .add(
                                                                i +
                                                                    (a
                                                                        ? -1
                                                                        : 1),
                                                                d
                                                            );
                                                    return +(
                                                        -(
                                                            i +
                                                            (s - n) /
                                                                (a
                                                                    ? n - o
                                                                    : o - n)
                                                        ) || 0
                                                    );
                                                },
                                                a: function (t) {
                                                    return t < 0
                                                        ? Math.ceil(t) || 0
                                                        : Math.floor(t);
                                                },
                                                p: function (t) {
                                                    return (
                                                        {
                                                            M: d,
                                                            y: h,
                                                            w: l,
                                                            d: r,
                                                            D: u,
                                                            h: o,
                                                            m: a,
                                                            s: n,
                                                            ms: i,
                                                            Q: c,
                                                        }[t] ||
                                                        String(t || "")
                                                            .toLowerCase()
                                                            .replace(/s$/, "")
                                                    );
                                                },
                                                u: function (t) {
                                                    return void 0 === t;
                                                },
                                            },
                                            w = "en",
                                            _ = {};
                                        _[w] = g;
                                        var y = "$isDayjsObject",
                                            N = function (t) {
                                                return (
                                                    t instanceof O ||
                                                    !(!t || !t[y])
                                                );
                                            },
                                            x = function t(e, s, i) {
                                                var n;
                                                if (!e) return w;
                                                if ("string" == typeof e) {
                                                    var a = e.toLowerCase();
                                                    _[a] && (n = a),
                                                        s &&
                                                            ((_[a] = s),
                                                            (n = a));
                                                    var o = e.split("-");
                                                    if (!n && o.length > 1)
                                                        return t(o[0]);
                                                } else {
                                                    var r = e.name;
                                                    (_[r] = e), (n = r);
                                                }
                                                return (
                                                    !i && n && (w = n),
                                                    n || (!i && w)
                                                );
                                            },
                                            D = function (t, e) {
                                                if (N(t)) return t.clone();
                                                var s =
                                                    "object" == typeof e
                                                        ? e
                                                        : {};
                                                return (
                                                    (s.date = t),
                                                    (s.args = arguments),
                                                    new O(s)
                                                );
                                            },
                                            M = v;
                                        (M.l = x),
                                            (M.i = N),
                                            (M.w = function (t, e) {
                                                return D(t, {
                                                    locale: e.$L,
                                                    utc: e.$u,
                                                    x: e.$x,
                                                    $offset: e.$offset,
                                                });
                                            });
                                        var O = (function () {
                                                function g(t) {
                                                    (this.$L = x(
                                                        t.locale,
                                                        null,
                                                        !0
                                                    )),
                                                        this.parse(t),
                                                        (this.$x =
                                                            this.$x ||
                                                            t.x ||
                                                            {}),
                                                        (this[y] = !0);
                                                }
                                                var b = g.prototype;
                                                return (
                                                    (b.parse = function (t) {
                                                        (this.$d = (function (
                                                            t
                                                        ) {
                                                            var e = t.date,
                                                                s = t.utc;
                                                            if (null === e)
                                                                return new Date(
                                                                    NaN
                                                                );
                                                            if (M.u(e))
                                                                return new Date();
                                                            if (
                                                                e instanceof
                                                                Date
                                                            )
                                                                return new Date(
                                                                    e
                                                                );
                                                            if (
                                                                "string" ==
                                                                    typeof e &&
                                                                !/Z$/i.test(e)
                                                            ) {
                                                                var i =
                                                                    e.match(f);
                                                                if (i) {
                                                                    var n =
                                                                            i[2] -
                                                                                1 ||
                                                                            0,
                                                                        a = (
                                                                            i[7] ||
                                                                            "0"
                                                                        ).substring(
                                                                            0,
                                                                            3
                                                                        );
                                                                    return s
                                                                        ? new Date(
                                                                              Date.UTC(
                                                                                  i[1],
                                                                                  n,
                                                                                  i[3] ||
                                                                                      1,
                                                                                  i[4] ||
                                                                                      0,
                                                                                  i[5] ||
                                                                                      0,
                                                                                  i[6] ||
                                                                                      0,
                                                                                  a
                                                                              )
                                                                          )
                                                                        : new Date(
                                                                              i[1],
                                                                              n,
                                                                              i[3] ||
                                                                                  1,
                                                                              i[4] ||
                                                                                  0,
                                                                              i[5] ||
                                                                                  0,
                                                                              i[6] ||
                                                                                  0,
                                                                              a
                                                                          );
                                                                }
                                                            }
                                                            return new Date(e);
                                                        })(t)),
                                                            this.init();
                                                    }),
                                                    (b.init = function () {
                                                        var t = this.$d;
                                                        (this.$y =
                                                            t.getFullYear()),
                                                            (this.$M =
                                                                t.getMonth()),
                                                            (this.$D =
                                                                t.getDate()),
                                                            (this.$W =
                                                                t.getDay()),
                                                            (this.$H =
                                                                t.getHours()),
                                                            (this.$m =
                                                                t.getMinutes()),
                                                            (this.$s =
                                                                t.getSeconds()),
                                                            (this.$ms =
                                                                t.getMilliseconds());
                                                    }),
                                                    (b.$utils = function () {
                                                        return M;
                                                    }),
                                                    (b.isValid = function () {
                                                        return !(
                                                            this.$d.toString() ===
                                                            p
                                                        );
                                                    }),
                                                    (b.isSame = function (
                                                        t,
                                                        e
                                                    ) {
                                                        var s = D(t);
                                                        return (
                                                            this.startOf(e) <=
                                                                s &&
                                                            s <= this.endOf(e)
                                                        );
                                                    }),
                                                    (b.isAfter = function (
                                                        t,
                                                        e
                                                    ) {
                                                        return (
                                                            D(t) <
                                                            this.startOf(e)
                                                        );
                                                    }),
                                                    (b.isBefore = function (
                                                        t,
                                                        e
                                                    ) {
                                                        return (
                                                            this.endOf(e) < D(t)
                                                        );
                                                    }),
                                                    (b.$g = function (t, e, s) {
                                                        return M.u(t)
                                                            ? this[e]
                                                            : this.set(s, t);
                                                    }),
                                                    (b.unix = function () {
                                                        return Math.floor(
                                                            this.valueOf() / 1e3
                                                        );
                                                    }),
                                                    (b.valueOf = function () {
                                                        return this.$d.getTime();
                                                    }),
                                                    (b.startOf = function (
                                                        t,
                                                        e
                                                    ) {
                                                        var s = this,
                                                            i = !!M.u(e) || e,
                                                            c = M.p(t),
                                                            p = function (
                                                                t,
                                                                e
                                                            ) {
                                                                var n = M.w(
                                                                    s.$u
                                                                        ? Date.UTC(
                                                                              s.$y,
                                                                              e,
                                                                              t
                                                                          )
                                                                        : new Date(
                                                                              s.$y,
                                                                              e,
                                                                              t
                                                                          ),
                                                                    s
                                                                );
                                                                return i
                                                                    ? n
                                                                    : n.endOf(
                                                                          r
                                                                      );
                                                            },
                                                            f = function (
                                                                t,
                                                                e
                                                            ) {
                                                                return M.w(
                                                                    s
                                                                        .toDate()
                                                                        [
                                                                            t
                                                                        ].apply(
                                                                            s.toDate(
                                                                                "s"
                                                                            ),
                                                                            (i
                                                                                ? [
                                                                                      0,
                                                                                      0,
                                                                                      0,
                                                                                      0,
                                                                                  ]
                                                                                : [
                                                                                      23,
                                                                                      59,
                                                                                      59,
                                                                                      999,
                                                                                  ]
                                                                            ).slice(
                                                                                e
                                                                            )
                                                                        ),
                                                                    s
                                                                );
                                                            },
                                                            m = this.$W,
                                                            g = this.$M,
                                                            b = this.$D,
                                                            v =
                                                                "set" +
                                                                (this.$u
                                                                    ? "UTC"
                                                                    : "");
                                                        switch (c) {
                                                            case h:
                                                                return i
                                                                    ? p(1, 0)
                                                                    : p(31, 11);
                                                            case d:
                                                                return i
                                                                    ? p(1, g)
                                                                    : p(
                                                                          0,
                                                                          g + 1
                                                                      );
                                                            case l:
                                                                var w =
                                                                        this.$locale()
                                                                            .weekStart ||
                                                                        0,
                                                                    _ =
                                                                        (m < w
                                                                            ? m +
                                                                              7
                                                                            : m) -
                                                                        w;
                                                                return p(
                                                                    i
                                                                        ? b - _
                                                                        : b +
                                                                              (6 -
                                                                                  _),
                                                                    g
                                                                );
                                                            case r:
                                                            case u:
                                                                return f(
                                                                    v + "Hours",
                                                                    0
                                                                );
                                                            case o:
                                                                return f(
                                                                    v +
                                                                        "Minutes",
                                                                    1
                                                                );
                                                            case a:
                                                                return f(
                                                                    v +
                                                                        "Seconds",
                                                                    2
                                                                );
                                                            case n:
                                                                return f(
                                                                    v +
                                                                        "Milliseconds",
                                                                    3
                                                                );
                                                            default:
                                                                return this.clone();
                                                        }
                                                    }),
                                                    (b.endOf = function (t) {
                                                        return this.startOf(
                                                            t,
                                                            !1
                                                        );
                                                    }),
                                                    (b.$set = function (t, e) {
                                                        var s,
                                                            l = M.p(t),
                                                            c =
                                                                "set" +
                                                                (this.$u
                                                                    ? "UTC"
                                                                    : ""),
                                                            p = ((s = {}),
                                                            (s[r] = c + "Date"),
                                                            (s[u] = c + "Date"),
                                                            (s[d] =
                                                                c + "Month"),
                                                            (s[h] =
                                                                c + "FullYear"),
                                                            (s[o] =
                                                                c + "Hours"),
                                                            (s[a] =
                                                                c + "Minutes"),
                                                            (s[n] =
                                                                c + "Seconds"),
                                                            (s[i] =
                                                                c +
                                                                "Milliseconds"),
                                                            s)[l],
                                                            f =
                                                                l === r
                                                                    ? this.$D +
                                                                      (e -
                                                                          this
                                                                              .$W)
                                                                    : e;
                                                        if (
                                                            l === d ||
                                                            l === h
                                                        ) {
                                                            var m =
                                                                this.clone().set(
                                                                    u,
                                                                    1
                                                                );
                                                            m.$d[p](f),
                                                                m.init(),
                                                                (this.$d =
                                                                    m.set(
                                                                        u,
                                                                        Math.min(
                                                                            this
                                                                                .$D,
                                                                            m.daysInMonth()
                                                                        )
                                                                    ).$d);
                                                        } else
                                                            p && this.$d[p](f);
                                                        return (
                                                            this.init(), this
                                                        );
                                                    }),
                                                    (b.set = function (t, e) {
                                                        return this.clone().$set(
                                                            t,
                                                            e
                                                        );
                                                    }),
                                                    (b.get = function (t) {
                                                        return this[M.p(t)]();
                                                    }),
                                                    (b.add = function (i, c) {
                                                        var u,
                                                            p = this;
                                                        i = Number(i);
                                                        var f = M.p(c),
                                                            m = function (t) {
                                                                var e = D(p);
                                                                return M.w(
                                                                    e.date(
                                                                        e.date() +
                                                                            Math.round(
                                                                                t *
                                                                                    i
                                                                            )
                                                                    ),
                                                                    p
                                                                );
                                                            };
                                                        if (f === d)
                                                            return this.set(
                                                                d,
                                                                this.$M + i
                                                            );
                                                        if (f === h)
                                                            return this.set(
                                                                h,
                                                                this.$y + i
                                                            );
                                                        if (f === r)
                                                            return m(1);
                                                        if (f === l)
                                                            return m(7);
                                                        var g =
                                                                ((u = {}),
                                                                (u[a] = e),
                                                                (u[o] = s),
                                                                (u[n] = t),
                                                                u)[f] || 1,
                                                            b =
                                                                this.$d.getTime() +
                                                                i * g;
                                                        return M.w(b, this);
                                                    }),
                                                    (b.subtract = function (
                                                        t,
                                                        e
                                                    ) {
                                                        return this.add(
                                                            -1 * t,
                                                            e
                                                        );
                                                    }),
                                                    (b.format = function (t) {
                                                        var e = this,
                                                            s = this.$locale();
                                                        if (!this.isValid())
                                                            return (
                                                                s.invalidDate ||
                                                                p
                                                            );
                                                        var i =
                                                                t ||
                                                                "YYYY-MM-DDTHH:mm:ssZ",
                                                            n = M.z(this),
                                                            a = this.$H,
                                                            o = this.$m,
                                                            r = this.$M,
                                                            l = s.weekdays,
                                                            d = s.months,
                                                            c = s.meridiem,
                                                            h = function (
                                                                t,
                                                                s,
                                                                n,
                                                                a
                                                            ) {
                                                                return (
                                                                    (t &&
                                                                        (t[s] ||
                                                                            t(
                                                                                e,
                                                                                i
                                                                            ))) ||
                                                                    n[s].slice(
                                                                        0,
                                                                        a
                                                                    )
                                                                );
                                                            },
                                                            u = function (t) {
                                                                return M.s(
                                                                    a % 12 ||
                                                                        12,
                                                                    t,
                                                                    "0"
                                                                );
                                                            },
                                                            f =
                                                                c ||
                                                                function (
                                                                    t,
                                                                    e,
                                                                    s
                                                                ) {
                                                                    var i =
                                                                        t < 12
                                                                            ? "AM"
                                                                            : "PM";
                                                                    return s
                                                                        ? i.toLowerCase()
                                                                        : i;
                                                                };
                                                        return i.replace(
                                                            m,
                                                            function (t, i) {
                                                                return (
                                                                    i ||
                                                                    (function (
                                                                        t
                                                                    ) {
                                                                        switch (
                                                                            t
                                                                        ) {
                                                                            case "YY":
                                                                                return String(
                                                                                    e.$y
                                                                                ).slice(
                                                                                    -2
                                                                                );
                                                                            case "YYYY":
                                                                                return M.s(
                                                                                    e.$y,
                                                                                    4,
                                                                                    "0"
                                                                                );
                                                                            case "M":
                                                                                return (
                                                                                    r +
                                                                                    1
                                                                                );
                                                                            case "MM":
                                                                                return M.s(
                                                                                    r +
                                                                                        1,
                                                                                    2,
                                                                                    "0"
                                                                                );
                                                                            case "MMM":
                                                                                return h(
                                                                                    s.monthsShort,
                                                                                    r,
                                                                                    d,
                                                                                    3
                                                                                );
                                                                            case "MMMM":
                                                                                return h(
                                                                                    d,
                                                                                    r
                                                                                );
                                                                            case "D":
                                                                                return e.$D;
                                                                            case "DD":
                                                                                return M.s(
                                                                                    e.$D,
                                                                                    2,
                                                                                    "0"
                                                                                );
                                                                            case "d":
                                                                                return String(
                                                                                    e.$W
                                                                                );
                                                                            case "dd":
                                                                                return h(
                                                                                    s.weekdaysMin,
                                                                                    e.$W,
                                                                                    l,
                                                                                    2
                                                                                );
                                                                            case "ddd":
                                                                                return h(
                                                                                    s.weekdaysShort,
                                                                                    e.$W,
                                                                                    l,
                                                                                    3
                                                                                );
                                                                            case "dddd":
                                                                                return l[
                                                                                    e
                                                                                        .$W
                                                                                ];
                                                                            case "H":
                                                                                return String(
                                                                                    a
                                                                                );
                                                                            case "HH":
                                                                                return M.s(
                                                                                    a,
                                                                                    2,
                                                                                    "0"
                                                                                );
                                                                            case "h":
                                                                                return u(
                                                                                    1
                                                                                );
                                                                            case "hh":
                                                                                return u(
                                                                                    2
                                                                                );
                                                                            case "a":
                                                                                return f(
                                                                                    a,
                                                                                    o,
                                                                                    !0
                                                                                );
                                                                            case "A":
                                                                                return f(
                                                                                    a,
                                                                                    o,
                                                                                    !1
                                                                                );
                                                                            case "m":
                                                                                return String(
                                                                                    o
                                                                                );
                                                                            case "mm":
                                                                                return M.s(
                                                                                    o,
                                                                                    2,
                                                                                    "0"
                                                                                );
                                                                            case "s":
                                                                                return String(
                                                                                    e.$s
                                                                                );
                                                                            case "ss":
                                                                                return M.s(
                                                                                    e.$s,
                                                                                    2,
                                                                                    "0"
                                                                                );
                                                                            case "SSS":
                                                                                return M.s(
                                                                                    e.$ms,
                                                                                    3,
                                                                                    "0"
                                                                                );
                                                                            case "Z":
                                                                                return n;
                                                                        }
                                                                        return null;
                                                                    })(t) ||
                                                                    n.replace(
                                                                        ":",
                                                                        ""
                                                                    )
                                                                );
                                                            }
                                                        );
                                                    }),
                                                    (b.utcOffset = function () {
                                                        return (
                                                            15 *
                                                            -Math.round(
                                                                this.$d.getTimezoneOffset() /
                                                                    15
                                                            )
                                                        );
                                                    }),
                                                    (b.diff = function (
                                                        i,
                                                        u,
                                                        p
                                                    ) {
                                                        var f,
                                                            m = this,
                                                            g = M.p(u),
                                                            b = D(i),
                                                            v =
                                                                (b.utcOffset() -
                                                                    this.utcOffset()) *
                                                                e,
                                                            w = this - b,
                                                            _ = function () {
                                                                return M.m(
                                                                    m,
                                                                    b
                                                                );
                                                            };
                                                        switch (g) {
                                                            case h:
                                                                f = _() / 12;
                                                                break;
                                                            case d:
                                                                f = _();
                                                                break;
                                                            case c:
                                                                f = _() / 3;
                                                                break;
                                                            case l:
                                                                f =
                                                                    (w - v) /
                                                                    6048e5;
                                                                break;
                                                            case r:
                                                                f =
                                                                    (w - v) /
                                                                    864e5;
                                                                break;
                                                            case o:
                                                                f = w / s;
                                                                break;
                                                            case a:
                                                                f = w / e;
                                                                break;
                                                            case n:
                                                                f = w / t;
                                                                break;
                                                            default:
                                                                f = w;
                                                        }
                                                        return p ? f : M.a(f);
                                                    }),
                                                    (b.daysInMonth =
                                                        function () {
                                                            return this.endOf(d)
                                                                .$D;
                                                        }),
                                                    (b.$locale = function () {
                                                        return _[this.$L];
                                                    }),
                                                    (b.locale = function (
                                                        t,
                                                        e
                                                    ) {
                                                        if (!t) return this.$L;
                                                        var s = this.clone(),
                                                            i = x(t, e, !0);
                                                        return (
                                                            i && (s.$L = i), s
                                                        );
                                                    }),
                                                    (b.clone = function () {
                                                        return M.w(
                                                            this.$d,
                                                            this
                                                        );
                                                    }),
                                                    (b.toDate = function () {
                                                        return new Date(
                                                            this.valueOf()
                                                        );
                                                    }),
                                                    (b.toJSON = function () {
                                                        return this.isValid()
                                                            ? this.toISOString()
                                                            : null;
                                                    }),
                                                    (b.toISOString =
                                                        function () {
                                                            return this.$d.toISOString();
                                                        }),
                                                    (b.toString = function () {
                                                        return this.$d.toUTCString();
                                                    }),
                                                    g
                                                );
                                            })(),
                                            E = O.prototype;
                                        return (
                                            (D.prototype = E),
                                            [
                                                ["$ms", i],
                                                ["$s", n],
                                                ["$m", a],
                                                ["$H", o],
                                                ["$W", r],
                                                ["$M", d],
                                                ["$y", h],
                                                ["$D", u],
                                            ].forEach(function (t) {
                                                E[t[1]] = function (e) {
                                                    return this.$g(
                                                        e,
                                                        t[0],
                                                        t[1]
                                                    );
                                                };
                                            }),
                                            (D.extend = function (t, e) {
                                                return (
                                                    t.$i ||
                                                        (t(e, O, D),
                                                        (t.$i = !0)),
                                                    D
                                                );
                                            }),
                                            (D.locale = x),
                                            (D.isDayjs = N),
                                            (D.unix = function (t) {
                                                return D(1e3 * t);
                                            }),
                                            (D.en = _[w]),
                                            (D.Ls = _),
                                            (D.p = {}),
                                            D
                                        );
                                    })())
                                ),
                                U = { exports: {} },
                                J = F(
                                    (U.exports = (function () {
                                        var t = {
                                                LTS: "h:mm:ss A",
                                                LT: "h:mm A",
                                                L: "MM/DD/YYYY",
                                                LL: "MMMM D, YYYY",
                                                LLL: "MMMM D, YYYY h:mm A",
                                                LLLL: "dddd, MMMM D, YYYY h:mm A",
                                            },
                                            e =
                                                /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
                                            s = /\d\d/,
                                            i = /\d\d?/,
                                            n = /\d*[^-_:/,()\s\d]+/,
                                            a = {},
                                            o = function (t) {
                                                return (
                                                    (t = +t) +
                                                    (t > 68 ? 1900 : 2e3)
                                                );
                                            },
                                            r = function (t) {
                                                return function (e) {
                                                    this[t] = +e;
                                                };
                                            },
                                            l = [
                                                /[+-]\d\d:?(\d\d)?|Z/,
                                                function (t) {
                                                    (
                                                        this.zone ||
                                                        (this.zone = {})
                                                    ).offset = (function (t) {
                                                        if (!t) return 0;
                                                        if ("Z" === t) return 0;
                                                        var e =
                                                                t.match(
                                                                    /([+-]|\d\d)/g
                                                                ),
                                                            s =
                                                                60 * e[1] +
                                                                (+e[2] || 0);
                                                        return 0 === s
                                                            ? 0
                                                            : "+" === e[0]
                                                            ? -s
                                                            : s;
                                                    })(t);
                                                },
                                            ],
                                            d = function (t) {
                                                var e = a[t];
                                                return (
                                                    e &&
                                                    (e.indexOf
                                                        ? e
                                                        : e.s.concat(e.f))
                                                );
                                            },
                                            c = function (t, e) {
                                                var s,
                                                    i = a.meridiem;
                                                if (i) {
                                                    for (
                                                        var n = 1;
                                                        n <= 24;
                                                        n += 1
                                                    )
                                                        if (
                                                            t.indexOf(
                                                                i(n, 0, e)
                                                            ) > -1
                                                        ) {
                                                            s = n > 12;
                                                            break;
                                                        }
                                                } else
                                                    s = t === (e ? "pm" : "PM");
                                                return s;
                                            },
                                            h = {
                                                A: [
                                                    n,
                                                    function (t) {
                                                        this.afternoon = c(
                                                            t,
                                                            !1
                                                        );
                                                    },
                                                ],
                                                a: [
                                                    n,
                                                    function (t) {
                                                        this.afternoon = c(
                                                            t,
                                                            !0
                                                        );
                                                    },
                                                ],
                                                S: [
                                                    /\d/,
                                                    function (t) {
                                                        this.milliseconds =
                                                            100 * +t;
                                                    },
                                                ],
                                                SS: [
                                                    s,
                                                    function (t) {
                                                        this.milliseconds =
                                                            10 * +t;
                                                    },
                                                ],
                                                SSS: [
                                                    /\d{3}/,
                                                    function (t) {
                                                        this.milliseconds = +t;
                                                    },
                                                ],
                                                s: [i, r("seconds")],
                                                ss: [i, r("seconds")],
                                                m: [i, r("minutes")],
                                                mm: [i, r("minutes")],
                                                H: [i, r("hours")],
                                                h: [i, r("hours")],
                                                HH: [i, r("hours")],
                                                hh: [i, r("hours")],
                                                D: [i, r("day")],
                                                DD: [s, r("day")],
                                                Do: [
                                                    n,
                                                    function (t) {
                                                        var e = a.ordinal,
                                                            s = t.match(/\d+/);
                                                        if (
                                                            ((this.day = s[0]),
                                                            e)
                                                        )
                                                            for (
                                                                var i = 1;
                                                                i <= 31;
                                                                i += 1
                                                            )
                                                                e(i).replace(
                                                                    /\[|\]/g,
                                                                    ""
                                                                ) === t &&
                                                                    (this.day =
                                                                        i);
                                                    },
                                                ],
                                                M: [i, r("month")],
                                                MM: [s, r("month")],
                                                MMM: [
                                                    n,
                                                    function (t) {
                                                        var e = d("months"),
                                                            s =
                                                                (
                                                                    d(
                                                                        "monthsShort"
                                                                    ) ||
                                                                    e.map(
                                                                        function (
                                                                            t
                                                                        ) {
                                                                            return t.slice(
                                                                                0,
                                                                                3
                                                                            );
                                                                        }
                                                                    )
                                                                ).indexOf(t) +
                                                                1;
                                                        if (s < 1)
                                                            throw new Error();
                                                        this.month =
                                                            s % 12 || s;
                                                    },
                                                ],
                                                MMMM: [
                                                    n,
                                                    function (t) {
                                                        var e =
                                                            d("months").indexOf(
                                                                t
                                                            ) + 1;
                                                        if (e < 1)
                                                            throw new Error();
                                                        this.month =
                                                            e % 12 || e;
                                                    },
                                                ],
                                                Y: [/[+-]?\d+/, r("year")],
                                                YY: [
                                                    s,
                                                    function (t) {
                                                        this.year = o(t);
                                                    },
                                                ],
                                                YYYY: [/\d{4}/, r("year")],
                                                Z: l,
                                                ZZ: l,
                                            };
                                        function u(s) {
                                            var i, n;
                                            (i = s), (n = a && a.formats);
                                            for (
                                                var o = (s = i.replace(
                                                        /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
                                                        function (e, s, i) {
                                                            var a =
                                                                i &&
                                                                i.toUpperCase();
                                                            return (
                                                                s ||
                                                                n[i] ||
                                                                t[i] ||
                                                                n[a].replace(
                                                                    /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                                                                    function (
                                                                        t,
                                                                        e,
                                                                        s
                                                                    ) {
                                                                        return (
                                                                            e ||
                                                                            s.slice(
                                                                                1
                                                                            )
                                                                        );
                                                                    }
                                                                )
                                                            );
                                                        }
                                                    )).match(e),
                                                    r = o.length,
                                                    l = 0;
                                                l < r;
                                                l += 1
                                            ) {
                                                var d = o[l],
                                                    c = h[d],
                                                    u = c && c[0],
                                                    p = c && c[1];
                                                o[l] = p
                                                    ? { regex: u, parser: p }
                                                    : d.replace(/^\[|\]$/g, "");
                                            }
                                            return function (t) {
                                                for (
                                                    var e = {}, s = 0, i = 0;
                                                    s < r;
                                                    s += 1
                                                ) {
                                                    var n = o[s];
                                                    if ("string" == typeof n)
                                                        i += n.length;
                                                    else {
                                                        var a = n.regex,
                                                            l = n.parser,
                                                            d = t.slice(i),
                                                            c = a.exec(d)[0];
                                                        l.call(e, c),
                                                            (t = t.replace(
                                                                c,
                                                                ""
                                                            ));
                                                    }
                                                }
                                                return (
                                                    (function (t) {
                                                        var e = t.afternoon;
                                                        if (void 0 !== e) {
                                                            var s = t.hours;
                                                            e
                                                                ? s < 12 &&
                                                                  (t.hours += 12)
                                                                : 12 === s &&
                                                                  (t.hours = 0),
                                                                delete t.afternoon;
                                                        }
                                                    })(e),
                                                    e
                                                );
                                            };
                                        }
                                        return function (t, e, s) {
                                            (s.p.customParseFormat = !0),
                                                t &&
                                                    t.parseTwoDigitYear &&
                                                    (o = t.parseTwoDigitYear);
                                            var i = e.prototype,
                                                n = i.parse;
                                            i.parse = function (t) {
                                                var e = t.date,
                                                    i = t.utc,
                                                    o = t.args;
                                                this.$u = i;
                                                var r = o[1];
                                                if ("string" == typeof r) {
                                                    var l = !0 === o[2],
                                                        d = !0 === o[3],
                                                        c = l || d,
                                                        h = o[2];
                                                    d && (h = o[2]),
                                                        (a = this.$locale()),
                                                        !l &&
                                                            h &&
                                                            (a = s.Ls[h]),
                                                        (this.$d = (function (
                                                            t,
                                                            e,
                                                            s
                                                        ) {
                                                            try {
                                                                if (
                                                                    [
                                                                        "x",
                                                                        "X",
                                                                    ].indexOf(
                                                                        e
                                                                    ) > -1
                                                                )
                                                                    return new Date(
                                                                        ("X" ===
                                                                        e
                                                                            ? 1e3
                                                                            : 1) *
                                                                            t
                                                                    );
                                                                var i = u(e)(t),
                                                                    n = i.year,
                                                                    a = i.month,
                                                                    o = i.day,
                                                                    r = i.hours,
                                                                    l =
                                                                        i.minutes,
                                                                    d =
                                                                        i.seconds,
                                                                    c =
                                                                        i.milliseconds,
                                                                    h = i.zone,
                                                                    p =
                                                                        new Date(),
                                                                    f =
                                                                        o ||
                                                                        (n || a
                                                                            ? 1
                                                                            : p.getDate()),
                                                                    m =
                                                                        n ||
                                                                        p.getFullYear(),
                                                                    g = 0;
                                                                (n && !a) ||
                                                                    (g =
                                                                        a > 0
                                                                            ? a -
                                                                              1
                                                                            : p.getMonth());
                                                                var b = r || 0,
                                                                    v = l || 0,
                                                                    w = d || 0,
                                                                    _ = c || 0;
                                                                return h
                                                                    ? new Date(
                                                                          Date.UTC(
                                                                              m,
                                                                              g,
                                                                              f,
                                                                              b,
                                                                              v,
                                                                              w,
                                                                              _ +
                                                                                  60 *
                                                                                      h.offset *
                                                                                      1e3
                                                                          )
                                                                      )
                                                                    : s
                                                                    ? new Date(
                                                                          Date.UTC(
                                                                              m,
                                                                              g,
                                                                              f,
                                                                              b,
                                                                              v,
                                                                              w,
                                                                              _
                                                                          )
                                                                      )
                                                                    : new Date(
                                                                          m,
                                                                          g,
                                                                          f,
                                                                          b,
                                                                          v,
                                                                          w,
                                                                          _
                                                                      );
                                                            } catch (t) {
                                                                return new Date(
                                                                    ""
                                                                );
                                                            }
                                                        })(e, r, i)),
                                                        this.init(),
                                                        h &&
                                                            !0 !== h &&
                                                            (this.$L =
                                                                this.locale(
                                                                    h
                                                                ).$L),
                                                        c &&
                                                            e !=
                                                                this.format(
                                                                    r
                                                                ) &&
                                                            (this.$d = new Date(
                                                                ""
                                                            )),
                                                        (a = {});
                                                } else if (r instanceof Array)
                                                    for (
                                                        var p = r.length, f = 1;
                                                        f <= p;
                                                        f += 1
                                                    ) {
                                                        o[1] = r[f - 1];
                                                        var m = s.apply(
                                                            this,
                                                            o
                                                        );
                                                        if (m.isValid()) {
                                                            (this.$d = m.$d),
                                                                (this.$L =
                                                                    m.$L),
                                                                this.init();
                                                            break;
                                                        }
                                                        f === p &&
                                                            (this.$d = new Date(
                                                                ""
                                                            ));
                                                    }
                                                else n.call(this, t);
                                            };
                                        };
                                    })())
                                );
                            z.extend(J);
                            const W = (t, e) => {
                                    let s;
                                    if (e)
                                        switch (e) {
                                            case "ISO_8601":
                                                s = t;
                                                break;
                                            case "RFC_2822":
                                                s = z(
                                                    t.slice(5),
                                                    "DD MMM YYYY HH:mm:ss ZZ"
                                                ).unix();
                                                break;
                                            case "MYSQL":
                                                s = z(
                                                    t,
                                                    "YYYY-MM-DD hh:mm:ss"
                                                ).unix();
                                                break;
                                            case "UNIX":
                                                s = z(t).unix();
                                                break;
                                            default:
                                                s = z(t, e, !0).valueOf();
                                        }
                                    return s;
                                },
                                Q = (t, e) => {
                                    if (
                                        t?.constructor === Object &&
                                        Object.prototype.hasOwnProperty.call(
                                            t,
                                            "data"
                                        ) &&
                                        !Object.keys(t).find(
                                            (t) =>
                                                ![
                                                    "text",
                                                    "order",
                                                    "data",
                                                    "attributes",
                                                ].includes(t)
                                        )
                                    )
                                        return t;
                                    const s = { data: t };
                                    switch (e.type) {
                                        case "string":
                                            "string" != typeof t &&
                                                ((s.text = String(s.data)),
                                                (s.order = s.text));
                                            break;
                                        case "date":
                                            e.format &&
                                                (s.order = W(
                                                    String(s.data),
                                                    e.format
                                                ));
                                            break;
                                        case "number":
                                            (s.text = String(s.data)),
                                                (s.data = parseInt(s.data, 10));
                                            break;
                                        case "html": {
                                            const t = Array.isArray(s.data)
                                                ? {
                                                      nodeName: "TD",
                                                      childNodes: s.data,
                                                  }
                                                : R(
                                                      `<td>${String(
                                                          s.data
                                                      )}</td>`
                                                  );
                                            s.data = t.childNodes || [];
                                            const e = i(t);
                                            (s.text = e), (s.order = e);
                                            break;
                                        }
                                        case "boolean":
                                            "string" == typeof s.data &&
                                                (s.data = s.data
                                                    .toLowerCase()
                                                    .trim()),
                                                (s.data = ![
                                                    "false",
                                                    !1,
                                                    null,
                                                    void 0,
                                                    0,
                                                ].includes(s.data)),
                                                (s.order = s.data ? 1 : 0),
                                                (s.text = String(s.data));
                                            break;
                                        case "other":
                                            (s.text = ""), (s.order = 0);
                                            break;
                                        default:
                                            s.text = JSON.stringify(s.data);
                                    }
                                    return s;
                                },
                                X = (t) => {
                                    if (
                                        t instanceof Object &&
                                        t.constructor === Object &&
                                        t.hasOwnProperty("data") &&
                                        ("string" == typeof t.text ||
                                            "string" == typeof t.data)
                                    )
                                        return t;
                                    const e = { data: t };
                                    if ("string" == typeof t) {
                                        if (t.length) {
                                            const s = R(`<th>${t}</th>`);
                                            if (
                                                s.childNodes &&
                                                (1 !== s.childNodes.length ||
                                                    "#text" !==
                                                        s.childNodes[0]
                                                            .nodeName)
                                            ) {
                                                (e.data = s.childNodes),
                                                    (e.type = "html");
                                                const t = i(s);
                                                e.text = t;
                                            }
                                        }
                                    } else
                                        [null, void 0].includes(t)
                                            ? (e.text = "")
                                            : (e.text = JSON.stringify(t));
                                    return e;
                                },
                                Z = (t, e = void 0, s, n, a) => {
                                    const o = { data: [], headings: [] };
                                    if (t.headings)
                                        o.headings = t.headings.map((t) =>
                                            X(t)
                                        );
                                    else if (e?.tHead)
                                        o.headings = Array.from(
                                            e.tHead.querySelectorAll("th")
                                        ).map((t, e) => {
                                            const o = ((t) => {
                                                const e = S(t, {
                                                    valueDiffing: !1,
                                                });
                                                let s;
                                                return (
                                                    (s =
                                                        !e.childNodes ||
                                                        (1 ===
                                                            e.childNodes
                                                                .length &&
                                                            "#text" ===
                                                                e.childNodes[0]
                                                                    .nodeName)
                                                            ? {
                                                                  data: t.innerText,
                                                                  type: "string",
                                                              }
                                                            : {
                                                                  data: e.childNodes,
                                                                  type: "html",
                                                                  text: i(e),
                                                              }),
                                                    (s.attributes =
                                                        e.attributes),
                                                    s
                                                );
                                            })(t);
                                            s[e] ||
                                                (s[e] = {
                                                    type: n,
                                                    format: a,
                                                    searchable: !0,
                                                    sortable: !0,
                                                });
                                            const r = s[e];
                                            return (
                                                ("false" !==
                                                    t.dataset.sortable
                                                        ?.trim()
                                                        .toLowerCase() &&
                                                    "false" !==
                                                        t.dataset.sort
                                                            ?.trim()
                                                            .toLowerCase()) ||
                                                    (r.sortable = !1),
                                                "false" ===
                                                    t.dataset.searchable
                                                        ?.trim()
                                                        .toLowerCase() &&
                                                    (r.searchable = !1),
                                                ("true" !==
                                                    t.dataset.hidden
                                                        ?.trim()
                                                        .toLowerCase() &&
                                                    "true" !==
                                                        t
                                                            .getAttribute(
                                                                "hidden"
                                                            )
                                                            ?.trim()
                                                            .toLowerCase()) ||
                                                    (r.hidden = !0),
                                                [
                                                    "number",
                                                    "string",
                                                    "html",
                                                    "date",
                                                    "boolean",
                                                    "other",
                                                ].includes(t.dataset.type) &&
                                                    ((r.type = t.dataset.type),
                                                    "date" === r.type &&
                                                        t.dataset.format &&
                                                        (r.format =
                                                            t.dataset.format)),
                                                o
                                            );
                                        });
                                    else if (t.data?.length) {
                                        const e = t.data[0],
                                            s = Array.isArray(e) ? e : e.cells;
                                        o.headings = s.map((t) => X(""));
                                    } else
                                        e?.tBodies.length &&
                                            (o.headings = Array.from(
                                                e.tBodies[0].rows[0].cells
                                            ).map((t) => X("")));
                                    for (let t = 0; t < o.headings.length; t++)
                                        s[t] ||
                                            (s[t] = {
                                                type: n,
                                                format: a,
                                                sortable: !0,
                                                searchable: !0,
                                            });
                                    if (
                                        (t.data
                                            ? (o.data = t.data.map((t) => {
                                                  let e, i;
                                                  return (
                                                      Array.isArray(t)
                                                          ? ((e = {}), (i = t))
                                                          : ((e = t.attributes),
                                                            (i = t.cells)),
                                                      {
                                                          attributes: e,
                                                          cells: i.map((t, e) =>
                                                              Q(t, s[e])
                                                          ),
                                                      }
                                                  );
                                              }))
                                            : e?.tBodies?.length &&
                                              (o.data = Array.from(
                                                  e.tBodies[0].rows
                                              ).map((t) => ({
                                                  attributes: r(t.attributes),
                                                  cells: Array.from(
                                                      t.cells
                                                  ).map((t, e) => {
                                                      const i = t.dataset
                                                          .content
                                                          ? Q(
                                                                t.dataset
                                                                    .content,
                                                                s[e]
                                                            )
                                                          : ((t, e) => {
                                                                let s;
                                                                switch (
                                                                    e.type
                                                                ) {
                                                                    case "string":
                                                                        s = {
                                                                            data: t.innerText,
                                                                        };
                                                                        break;
                                                                    case "date": {
                                                                        const i =
                                                                            t.innerText;
                                                                        s = {
                                                                            data: i,
                                                                            order: W(
                                                                                i,
                                                                                e.format
                                                                            ),
                                                                        };
                                                                        break;
                                                                    }
                                                                    case "number":
                                                                        s = {
                                                                            data: parseInt(
                                                                                t.innerText,
                                                                                10
                                                                            ),
                                                                            text: t.innerText,
                                                                        };
                                                                        break;
                                                                    case "boolean": {
                                                                        const e =
                                                                            ![
                                                                                "false",
                                                                                "0",
                                                                                "null",
                                                                                "undefined",
                                                                            ].includes(
                                                                                t.innerText
                                                                                    .toLowerCase()
                                                                                    .trim()
                                                                            );
                                                                        s = {
                                                                            data: e,
                                                                            text: e
                                                                                ? "1"
                                                                                : "0",
                                                                            order: e
                                                                                ? 1
                                                                                : 0,
                                                                        };
                                                                        break;
                                                                    }
                                                                    default:
                                                                        s = {
                                                                            data:
                                                                                S(
                                                                                    t,
                                                                                    {
                                                                                        valueDiffing:
                                                                                            !1,
                                                                                    }
                                                                                )
                                                                                    .childNodes ||
                                                                                [],
                                                                            text: t.innerText,
                                                                            order: t.innerText,
                                                                        };
                                                                }
                                                                return (
                                                                    (s.attributes =
                                                                        r(
                                                                            t.attributes
                                                                        )),
                                                                    s
                                                                );
                                                            })(t, s[e]);
                                                      return (
                                                          t.dataset.order &&
                                                              (i.order = isNaN(
                                                                  parseFloat(
                                                                      t.dataset
                                                                          .order
                                                                  )
                                                              )
                                                                  ? t.dataset
                                                                        .order
                                                                  : parseFloat(
                                                                        t
                                                                            .dataset
                                                                            .order
                                                                    )),
                                                          i
                                                      );
                                                  }),
                                              }))),
                                        o.data.length &&
                                            o.data[0].cells.length !==
                                                o.headings.length)
                                    )
                                        throw new Error(
                                            "Data heading length mismatch."
                                        );
                                    return o;
                                };
                            class G {
                                constructor(t) {
                                    (this.dt = t), (this.cursor = !1);
                                }
                                setCursor(t = !1) {
                                    if (t === this.cursor) return;
                                    const e = this.cursor;
                                    if (
                                        ((this.cursor = t),
                                        this.dt._renderTable(),
                                        !1 !== t && this.dt.options.scrollY)
                                    ) {
                                        const t = l(
                                                this.dt.options.classes.cursor
                                            ),
                                            e = this.dt.dom.querySelector(
                                                `tr${t}`
                                            );
                                        e &&
                                            e.scrollIntoView({
                                                block: "nearest",
                                            });
                                    }
                                    this.dt.emit(
                                        "datatable.cursormove",
                                        this.cursor,
                                        e
                                    );
                                }
                                add(t) {
                                    if (!Array.isArray(t) || t.length < 1)
                                        return;
                                    const e = {
                                        cells: t.map((t, e) => {
                                            const s =
                                                this.dt.columns.settings[e];
                                            return Q(t, s);
                                        }),
                                    };
                                    this.dt.data.data.push(e),
                                        (this.dt.hasRows = !0),
                                        this.dt.update(!0);
                                }
                                remove(t) {
                                    if (!Array.isArray(t))
                                        return this.remove([t]);
                                    (this.dt.data.data =
                                        this.dt.data.data.filter(
                                            (e, s) => !t.includes(s)
                                        )),
                                        this.dt.data.data.length ||
                                            (this.dt.hasRows = !1),
                                        this.dt.update(!0);
                                }
                                findRowIndex(t, e) {
                                    return this.dt.data.data.findIndex((s) => {
                                        const i = s.cells[t];
                                        return n(i)
                                            .toLowerCase()
                                            .includes(String(e).toLowerCase());
                                    });
                                }
                                findRow(t, e) {
                                    const s = this.findRowIndex(t, e);
                                    if (s < 0)
                                        return {
                                            index: -1,
                                            row: null,
                                            cols: [],
                                        };
                                    const i = this.dt.data.data[s],
                                        n = i.cells.map((t) => t.data);
                                    return { index: s, row: i, cols: n };
                                }
                                updateRow(t, e) {
                                    const s = {
                                        cells: e.map((t, e) => {
                                            const s =
                                                this.dt.columns.settings[e];
                                            return Q(t, s);
                                        }),
                                    };
                                    this.dt.data.data.splice(t, 1, s),
                                        this.dt.update(!0);
                                }
                            }
                            class K {
                                constructor(t) {
                                    (this.dt = t), this.init();
                                }
                                init() {
                                    [this.settings, this._state] = ((
                                        t = [],
                                        e,
                                        s
                                    ) => {
                                        let i = [],
                                            n = !1;
                                        const a = [];
                                        return (
                                            t.forEach((t) => {
                                                (Array.isArray(t.select)
                                                    ? t.select
                                                    : [t.select]
                                                ).forEach((o) => {
                                                    i[o]
                                                        ? t.type &&
                                                          (i[o].type = t.type)
                                                        : (i[o] = {
                                                              type: t.type || e,
                                                              sortable: !0,
                                                              searchable: !0,
                                                          });
                                                    const r = i[o];
                                                    t.render &&
                                                        (r.render = t.render),
                                                        t.format
                                                            ? (r.format =
                                                                  t.format)
                                                            : "date" ===
                                                                  t.type &&
                                                              (r.format = s),
                                                        t.cellClass &&
                                                            (r.cellClass =
                                                                t.cellClass),
                                                        t.headerClass &&
                                                            (r.headerClass =
                                                                t.headerClass),
                                                        t.locale &&
                                                            (r.locale =
                                                                t.locale),
                                                        !1 === t.sortable
                                                            ? (r.sortable = !1)
                                                            : (t.numeric &&
                                                                  (r.numeric =
                                                                      t.numeric),
                                                              t.caseFirst &&
                                                                  (r.caseFirst =
                                                                      t.caseFirst)),
                                                        !1 === t.searchable
                                                            ? (r.searchable =
                                                                  !1)
                                                            : t.sensitivity &&
                                                              (r.sensitivity =
                                                                  t.sensitivity),
                                                        (r.searchable ||
                                                            r.sortable) &&
                                                            void 0 !==
                                                                t.ignorePunctuation &&
                                                            (r.ignorePunctuation =
                                                                t.ignorePunctuation),
                                                        t.hidden &&
                                                            (r.hidden = !0),
                                                        t.filter &&
                                                            (r.filter =
                                                                t.filter),
                                                        t.sortSequence &&
                                                            (r.sortSequence =
                                                                t.sortSequence),
                                                        t.sort &&
                                                            (t.filter
                                                                ? (a[o] =
                                                                      t.sort)
                                                                : (n = {
                                                                      column: o,
                                                                      dir: t.sort,
                                                                  })),
                                                        void 0 !==
                                                            t.searchItemSeparator &&
                                                            (r.searchItemSeparator =
                                                                t.searchItemSeparator);
                                                });
                                            }),
                                            (i = i.map(
                                                (t) =>
                                                    t || {
                                                        type: e,
                                                        format:
                                                            "date" === e
                                                                ? s
                                                                : void 0,
                                                        sortable: !0,
                                                        searchable: !0,
                                                    }
                                            )),
                                            [
                                                i,
                                                {
                                                    filters: a,
                                                    sort: n,
                                                    widths: [],
                                                },
                                            ]
                                        );
                                    })(
                                        this.dt.options.columns,
                                        this.dt.options.type,
                                        this.dt.options.format
                                    );
                                }
                                get(t) {
                                    return t < 0 || t >= this.size()
                                        ? null
                                        : { ...this.settings[t] };
                                }
                                size() {
                                    return this.settings.length;
                                }
                                swap(t) {
                                    if (2 === t.length) {
                                        const e = this.dt.data.headings.map(
                                                (t, e) => e
                                            ),
                                            s = t[0],
                                            i = t[1],
                                            n = e[i];
                                        return (
                                            (e[i] = e[s]),
                                            (e[s] = n),
                                            this.order(e)
                                        );
                                    }
                                }
                                order(t) {
                                    (this.dt.data.headings = t.map(
                                        (t) => this.dt.data.headings[t]
                                    )),
                                        this.dt.data.data.forEach(
                                            (e) =>
                                                (e.cells = t.map(
                                                    (t) => e.cells[t]
                                                ))
                                        ),
                                        (this.settings = t.map(
                                            (t) => this.settings[t]
                                        )),
                                        this.dt.update();
                                }
                                hide(t) {
                                    t.length &&
                                        (t.forEach((t) => {
                                            this.settings[t] ||
                                                (this.settings[t] = {
                                                    type: "string",
                                                });
                                            this.settings[t].hidden = !0;
                                        }),
                                        this.dt.update());
                                }
                                show(t) {
                                    t.length &&
                                        (t.forEach((t) => {
                                            this.settings[t] ||
                                                (this.settings[t] = {
                                                    type: "string",
                                                    sortable: !0,
                                                });
                                            delete this.settings[t].hidden;
                                        }),
                                        this.dt.update());
                                }
                                visible(t) {
                                    return (
                                        void 0 === t &&
                                            (t = [
                                                ...Array(
                                                    this.dt.data.headings.length
                                                ).keys(),
                                            ]),
                                        Array.isArray(t)
                                            ? t.map(
                                                  (t) =>
                                                      !this.settings[t]?.hidden
                                              )
                                            : !this.settings[t]?.hidden
                                    );
                                }
                                add(t) {
                                    const e = this.dt.data.headings.length;
                                    if (
                                        ((this.dt.data.headings =
                                            this.dt.data.headings.concat([
                                                X(t.heading),
                                            ])),
                                        this.dt.data.data.forEach((e, s) => {
                                            e.cells = e.cells.concat([
                                                Q(t.data[s], t),
                                            ]);
                                        }),
                                        (this.settings[e] = {
                                            type: t.type || "string",
                                            sortable: !0,
                                            searchable: !0,
                                        }),
                                        t.type ||
                                            t.format ||
                                            t.sortable ||
                                            t.render ||
                                            t.filter)
                                    ) {
                                        const s = this.settings[e];
                                        t.render && (s.render = t.render),
                                            t.format && (s.format = t.format),
                                            t.cellClass &&
                                                (s.cellClass = t.cellClass),
                                            t.headerClass &&
                                                (s.headerClass = t.headerClass),
                                            t.locale && (s.locale = t.locale),
                                            !1 === t.sortable
                                                ? (s.sortable = !1)
                                                : (t.numeric &&
                                                      (s.numeric = t.numeric),
                                                  t.caseFirst &&
                                                      (s.caseFirst =
                                                          t.caseFirst)),
                                            !1 === t.searchable
                                                ? (s.searchable = !1)
                                                : t.sensitivity &&
                                                  (s.sensitivity =
                                                      t.sensitivity),
                                            (s.searchable || s.sortable) &&
                                                t.ignorePunctuation &&
                                                (s.ignorePunctuation =
                                                    t.ignorePunctuation),
                                            t.hidden && (s.hidden = !0),
                                            t.filter && (s.filter = t.filter),
                                            t.sortSequence &&
                                                (s.sortSequence =
                                                    t.sortSequence);
                                    }
                                    this.dt.update(!0);
                                }
                                remove(t) {
                                    if (!Array.isArray(t))
                                        return this.remove([t]);
                                    (this.dt.data.headings =
                                        this.dt.data.headings.filter(
                                            (e, s) => !t.includes(s)
                                        )),
                                        this.dt.data.data.forEach(
                                            (e) =>
                                                (e.cells = e.cells.filter(
                                                    (e, s) => !t.includes(s)
                                                ))
                                        ),
                                        this.dt.update(!0);
                                }
                                filter(t, e = !1) {
                                    if (!this.settings[t]?.filter?.length)
                                        return;
                                    const s = this._state.filters[t];
                                    let i;
                                    if (s) {
                                        let e = !1;
                                        i = this.settings[t].filter.find(
                                            (t) =>
                                                !!e || (t === s && (e = !0), !1)
                                        );
                                    } else {
                                        const e = this.settings[t].filter;
                                        i = e ? e[0] : void 0;
                                    }
                                    i
                                        ? (this._state.filters[t] = i)
                                        : s &&
                                          (this._state.filters[t] = void 0),
                                        (this.dt._currentPage = 1),
                                        this.dt.update(),
                                        e ||
                                            this.dt.emit(
                                                "datatable.filter",
                                                t,
                                                i
                                            );
                                }
                                sort(t, e = void 0, s = !1) {
                                    const i = this.settings[t];
                                    if (
                                        (s ||
                                            this.dt.emit(
                                                "datatable.sorting",
                                                t,
                                                e
                                            ),
                                        !e)
                                    ) {
                                        const s =
                                                !(
                                                    !this._state.sort ||
                                                    this._state.sort.column !==
                                                        t
                                                ) && this._state.sort?.dir,
                                            n = i?.sortSequence || [
                                                "asc",
                                                "desc",
                                            ];
                                        if (s) {
                                            const t = n.indexOf(s);
                                            e =
                                                -1 === t
                                                    ? n[0] || "asc"
                                                    : t === n.length - 1
                                                    ? n[0]
                                                    : n[t + 1];
                                        } else e = n.length ? n[0] : "asc";
                                    }
                                    const a =
                                        !!["string", "html"].includes(i.type) &&
                                        new Intl.Collator(
                                            i.locale || this.dt.options.locale,
                                            {
                                                usage: "sort",
                                                numeric:
                                                    i.numeric ||
                                                    this.dt.options.numeric,
                                                caseFirst:
                                                    i.caseFirst ||
                                                    this.dt.options.caseFirst,
                                                ignorePunctuation:
                                                    i.ignorePunctuation ||
                                                    this.dt.options
                                                        .ignorePunctuation,
                                            }
                                        );
                                    this.dt.data.data.sort((s, i) => {
                                        const o = s.cells[t],
                                            r = i.cells[t];
                                        let l = o.order ?? n(o),
                                            d = r.order ?? n(r);
                                        if ("desc" === e) {
                                            const t = l;
                                            (l = d), (d = t);
                                        }
                                        return a
                                            ? a.compare(String(l), String(d))
                                            : l < d
                                            ? -1
                                            : l > d
                                            ? 1
                                            : 0;
                                    }),
                                        (this._state.sort = {
                                            column: t,
                                            dir: e,
                                        }),
                                        this.dt._searchQueries.length
                                            ? (this.dt.multiSearch(
                                                  this.dt._searchQueries
                                              ),
                                              this.dt.emit(
                                                  "datatable.sort",
                                                  t,
                                                  e
                                              ))
                                            : s ||
                                              ((this.dt._currentPage = 1),
                                              this.dt.update(),
                                              this.dt.emit(
                                                  "datatable.sort",
                                                  t,
                                                  e
                                              ));
                                }
                                _measureWidths() {
                                    const t = this.dt.data.headings.filter(
                                        (t, e) => !this.settings[e]?.hidden
                                    );
                                    if (
                                        (this.dt.options.scrollY.length ||
                                            this.dt.options.fixedColumns) &&
                                        t?.length
                                    ) {
                                        this._state.widths = [];
                                        const t = { noPaging: !0 };
                                        if (
                                            this.dt.options.header ||
                                            this.dt.options.footer
                                        ) {
                                            this.dt.options.scrollY.length &&
                                                (t.unhideHeader = !0),
                                                this.dt.headerDOM &&
                                                    this.dt.headerDOM.parentElement.removeChild(
                                                        this.dt.headerDOM
                                                    ),
                                                (t.noColumnWidths = !0),
                                                this.dt._renderTable(t);
                                            const e = Array.from(
                                                this.dt.dom
                                                    .querySelector(
                                                        "thead, tfoot"
                                                    )
                                                    ?.firstElementChild?.querySelectorAll(
                                                        "th"
                                                    ) || []
                                            );
                                            let s = 0;
                                            const i = this.dt.data.headings.map(
                                                    (t, i) => {
                                                        if (
                                                            this.settings[i]
                                                                ?.hidden
                                                        )
                                                            return 0;
                                                        const n =
                                                            e[s].offsetWidth;
                                                        return (s += 1), n;
                                                    }
                                                ),
                                                n = i.reduce(
                                                    (t, e) => t + e,
                                                    0
                                                );
                                            this._state.widths = i.map(
                                                (t) => (t / n) * 100
                                            );
                                        } else {
                                            (t.renderHeader = !0),
                                                this.dt._renderTable(t);
                                            const e = Array.from(
                                                this.dt.dom
                                                    .querySelector(
                                                        "thead, tfoot"
                                                    )
                                                    ?.firstElementChild?.querySelectorAll(
                                                        "th"
                                                    ) || []
                                            );
                                            let s = 0;
                                            const i = this.dt.data.headings.map(
                                                    (t, i) => {
                                                        if (
                                                            this.settings[i]
                                                                ?.hidden
                                                        )
                                                            return 0;
                                                        const n =
                                                            e[s].offsetWidth;
                                                        return (s += 1), n;
                                                    }
                                                ),
                                                n = i.reduce(
                                                    (t, e) => t + e,
                                                    0
                                                );
                                            this._state.widths = i.map(
                                                (t) => (t / n) * 100
                                            );
                                        }
                                        this.dt._renderTable();
                                    }
                                }
                            }
                            const tt = {
                                    sortable: !0,
                                    locale: "en",
                                    numeric: !0,
                                    caseFirst: "false",
                                    searchable: !0,
                                    sensitivity: "base",
                                    ignorePunctuation: !0,
                                    destroyable: !0,
                                    searchItemSeparator: "",
                                    searchQuerySeparator: " ",
                                    searchAnd: !1,
                                    data: {},
                                    type: "html",
                                    format: "YYYY-MM-DD",
                                    columns: [],
                                    paging: !0,
                                    perPage: 20,
                                    perPageSelect: [20, 25],
                                    nextPrev: !0,
                                    firstLast: !1,
                                    nextText: "‹",
                                    prevText: "›",
                                    firstText: "«",
                                    lastText: "»",
                                    ellipsisText: "…",
                                    truncatePager: !0,
                                    pagerDelta: 2,
                                    scrollY: "",
                                    fixedColumns: !0,
                                    fixedHeight: !1,
                                    footer: !1,
                                    header: !0,
                                    hiddenHeader: !1,
                                    caption: void 0,
                                    rowNavigation: !1,
                                    tabIndex: !1,
                                    pagerRender: !1,
                                    rowRender: !1,
                                    tableRender: !1,
                                    diffDomOptions: { valueDiffing: !1 },
                                    labels: {
                                        placeholder: "بحث....",
                                        searchTitle: "Search within table",
                                        perPage: "عدد العناصر لكل صفحة",
                                        pageTitle: "Page {page}",
                                        noRows: "لا توجد عناصر مُتاحة",
                                        noResults: "لا توجد عناصر مُتاحة",
                                        info: "عرض {start} إلى {end} من أصل {rows} عناصر ",
                                    },
                                    template: (t, e) =>
                                        `<div class='${t.classes.top}'>\n    ${
                                            t.paging && t.perPageSelect
                                                ? `<div class='${t.classes.dropdown}'>\n            <label>\n                <select class='${t.classes.selector}'></select> ${t.labels.perPage}\n            </label>\n        </div>`
                                                : ""
                                        }\n    ${
                                            t.searchable
                                                ? `<div class='${
                                                      t.classes.search
                                                  }'>\n            <input class='${
                                                      t.classes.input
                                                  }' placeholder='${
                                                      t.labels.placeholder
                                                  }' type='search' title='${
                                                      t.labels.searchTitle
                                                  }'${
                                                      e.id
                                                          ? ` aria-controls="${e.id}"`
                                                          : ""
                                                  }>\n        </div>`
                                                : ""
                                        }\n</div>\n<div class='${
                                            t.classes.container
                                        }'${
                                            t.scrollY.length
                                                ? ` style='height: ${t.scrollY}; overflow-Y: auto;'`
                                                : ""
                                        }></div>\n<div class='${
                                            t.classes.bottom
                                        }'>\n    ${
                                            t.paging
                                                ? `<div class='${t.classes.info}'></div>`
                                                : ""
                                        }\n    <nav class='${
                                            t.classes.pagination
                                        }'></nav>\n</div>`,
                                    classes: {
                                        active: "datatable-active",
                                        ascending: "datatable-ascending",
                                        bottom: "datatable-bottom",
                                        container: "datatable-container",
                                        cursor: "datatable-cursor",
                                        descending: "datatable-descending",
                                        disabled: "datatable-disabled",
                                        dropdown: "datatable-dropdown",
                                        ellipsis: "datatable-ellipsis",
                                        filter: "datatable-filter",
                                        filterActive: "datatable-filter-active",
                                        empty: "datatable-empty",
                                        headercontainer:
                                            "datatable-headercontainer",
                                        hidden: "datatable-hidden",
                                        info: "datatable-info",
                                        input: "datatable-input",
                                        loading: "datatable-loading",
                                        pagination: "datatable-pagination",
                                        paginationList:
                                            "datatable-pagination-list",
                                        paginationListItem:
                                            "datatable-pagination-list-item",
                                        paginationListItemLink:
                                            "datatable-pagination-list-item-link",
                                        search: "datatable-search",
                                        selector: "datatable-selector",
                                        sorter: "datatable-sorter",
                                        table: "datatable-table",
                                        top: "datatable-top",
                                        wrapper: "datatable-wrapper",
                                    },
                                },
                                et = (t, e, s, i = {}) => ({
                                    nodeName: "LI",
                                    attributes: {
                                        class:
                                            i.active && !i.hidden
                                                ? `${s.classes.paginationListItem} ${s.classes.active}`
                                                : i.hidden
                                                ? `${s.classes.paginationListItem} ${s.classes.hidden} ${s.classes.disabled}`
                                                : s.classes.paginationListItem,
                                    },
                                    childNodes: [
                                        {
                                            nodeName: "BUTTON",
                                            attributes: {
                                                "data-page": String(t),
                                                class: s.classes
                                                    .paginationListItemLink,
                                                "aria-label":
                                                    s.labels.pageTitle.replace(
                                                        "{page}",
                                                        String(t)
                                                    ),
                                            },
                                            childNodes: [
                                                { nodeName: "#text", data: e },
                                            ],
                                        },
                                    ],
                                }),
                                st = (t, e, s, i, n) => {
                                    let a = [];
                                    if (
                                        (n.firstLast &&
                                            a.push(et(1, n.firstText, n)),
                                        n.nextPrev)
                                    ) {
                                        const e = t ? 1 : s - 1;
                                        a.push(
                                            et(e, n.prevText, n, { hidden: t })
                                        );
                                    }
                                    let o = [...Array(i).keys()].map((t) =>
                                        et(t + 1, String(t + 1), n, {
                                            active: t === s - 1,
                                        })
                                    );
                                    if (
                                        (n.truncatePager &&
                                            (o = ((t, e, s, i) => {
                                                const n = i.pagerDelta,
                                                    a = i.classes,
                                                    o = i.ellipsisText,
                                                    r = 2 * n;
                                                let l = e - n,
                                                    d = e + n;
                                                e < 4 - n + r
                                                    ? (d = 3 + r)
                                                    : e > s - (3 - n + r) &&
                                                      (l = s - (2 + r));
                                                const c = [];
                                                for (let e = 1; e <= s; e++)
                                                    if (
                                                        1 == e ||
                                                        e == s ||
                                                        (e >= l && e <= d)
                                                    ) {
                                                        const s = t[e - 1];
                                                        c.push(s);
                                                    }
                                                let h;
                                                const u = [];
                                                return (
                                                    c.forEach((e) => {
                                                        const s = parseInt(
                                                            e.childNodes[0]
                                                                .attributes[
                                                                "data-page"
                                                            ],
                                                            10
                                                        );
                                                        if (h) {
                                                            const e = parseInt(
                                                                h.childNodes[0]
                                                                    .attributes[
                                                                    "data-page"
                                                                ],
                                                                10
                                                            );
                                                            if (s - e == 2)
                                                                u.push(t[e]);
                                                            else if (
                                                                s - e !=
                                                                1
                                                            ) {
                                                                const t = {
                                                                    nodeName:
                                                                        "LI",
                                                                    attributes:
                                                                        {
                                                                            class: `${a.paginationListItem} ${a.ellipsis} ${a.disabled}`,
                                                                        },
                                                                    childNodes:
                                                                        [
                                                                            {
                                                                                nodeName:
                                                                                    "BUTTON",
                                                                                attributes:
                                                                                    {
                                                                                        class: a.paginationListItemLink,
                                                                                    },
                                                                                childNodes:
                                                                                    [
                                                                                        {
                                                                                            nodeName:
                                                                                                "#text",
                                                                                            data: o,
                                                                                        },
                                                                                    ],
                                                                            },
                                                                        ],
                                                                };
                                                                u.push(t);
                                                            }
                                                        }
                                                        u.push(e), (h = e);
                                                    }),
                                                    u
                                                );
                                            })(o, s, i, n)),
                                        (a = a.concat(o)),
                                        n.nextPrev)
                                    ) {
                                        const t = e ? i : s + 1;
                                        a.push(
                                            et(t, n.nextText, n, { hidden: e })
                                        );
                                    }
                                    n.firstLast && a.push(et(i, n.lastText, n));
                                    return {
                                        nodeName: "UL",
                                        attributes: {
                                            class: n.classes.paginationList,
                                        },
                                        childNodes: o.length > 1 ? a : [],
                                    };
                                };
                            const it = {
                                classes: {
                                    row: "datatable-editor-row",
                                    form: "datatable-editor-form",
                                    item: "datatable-editor-item",
                                    menu: "datatable-editor-menu",
                                    save: "datatable-editor-save",
                                    block: "datatable-editor-block",
                                    cancel: "datatable-editor-cancel",
                                    close: "datatable-editor-close",
                                    inner: "datatable-editor-inner",
                                    input: "datatable-editor-input",
                                    label: "datatable-editor-label",
                                    modal: "datatable-editor-modal",
                                    action: "datatable-editor-action",
                                    header: "datatable-editor-header",
                                    wrapper: "datatable-editor-wrapper",
                                    editable: "datatable-editor-editable",
                                    container: "datatable-editor-container",
                                    separator: "datatable-editor-separator",
                                },
                                labels: {
                                    closeX: "x",
                                    editCell: "Edit Cell",
                                    editRow: "Edit Row",
                                    removeRow: "Remove Row",
                                    reallyRemove: "Are you sure?",
                                    reallyCancel:
                                        "Do you really want to cancel?",
                                    save: "Save",
                                    cancel: "Cancel",
                                },
                                cancelModal: (t) =>
                                    confirm(t.options.labels.reallyCancel),
                                inline: !0,
                                hiddenColumns: !1,
                                contextMenu: !0,
                                clickEvent: "dblclick",
                                excludeColumns: [],
                                menuItems: [
                                    {
                                        text: (t) => t.options.labels.editCell,
                                        action: (t, e) => {
                                            if (
                                                !(
                                                    t.event.target instanceof
                                                    Element
                                                )
                                            )
                                                return;
                                            const s =
                                                t.event.target.closest("td");
                                            return t.editCell(s);
                                        },
                                    },
                                    {
                                        text: (t) => t.options.labels.editRow,
                                        action: (t, e) => {
                                            if (
                                                !(
                                                    t.event.target instanceof
                                                    Element
                                                )
                                            )
                                                return;
                                            const s =
                                                t.event.target.closest("tr");
                                            return t.editRow(s);
                                        },
                                    },
                                    { separator: !0 },
                                    {
                                        text: (t) => t.options.labels.removeRow,
                                        action: (t, e) => {
                                            if (
                                                t.event.target instanceof
                                                    Element &&
                                                confirm(
                                                    t.options.labels
                                                        .reallyRemove
                                                )
                                            ) {
                                                const e =
                                                    t.event.target.closest(
                                                        "tr"
                                                    );
                                                t.removeRow(e);
                                            }
                                        },
                                    },
                                ],
                            };
                            class nt {
                                constructor(t, e = {}) {
                                    (this.dt = t),
                                        (this.options = { ...it, ...e });
                                }
                                init() {
                                    this.initialized ||
                                        (this.options.classes.editable
                                            ?.split(" ")
                                            .forEach((t) =>
                                                this.dt.wrapperDOM.classList.add(
                                                    t
                                                )
                                            ),
                                        this.options.inline &&
                                            ((this.originalRowRender =
                                                this.dt.options.rowRender),
                                            (this.dt.options.rowRender = (
                                                t,
                                                e,
                                                s
                                            ) => {
                                                let i = this.rowRender(t, e, s);
                                                return (
                                                    this.originalRowRender &&
                                                        (i =
                                                            this.originalRowRender(
                                                                t,
                                                                i,
                                                                s
                                                            )),
                                                    i
                                                );
                                            })),
                                        this.options.contextMenu &&
                                            ((this.containerDOM = s("div", {
                                                id: this.options.classes
                                                    .container,
                                            })),
                                            (this.wrapperDOM = s("div", {
                                                class: this.options.classes
                                                    .wrapper,
                                            })),
                                            (this.menuDOM = s("ul", {
                                                class: this.options.classes
                                                    .menu,
                                            })),
                                            this.options.menuItems &&
                                                this.options.menuItems.length &&
                                                this.options.menuItems.forEach(
                                                    (t) => {
                                                        const e = s("li", {
                                                            class: t.separator
                                                                ? this.options
                                                                      .classes
                                                                      .separator
                                                                : this.options
                                                                      .classes
                                                                      .item,
                                                        });
                                                        if (!t.separator) {
                                                            const i = s("a", {
                                                                class: this
                                                                    .options
                                                                    .classes
                                                                    .action,
                                                                href:
                                                                    t.url ||
                                                                    "#",
                                                                html:
                                                                    "function" ==
                                                                    typeof t.text
                                                                        ? t.text(
                                                                              this
                                                                          )
                                                                        : t.text,
                                                            });
                                                            e.appendChild(i),
                                                                t.action &&
                                                                    "function" ==
                                                                        typeof t.action &&
                                                                    i.addEventListener(
                                                                        "click",
                                                                        (e) => {
                                                                            e.preventDefault(),
                                                                                t.action(
                                                                                    this,
                                                                                    e
                                                                                );
                                                                        }
                                                                    );
                                                        }
                                                        this.menuDOM.appendChild(
                                                            e
                                                        );
                                                    }
                                                ),
                                            this.wrapperDOM.appendChild(
                                                this.menuDOM
                                            ),
                                            this.containerDOM.appendChild(
                                                this.wrapperDOM
                                            ),
                                            this.updateMenu()),
                                        (this.data = {}),
                                        (this.menuOpen = !1),
                                        (this.editing = !1),
                                        (this.editingRow = !1),
                                        (this.editingCell = !1),
                                        this.bindEvents(),
                                        setTimeout(() => {
                                            (this.initialized = !0),
                                                this.dt.emit("editable.init");
                                        }, 10));
                                }
                                bindEvents() {
                                    (this.events = {
                                        keydown: this.keydown.bind(this),
                                        click: this.click.bind(this),
                                    }),
                                        this.dt.dom.addEventListener(
                                            this.options.clickEvent,
                                            this.events.click
                                        ),
                                        document.addEventListener(
                                            "keydown",
                                            this.events.keydown
                                        ),
                                        this.options.contextMenu &&
                                            ((this.events.context =
                                                this.context.bind(this)),
                                            (this.events.updateMenu =
                                                this.updateMenu.bind(this)),
                                            (this.events.dismissMenu =
                                                this.dismissMenu.bind(this)),
                                            (this.events.reset = (function (
                                                t,
                                                e = 300
                                            ) {
                                                let s;
                                                return (...i) => {
                                                    clearTimeout(s),
                                                        (s = window.setTimeout(
                                                            () => t(),
                                                            e
                                                        ));
                                                };
                                            })(
                                                () => this.events.updateMenu(),
                                                50
                                            )),
                                            this.dt.dom.addEventListener(
                                                "contextmenu",
                                                this.events.context
                                            ),
                                            document.addEventListener(
                                                "click",
                                                this.events.dismissMenu
                                            ),
                                            window.addEventListener(
                                                "resize",
                                                this.events.reset
                                            ),
                                            window.addEventListener(
                                                "scroll",
                                                this.events.reset
                                            ));
                                }
                                context(t) {
                                    const e = t.target;
                                    if (!(e instanceof Element)) return;
                                    this.event = t;
                                    const s = e.closest("tbody td");
                                    if (!this.disabled && s) {
                                        t.preventDefault();
                                        let e = t.pageX,
                                            s = t.pageY;
                                        e > this.limits.x &&
                                            (e -= this.rect.width),
                                            s > this.limits.y &&
                                                (s -= this.rect.height),
                                            (this.wrapperDOM.style.top = `${s}px`),
                                            (this.wrapperDOM.style.left = `${e}px`),
                                            this.openMenu(),
                                            this.updateMenu();
                                    }
                                }
                                click(t) {
                                    const e = t.target;
                                    if (e instanceof Element)
                                        if (
                                            this.editing &&
                                            this.data &&
                                            this.editingCell
                                        ) {
                                            const t = l(
                                                    this.options.classes.input
                                                ),
                                                e = this.modalDOM
                                                    ? this.modalDOM.querySelector(
                                                          `input${t}[type=text]`
                                                      )
                                                    : this.dt.wrapperDOM.querySelector(
                                                          `input${t}[type=text]`
                                                      );
                                            this.saveCell(e.value);
                                        } else if (!this.editing) {
                                            const s = e.closest("tbody td");
                                            s &&
                                                (this.editCell(s),
                                                t.preventDefault());
                                        }
                                }
                                keydown(t) {
                                    const e = l(this.options.classes.input);
                                    if (this.modalDOM) {
                                        if ("Escape" === t.key)
                                            this.options.cancelModal(this) &&
                                                this.closeModal();
                                        else if ("Enter" === t.key)
                                            if (this.editingCell) {
                                                const t =
                                                    this.modalDOM.querySelector(
                                                        `input${e}[type=text]`
                                                    );
                                                this.saveCell(t.value);
                                            } else {
                                                const t = Array.from(
                                                    this.modalDOM.querySelectorAll(
                                                        `input${e}[type=text]`
                                                    )
                                                ).map((t) => t.value.trim());
                                                this.saveRow(t, this.data.row);
                                            }
                                    } else if (this.editing && this.data)
                                        if ("Enter" === t.key) {
                                            if (this.editingCell) {
                                                const t =
                                                    this.dt.wrapperDOM.querySelector(
                                                        `input${e}[type=text]`
                                                    );
                                                this.saveCell(t.value);
                                            } else if (this.editingRow) {
                                                const t = Array.from(
                                                    this.dt.wrapperDOM.querySelectorAll(
                                                        `input${e}[type=text]`
                                                    )
                                                ).map((t) => t.value.trim());
                                                this.saveRow(t, this.data.row);
                                            }
                                        } else
                                            "Escape" === t.key &&
                                                (this.editingCell
                                                    ? this.saveCell(
                                                          this.data.content
                                                      )
                                                    : this.editingRow &&
                                                      this.saveRow(
                                                          null,
                                                          this.data.row
                                                      ));
                                }
                                editCell(t) {
                                    const e = o(
                                        t.cellIndex,
                                        this.dt.columns.settings
                                    );
                                    if (this.options.excludeColumns.includes(e))
                                        return void this.closeMenu();
                                    const s = parseInt(
                                            t.parentElement.dataset.index,
                                            10
                                        ),
                                        i = this.dt.data.data[s].cells[e];
                                    (this.data = {
                                        cell: i,
                                        rowIndex: s,
                                        columnIndex: e,
                                        content: n(i),
                                    }),
                                        (this.editing = !0),
                                        (this.editingCell = !0),
                                        this.options.inline
                                            ? this.dt.update()
                                            : this.editCellModal(),
                                        this.closeMenu();
                                }
                                editCellModal() {
                                    const t = this.data.cell,
                                        e = this.data.columnIndex,
                                        i =
                                            this.dt.data.headings[e].text ||
                                            String(
                                                this.dt.data.headings[e].data
                                            ),
                                        o = [
                                            `<div class='${this.options.classes.inner}'>`,
                                            `<div class='${this.options.classes.header}'>`,
                                            `<h4>${this.options.labels.editCell}</h4>`,
                                            `<button class='${this.options.classes.close}' type='button' data-editor-cancel>${this.options.labels.closeX}</button>`,
                                            " </div>",
                                            `<div class='${this.options.classes.block}'>`,
                                            `<form class='${this.options.classes.form}'>`,
                                            `<div class='${this.options.classes.row}'>`,
                                            `<label class='${
                                                this.options.classes.label
                                            }'>${a(i)}</label>`,
                                            `<input class='${
                                                this.options.classes.input
                                            }' value='${a(n(t))}' type='text'>`,
                                            "</div>",
                                            `<div class='${this.options.classes.row}'>`,
                                            `<button class='${this.options.classes.cancel}' type='button' data-editor-cancel>${this.options.labels.cancel}</button>`,
                                            `<button class='${this.options.classes.save}' type='button' data-editor-save>${this.options.labels.save}</button>`,
                                            "</div>",
                                            "</form>",
                                            "</div>",
                                            "</div>",
                                        ].join(""),
                                        r = s("div", {
                                            class: this.options.classes.modal,
                                            html: o,
                                        });
                                    (this.modalDOM = r), this.openModal();
                                    const d = l(this.options.classes.input),
                                        c = r.querySelector(
                                            `input${d}[type=text]`
                                        );
                                    c.focus(),
                                        (c.selectionStart = c.selectionEnd =
                                            c.value.length),
                                        r.addEventListener("click", (t) => {
                                            const e = t.target;
                                            e instanceof Element &&
                                                (e.hasAttribute(
                                                    "data-editor-cancel"
                                                )
                                                    ? (t.preventDefault(),
                                                      this.options.cancelModal(
                                                          this
                                                      ) && this.closeModal())
                                                    : e.hasAttribute(
                                                          "data-editor-save"
                                                      ) &&
                                                      (t.preventDefault(),
                                                      this.saveCell(c.value)));
                                        });
                                }
                                saveCell(t) {
                                    const e = this.data.content,
                                        s =
                                            this.dt.columns.settings[
                                                this.data.columnIndex
                                            ].type || this.dt.options.type,
                                        i = t.trim();
                                    let n;
                                    if ("number" === s)
                                        n = { data: parseFloat(i) };
                                    else if ("boolean" === s)
                                        n = ["", "false", "0"].includes(i)
                                            ? {
                                                  data: !1,
                                                  text: "false",
                                                  order: 0,
                                              }
                                            : {
                                                  data: !0,
                                                  text: "true",
                                                  order: 1,
                                              };
                                    else if ("html" === s)
                                        n = {
                                            data: [
                                                { nodeName: "#text", data: t },
                                            ],
                                            text: t,
                                            order: t,
                                        };
                                    else if ("string" === s) n = { data: t };
                                    else if ("date" === s) {
                                        const e =
                                            this.dt.columns.settings[
                                                this.data.columnIndex
                                            ].format || this.dt.options.format;
                                        n = { data: t, order: W(String(t), e) };
                                    } else n = { data: t };
                                    (this.dt.data.data[
                                        this.data.rowIndex
                                    ].cells[this.data.columnIndex] = n),
                                        this.closeModal();
                                    const a = this.data.rowIndex,
                                        o = this.data.columnIndex;
                                    (this.data = {}),
                                        this.dt.update(!0),
                                        (this.editing = !1),
                                        (this.editingCell = !1),
                                        this.dt.emit(
                                            "editable.save.cell",
                                            t,
                                            e,
                                            a,
                                            o
                                        );
                                }
                                editRow(t) {
                                    if (
                                        !t ||
                                        "TR" !== t.nodeName ||
                                        this.editing
                                    )
                                        return;
                                    const e = parseInt(t.dataset.index, 10),
                                        s = this.dt.data.data[e];
                                    (this.data = { row: s.cells, rowIndex: e }),
                                        (this.editing = !0),
                                        (this.editingRow = !0),
                                        this.options.inline
                                            ? this.dt.update()
                                            : this.editRowModal(),
                                        this.closeMenu();
                                }
                                editRowModal() {
                                    const t = this.data.row,
                                        e = [
                                            `<div class='${this.options.classes.inner}'>`,
                                            `<div class='${this.options.classes.header}'>`,
                                            `<h4>${this.options.labels.editRow}</h4>`,
                                            `<button class='${this.options.classes.close}' type='button' data-editor-cancel>${this.options.labels.closeX}</button>`,
                                            " </div>",
                                            `<div class='${this.options.classes.block}'>`,
                                            `<form class='${this.options.classes.form}'>`,
                                            `<div class='${this.options.classes.row}'>`,
                                            `<button class='${this.options.classes.cancel}' type='button' data-editor-cancel>${this.options.labels.cancel}</button>`,
                                            `<button class='${this.options.classes.save}' type='button' data-editor-save>${this.options.labels.save}</button>`,
                                            "</div>",
                                            "</form>",
                                            "</div>",
                                            "</div>",
                                        ].join(""),
                                        i = s("div", {
                                            class: this.options.classes.modal,
                                            html: e,
                                        }),
                                        o = i.firstElementChild;
                                    if (!o) return;
                                    const r =
                                        o.lastElementChild?.firstElementChild;
                                    if (!r) return;
                                    t.forEach((t, e) => {
                                        const i = this.dt.columns.settings[e];
                                        if (
                                            (!i.hidden ||
                                                (i.hidden &&
                                                    this.options
                                                        .hiddenColumns)) &&
                                            !this.options.excludeColumns.includes(
                                                e
                                            )
                                        ) {
                                            const i =
                                                this.dt.data.headings[e].text ||
                                                String(
                                                    this.dt.data.headings[e]
                                                        .data
                                                );
                                            r.insertBefore(
                                                s("div", {
                                                    class: this.options.classes
                                                        .row,
                                                    html: [
                                                        `<div class='${this.options.classes.row}'>`,
                                                        `<label class='${
                                                            this.options.classes
                                                                .label
                                                        }'>${a(i)}</label>`,
                                                        `<input class='${
                                                            this.options.classes
                                                                .input
                                                        }' value='${a(
                                                            n(t)
                                                        )}' type='text'>`,
                                                        "</div>",
                                                    ].join(""),
                                                }),
                                                r.lastElementChild
                                            );
                                        }
                                    }),
                                        (this.modalDOM = i),
                                        this.openModal();
                                    const d = l(this.options.classes.input),
                                        c = Array.from(
                                            r.querySelectorAll(
                                                `input${d}[type=text]`
                                            )
                                        );
                                    i.addEventListener("click", (t) => {
                                        const e = t.target;
                                        if (e instanceof Element)
                                            if (
                                                e.hasAttribute(
                                                    "data-editor-cancel"
                                                )
                                            )
                                                this.options.cancelModal(
                                                    this
                                                ) && this.closeModal();
                                            else if (
                                                e.hasAttribute(
                                                    "data-editor-save"
                                                )
                                            ) {
                                                const t = c.map((t) =>
                                                    t.value.trim()
                                                );
                                                this.saveRow(t, this.data.row);
                                            }
                                    });
                                }
                                saveRow(t, e) {
                                    const s = e.map((t) => n(t)),
                                        i =
                                            this.dt.data.data[
                                                this.data.rowIndex
                                            ];
                                    if (t) {
                                        let s = 0;
                                        i.cells = e.map((e, i) => {
                                            if (
                                                this.options.excludeColumns.includes(
                                                    i
                                                ) ||
                                                this.dt.columns.settings[i]
                                                    .hidden
                                            )
                                                return e;
                                            const n =
                                                    this.dt.columns.settings[i]
                                                        .type ||
                                                    this.dt.options.type,
                                                a = t[s++];
                                            let o;
                                            if ("number" === n)
                                                o = { data: parseFloat(a) };
                                            else if ("boolean" === n)
                                                o = ["", "false", "0"].includes(
                                                    a
                                                )
                                                    ? {
                                                          data: !1,
                                                          text: "false",
                                                          order: 0,
                                                      }
                                                    : {
                                                          data: !0,
                                                          text: "true",
                                                          order: 1,
                                                      };
                                            else if ("html" === n)
                                                o = {
                                                    data: [
                                                        {
                                                            nodeName: "#text",
                                                            data: a,
                                                        },
                                                    ],
                                                    text: a,
                                                    order: a,
                                                };
                                            else if ("string" === n)
                                                o = { data: a };
                                            else if ("date" === n) {
                                                const t =
                                                    this.dt.columns.settings[i]
                                                        .format ||
                                                    this.dt.options.format;
                                                o = {
                                                    data: a,
                                                    order: W(String(a), t),
                                                };
                                            } else o = { data: a };
                                            return o;
                                        });
                                    }
                                    const a = i.cells.map((t) => n(t));
                                    (this.data = {}),
                                        this.dt.update(!0),
                                        this.closeModal(),
                                        (this.editing = !1),
                                        this.dt.emit(
                                            "editable.save.row",
                                            a,
                                            s,
                                            e
                                        );
                                }
                                openModal() {
                                    this.modalDOM &&
                                        document.body.appendChild(
                                            this.modalDOM
                                        );
                                }
                                closeModal() {
                                    this.editing &&
                                        this.modalDOM &&
                                        (document.body.removeChild(
                                            this.modalDOM
                                        ),
                                        (this.modalDOM =
                                            this.editing =
                                            this.editingRow =
                                            this.editingCell =
                                                !1));
                                }
                                removeRow(t) {
                                    if (
                                        !t ||
                                        "TR" !== t.nodeName ||
                                        this.editing
                                    )
                                        return;
                                    const e = parseInt(t.dataset.index, 10);
                                    this.dt.rows.remove(e), this.closeMenu();
                                }
                                updateMenu() {
                                    const t =
                                            window.scrollX ||
                                            window.pageXOffset,
                                        e =
                                            window.scrollY ||
                                            window.pageYOffset;
                                    (this.rect =
                                        this.wrapperDOM.getBoundingClientRect()),
                                        (this.limits = {
                                            x:
                                                window.innerWidth +
                                                t -
                                                this.rect.width,
                                            y:
                                                window.innerHeight +
                                                e -
                                                this.rect.height,
                                        });
                                }
                                dismissMenu(t) {
                                    const e = t.target;
                                    if (
                                        !(e instanceof Element) ||
                                        this.wrapperDOM.contains(e)
                                    )
                                        return;
                                    let s = !0;
                                    if (this.editing) {
                                        const t = l(this.options.classes.input);
                                        s = !e.matches(`input${t}[type=text]`);
                                    }
                                    s && this.closeMenu();
                                }
                                openMenu() {
                                    if (
                                        this.editing &&
                                        this.data &&
                                        this.editingCell
                                    ) {
                                        const t = l(this.options.classes.input),
                                            e = this.modalDOM
                                                ? this.modalDOM.querySelector(
                                                      `input${t}[type=text]`
                                                  )
                                                : this.dt.wrapperDOM.querySelector(
                                                      `input${t}[type=text]`
                                                  );
                                        this.saveCell(e.value);
                                    }
                                    document.body.appendChild(
                                        this.containerDOM
                                    ),
                                        (this.menuOpen = !0),
                                        this.dt.emit("editable.context.open");
                                }
                                closeMenu() {
                                    this.menuOpen &&
                                        ((this.menuOpen = !1),
                                        document.body.removeChild(
                                            this.containerDOM
                                        ),
                                        this.dt.emit("editable.context.close"));
                                }
                                destroy() {
                                    this.dt.dom.removeEventListener(
                                        this.options.clickEvent,
                                        this.events.click
                                    ),
                                        this.dt.dom.removeEventListener(
                                            "contextmenu",
                                            this.events.context
                                        ),
                                        document.removeEventListener(
                                            "click",
                                            this.events.dismissMenu
                                        ),
                                        document.removeEventListener(
                                            "keydown",
                                            this.events.keydown
                                        ),
                                        window.removeEventListener(
                                            "resize",
                                            this.events.reset
                                        ),
                                        window.removeEventListener(
                                            "scroll",
                                            this.events.reset
                                        ),
                                        document.body.contains(
                                            this.containerDOM
                                        ) &&
                                            document.body.removeChild(
                                                this.containerDOM
                                            ),
                                        this.options.inline &&
                                            (this.dt.options.rowRender =
                                                this.originalRowRender),
                                        (this.initialized = !1);
                                }
                                rowRender(t, e, s) {
                                    if (!this.data || this.data.rowIndex !== s)
                                        return e;
                                    if (this.editingCell) {
                                        e.childNodes[
                                            (function (t, e) {
                                                let s = t,
                                                    i = 0;
                                                for (; i < t; )
                                                    e[i].hidden && (s -= 1),
                                                        i++;
                                                return s;
                                            })(
                                                this.data.columnIndex,
                                                this.dt.columns.settings
                                            )
                                        ].childNodes = [
                                            {
                                                nodeName: "INPUT",
                                                attributes: {
                                                    type: "text",
                                                    value: this.data.content,
                                                    class: this.options.classes
                                                        .input,
                                                },
                                            },
                                        ];
                                    } else
                                        e.childNodes.forEach((s, i) => {
                                            const n = o(
                                                    i,
                                                    this.dt.columns.settings
                                                ),
                                                r = t[n];
                                            if (
                                                !this.options.excludeColumns.includes(
                                                    n
                                                )
                                            ) {
                                                e.childNodes[i].childNodes = [
                                                    {
                                                        nodeName: "INPUT",
                                                        attributes: {
                                                            type: "text",
                                                            value: a(
                                                                r.text ||
                                                                    String(
                                                                        r.data
                                                                    ) ||
                                                                    ""
                                                            ),
                                                            class: this.options
                                                                .classes.input,
                                                        },
                                                    },
                                                ];
                                            }
                                        });
                                    return e;
                                }
                            }
                            const at = {
                                classes: {
                                    button: "datatable-column-filter-button",
                                    menu: "datatable-column-filter-menu",
                                    container:
                                        "datatable-column-filter-container",
                                    wrapper: "datatable-column-filter-wrapper",
                                },
                                labels: {
                                    button: "Filter columns within the table",
                                },
                                hiddenColumns: [],
                            };
                            class ot {
                                constructor(t, e = {}) {
                                    (this.dt = t),
                                        (this.options = { ...at, ...e });
                                }
                                init() {
                                    if (this.initialized) return;
                                    const t = l(this.options.classes.button);
                                    let e = this.dt.wrapperDOM.querySelector(t);
                                    if (!e) {
                                        e = s("button", {
                                            class: this.options.classes.button,
                                            html: "▦",
                                        });
                                        const t = l(
                                                this.dt.options.classes.search
                                            ),
                                            i =
                                                this.dt.wrapperDOM.querySelector(
                                                    t
                                                );
                                        i
                                            ? i.appendChild(e)
                                            : this.dt.wrapperDOM.appendChild(e),
                                            (this.addedButtonDOM = !0);
                                    }
                                    (this.buttonDOM = e),
                                        (this.containerDOM = s("div", {
                                            id: this.options.classes.container,
                                        })),
                                        (this.wrapperDOM = s("div", {
                                            class: this.options.classes.wrapper,
                                        })),
                                        (this.menuDOM = s("ul", {
                                            class: this.options.classes.menu,
                                            html: this.dt.data.headings
                                                .map((t, e) => {
                                                    const s =
                                                        this.dt.columns
                                                            .settings[e];
                                                    return this.options.hiddenColumns.includes(
                                                        e
                                                    )
                                                        ? ""
                                                        : `<li data-column="${e}">\n                        <input type="checkbox" value="${
                                                              t.text || t.data
                                                          }" ${
                                                              s.hidden
                                                                  ? ""
                                                                  : "checked=''"
                                                          }>\n                        <label>\n                            ${
                                                              t.text || t.data
                                                          }\n                        </label>\n                    </li>`;
                                                })
                                                .join(""),
                                        })),
                                        this.wrapperDOM.appendChild(
                                            this.menuDOM
                                        ),
                                        this.containerDOM.appendChild(
                                            this.wrapperDOM
                                        ),
                                        this._measureSpace(),
                                        this._bind(),
                                        (this.initialized = !0);
                                }
                                dismiss() {
                                    this.addedButtonDOM &&
                                        this.buttonDOM.parentElement &&
                                        this.buttonDOM.parentElement.removeChild(
                                            this.buttonDOM
                                        ),
                                        document.removeEventListener(
                                            "click",
                                            this.events.click
                                        );
                                }
                                _bind() {
                                    (this.events = {
                                        click: this._click.bind(this),
                                    }),
                                        document.addEventListener(
                                            "click",
                                            this.events.click
                                        );
                                }
                                _openMenu() {
                                    document.body.appendChild(
                                        this.containerDOM
                                    ),
                                        this._measureSpace(),
                                        (this.menuOpen = !0),
                                        this.dt.emit("columnFilter.menu.open");
                                }
                                _closeMenu() {
                                    this.menuOpen &&
                                        ((this.menuOpen = !1),
                                        document.body.removeChild(
                                            this.containerDOM
                                        ),
                                        this.dt.emit(
                                            "columnFilter.menu.close"
                                        ));
                                }
                                _measureSpace() {
                                    const t =
                                            window.scrollX ||
                                            window.pageXOffset,
                                        e =
                                            window.scrollY ||
                                            window.pageYOffset;
                                    (this.rect =
                                        this.wrapperDOM.getBoundingClientRect()),
                                        (this.limits = {
                                            x:
                                                window.innerWidth +
                                                t -
                                                this.rect.width,
                                            y:
                                                window.innerHeight +
                                                e -
                                                this.rect.height,
                                        });
                                }
                                _click(t) {
                                    const e = t.target;
                                    if (e instanceof Element)
                                        if (
                                            ((this.event = t),
                                            this.buttonDOM.contains(e))
                                        ) {
                                            if (
                                                (t.preventDefault(),
                                                this.menuOpen)
                                            )
                                                return void this._closeMenu();
                                            this._openMenu();
                                            let e = t.pageX,
                                                s = t.pageY;
                                            e > this.limits.x &&
                                                (e -= this.rect.width),
                                                s > this.limits.y &&
                                                    (s -= this.rect.height),
                                                (this.wrapperDOM.style.top = `${s}px`),
                                                (this.wrapperDOM.style.left = `${e}px`);
                                        } else if (this.menuDOM.contains(e)) {
                                            const t = l(
                                                    this.options.classes.menu
                                                ),
                                                s = e.closest(`${t} > li`);
                                            if (!s) return;
                                            const i = s.querySelector(
                                                "input[type=checkbox]"
                                            );
                                            i.contains(e) ||
                                                (i.checked = !i.checked);
                                            const n = Number(s.dataset.column);
                                            i.checked
                                                ? this.dt.columns.show([n])
                                                : this.dt.columns.hide([n]);
                                        } else
                                            this.menuOpen && this._closeMenu();
                                }
                            }
                            (exports.DataTable = class {
                                constructor(t, e = {}) {
                                    const s =
                                        "string" == typeof t
                                            ? document.querySelector(t)
                                            : t;
                                    s instanceof HTMLTableElement
                                        ? (this.dom = s)
                                        : ((this.dom =
                                              document.createElement("table")),
                                          s.appendChild(this.dom));
                                    const i = {
                                            ...tt.diffDomOptions,
                                            ...e.diffDomOptions,
                                        },
                                        n = { ...tt.labels, ...e.labels },
                                        a = { ...tt.classes, ...e.classes };
                                    (this.options = {
                                        ...tt,
                                        ...e,
                                        diffDomOptions: i,
                                        labels: n,
                                        classes: a,
                                    }),
                                        (this._initialInnerHTML = this.options
                                            .destroyable
                                            ? this.dom.innerHTML
                                            : ""),
                                        this.options.tabIndex
                                            ? (this.dom.tabIndex =
                                                  this.options.tabIndex)
                                            : this.options.rowNavigation &&
                                              -1 === this.dom.tabIndex &&
                                              (this.dom.tabIndex = 0),
                                        (this._listeners = {
                                            onResize: () => this._onResize(),
                                        }),
                                        (this._dd = new Y(
                                            this.options.diffDomOptions || {}
                                        )),
                                        (this.initialized = !1),
                                        (this._events = {}),
                                        (this._currentPage = 0),
                                        (this.onFirstPage = !0),
                                        (this.hasHeadings = !1),
                                        (this.hasRows = !1),
                                        (this._searchQueries = []),
                                        this.init();
                                }
                                init() {
                                    if (
                                        this.initialized ||
                                        d(this.dom, this.options.classes.table)
                                    )
                                        return !1;
                                    (this._virtualDOM = S(
                                        this.dom,
                                        this.options.diffDomOptions || {}
                                    )),
                                        (this._tableAttributes = {
                                            ...this._virtualDOM.attributes,
                                        }),
                                        (this._tableFooters =
                                            this._virtualDOM.childNodes?.filter(
                                                (t) => "TFOOT" === t.nodeName
                                            ) ?? []),
                                        (this._tableCaptions =
                                            this._virtualDOM.childNodes?.filter(
                                                (t) => "CAPTION" === t.nodeName
                                            ) ?? []),
                                        void 0 !== this.options.caption &&
                                            this._tableCaptions.push({
                                                nodeName: "CAPTION",
                                                childNodes: [
                                                    {
                                                        nodeName: "#text",
                                                        data: this.options
                                                            .caption,
                                                    },
                                                ],
                                            }),
                                        (this.rows = new G(this)),
                                        (this.columns = new K(this)),
                                        (this.data = Z(
                                            this.options.data,
                                            this.dom,
                                            this.columns.settings,
                                            this.options.type,
                                            this.options.format
                                        )),
                                        this._render(),
                                        setTimeout(() => {
                                            this.emit("datatable.init"),
                                                (this.initialized = !0);
                                        }, 10);
                                }
                                _render() {
                                    (this.wrapperDOM = s("div", {
                                        class: `${this.options.classes.wrapper} ${this.options.classes.loading}`,
                                    })),
                                        (this.wrapperDOM.innerHTML =
                                            this.options.template(
                                                this.options,
                                                this.dom
                                            ));
                                    const t = l(this.options.classes.selector),
                                        e = this.wrapperDOM.querySelector(
                                            `select${t}`
                                        );
                                    e &&
                                    this.options.paging &&
                                    this.options.perPageSelect
                                        ? this.options.perPageSelect.forEach(
                                              (t) => {
                                                  const [s, i] = Array.isArray(
                                                          t
                                                      )
                                                          ? [t[0], t[1]]
                                                          : [String(t), t],
                                                      n =
                                                          i ===
                                                          this.options.perPage,
                                                      a = new Option(
                                                          s,
                                                          String(i),
                                                          n,
                                                          n
                                                      );
                                                  e.appendChild(a);
                                              }
                                          )
                                        : e && e.parentElement.removeChild(e);
                                    const i = l(this.options.classes.container);
                                    (this.containerDOM =
                                        this.wrapperDOM.querySelector(i)),
                                        (this._pagerDOMs = []);
                                    const n = l(
                                        this.options.classes.pagination
                                    );
                                    Array.from(
                                        this.wrapperDOM.querySelectorAll(n)
                                    ).forEach((t) => {
                                        t instanceof HTMLElement &&
                                            ((t.innerHTML = `<ul class="${this.options.classes.paginationList}"></ul>`),
                                            this._pagerDOMs.push(
                                                t.firstElementChild
                                            ));
                                    }),
                                        (this._virtualPagerDOM = {
                                            nodeName: "UL",
                                            attributes: {
                                                class: this.options.classes
                                                    .paginationList,
                                            },
                                        });
                                    const a = l(this.options.classes.info);
                                    (this._label =
                                        this.wrapperDOM.querySelector(a)),
                                        this.dom.parentElement.replaceChild(
                                            this.wrapperDOM,
                                            this.dom
                                        ),
                                        this.containerDOM.appendChild(this.dom),
                                        (this._rect =
                                            this.dom.getBoundingClientRect()),
                                        this._fixHeight(),
                                        this.options.header ||
                                            this.wrapperDOM.classList.add(
                                                "no-header"
                                            ),
                                        this.options.footer ||
                                            this.wrapperDOM.classList.add(
                                                "no-footer"
                                            ),
                                        this.options.sortable &&
                                            this.wrapperDOM.classList.add(
                                                "sortable"
                                            ),
                                        this.options.searchable &&
                                            this.wrapperDOM.classList.add(
                                                "searchable"
                                            ),
                                        this.options.fixedHeight &&
                                            this.wrapperDOM.classList.add(
                                                "fixed-height"
                                            ),
                                        this.options.fixedColumns &&
                                            this.wrapperDOM.classList.add(
                                                "fixed-columns"
                                            ),
                                        this._bindEvents(),
                                        this.columns._state.sort &&
                                            this.columns.sort(
                                                this.columns._state.sort.column,
                                                this.columns._state.sort.dir,
                                                !0
                                            ),
                                        this.update(!0);
                                }
                                _renderTable(t = {}) {
                                    let e;
                                    e =
                                        (this.options.paging ||
                                            this._searchQueries.length ||
                                            this.columns._state.filters
                                                .length) &&
                                        this._currentPage &&
                                        this.pages.length &&
                                        !t.noPaging
                                            ? this.pages[this._currentPage - 1]
                                            : this.data.data.map((t, e) => ({
                                                  row: t,
                                                  index: e,
                                              }));
                                    let s = q(
                                        this._tableAttributes,
                                        this.data.headings,
                                        e,
                                        this.columns.settings,
                                        this.columns._state,
                                        this.rows.cursor,
                                        this.options,
                                        t,
                                        this._tableFooters,
                                        this._tableCaptions
                                    );
                                    if (this.options.tableRender) {
                                        const t = this.options.tableRender(
                                            this.data,
                                            s,
                                            "main"
                                        );
                                        t && (s = t);
                                    }
                                    const i = this._dd.diff(
                                        this._virtualDOM,
                                        s
                                    );
                                    this._dd.apply(this.dom, i),
                                        (this._virtualDOM = s);
                                }
                                _renderPage(t = !1) {
                                    this.hasRows && this.totalPages
                                        ? (this._currentPage >
                                              this.totalPages &&
                                              (this._currentPage = 1),
                                          this._renderTable(),
                                          (this.onFirstPage =
                                              1 === this._currentPage),
                                          (this.onLastPage =
                                              this._currentPage ===
                                              this.lastPage))
                                        : this.setMessage(
                                              this.options.labels.noRows
                                          );
                                    let e,
                                        s = 0,
                                        i = 0,
                                        n = 0;
                                    if (
                                        (this.totalPages &&
                                            ((s = this._currentPage - 1),
                                            (i = s * this.options.perPage),
                                            (n = i + this.pages[s].length),
                                            (i += 1),
                                            (e = this._searchQueries.length
                                                ? this._searchData.length
                                                : this.data.data.length)),
                                        this._label &&
                                            this.options.labels.info.length)
                                    ) {
                                        const t = this.options.labels.info
                                            .replace("{start}", String(i))
                                            .replace("{end}", String(n))
                                            .replace(
                                                "{page}",
                                                String(this._currentPage)
                                            )
                                            .replace(
                                                "{pages}",
                                                String(this.totalPages)
                                            )
                                            .replace("{rows}", String(e));
                                        this._label.innerHTML = e ? t : "";
                                    }
                                    if (
                                        (1 == this._currentPage &&
                                            this._fixHeight(),
                                        this.options.rowNavigation &&
                                            this._currentPage &&
                                            (!this.rows.cursor ||
                                                !this.pages[
                                                    this._currentPage - 1
                                                ].find(
                                                    (t) =>
                                                        t.index ===
                                                        this.rows.cursor
                                                )))
                                    ) {
                                        const e =
                                            this.pages[this._currentPage - 1];
                                        e.length &&
                                            (t
                                                ? this.rows.setCursor(
                                                      e[e.length - 1].index
                                                  )
                                                : this.rows.setCursor(
                                                      e[0].index
                                                  ));
                                    }
                                }
                                _renderPagers() {
                                    if (!this.options.paging) return;
                                    let t = st(
                                        this.onFirstPage,
                                        this.onLastPage,
                                        this._currentPage,
                                        this.totalPages,
                                        this.options
                                    );
                                    if (this.options.pagerRender) {
                                        const e = this.options.pagerRender(
                                            [
                                                this.onFirstPage,
                                                this.onLastPage,
                                                this._currentPage,
                                                this.totalPages,
                                            ],
                                            t
                                        );
                                        e && (t = e);
                                    }
                                    const e = this._dd.diff(
                                        this._virtualPagerDOM,
                                        t
                                    );
                                    this._pagerDOMs.forEach((t) => {
                                        this._dd.apply(t, e);
                                    }),
                                        (this._virtualPagerDOM = t);
                                }
                                _renderSeparateHeader() {
                                    const t = this.dom.parentElement;
                                    this.headerDOM ||
                                        ((this.headerDOM =
                                            document.createElement("div")),
                                        (this._virtualHeaderDOM = {
                                            nodeName: "DIV",
                                        })),
                                        t.parentElement.insertBefore(
                                            this.headerDOM,
                                            t
                                        );
                                    let e = {
                                        nodeName: "TABLE",
                                        attributes: this._tableAttributes,
                                        childNodes: [
                                            {
                                                nodeName: "THEAD",
                                                childNodes: [
                                                    j(
                                                        this.data.headings,
                                                        this.columns.settings,
                                                        this.columns._state,
                                                        this.options,
                                                        { unhideHeader: !0 }
                                                    ),
                                                ],
                                            },
                                        ],
                                    };
                                    if (
                                        ((e.attributes.class = c(
                                            e.attributes.class,
                                            this.options.classes.table
                                        )),
                                        this.options.tableRender)
                                    ) {
                                        const t = this.options.tableRender(
                                            this.data,
                                            e,
                                            "header"
                                        );
                                        t && (e = t);
                                    }
                                    const s = {
                                            nodeName: "DIV",
                                            attributes: {
                                                class: this.options.classes
                                                    .headercontainer,
                                            },
                                            childNodes: [e],
                                        },
                                        i = this._dd.diff(
                                            this._virtualHeaderDOM,
                                            s
                                        );
                                    this._dd.apply(this.headerDOM, i),
                                        (this._virtualHeaderDOM = s);
                                    const n =
                                        this.headerDOM.firstElementChild
                                            .clientWidth - this.dom.clientWidth;
                                    if (n) {
                                        const t = structuredClone(
                                            this._virtualHeaderDOM
                                        );
                                        t.attributes.style = `padding-right: ${n}px;`;
                                        const e = this._dd.diff(
                                            this._virtualHeaderDOM,
                                            t
                                        );
                                        this._dd.apply(this.headerDOM, e),
                                            (this._virtualHeaderDOM = t);
                                    }
                                    t.scrollHeight > t.clientHeight &&
                                        (t.style.overflowY = "scroll");
                                }
                                _bindEvents() {
                                    if (this.options.perPageSelect) {
                                        const t = l(
                                                this.options.classes.selector
                                            ),
                                            e =
                                                this.wrapperDOM.querySelector(
                                                    t
                                                );
                                        e &&
                                            e instanceof HTMLSelectElement &&
                                            e.addEventListener(
                                                "change",
                                                () => {
                                                    (this.options.perPage =
                                                        parseInt(e.value, 10)),
                                                        this.update(),
                                                        this._fixHeight(),
                                                        this.emit(
                                                            "datatable.perpage",
                                                            this.options.perPage
                                                        );
                                                },
                                                !1
                                            );
                                    }
                                    this.options.searchable &&
                                        this.wrapperDOM.addEventListener(
                                            "input",
                                            (t) => {
                                                const e = l(
                                                        this.options.classes
                                                            .input
                                                    ),
                                                    s = t.target;
                                                if (
                                                    !(
                                                        s instanceof
                                                            HTMLInputElement &&
                                                        s.matches(e)
                                                    )
                                                )
                                                    return;
                                                t.preventDefault();
                                                const i = [];
                                                if (
                                                    (Array.from(
                                                        this.wrapperDOM.querySelectorAll(
                                                            e
                                                        )
                                                    )
                                                        .filter(
                                                            (t) =>
                                                                t.value.length
                                                        )
                                                        .forEach((t) => {
                                                            const e =
                                                                    t.dataset
                                                                        .and ||
                                                                    this.options
                                                                        .searchAnd,
                                                                s =
                                                                    t.dataset
                                                                        .querySeparator ||
                                                                    this.options
                                                                        .searchQuerySeparator
                                                                        ? t.value.split(
                                                                              this
                                                                                  .options
                                                                                  .searchQuerySeparator
                                                                          )
                                                                        : [
                                                                              t.value,
                                                                          ];
                                                            e
                                                                ? s.forEach(
                                                                      (e) => {
                                                                          t
                                                                              .dataset
                                                                              .columns
                                                                              ? i.push(
                                                                                    {
                                                                                        terms: [
                                                                                            e,
                                                                                        ],
                                                                                        columns:
                                                                                            JSON.parse(
                                                                                                t
                                                                                                    .dataset
                                                                                                    .columns
                                                                                            ),
                                                                                    }
                                                                                )
                                                                              : i.push(
                                                                                    {
                                                                                        terms: [
                                                                                            e,
                                                                                        ],
                                                                                        columns:
                                                                                            void 0,
                                                                                    }
                                                                                );
                                                                      }
                                                                  )
                                                                : t.dataset
                                                                      .columns
                                                                ? i.push({
                                                                      terms: s,
                                                                      columns:
                                                                          JSON.parse(
                                                                              t
                                                                                  .dataset
                                                                                  .columns
                                                                          ),
                                                                  })
                                                                : i.push({
                                                                      terms: s,
                                                                      columns:
                                                                          void 0,
                                                                  });
                                                        }),
                                                    1 === i.length &&
                                                        1 === i[0].terms.length)
                                                ) {
                                                    const t = i[0];
                                                    this.search(
                                                        t.terms[0],
                                                        t.columns
                                                    );
                                                } else this.multiSearch(i);
                                            }
                                        ),
                                        this.wrapperDOM.addEventListener(
                                            "click",
                                            (t) => {
                                                const e =
                                                    t.target.closest(
                                                        "a, button"
                                                    );
                                                if (e)
                                                    if (
                                                        e.hasAttribute(
                                                            "data-page"
                                                        )
                                                    )
                                                        this.page(
                                                            parseInt(
                                                                e.getAttribute(
                                                                    "data-page"
                                                                ),
                                                                10
                                                            )
                                                        ),
                                                            t.preventDefault();
                                                    else if (
                                                        d(
                                                            e,
                                                            this.options.classes
                                                                .sorter
                                                        )
                                                    ) {
                                                        const s = Array.from(
                                                                e.parentElement
                                                                    .parentElement
                                                                    .children
                                                            ).indexOf(
                                                                e.parentElement
                                                            ),
                                                            i = o(
                                                                s,
                                                                this.columns
                                                                    .settings
                                                            );
                                                        this.columns.sort(i),
                                                            t.preventDefault();
                                                    } else if (
                                                        d(
                                                            e,
                                                            this.options.classes
                                                                .filter
                                                        )
                                                    ) {
                                                        const s = Array.from(
                                                                e.parentElement
                                                                    .parentElement
                                                                    .children
                                                            ).indexOf(
                                                                e.parentElement
                                                            ),
                                                            i = o(
                                                                s,
                                                                this.columns
                                                                    .settings
                                                            );
                                                        this.columns.filter(i),
                                                            t.preventDefault();
                                                    }
                                            },
                                            !1
                                        ),
                                        this.options.rowNavigation
                                            ? (this.dom.addEventListener(
                                                  "keydown",
                                                  (t) => {
                                                      if ("ArrowUp" === t.key) {
                                                          let e;
                                                          t.preventDefault(),
                                                              t.stopPropagation(),
                                                              this.pages[
                                                                  this
                                                                      ._currentPage -
                                                                      1
                                                              ].find(
                                                                  (t) =>
                                                                      t.index ===
                                                                          this
                                                                              .rows
                                                                              .cursor ||
                                                                      ((e = t),
                                                                      !1)
                                                              ),
                                                              e
                                                                  ? this.rows.setCursor(
                                                                        e.index
                                                                    )
                                                                  : this
                                                                        .onFirstPage ||
                                                                    this.page(
                                                                        this
                                                                            ._currentPage -
                                                                            1,
                                                                        !0
                                                                    );
                                                      } else if (
                                                          "ArrowDown" === t.key
                                                      ) {
                                                          let e;
                                                          t.preventDefault(),
                                                              t.stopPropagation();
                                                          const s = this.pages[
                                                              this
                                                                  ._currentPage -
                                                                  1
                                                          ].find(
                                                              (t) =>
                                                                  !!e ||
                                                                  (t.index ===
                                                                      this.rows
                                                                          .cursor &&
                                                                      (e = !0),
                                                                  !1)
                                                          );
                                                          s
                                                              ? this.rows.setCursor(
                                                                    s.index
                                                                )
                                                              : this
                                                                    .onLastPage ||
                                                                this.page(
                                                                    this
                                                                        ._currentPage +
                                                                        1
                                                                );
                                                      } else
                                                          [
                                                              "Enter",
                                                              " ",
                                                          ].includes(t.key) &&
                                                              this.emit(
                                                                  "datatable.selectrow",
                                                                  this.rows
                                                                      .cursor,
                                                                  t
                                                              );
                                                  }
                                              ),
                                              this.dom.addEventListener(
                                                  "mousedown",
                                                  (t) => {
                                                      const e = t.target;
                                                      if (
                                                          e instanceof
                                                              Element &&
                                                          this.dom.matches(
                                                              ":focus"
                                                          )
                                                      ) {
                                                          const s = Array.from(
                                                              this.dom.querySelectorAll(
                                                                  "tbody > tr"
                                                              )
                                                          ).find((t) =>
                                                              t.contains(e)
                                                          );
                                                          s &&
                                                              s instanceof
                                                                  HTMLElement &&
                                                              this.emit(
                                                                  "datatable.selectrow",
                                                                  parseInt(
                                                                      s.dataset
                                                                          .index,
                                                                      10
                                                                  ),
                                                                  t
                                                              );
                                                      }
                                                  }
                                              ))
                                            : this.dom.addEventListener(
                                                  "mousedown",
                                                  (t) => {
                                                      const e = t.target;
                                                      if (
                                                          !(
                                                              e instanceof
                                                              Element
                                                          )
                                                      )
                                                          return;
                                                      const s = Array.from(
                                                          this.dom.querySelectorAll(
                                                              "tbody > tr"
                                                          )
                                                      ).find((t) =>
                                                          t.contains(e)
                                                      );
                                                      s &&
                                                          s instanceof
                                                              HTMLElement &&
                                                          this.emit(
                                                              "datatable.selectrow",
                                                              parseInt(
                                                                  s.dataset
                                                                      .index,
                                                                  10
                                                              ),
                                                              t
                                                          );
                                                  }
                                              ),
                                        window.addEventListener(
                                            "resize",
                                            this._listeners.onResize
                                        );
                                }
                                _onResize() {
                                    (this._rect =
                                        this.containerDOM.getBoundingClientRect()),
                                        this._rect.width && this.update(!0);
                                }
                                destroy() {
                                    this.options.destroyable &&
                                        ((this.dom.innerHTML =
                                            this._initialInnerHTML),
                                        this.options.classes.table
                                            ?.split(" ")
                                            .forEach((t) =>
                                                this.wrapperDOM.classList.remove(
                                                    t
                                                )
                                            ),
                                        this.wrapperDOM.parentElement &&
                                            this.wrapperDOM.parentElement.replaceChild(
                                                this.dom,
                                                this.wrapperDOM
                                            ),
                                        (this.initialized = !1),
                                        window.removeEventListener(
                                            "resize",
                                            this._listeners.onResize
                                        ));
                                }
                                update(t = !1) {
                                    t &&
                                        (this.columns._measureWidths(),
                                        (this.hasRows = Boolean(
                                            this.data.data.length
                                        )),
                                        (this.hasHeadings = Boolean(
                                            this.data.headings.length
                                        ))),
                                        this.options.classes.empty
                                            ?.split(" ")
                                            .forEach((t) =>
                                                this.wrapperDOM.classList.remove(
                                                    t
                                                )
                                            ),
                                        this._paginate(),
                                        this._renderPage(),
                                        this._renderPagers(),
                                        this.options.scrollY.length &&
                                            this._renderSeparateHeader(),
                                        this.emit("datatable.update");
                                }
                                _paginate() {
                                    let t = this.data.data.map((t, e) => ({
                                        row: t,
                                        index: e,
                                    }));
                                    return (
                                        this._searchQueries.length &&
                                            ((t = []),
                                            this._searchData.forEach((e) =>
                                                t.push({
                                                    index: e,
                                                    row: this.data.data[e],
                                                })
                                            )),
                                        this.columns._state.filters.length &&
                                            this.columns._state.filters.forEach(
                                                (e, s) => {
                                                    e &&
                                                        (t = t.filter((t) => {
                                                            const i =
                                                                t.row.cells[s];
                                                            return "function" ==
                                                                typeof e
                                                                ? e(i.data)
                                                                : n(i) === e;
                                                        }));
                                                }
                                            ),
                                        this.options.paging &&
                                        this.options.perPage > 0
                                            ? (this.pages = t
                                                  .map((e, s) =>
                                                      s %
                                                          this.options
                                                              .perPage ==
                                                      0
                                                          ? t.slice(
                                                                s,
                                                                s +
                                                                    this.options
                                                                        .perPage
                                                            )
                                                          : null
                                                  )
                                                  .filter((t) => t))
                                            : (this.pages = [t]),
                                        (this.totalPages = this.lastPage =
                                            this.pages.length),
                                        this._currentPage ||
                                            (this._currentPage = 1),
                                        this.totalPages
                                    );
                                }
                                _fixHeight() {
                                    this.options.fixedHeight &&
                                        ((this.containerDOM.style.height =
                                            null),
                                        (this._rect =
                                            this.containerDOM.getBoundingClientRect()),
                                        (this.containerDOM.style.height = `${this._rect.height}px`));
                                }
                                search(t, e = void 0) {
                                    if (!t.length)
                                        return (
                                            (this._currentPage = 1),
                                            (this._searchQueries = []),
                                            (this._searchData = []),
                                            this.update(),
                                            this.emit(
                                                "datatable.search",
                                                "",
                                                []
                                            ),
                                            this.wrapperDOM.classList.remove(
                                                "search-results"
                                            ),
                                            !1
                                        );
                                    this.multiSearch([
                                        { terms: [t], columns: e || void 0 },
                                    ]),
                                        this.emit(
                                            "datatable.search",
                                            t,
                                            this._searchData
                                        );
                                }
                                multiSearch(t) {
                                    if (!this.hasRows) return !1;
                                    (this._currentPage = 1),
                                        (this._searchData = []);
                                    const e = t
                                        .map((t) => ({
                                            columns: t.columns,
                                            terms: t.terms
                                                .map((t) => t.trim())
                                                .filter((t) => t),
                                        }))
                                        .filter((t) => t.terms.length);
                                    if (((this._searchQueries = e), !e.length))
                                        return (
                                            this.update(),
                                            this.emit(
                                                "datatable.multisearch",
                                                e,
                                                this._searchData
                                            ),
                                            this.wrapperDOM.classList.remove(
                                                "search-results"
                                            ),
                                            !1
                                        );
                                    const s = e.map((t) =>
                                        this.columns.settings.map((e, s) => {
                                            if (
                                                e.hidden ||
                                                !e.searchable ||
                                                (t.columns &&
                                                    !t.columns.includes(s))
                                            )
                                                return !1;
                                            let i = t.terms;
                                            const n =
                                                e.sensitivity ||
                                                this.options.sensitivity;
                                            ["base", "accent"].includes(n) &&
                                                (i = i.map((t) =>
                                                    t.toLowerCase()
                                                )),
                                                ["base", "case"].includes(n) &&
                                                    (i = i.map((t) =>
                                                        t
                                                            .normalize("NFD")
                                                            .replace(
                                                                /\p{Diacritic}/gu,
                                                                ""
                                                            )
                                                    ));
                                            return (
                                                (e.ignorePunctuation ??
                                                    this.options
                                                        .ignorePunctuation) &&
                                                    (i = i.map((t) =>
                                                        t.replace(
                                                            /[.,/#!$%^&*;:{}=-_`~()]/g,
                                                            ""
                                                        )
                                                    )),
                                                i
                                            );
                                        })
                                    );
                                    this.data.data.forEach((t, e) => {
                                        const i = t.cells.map((t, e) => {
                                            let s = n(t).trim();
                                            const i = this.columns.settings[e];
                                            if (s.length) {
                                                const t =
                                                    i.sensitivity ||
                                                    this.options.sensitivity;
                                                ["base", "accent"].includes(
                                                    t
                                                ) && (s = s.toLowerCase()),
                                                    ["base", "case"].includes(
                                                        t
                                                    ) &&
                                                        (s = s
                                                            .normalize("NFD")
                                                            .replace(
                                                                /\p{Diacritic}/gu,
                                                                ""
                                                            ));
                                                (i.ignorePunctuation ??
                                                    this.options
                                                        .ignorePunctuation) &&
                                                    (s = s.replace(
                                                        /[.,/#!$%^&*;:{}=-_`~()]/g,
                                                        ""
                                                    ));
                                            }
                                            const a =
                                                i.searchItemSeparator ||
                                                this.options
                                                    .searchItemSeparator;
                                            return a ? s.split(a) : [s];
                                        });
                                        s.every((t) =>
                                            t.find(
                                                (t, e) =>
                                                    !!t &&
                                                    t.find((t) =>
                                                        i[e].find((e) =>
                                                            e.includes(t)
                                                        )
                                                    )
                                            )
                                        ) && this._searchData.push(e);
                                    }),
                                        this.wrapperDOM.classList.add(
                                            "search-results"
                                        ),
                                        this._searchData.length
                                            ? this.update()
                                            : (this.wrapperDOM.classList.remove(
                                                  "search-results"
                                              ),
                                              this.setMessage(
                                                  this.options.labels.noResults
                                              )),
                                        this.emit(
                                            "datatable.multisearch",
                                            e,
                                            this._searchData
                                        );
                                }
                                page(t, e = !1) {
                                    return (
                                        t !== this._currentPage &&
                                        (isNaN(t) || (this._currentPage = t),
                                        !(t > this.pages.length || t < 0) &&
                                            (this._renderPage(e),
                                            this._renderPagers(),
                                            void this.emit(
                                                "datatable.page",
                                                t
                                            )))
                                    );
                                }
                                insert(e) {
                                    let s = [];
                                    if (Array.isArray(e)) {
                                        const t = this.data.headings.map(
                                            (t) => t.text ?? String(t.data)
                                        );
                                        e.forEach((e, i) => {
                                            const n = [];
                                            Object.entries(e).forEach(
                                                ([e, s]) => {
                                                    const a = t.indexOf(e);
                                                    a > -1
                                                        ? (n[a] = Q(
                                                              s,
                                                              this.columns
                                                                  .settings[a]
                                                          ))
                                                        : this.hasHeadings ||
                                                          this.hasRows ||
                                                          0 !== i ||
                                                          ((n[t.length] = Q(
                                                              s,
                                                              this.columns
                                                                  .settings[
                                                                  t.length
                                                              ]
                                                          )),
                                                          t.push(e),
                                                          this.data.headings.push(
                                                              X(e)
                                                          ));
                                                }
                                            ),
                                                s.push({ cells: n });
                                        });
                                    } else
                                        t(e) &&
                                            (!e.headings ||
                                            this.hasHeadings ||
                                            this.hasRows
                                                ? e.data &&
                                                  Array.isArray(e.data) &&
                                                  (s = e.data.map((t) => {
                                                      let e, s;
                                                      return (
                                                          Array.isArray(t)
                                                              ? ((e = {}),
                                                                (s = t))
                                                              : ((e =
                                                                    t.attributes),
                                                                (s = t.cells)),
                                                          {
                                                              attributes: e,
                                                              cells: s.map(
                                                                  (t, e) =>
                                                                      Q(
                                                                          t,
                                                                          this
                                                                              .columns
                                                                              .settings[
                                                                              e
                                                                          ]
                                                                      )
                                                              ),
                                                          }
                                                      );
                                                  }))
                                                : (this.data = Z(
                                                      e,
                                                      void 0,
                                                      this.columns.settings,
                                                      this.options.type,
                                                      this.options.format
                                                  )));
                                    s.length &&
                                        s.forEach((t) =>
                                            this.data.data.push(t)
                                        ),
                                        (this.hasHeadings = Boolean(
                                            this.data.headings.length
                                        )),
                                        this.columns._state.sort &&
                                            this.columns.sort(
                                                this.columns._state.sort.column,
                                                this.columns._state.sort.dir,
                                                !0
                                            ),
                                        this.update(!0);
                                }
                                refresh() {
                                    if (this.options.searchable) {
                                        const t = l(this.options.classes.input);
                                        Array.from(
                                            this.wrapperDOM.querySelectorAll(t)
                                        ).forEach((t) => (t.value = "")),
                                            (this._searchQueries = []);
                                    }
                                    (this._currentPage = 1),
                                        (this.onFirstPage = !0),
                                        this.update(!0),
                                        this.emit("datatable.refresh");
                                }
                                print() {
                                    const t = s("table");
                                    let e = q(
                                        this._tableAttributes,
                                        this.data.headings,
                                        this.data.data.map((t, e) => ({
                                            row: t,
                                            index: e,
                                        })),
                                        this.columns.settings,
                                        this.columns._state,
                                        !1,
                                        this.options,
                                        {
                                            noColumnWidths: !0,
                                            unhideHeader: !0,
                                        },
                                        this._tableFooters,
                                        this._tableCaptions
                                    );
                                    if (this.options.tableRender) {
                                        const t = this.options.tableRender(
                                            this.data,
                                            e,
                                            "print"
                                        );
                                        t && (e = t);
                                    }
                                    const i = this._dd.diff(
                                        { nodeName: "TABLE" },
                                        e
                                    );
                                    this._dd.apply(t, i);
                                    const n = window.open();
                                    n.document.body.appendChild(t), n.print();
                                }
                                setMessage(t) {
                                    const e =
                                        this.data.headings.filter(
                                            (t, e) =>
                                                !this.columns.settings[e]
                                                    ?.hidden
                                        ).length || 1;
                                    this.options.classes.empty
                                        ?.split(" ")
                                        .forEach((t) =>
                                            this.wrapperDOM.classList.add(t)
                                        ),
                                        this._label &&
                                            (this._label.innerHTML = ""),
                                        (this.totalPages = 0),
                                        this._renderPagers();
                                    let s = {
                                        nodeName: "TABLE",
                                        attributes: this._tableAttributes,
                                        childNodes: [
                                            {
                                                nodeName: "THEAD",
                                                childNodes: [
                                                    j(
                                                        this.data.headings,
                                                        this.columns.settings,
                                                        this.columns._state,
                                                        this.options,
                                                        {}
                                                    ),
                                                ],
                                            },
                                            {
                                                nodeName: "TBODY",
                                                childNodes: [
                                                    {
                                                        nodeName: "TR",
                                                        childNodes: [
                                                            {
                                                                nodeName: "TD",
                                                                attributes: {
                                                                    class: this
                                                                        .options
                                                                        .classes
                                                                        .empty,
                                                                    colspan:
                                                                        String(
                                                                            e
                                                                        ),
                                                                },
                                                                childNodes: [
                                                                    {
                                                                        nodeName:
                                                                            "#text",
                                                                        data: t,
                                                                    },
                                                                ],
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    };
                                    if (
                                        (this._tableFooters.forEach((t) =>
                                            s.childNodes.push(t)
                                        ),
                                        this._tableCaptions.forEach((t) =>
                                            s.childNodes.push(t)
                                        ),
                                        (s.attributes.class = c(
                                            s.attributes.class,
                                            this.options.classes.table
                                        )),
                                        this.options.tableRender)
                                    ) {
                                        const t = this.options.tableRender(
                                            this.data,
                                            s,
                                            "message"
                                        );
                                        t && (s = t);
                                    }
                                    const i = this._dd.diff(
                                        this._virtualDOM,
                                        s
                                    );
                                    this._dd.apply(this.dom, i),
                                        (this._virtualDOM = s);
                                }
                                on(t, e) {
                                    (this._events[t] = this._events[t] || []),
                                        this._events[t].push(e);
                                }
                                off(t, e) {
                                    t in this._events != !1 &&
                                        this._events[t].splice(
                                            this._events[t].indexOf(e),
                                            1
                                        );
                                }
                                emit(t, ...e) {
                                    if (t in this._events != !1)
                                        for (
                                            let s = 0;
                                            s < this._events[t].length;
                                            s++
                                        )
                                            this._events[t][s](...e);
                                }
                            }),
                                (exports.addColumnFilter = function (
                                    t,
                                    e = {}
                                ) {
                                    const s = new ot(t, e);
                                    return (
                                        t.initialized
                                            ? s.init()
                                            : t.on("datatable.init", () =>
                                                  s.init()
                                              ),
                                        s
                                    );
                                }),
                                (exports.convertCSV = function (e) {
                                    let s;
                                    if (!t(e)) return !1;
                                    const i = {
                                        lineDelimiter: "\n",
                                        columnDelimiter: ",",
                                        removeDoubleQuotes: !1,
                                        ...e,
                                    };
                                    if (i.data.length) {
                                        s = { data: [] };
                                        const t = i.data.split(i.lineDelimiter);
                                        if (
                                            (t.length &&
                                                (i.headings &&
                                                    ((s.headings = t[0].split(
                                                        i.columnDelimiter
                                                    )),
                                                    i.removeDoubleQuotes &&
                                                        (s.headings =
                                                            s.headings.map(
                                                                (t) =>
                                                                    t
                                                                        .trim()
                                                                        .replace(
                                                                            /(^"|"$)/g,
                                                                            ""
                                                                        )
                                                            )),
                                                    t.shift()),
                                                t.forEach((t, e) => {
                                                    s.data[e] = [];
                                                    const n = t.split(
                                                        i.columnDelimiter
                                                    );
                                                    n.length &&
                                                        n.forEach((t) => {
                                                            i.removeDoubleQuotes &&
                                                                (t = t
                                                                    .trim()
                                                                    .replace(
                                                                        /(^"|"$)/g,
                                                                        ""
                                                                    )),
                                                                s.data[e].push(
                                                                    t
                                                                );
                                                        });
                                                })),
                                            s)
                                        )
                                            return s;
                                    }
                                    return !1;
                                }),
                                (exports.convertJSON = function (s) {
                                    let i;
                                    if (!t(s)) return !1;
                                    const n = { data: "", ...s };
                                    if (n.data.length || t(n.data)) {
                                        const t =
                                            !!e(n.data) && JSON.parse(n.data);
                                        if (
                                            (t
                                                ? ((i = {
                                                      headings: [],
                                                      data: [],
                                                  }),
                                                  t.forEach((t, e) => {
                                                      (i.data[e] = []),
                                                          Object.entries(
                                                              t
                                                          ).forEach(
                                                              ([t, s]) => {
                                                                  i.headings.includes(
                                                                      t
                                                                  ) ||
                                                                      i.headings.push(
                                                                          t
                                                                      ),
                                                                      i.data[
                                                                          e
                                                                      ].push(s);
                                                              }
                                                          );
                                                  }))
                                                : console.warn(
                                                      "That's not valid JSON!"
                                                  ),
                                            i)
                                        )
                                            return i;
                                    }
                                    return !1;
                                }),
                                (exports.createElement = s),
                                (exports.exportCSV = function (e, s = {}) {
                                    if (!e.hasHeadings && !e.hasRows) return !1;
                                    if (!t(s)) return !1;
                                    const i = {
                                            download: !0,
                                            skipColumn: [],
                                            lineDelimiter: "\n",
                                            columnDelimiter: ",",
                                            ...s,
                                        },
                                        a = (t) =>
                                            !i.skipColumn.includes(t) &&
                                            !e.columns.settings[t]?.hidden,
                                        o = e.data.headings
                                            .filter((t, e) => a(e))
                                            .map((t) => t.text ?? t.data);
                                    let r;
                                    if (i.selection)
                                        if (Array.isArray(i.selection)) {
                                            r = [];
                                            for (
                                                let t = 0;
                                                t < i.selection.length;
                                                t++
                                            )
                                                r = r.concat(
                                                    e.pages[
                                                        i.selection[t] - 1
                                                    ].map((t) => t.row)
                                                );
                                        } else
                                            r = e.pages[i.selection - 1].map(
                                                (t) => t.row
                                            );
                                    else r = e.data.data;
                                    let l = [];
                                    if (
                                        ((l[0] = o),
                                        (l = l.concat(
                                            r.map((t) =>
                                                t.cells
                                                    .filter((t, e) => a(e))
                                                    .map((t) => n(t))
                                            )
                                        )),
                                        l.length)
                                    ) {
                                        let t = "";
                                        if (
                                            (l.forEach((e) => {
                                                e.forEach((e) => {
                                                    "string" == typeof e &&
                                                        (e = (e = (e = (e = (e =
                                                            e.trim()).replace(
                                                            /\s{2,}/g,
                                                            " "
                                                        )).replace(
                                                            /\n/g,
                                                            "  "
                                                        )).replace(
                                                            /"/g,
                                                            '""'
                                                        )).replace(
                                                            /#/g,
                                                            "%23"
                                                        )).includes(",") &&
                                                        (e = `"${e}"`),
                                                        (t +=
                                                            e +
                                                            i.columnDelimiter);
                                                }),
                                                    (t = t
                                                        .trim()
                                                        .substring(
                                                            0,
                                                            t.length - 1
                                                        )),
                                                    (t += i.lineDelimiter);
                                            }),
                                            (t = t
                                                .trim()
                                                .substring(0, t.length - 1)),
                                            i.download)
                                        ) {
                                            const e =
                                                document.createElement("a");
                                            (e.href = encodeURI(
                                                `data:text/csv;charset=utf-8,${t}`
                                            )),
                                                (e.download = `${
                                                    i.filename ||
                                                    "datatable_export"
                                                }.csv`),
                                                document.body.appendChild(e),
                                                e.click(),
                                                document.body.removeChild(e);
                                        }
                                        return t;
                                    }
                                    return !1;
                                }),
                                (exports.exportJSON = function (e, s = {}) {
                                    if (!e.hasHeadings && !e.hasRows) return !1;
                                    if (!t(s)) return !1;
                                    const i = {
                                            download: !0,
                                            skipColumn: [],
                                            replacer: null,
                                            space: 4,
                                            ...s,
                                        },
                                        a = (t) =>
                                            !i.skipColumn.includes(t) &&
                                            !e.columns.settings[t]?.hidden;
                                    let o;
                                    if (i.selection)
                                        if (Array.isArray(i.selection)) {
                                            o = [];
                                            for (
                                                let t = 0;
                                                t < i.selection.length;
                                                t++
                                            )
                                                o = o.concat(
                                                    e.pages[
                                                        i.selection[t] - 1
                                                    ].map((t) => t.row)
                                                );
                                        } else
                                            o = e.pages[i.selection - 1].map(
                                                (t) => t.row
                                            );
                                    else o = e.data.data;
                                    const r = o.map((t) =>
                                            t.cells
                                                .filter((t, e) => a(e))
                                                .map((t) => n(t))
                                        ),
                                        l = e.data.headings
                                            .filter((t, e) => a(e))
                                            .map(
                                                (t) => t.text ?? String(t.data)
                                            );
                                    if (r.length) {
                                        const t = [];
                                        r.forEach((e, s) => {
                                            (t[s] = t[s] || {}),
                                                e.forEach((e, i) => {
                                                    t[s][l[i]] = e;
                                                });
                                        });
                                        const e = JSON.stringify(
                                            t,
                                            i.replacer,
                                            i.space
                                        );
                                        if (i.download) {
                                            const t = new Blob([e], {
                                                    type: "data:application/json;charset=utf-8",
                                                }),
                                                s = URL.createObjectURL(t),
                                                n = document.createElement("a");
                                            (n.href = s),
                                                (n.download = `${
                                                    i.filename ||
                                                    "datatable_export"
                                                }.json`),
                                                document.body.appendChild(n),
                                                n.click(),
                                                document.body.removeChild(n),
                                                URL.revokeObjectURL(s);
                                        }
                                        return e;
                                    }
                                    return !1;
                                }),
                                (exports.exportSQL = function (e, s = {}) {
                                    if (!e.hasHeadings && !e.hasRows) return !1;
                                    if (!t(s)) return !1;
                                    const i = {
                                            download: !0,
                                            skipColumn: [],
                                            tableName: "myTable",
                                            ...s,
                                        },
                                        a = (t) =>
                                            !i.skipColumn.includes(t) &&
                                            !e.columns.settings[t]?.hidden;
                                    let o = [];
                                    if (i.selection)
                                        if (Array.isArray(i.selection))
                                            for (
                                                let t = 0;
                                                t < i.selection.length;
                                                t++
                                            )
                                                o = o.concat(
                                                    e.pages[
                                                        i.selection[t] - 1
                                                    ].map((t) => t.row)
                                                );
                                        else
                                            o = e.pages[i.selection - 1].map(
                                                (t) => t.row
                                            );
                                    else o = e.data.data;
                                    const r = o.map((t) =>
                                            t.cells
                                                .filter((t, e) => a(e))
                                                .map((t) => n(t))
                                        ),
                                        l = e.data.headings
                                            .filter((t, e) => a(e))
                                            .map(
                                                (t) => t.text ?? String(t.data)
                                            );
                                    if (r.length) {
                                        let t = `INSERT INTO \`${i.tableName}\` (`;
                                        if (
                                            (l.forEach((e) => {
                                                t += `\`${e}\`,`;
                                            }),
                                            (t = t
                                                .trim()
                                                .substring(0, t.length - 1)),
                                            (t += ") VALUES "),
                                            r.forEach((e) => {
                                                (t += "("),
                                                    e.forEach((e) => {
                                                        t +=
                                                            "string" == typeof e
                                                                ? `"${e}",`
                                                                : `${e},`;
                                                    }),
                                                    (t = t
                                                        .trim()
                                                        .substring(
                                                            0,
                                                            t.length - 1
                                                        )),
                                                    (t += "),");
                                            }),
                                            (t = t
                                                .trim()
                                                .substring(0, t.length - 1)),
                                            (t += ";"),
                                            i.download &&
                                                (t = `data:application/sql;charset=utf-8,${t}`),
                                            i.download)
                                        ) {
                                            const e =
                                                document.createElement("a");
                                            (e.href = encodeURI(t)),
                                                (e.download = `${
                                                    i.filename ||
                                                    "datatable_export"
                                                }.sql`),
                                                document.body.appendChild(e),
                                                e.click(),
                                                document.body.removeChild(e);
                                        }
                                        return t;
                                    }
                                    return !1;
                                }),
                                (exports.exportTXT = function (e, s = {}) {
                                    if (!e.hasHeadings && !e.hasRows) return !1;
                                    if (!t(s)) return !1;
                                    const i = {
                                            download: !0,
                                            skipColumn: [],
                                            lineDelimiter: "\n",
                                            columnDelimiter: ",",
                                            ...s,
                                        },
                                        a = (t) =>
                                            !i.skipColumn.includes(t) &&
                                            !e.columns.settings[t]?.hidden,
                                        o = e.data.headings
                                            .filter((t, e) => a(e))
                                            .map((t) => t.text ?? t.data);
                                    let r;
                                    if (i.selection)
                                        if (Array.isArray(i.selection)) {
                                            r = [];
                                            for (
                                                let t = 0;
                                                t < i.selection.length;
                                                t++
                                            )
                                                r = r.concat(
                                                    e.pages[
                                                        i.selection[t] - 1
                                                    ].map((t) => t.row)
                                                );
                                        } else
                                            r = e.pages[i.selection - 1].map(
                                                (t) => t.row
                                            );
                                    else r = e.data.data;
                                    let l = [];
                                    if (
                                        ((l[0] = o),
                                        (l = l.concat(
                                            r.map((t) =>
                                                t.cells
                                                    .filter((t, e) => a(e))
                                                    .map((t) => n(t))
                                            )
                                        )),
                                        l.length)
                                    ) {
                                        let t = "";
                                        if (
                                            (l.forEach((e) => {
                                                e.forEach((e) => {
                                                    "string" == typeof e &&
                                                        (e = (e = (e = (e = (e =
                                                            e.trim()).replace(
                                                            /\s{2,}/g,
                                                            " "
                                                        )).replace(
                                                            /\n/g,
                                                            "  "
                                                        )).replace(
                                                            /"/g,
                                                            '""'
                                                        )).replace(
                                                            /#/g,
                                                            "%23"
                                                        )).includes(",") &&
                                                        (e = `"${e}"`),
                                                        (t +=
                                                            e +
                                                            i.columnDelimiter);
                                                }),
                                                    (t = t
                                                        .trim()
                                                        .substring(
                                                            0,
                                                            t.length - 1
                                                        )),
                                                    (t += i.lineDelimiter);
                                            }),
                                            (t = t
                                                .trim()
                                                .substring(0, t.length - 1)),
                                            i.download &&
                                                (t = `data:text/csv;charset=utf-8,${t}`),
                                            i.download)
                                        ) {
                                            const e =
                                                document.createElement("a");
                                            (e.href = encodeURI(t)),
                                                (e.download = `${
                                                    i.filename ||
                                                    "datatable_export"
                                                }.txt`),
                                                document.body.appendChild(e),
                                                e.click(),
                                                document.body.removeChild(e);
                                        }
                                        return t;
                                    }
                                    return !1;
                                }),
                                (exports.isJson = e),
                                (exports.isObject = t),
                                (exports.makeEditable = function (t, e = {}) {
                                    const s = new nt(t, e);
                                    return (
                                        t.initialized
                                            ? s.init()
                                            : t.on("datatable.init", () =>
                                                  s.init()
                                              ),
                                        s
                                    );
                                });
                        }).call(this);
                    }).call(
                        this,
                        typeof global !== "undefined"
                            ? global
                            : typeof self !== "undefined"
                            ? self
                            : typeof window !== "undefined"
                            ? window
                            : {}
                    );
                },
                {},
            ],
        },
        {},
        [1]
    )(1);
});
