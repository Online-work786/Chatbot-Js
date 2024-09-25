/*! For license information please see chatbot.js.LICENSE.txt */
(() => {
    "use strict";
    var __webpack_modules__ = {
            469: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, {
                    G: () => ChatbotContextProvider,
                    o: () => useChatbotContext
                });
                var _neko_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(296),
                    _app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(966),
                    _app_chatbot_MwaiAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(137),
                    _app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(678);

                function _typeof(e) {
                    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, _typeof(e)
                }
                var _excluded = ["children"];

                function ownKeys(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function _objectSpread(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? ownKeys(Object(r), !0).forEach((function(t) {
                            _defineProperty(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }

                function _defineProperty(e, t, r) {
                    return (t = _toPropertyKey(t)) in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }

                function _toPropertyKey(e) {
                    var t = _toPrimitive(e, "string");
                    return "symbol" == _typeof(t) ? t : String(t)
                }

                function _toPrimitive(e, t) {
                    if ("object" != _typeof(e) || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != _typeof(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }

                function _createForOfIteratorHelper(e, t) {
                    var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!r) {
                        if (Array.isArray(e) || (r = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) {
                            r && (e = r);
                            var n = 0,
                                o = function() {};
                            return {
                                s: o,
                                n: function() {
                                    return n >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[n++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: o
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var a, i = !0,
                        s = !1;
                    return {
                        s: function() {
                            r = r.call(e)
                        },
                        n: function() {
                            var e = r.next();
                            return i = e.done, e
                        },
                        e: function(e) {
                            s = !0, a = e
                        },
                        f: function() {
                            try {
                                i || null == r.return || r.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                    }
                }

                function _toConsumableArray(e) {
                    return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread()
                }

                function _nonIterableSpread() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }

                function _iterableToArray(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }

                function _arrayWithoutHoles(e) {
                    if (Array.isArray(e)) return _arrayLikeToArray(e)
                }

                function _regeneratorRuntime() {
                    _regeneratorRuntime = function() {
                        return t
                    };
                    var e, t = {},
                        r = Object.prototype,
                        n = r.hasOwnProperty,
                        o = Object.defineProperty || function(e, t, r) {
                            e[t] = r.value
                        },
                        a = "function" == typeof Symbol ? Symbol : {},
                        i = a.iterator || "@@iterator",
                        s = a.asyncIterator || "@@asyncIterator",
                        c = a.toStringTag || "@@toStringTag";

                    function u(e, t, r) {
                        return Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), e[t]
                    }
                    try {
                        u({}, "")
                    } catch (e) {
                        u = function(e, t, r) {
                            return e[t] = r
                        }
                    }

                    function l(e, t, r, n) {
                        var a = t && t.prototype instanceof b ? t : b,
                            i = Object.create(a.prototype),
                            s = new A(n || []);
                        return o(i, "_invoke", {
                            value: E(e, r, s)
                        }), i
                    }

                    function p(e, t, r) {
                        try {
                            return {
                                type: "normal",
                                arg: e.call(t, r)
                            }
                        } catch (e) {
                            return {
                                type: "throw",
                                arg: e
                            }
                        }
                    }
                    t.wrap = l;
                    var f = "suspendedStart",
                        d = "suspendedYield",
                        h = "executing",
                        m = "completed",
                        y = {};

                    function b() {}

                    function g() {}

                    function _() {}
                    var v = {};
                    u(v, i, (function() {
                        return this
                    }));
                    var w = Object.getPrototypeOf,
                        C = w && w(w(O([])));
                    C && C !== r && n.call(C, i) && (v = C);
                    var x = _.prototype = b.prototype = Object.create(v);

                    function S(e) {
                        ["next", "throw", "return"].forEach((function(t) {
                            u(e, t, (function(e) {
                                return this._invoke(t, e)
                            }))
                        }))
                    }

                    function I(e, t) {
                        function r(o, a, i, s) {
                            var c = p(e[o], e, a);
                            if ("throw" !== c.type) {
                                var u = c.arg,
                                    l = u.value;
                                return l && "object" == _typeof(l) && n.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                                    r("next", e, i, s)
                                }), (function(e) {
                                    r("throw", e, i, s)
                                })) : t.resolve(l).then((function(e) {
                                    u.value = e, i(u)
                                }), (function(e) {
                                    return r("throw", e, i, s)
                                }))
                            }
                            s(c.arg)
                        }
                        var a;
                        o(this, "_invoke", {
                            value: function(e, n) {
                                function o() {
                                    return new t((function(t, o) {
                                        r(e, n, t, o)
                                    }))
                                }
                                return a = a ? a.then(o, o) : o()
                            }
                        })
                    }

                    function E(t, r, n) {
                        var o = f;
                        return function(a, i) {
                            if (o === h) throw new Error("Generator is already running");
                            if (o === m) {
                                if ("throw" === a) throw i;
                                return {
                                    value: e,
                                    done: !0
                                }
                            }
                            for (n.method = a, n.arg = i;;) {
                                var s = n.delegate;
                                if (s) {
                                    var c = R(s, n);
                                    if (c) {
                                        if (c === y) continue;
                                        return c
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if (o === f) throw o = m, n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                o = h;
                                var u = p(t, r, n);
                                if ("normal" === u.type) {
                                    if (o = n.done ? m : d, u.arg === y) continue;
                                    return {
                                        value: u.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === u.type && (o = m, n.method = "throw", n.arg = u.arg)
                            }
                        }
                    }

                    function R(t, r) {
                        var n = r.method,
                            o = t.iterator[n];
                        if (o === e) return r.delegate = null, "throw" === n && t.iterator.return && (r.method = "return", r.arg = e, R(t, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
                        var a = p(o, t.iterator, r.arg);
                        if ("throw" === a.type) return r.method = "throw", r.arg = a.arg, r.delegate = null, y;
                        var i = a.arg;
                        return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, y) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y)
                    }

                    function k(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                    }

                    function T(e) {
                        var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t
                    }

                    function A(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], e.forEach(k, this), this.reset(!0)
                    }

                    function O(t) {
                        if (t || "" === t) {
                            var r = t[i];
                            if (r) return r.call(t);
                            if ("function" == typeof t.next) return t;
                            if (!isNaN(t.length)) {
                                var o = -1,
                                    a = function r() {
                                        for (; ++o < t.length;)
                                            if (n.call(t, o)) return r.value = t[o], r.done = !1, r;
                                        return r.value = e, r.done = !0, r
                                    };
                                return a.next = a
                            }
                        }
                        throw new TypeError(_typeof(t) + " is not iterable")
                    }
                    return g.prototype = _, o(x, "constructor", {
                        value: _,
                        configurable: !0
                    }), o(_, "constructor", {
                        value: g,
                        configurable: !0
                    }), g.displayName = u(_, c, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name))
                    }, t.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, _) : (e.__proto__ = _, u(e, c, "GeneratorFunction")), e.prototype = Object.create(x), e
                    }, t.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }, S(I.prototype), u(I.prototype, s, (function() {
                        return this
                    })), t.AsyncIterator = I, t.async = function(e, r, n, o, a) {
                        void 0 === a && (a = Promise);
                        var i = new I(l(e, r, n, o), a);
                        return t.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                            return e.done ? e.value : i.next()
                        }))
                    }, S(x), u(x, c, "Generator"), u(x, i, (function() {
                        return this
                    })), u(x, "toString", (function() {
                        return "[object Generator]"
                    })), t.keys = function(e) {
                        var t = Object(e),
                            r = [];
                        for (var n in t) r.push(n);
                        return r.reverse(),
                            function e() {
                                for (; r.length;) {
                                    var n = r.pop();
                                    if (n in t) return e.value = n, e.done = !1, e
                                }
                                return e.done = !0, e
                            }
                    }, t.values = O, A.prototype = {
                        constructor: A,
                        reset: function(t) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(T), !t)
                                for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                        },
                        stop: function() {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval
                        },
                        dispatchException: function(t) {
                            if (this.done) throw t;
                            var r = this;

                            function o(n, o) {
                                return s.type = "throw", s.arg = t, r.next = n, o && (r.method = "next", r.arg = e), !!o
                            }
                            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                                var i = this.tryEntries[a],
                                    s = i.completion;
                                if ("root" === i.tryLoc) return o("end");
                                if (i.tryLoc <= this.prev) {
                                    var c = n.call(i, "catchLoc"),
                                        u = n.call(i, "finallyLoc");
                                    if (c && u) {
                                        if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                        if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                                    } else if (c) {
                                        if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                                    } else {
                                        if (!u) throw new Error("try statement without catch or finally");
                                        if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(e, t) {
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var o = this.tryEntries[r];
                                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                    var a = o;
                                    break
                                }
                            }
                            a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                            var i = a ? a.completion : {};
                            return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, y) : this.complete(i)
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y
                        },
                        finish: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var r = this.tryEntries[t];
                                if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), T(r), y
                            }
                        },
                        catch: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var r = this.tryEntries[t];
                                if (r.tryLoc === e) {
                                    var n = r.completion;
                                    if ("throw" === n.type) {
                                        var o = n.arg;
                                        T(r)
                                    }
                                    return o
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(t, r, n) {
                            return this.delegate = {
                                iterator: O(t),
                                resultName: r,
                                nextLoc: n
                            }, "next" === this.method && (this.arg = e), y
                        }
                    }, t
                }

                function asyncGeneratorStep(e, t, r, n, o, a, i) {
                    try {
                        var s = e[a](i),
                            c = s.value
                    } catch (e) {
                        return void r(e)
                    }
                    s.done ? t(c) : Promise.resolve(c).then(n, o)
                }

                function _asyncToGenerator(e) {
                    return function() {
                        var t = this,
                            r = arguments;
                        return new Promise((function(n, o) {
                            var a = e.apply(t, r);

                            function i(e) {
                                asyncGeneratorStep(a, n, o, i, s, "next", e)
                            }

                            function s(e) {
                                asyncGeneratorStep(a, n, o, i, s, "throw", e)
                            }
                            i(void 0)
                        }))
                    }
                }

                function _slicedToArray(e, t) {
                    return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest()
                }

                function _nonIterableRest() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }

                function _unsupportedIterableToArray(e, t) {
                    if (e) {
                        if ("string" == typeof e) return _arrayLikeToArray(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(e, t) : void 0
                    }
                }

                function _arrayLikeToArray(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n
                }

                function _iterableToArrayLimit(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, a, i, s = [],
                            c = !0,
                            u = !1;
                        try {
                            if (a = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0);
                        } catch (e) {
                            u = !0, o = e
                        } finally {
                            try {
                                if (!c && null != r.return && (i = r.return(), Object(i) !== i)) return
                            } finally {
                                if (u) throw o
                            }
                        }
                        return s
                    }
                }

                function _arrayWithHoles(e) {
                    if (Array.isArray(e)) return e
                }

                function _objectWithoutProperties(e, t) {
                    if (null == e) return {};
                    var r, n, o = _objectWithoutPropertiesLoose(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                    return o
                }

                function _objectWithoutPropertiesLoose(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o
                }
                var _wp$element = wp.element,
                    useContext = _wp$element.useContext,
                    createContext = _wp$element.createContext,
                    useState = _wp$element.useState,
                    useMemo = _wp$element.useMemo,
                    useEffect = _wp$element.useEffect,
                    useCallback = _wp$element.useCallback,
                    useRef = _wp$element.useRef,
                    rawAiName = "AI: ",
                    rawUserName = "User: ",
                    ChatbotContext = createContext(),
                    useChatbotContext = function() {
                        var e = useContext(ChatbotContext);
                        if (!e) throw new Error("useChatbotContext must be used within a ChatbotContextProvider");
                        return e
                    },
                    ChatbotContextProvider = function ChatbotContextProvider(_ref) {
                        var _system$typewriter, _system$speech_recogn, _system$speech_synthe, _params$startSentence, _params$startSentence2, children = _ref.children,
                            rest = _objectWithoutProperties(_ref, _excluded),
                            params = rest.params,
                            system = rest.system,
                            theme = rest.theme,
                            atts = rest.atts,
                            _useChrono = (0, _app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_0__.dh)(),
                            timeElapsed = _useChrono.timeElapsed,
                            startChrono = _useChrono.startChrono,
                            stopChrono = _useChrono.stopChrono,
                            shortcodeStyles = useMemo((function() {
                                return (null == theme ? void 0 : theme.settings) || {}
                            }), [theme]),
                            _useState = useState(system.restNonce),
                            _useState2 = _slicedToArray(_useState, 2),
                            restNonce = _useState2[0],
                            setRestNonce = _useState2[1],
                            _useState3 = useState([]),
                            _useState4 = _slicedToArray(_useState3, 2),
                            messages = _useState4[0],
                            setMessages = _useState4[1],
                            _useState5 = useState([]),
                            _useState6 = _slicedToArray(_useState5, 2),
                            shortcuts = _useState6[0],
                            setShortcuts = _useState6[1],
                            _useState7 = useState([]),
                            _useState8 = _slicedToArray(_useState7, 2),
                            blocks = _useState8[0],
                            setBlocks = _useState8[1],
                            _useState9 = useState(!1),
                            _useState10 = _slicedToArray(_useState9, 2),
                            locked = _useState10[0],
                            setLocked = _useState10[1],
                            _useState11 = useState((0, _app_helpers__WEBPACK_IMPORTED_MODULE_1__.vx)()),
                            _useState12 = _slicedToArray(_useState11, 2),
                            chatId = _useState12[0],
                            setChatId = _useState12[1],
                            _useState13 = useState(""),
                            _useState14 = _slicedToArray(_useState13, 2),
                            inputText = _useState14[0],
                            setInputText = _useState14[1],
                            _useState15 = useState(!1),
                            _useState16 = _slicedToArray(_useState15, 2),
                            chatbotTriggered = _useState16[0],
                            setChatbotTriggered = _useState16[1],
                            _useState17 = useState(!1),
                            _useState18 = _slicedToArray(_useState17, 2),
                            showIconMessage = _useState18[0],
                            setShowIconMessage = _useState18[1],
                            _useState19 = useState({
                                localFile: null,
                                uploadedId: null,
                                uploadedUrl: null,
                                uploadProgress: null
                            }),
                            _useState20 = _slicedToArray(_useState19, 2),
                            uploadedFile = _useState20[0],
                            setUploadedFile = _useState20[1],
                            _useState21 = useState(!0),
                            _useState22 = _slicedToArray(_useState21, 2),
                            windowed = _useState22[0],
                            setWindowed = _useState22[1],
                            _useState23 = useState(!1),
                            _useState24 = _slicedToArray(_useState23, 2),
                            open = _useState24[0],
                            setOpen = _useState24[1],
                            _useState25 = useState(null),
                            _useState26 = _slicedToArray(_useState25, 2),
                            error = _useState26[0],
                            setError = _useState26[1],
                            _useState27 = useState(!1),
                            _useState28 = _slicedToArray(_useState27, 2),
                            busy = _useState28[0],
                            setBusy = _useState28[1],
                            _useState29 = useState(!1),
                            _useState30 = _slicedToArray(_useState29, 2),
                            busyNonce = _useState30[0],
                            setBusyNonce = _useState30[1],
                            _useState31 = useState(),
                            _useState32 = _slicedToArray(_useState31, 2),
                            serverReply = _useState32[0],
                            setServerReply = _useState32[1],
                            chatbotInputRef = useRef(),
                            conversationRef = useRef(),
                            hasFocusRef = useRef(!1),
                            _useSpeechRecognition = (0, _app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_0__.Vw)((function(e) {
                                setInputText(e)
                            })),
                            isListening = _useSpeechRecognition.isListening,
                            setIsListening = _useSpeechRecognition.setIsListening,
                            speechRecognitionAvailable = _useSpeechRecognition.speechRecognitionAvailable,
                            stream = system.stream || !1,
                            internalId = useMemo((function() {
                                return (0, _app_helpers__WEBPACK_IMPORTED_MODULE_1__.vx)()
                            }), []),
                            botId = system.botId,
                            customId = system.customId,
                            userData = system.userData,
                            sessionId = system.sessionId,
                            contextId = system.contextId,
                            pluginUrl = system.pluginUrl,
                            restUrl = system.restUrl,
                            debugMode = system.debugMode,
                            virtualKeyboardFix = system.virtual_keyboard_fix,
                            typewriter = null !== (_system$typewriter = null == system ? void 0 : system.typewriter) && void 0 !== _system$typewriter && _system$typewriter,
                            speechRecognition = null !== (_system$speech_recogn = null == system ? void 0 : system.speech_recognition) && void 0 !== _system$speech_recogn && _system$speech_recogn,
                            speechSynthesis = null !== (_system$speech_synthe = null == system ? void 0 : system.speech_synthesis) && void 0 !== _system$speech_synthe && _system$speech_synthe,
                            startSentence = (0, _app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_0__.Mc)(null !== (_params$startSentence = null === (_params$startSentence2 = params.startSentence) || void 0 === _params$startSentence2 ? void 0 : _params$startSentence2.trim()) && void 0 !== _params$startSentence ? _params$startSentence : "", userData),
                            initialActions = system.actions || [],
                            initialShortcuts = system.shortcuts || [],
                            initialBlocks = system.blocks || [],
                            isMobile = document.innerWidth <= 768,
                            processedParams = (0, _app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_0__._$)(params, userData),
                            aiName = processedParams.aiName,
                            userName = processedParams.userName,
                            guestName = processedParams.guestName,
                            aiAvatar = processedParams.aiAvatar,
                            userAvatar = processedParams.userAvatar,
                            guestAvatar = processedParams.guestAvatar,
                            textSend = processedParams.textSend,
                            textClear = processedParams.textClear,
                            textInputMaxLength = processedParams.textInputMaxLength,
                            textInputPlaceholder = processedParams.textInputPlaceholder,
                            textCompliance = processedParams.textCompliance,
                            isWindow = processedParams.window,
                            copyButton = processedParams.copyButton,
                            fullscreen = processedParams.fullscreen,
                            localMemoryParam = processedParams.localMemory,
                            icon = processedParams.icon,
                            iconText = processedParams.iconText,
                            iconTextDelay = processedParams.iconTextDelay,
                            iconAlt = processedParams.iconAlt,
                            iconPosition = processedParams.iconPosition,
                            iconBubble = processedParams.iconBubble,
                            imageUpload = processedParams.imageUpload,
                            fileSearch = processedParams.fileSearch,
                            localMemory = localMemoryParam && (!!customId || !!botId),
                            localStorageKey = localMemory ? "mwai-chat-".concat(customId || botId) : null,
                            _useMemo = useMemo((function() {
                                var e = function(e) {
                                        return e ? (0, _app_helpers__WEBPACK_IMPORTED_MODULE_1__.Ve)(e) || (0, _app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_0__.mv)(e) ? e : "".concat(pluginUrl, "/images/").concat(e) : null
                                    },
                                    t = icon ? e(icon) : "".concat(pluginUrl, "/images/chat-traditional-1.svg"),
                                    r = e(processedParams.aiAvatarUrl),
                                    n = e(processedParams.userAvatarUrl),
                                    o = e(processedParams.guestAvatarUrl);
                                return {
                                    cssVariables: Object.keys(shortcodeStyles).reduce((function(e, t) {
                                        return e["--mwai-".concat(t)] = shortcodeStyles[t], e
                                    }), {}),
                                    iconUrl: t,
                                    aiAvatarUrl: r,
                                    userAvatarUrl: n,
                                    guestAvatarUrl: o
                                }
                            }), [icon, pluginUrl, shortcodeStyles, processedParams]),
                            cssVariables = _useMemo.cssVariables,
                            iconUrl = _useMemo.iconUrl,
                            aiAvatarUrl = _useMemo.aiAvatarUrl,
                            userAvatarUrl = _useMemo.userAvatarUrl,
                            guestAvatarUrl = _useMemo.guestAvatarUrl,
                            _useState33 = useState(!1),
                            _useState34 = _slicedToArray(_useState33, 2),
                            draggingType = _useState34[0],
                            setDraggingType = _useState34[1],
                            _useState35 = useState(!1),
                            _useState36 = _slicedToArray(_useState35, 2),
                            isBlocked = _useState36[0],
                            setIsBlocked = _useState36[1],
                            uploadIconPosition = useMemo((function() {
                                return "timeless" === (null == theme ? void 0 : theme.themeId) ? "mwai-tools" : "mwai-input"
                            }), [null == theme ? void 0 : theme.themeId]),
                            submitButtonConf = useMemo((function() {
                                return {
                                    text: textSend,
                                    textSend,
                                    textClear,
                                    imageSend: "timeless" === (null == theme ? void 0 : theme.themeId) ? pluginUrl + "/images/action-submit-blue.svg" : null,
                                    imageClear: "timeless" === (null == theme ? void 0 : theme.themeId) ? pluginUrl + "/images/action-clear-blue.svg" : null
                                }
                            }), [pluginUrl, textClear, textSend, null == theme ? void 0 : theme.themeId]),
                            resetMessages = function() {
                                if (resetUploadedFile(), startSentence) {
                                    var e = [{
                                        id: (0, _app_helpers__WEBPACK_IMPORTED_MODULE_1__.vx)(),
                                        role: "assistant",
                                        content: startSentence,
                                        who: rawAiName,
                                        timestamp: (new Date).getTime()
                                    }];
                                    setMessages(e)
                                } else setMessages([])
                            },
                            refreshRestNonce = useCallback(_asyncToGenerator(_regeneratorRuntime().mark((function e() {
                                var t, r, n, o = arguments;
                                return _regeneratorRuntime().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t = o.length > 0 && void 0 !== o[0] && o[0], e.prev = 1, t || !restNonce) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return", restNonce);
                                        case 4:
                                            return setBusyNonce(!0), e.next = 7, (0, _app_helpers__WEBPACK_IMPORTED_MODULE_1__.ti)("".concat(restUrl, "/mwai/v1/start_session"));
                                        case 7:
                                            return r = e.sent, e.next = 10, r.json();
                                        case 10:
                                            return n = e.sent, setRestNonce(n.restNonce), e.abrupt("return", n.restNonce);
                                        case 15:
                                            e.prev = 15, e.t0 = e.catch(1), console.error("Error while fetching the restNonce.", e.t0);
                                        case 18:
                                            return e.prev = 18, setBusyNonce(!1), e.finish(18);
                                        case 21:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 15, 18, 21]
                                ])
                            }))), [restNonce, setRestNonce, restUrl]);
                        useEffect((function() {
                            initialActions.length > 0 && handleActions(initialActions), initialShortcuts.length > 0 && handleShortcuts(initialShortcuts), initialBlocks.length > 0 && handleBlocks(initialBlocks)
                        }), []), useEffect((function() {
                            chatbotTriggered && !restNonce && refreshRestNonce()
                        }), [chatbotTriggered]), useEffect((function() {
                            inputText.length > 0 && !chatbotTriggered && setChatbotTriggered(!0)
                        }), [chatbotTriggered, inputText]), useEffect((function() {
                            resetMessages()
                        }), [startSentence]), useEffect((function() {
                            if (customId || botId) {
                                var e = _app_chatbot_MwaiAPI__WEBPACK_IMPORTED_MODULE_2__.HX.chatbots.findIndex((function(e) {
                                        return e.internalId === internalId
                                    })),
                                    t = {
                                        internalId,
                                        botId,
                                        chatId,
                                        customId,
                                        open: function() {
                                            setTasks((function(e) {
                                                return [].concat(_toConsumableArray(e), [{
                                                    action: "open"
                                                }])
                                            }))
                                        },
                                        close: function() {
                                            setTasks((function(e) {
                                                return [].concat(_toConsumableArray(e), [{
                                                    action: "close"
                                                }])
                                            }))
                                        },
                                        clear: function() {
                                            setTasks((function(e) {
                                                return [].concat(_toConsumableArray(e), [{
                                                    action: "clear"
                                                }])
                                            }))
                                        },
                                        toggle: function() {
                                            setTasks((function(e) {
                                                return [].concat(_toConsumableArray(e), [{
                                                    action: "toggle"
                                                }])
                                            }))
                                        },
                                        ask: function(e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                            setTasks((function(r) {
                                                return [].concat(_toConsumableArray(r), [{
                                                    action: "ask",
                                                    data: {
                                                        text: e,
                                                        submit: t
                                                    }
                                                }])
                                            }))
                                        },
                                        lock: function() {
                                            setLocked(!0)
                                        },
                                        unlock: function() {
                                            setLocked(!1)
                                        },
                                        setShortcuts: function(e) {
                                            setTasks((function(t) {
                                                return [].concat(_toConsumableArray(t), [{
                                                    action: "setShortcuts",
                                                    data: e
                                                }])
                                            }))
                                        },
                                        setBlocks: function(e) {
                                            setTasks((function(t) {
                                                return [].concat(_toConsumableArray(t), [{
                                                    action: "setBlocks",
                                                    data: e
                                                }])
                                            }))
                                        },
                                        setContext: function(e) {
                                            var t = e.chatId,
                                                r = e.messages;
                                            setTasks((function(e) {
                                                return [].concat(_toConsumableArray(e), [{
                                                    action: "setContext",
                                                    data: {
                                                        chatId: t,
                                                        messages: r
                                                    }
                                                }])
                                            }))
                                        }
                                    }; - 1 !== e ? _app_chatbot_MwaiAPI__WEBPACK_IMPORTED_MODULE_2__.HX.chatbots[e] = t : _app_chatbot_MwaiAPI__WEBPACK_IMPORTED_MODULE_2__.HX.chatbots.push(t)
                            }
                        }), [botId, chatId, customId, internalId]), useEffect((function() {
                            busy ? startChrono() : (!isMobile && hasFocusRef.current && chatbotInputRef.current.focusInput(), stopChrono())
                        }), [busy, startChrono, stopChrono, isMobile]);
                        var saveMessages = useCallback((function(e) {
                                localStorageKey && localStorage.setItem(localStorageKey, (0, _neko_ui__WEBPACK_IMPORTED_MODULE_3__.F1)({
                                    chatId,
                                    messages: e
                                }))
                            }), [localStorageKey, chatId]),
                            resetError = function() {
                                setError(null)
                            };
                        useEffect((function() {
                            var e = [];
                            if (localStorageKey && (e = localStorage.getItem(localStorageKey))) return e = JSON.parse(e), setMessages(e.messages), void setChatId(e.chatId);
                            resetMessages()
                        }), [botId]);
                        var handleActions = useCallback((function(actions, lastMessage) {
                                actions = actions || [];
                                var callsCount = 0,
                                    _iterator = _createForOfIteratorHelper(actions),
                                    _step;
                                try {
                                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                                        var action = _step.value;
                                        if ("function" === action.type) {
                                            var data = action.data || {},
                                                _data$name = data.name,
                                                name = void 0 === _data$name ? null : _data$name,
                                                _data$args = data.args,
                                                args = void 0 === _data$args ? [] : _data$args,
                                                finalArgs = args ? Object.values(args).map((function(e) {
                                                    return JSON.stringify(e)
                                                })) : [];
                                            try {
                                                debugMode && console.log("[CHATBOT] CALL ".concat(name, "(").concat(finalArgs.join(", "), ")")), eval("".concat(name, "(").concat(finalArgs.join(", "), ")")), callsCount++
                                            } catch (e) {
                                                console.error("Error while executing an action.", e)
                                            }
                                        }
                                    }
                                } catch (e) {
                                    _iterator.e(e)
                                } finally {
                                    _iterator.f()
                                }!lastMessage.content && callsCount > 0 && (lastMessage.content = "*Done!*")
                            }), [debugMode]),
                            handleShortcuts = useCallback((function(e) {
                                setShortcuts(e || [])
                            }), []),
                            handleBlocks = useCallback((function(e) {
                                setBlocks(e || [])
                            }), []);
                        useEffect((function() {
                            if (serverReply) {
                                setBusy(!1);
                                var e = _toConsumableArray(messages),
                                    t = e.length > 0 ? e[e.length - 1] : null;
                                if (!serverReply.success) return "assistant" === t.role && t.isQuerying && e.pop(), e.pop(), e.push({
                                    id: (0, _app_helpers__WEBPACK_IMPORTED_MODULE_1__.vx)(),
                                    role: "system",
                                    content: serverReply.message,
                                    who: rawAiName,
                                    timestamp: (new Date).getTime()
                                }), setMessages(e), void saveMessages(e);
                                if ("assistant" === t.role && t.isQuerying) t.content = (0, _app_chatbot_MwaiAPI__WEBPACK_IMPORTED_MODULE_2__.W5)("ai.reply", serverReply.reply, {
                                    chatId,
                                    botId
                                }), serverReply.images && (t.images = serverReply.images), t.timestamp = (new Date).getTime(), delete t.isQuerying, handleActions(null == serverReply ? void 0 : serverReply.actions, t), handleBlocks(null == serverReply ? void 0 : serverReply.blocks), handleShortcuts(null == serverReply ? void 0 : serverReply.shortcuts);
                                else if ("assistant" === t.role && t.isStreaming) t.content = (0, _app_chatbot_MwaiAPI__WEBPACK_IMPORTED_MODULE_2__.W5)("ai.reply", serverReply.reply, {
                                    chatId,
                                    botId
                                }), serverReply.images && (t.images = serverReply.images), t.timestamp = (new Date).getTime(), delete t.isStreaming, handleActions(null == serverReply ? void 0 : serverReply.actions, t), handleBlocks(null == serverReply ? void 0 : serverReply.blocks), handleShortcuts(null == serverReply ? void 0 : serverReply.shortcuts);
                                else {
                                    var r = {
                                        id: (0, _app_helpers__WEBPACK_IMPORTED_MODULE_1__.vx)(),
                                        role: "assistant",
                                        content: (0, _app_chatbot_MwaiAPI__WEBPACK_IMPORTED_MODULE_2__.W5)("ai.reply", serverReply.reply, {
                                            botId,
                                            chatId,
                                            customId
                                        }),
                                        who: rawAiName,
                                        timestamp: (new Date).getTime()
                                    };
                                    serverReply.images && (r.images = serverReply.images), handleActions(null == serverReply ? void 0 : serverReply.actions, r), handleBlocks(null == serverReply ? void 0 : serverReply.blocks), handleShortcuts(null == serverReply ? void 0 : serverReply.shortcuts), e.push(r)
                                }
                                setMessages(e), saveMessages(e)
                            }
                        }), [serverReply]);
                        var onClear = useCallback(_asyncToGenerator(_regeneratorRuntime().mark((function e() {
                                return _regeneratorRuntime().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, setChatId((0, _app_helpers__WEBPACK_IMPORTED_MODULE_1__.vx)());
                                        case 2:
                                            localStorageKey && localStorage.removeItem(localStorageKey), resetMessages(), setInputText(""), setShortcuts([]), setBlocks([]);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))), [botId]),
                            onSubmit = useCallback(function() {
                                var e = _asyncToGenerator(_regeneratorRuntime().mark((function e(t) {
                                    var r, n, o, a, i, s, c, u, l, p, f, d, h, m, y;
                                    return _regeneratorRuntime().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (!busy) {
                                                    e.next = 3;
                                                    break
                                                }
                                                return console.error("AI Engine: There is already a query in progress."), e.abrupt("return");
                                            case 3:
                                                if ("string" != typeof t && (t = inputText), n = uploadedFile, o = null == uploadedFile ? void 0 : uploadedFile.uploadedUrl, a = null == uploadedFile || null === (r = uploadedFile.localFile) || void 0 === r ? void 0 : r.type, i = !!a && a.startsWith("image"), s = t, o && (s = i ? "![Uploaded Image](".concat(o, ")\n").concat(t) : "[Uploaded File](".concat(o, ")\n").concat(t)), setBusy(!0), setInputText(""), setShortcuts([]), setBlocks([]), resetUploadedFile(), c = [].concat(_toConsumableArray(messages), [{
                                                        id: (0, _app_helpers__WEBPACK_IMPORTED_MODULE_1__.vx)(),
                                                        role: "user",
                                                        content: s,
                                                        who: rawUserName,
                                                        timestamp: (new Date).getTime()
                                                    }]), saveMessages(c), u = (0, _app_helpers__WEBPACK_IMPORTED_MODULE_1__.vx)(), l = [].concat(_toConsumableArray(c), [{
                                                        id: u,
                                                        role: "assistant",
                                                        content: null,
                                                        who: rawAiName,
                                                        timestamp: null,
                                                        isQuerying: !stream,
                                                        isStreaming: !!stream
                                                    }]), setMessages(l), p = _objectSpread({
                                                        botId,
                                                        customId,
                                                        session: sessionId,
                                                        chatId,
                                                        contextId,
                                                        messages,
                                                        newMessage: t,
                                                        newFileId: null == n ? void 0 : n.uploadedId,
                                                        stream
                                                    }, atts), e.prev = 21, debugMode && console.log("[CHATBOT] OUT: ", p), f = stream ? function(e) {
                                                        setMessages((function(t) {
                                                            var r = _toConsumableArray(t),
                                                                n = r.length > 0 ? r[r.length - 1] : null;
                                                            return n && n.id === u && (n.content = e, n.timestamp = (new Date).getTime()), r
                                                        }))
                                                    } : null, null == restNonce) {
                                                    e.next = 28;
                                                    break
                                                }
                                                e.t0 = restNonce, e.next = 31;
                                                break;
                                            case 28:
                                                return e.next = 30, refreshRestNonce();
                                            case 30:
                                                e.t0 = e.sent;
                                            case 31:
                                                return d = e.t0, e.next = 34, (0, _app_helpers__WEBPACK_IMPORTED_MODULE_1__.ti)("".concat(restUrl, "/mwai-ui/v1/chats/submit"), p, d, stream);
                                            case 34:
                                                return h = e.sent, e.next = 37, (0, _app_helpers__WEBPACK_IMPORTED_MODULE_1__.Pn)(h, f, debugMode ? "CHATBOT" : null);
                                            case 37:
                                                if ((m = e.sent).success || !m.message) {
                                                    e.next = 47;
                                                    break
                                                }
                                                return setError(m.message), (y = _toConsumableArray(l)).pop(), y.pop(), setMessages(y), saveMessages(y), setBusy(!1), e.abrupt("return");
                                            case 47:
                                                setServerReply(m), e.next = 54;
                                                break;
                                            case 50:
                                                e.prev = 50, e.t1 = e.catch(21), console.error("An error happened in the handling of the chatbot response.", {
                                                    err: e.t1
                                                }), setBusy(!1);
                                            case 54:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [21, 50]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }(), [busy, uploadedFile, messages, saveMessages, stream, botId, customId, sessionId, chatId, contextId, atts, inputText, debugMode, restNonce, refreshRestNonce, restUrl]),
                            onSubmitAction = useCallback((function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                    t = !(null == uploadedFile || !uploadedFile.uploadedId);
                                hasFocusRef.current = document.activeElement === chatbotInputRef.current.currentElement(), e ? onSubmit(e) : (t || inputText.length > 0) && onSubmit(inputText)
                            }), [inputText, onSubmit, null == uploadedFile ? void 0 : uploadedFile.uploadedId]),
                            onFileUpload = function() {
                                var e = _asyncToGenerator(_regeneratorRuntime().mark((function e(t) {
                                    var r, n, o, a, i, s, c = arguments;
                                    return _regeneratorRuntime().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (r = c.length > 1 && void 0 !== c[1] ? c[1] : "N/A", n = c.length > 2 && void 0 !== c[2] ? c[2] : "N/A", e.prev = 2, null !== t) {
                                                    e.next = 6;
                                                    break
                                                }
                                                return resetUploadedFile(), e.abrupt("return");
                                            case 6:
                                                if (o = {
                                                        type: r,
                                                        purpose: n
                                                    }, a = "".concat(restUrl, "/mwai-ui/v1/files/upload"), null == restNonce) {
                                                    e.next = 12;
                                                    break
                                                }
                                                e.t0 = restNonce, e.next = 15;
                                                break;
                                            case 12:
                                                return e.next = 14, refreshRestNonce();
                                            case 14:
                                                e.t0 = e.sent;
                                            case 15:
                                                return i = e.t0, e.next = 18, (0, _app_helpers__WEBPACK_IMPORTED_MODULE_1__.uE)(a, t, i, (function(e) {
                                                    setUploadedFile({
                                                        localFile: t,
                                                        uploadedId: null,
                                                        uploadedUrl: null,
                                                        uploadProgress: e
                                                    })
                                                }), o);
                                            case 18:
                                                s = e.sent, setUploadedFile({
                                                    localFile: t,
                                                    uploadedId: s.data.id,
                                                    uploadedUrl: s.data.url,
                                                    uploadProgress: null
                                                }), e.next = 27;
                                                break;
                                            case 22:
                                                e.prev = 22, e.t1 = e.catch(2), console.error("onFileUpload Error", e.t1), setError(e.t1.message || "An unknown error occurred"), resetUploadedFile();
                                            case 27:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [2, 22]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            onUploadFile = function() {
                                var e = _asyncToGenerator(_regeneratorRuntime().mark((function e(t) {
                                    return _regeneratorRuntime().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return error && resetError(), e.abrupt("return", onFileUpload(t));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            resetUploadedFile = function() {
                                setUploadedFile({
                                    localFile: null,
                                    uploadedId: null,
                                    uploadedUrl: null,
                                    uploadProgress: null
                                })
                            },
                            runTimer = useCallback((function() {
                                var e = setTimeout((function() {
                                    setOpen((function(e) {
                                        return e || setShowIconMessage(!0), e
                                    }))
                                }), 1e3 * iconTextDelay);
                                return function() {
                                    return clearTimeout(e)
                                }
                            }), [iconText, iconTextDelay]);
                        useEffect((function() {
                            if (iconText && !iconTextDelay) setShowIconMessage(!0);
                            else if (iconText && iconTextDelay) return runTimer()
                        }), [iconText]);
                        var _useState37 = useState([]),
                            _useState38 = _slicedToArray(_useState37, 2),
                            tasks = _useState38[0],
                            setTasks = _useState38[1],
                            runTasks = useCallback(_asyncToGenerator(_regeneratorRuntime().mark((function e() {
                                var t, r, n, o, a, i, s, c;
                                return _regeneratorRuntime().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            tasks.length > 0 && ("ask" === (t = tasks[0]).action ? (r = t.data, n = r.text, r.submit ? onSubmit(n) : setInputText(n)) : "toggle" === t.action ? setOpen((function(e) {
                                                return !e
                                            })) : "open" === t.action ? setOpen(!0) : "close" === t.action ? setOpen(!1) : "clear" === t.action ? onClear() : "setContext" === t.action ? (o = t.data, a = o.chatId, i = o.messages, setChatId(a), setMessages(i)) : "setShortcuts" === t.action ? (s = t.data, handleShortcuts(s)) : "setBlocks" === t.action && (c = t.data, handleBlocks(c)), setTasks((function(e) {
                                                return e.slice(1)
                                            })));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))), [tasks, onClear, onSubmit, setChatId, setInputText, setMessages, setOpen, handleShortcuts, handleBlocks]);
                        useEffect((function() {
                            runTasks()
                        }), [runTasks]);
                        var actions = {
                                setInputText,
                                saveMessages,
                                setMessages,
                                resetMessages,
                                resetError,
                                onClear,
                                onSubmit,
                                onSubmitAction,
                                onFileUpload,
                                onUploadFile,
                                setOpen,
                                setWindowed,
                                setShowIconMessage,
                                setIsListening,
                                setDraggingType,
                                setIsBlocked
                            },
                            state = {
                                theme,
                                botId,
                                customId,
                                userData,
                                pluginUrl,
                                inputText,
                                messages,
                                shortcuts,
                                blocks,
                                busy,
                                error,
                                setBusy,
                                typewriter,
                                speechRecognition,
                                speechSynthesis,
                                virtualKeyboardFix,
                                localMemory,
                                imageUpload,
                                uploadedFile,
                                fileSearch,
                                textSend,
                                textClear,
                                textInputMaxLength,
                                textInputPlaceholder,
                                textCompliance,
                                aiName,
                                userName,
                                guestName,
                                aiAvatar,
                                userAvatar,
                                guestAvatar,
                                aiAvatarUrl,
                                userAvatarUrl,
                                guestAvatarUrl,
                                isWindow,
                                copyButton,
                                fullscreen,
                                icon,
                                iconText,
                                iconAlt,
                                iconPosition,
                                iconBubble,
                                cssVariables,
                                iconUrl,
                                chatbotInputRef,
                                conversationRef,
                                isMobile,
                                open,
                                locked,
                                windowed,
                                showIconMessage,
                                timeElapsed,
                                isListening,
                                speechRecognitionAvailable,
                                uploadIconPosition,
                                submitButtonConf,
                                draggingType,
                                isBlocked,
                                busyNonce
                            };
                        return React.createElement(ChatbotContext.Provider, {
                            value: {
                                state,
                                actions
                            }
                        }, children)
                    }
            },
            137: (e, t, r) => {
                function n(e) {
                    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, n(e)
                }

                function o(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, a(n.key), n)
                    }
                }

                function a(e) {
                    var t = function(e, t) {
                        if ("object" != n(e) || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var o = r.call(e, "string");
                            if ("object" != n(o)) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == n(t) ? t : String(t)
                }
                r.d(t, {
                    HX: () => s,
                    W5: () => c
                });
                var i = function() {
                        function e() {
                            if (function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, e), "undefined" != typeof window && window.MwaiAPI) return window.MwaiAPI;
                            this.chatbots = [], this.filters = {}, this.actions = {}, "undefined" != typeof window && (window.MwaiAPI = this)
                        }
                        var t, r;
                        return t = e, r = [{
                            key: "getChatbot",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                                return e ? this.chatbots.find((function(t) {
                                    return t.botId === e || t.customId === e
                                })) : this.chatbots[0]
                            }
                        }, {
                            key: "addFilter",
                            value: function(e, t) {
                                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
                                this.filters[e] || (this.filters[e] = []), this.filters[e].push({
                                    callback: t,
                                    priority: r
                                }), this.filters[e].sort((function(e, t) {
                                    return e.priority - t.priority
                                }))
                            }
                        }, {
                            key: "applyFilters",
                            value: function(e, t) {
                                for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) n[o - 2] = arguments[o];
                                return this.filters[e] ? this.filters[e].reduce((function(e, t) {
                                    return t.callback.apply(t, [e].concat(n))
                                }), t) : t
                            }
                        }, {
                            key: "addAction",
                            value: function(e, t) {
                                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
                                this.actions[e] || (this.actions[e] = []), this.actions[e].push({
                                    callback: t,
                                    priority: r
                                }), this.actions[e].sort((function(e, t) {
                                    return e.priority - t.priority
                                }))
                            }
                        }, {
                            key: "doAction",
                            value: function(e) {
                                for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                                this.actions[e] && this.actions[e].forEach((function(e) {
                                    e.callback.apply(e, r)
                                }))
                            }
                        }], r && o(t.prototype, r), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e
                    }(),
                    s = function() {
                        if ("undefined" != typeof window && window.MwaiAPI) return window.MwaiAPI;
                        var e = new i;
                        return "undefined" != typeof window && (window.MwaiAPI = e), e
                    }(),
                    c = function(e, t) {
                        for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) n[o - 2] = arguments[o];
                        return s.applyFilters.apply(s, [e, t].concat(n))
                    }
            },
            966: (e, t, r) => {
                r.d(t, {
                    $$: () => y,
                    Mc: () => v,
                    Vw: () => C,
                    _$: () => w,
                    bE: () => x,
                    dh: () => _,
                    gR: () => b,
                    kW: () => S,
                    mv: () => g,
                    tm: () => m
                });
                var n = ["active", "disabled"],
                    o = ["if", "className", "disableTransition", "children"];

                function a(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != r) {
                            var n, o, a, i, s = [],
                                c = !0,
                                u = !1;
                            try {
                                if (a = (r = r.call(e)).next, 0 === t) {
                                    if (Object(r) !== r) return;
                                    c = !1
                                } else
                                    for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0);
                            } catch (e) {
                                u = !0, o = e
                            } finally {
                                try {
                                    if (!c && null != r.return && (i = r.return(), Object(i) !== i)) return
                                } finally {
                                    if (u) throw o
                                }
                            }
                            return s
                        }
                    }(e, t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return i(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? i(e, t) : void 0
                        }
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function i(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n
                }

                function s() {
                    return s = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                        }
                        return e
                    }, s.apply(this, arguments)
                }

                function c(e, t) {
                    if (null == e) return {};
                    var r, n, o = function(e, t) {
                        if (null == e) return {};
                        var r, n, o = {},
                            a = Object.keys(e);
                        for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                    return o
                }
                var u = wp.element,
                    l = u.useState,
                    p = u.useMemo,
                    f = u.useEffect,
                    d = u.useRef,
                    h = u.useCallback,
                    m = function(e) {
                        var t = e.active,
                            r = e.disabled,
                            o = c(e, n);
                        return React.createElement("div", s({
                            active: t ? "true" : "false",
                            disabled: r
                        }, o), React.createElement("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 384 512",
                            dangerouslySetInnerHTML: {
                                __html: '<path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"/>'
                            }
                        }))
                    };

                function y(e, t) {
                    var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        n = d();
                    f((function() {
                        n.current = t
                    }), [t]), f((function() {
                        if (null !== e && r) {
                            var t = setInterval((function() {
                                n.current()
                            }), e);
                            return function() {
                                return clearInterval(t)
                            }
                        }
                    }), [e, r])
                }
                var b = function() {
                    return p((function() {
                        return function(e, t) {
                            return Array.isArray(e) || (e = [e]), t && Object.entries(t).forEach((function(t) {
                                var r = a(t, 2),
                                    n = r[0];
                                r[1] && e.push(n)
                            })), e.join(" ")
                        }
                    }), [])
                };

                function g(e) {
                    return !(!e || "string" != typeof e) && 0 === e.indexOf("http")
                }

                function _() {
                    var e = a(l(null), 2),
                        t = e[0],
                        r = e[1],
                        n = d(null);
                    return f((function() {
                        return function() {
                            clearInterval(n.current)
                        }
                    }), []), {
                        timeElapsed: t,
                        startChrono: function() {
                            if (null === n.current) {
                                var e = Date.now();
                                n.current = setInterval((function() {
                                    var t, n, o, a = Math.floor((Date.now() - e) / 1e3);
                                    r((t = a, n = Math.floor(t / 60), o = t % 60, "".concat(n, ":").concat(o.toString().padStart(2, "0"))))
                                }), 500)
                            }
                        },
                        stopChrono: function() {
                            clearInterval(n.current), n.current = null, r(null)
                        }
                    }
                }
                var v = function(e, t) {
                        return "string" == typeof e && t ? (Object.entries(t).forEach((function(t) {
                            var r = a(t, 2),
                                n = r[0],
                                o = r[1];
                            e = e.replace(new RegExp("{".concat(n, "}"), "g"), o)
                        })), e) : e
                    },
                    w = function(e) {
                        var t, r, n, o, a, i, s, c, u, l, p, f, d, h, m, y, b, g, _, w, C, x, S, I, E, R, k, T, A = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            O = null !== (t = null === (r = e.guestName) || void 0 === r ? void 0 : r.trim()) && void 0 !== t ? t : "",
                            P = null !== (n = null === (o = e.textSend) || void 0 === o ? void 0 : o.trim()) && void 0 !== n ? n : "",
                            L = null !== (a = null === (i = e.textClear) || void 0 === i ? void 0 : i.trim()) && void 0 !== a ? a : "",
                            j = parseInt(e.textInputMaxLength),
                            U = null !== (s = null === (c = e.textInputPlaceholder) || void 0 === c ? void 0 : c.trim()) && void 0 !== s ? s : "",
                            M = null !== (u = null === (l = e.textCompliance) || void 0 === l ? void 0 : l.trim()) && void 0 !== u ? u : "",
                            D = Boolean(e.window),
                            N = Boolean(e.copyButton),
                            F = Boolean(e.fullscreen),
                            B = null !== (p = null === (f = e.icon) || void 0 === f ? void 0 : f.trim()) && void 0 !== p ? p : "",
                            $ = null !== (d = null === (h = e.iconText) || void 0 === h ? void 0 : h.trim()) && void 0 !== d ? d : "",
                            W = parseInt(e.iconTextDelay || 1),
                            H = null !== (m = null === (y = e.iconAlt) || void 0 === y ? void 0 : y.trim()) && void 0 !== m ? m : "",
                            z = null !== (b = null === (g = e.iconPosition) || void 0 === g ? void 0 : g.trim()) && void 0 !== b ? b : "",
                            K = Boolean(e.iconBubble),
                            G = null !== (_ = null === (w = e.aiName) || void 0 === w ? void 0 : w.trim()) && void 0 !== _ ? _ : "",
                            q = null !== (C = null === (x = e.userName) || void 0 === x ? void 0 : x.trim()) && void 0 !== C ? C : "",
                            V = Boolean(null == e ? void 0 : e.aiAvatar),
                            Q = Boolean(null == e ? void 0 : e.userAvatar),
                            J = Boolean(null == e ? void 0 : e.guestAvatar),
                            X = V ? null !== (S = null == e || null === (I = e.aiAvatarUrl) || void 0 === I ? void 0 : I.trim()) && void 0 !== S ? S : "" : null,
                            Y = Q ? null !== (E = null == e || null === (R = e.userAvatarUrl) || void 0 === R ? void 0 : R.trim()) && void 0 !== E ? E : "" : null,
                            Z = J ? null !== (k = null == e || null === (T = e.guestAvatarUrl) || void 0 === T ? void 0 : T.trim()) && void 0 !== k ? k : "" : null,
                            ee = Boolean(e.localMemory),
                            te = Boolean(e.imageUpload),
                            re = Boolean(e.fileSearch);
                        return A && (M = v(M, A), $ = v($, A)), {
                            textSend: P,
                            textClear: L,
                            textInputMaxLength: j,
                            textInputPlaceholder: U,
                            textCompliance: M,
                            window: D,
                            copyButton: N,
                            fullscreen: F,
                            localMemory: ee,
                            imageUpload: te,
                            fileSearch: re,
                            icon: B,
                            iconText: $,
                            iconTextDelay: W,
                            iconAlt: H,
                            iconPosition: z,
                            iconBubble: K,
                            aiName: G,
                            userName: q,
                            guestName: O,
                            aiAvatar: V,
                            userAvatar: Q,
                            guestAvatar: J,
                            aiAvatarUrl: X,
                            userAvatarUrl: Y,
                            guestAvatarUrl: Z
                        }
                    },
                    C = function(e) {
                        var t = a(l(!1), 2),
                            r = t[0],
                            n = t[1],
                            o = a(l(!1), 2),
                            i = o[0],
                            s = o[1];
                        return f((function() {
                            "undefined" != typeof window && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) && s(!0)
                        }), []), f((function() {
                            if (i) {
                                var t = new(window.SpeechRecognition || window.webkitSpeechRecognition),
                                    o = null;
                                return navigator.userAgent.toLowerCase().indexOf("android") > -1 ? (t.interimResults = !1, t.continuous = !1, o = function(t) {
                                        var r = Array.from(t.results).filter((function(e) {
                                            return e.isFinal
                                        })).map((function(e) {
                                            return e[0].transcript
                                        })).join("");
                                        e(r), n(!1)
                                    }) : (t.interimResults = !0, t.continuous = !0, o = function(t) {
                                        var r = Array.from(t.results).map((function(e) {
                                            return e[0]
                                        })).map((function(e) {
                                            return e.transcript
                                        })).join("");
                                        e(r)
                                    }), r ? (t.addEventListener("result", o), t.start()) : (t.removeEventListener("result", o), t.abort()),
                                    function() {
                                        t.abort()
                                    }
                            }
                        }), [r, i]), {
                            isListening: r,
                            setIsListening: n,
                            speechRecognitionAvailable: i
                        }
                    },
                    x = function(e) {
                        var t = e.if,
                            r = e.className,
                            n = e.disableTransition,
                            i = void 0 !== n && n,
                            u = e.children,
                            p = c(e, o),
                            d = a(l(!1), 2),
                            h = d[0],
                            m = d[1],
                            y = a(l("mwai-transition"), 2),
                            b = y[0],
                            g = y[1];
                        return f((function() {
                            i ? m(t) : t ? (m(!0), setTimeout((function() {
                                g("mwai-transition mwai-transition-visible")
                            }), 150)) : g("mwai-transition")
                        }), [t, i]), h ? React.createElement("div", s({
                            className: "".concat(r, " ").concat(i ? "" : b),
                            onTransitionEnd: function() {
                                "mwai-transition" !== b || i || m(!1)
                            }
                        }, p), u) : null
                    },
                    S = function() {
                        var e = a(l(window.visualViewport.height), 2),
                            t = e[0],
                            r = e[1],
                            n = p((function() {
                                return /Android/.test(navigator.userAgent)
                            }), []),
                            o = p((function() {
                                return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
                            }), []),
                            i = d(window.visualViewport),
                            s = h((function() {
                                r(i.current.height)
                            }), []);
                        return f((function() {
                            var e = i.current;
                            return e.addEventListener("resize", s), o ? (window.addEventListener("resize", s), document.addEventListener("focusin", s)) : e.addEventListener("scroll", s),
                                function() {
                                    e.removeEventListener("resize", s), o ? (window.removeEventListener("resize", s), document.removeEventListener("focusin", s)) : e.removeEventListener("scroll", s)
                                }
                        }), [s, o]), {
                            viewportHeight: t,
                            isIOS: o,
                            isAndroid: n
                        }
                    }
            },
            678: (e, t, r) => {
                r.d(t, {
                    Pn: () => d,
                    Ve: () => C,
                    rn: () => v,
                    ti: () => m,
                    uE: () => b,
                    vx: () => _
                });
                var n = r(296);

                function o(e) {
                    return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, o(e)
                }

                function a() {
                    a = function() {
                        return t
                    };
                    var e, t = {},
                        r = Object.prototype,
                        n = r.hasOwnProperty,
                        i = Object.defineProperty || function(e, t, r) {
                            e[t] = r.value
                        },
                        s = "function" == typeof Symbol ? Symbol : {},
                        c = s.iterator || "@@iterator",
                        u = s.asyncIterator || "@@asyncIterator",
                        l = s.toStringTag || "@@toStringTag";

                    function p(e, t, r) {
                        return Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), e[t]
                    }
                    try {
                        p({}, "")
                    } catch (e) {
                        p = function(e, t, r) {
                            return e[t] = r
                        }
                    }

                    function f(e, t, r, n) {
                        var o = t && t.prototype instanceof _ ? t : _,
                            a = Object.create(o.prototype),
                            s = new P(n || []);
                        return i(a, "_invoke", {
                            value: k(e, r, s)
                        }), a
                    }

                    function d(e, t, r) {
                        try {
                            return {
                                type: "normal",
                                arg: e.call(t, r)
                            }
                        } catch (e) {
                            return {
                                type: "throw",
                                arg: e
                            }
                        }
                    }
                    t.wrap = f;
                    var h = "suspendedStart",
                        m = "suspendedYield",
                        y = "executing",
                        b = "completed",
                        g = {};

                    function _() {}

                    function v() {}

                    function w() {}
                    var C = {};
                    p(C, c, (function() {
                        return this
                    }));
                    var x = Object.getPrototypeOf,
                        S = x && x(x(L([])));
                    S && S !== r && n.call(S, c) && (C = S);
                    var I = w.prototype = _.prototype = Object.create(C);

                    function E(e) {
                        ["next", "throw", "return"].forEach((function(t) {
                            p(e, t, (function(e) {
                                return this._invoke(t, e)
                            }))
                        }))
                    }

                    function R(e, t) {
                        function r(a, i, s, c) {
                            var u = d(e[a], e, i);
                            if ("throw" !== u.type) {
                                var l = u.arg,
                                    p = l.value;
                                return p && "object" == o(p) && n.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                    r("next", e, s, c)
                                }), (function(e) {
                                    r("throw", e, s, c)
                                })) : t.resolve(p).then((function(e) {
                                    l.value = e, s(l)
                                }), (function(e) {
                                    return r("throw", e, s, c)
                                }))
                            }
                            c(u.arg)
                        }
                        var a;
                        i(this, "_invoke", {
                            value: function(e, n) {
                                function o() {
                                    return new t((function(t, o) {
                                        r(e, n, t, o)
                                    }))
                                }
                                return a = a ? a.then(o, o) : o()
                            }
                        })
                    }

                    function k(t, r, n) {
                        var o = h;
                        return function(a, i) {
                            if (o === y) throw new Error("Generator is already running");
                            if (o === b) {
                                if ("throw" === a) throw i;
                                return {
                                    value: e,
                                    done: !0
                                }
                            }
                            for (n.method = a, n.arg = i;;) {
                                var s = n.delegate;
                                if (s) {
                                    var c = T(s, n);
                                    if (c) {
                                        if (c === g) continue;
                                        return c
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if (o === h) throw o = b, n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                o = y;
                                var u = d(t, r, n);
                                if ("normal" === u.type) {
                                    if (o = n.done ? b : m, u.arg === g) continue;
                                    return {
                                        value: u.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === u.type && (o = b, n.method = "throw", n.arg = u.arg)
                            }
                        }
                    }

                    function T(t, r) {
                        var n = r.method,
                            o = t.iterator[n];
                        if (o === e) return r.delegate = null, "throw" === n && t.iterator.return && (r.method = "return", r.arg = e, T(t, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), g;
                        var a = d(o, t.iterator, r.arg);
                        if ("throw" === a.type) return r.method = "throw", r.arg = a.arg, r.delegate = null, g;
                        var i = a.arg;
                        return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, g) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, g)
                    }

                    function A(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                    }

                    function O(e) {
                        var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t
                    }

                    function P(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], e.forEach(A, this), this.reset(!0)
                    }

                    function L(t) {
                        if (t || "" === t) {
                            var r = t[c];
                            if (r) return r.call(t);
                            if ("function" == typeof t.next) return t;
                            if (!isNaN(t.length)) {
                                var a = -1,
                                    i = function r() {
                                        for (; ++a < t.length;)
                                            if (n.call(t, a)) return r.value = t[a], r.done = !1, r;
                                        return r.value = e, r.done = !0, r
                                    };
                                return i.next = i
                            }
                        }
                        throw new TypeError(o(t) + " is not iterable")
                    }
                    return v.prototype = w, i(I, "constructor", {
                        value: w,
                        configurable: !0
                    }), i(w, "constructor", {
                        value: v,
                        configurable: !0
                    }), v.displayName = p(w, l, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
                    }, t.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, w) : (e.__proto__ = w, p(e, l, "GeneratorFunction")), e.prototype = Object.create(I), e
                    }, t.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }, E(R.prototype), p(R.prototype, u, (function() {
                        return this
                    })), t.AsyncIterator = R, t.async = function(e, r, n, o, a) {
                        void 0 === a && (a = Promise);
                        var i = new R(f(e, r, n, o), a);
                        return t.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                            return e.done ? e.value : i.next()
                        }))
                    }, E(I), p(I, l, "Generator"), p(I, c, (function() {
                        return this
                    })), p(I, "toString", (function() {
                        return "[object Generator]"
                    })), t.keys = function(e) {
                        var t = Object(e),
                            r = [];
                        for (var n in t) r.push(n);
                        return r.reverse(),
                            function e() {
                                for (; r.length;) {
                                    var n = r.pop();
                                    if (n in t) return e.value = n, e.done = !1, e
                                }
                                return e.done = !0, e
                            }
                    }, t.values = L, P.prototype = {
                        constructor: P,
                        reset: function(t) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(O), !t)
                                for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                        },
                        stop: function() {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval
                        },
                        dispatchException: function(t) {
                            if (this.done) throw t;
                            var r = this;

                            function o(n, o) {
                                return s.type = "throw", s.arg = t, r.next = n, o && (r.method = "next", r.arg = e), !!o
                            }
                            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                                var i = this.tryEntries[a],
                                    s = i.completion;
                                if ("root" === i.tryLoc) return o("end");
                                if (i.tryLoc <= this.prev) {
                                    var c = n.call(i, "catchLoc"),
                                        u = n.call(i, "finallyLoc");
                                    if (c && u) {
                                        if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                        if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                                    } else if (c) {
                                        if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                                    } else {
                                        if (!u) throw new Error("try statement without catch or finally");
                                        if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(e, t) {
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var o = this.tryEntries[r];
                                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                    var a = o;
                                    break
                                }
                            }
                            a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                            var i = a ? a.completion : {};
                            return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, g) : this.complete(i)
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), g
                        },
                        finish: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var r = this.tryEntries[t];
                                if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), O(r), g
                            }
                        },
                        catch: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var r = this.tryEntries[t];
                                if (r.tryLoc === e) {
                                    var n = r.completion;
                                    if ("throw" === n.type) {
                                        var o = n.arg;
                                        O(r)
                                    }
                                    return o
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(t, r, n) {
                            return this.delegate = {
                                iterator: L(t),
                                resultName: r,
                                nextLoc: n
                            }, "next" === this.method && (this.arg = e), g
                        }
                    }, t
                }

                function i(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != r) {
                            var n, o, a, i, s = [],
                                c = !0,
                                u = !1;
                            try {
                                if (a = (r = r.call(e)).next, 0 === t) {
                                    if (Object(r) !== r) return;
                                    c = !1
                                } else
                                    for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0);
                            } catch (e) {
                                u = !0, o = e
                            } finally {
                                try {
                                    if (!c && null != r.return && (i = r.return(), Object(i) !== i)) return
                                } finally {
                                    if (u) throw o
                                }
                            }
                            return s
                        }
                    }(e, t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return s(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? s(e, t) : void 0
                        }
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n
                }

                function c(e, t, r, n, o, a, i) {
                    try {
                        var s = e[a](i),
                            c = s.value
                    } catch (e) {
                        return void r(e)
                    }
                    s.done ? t(c) : Promise.resolve(c).then(n, o)
                }

                function u(e) {
                    return function() {
                        var t = this,
                            r = arguments;
                        return new Promise((function(n, o) {
                            var a = e.apply(t, r);

                            function i(e) {
                                c(a, n, o, i, s, "next", e)
                            }

                            function s(e) {
                                c(a, n, o, i, s, "throw", e)
                            }
                            i(void 0)
                        }))
                    }
                }
                var l = wp.element,
                    p = (l.useMemo, l.useEffect),
                    f = l.useState;

                function d(e, t) {
                    return h.apply(this, arguments)
                }

                function h() {
                    return h = u(a().mark((function e(t, r) {
                        var n, o, i, s, c, u, l, p, f, d, h, m, y, b, g = arguments;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = g.length > 2 && void 0 !== g[2] ? g[2] : null, r) {
                                        e.next = 14;
                                        break
                                    }
                                    return e.prev = 2, e.next = 5, t.json();
                                case 5:
                                    return o = e.sent, n && console.log("[".concat(n, "] IN: "), o), e.abrupt("return", o);
                                case 10:
                                    return e.prev = 10, e.t0 = e.catch(2), console.error("Could not parse the regular response.", {
                                        err: e.t0,
                                        data
                                    }), e.abrupt("return", {
                                        success: !1,
                                        message: "Could not parse the regular response."
                                    });
                                case 14:
                                    i = t.body.getReader(), s = new TextDecoder("utf-8"), c = "", u = "";
                                case 18:
                                    return e.next = 21, i.read();
                                case 21:
                                    if (l = e.sent, p = l.value, f = l.done, c += s.decode(p, {
                                            stream: !0
                                        }), !f) {
                                        e.next = 27;
                                        break
                                    }
                                    return e.abrupt("break", 68);
                                case 27:
                                    d = c.split("\n"), h = 0;
                                case 29:
                                    if (!(h < d.length - 1)) {
                                        e.next = 65;
                                        break
                                    }
                                    if (0 === d[h].indexOf("data: ")) {
                                        e.next = 32;
                                        break
                                    }
                                    return e.abrupt("continue", 62);
                                case 32:
                                    if ("live" !== (m = JSON.parse(d[h].replace("data: ", ""))).type) {
                                        e.next = 39;
                                        break
                                    }
                                    n && console.log("[".concat(n, " STREAM] LIVE: "), m), u += m.data, r && r(u, m.data), e.next = 62;
                                    break;
                                case 39:
                                    if ("error" !== m.type) {
                                        e.next = 51;
                                        break
                                    }
                                    return e.prev = 40, n && console.error("[".concat(n, " STREAM] ERROR: "), m.data), e.abrupt("return", {
                                        success: !1,
                                        message: m.data
                                    });
                                case 45:
                                    return e.prev = 45, e.t1 = e.catch(40), console.error("Could not parse the 'error' stream.", {
                                        err: e.t1,
                                        data: m
                                    }), e.abrupt("return", {
                                        success: !1,
                                        message: "Could not parse the 'error' stream."
                                    });
                                case 49:
                                    e.next = 62;
                                    break;
                                case 51:
                                    if ("end" !== m.type) {
                                        e.next = 62;
                                        break
                                    }
                                    return e.prev = 52, y = JSON.parse(m.data), n && console.log("[".concat(n, " STREAM] END: "), y), e.abrupt("return", y);
                                case 58:
                                    return e.prev = 58, e.t2 = e.catch(52), console.error("Could not parse the 'end' stream.", {
                                        err: e.t2,
                                        data: m
                                    }), e.abrupt("return", {
                                        success: !1,
                                        message: "Could not parse the 'end' stream."
                                    });
                                case 62:
                                    h++, e.next = 29;
                                    break;
                                case 65:
                                    c = d[d.length - 1], e.next = 18;
                                    break;
                                case 68:
                                    return e.prev = 68, b = JSON.parse(c), n && console.log("[".concat(n, " STREAM] IN: "), b), e.abrupt("return", b);
                                case 74:
                                    return e.prev = 74, e.t3 = e.catch(68), console.error("Could not parse the buffer.", {
                                        err: e.t3,
                                        buffer: c
                                    }), e.abrupt("return", {
                                        success: !1,
                                        message: "Could not parse the buffer."
                                    });
                                case 78:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 10],
                            [40, 45],
                            [52, 58],
                            [68, 74]
                        ])
                    }))), h.apply(this, arguments)
                }

                function m(e, t, r, n) {
                    return y.apply(this, arguments)
                }

                function y() {
                    return (y = u(a().mark((function e(t, r, o, i) {
                        var s;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return s = {
                                        "Content-Type": "application/json"
                                    }, o && (s["X-WP-Nonce"] = o), i && (s.Accept = "text/event-stream"), e.next = 5, fetch("".concat(t), {
                                        method: "POST",
                                        headers: s,
                                        body: (0, n.F1)(r)
                                    });
                                case 5:
                                    return e.abrupt("return", e.sent);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function b(e, t, r, n) {
                    return g.apply(this, arguments)
                }

                function g() {
                    return g = u(a().mark((function e(t, r, n, o) {
                        var s, c = arguments;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return s = c.length > 4 && void 0 !== c[4] ? c[4] : {}, e.abrupt("return", new Promise((function(e, a) {
                                        var c = new FormData;
                                        c.append("file", r);
                                        for (var u = 0, l = Object.entries(s); u < l.length; u++) {
                                            var p = i(l[u], 2),
                                                f = p[0],
                                                d = p[1];
                                            c.append(f, d)
                                        }
                                        var h = new XMLHttpRequest;
                                        h.open("POST", t, !0), n && h.setRequestHeader("X-WP-Nonce", n), h.upload.onprogress = function(e) {
                                            if (e.lengthComputable && o) {
                                                var t = e.loaded / e.total * 100;
                                                o(t)
                                            }
                                        }, h.onload = function() {
                                            if (h.status >= 200 && h.status < 300) try {
                                                var t = JSON.parse(h.responseText);
                                                e(t)
                                            } catch (e) {
                                                a({
                                                    status: h.status,
                                                    statusText: h.statusText,
                                                    error: "The server response is not valid JSON"
                                                })
                                            } else {
                                                try {
                                                    var r = JSON.parse(h.responseText);
                                                    return void a({
                                                        status: h.status,
                                                        message: r.message
                                                    })
                                                } catch (e) {}
                                                a({
                                                    status: h.status,
                                                    statusText: h.statusText
                                                })
                                            }
                                        }, h.onerror = function() {
                                            a({
                                                status: h.status,
                                                statusText: h.statusText
                                            })
                                        }, h.send(c)
                                    })));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), g.apply(this, arguments)
                }

                function _() {
                    return Math.random().toString(36).substring(2)
                }
                var v = function() {
                        var e = i(f(!0), 2),
                            t = e[0],
                            r = e[1];
                        p((function() {
                            var e = setTimeout((function() {
                                var e = setInterval((function() {
                                    r((function(e) {
                                        return !e
                                    }))
                                }), 500);
                                return function() {
                                    return clearInterval(e)
                                }
                            }), 200);
                            return function() {
                                return clearTimeout(e)
                            }
                        }), []);
                        var n = {
                            opacity: t ? 1 : 0,
                            width: "1px",
                            height: "1em",
                            borderLeft: "8px solid",
                            marginLeft: "2px"
                        };
                        return React.createElement("span", {
                            style: n
                        })
                    },
                    w = /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD800-\uDFFF]|[\uFE00-\uFE0F]|[\u1F100-\u1F1FF]|[\u1F200-\u1F2FF]|[\u1F300-\u1F5FF]|[\u1F600-\u1F64F]|[\u1F680-\u1F6FF]|[\u1F700-\u1F77F]|[\u1F780-\u1F7FF]|[\u1F800-\u1F8FF]|[\u1F900-\u1F9FF]|[\u1FA00-\u1FA6F])/;

                function C(e) {
                    return e && 2 === e.length && w.test(e)
                }
            },
            296: (e, t, r) => {
                r.d(t, {
                    F1: () => i
                });
                var n = r(594);

                function o(e) {
                    return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, o(e)
                }
                var a = function(e) {
                    var t = [];
                    return function(r, n) {
                        if ("object" === o(n) && null !== n) {
                            if (-1 !== t.indexOf(n)) {
                                if (!e) throw console.warn("Circular reference found.", {
                                    key: r,
                                    value: n,
                                    cache: t,
                                    cacheIndex: t.indexOf(n)
                                }), new Error("Circular reference found. Cancelled.");
                                return
                            }
                            t.push(n)
                        }
                        return n
                    }
                };

                function i(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    return JSON.stringify(e, a(r), t)
                }
                r.n(n)().Component
            },
            594: e => {
                e.exports = React
            }
        },
        __webpack_module_cache__ = {};

    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var r = __webpack_module_cache__[e] = {
            exports: {}
        };
        return __webpack_modules__[e](r, r.exports, __webpack_require__), r.exports
    }
    __webpack_require__.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return __webpack_require__.d(t, {
            a: t
        }), t
    }, __webpack_require__.d = (e, t) => {
        for (var r in t) __webpack_require__.o(t, r) && !__webpack_require__.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, __webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    var __webpack_exports__ = {},
        ChatbotContext = __webpack_require__(469),
        external_React_ = __webpack_require__(594);

    function t() {
        return t = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }, t.apply(this, arguments)
    }
    const n = ["children", "options"],
        r = {
            blockQuote: "0",
            breakLine: "1",
            breakThematic: "2",
            codeBlock: "3",
            codeFenced: "4",
            codeInline: "5",
            footnote: "6",
            footnoteReference: "7",
            gfmTask: "8",
            heading: "9",
            headingSetext: "10",
            htmlBlock: "11",
            htmlComment: "12",
            htmlSelfClosing: "13",
            image: "14",
            link: "15",
            linkAngleBraceStyleDetector: "16",
            linkBareUrlDetector: "17",
            linkMailtoDetector: "18",
            newlineCoalescer: "19",
            orderedList: "20",
            paragraph: "21",
            ref: "22",
            refImage: "23",
            refLink: "24",
            table: "25",
            tableSeparator: "26",
            text: "27",
            textBolded: "28",
            textEmphasized: "29",
            textEscaped: "30",
            textMarked: "31",
            textStrikethroughed: "32",
            unorderedList: "33"
        };
    var i;
    ! function(e) {
        e[e.MAX = 0] = "MAX", e[e.HIGH = 1] = "HIGH", e[e.MED = 2] = "MED", e[e.LOW = 3] = "LOW", e[e.MIN = 4] = "MIN"
    }(i || (i = {}));
    const l = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce(((e, t) => (e[t.toLowerCase()] = t, e)), {
            for: "htmlFor"
        }),
        a = {
            amp: "&",
            apos: "'",
            gt: ">",
            lt: "<",
            nbsp: " ",
            quot: "“"
        },
        o = ["style", "script"],
        c = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
        s = /mailto:/i,
        d = /\n{2,}$/,
        u = /^(\s*>[\s\S]*?)(?=\n{2,})/,
        p = /^ *> ?/gm,
        f = /^ {2,}\n/,
        h = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
        m = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
        g = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
        y = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
        k = /^(?:\n *)*\n/,
        chatbot_x = /\r\n?/g,
        b = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,
        v = /^\[\^([^\]]+)]/,
        S = /\f/g,
        E = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,
        $ = /^\s*?\[(x|\s)\]/,
        w = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        C = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        z = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
        L = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,
        A = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
        T = /^<!--[\s\S]*?(?:-->)/,
        O = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
        B = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
        M = /^\{.*\}$/,
        R = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        I = /^<([^ >]+@[^ >]+)>/,
        U = /^<([^ >]+:\/[^ >]+)>/,
        D = /-([a-z])?/gi,
        j = /^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,
        N = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
        H = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
        F = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
        P = /(\[|\])/g,
        _ = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
        W = /\t/g,
        G = /(^ *\||\| *$)/g,
        Z = /^ *:-+: *$/,
        q = /^ *:-+ *$/,
        Q = /^ *-+: *$/,
        V = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)",
        X = new RegExp(`^([*_])\\1${V}\\1\\1(?!\\1)`),
        J = new RegExp(`^([*_])${V}\\1(?!\\1|\\w)`),
        K = new RegExp(`^==${V}==`),
        Y = new RegExp(`^~~${V}~~`),
        ee = /^\\([^0-9A-Za-z\s])/,
        te = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
        ne = /^\n+/,
        re = /^([ \t]*)/,
        ie = /\\([^\\])/g,
        le = / *\n+$/,
        ae = /(?:^|\n)( *)$/,
        oe = "(?:\\d+\\.)",
        ce = "(?:[*+-])";

    function se(e) {
        return "( *)(" + (1 === e ? oe : ce) + ") +"
    }
    const de = se(1),
        ue = se(2);

    function pe(e) {
        return new RegExp("^" + (1 === e ? de : ue))
    }
    const fe = pe(1),
        he = pe(2);

    function me(e) {
        return new RegExp("^" + (1 === e ? de : ue) + "[^\\n]*(?:\\n(?!\\1" + (1 === e ? oe : ce) + " )[^\\n]*)*(\\n|$)", "gm")
    }
    const ge = me(1),
        ye = me(2);

    function ke(e) {
        const t = 1 === e ? oe : ce;
        return new RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)")
    }
    const xe = ke(1),
        be = ke(2);

    function ve(e, t) {
        const n = 1 === t,
            o = n ? xe : be,
            a = n ? ge : ye,
            i = n ? fe : he;
        return {
            match(e, t, r) {
                const n = ae.exec(r);
                return n && (t.list || !t.inline && !t.simple) ? o.exec(e = n[1] + e) : null
            },
            order: 1,
            parse(e, t, r) {
                const o = n ? +e[2] : void 0,
                    s = e[0].replace(d, "\n").match(a);
                let c = !1;
                return {
                    items: s.map((function(e, n) {
                        const o = i.exec(e)[0].length,
                            a = new RegExp("^ {1," + o + "}", "gm"),
                            u = e.replace(a, "").replace(i, ""),
                            l = n === s.length - 1,
                            p = -1 !== u.indexOf("\n\n") || l && c;
                        c = p;
                        const f = r.inline,
                            d = r.list;
                        let h;
                        r.list = !0, p ? (r.inline = !1, h = u.replace(le, "\n\n")) : (r.inline = !0, h = u.replace(le, ""));
                        const m = t(h, r);
                        return r.inline = f, r.list = d, m
                    })),
                    ordered: n,
                    start: o
                }
            },
            render: (t, n, o) => e(t.ordered ? "ol" : "ul", {
                key: o.key,
                start: t.type === r.orderedList ? t.start : void 0
            }, t.items.map((function(t, r) {
                return e("li", {
                    key: r
                }, n(t, o))
            })))
        }
    }
    const Se = new RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),
        Ee = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
        $e = [u, m, g, w, z, C, T, j, ge, xe, ye, be],
        we = [...$e, /^[^\n]+(?:  \n|\n{2,})/, L, B];

    function Ce(e) {
        return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase()
    }

    function ze(e) {
        return Q.test(e) ? "right" : Z.test(e) ? "center" : q.test(e) ? "left" : null
    }

    function Le(e, t, n, o) {
        const a = n.inTable;
        n.inTable = !0;
        let i = e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce(((e, a) => ("|" === a.trim() ? e.push(o ? {
            type: r.tableSeparator
        } : {
            type: r.text,
            text: a
        }) : "" !== a && e.push.apply(e, t(a, n)), e)), []);
        n.inTable = a;
        let s = [
            []
        ];
        return i.forEach((function(e, t) {
            e.type === r.tableSeparator ? 0 !== t && t !== i.length - 1 && s.push([]) : (e.type !== r.text || null != i[t + 1] && i[t + 1].type !== r.tableSeparator || (e.text = e.text.trimEnd()), s[s.length - 1].push(e))
        })), s
    }

    function Ae(e, t, n) {
        n.inline = !0;
        const o = e[2] ? e[2].replace(G, "").split("|").map(ze) : [],
            a = e[3] ? function(e, t, r) {
                return e.trim().split("\n").map((function(e) {
                    return Le(e, t, r, !0)
                }))
            }(e[3], t, n) : [],
            i = Le(e[1], t, n, !!a.length);
        return n.inline = !1, a.length ? {
            align: o,
            cells: a,
            header: i,
            type: r.table
        } : {
            children: i,
            type: r.paragraph
        }
    }

    function Te(e, t) {
        return null == e.align[t] ? {} : {
            textAlign: e.align[t]
        }
    }

    function Oe(e) {
        return function(t, r) {
            return r.inline ? e.exec(t) : null
        }
    }

    function Be(e) {
        return function(t, r) {
            return r.inline || r.simple ? e.exec(t) : null
        }
    }

    function Me(e) {
        return function(t, r) {
            return r.inline || r.simple ? null : e.exec(t)
        }
    }

    function Re(e) {
        return function(t) {
            return e.exec(t)
        }
    }

    function Ie(e, t, r) {
        if (t.inline || t.simple) return null;
        if (r && !r.endsWith("\n")) return null;
        let n = "";
        e.split("\n").every((e => !$e.some((t => t.test(e))) && (n += e + "\n", e.trim())));
        const o = n.trimEnd();
        return "" == o ? null : [n, o]
    }

    function Ue(e) {
        try {
            if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return null
        } catch (e) {
            return null
        }
        return e
    }

    function De(e) {
        return e.replace(ie, "$1")
    }

    function je(e, t, r) {
        const n = r.inline || !1,
            o = r.simple || !1;
        r.inline = !0, r.simple = !0;
        const a = e(t, r);
        return r.inline = n, r.simple = o, a
    }

    function Ne(e, t, r) {
        const n = r.inline || !1,
            o = r.simple || !1;
        r.inline = !1, r.simple = !0;
        const a = e(t, r);
        return r.inline = n, r.simple = o, a
    }

    function He(e, t, r) {
        const n = r.inline || !1;
        r.inline = !1;
        const o = e(t, r);
        return r.inline = n, o
    }
    const Fe = (e, t, r) => ({
        children: je(t, e[1], r)
    });

    function Pe() {
        return {}
    }

    function _e() {
        return null
    }

    function We(...e) {
        return e.filter(Boolean).join(" ")
    }

    function Ge(e, t, r) {
        let n = e;
        const o = t.split(".");
        for (; o.length && (n = n[o[0]], void 0 !== n);) o.shift();
        return n || r
    }

    function Ze(e = "", n = {}) {
        function i(e, r, ...o) {
            const a = Ge(n.overrides, `${e}.props`, {});
            return n.createElement(function(e, t) {
                const r = Ge(t, e);
                return r ? "function" == typeof r || "object" == typeof r && "render" in r ? r : Ge(t, `${e}.component`, e) : e
            }(e, n.overrides), t({}, r, a, {
                className: We(null == r ? void 0 : r.className, a.className) || void 0
            }), ...o)
        }

        function d(e) {
            e = e.replace(E, "");
            let t = !1;
            n.forceInline ? t = !0 : n.forceBlock || (t = !1 === _.test(e));
            const r = Z(Q(t ? e : `${e.trimEnd().replace(ne,"")}\n\n`, {
                inline: t
            }));
            for (;
                "string" == typeof r[r.length - 1] && !r[r.length - 1].trim();) r.pop();
            if (null === n.wrapper) return r;
            const o = n.wrapper || (t ? "span" : "div");
            let a;
            if (r.length > 1 || n.forceWrapper) a = r;
            else {
                if (1 === r.length) return a = r[0], "string" == typeof a ? i("span", {
                    key: "outer"
                }, a) : a;
                a = null
            }
            return external_React_.createElement(o, {
                key: "outer"
            }, a)
        }

        function x(e, t) {
            const r = t.match(c);
            return r ? r.reduce((function(t, r, o) {
                const a = r.indexOf("=");
                if (-1 !== a) {
                    const i = function(e) {
                            return -1 !== e.indexOf("-") && null === e.match(O) && (e = e.replace(D, (function(e, t) {
                                return t.toUpperCase()
                            }))), e
                        }(r.slice(0, a)).trim(),
                        s = function(e) {
                            const t = e[0];
                            return ('"' === t || "'" === t) && e.length >= 2 && e[e.length - 1] === t ? e.slice(1, -1) : e
                        }(r.slice(a + 1).trim()),
                        c = l[i] || i,
                        u = t[c] = function(e, t, r, n) {
                            return "style" === t ? r.split(/;\s?/).reduce((function(e, t) {
                                const r = t.slice(0, t.indexOf(":"));
                                return e[r.trim().replace(/(-[a-z])/g, (e => e[1].toUpperCase()))] = t.slice(r.length + 1).trim(), e
                            }), {}) : "href" === t || "src" === t ? n(r, e, t) : (r.match(M) && (r = r.slice(1, r.length - 1)), "true" === r || "false" !== r && r)
                        }(e, i, s, n.sanitizer);
                    "string" == typeof u && (L.test(u) || B.test(u)) && (t[c] = external_React_.cloneElement(d(u.trim()), {
                        key: o
                    }))
                } else "style" !== r && (t[l[r] || r] = !0);
                return t
            }), {}) : null
        }
        n.overrides = n.overrides || {}, n.sanitizer = n.sanitizer || Ue, n.slugify = n.slugify || Ce, n.namedCodesToUnicode = n.namedCodesToUnicode ? t({}, a, n.namedCodesToUnicode) : a, n.createElement = n.createElement || external_React_.createElement;
        const G = [],
            q = {},
            V = {
                [r.blockQuote]: {
                    match: Me(u),
                    order: 1,
                    parse: (e, t, r) => ({
                        children: t(e[0].replace(p, ""), r)
                    }),
                    render: (e, t, r) => i("blockquote", {
                        key: r.key
                    }, t(e.children, r))
                },
                [r.breakLine]: {
                    match: Re(f),
                    order: 1,
                    parse: Pe,
                    render: (e, t, r) => i("br", {
                        key: r.key
                    })
                },
                [r.breakThematic]: {
                    match: Me(h),
                    order: 1,
                    parse: Pe,
                    render: (e, t, r) => i("hr", {
                        key: r.key
                    })
                },
                [r.codeBlock]: {
                    match: Me(g),
                    order: 0,
                    parse: e => ({
                        lang: void 0,
                        text: e[0].replace(/^ {4}/gm, "").replace(/\n+$/, "")
                    }),
                    render: (e, r, n) => i("pre", {
                        key: n.key
                    }, i("code", t({}, e.attrs, {
                        className: e.lang ? `lang-${e.lang}` : ""
                    }), e.text))
                },
                [r.codeFenced]: {
                    match: Me(m),
                    order: 0,
                    parse: e => ({
                        attrs: x("code", e[3] || ""),
                        lang: e[2] || void 0,
                        text: e[4],
                        type: r.codeBlock
                    })
                },
                [r.codeInline]: {
                    match: Be(y),
                    order: 3,
                    parse: e => ({
                        text: e[2]
                    }),
                    render: (e, t, r) => i("code", {
                        key: r.key
                    }, e.text)
                },
                [r.footnote]: {
                    match: Me(b),
                    order: 0,
                    parse: e => (G.push({
                        footnote: e[2],
                        identifier: e[1]
                    }), {}),
                    render: _e
                },
                [r.footnoteReference]: {
                    match: Oe(v),
                    order: 1,
                    parse: e => ({
                        target: `#${n.slugify(e[1],Ce)}`,
                        text: e[1]
                    }),
                    render: (e, t, r) => i("a", {
                        key: r.key,
                        href: n.sanitizer(e.target, "a", "href")
                    }, i("sup", {
                        key: r.key
                    }, e.text))
                },
                [r.gfmTask]: {
                    match: Oe($),
                    order: 1,
                    parse: e => ({
                        completed: "x" === e[1].toLowerCase()
                    }),
                    render: (e, t, r) => i("input", {
                        checked: e.completed,
                        key: r.key,
                        readOnly: !0,
                        type: "checkbox"
                    })
                },
                [r.heading]: {
                    match: Me(n.enforceAtxHeadings ? C : w),
                    order: 1,
                    parse: (e, t, r) => ({
                        children: je(t, e[2], r),
                        id: n.slugify(e[2], Ce),
                        level: e[1].length
                    }),
                    render: (e, t, r) => i(`h${e.level}`, {
                        id: e.id,
                        key: r.key
                    }, t(e.children, r))
                },
                [r.headingSetext]: {
                    match: Me(z),
                    order: 0,
                    parse: (e, t, n) => ({
                        children: je(t, e[1], n),
                        level: "=" === e[2] ? 1 : 2,
                        type: r.heading
                    })
                },
                [r.htmlBlock]: {
                    match: Re(L),
                    order: 1,
                    parse(e, t, r) {
                        const [, n] = e[3].match(re), a = new RegExp(`^${n}`, "gm"), i = e[3].replace(a, ""), s = (c = i, we.some((e => e.test(c))) ? He : je);
                        var c;
                        const u = e[1].toLowerCase(),
                            l = -1 !== o.indexOf(u),
                            p = (l ? u : e[1]).trim(),
                            f = {
                                attrs: x(p, e[2]),
                                noInnerParse: l,
                                tag: p
                            };
                        return r.inAnchor = r.inAnchor || "a" === u, l ? f.text = e[3] : f.children = s(t, i, r), r.inAnchor = !1, f
                    },
                    render: (e, r, n) => i(e.tag, t({
                        key: n.key
                    }, e.attrs), e.text || r(e.children, n))
                },
                [r.htmlSelfClosing]: {
                    match: Re(B),
                    order: 1,
                    parse(e) {
                        const t = e[1].trim();
                        return {
                            attrs: x(t, e[2] || ""),
                            tag: t
                        }
                    },
                    render: (e, r, n) => i(e.tag, t({}, e.attrs, {
                        key: n.key
                    }))
                },
                [r.htmlComment]: {
                    match: Re(T),
                    order: 1,
                    parse: () => ({}),
                    render: _e
                },
                [r.image]: {
                    match: Be(Ee),
                    order: 1,
                    parse: e => ({
                        alt: e[1],
                        target: De(e[2]),
                        title: e[3]
                    }),
                    render: (e, t, r) => i("img", {
                        key: r.key,
                        alt: e.alt || void 0,
                        title: e.title || void 0,
                        src: n.sanitizer(e.target, "img", "src")
                    })
                },
                [r.link]: {
                    match: Oe(Se),
                    order: 3,
                    parse: (e, t, r) => ({
                        children: Ne(t, e[1], r),
                        target: De(e[2]),
                        title: e[3]
                    }),
                    render: (e, t, r) => i("a", {
                        key: r.key,
                        href: n.sanitizer(e.target, "a", "href"),
                        title: e.title
                    }, t(e.children, r))
                },
                [r.linkAngleBraceStyleDetector]: {
                    match: Oe(U),
                    order: 0,
                    parse: e => ({
                        children: [{
                            text: e[1],
                            type: r.text
                        }],
                        target: e[1],
                        type: r.link
                    })
                },
                [r.linkBareUrlDetector]: {
                    match: (e, t) => t.inAnchor ? null : Oe(R)(e, t),
                    order: 0,
                    parse: e => ({
                        children: [{
                            text: e[1],
                            type: r.text
                        }],
                        target: e[1],
                        title: void 0,
                        type: r.link
                    })
                },
                [r.linkMailtoDetector]: {
                    match: Oe(I),
                    order: 0,
                    parse(e) {
                        let t = e[1],
                            n = e[1];
                        return s.test(n) || (n = "mailto:" + n), {
                            children: [{
                                text: t.replace("mailto:", ""),
                                type: r.text
                            }],
                            target: n,
                            type: r.link
                        }
                    }
                },
                [r.orderedList]: ve(i, 1),
                [r.unorderedList]: ve(i, 2),
                [r.newlineCoalescer]: {
                    match: Me(k),
                    order: 3,
                    parse: Pe,
                    render: () => "\n"
                },
                [r.paragraph]: {
                    match: Ie,
                    order: 3,
                    parse: Fe,
                    render: (e, t, r) => i("p", {
                        key: r.key
                    }, t(e.children, r))
                },
                [r.ref]: {
                    match: Oe(N),
                    order: 0,
                    parse: e => (q[e[1]] = {
                        target: e[2],
                        title: e[4]
                    }, {}),
                    render: _e
                },
                [r.refImage]: {
                    match: Be(H),
                    order: 0,
                    parse: e => ({
                        alt: e[1] || void 0,
                        ref: e[2]
                    }),
                    render: (e, t, r) => q[e.ref] ? i("img", {
                        key: r.key,
                        alt: e.alt,
                        src: n.sanitizer(q[e.ref].target, "img", "src"),
                        title: q[e.ref].title
                    }) : null
                },
                [r.refLink]: {
                    match: Oe(F),
                    order: 0,
                    parse: (e, t, r) => ({
                        children: t(e[1], r),
                        fallbackChildren: t(e[0].replace(P, "\\$1"), r),
                        ref: e[2]
                    }),
                    render: (e, t, r) => q[e.ref] ? i("a", {
                        key: r.key,
                        href: n.sanitizer(q[e.ref].target, "a", "href"),
                        title: q[e.ref].title
                    }, t(e.children, r)) : i("span", {
                        key: r.key
                    }, t(e.fallbackChildren, r))
                },
                [r.table]: {
                    match: Me(j),
                    order: 1,
                    parse: Ae,
                    render(e, t, r) {
                        const n = e;
                        return i("table", {
                            key: r.key
                        }, i("thead", null, i("tr", null, n.header.map((function(e, o) {
                            return i("th", {
                                key: o,
                                style: Te(n, o)
                            }, t(e, r))
                        })))), i("tbody", null, n.cells.map((function(e, o) {
                            return i("tr", {
                                key: o
                            }, e.map((function(e, o) {
                                return i("td", {
                                    key: o,
                                    style: Te(n, o)
                                }, t(e, r))
                            })))
                        }))))
                    }
                },
                [r.text]: {
                    match: Re(te),
                    order: 4,
                    parse: e => ({
                        text: e[0].replace(A, ((e, t) => n.namedCodesToUnicode[t] ? n.namedCodesToUnicode[t] : e))
                    }),
                    render: e => e.text
                },
                [r.textBolded]: {
                    match: Be(X),
                    order: 2,
                    parse: (e, t, r) => ({
                        children: t(e[2], r)
                    }),
                    render: (e, t, r) => i("strong", {
                        key: r.key
                    }, t(e.children, r))
                },
                [r.textEmphasized]: {
                    match: Be(J),
                    order: 3,
                    parse: (e, t, r) => ({
                        children: t(e[2], r)
                    }),
                    render: (e, t, r) => i("em", {
                        key: r.key
                    }, t(e.children, r))
                },
                [r.textEscaped]: {
                    match: Be(ee),
                    order: 1,
                    parse: e => ({
                        text: e[1],
                        type: r.text
                    })
                },
                [r.textMarked]: {
                    match: Be(K),
                    order: 3,
                    parse: Fe,
                    render: (e, t, r) => i("mark", {
                        key: r.key
                    }, t(e.children, r))
                },
                [r.textStrikethroughed]: {
                    match: Be(Y),
                    order: 3,
                    parse: Fe,
                    render: (e, t, r) => i("del", {
                        key: r.key
                    }, t(e.children, r))
                }
            };
        !0 === n.disableParsingRawHTML && (delete V[r.htmlBlock], delete V[r.htmlSelfClosing]);
        const Q = function(e) {
                let t = Object.keys(e);

                function r(n, o) {
                    let a = [],
                        i = "";
                    for (; n;) {
                        let s = 0;
                        for (; s < t.length;) {
                            const c = t[s],
                                u = e[c],
                                l = u.match(n, o, i);
                            if (l) {
                                const e = l[0];
                                n = n.substring(e.length);
                                const t = u.parse(l, r, o);
                                null == t.type && (t.type = c), a.push(t), i = e;
                                break
                            }
                            s++
                        }
                    }
                    return a
                }
                return t.sort((function(t, r) {
                        let n = e[t].order,
                            o = e[r].order;
                        return n !== o ? n - o : t < r ? -1 : 1
                    })),
                    function(e, t) {
                        return r(function(e) {
                            return e.replace(chatbot_x, "\n").replace(S, "").replace(W, "    ")
                        }(e), t)
                    }
            }(V),
            Z = (oe = function(e, t) {
                return function(r, n, o) {
                    const a = e[r.type].render;
                    return t ? t((() => a(r, n, o)), r, n, o) : a(r, n, o)
                }
            }(V, n.renderRule), function e(t, r = {}) {
                if (Array.isArray(t)) {
                    const n = r.key,
                        o = [];
                    let a = !1;
                    for (let n = 0; n < t.length; n++) {
                        r.key = n;
                        const i = e(t[n], r),
                            s = "string" == typeof i;
                        s && a ? o[o.length - 1] += i : null !== i && o.push(i), a = s
                    }
                    return r.key = n, o
                }
                return oe(t, e, r)
            });
        var oe;
        const ae = d(e);
        return G.length ? i("div", null, ae, i("footer", {
            key: "footer"
        }, G.map((function(e) {
            return i("div", {
                id: n.slugify(e.identifier, Ce),
                key: e.identifier
            }, e.identifier, Z(Q(e.footnote, {
                inline: !0
            })))
        })))) : ae
    }
    const index_modern = e => {
        let {
            children: t = "",
            options: r
        } = e, o = function(e, t) {
            if (null == e) return {};
            var r, n, o = {},
                a = Object.keys(e);
            for (n = 0; n < a.length; n++) t.indexOf(r = a[n]) >= 0 || (o[r] = e[r]);
            return o
        }(e, n);
        return external_React_.cloneElement(Ze(t, r), o)
    };
    var helpers = __webpack_require__(966);

    function typed_module_t() {
        return typed_module_t = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }, typed_module_t.apply(this, arguments)
    }
    var typed_module_s = {
            strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
            stringsElement: null,
            typeSpeed: 0,
            startDelay: 0,
            backSpeed: 0,
            smartBackspace: !0,
            shuffle: !1,
            backDelay: 700,
            fadeOut: !1,
            fadeOutClass: "typed-fade-out",
            fadeOutDelay: 500,
            loop: !1,
            loopCount: 1 / 0,
            showCursor: !0,
            cursorChar: "|",
            autoInsertCss: !0,
            attr: null,
            bindInputFocusEvents: !1,
            contentType: "html",
            onBegin: function(e) {},
            onComplete: function(e) {},
            preStringTyped: function(e, t) {},
            onStringTyped: function(e, t) {},
            onLastStringBackspaced: function(e) {},
            onTypingPaused: function(e, t) {},
            onTypingResumed: function(e, t) {},
            onReset: function(e) {},
            onStop: function(e, t) {},
            onStart: function(e, t) {},
            onDestroy: function(e) {}
        },
        e = new(function() {
            function e() {}
            var t = e.prototype;
            return t.load = function(e, t, r) {
                if (e.el = "string" == typeof r ? document.querySelector(r) : r, e.options = typed_module_t({}, typed_module_s, t), e.isInput = "input" === e.el.tagName.toLowerCase(), e.attr = e.options.attr, e.bindInputFocusEvents = e.options.bindInputFocusEvents, e.showCursor = !e.isInput && e.options.showCursor, e.cursorChar = e.options.cursorChar, e.cursorBlinking = !0, e.elContent = e.attr ? e.el.getAttribute(e.attr) : e.el.textContent, e.contentType = e.options.contentType, e.typeSpeed = e.options.typeSpeed, e.startDelay = e.options.startDelay, e.backSpeed = e.options.backSpeed, e.smartBackspace = e.options.smartBackspace, e.backDelay = e.options.backDelay, e.fadeOut = e.options.fadeOut, e.fadeOutClass = e.options.fadeOutClass, e.fadeOutDelay = e.options.fadeOutDelay, e.isPaused = !1, e.strings = e.options.strings.map((function(e) {
                        return e.trim()
                    })), e.stringsElement = "string" == typeof e.options.stringsElement ? document.querySelector(e.options.stringsElement) : e.options.stringsElement, e.stringsElement) {
                    e.strings = [], e.stringsElement.style.cssText = "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";
                    var n = Array.prototype.slice.apply(e.stringsElement.children),
                        o = n.length;
                    if (o)
                        for (var a = 0; a < o; a += 1) e.strings.push(n[a].innerHTML.trim())
                }
                for (var i in e.strPos = 0, e.currentElContent = this.getCurrentElContent(e), e.currentElContent && e.currentElContent.length > 0 && (e.strPos = e.currentElContent.length - 1, e.strings.unshift(e.currentElContent)), e.sequence = [], e.strings) e.sequence[i] = i;
                e.arrayPos = 0, e.stopNum = 0, e.loop = e.options.loop, e.loopCount = e.options.loopCount, e.curLoop = 0, e.shuffle = e.options.shuffle, e.pause = {
                    status: !1,
                    typewrite: !0,
                    curString: "",
                    curStrPos: 0
                }, e.typingComplete = !1, e.autoInsertCss = e.options.autoInsertCss, e.autoInsertCss && (this.appendCursorAnimationCss(e), this.appendFadeOutAnimationCss(e))
            }, t.getCurrentElContent = function(e) {
                return e.attr ? e.el.getAttribute(e.attr) : e.isInput ? e.el.value : "html" === e.contentType ? e.el.innerHTML : e.el.textContent
            }, t.appendCursorAnimationCss = function(e) {
                var t = "data-typed-js-cursor-css";
                if (e.showCursor && !document.querySelector("[" + t + "]")) {
                    var r = document.createElement("style");
                    r.setAttribute(t, "true"), r.innerHTML = "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ", document.body.appendChild(r)
                }
            }, t.appendFadeOutAnimationCss = function(e) {
                var t = "data-typed-fadeout-js-css";
                if (e.fadeOut && !document.querySelector("[" + t + "]")) {
                    var r = document.createElement("style");
                    r.setAttribute(t, "true"), r.innerHTML = "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ", document.body.appendChild(r)
                }
            }, e
        }()),
        typed_module_n = new(function() {
            function e() {}
            var t = e.prototype;
            return t.typeHtmlChars = function(e, t, r) {
                if ("html" !== r.contentType) return t;
                var n = e.substring(t).charAt(0);
                if ("<" === n || "&" === n) {
                    var o;
                    for (o = "<" === n ? ">" : ";"; e.substring(t + 1).charAt(0) !== o && !(1 + ++t > e.length););
                    t++
                }
                return t
            }, t.backSpaceHtmlChars = function(e, t, r) {
                if ("html" !== r.contentType) return t;
                var n = e.substring(t).charAt(0);
                if (">" === n || ";" === n) {
                    var o;
                    for (o = ">" === n ? "<" : "&"; e.substring(t - 1).charAt(0) !== o && !(--t < 0););
                    t--
                }
                return t
            }, e
        }()),
        typed_module_i = function() {
            function t(t, r) {
                e.load(this, r, t), this.begin()
            }
            var r = t.prototype;
            return r.toggle = function() {
                this.pause.status ? this.start() : this.stop()
            }, r.stop = function() {
                this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this))
            }, r.start = function() {
                this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this))
            }, r.destroy = function() {
                this.reset(!1), this.options.onDestroy(this)
            }, r.reset = function(e) {
                void 0 === e && (e = !0), clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, e && (this.insertCursor(), this.options.onReset(this), this.begin())
            }, r.begin = function() {
                var e = this;
                this.options.onBegin(this), this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout((function() {
                    0 === e.strPos ? e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos) : e.backspace(e.strings[e.sequence[e.arrayPos]], e.strPos)
                }), this.startDelay)
            }, r.typewrite = function(e, t) {
                var r = this;
                this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                var n = this.humanizer(this.typeSpeed),
                    o = 1;
                !0 !== this.pause.status ? this.timeout = setTimeout((function() {
                    t = typed_module_n.typeHtmlChars(e, t, r);
                    var n = 0,
                        a = e.substring(t);
                    if ("^" === a.charAt(0) && /^\^\d+/.test(a)) {
                        var i = 1;
                        i += (a = /\d+/.exec(a)[0]).length, n = parseInt(a), r.temporaryPause = !0, r.options.onTypingPaused(r.arrayPos, r), e = e.substring(0, t) + e.substring(t + i), r.toggleBlinking(!0)
                    }
                    if ("`" === a.charAt(0)) {
                        for (;
                            "`" !== e.substring(t + o).charAt(0) && (o++, !(t + o > e.length)););
                        var s = e.substring(0, t),
                            c = e.substring(s.length + 1, t + o),
                            u = e.substring(t + o + 1);
                        e = s + c + u, o--
                    }
                    r.timeout = setTimeout((function() {
                        r.toggleBlinking(!1), t >= e.length ? r.doneTyping(e, t) : r.keepTyping(e, t, o), r.temporaryPause && (r.temporaryPause = !1, r.options.onTypingResumed(r.arrayPos, r))
                    }), n)
                }), n) : this.setPauseStatus(e, t, !0)
            }, r.keepTyping = function(e, t, r) {
                0 === t && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this));
                var n = e.substring(0, t += r);
                this.replaceText(n), this.typewrite(e, t)
            }, r.doneTyping = function(e, t) {
                var r = this;
                this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout((function() {
                    r.backspace(e, t)
                }), this.backDelay))
            }, r.backspace = function(e, t) {
                var r = this;
                if (!0 !== this.pause.status) {
                    if (this.fadeOut) return this.initFadeOut();
                    this.toggleBlinking(!1);
                    var n = this.humanizer(this.backSpeed);
                    this.timeout = setTimeout((function() {
                        t = typed_module_n.backSpaceHtmlChars(e, t, r);
                        var n = e.substring(0, t);
                        if (r.replaceText(n), r.smartBackspace) {
                            var o = r.strings[r.arrayPos + 1];
                            r.stopNum = o && n === o.substring(0, t) ? t : 0
                        }
                        t > r.stopNum ? (t--, r.backspace(e, t)) : t <= r.stopNum && (r.arrayPos++, r.arrayPos === r.strings.length ? (r.arrayPos = 0, r.options.onLastStringBackspaced(), r.shuffleStringsIfNeeded(), r.begin()) : r.typewrite(r.strings[r.sequence[r.arrayPos]], t))
                    }), n)
                } else this.setPauseStatus(e, t, !1)
            }, r.complete = function() {
                this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0
            }, r.setPauseStatus = function(e, t, r) {
                this.pause.typewrite = r, this.pause.curString = e, this.pause.curStrPos = t
            }, r.toggleBlinking = function(e) {
                this.cursor && (this.pause.status || this.cursorBlinking !== e && (this.cursorBlinking = e, e ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
            }, r.humanizer = function(e) {
                return Math.round(Math.random() * e / 2) + e
            }, r.shuffleStringsIfNeeded = function() {
                this.shuffle && (this.sequence = this.sequence.sort((function() {
                    return Math.random() - .5
                })))
            }, r.initFadeOut = function() {
                var e = this;
                return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout((function() {
                    e.arrayPos++, e.replaceText(""), e.strings.length > e.arrayPos ? e.typewrite(e.strings[e.sequence[e.arrayPos]], 0) : (e.typewrite(e.strings[0], 0), e.arrayPos = 0)
                }), this.fadeOutDelay)
            }, r.replaceText = function(e) {
                this.attr ? this.el.setAttribute(this.attr, e) : this.isInput ? this.el.value = e : "html" === this.contentType ? this.el.innerHTML = e : this.el.textContent = e
            }, r.bindFocusEvents = function() {
                var e = this;
                this.isInput && (this.el.addEventListener("focus", (function(t) {
                    e.stop()
                })), this.el.addEventListener("blur", (function(t) {
                    e.el.value && 0 !== e.el.value.length || e.start()
                })))
            }, r.insertCursor = function() {
                this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", !0), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
            }, t
        }();

    function _typeof(e) {
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, _typeof(e)
    }

    function ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ownKeys(Object(r), !0).forEach((function(t) {
                _defineProperty(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }

    function _defineProperty(e, t, r) {
        return (t = _toPropertyKey(t)) in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function _toPropertyKey(e) {
        var t = _toPrimitive(e, "string");
        return "symbol" == _typeof(t) ? t : String(t)
    }

    function _toPrimitive(e, t) {
        if ("object" != _typeof(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != _typeof(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
    }
    var BouncingDots = function(e) {
            var t = {
                width: 9,
                height: 9,
                margin: "5px 0px 0px 5px",
                borderRadius: "50%",
                backgroundColor: "#a3a1a1",
                opacity: 1,
                animation: "bouncing-loader 0.4s infinite alternate"
            };
            return React.createElement(React.Fragment, null, React.createElement("style", null, "\n          @keyframes bouncing-loader {\n            to {\n              opacity: 0.6;\n              transform: translateY(-10px);\n            }\n          }\n        "), React.createElement("div", {
                style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: 26
                }
            }, ["0.1s", "0.2s", "0.3s"].map((function(e, r) {
                return React.createElement("div", {
                    key: r,
                    style: _objectSpread(_objectSpread({}, t), {}, {
                        animationDelay: e
                    })
                })
            }))))
        },
        js_helpers = __webpack_require__(678),
        chatbot_MwaiAPI = __webpack_require__(137),
        _excluded = ["enabled", "content", "children", "className"];

    function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }, _extends.apply(this, arguments)
    }

    function _slicedToArray(e, t) {
        return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest()
    }

    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function _unsupportedIterableToArray(e, t) {
        if (e) {
            if ("string" == typeof e) return _arrayLikeToArray(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(e, t) : void 0
        }
    }

    function _arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function _iterableToArrayLimit(e, t) {
        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != r) {
            var n, o, a, i, s = [],
                c = !0,
                u = !1;
            try {
                if (a = (r = r.call(e)).next, 0 === t) {
                    if (Object(r) !== r) return;
                    c = !1
                } else
                    for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0);
            } catch (e) {
                u = !0, o = e
            } finally {
                try {
                    if (!c && null != r.return && (i = r.return(), Object(i) !== i)) return
                } finally {
                    if (u) throw o
                }
            }
            return s
        }
    }

    function _arrayWithHoles(e) {
        if (Array.isArray(e)) return e
    }

    function _objectWithoutProperties(e, t) {
        if (null == e) return {};
        var r, n, o = _objectWithoutPropertiesLoose(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
        }
        return o
    }

    function _objectWithoutPropertiesLoose(e, t) {
        if (null == e) return {};
        var r, n, o = {},
            a = Object.keys(e);
        for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
    }
    var _wp$element = wp.element,
        useState = _wp$element.useState,
        useEffect = _wp$element.useEffect,
        useRef = _wp$element.useRef,
        useCallback = _wp$element.useCallback,
        svgPathDefault = '<path d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" />',
        svgPathSuccess = '<path d="M10.7673 18C10.3106 18 9.86749 17.8046 9.54432 17.4555L5.50694 13.1222C4.83102 12.3968 4.83102 11.2208 5.50694 10.4954C6.18287 9.76997 7.27871 9.76997 7.95505 10.4954L10.6794 13.4196L16.9621 5.63976C17.5874 4.86495 18.6832 4.78289 19.4031 5.45388C20.125 6.12487 20.2036 7.29638 19.5759 8.07391L12.0778 17.3589C11.7639 17.7475 11.3119 17.9801 10.8319 18C10.8087 18 10.788 18 10.7673 18Z" />',
        svgPathError = '<path d="M17.7623 17.7626C17.0831 18.4418 15.9549 18.416 15.244 17.705L5.79906 8.26012C5.08811 7.54917 5.0623 6.42098 5.74145 5.74183C6.4206 5.06267 7.54879 5.08849 8.25975 5.79944L17.7047 15.2443C18.4156 15.9553 18.4414 17.0835 17.7623 17.7626Z" /><path d="M17.5508 8.52848L8.52842 17.5509C7.84927 18.23 6.72108 18.2042 6.01012 17.4933C5.29917 16.7823 5.27336 15.6541 5.95251 14.975L14.9749 5.95257C15.6541 5.27342 16.7823 5.29923 17.4932 6.01019C18.2042 6.72114 18.23 7.84933 17.5508 8.52848Z" />',
        ReplyActions = function(e) {
            var t = e.enabled,
                r = e.content,
                n = e.children,
                o = e.className,
                a = _objectWithoutProperties(e, _excluded),
                i = (0, helpers.gR)(),
                s = _slicedToArray(useState("idle"), 2),
                c = s[0],
                u = s[1],
                l = _slicedToArray(useState(!0), 2),
                p = l[0],
                f = l[1],
                d = useRef(null),
                h = useRef(!1),
                m = useCallback((function() {
                    h.current || (h.current = !0, d.current = setTimeout((function() {
                        f(!1)
                    }), 500))
                }), []),
                y = useCallback((function() {
                    d.current && clearTimeout(d.current), f(!0), h.current = !1
                }), []);
            useEffect((function() {
                return function() {
                    d.current && clearTimeout(d.current)
                }
            }), []);
            var b = "success" === c ? svgPathSuccess : "error" === c ? svgPathError : svgPathDefault;
            return React.createElement("div", _extends({}, a, {
                onMouseLeave: y,
                onMouseEnter: m,
                onMouseOver: m
            }), React.createElement("span", {
                className: o
            }, n), React.createElement("div", {
                className: i("mwai-reply-actions", {
                    "mwai-hidden": p
                })
            }, t && React.createElement("div", {
                className: "mwai-copy-button",
                onClick: function() {
                    try {
                        navigator.clipboard.writeText(r), u("success")
                    } catch (e) {
                        u("error"), console.warn("Not allowed to copy to clipboard. Make sure your website uses HTTPS.", {
                            content: r
                        })
                    } finally {
                        setTimeout((function() {
                            u("idle")
                        }), 2e3)
                    }
                }
            }, React.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                dangerouslySetInnerHTML: {
                    __html: b
                }
            }))))
        };
    const components_ReplyActions = ReplyActions;

    function ChatbotName_slicedToArray(e, t) {
        return ChatbotName_arrayWithHoles(e) || ChatbotName_iterableToArrayLimit(e, t) || ChatbotName_unsupportedIterableToArray(e, t) || ChatbotName_nonIterableRest()
    }

    function ChatbotName_nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function ChatbotName_unsupportedIterableToArray(e, t) {
        if (e) {
            if ("string" == typeof e) return ChatbotName_arrayLikeToArray(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ChatbotName_arrayLikeToArray(e, t) : void 0
        }
    }

    function ChatbotName_arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function ChatbotName_iterableToArrayLimit(e, t) {
        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != r) {
            var n, o, a, i, s = [],
                c = !0,
                u = !1;
            try {
                if (a = (r = r.call(e)).next, 0 === t) {
                    if (Object(r) !== r) return;
                    c = !1
                } else
                    for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0);
            } catch (e) {
                u = !0, o = e
            } finally {
                try {
                    if (!c && null != r.return && (i = r.return(), Object(i) !== i)) return
                } finally {
                    if (u) throw o
                }
            }
            return s
        }
    }

    function ChatbotName_arrayWithHoles(e) {
        if (Array.isArray(e)) return e
    }
    var useMemo = wp.element.useMemo,
        ChatbotName = function(e) {
            var t = e.role,
                r = void 0 === t ? "user" : t,
                n = (0, ChatbotContext.o)().state,
                o = n.pluginUrl,
                a = n.iconUrl,
                i = n.userData,
                s = n.userName,
                c = n.aiName,
                u = n.guestName,
                l = n.userAvatar,
                p = n.aiAvatar,
                f = n.guestAvatar,
                d = n.userAvatarUrl,
                h = n.aiAvatarUrl,
                m = n.guestAvatarUrl,
                y = useMemo((function() {
                    var e = "assistant" === r,
                        t = !i && !e,
                        n = function(e) {
                            return React.createElement("div", {
                                className: "mwai-name-text"
                            }, e)
                        },
                        y = function(e, t, r, n) {
                            var a, i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                            if (!e) return null;
                            if ((0, js_helpers.Ve)(t)) return a = t, React.createElement("div", {
                                className: "mwai-avatar mwai-emoji",
                                style: {
                                    fontSize: "32px",
                                    lineHeight: "32px"
                                }
                            }, a);
                            var s = function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return (0, helpers.mv)(e) ? e : e && !(0, js_helpers.Ve)(e) ? t ? e : "".concat(o, "/images/").concat(e) : (t || (0, js_helpers.Ve)(e) || console.warn("Invalid URL for avatar:", e), null)
                            }(t, i) || r;
                            return s ? function(e, t) {
                                return React.createElement("div", {
                                    className: "mwai-avatar"
                                }, React.createElement("img", {
                                    width: "32",
                                    height: "32",
                                    src: e,
                                    alt: t
                                }))
                            }(s, n) : null
                        };
                    if (e) {
                        var b = y(p, h, a, "AI Avatar");
                        return b ? (null === h && a && console.warn("Using iconUrl as a temporary fallback for AI avatar. Please set aiAvatarUrl."), b) : n(c)
                    }
                    return t ? t ? y(f, m, null, "Guest Avatar") || n(u || "Guest") : void 0 : y(l, d, null == i ? void 0 : i.AVATAR_URL, "User Avatar", !0) || n(formatName(s, u, i))
                }), [r, c, s, u, i, a, p, l, f, h, d, m, o]);
            return React.createElement("span", {
                className: "mwai-name"
            }, y)
        };

    function formatName(e, t, r) {
        return r && 0 !== Object.keys(r).length ? Object.entries(r).reduce((function(e, t) {
            var r = ChatbotName_slicedToArray(t, 2),
                n = r[0],
                o = r[1],
                a = "{".concat(n, "}");
            return e.includes(a) ? e.replace(a, o) : e
        }), e) : t || e || "Guest"
    }
    const chatbot_ChatbotName = ChatbotName;

    function ChatbotReply_slicedToArray(e, t) {
        return ChatbotReply_arrayWithHoles(e) || ChatbotReply_iterableToArrayLimit(e, t) || ChatbotReply_unsupportedIterableToArray(e, t) || ChatbotReply_nonIterableRest()
    }

    function ChatbotReply_nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function ChatbotReply_unsupportedIterableToArray(e, t) {
        if (e) {
            if ("string" == typeof e) return ChatbotReply_arrayLikeToArray(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ChatbotReply_arrayLikeToArray(e, t) : void 0
        }
    }

    function ChatbotReply_arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function ChatbotReply_iterableToArrayLimit(e, t) {
        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != r) {
            var n, o, a, i, s = [],
                c = !0,
                u = !1;
            try {
                if (a = (r = r.call(e)).next, 0 === t) {
                    if (Object(r) !== r) return;
                    c = !1
                } else
                    for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0);
            } catch (e) {
                u = !0, o = e
            } finally {
                try {
                    if (!c && null != r.return && (i = r.return(), Object(i) !== i)) return
                } finally {
                    if (u) throw o
                }
            }
            return s
        }
    }

    function ChatbotReply_arrayWithHoles(e) {
        if (Array.isArray(e)) return e
    }
    var ChatbotReply_wp$element = wp.element,
        ChatbotReply_useState = ChatbotReply_wp$element.useState,
        ChatbotReply_useMemo = ChatbotReply_wp$element.useMemo,
        ChatbotReply_useEffect = ChatbotReply_wp$element.useEffect,
        ChatbotReply_useRef = ChatbotReply_wp$element.useRef,
        LinkContainer = function(e) {
            var t = e.href,
                r = e.children;
            if (!t) return React.createElement("span", null, r);
            var n = window.location.hostname,
                o = "_self";
            try {
                o = n === new URL(t, window.location.href).hostname ? "_self" : "_blank"
            } catch (e) {
                console.error("Invalid URL:", e), o = "_blank"
            }
            if ("Uploaded File" === String(r)) {
                var a = t.split("/").pop();
                return React.createElement("a", {
                    href: t,
                    target: o,
                    rel: "noopener noreferrer",
                    className: "mwai-filename"
                }, React.createElement("span", null, "✓ ", a))
            }
            return React.createElement("a", {
                href: t,
                target: o,
                rel: "noopener noreferrer"
            }, r)
        },
        RawMessage = function(e) {
            var t, r = e.message,
                n = e.onRendered,
                o = void 0 === n ? function() {} : n,
                a = (0, ChatbotContext.o)().state.copyButton,
                i = ChatbotReply_slicedToArray(ChatbotReply_useState(r.isQuerying || r.isStreaming), 1)[0],
                s = r.isQuerying,
                c = r.isStreaming,
                u = null !== (t = r.content) && void 0 !== t ? t : "";
            (u.match(/```/g) || []).length % 2 != 0 ? u += "\n```" : r.isStreaming && (u += "<BlinkingCursor />"), ChatbotReply_useEffect((function() {
                i && (!i || s || c) || o()
            }), [i, s, c]);
            var l = ChatbotReply_useMemo((function() {
                    var e = {
                        overrides: {
                            BlinkingCursor: {
                                component: js_helpers.rn
                            },
                            a: {
                                component: LinkContainer
                            },
                            img: {
                                props: {
                                    onError: function(e) {
                                        null !== e.target.src.match(/\.(jpeg|jpg|gif|png)$/) && (e.target.src = "https://placehold.co/600x200?text=Expired+Image")
                                    },
                                    className: "mwai-image"
                                }
                            }
                        }
                    };
                    return e
                }), []),
                p = ChatbotReply_useMemo((function() {
                    var e = "";
                    try {
                        e = Ze(u, l)
                    } catch (t) {
                        console.error("Crash in markdown-to-jsx! Reverting to plain text.", {
                            e: t,
                            content: u
                        }), e = u
                    }
                    return e
                }), [u, l]);
            return s || c && !u ? React.createElement(BouncingDots, null) : React.createElement(React.Fragment, null, React.createElement(chatbot_ChatbotName, {
                role: r.role
            }), React.createElement(components_ReplyActions, {
                content: r.content,
                enabled: a,
                className: "mwai-text"
            }, p))
        },
        ImagesMessage = function(e) {
            var t = e.message,
                r = e.onRendered,
                n = void 0 === r ? function() {} : r,
                o = ChatbotReply_slicedToArray(ChatbotReply_useState(null == t ? void 0 : t.images), 2),
                a = o[0],
                i = o[1];
            return ChatbotReply_useEffect((function() {
                n()
            })), t.isQuerying ? React.createElement(BouncingDots, null) : React.createElement(React.Fragment, null, React.createElement(chatbot_ChatbotName, {
                role: t.role
            }), React.createElement("span", {
                className: "mwai-text"
            }, React.createElement("div", {
                className: "mwai-gallery"
            }, null == a ? void 0 : a.map((function(e, t) {
                return React.createElement("a", {
                    key: t,
                    href: e,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, React.createElement("img", {
                    key: t,
                    src: e,
                    onError: function() {
                        return function(e) {
                            i((function(t) {
                                return t.map((function(t, r) {
                                    return r === e ? "https://placehold.co/600x200?text=Expired+Image" : t
                                }))
                            }))
                        }(t)
                    }
                }))
            })))))
        },
        TypedMessage = function(e) {
            var t = e.message,
                r = e.conversationRef,
                n = e.onRendered,
                o = void 0 === n ? function() {} : n,
                a = ChatbotReply_useRef(null),
                i = ChatbotReply_slicedToArray(ChatbotReply_useState(t.isQuerying), 1)[0],
                s = ChatbotReply_slicedToArray(ChatbotReply_useState(!t.isQuerying), 2),
                c = s[0],
                u = s[1],
                l = t.content;
            ChatbotReply_useEffect((function() {
                console.warn("Do not use the Typewriter Effect. Use Streaming instead.")
            }), []), (0, helpers.$$)(200, (function() {
                null != r && r.current
            }), !c), ChatbotReply_useEffect((function() {
                if (i) {
                    if (a.current) {
                        var e = {
                                strings: [l],
                                typeSpeed: (0, chatbot_MwaiAPI.W5)("typewriter.speed", 15),
                                showCursor: !1,
                                onComplete: function(e) {
                                    e.cursor && e.cursor.remove(), o(), u((function() {
                                        return !0
                                    }))
                                }
                            },
                            t = new typed_module_i(a.current, e);
                        return function() {
                            t.destroy()
                        }
                    }
                } else o()
            }), [t, t.isQuerying]);
            var p = ChatbotReply_useMemo((function() {
                var e = "";
                try {
                    e = Ze(l)
                } catch (t) {
                    console.error("Crash in markdown-to-jsx! Reverting to plain text.", {
                        e: t,
                        content: l
                    }), e = l
                }
                return e
            }), [l]);
            return React.createElement(React.Fragment, null, t.isQuerying && React.createElement(BouncingDots, null), !t.isQuerying && i && React.createElement(React.Fragment, null, React.createElement(chatbot_ChatbotName, {
                role: t.role
            }), React.createElement("span", {
                className: "mwai-text",
                ref: a
            })), !t.isQuerying && !i && React.createElement(React.Fragment, null, React.createElement(chatbot_ChatbotName, {
                role: t.role
            }), React.createElement("span", {
                className: "mwai-text"
            }, p)))
        },
        ChatbotReply = function(e) {
            var t, r = e.message,
                n = e.conversationRef,
                o = (0, ChatbotContext.o)().state.typewriter,
                a = (0, helpers.gR)(),
                i = ChatbotReply_useRef(),
                s = a("mwai-reply", {
                    "mwai-ai": "assistant" === r.role,
                    "mwai-user": "user" === r.role,
                    "mwai-system": "system" === r.role
                }),
                c = (null == r || null === (t = r.images) || void 0 === t ? void 0 : t.length) > 0,
                u = function() {
                    i.current && (r.isQuerying || i.current.classList.contains("mwai-rendered") || "undefined" != typeof hljs && (i.current.classList.add("mwai-rendered"), i.current.querySelectorAll("pre code").forEach((function(e) {
                        hljs.highlightElement(e)
                    }))))
                };
            return ChatbotReply_useMemo((function() {
                return "user" === r.role ? React.createElement("div", {
                    ref: i,
                    className: s
                }, React.createElement(RawMessage, {
                    message: r
                })) : "assistant" === r.role ? c ? React.createElement("div", {
                    ref: i,
                    className: s
                }, React.createElement(ImagesMessage, {
                    message: r,
                    conversationRef: n,
                    onRendered: u
                })) : o && !r.isStreaming ? (console.warn("The Typewriter effect is deprecated. Use Streaming instead."), React.createElement("div", {
                    ref: i,
                    className: s
                }, React.createElement(TypedMessage, {
                    message: r,
                    conversationRef: n,
                    onRendered: u
                }))) : React.createElement("div", {
                    ref: i,
                    className: s
                }, React.createElement(RawMessage, {
                    message: r,
                    conversationRef: n,
                    onRendered: u
                })) : "system" === r.role ? React.createElement("div", {
                    ref: i,
                    className: s
                }, React.createElement(RawMessage, {
                    message: r,
                    conversationRef: n,
                    onRendered: u
                })) : React.createElement("div", null, React.createElement("i", null, "Unhandled role."))
            }), [r, n, c, o])
        };
    const chatbot_ChatbotReply = ChatbotReply;

    function extends_extends() {
        return extends_extends = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }, extends_extends.apply(this, arguments)
    }

    function objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(e, t) {
        if (null == e) return {};
        var r, n, o = {},
            a = Object.keys(e);
        for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
    }
    var index = external_React_.useLayoutEffect;
    const use_isomorphic_layout_effect_browser_esm = index;
    var useLatest = function(e) {
            var t = external_React_.useRef(e);
            return use_isomorphic_layout_effect_browser_esm((function() {
                t.current = e
            })), t
        },
        updateRef = function(e, t) {
            "function" != typeof e ? e.current = t : e(t)
        },
        useComposedRef = function(e, t) {
            var r = (0, external_React_.useRef)();
            return (0, external_React_.useCallback)((function(n) {
                e.current = n, r.current && updateRef(r.current, null), r.current = t, t && updateRef(t, n)
            }), [t])
        };
    const use_composed_ref_esm = useComposedRef;
    var HIDDEN_TEXTAREA_STYLE = {
            "min-height": "0",
            "max-height": "none",
            height: "0",
            visibility: "hidden",
            overflow: "hidden",
            position: "absolute",
            "z-index": "-1000",
            top: "0",
            right: "0"
        },
        forceHiddenStyles = function(e) {
            Object.keys(HIDDEN_TEXTAREA_STYLE).forEach((function(t) {
                e.style.setProperty(t, HIDDEN_TEXTAREA_STYLE[t], "important")
            }))
        },
        forceHiddenStyles$1 = forceHiddenStyles,
        hiddenTextarea = null,
        getHeight = function(e, t) {
            var r = e.scrollHeight;
            return "border-box" === t.sizingStyle.boxSizing ? r + t.borderSize : r - t.paddingSize
        };

    function calculateNodeHeight(e, t, r, n) {
        void 0 === r && (r = 1), void 0 === n && (n = 1 / 0), hiddenTextarea || ((hiddenTextarea = document.createElement("textarea")).setAttribute("tabindex", "-1"), hiddenTextarea.setAttribute("aria-hidden", "true"), forceHiddenStyles$1(hiddenTextarea)), null === hiddenTextarea.parentNode && document.body.appendChild(hiddenTextarea);
        var o = e.paddingSize,
            a = e.borderSize,
            i = e.sizingStyle,
            s = i.boxSizing;
        Object.keys(i).forEach((function(e) {
            var t = e;
            hiddenTextarea.style[t] = i[t]
        })), forceHiddenStyles$1(hiddenTextarea), hiddenTextarea.value = t;
        var c = getHeight(hiddenTextarea, e);
        hiddenTextarea.value = t, c = getHeight(hiddenTextarea, e), hiddenTextarea.value = "x";
        var u = hiddenTextarea.scrollHeight - o,
            l = u * r;
        "border-box" === s && (l = l + o + a), c = Math.max(l, c);
        var p = u * n;
        return "border-box" === s && (p = p + o + a), [c = Math.min(p, c), u]
    }
    var noop = function() {},
        pick = function(e, t) {
            return e.reduce((function(e, r) {
                return e[r] = t[r], e
            }), {})
        },
        SIZING_STYLE = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontStyle", "fontWeight", "letterSpacing", "lineHeight", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "tabSize", "textIndent", "textRendering", "textTransform", "width", "wordBreak"],
        isIE = !!document.documentElement.currentStyle,
        getSizingData = function(e) {
            var t = window.getComputedStyle(e);
            if (null === t) return null;
            var r = pick(SIZING_STYLE, t),
                n = r.boxSizing;
            return "" === n ? null : (isIE && "border-box" === n && (r.width = parseFloat(r.width) + parseFloat(r.borderRightWidth) + parseFloat(r.borderLeftWidth) + parseFloat(r.paddingRight) + parseFloat(r.paddingLeft) + "px"), {
                sizingStyle: r,
                paddingSize: parseFloat(r.paddingBottom) + parseFloat(r.paddingTop),
                borderSize: parseFloat(r.borderBottomWidth) + parseFloat(r.borderTopWidth)
            })
        },
        getSizingData$1 = getSizingData;

    function useListener(e, t, r) {
        var n = useLatest(r);
        external_React_.useLayoutEffect((function() {
            var r = function(e) {
                return n.current(e)
            };
            if (e) return e.addEventListener(t, r),
                function() {
                    return e.removeEventListener(t, r)
                }
        }), [])
    }
    var useWindowResizeListener = function(e) {
            useListener(window, "resize", e)
        },
        useFontsLoadedListener = function(e) {
            useListener(document.fonts, "loadingdone", e)
        },
        react_textarea_autosize_browser_esm_excluded = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"],
        TextareaAutosize = function(e, t) {
            var r = e.cacheMeasurements,
                n = e.maxRows,
                o = e.minRows,
                a = e.onChange,
                i = void 0 === a ? noop : a,
                s = e.onHeightChange,
                c = void 0 === s ? noop : s,
                u = objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(e, react_textarea_autosize_browser_esm_excluded),
                l = void 0 !== u.value,
                p = external_React_.useRef(null),
                f = use_composed_ref_esm(p, t),
                d = external_React_.useRef(0),
                h = external_React_.useRef(),
                m = function() {
                    var e = p.current,
                        t = r && h.current ? h.current : getSizingData$1(e);
                    if (t) {
                        h.current = t;
                        var a = calculateNodeHeight(t, e.value || e.placeholder || "x", o, n),
                            i = a[0],
                            s = a[1];
                        d.current !== i && (d.current = i, e.style.setProperty("height", i + "px", "important"), c(i, {
                            rowHeight: s
                        }))
                    }
                };
            return external_React_.useLayoutEffect(m), useWindowResizeListener(m), useFontsLoadedListener(m), external_React_.createElement("textarea", extends_extends({}, u, {
                onChange: function(e) {
                    l || m(), i(e)
                },
                ref: f
            }))
        },
        react_textarea_autosize_browser_esm_index = external_React_.forwardRef(TextareaAutosize);

    function ChatUploadIcon_slicedToArray(e, t) {
        return ChatUploadIcon_arrayWithHoles(e) || ChatUploadIcon_iterableToArrayLimit(e, t) || ChatUploadIcon_unsupportedIterableToArray(e, t) || ChatUploadIcon_nonIterableRest()
    }

    function ChatUploadIcon_nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function ChatUploadIcon_unsupportedIterableToArray(e, t) {
        if (e) {
            if ("string" == typeof e) return ChatUploadIcon_arrayLikeToArray(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ChatUploadIcon_arrayLikeToArray(e, t) : void 0
        }
    }

    function ChatUploadIcon_arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function ChatUploadIcon_iterableToArrayLimit(e, t) {
        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != r) {
            var n, o, a, i, s = [],
                c = !0,
                u = !1;
            try {
                if (a = (r = r.call(e)).next, 0 === t) {
                    if (Object(r) !== r) return;
                    c = !1
                } else
                    for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0);
            } catch (e) {
                u = !0, o = e
            } finally {
                try {
                    if (!c && null != r.return && (i = r.return(), Object(i) !== i)) return
                } finally {
                    if (u) throw o
                }
            }
            return s
        }
    }

    function ChatUploadIcon_arrayWithHoles(e) {
        if (Array.isArray(e)) return e
    }
    var ChatUploadIcon_wp$element = wp.element,
        ChatUploadIcon_useState = ChatUploadIcon_wp$element.useState,
        ChatUploadIcon_useMemo = ChatUploadIcon_wp$element.useMemo,
        ChatUploadIcon_useRef = ChatUploadIcon_wp$element.useRef,
        ChatUploadIcon = function() {
            var e = (0, helpers.gR)(),
                t = (0, ChatbotContext.o)(),
                r = t.state,
                n = t.actions,
                o = r.uploadedFile,
                a = r.busy,
                i = r.imageUpload,
                s = r.fileSearch,
                c = r.draggingType,
                u = n.onUploadFile,
                l = ChatUploadIcon_slicedToArray(ChatUploadIcon_useState(!1), 2),
                p = l[0],
                f = l[1],
                d = ChatUploadIcon_useRef(),
                h = null == o ? void 0 : o.uploadedId,
                m = i || s,
                y = o,
                b = ChatUploadIcon_useMemo((function() {
                    return null != y && y.localFile ? y.localFile.type.startsWith("image/") ? "image" : "document" : c
                }), [y, c]),
                g = ChatUploadIcon_useMemo((function() {
                    var e = "idle";
                    null != y && y.uploadProgress ? e = "up" : c ? e = "add" : p && h ? e = "del" : h ? e = "ok" : p && !h && (e = "add");
                    var t = b ? b.toLowerCase() : "idle";
                    return "mwai-file-upload-icon mwai-".concat(t, "-").concat(e)
                }), [b, y, c, p, h]),
                _ = ChatUploadIcon_useMemo((function() {
                    return null != y && y.uploadProgress ? y.uploadProgress > 99 ? 99 : Math.round(y.uploadProgress) : ""
                }), [y]);
            return m ? React.createElement("div", {
                disabled: a,
                onClick: function() {
                    null != o && o.localFile ? u(null) : a || d.current.click()
                },
                onMouseEnter: function() {
                    return f(!0)
                },
                onMouseLeave: function() {
                    return f(!1)
                },
                className: e("mwai-file-upload", {
                    "mwai-enabled": null == o ? void 0 : o.uploadedId,
                    "mwai-busy": (null == o ? void 0 : o.localFile) && !(null != o && o.uploadedId)
                }),
                style: {
                    cursor: a ? "default" : "pointer"
                }
            }, React.createElement("div", {
                className: g
            }, React.createElement("span", {
                className: "mwai-file-upload-progress"
            }, _)), React.createElement("input", {
                type: "file",
                ref: d,
                onChange: function(e) {
                    var t = e.target.files[0];
                    t && u(t)
                },
                style: {
                    display: "none"
                }
            })) : null
        };
    const chatbot_ChatUploadIcon = ChatUploadIcon;

    function ChatbotInput_slicedToArray(e, t) {
        return ChatbotInput_arrayWithHoles(e) || ChatbotInput_iterableToArrayLimit(e, t) || ChatbotInput_unsupportedIterableToArray(e, t) || ChatbotInput_nonIterableRest()
    }

    function ChatbotInput_nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function ChatbotInput_unsupportedIterableToArray(e, t) {
        if (e) {
            if ("string" == typeof e) return ChatbotInput_arrayLikeToArray(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ChatbotInput_arrayLikeToArray(e, t) : void 0
        }
    }

    function ChatbotInput_arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function ChatbotInput_iterableToArrayLimit(e, t) {
        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != r) {
            var n, o, a, i, s = [],
                c = !0,
                u = !1;
            try {
                if (a = (r = r.call(e)).next, 0 === t) {
                    if (Object(r) !== r) return;
                    c = !1
                } else
                    for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0);
            } catch (e) {
                u = !0, o = e
            } finally {
                try {
                    if (!c && null != r.return && (i = r.return(), Object(i) !== i)) return
                } finally {
                    if (u) throw o
                }
            }
            return s
        }
    }

    function ChatbotInput_arrayWithHoles(e) {
        if (Array.isArray(e)) return e
    }
    var ChatbotInput_wp$element = wp.element,
        ChatbotInput_useRef = ChatbotInput_wp$element.useRef,
        ChatbotInput_useState = ChatbotInput_wp$element.useState,
        ChatbotInput_useEffect = ChatbotInput_wp$element.useEffect,
        useImperativeHandle = ChatbotInput_wp$element.useImperativeHandle,
        ChatbotInput = function() {
            var e = (0, helpers.gR)(),
                t = (0, ChatbotContext.o)(),
                r = t.state,
                n = t.actions,
                o = r.inputText,
                a = r.textInputMaxLength,
                i = r.textInputPlaceholder,
                s = r.error,
                c = r.speechRecognitionAvailable,
                u = r.isMobile,
                l = r.conversationRef,
                p = r.open,
                f = r.uploadIconPosition,
                d = r.locked,
                h = r.isListening,
                m = r.busy,
                y = r.speechRecognition,
                b = r.chatbotInputRef,
                g = n.onSubmitAction,
                _ = n.setIsListening,
                v = n.resetError,
                w = n.setInputText,
                C = ChatbotInput_slicedToArray(ChatbotInput_useState(!1), 2),
                x = C[0],
                S = C[1],
                I = ChatbotInput_useRef();
            useImperativeHandle(b, (function() {
                return {
                    focusInput: function() {
                        var e;
                        null === (e = I.current) || void 0 === e || e.focus()
                    },
                    currentElement: function() {
                        return I.current
                    }
                }
            })), ChatbotInput_useEffect((function() {
                !u && p && I.current.focus(), l.current && (l.current.scrollTop = l.current.scrollHeight)
            }), [p, u, l]);
            var E = e("mwai-input-text", {});
            return React.createElement("div", {
                ref: b,
                className: E
            }, "mwai-input" === f && React.createElement(chatbot_ChatUploadIcon, null), React.createElement(react_textarea_autosize_browser_esm_index, {
                ref: I,
                disabled: m || d,
                placeholder: i,
                value: o,
                maxLength: a,
                onCompositionStart: function() {
                    return S(!0)
                },
                onCompositionEnd: function() {
                    return S(!1)
                },
                onKeyDown: function(e) {
                    x || "Enter" !== e.code || e.shiftKey || (e.preventDefault(), g())
                },
                onChange: function(e) {
                    return t = e.target.value, h && _(!1), s && v(), void w(t);
                    var t
                }
            }), y && React.createElement(helpers.tm, {
                active: h,
                disabled: !c || m,
                className: "mwai-microphone",
                onClick: function() {
                    return _(!h)
                }
            }))
        };
    const chatbot_ChatbotInput = ChatbotInput;
    var ChatbotSubmit_wp$element = wp.element,
        ChatbotSubmit_useMemo = ChatbotSubmit_wp$element.useMemo,
        ChatbotSubmit_useCallback = ChatbotSubmit_wp$element.useCallback,
        ChatbotSubmit = function() {
            var e = (0, ChatbotContext.o)(),
                t = e.state,
                r = e.actions,
                n = r.onClear,
                o = r.onSubmitAction,
                a = r.setIsListening,
                i = t.textClear,
                s = t.textSend,
                c = t.uploadedFile,
                u = t.inputText,
                l = t.messages,
                p = t.isListening,
                f = t.timeElapsed,
                d = t.busy,
                h = t.submitButtonConf,
                m = t.locked,
                y = !(null == c || !c.uploadProgress),
                b = !(null != c && c.uploadedId) && u.length < 1 && (null == l ? void 0 : l.length) > 1,
                g = ChatbotSubmit_useMemo((function() {
                    return d ? f ? React.createElement("div", {
                        className: "mwai-timer"
                    }, f) : null : null != h && h.imageSend && null != h && h.imageClear ? React.createElement("img", {
                        src: b ? h.imageClear : h.imageSend,
                        alt: b ? i : s
                    }) : React.createElement("span", null, b ? i : s)
                }), [d, f, b, i, s, h]),
                _ = ChatbotSubmit_useMemo((function() {
                    return "mwai-input-submit ".concat(d ? "mwai-busy" : "")
                }), [d]),
                v = ChatbotSubmit_useCallback((function() {
                    p && a(!1), b ? n() : o()
                }), [b, p, n, o, a]),
                w = ChatbotSubmit_useCallback((function() {
                    d || v()
                }), [d, v]);
            return React.createElement("button", {
                className: _,
                disabled: d || y || m,
                onClick: w
            }, g)
        };
    const chatbot_ChatbotSubmit = ChatbotSubmit;
    var ChatbotHeader_useMemo = wp.element.useMemo;

    function formatAvatar(e, t, r, n) {
        var o;
        if ((0, js_helpers.Ve)(n || r)) return o = n || r, React.createElement("div", {
            className: "mwai-avatar mwai-emoji",
            style: {
                fontSize: "48px",
                lineHeight: "48px"
            }
        }, o);
        var a, i, s = (a = n, ((0, helpers.mv)(a) ? a : a ? "".concat(t, "/images/").concat(a) : null) || r || "".concat(t, "/images/chat-openai.svg"));
        return s ? (i = s, "AI Engine", React.createElement("div", {
            className: "mwai-avatar"
        }, React.createElement("img", {
            alt: "AI Engine",
            src: i
        }))) : React.createElement("div", {
            className: "mwai-name-text"
        }, e)
    }
    var ChatbotHeader = function() {
        var e = (0, ChatbotContext.o)(),
            t = e.state,
            r = e.actions,
            n = t.theme,
            o = t.isWindow,
            a = t.fullscreen,
            i = t.aiName,
            s = t.pluginUrl,
            c = t.open,
            u = t.iconUrl,
            l = t.aiAvatarUrl,
            p = t.windowed,
            f = r.setOpen,
            d = r.setWindowed,
            h = ChatbotHeader_useMemo((function() {
                if (!o) return null;
                var e = "timeless" === (null == n ? void 0 : n.themeId),
                    t = e ? formatAvatar(i, s, u, l) : null;
                return React.createElement(React.Fragment, null, e && React.createElement(React.Fragment, null, t, React.createElement("div", {
                    className: "mwai-name"
                }, React.createElement("small", null, "Discuss with"), React.createElement("div", null, i)), React.createElement("div", {
                    style: {
                        flex: "auto"
                    }
                })), React.createElement("div", {
                    className: "mwai-buttons"
                }, a && React.createElement("div", {
                    className: "mwai-resize-button",
                    onClick: function() {
                        return d(!p)
                    }
                }), React.createElement("div", {
                    className: "mwai-close-button",
                    onClick: function() {
                        return f(!c)
                    }
                })))
            }), [o, null == n ? void 0 : n.themeId, i, s, u, l, a, d, p, f, c]);
        return React.createElement("div", {
            className: "mwai-header"
        }, h)
    };
    const chatbot_ChatbotHeader = ChatbotHeader;
    var ChatbotTrigger_wp$element = wp.element,
        ChatbotTrigger_useMemo = ChatbotTrigger_wp$element.useMemo,
        ChatbotTrigger_useEffect = ChatbotTrigger_wp$element.useEffect,
        ChatbotTrigger = function() {
            var e = (0, ChatbotContext.o)(),
                t = e.state,
                r = e.actions,
                n = t.isWindow,
                o = t.iconText,
                a = t.showIconMessage,
                i = t.iconAlt,
                s = t.iconUrl,
                c = t.open,
                u = r.setShowIconMessage,
                l = r.setOpen;
            ChatbotTrigger_useEffect((function() {
                c && a && u(!1)
            }), [c, u, a]);
            var p = ChatbotTrigger_useMemo((function() {
                return n ? React.createElement("div", {
                    className: "mwai-trigger mwai-open-button"
                }, React.createElement(helpers.bE, {
                    className: "mwai-icon-text-container",
                    if: o && a
                }, React.createElement("div", {
                    className: "mwai-icon-text-close",
                    onClick: function() {
                        return u(!1)
                    }
                }, "✕"), React.createElement("div", {
                    className: "mwai-icon-text",
                    onClick: function() {
                        return l(!0)
                    }
                }, o)), React.createElement("div", {
                    className: "mwai-icon-container",
                    onClick: function() {
                        return l(!0)
                    }
                }, (0, js_helpers.Ve)(s) ? React.createElement("div", {
                    className: "mwai-icon mwai-emoji",
                    style: {
                        fontSize: "48px",
                        lineHeight: "64px",
                        width: "64px",
                        height: "64px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }, s) : React.createElement("img", {
                    className: "mwai-icon",
                    width: "64",
                    height: "64",
                    alt: i,
                    src: s
                }))) : null
            }), [n, o, a, i, s, u, l]);
            return React.createElement(React.Fragment, null, p)
        };
    const chatbot_ChatbotTrigger = ChatbotTrigger;

    function ChatbotUI_typeof(e) {
        return ChatbotUI_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, ChatbotUI_typeof(e)
    }

    function ChatbotUI_ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function ChatbotUI_objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ChatbotUI_ownKeys(Object(r), !0).forEach((function(t) {
                ChatbotUI_defineProperty(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ChatbotUI_ownKeys(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }

    function ChatbotUI_defineProperty(e, t, r) {
        return (t = ChatbotUI_toPropertyKey(t)) in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function ChatbotUI_toPropertyKey(e) {
        var t = ChatbotUI_toPrimitive(e, "string");
        return "symbol" == ChatbotUI_typeof(t) ? t : String(t)
    }

    function ChatbotUI_toPrimitive(e, t) {
        if ("object" != ChatbotUI_typeof(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != ChatbotUI_typeof(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
    }

    function ChatbotUI_slicedToArray(e, t) {
        return ChatbotUI_arrayWithHoles(e) || ChatbotUI_iterableToArrayLimit(e, t) || ChatbotUI_unsupportedIterableToArray(e, t) || ChatbotUI_nonIterableRest()
    }

    function ChatbotUI_nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function ChatbotUI_unsupportedIterableToArray(e, t) {
        if (e) {
            if ("string" == typeof e) return ChatbotUI_arrayLikeToArray(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ChatbotUI_arrayLikeToArray(e, t) : void 0
        }
    }

    function ChatbotUI_arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function ChatbotUI_iterableToArrayLimit(e, t) {
        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != r) {
            var n, o, a, i, s = [],
                c = !0,
                u = !1;
            try {
                if (a = (r = r.call(e)).next, 0 === t) {
                    if (Object(r) !== r) return;
                    c = !1
                } else
                    for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0);
            } catch (e) {
                u = !0, o = e
            } finally {
                try {
                    if (!c && null != r.return && (i = r.return(), Object(i) !== i)) return
                } finally {
                    if (u) throw o
                }
            }
            return s
        }
    }

    function ChatbotUI_arrayWithHoles(e) {
        if (Array.isArray(e)) return e
    }
    var ChatbotUI_wp$element = wp.element,
        ChatbotUI_useState = ChatbotUI_wp$element.useState,
        ChatbotUI_useMemo = ChatbotUI_wp$element.useMemo,
        useLayoutEffect = ChatbotUI_wp$element.useLayoutEffect,
        ChatbotUI_useCallback = ChatbotUI_wp$element.useCallback,
        ChatbotUI_useEffect = ChatbotUI_wp$element.useEffect,
        ChatbotUI_useRef = ChatbotUI_wp$element.useRef,
        markdownOptions = {
            overrides: {
                a: {
                    props: {
                        target: "_blank"
                    }
                }
            }
        },
        isImage = function(e) {
            return e.type.startsWith("image/")
        },
        isDocument = function(e) {
            return ["text/x-c", "text/x-csharp", "text/x-c++", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/html", "text/x-java", "application/json", "text/markdown", "application/pdf", "text/x-php", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "text/x-python", "text/x-script.python", "text/x-ruby", "text/x-tex", "text/plain", "text/css", "text/javascript", "application/x-sh", "application/typescript"].includes(e.type)
        },
        ChatbotUI = function(e) {
            var t = (0, helpers.gR)(),
                r = e.style,
                n = ChatbotUI_slicedToArray(ChatbotUI_useState(!0), 2),
                o = n[0],
                a = n[1],
                i = (0, ChatbotContext.o)(),
                s = i.state,
                c = i.actions,
                u = s.theme,
                l = s.botId,
                p = s.customId,
                f = s.messages,
                d = s.textCompliance,
                h = s.isWindow,
                m = s.fullscreen,
                y = s.iconPosition,
                b = s.iconBubble,
                g = s.shortcuts,
                _ = s.blocks,
                v = s.imageUpload,
                w = s.fileSearch,
                C = s.draggingType,
                x = s.isBlocked,
                S = s.virtualKeyboardFix,
                I = s.windowed,
                E = s.cssVariables,
                R = s.error,
                k = s.conversationRef,
                T = s.open,
                A = s.busy,
                O = s.uploadIconPosition,
                P = c.resetError,
                L = c.onSubmit,
                j = c.setIsBlocked,
                U = c.setDraggingType,
                M = c.onUploadFile,
                D = ChatbotUI_useMemo((function() {
                    return "css" === (null == u ? void 0 : u.type) ? null == u ? void 0 : u.style : null
                }), [u]),
                N = v || w,
                F = N || d,
                B = ChatbotUI_useRef(null),
                $ = (0, helpers.kW)(),
                W = $.viewportHeight,
                H = $.isIOS,
                z = $.isAndroid;
            ChatbotUI_useEffect((function() {
                if (S && (H || z) && h) {
                    var e = document.querySelector(".mwai-window");
                    e && (T ? (e.style.height = "".concat(W, "px"), H && function() {
                        if ("INPUT" === document.activeElement.tagName || "TEXTAREA" === document.activeElement.tagName) {
                            window.scrollTo({
                                top: 0
                            });
                            var e = setInterval((function() {
                                window.scrollTo({
                                    top: 0
                                })
                            }), 100);
                            setTimeout((function() {
                                clearInterval(e)
                            }), 1e3)
                        }
                    }()) : e.style.height = "")
                }
            }), [m, z, H, h, I, T, W, S]);
            var K = t("mwai-chatbot", ChatbotUI_defineProperty(ChatbotUI_defineProperty(ChatbotUI_defineProperty(ChatbotUI_defineProperty(ChatbotUI_defineProperty(ChatbotUI_defineProperty(ChatbotUI_defineProperty(ChatbotUI_defineProperty({}, "mwai-".concat(null == u ? void 0 : u.themeId, "-theme"), !0), "mwai-window", h), "mwai-bubble", b), "mwai-open", T), "mwai-fullscreen", !I || !h && m), "mwai-bottom-left", "bottom-left" === y), "mwai-top-right", "top-right" === y), "mwai-top-left", "top-left" === y));
            useLayoutEffect((function() {
                o && k.current && (k.current.scrollTop = k.current.scrollHeight)
            }), [f, o, k, A]);
            var G = ChatbotUI_useRef(new Set);
            ChatbotUI_useEffect((function() {
                _ && _.length > 0 && _.forEach((function(e) {
                    var t = e.type,
                        r = e.data;
                    "content" === t && r.script && function(e) {
                        var t = function(e) {
                            var t, r = 0;
                            if (0 === e.length) return r;
                            for (t = 0; t < e.length; t++) r = (r << 5) - r + e.charCodeAt(t), r |= 0;
                            return r
                        }(e);
                        if (!G.current.has(t)) {
                            var r = document.createElement("script");
                            r.type = "text/javascript", r.textContent = e, document.body.appendChild(r), G.current.add(t)
                        }
                    }(r.script)
                }))
            }), [_]);
            var q = ChatbotUI_useMemo((function() {
                    return null == f ? void 0 : f.map((function(e) {
                        return React.createElement(chatbot_ChatbotReply, {
                            key: e.id,
                            message: e
                        })
                    }))
                }), [f]),
                V = ChatbotUI_useMemo((function() {
                    return g && 0 !== g.length ? React.createElement("div", {
                        className: "mwai-shortcuts"
                    }, g.map((function(e, r) {
                        var n = e.type,
                            o = e.data;
                        if ("message" !== n) return console.warn("This shortcut type is not supported: ".concat(n, ".")), null;
                        var a = o.label,
                            i = o.message,
                            s = o.variant,
                            c = o.icon,
                            u = t("mwai-shortcut", {
                                "mwai-success": "success" === s,
                                "mwai-danger": "danger" === s,
                                "mwai-warning": "warning" === s,
                                "mwai-info": "info" === s
                            }),
                            l = c && c.startsWith("http"),
                            p = c && !l && c.length >= 1 && c.length <= 2;
                        return React.createElement("button", {
                            className: u,
                            key: r,
                            onClick: function() {
                                L(i)
                            }
                        }, (l || p) && React.createElement(React.Fragment, null, React.createElement("div", {
                            className: "mwai-icon"
                        }, l && React.createElement("img", {
                            src: c,
                            alt: a || "AI Shortcut"
                        }), p && React.createElement("span", {
                            role: "img",
                            "aria-label": "AI Shortcut"
                        }, c)), React.createElement("div", {
                            style: {
                                flex: "auto"
                            }
                        })), React.createElement("div", {
                            className: "mwai-label"
                        }, a || "N/A"))
                    }))) : null
                }), [t, L, g]),
                Q = ChatbotUI_useMemo((function() {
                    return _ && 0 !== _.length ? React.createElement("div", {
                        className: "mwai-blocks"
                    }, _.map((function(e, r) {
                        var n = e.type,
                            o = e.data;
                        if ("content" !== n) return console.warn("Block type ".concat(n, " is not supported.")), null;
                        var a = o.html,
                            i = o.variant,
                            s = t("mwai-block", {
                                "mwai-success": "success" === i,
                                "mwai-danger": "danger" === i,
                                "mwai-warning": "warning" === i,
                                "mwai-info": "info" === i
                            });
                        return React.createElement("div", {
                            className: s,
                            key: r,
                            dangerouslySetInnerHTML: {
                                __html: a
                            }
                        })
                    }))) : null
                }), [t, _]),
                J = ChatbotUI_useCallback((function(e, t) {
                    e.preventDefault(), e.stopPropagation();
                    var r = e.dataTransfer.items[0];
                    t ? (B.current && (clearTimeout(B.current), B.current = null), v && isImage(r) ? (U("image"), j(!1)) : w && isDocument(r) ? (U("document"), j(!1)) : (U(!1), j(!0))) : B.current || (B.current = setTimeout((function() {
                        U(!1), j(!1), B.current = null
                    }), 100))
                }), [v, w]),
                X = ChatbotUI_useCallback((function(e) {
                    if (e.preventDefault(), J(e, !1), !A) {
                        var t = e.dataTransfer.files[0];
                        t && ("image" === C && v || "document" === C && w ? M(t) : (j(!0), setTimeout((function() {
                            return j(!1)
                        }), 2e3)))
                    }
                }), [A, C, v, w, M]),
                Y = t("mwai-input", {
                    "mwai-dragging": C,
                    "mwai-blocked": x
                });
            return React.createElement(helpers.bE, {
                id: "mwai-chatbot-".concat(p || l),
                className: K,
                style: ChatbotUI_objectSpread(ChatbotUI_objectSpread({}, E), r),
                if: !0,
                disableTransition: !h
            }, D && React.createElement("style", null, D), React.createElement(chatbot_ChatbotTrigger, null), React.createElement(chatbot_ChatbotHeader, null), React.createElement("div", {
                className: "mwai-content"
            }, React.createElement("div", {
                ref: k,
                className: "mwai-conversation",
                onScroll: function() {
                    if (k.current) {
                        var e = k.current,
                            t = e.scrollTop,
                            r = e.scrollHeight,
                            n = e.clientHeight;
                        a(r - t <= n + 1)
                    }
                }
            }, q, V), R && React.createElement("div", {
                className: "mwai-error",
                onClick: function() {
                    return P()
                }
            }, React.createElement(index_modern, {
                options: markdownOptions
            }, R)), Q, React.createElement("div", {
                className: Y,
                onDrop: X,
                onDragEnter: function(e) {
                    return J(e, !0)
                },
                onDragLeave: function(e) {
                    return J(e, !1)
                },
                onDragOver: function(e) {
                    return J(e, !0)
                }
            }, React.createElement(chatbot_ChatbotInput, null), React.createElement(chatbot_ChatbotSubmit, null)), F && React.createElement("div", {
                className: "mwai-footer"
            }, N && React.createElement("div", {
                className: "mwai-tools"
            }, "mwai-tools" === O && React.createElement(chatbot_ChatUploadIcon, null)), d && React.createElement("div", {
                className: "mwai-compliance",
                dangerouslySetInnerHTML: {
                    __html: d
                }
            }))))
        };
    const chatbot_ChatbotUI = ChatbotUI;
    var ChatbotSystem = function(e) {
        return React.createElement(ChatbotContext.G, e, React.createElement(chatbot_ChatbotUI, e))
    };
    const chatbot_ChatbotSystem = ChatbotSystem;
    var src_helpers = __webpack_require__(296);

    function DiscussionsContext_typeof(e) {
        return DiscussionsContext_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, DiscussionsContext_typeof(e)
    }
    var DiscussionsContext_excluded = ["children"];

    function _regeneratorRuntime() {
        _regeneratorRuntime = function() {
            return t
        };
        var e, t = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o = Object.defineProperty || function(e, t, r) {
                e[t] = r.value
            },
            a = "function" == typeof Symbol ? Symbol : {},
            i = a.iterator || "@@iterator",
            s = a.asyncIterator || "@@asyncIterator",
            c = a.toStringTag || "@@toStringTag";

        function u(e, t, r) {
            return Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), e[t]
        }
        try {
            u({}, "")
        } catch (e) {
            u = function(e, t, r) {
                return e[t] = r
            }
        }

        function l(e, t, r, n) {
            var a = t && t.prototype instanceof b ? t : b,
                i = Object.create(a.prototype),
                s = new A(n || []);
            return o(i, "_invoke", {
                value: E(e, r, s)
            }), i
        }

        function p(e, t, r) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, r)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }
        t.wrap = l;
        var f = "suspendedStart",
            d = "suspendedYield",
            h = "executing",
            m = "completed",
            y = {};

        function b() {}

        function g() {}

        function _() {}
        var v = {};
        u(v, i, (function() {
            return this
        }));
        var w = Object.getPrototypeOf,
            C = w && w(w(O([])));
        C && C !== r && n.call(C, i) && (v = C);
        var x = _.prototype = b.prototype = Object.create(v);

        function S(e) {
            ["next", "throw", "return"].forEach((function(t) {
                u(e, t, (function(e) {
                    return this._invoke(t, e)
                }))
            }))
        }

        function I(e, t) {
            function r(o, a, i, s) {
                var c = p(e[o], e, a);
                if ("throw" !== c.type) {
                    var u = c.arg,
                        l = u.value;
                    return l && "object" == DiscussionsContext_typeof(l) && n.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                        r("next", e, i, s)
                    }), (function(e) {
                        r("throw", e, i, s)
                    })) : t.resolve(l).then((function(e) {
                        u.value = e, i(u)
                    }), (function(e) {
                        return r("throw", e, i, s)
                    }))
                }
                s(c.arg)
            }
            var a;
            o(this, "_invoke", {
                value: function(e, n) {
                    function o() {
                        return new t((function(t, o) {
                            r(e, n, t, o)
                        }))
                    }
                    return a = a ? a.then(o, o) : o()
                }
            })
        }

        function E(t, r, n) {
            var o = f;
            return function(a, i) {
                if (o === h) throw new Error("Generator is already running");
                if (o === m) {
                    if ("throw" === a) throw i;
                    return {
                        value: e,
                        done: !0
                    }
                }
                for (n.method = a, n.arg = i;;) {
                    var s = n.delegate;
                    if (s) {
                        var c = R(s, n);
                        if (c) {
                            if (c === y) continue;
                            return c
                        }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                        if (o === f) throw o = m, n.arg;
                        n.dispatchException(n.arg)
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    o = h;
                    var u = p(t, r, n);
                    if ("normal" === u.type) {
                        if (o = n.done ? m : d, u.arg === y) continue;
                        return {
                            value: u.arg,
                            done: n.done
                        }
                    }
                    "throw" === u.type && (o = m, n.method = "throw", n.arg = u.arg)
                }
            }
        }

        function R(t, r) {
            var n = r.method,
                o = t.iterator[n];
            if (o === e) return r.delegate = null, "throw" === n && t.iterator.return && (r.method = "return", r.arg = e, R(t, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
            var a = p(o, t.iterator, r.arg);
            if ("throw" === a.type) return r.method = "throw", r.arg = a.arg, r.delegate = null, y;
            var i = a.arg;
            return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, y) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y)
        }

        function k(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function T(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function A(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(k, this), this.reset(!0)
        }

        function O(t) {
            if (t || "" === t) {
                var r = t[i];
                if (r) return r.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var o = -1,
                        a = function r() {
                            for (; ++o < t.length;)
                                if (n.call(t, o)) return r.value = t[o], r.done = !1, r;
                            return r.value = e, r.done = !0, r
                        };
                    return a.next = a
                }
            }
            throw new TypeError(DiscussionsContext_typeof(t) + " is not iterable")
        }
        return g.prototype = _, o(x, "constructor", {
            value: _,
            configurable: !0
        }), o(_, "constructor", {
            value: g,
            configurable: !0
        }), g.displayName = u(_, c, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name))
        }, t.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, _) : (e.__proto__ = _, u(e, c, "GeneratorFunction")), e.prototype = Object.create(x), e
        }, t.awrap = function(e) {
            return {
                __await: e
            }
        }, S(I.prototype), u(I.prototype, s, (function() {
            return this
        })), t.AsyncIterator = I, t.async = function(e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new I(l(e, r, n, o), a);
            return t.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                return e.done ? e.value : i.next()
            }))
        }, S(x), u(x, c, "Generator"), u(x, i, (function() {
            return this
        })), u(x, "toString", (function() {
            return "[object Generator]"
        })), t.keys = function(e) {
            var t = Object(e),
                r = [];
            for (var n in t) r.push(n);
            return r.reverse(),
                function e() {
                    for (; r.length;) {
                        var n = r.pop();
                        if (n in t) return e.value = n, e.done = !1, e
                    }
                    return e.done = !0, e
                }
        }, t.values = O, A.prototype = {
            constructor: A,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(T), !t)
                    for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done) throw t;
                var r = this;

                function o(n, o) {
                    return s.type = "throw", s.arg = t, r.next = n, o && (r.method = "next", r.arg = e), !!o
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                    var i = this.tryEntries[a],
                        s = i.completion;
                    if ("root" === i.tryLoc) return o("end");
                    if (i.tryLoc <= this.prev) {
                        var c = n.call(i, "catchLoc"),
                            u = n.call(i, "finallyLoc");
                        if (c && u) {
                            if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                        } else if (c) {
                            if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                        } else {
                            if (!u) throw new Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var o = this.tryEntries[r];
                    if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var a = o;
                        break
                    }
                }
                a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                var i = a ? a.completion : {};
                return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, y) : this.complete(i)
            },
            complete: function(e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), T(r), y
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.tryLoc === e) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var o = n.arg;
                            T(r)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, r, n) {
                return this.delegate = {
                    iterator: O(t),
                    resultName: r,
                    nextLoc: n
                }, "next" === this.method && (this.arg = e), y
            }
        }, t
    }

    function DiscussionsContext_ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function DiscussionsContext_objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? DiscussionsContext_ownKeys(Object(r), !0).forEach((function(t) {
                DiscussionsContext_defineProperty(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : DiscussionsContext_ownKeys(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }

    function DiscussionsContext_defineProperty(e, t, r) {
        return (t = DiscussionsContext_toPropertyKey(t)) in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function DiscussionsContext_toPropertyKey(e) {
        var t = DiscussionsContext_toPrimitive(e, "string");
        return "symbol" == DiscussionsContext_typeof(t) ? t : String(t)
    }

    function DiscussionsContext_toPrimitive(e, t) {
        if ("object" != DiscussionsContext_typeof(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != DiscussionsContext_typeof(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
    }

    function asyncGeneratorStep(e, t, r, n, o, a, i) {
        try {
            var s = e[a](i),
                c = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, o)
    }

    function _asyncToGenerator(e) {
        return function() {
            var t = this,
                r = arguments;
            return new Promise((function(n, o) {
                var a = e.apply(t, r);

                function i(e) {
                    asyncGeneratorStep(a, n, o, i, s, "next", e)
                }

                function s(e) {
                    asyncGeneratorStep(a, n, o, i, s, "throw", e)
                }
                i(void 0)
            }))
        }
    }

    function DiscussionsContext_slicedToArray(e, t) {
        return DiscussionsContext_arrayWithHoles(e) || DiscussionsContext_iterableToArrayLimit(e, t) || DiscussionsContext_unsupportedIterableToArray(e, t) || DiscussionsContext_nonIterableRest()
    }

    function DiscussionsContext_nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function DiscussionsContext_unsupportedIterableToArray(e, t) {
        if (e) {
            if ("string" == typeof e) return DiscussionsContext_arrayLikeToArray(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? DiscussionsContext_arrayLikeToArray(e, t) : void 0
        }
    }

    function DiscussionsContext_arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function DiscussionsContext_iterableToArrayLimit(e, t) {
        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != r) {
            var n, o, a, i, s = [],
                c = !0,
                u = !1;
            try {
                if (a = (r = r.call(e)).next, 0 === t) {
                    if (Object(r) !== r) return;
                    c = !1
                } else
                    for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0);
            } catch (e) {
                u = !0, o = e
            } finally {
                try {
                    if (!c && null != r.return && (i = r.return(), Object(i) !== i)) return
                } finally {
                    if (u) throw o
                }
            }
            return s
        }
    }

    function DiscussionsContext_arrayWithHoles(e) {
        if (Array.isArray(e)) return e
    }

    function DiscussionsContext_objectWithoutProperties(e, t) {
        if (null == e) return {};
        var r, n, o = DiscussionsContext_objectWithoutPropertiesLoose(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
        }
        return o
    }

    function DiscussionsContext_objectWithoutPropertiesLoose(e, t) {
        if (null == e) return {};
        var r, n, o = {},
            a = Object.keys(e);
        for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
    }
    var DiscussionsContext_wp$element = wp.element,
        useContext = DiscussionsContext_wp$element.useContext,
        createContext = DiscussionsContext_wp$element.createContext,
        DiscussionsContext_useState = DiscussionsContext_wp$element.useState,
        DiscussionsContext_useMemo = DiscussionsContext_wp$element.useMemo,
        DiscussionsContext_useEffect = DiscussionsContext_wp$element.useEffect,
        DiscussionsContext_useCallback = DiscussionsContext_wp$element.useCallback,
        DiscussionsContext = createContext(),
        useDiscussionsContext = function() {
            var e = useContext(DiscussionsContext);
            if (!e) throw new Error("useDiscussionsContext must be used within a DiscussionsContextProvider");
            return e
        },
        DiscussionsContextProvider = function(e) {
            var t = e.children,
                r = DiscussionsContext_objectWithoutProperties(e, DiscussionsContext_excluded),
                n = r.system,
                o = r.theme,
                a = DiscussionsContext_slicedToArray(DiscussionsContext_useState([]), 2),
                i = a[0],
                s = a[1],
                c = DiscussionsContext_slicedToArray(DiscussionsContext_useState(null), 2),
                u = c[0],
                l = c[1],
                p = DiscussionsContext_slicedToArray(DiscussionsContext_useState(!1), 2),
                f = p[0],
                d = p[1],
                h = DiscussionsContext_useMemo((function() {
                    return (null == o ? void 0 : o.settings) || {}
                }), [o]),
                m = n.botId,
                y = n.customId,
                b = n.restNonce,
                g = n.pluginUrl,
                _ = n.restUrl,
                v = n.debugMode,
                w = DiscussionsContext_useMemo((function() {
                    return Object.keys(h).reduce((function(e, t) {
                        return e["--mwai-".concat(t)] = h[t], e
                    }), {})
                }), [h]),
                C = DiscussionsContext_useCallback(_asyncToGenerator(_regeneratorRuntime().mark((function e() {
                    var t, r, n, o, a, i = arguments;
                    return _regeneratorRuntime().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = i.length > 0 && void 0 !== i[0] && i[0], e.prev = 1, t || d(!0), r = {
                                    botId: m || y
                                }, v && console.log("[DISCUSSIONS] OUT: ", r), e.next = 7, fetch("".concat(_, "/mwai-ui/v1/discussions/list"), {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        "X-WP-Nonce": b
                                    },
                                    body: (0, src_helpers.F1)(r)
                                });
                            case 7:
                                return n = e.sent, e.next = 10, n.json();
                            case 10:
                                if ((o = e.sent).success) {
                                    e.next = 13;
                                    break
                                }
                                throw new Error("Could not retrieve the discussions: ".concat(o.message));
                            case 13:
                                v && console.log("[DISCUSSIONS] IN: ", o), a = o.chats.map((function(e) {
                                    var t = JSON.parse(e.messages),
                                        r = JSON.parse(e.extra);
                                    return DiscussionsContext_objectSpread(DiscussionsContext_objectSpread({}, e), {}, {
                                        messages: t,
                                        extra: r
                                    })
                                })), s(a), e.next = 21;
                                break;
                            case 18:
                                e.prev = 18, e.t0 = e.catch(1), console.error(e.t0);
                            case 21:
                                return e.prev = 21, t || d(!1), e.finish(21);
                            case 24:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 18, 21, 24]
                    ])
                }))), []);
            DiscussionsContext_useEffect((function() {
                C();
                var e = setInterval((function() {
                    C(!0)
                }), 5e3);
                return function() {
                    return clearInterval(e)
                }
            }), []);
            var x = function(e) {
                    var t = MwaiAPI.getChatbot(e);
                    if (!t) throw new Error("Chatbot not found.", {
                        botId: e,
                        chatbots: MwaiAPI.chatbots
                    });
                    return t
                },
                S = function() {
                    var e = _asyncToGenerator(_regeneratorRuntime().mark((function e(t) {
                        var r;
                        return _regeneratorRuntime().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = i.find((function(e) {
                                            return e.chatId === t
                                        }))) {
                                        e.next = 4;
                                        break
                                    }
                                    return console.error("Discussion not found.", {
                                        chatId: t,
                                        discussions: i
                                    }), e.abrupt("return");
                                case 4:
                                    x(m).setContext({
                                        chatId: t,
                                        messages: r.messages
                                    }), l(r);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                I = function() {
                    var e = _asyncToGenerator(_regeneratorRuntime().mark((function e() {
                        return _regeneratorRuntime().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    x(m).clear();
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                E = {
                    onDiscussionClick: S,
                    onNewChatClick: I
                },
                R = {
                    botId: m,
                    pluginUrl: g,
                    busy: f,
                    setBusy: d,
                    cssVariables: w,
                    discussions: i,
                    discussion: u,
                    theme: o
                };
            return React.createElement(DiscussionsContext.Provider, {
                value: {
                    state: R,
                    actions: E
                }
            }, t)
        };

    function DiscussionsUI_typeof(e) {
        return DiscussionsUI_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, DiscussionsUI_typeof(e)
    }

    function DiscussionsUI_ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function DiscussionsUI_objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? DiscussionsUI_ownKeys(Object(r), !0).forEach((function(t) {
                DiscussionsUI_defineProperty(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : DiscussionsUI_ownKeys(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }

    function DiscussionsUI_defineProperty(e, t, r) {
        return (t = DiscussionsUI_toPropertyKey(t)) in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function DiscussionsUI_toPropertyKey(e) {
        var t = DiscussionsUI_toPrimitive(e, "string");
        return "symbol" == DiscussionsUI_typeof(t) ? t : String(t)
    }

    function DiscussionsUI_toPrimitive(e, t) {
        if ("object" != DiscussionsUI_typeof(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != DiscussionsUI_typeof(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
    }
    var DiscussionsUI_wp$element = wp.element,
        DiscussionsUI_useMemo = DiscussionsUI_wp$element.useMemo,
        DiscussionsUI_useEffect = DiscussionsUI_wp$element.useEffect,
        Discussion = function(e) {
            var t = e.discussion,
                r = e.onClick,
                n = void 0 === r ? function() {} : r,
                o = e.selected,
                a = void 0 !== o && o,
                i = (0, helpers.gR)(),
                s = t.messages,
                c = s[s.length - 1],
                u = c.content.length > 64 ? c.content.substring(0, 64) + "..." : c.content,
                l = i("mwai-discussion", {
                    "mwai-active": a
                });
            return React.createElement("li", {
                className: l,
                onClick: n
            }, u)
        },
        DiscussionsUI = function(e) {
            var t = e.theme,
                r = e.style,
                n = e.params,
                o = (0, helpers.gR)(),
                a = DiscussionsUI_useMemo((function() {
                    return "css" === (null == t ? void 0 : t.type) ? null == t ? void 0 : t.style : null
                }), [t]),
                i = useDiscussionsContext(),
                s = i.state,
                c = i.actions,
                u = s.botId,
                l = s.cssVariables,
                p = s.discussions,
                f = s.discussion,
                d = s.busy,
                h = c.onDiscussionClick,
                m = c.onNewChatClick,
                y = n.textNewChat;
            DiscussionsUI_useEffect((function() {}));
            var b = o("mwai-discussions", DiscussionsUI_defineProperty({}, "mwai-".concat(null == t ? void 0 : t.themeId, "-theme"), !0));
            return React.createElement(React.Fragment, null, React.createElement("div", {
                id: "mwai-discussions-".concat(u),
                className: b,
                style: DiscussionsUI_objectSpread(DiscussionsUI_objectSpread({}, l), r)
            }, a && React.createElement("style", null, a), React.createElement("div", {
                className: o("mwai-header")
            }, React.createElement("button", {
                onClick: function() {
                    return m()
                },
                disabled: d
            }, React.createElement("span", null, null != y ? y : "+ New chat"))), React.createElement("ul", {
                className: o("mwai-content")
            }, p.map((function(e) {
                return React.createElement(Discussion, {
                    key: e.id,
                    discussion: e,
                    selected: (null == f ? void 0 : f.id) === e.id,
                    onClick: function() {
                        return h(e.chatId)
                    }
                })
            })))))
        };
    const chatbot_DiscussionsUI = DiscussionsUI;
    var DiscussionsSystem = function(e) {
        return React.createElement(DiscussionsContextProvider, e, React.createElement(chatbot_DiscussionsUI, e))
    };
    const chatbot_DiscussionsSystem = DiscussionsSystem;
    var render = wp.element.render;

    function decodeHtmlEntities(e) {
        var t = document.createElement("textarea");
        return t.innerHTML = e, t.value
    }
    document.addEventListener("DOMContentLoaded", (function() {
        function e(e, t) {
            e.forEach((function(e) {
                var r = JSON.parse(decodeHtmlEntities(e.getAttribute("data-params"))),
                    n = JSON.parse(decodeHtmlEntities(e.getAttribute("data-system"))),
                    o = JSON.parse(decodeHtmlEntities(e.getAttribute("data-theme")));
                e.removeAttribute("data-params"), e.removeAttribute("data-system"), e.removeAttribute("data-theme"), render(t({
                    system: n,
                    params: r,
                    theme: o
                }), e)
            }))
        }
        e(document.querySelectorAll(".mwai-chatbot-container"), chatbot_ChatbotSystem), e(document.querySelectorAll(".mwai-discussions-container"), chatbot_DiscussionsSystem)
    }))
})()