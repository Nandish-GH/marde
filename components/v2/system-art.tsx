import type { CSSProperties } from "react";
import s from "./system-art.module.css";

export function SystemGlyph({ type }: { type: string }) {
  return <svg viewBox="0 0 120 100" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    {type === "air" ? <><path d="m60 50-32-24m32 24 32-24M60 50 28 74m32-24 32 24" strokeWidth="5" /><ellipse cx="25" cy="24" rx="21" ry="7" /><ellipse cx="95" cy="24" rx="21" ry="7" /><ellipse cx="25" cy="77" rx="21" ry="7" /><ellipse cx="95" cy="77" rx="21" ry="7" /><path d="m47 38 13-6 13 6v22l-13 10-13-10Z" fill="var(--glyph-fill, #172131)" /><path d="M56 42h8M60 38v8" /></> : null}
    {type === "ground" ? <><path d="m20 38 38-20 40 21-39 21Z" fill="var(--glyph-fill, #172131)"/><path d="M20 38v22l39 21 39-21V39M59 60v21"/><path d="m42 35 16-8 19 9-16 9Z"/><path d="M42 35v14l19 9 16-9V36M61 45v13"/><g fill="var(--glyph-fill, #172131)"><ellipse cx="31" cy="67" rx="7" ry="12" transform="rotate(-25 31 67)"/><ellipse cx="51" cy="77" rx="7" ry="12" transform="rotate(-25 51 77)"/><ellipse cx="73" cy="77" rx="7" ry="12" transform="rotate(25 73 77)"/><ellipse cx="92" cy="67" rx="7" ry="12" transform="rotate(25 92 67)"/></g></> : null}
    {type === "nexus" ? <><circle cx="60" cy="50" r="19" /><circle cx="60" cy="50" r="8" /><path d="M60 9v21m0 40v21M14 50h27m38 0h27M27 20l19 18m28 24 19 18M27 80l19-18m28-24 19-18" /><path d="M47 6h26v8H47zM47 86h26v8H47zM3 44h13v12H3zM104 44h13v12h-13z" /></> : null}
    {type === "modules" ? <><path d="m29 32 31-16 31 16-31 17Z" /><path d="M29 32v43l31 16 31-16V32M60 49v42" /><path d="m44 24 31 16M75 40v15M37 54l15 8m-15 1 15 8" /><path d="M22 22V10h16m60 12V10H82M22 80v14h16m60-14v14H82" /></> : null}
  </svg>;
}

// A role diagram, deliberately not a rendering of finalized MARDE hardware.
export function SystemArt() {
  return <div className={s.scene} aria-label="Conceptual architecture: Air and Ground connected through Nexus, with adaptable Modules">
    <div className={s.atmosphere} aria-hidden="true" />
    <svg className={s.terrain} viewBox="0 0 800 640" fill="none" aria-hidden="true">
      <defs><linearGradient id="terrain-fade" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#83a4bd" stopOpacity=".05" /><stop offset=".6" stopColor="#83a4bd" stopOpacity=".36" /><stop offset="1" stopColor="#83a4bd" stopOpacity=".05" /></linearGradient></defs>
      {Array.from({ length: 16 }, (_, i) => <path key={i} d={`M${-100+i*45} 650 Q${160+i*18} ${110+i*15} ${850+i*10} ${200+i*25}`} stroke="url(#terrain-fade)" />)}
      {Array.from({ length: 11 }, (_, i) => <path key={i} d={`M-50 ${180+i*40} Q${300+i*12} ${370+i*9} 850 ${60+i*48}`} stroke="url(#terrain-fade)" />)}
      <path d="M192 175 C290 145 425 170 471 291 S437 408 557 447" stroke="#7fbbff" strokeOpacity=".14" strokeWidth="16" />
      <path className={s.route} d="M192 175 C290 145 425 170 471 291 S437 408 557 447" stroke="#8fc9ff" strokeWidth="2" pathLength="1" />
      <path d="M192 175 250 419 557 447M250 419 471 291" stroke="#83a4bd" strokeDasharray="3 8" />
      <circle cx="471" cy="291" r="120" stroke="#87baf9" strokeOpacity=".08" /><circle cx="471" cy="291" r="170" stroke="#87baf9" strokeOpacity=".05" />
      <path d="M660 160h14m-7-7v14M96 471h14m-7-7v14M680 512h14m-7-7v14" stroke="#aac2dc" strokeOpacity=".5" />
    </svg>
    <div className={`${s.node} ${s.air}`} style={{ "--node-delay": "150ms" } as CSSProperties}><div className={s.glyph}><SystemGlyph type="air" /></div><div className={s.caption}><span>01 / AIR</span><strong>Distance</strong></div></div>
    <div className={`${s.node} ${s.ground}`} style={{ "--node-delay": "300ms" } as CSSProperties}><div className={s.glyph}><SystemGlyph type="ground" /></div><div className={s.caption}><span>02 / GROUND</span><strong>Access</strong></div></div>
    <div className={`${s.node} ${s.nexus}`} style={{ "--node-delay": "450ms" } as CSSProperties}><div className={s.glyph}><SystemGlyph type="nexus" /></div><div className={s.caption}><span>03 / NEXUS</span><strong>Coordinate</strong></div></div>
    <div className={`${s.node} ${s.modules}`} style={{ "--node-delay": "600ms" } as CSSProperties}><div className={s.glyph}><SystemGlyph type="modules" /></div><div className={s.caption}><span>04 / MODULES</span><strong>Extend</strong></div></div>
    <div className={s.sceneLabel}><span className={s.plus} aria-hidden="true">+</span> INTEGRATED RESPONSE ARCHITECTURE</div>
    <p className={s.note}>System concept · Hardware in development</p>
  </div>;
}
