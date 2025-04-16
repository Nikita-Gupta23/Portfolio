// // components/SmoothScrollWrapper.tsx
// 'use client';

// import { useEffect } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// // import ScrollSmoother from 'gsap/ScrollSmoother';

// gsap.registerPlugin(ScrollTrigger);

// export default function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
//     useEffect(() => {
//         ScrollTrigger.create({
//             content: '#content',
//             wrapper: '#wrapper',
//             smooth: 1.5,
//             effects: false,
//             normalizeScroll: true
//         });
//     }, []);

//     return (
//         <div id="wrapper">
//             <div id="content">
//                 {children}
//             </div>
//         </div>
//     );
// }

