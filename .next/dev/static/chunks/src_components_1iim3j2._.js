(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/CustomCursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function CustomCursor() {
    _s();
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: -100,
        y: -100
    });
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            const handleMouseMove = {
                "CustomCursor.useEffect.handleMouseMove": (e)=>{
                    setMousePosition({
                        x: e.clientX,
                        y: e.clientY
                    });
                    if (!isVisible) setIsVisible(true);
                }
            }["CustomCursor.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "CustomCursor.useEffect.handleMouseLeave": ()=>setIsVisible(false)
            }["CustomCursor.useEffect.handleMouseLeave"];
            const handleMouseEnter = {
                "CustomCursor.useEffect.handleMouseEnter": ()=>setIsVisible(true)
            }["CustomCursor.useEffect.handleMouseEnter"];
            const handleHoverStart = {
                "CustomCursor.useEffect.handleHoverStart": (e)=>{
                    const target = e.target;
                    if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a') || target.getAttribute('role') === 'button' || target.classList.contains('interactive')) {
                        setIsHovered(true);
                    } else {
                        setIsHovered(false);
                    }
                }
            }["CustomCursor.useEffect.handleHoverStart"];
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mousemove', handleHoverStart);
            document.addEventListener('mouseleave', handleMouseLeave);
            document.addEventListener('mouseenter', handleMouseEnter);
            return ({
                "CustomCursor.useEffect": ()=>{
                    window.removeEventListener('mousemove', handleMouseMove);
                    window.removeEventListener('mousemove', handleHoverStart);
                    document.removeEventListener('mouseleave', handleMouseLeave);
                    document.removeEventListener('mouseenter', handleMouseEnter);
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], [
        isVisible
    ]);
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block",
                style: {
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 240, 255, 0.06), rgba(124, 58, 237, 0.03) 40%, transparent 80%)`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/CustomCursor.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-cyan-400 mix-blend-difference hidden md:block",
                animate: {
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isHovered ? 2.5 : 1
                },
                transition: {
                    type: 'spring',
                    damping: 30,
                    stiffness: 400,
                    mass: 0.1
                },
                style: {
                    width: 8,
                    height: 8,
                    boxShadow: '0 0 10px #00f0ff, 0 0 20px #00f0ff'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/CustomCursor.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-cyan-400/40 hidden md:block",
                animate: {
                    x: mousePosition.x - 18,
                    y: mousePosition.y - 18,
                    scale: isHovered ? 1.5 : 1,
                    borderColor: isHovered ? 'rgba(168, 85, 247, 0.8)' : 'rgba(0, 240, 255, 0.4)'
                },
                transition: {
                    type: 'spring',
                    damping: 25,
                    stiffness: 200,
                    mass: 0.2
                },
                style: {
                    width: 36,
                    height: 36
                }
            }, void 0, false, {
                fileName: "[project]/src/components/CustomCursor.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(CustomCursor, "CxjOxOYmxWULLS17LaZlJP+BYh0=");
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/BackgroundParticles.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackgroundParticles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function BackgroundParticles() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BackgroundParticles.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            let animationFrameId;
            let width = canvas.width = window.innerWidth;
            let height = canvas.height = window.innerHeight;
            const handleResize = {
                "BackgroundParticles.useEffect.handleResize": ()=>{
                    if (!canvas) return;
                    width = canvas.width = window.innerWidth;
                    height = canvas.height = window.innerHeight;
                }
            }["BackgroundParticles.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            // Generate particles
            const particleCount = Math.min(Math.floor(width * height / 18000), 70);
            const particles = [];
            const colors = [
                '#00f0ff',
                '#3b82f6',
                '#8b5cf6',
                '#ec4899'
            ];
            for(let i = 0; i < particleCount; i++){
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.4,
                    vy: (Math.random() - 0.5) * 0.4,
                    radius: Math.random() * 1.8 + 0.8,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    alpha: Math.random() * 0.6 + 0.2
                });
            }
            let mouseX = -1000;
            let mouseY = -1000;
            const handleMouseMove = {
                "BackgroundParticles.useEffect.handleMouseMove": (e)=>{
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                }
            }["BackgroundParticles.useEffect.handleMouseMove"];
            window.addEventListener('mousemove', handleMouseMove);
            const draw = {
                "BackgroundParticles.useEffect.draw": ()=>{
                    ctx.clearRect(0, 0, width, height);
                    // Connect particles within distance
                    for(let i = 0; i < particles.length; i++){
                        const p1 = particles[i];
                        // Update position
                        p1.x += p1.vx;
                        p1.y += p1.vy;
                        // Bounce at boundaries
                        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
                        if (p1.y < 0 || p1.y > height) p1.vy *= -1;
                        // Draw particle
                        ctx.beginPath();
                        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
                        ctx.fillStyle = p1.color;
                        ctx.globalAlpha = p1.alpha;
                        ctx.shadowBlur = 8;
                        ctx.shadowColor = p1.color;
                        ctx.fill();
                        // Connect nearby particles
                        for(let j = i + 1; j < particles.length; j++){
                            const p2 = particles[j];
                            const dx = p1.x - p2.x;
                            const dy = p1.y - p2.y;
                            const dist = Math.sqrt(dx * dx + dy * dy);
                            if (dist < 120) {
                                ctx.beginPath();
                                ctx.moveTo(p1.x, p1.y);
                                ctx.lineTo(p2.x, p2.y);
                                ctx.strokeStyle = '#00f0ff';
                                ctx.globalAlpha = (1 - dist / 120) * 0.15;
                                ctx.lineWidth = 0.6;
                                ctx.stroke();
                            }
                        }
                        // Connect to mouse pointer
                        const mdx = p1.x - mouseX;
                        const mdy = p1.y - mouseY;
                        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
                        if (mdist < 160) {
                            ctx.beginPath();
                            ctx.moveTo(p1.x, p1.y);
                            ctx.lineTo(mouseX, mouseY);
                            ctx.strokeStyle = '#a855f7';
                            ctx.globalAlpha = (1 - mdist / 160) * 0.25;
                            ctx.lineWidth = 0.8;
                            ctx.stroke();
                        }
                    }
                    ctx.shadowBlur = 0;
                    ctx.globalAlpha = 1;
                    animationFrameId = requestAnimationFrame(draw);
                }
            }["BackgroundParticles.useEffect.draw"];
            draw();
            return ({
                "BackgroundParticles.useEffect": ()=>{
                    window.removeEventListener('resize', handleResize);
                    window.removeEventListener('mousemove', handleMouseMove);
                    cancelAnimationFrame(animationFrameId);
                }
            })["BackgroundParticles.useEffect"];
        }
    }["BackgroundParticles.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "pointer-events-none fixed inset-0 z-0 opacity-80"
    }, void 0, false, {
        fileName: "[project]/src/components/BackgroundParticles.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_s(BackgroundParticles, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = BackgroundParticles;
var _c;
__turbopack_context__.k.register(_c, "BackgroundParticles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_1iim3j2._.js.map