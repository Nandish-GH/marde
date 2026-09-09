import type { ReactNode } from "react";
import s from "./product-graphic.module.css";

// Simplified form studies based on the repository's provisional Air/Ground references.
// No dimensions, sensors, treatment hardware or performance are represented.
export function ProductGraphic({ type, compact = false }: { type: "air" | "ground" | "modules"; compact?: boolean }) {
  const names = { air: "Air / aerial transport", ground: "Ground / final access", modules: "Modules / adaptable payload" };
  let drawing: ReactNode;
  if (type === "air") drawing = <>
    <g className={s.guide}><ellipse cx="320" cy="214" rx="222" ry="132"/><path d="M60 214h520M320 54v320"/><path d="M129 104 511 324M129 324 511 104"/></g>
    <g className={s.solid}><path d="m279 191-92-52-11 13 96 66M361 191l92-52 11 13-96 66M273 236l-86 51-11-13 96-65M367 236l86 51 11-13-96-65"/>
    <path d="m276 182 44-24 44 24 20 32-20 34-44 24-44-24-20-34Z"/>
    <path d="m292 193 28-15 28 15 12 21-12 21-28 16-28-16-12-21Z"/></g>
    <g className={s.edge}><ellipse cx="167" cy="133" rx="78" ry="24"/><ellipse cx="473" cy="133" rx="78" ry="24"/><ellipse cx="167" cy="289" rx="78" ry="24"/><ellipse cx="473" cy="289" rx="78" ry="24"/>
    <path d="M150 133h34m-17-8v16M456 133h34m-17-8v16M150 289h34m-17-8v16M456 289h34m-17-8v16"/></g>
    <path className={s.accent} d="M302 270v27h36v-27M308 296v22h24v-22"/>
  </>;
  else if (type === "ground") drawing = <>
    <g className={s.guide}><path d="M66 310h510M96 344h448M320 76v288"/><path d="m104 233 184-107 257 146M104 275l184-107 257 146"/></g>
    <g className={s.solid}><path d="m151 203 168-84 176 85-169 89Z"/><path d="M151 203v58l175 89 169-88v-58L326 293Z"/>
    <path d="m246 190 72-36 83 42-72 37Z"/><path d="M246 190v39l83 41 72-38v-36M329 233v37"/></g>
    <g className={s.wheel}><ellipse cx="203" cy="281" rx="30" ry="43" transform="rotate(-26 203 281)"/><ellipse cx="287" cy="324" rx="30" ry="43" transform="rotate(-26 287 324)"/><ellipse cx="384" cy="323" rx="30" ry="43" transform="rotate(26 384 323)"/><ellipse cx="468" cy="280" rx="30" ry="43" transform="rotate(26 468 280)"/></g>
    <path className={s.accent} d="m246 190 83 43 72-37M329 233v37"/>
  </>;
  else drawing = <>
    <g className={s.guide}><path d="M90 300 320 410 550 300M90 255l230 110 230-110M320 38v365"/><path d="M180 156v137m280-137v137" strokeDasharray="4 7"/></g>
    <g className={s.solid}><path d="m180 270 140-70 140 70-140 70Z"/><path d="M180 270v27l140 70 140-70v-27M320 340v27"/>
    <path d="m213 124 107-54 107 54-107 55Z"/><path d="M213 124v84l107 55 107-55v-84L320 179Z"/><path d="M320 179v84"/></g>
    <g className={s.accent}><path d="m250 106 107 54v31M246 217l35 18m77-18 35-18"/><path d="M196 80V59h26m222 21V59h-26M196 318v21h26m222-21v21h-26"/></g>
  </>;
  return <figure className={`${s.figure} ${compact ? s.compact : ""}`}>
    <div className={s.top}><span>{names[type]}</span><span aria-hidden="true">+ / {type === "air" ? "01" : type === "ground" ? "02" : "04"}</span></div>
    <svg viewBox="0 0 640 430" fill="none" role="img" aria-label={`${names[type]}. Provisional system concept; not finalized hardware.`}>
      <g className={s.registration}><path d="M32 90V32h58m460 0h58v58M32 340v58h58m460 0h58v-58"/><path d="M25 215h14m-7-7v14m569-7h14m-7-7v14"/></g>
      {drawing}
    </svg>
    <figcaption><span>CONCEPT / IN DEVELOPMENT</span><span>Form subject to engineering</span></figcaption>
  </figure>;
}
