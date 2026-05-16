(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/features/password/passwordSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "passwordSlice",
    ()=>passwordSlice,
    "resetStore",
    ()=>resetStore,
    "setPassword",
    ()=>setPassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    value: '',
    strength: 0,
    feedback: [],
    activeKeys: {}
};
// Hebrew Messages from PASSWORD_RULES.md
const MESSAGES = {
    LENGTH: 'כדאי להוסיף עוד כמה תווים, זה יהפוך את הסיסמה לבטוחה הרבה יותר (לפחות 10).',
    CASE: 'שילוב של אותיות גדולות וקטנות מחזק את הסיסמה.',
    SYMBOL: 'הוספת סימן מיוחד (כמו @, #, או !) מוסיפה המון הגנה.',
    SEQUENCE: 'כדאי להימנע מרצפים פשוטים של מספרים כמו 123 - זה הופך את הסיסמה לקלה לניחוש.'
};
const SYMBOLS = '!@#$%^&*()_+=-[]{}|;:\'",.<>?/'.split('');
const validatePassword = (password)=>{
    let strength = 0;
    const feedback = [];
    const activeKeys = {};
    if (!password) {
        return {
            strength: 0,
            feedback: [],
            activeKeys: {}
        };
    }
    // 1. Length Check
    if (password.length >= 10) {
        strength += 1;
    } else {
        feedback.push(MESSAGES.LENGTH);
    }
    // 2. Case Check
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    if (hasUpper && hasLower) {
        strength += 1;
    } else {
        feedback.push(MESSAGES.CASE);
    }
    // 3. Symbol Check
    const hasSymbol = SYMBOLS.some((s)=>password.includes(s));
    if (hasSymbol) {
        strength += 1;
    } else {
        feedback.push(MESSAGES.SYMBOL);
        // Invite symbols
        SYMBOLS.slice(0, 10).forEach((s)=>activeKeys[s] = 'invite');
    }
    // 4. Sequence Check
    const hasSequence = /123|234|345|456|567|678|789|012|abc|bcd|cde/.test(password.toLowerCase());
    if (!hasSequence && password.length > 0) {
        strength += 1;
    } else if (hasSequence) {
        feedback.push(MESSAGES.SEQUENCE);
        // Mark sequence keys to avoid
        const lastChar = password.slice(-1);
        const nextCharMap = {
            '1': '2',
            '2': '3',
            'a': 'b',
            'b': 'c'
        }; // Simplified for demo
        if (nextCharMap[lastChar]) {
            activeKeys[nextCharMap[lastChar]] = 'avoid';
        }
    }
    // Confirmation state for typed keys
    password.split('').forEach((char)=>{
        const upperChar = char.toUpperCase();
        activeKeys[upperChar] = 'confirmation';
    });
    return {
        strength,
        feedback,
        activeKeys
    };
};
const passwordSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'password',
    initialState,
    reducers: {
        setPassword: (state, action)=>{
            const newValue = action.payload;
            const { strength, feedback, activeKeys } = validatePassword(newValue);
            state.value = newValue;
            state.strength = strength;
            state.feedback = feedback;
            state.activeKeys = activeKeys;
        },
        resetStore: (state)=>{
            return initialState;
        }
    }
});
const { setPassword, resetStore } = passwordSlice.actions;
const __TURBOPACK__default__export__ = passwordSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/store.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "makeStore",
    ()=>makeStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$features$2f$password$2f$passwordSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/features/password/passwordSlice.js [app-client] (ecmascript)");
;
;
const makeStore = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
        reducer: {
            password: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$features$2f$password$2f$passwordSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        }
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/StoreProvider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StoreProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function StoreProvider({ children }) {
    _s();
    const storeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeStore"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: storeRef.current,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/StoreProvider.jsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_s(StoreProvider, "EtiU7pDwGhTDZwMnrKEqZbxjqXE=");
_c = StoreProvider;
var _c;
__turbopack_context__.k.register(_c, "StoreProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0sdqreq._.js.map