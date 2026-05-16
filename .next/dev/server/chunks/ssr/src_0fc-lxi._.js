module.exports = [
"[project]/src/styles/PasswordInput.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "input": "PasswordInput-module__9j4itG__input",
  "inputGroup": "PasswordInput-module__9j4itG__inputGroup",
  "label": "PasswordInput-module__9j4itG__label",
  "toggleButton": "PasswordInput-module__9j4itG__toggleButton",
  "wrapper": "PasswordInput-module__9j4itG__wrapper",
});
}),
"[project]/src/components/PasswordInput.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PasswordInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$features$2f$password$2f$passwordSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/features/password/passwordSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$PasswordInput$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/PasswordInput.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
function PasswordInput() {
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const password = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.password.value);
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$PasswordInput$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "password-input",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$PasswordInput$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                children: "הקלד סיסמה:"
            }, void 0, false, {
                fileName: "[project]/src/components/PasswordInput.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$PasswordInput$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputGroup,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "password-input",
                        type: showPassword ? 'text' : 'password',
                        value: password,
                        onChange: (e)=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$features$2f$password$2f$passwordSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setPassword"])(e.target.value)),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$PasswordInput$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
                        placeholder: "סיסמה חדשה..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/PasswordInput.jsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setShowPassword(!showPassword),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$PasswordInput$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toggleButton,
                        children: showPassword ? 'הסתר' : 'הצג'
                    }, void 0, false, {
                        fileName: "[project]/src/components/PasswordInput.jsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PasswordInput.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PasswordInput.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/styles/CoachFeedback.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "CoachFeedback-module__Mol6JW__container",
  "messageItem": "CoachFeedback-module__Mol6JW__messageItem",
  "messageList": "CoachFeedback-module__Mol6JW__messageList",
  "strengthTitle": "CoachFeedback-module__Mol6JW__strengthTitle",
});
}),
"[project]/src/components/CoachFeedback.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CoachFeedback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$CoachFeedback$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/CoachFeedback.module.css [app-ssr] (css module)");
'use client';
;
;
;
function CoachFeedback() {
    const { strength, feedback } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.password);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$CoachFeedback$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        "aria-live": "polite",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$CoachFeedback$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].strengthTitle,
                children: [
                    "חוזק סיסמה: ",
                    strength,
                    " / 4"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CoachFeedback.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$CoachFeedback$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].messageList,
                children: feedback.length > 0 ? feedback.map((msg, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$CoachFeedback$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].messageItem,
                        children: msg
                    }, index, false, {
                        fileName: "[project]/src/components/CoachFeedback.jsx",
                        lineNumber: 16,
                        columnNumber: 13
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$CoachFeedback$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].messageItem,
                    children: "התחל להקליד כדי לקבל משוב..."
                }, void 0, false, {
                    fileName: "[project]/src/components/CoachFeedback.jsx",
                    lineNumber: 21,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CoachFeedback.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CoachFeedback.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/styles/KeyboardVisualizer.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "avoid": "KeyboardVisualizer-module__RkY4Kq__avoid",
  "confirmation": "KeyboardVisualizer-module__RkY4Kq__confirmation",
  "invite": "KeyboardVisualizer-module__RkY4Kq__invite",
  "key": "KeyboardVisualizer-module__RkY4Kq__key",
  "keyboard": "KeyboardVisualizer-module__RkY4Kq__keyboard",
  "pulseInvite": "KeyboardVisualizer-module__RkY4Kq__pulseInvite",
  "row": "KeyboardVisualizer-module__RkY4Kq__row",
});
}),
"[project]/src/components/KeyboardVisualizer.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KeyboardVisualizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$KeyboardVisualizer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/KeyboardVisualizer.module.css [app-ssr] (css module)");
'use client';
;
;
;
function KeyboardVisualizer() {
    const activeKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.password.activeKeys);
    // Simplified layout for demonstration
    const rows = [
        [
            '!',
            '@',
            '#',
            '$',
            '%',
            '^',
            '&',
            '*',
            '(',
            ')',
            '_',
            '+'
        ],
        [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '0',
            '-',
            '='
        ],
        [
            'Q',
            'W',
            'E',
            'R',
            'T',
            'Y',
            'U',
            'I',
            'O',
            'P',
            '[',
            ']'
        ],
        [
            'A',
            'S',
            'D',
            'F',
            'G',
            'H',
            'J',
            'K',
            'L',
            ';',
            "'"
        ],
        [
            'Z',
            'X',
            'C',
            'V',
            'B',
            'N',
            'M',
            ',',
            '.',
            '/'
        ]
    ];
    const getKeyStyle = (key)=>{
        const state = activeKeys[key];
        if (state === 'invite') return `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$KeyboardVisualizer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].key} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$KeyboardVisualizer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].invite}`;
        if (state === 'confirmation') return `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$KeyboardVisualizer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].key} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$KeyboardVisualizer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].confirmation}`;
        if (state === 'avoid') return `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$KeyboardVisualizer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].key} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$KeyboardVisualizer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].avoid}`;
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$KeyboardVisualizer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$KeyboardVisualizer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].keyboard,
        children: rows.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$KeyboardVisualizer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].row,
                children: row.map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: getKeyStyle(key),
                        children: key
                    }, key, false, {
                        fileName: "[project]/src/components/KeyboardVisualizer.jsx",
                        lineNumber: 30,
                        columnNumber: 13
                    }, this))
            }, rowIndex, false, {
                fileName: "[project]/src/components/KeyboardVisualizer.jsx",
                lineNumber: 28,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/KeyboardVisualizer.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_0fc-lxi._.js.map