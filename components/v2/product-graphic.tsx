import Image from "next/image";
import s from "./product-graphic.module.css";

// Air is derived from the user's Blender reference. Ground/Modules remain role studies.
export function ProductGraphic({ type, compact = false }: { type: "air" | "ground" | "modules"; compact?: boolean }) {
  const names = { air: "Air / aerial transport", ground: "Ground / final access", modules: "Modules / adaptable payload" };
  const descriptions = {
    air: "MARDE Air current engineering concept, derived from the supplied Blender model: winged airframe, four lift rotors and an underslung payload interface. Not finalized hardware.",
    ground: "MARDE Ground provisional mobility concept: a compact wheeled base with a payload interface. Design intent only; no finished Ground model or demonstrated terrain capability.",
    modules: "Modules / adaptable payload. Provisional system concept showing a removable payload above its interface; not finalized hardware.",
  };
  return <figure className={`${s.figure} ${compact ? s.compact : ""}`} data-reveal="graphic">
    <div className={s.top}><span>{names[type]}</span><span aria-hidden="true">+ / {type === "air" ? "01" : type === "ground" ? "02" : "04"}</span></div>
    <div className={s.study}>
      <svg className={s.grid} viewBox="0 0 640 430" fill="none" aria-hidden="true">
        <g className={s.registration}><path d="M32 90V32h58m460 0h58v58M32 340v58h58m460 0h58v-58"/><path d="M25 215h14m-7-7v14m569-7h14m-7-7v14"/></g>
        <g className={s.guide}><ellipse cx="320" cy="252" rx="244" ry="116"/><path d="M60 252h520M320 50v330"/><path d="M100 360 540 112M100 112l440 248"/></g>
      </svg>
      <picture>
        <source type="image/webp" srcSet={`/graphics/${type}-study-640.webp 640w, /graphics/${type}-study-1440.webp 1440w`} sizes={compact ? "(max-width: 700px) 88vw, 42vw" : "(max-width: 700px) 90vw, 48vw"} />
        <Image src={`/graphics/${type}-study-1440.webp`} width={1440} height={1000} alt={descriptions[type]} unoptimized />
      </picture>
    </div>
    <figcaption><span>{type === "air" ? "CURRENT ENGINEERING CONCEPT" : "CONCEPT / IN DEVELOPMENT"}</span><span>{type === "air" ? "From the MARDE Air model" : type === "ground" ? "Mobility design intent" : "Payload interface study"}</span></figcaption>
  </figure>;
}