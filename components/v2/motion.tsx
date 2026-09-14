"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { animate } from "animejs";
import Image from "next/image";

export function Motion() {
  const pathname = usePathname();
  const cursor = useRef<HTMLDivElement>(null);
  const revealed = useRef(new WeakSet<Element>());
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    const fine = matchMedia("(hover: hover) and (pointer: fine)");
    let dispose = () => {};
    const setup = () => {
      dispose();
      const root = document.documentElement;
      const cleanups: (()=>void)[] = [];
      const finalCounts = () => document.querySelectorAll<HTMLElement>("[data-count]").forEach(el=>{el.textContent=el.dataset.count!;});
      root.classList.add("marde-intro-complete");
      const scrollHeader = () => document.querySelector<HTMLElement>("[data-v2-header]")?.setAttribute("data-scrolled", String(window.scrollY>30));
      scrollHeader();
      window.addEventListener("scroll",scrollHeader,{passive:true});
      cleanups.push(()=>window.removeEventListener("scroll",scrollHeader));
      if (!reduce.matches) {
        const animations = new Set<{ cancel: ()=>unknown }>();
        const enter = (el: Element, frames: Keyframe[], duration = 620, delay = 0) => {
          const animation = el.animate(frames, { duration, delay, easing: "cubic-bezier(.22,1,.36,1)" });
          animations.add(animation);
          animation.finished.then(() => animations.delete(animation), () => animations.delete(animation));
        };
        const observer = new IntersectionObserver(entries=>{
          entries.forEach(entry=>{
            if(!entry.isIntersecting) return;
            const el=entry.target as HTMLElement;
            observer.unobserve(el);
            if (revealed.current.has(el)) return;
            revealed.current.add(el);
            if (el.hasAttribute("data-system-art")) el.dataset.motionReady = "true";
            // Animate on entry without hiding SSR content during hydration.
            const kind=el.dataset.reveal;
            if(kind==="stat") {
              const count=el.querySelector<HTMLElement>("[data-count]");
              if(count){const counter={value:0};const end=Number(count.dataset.count);const animation=animate(counter,{value:end,duration:950,ease:"out(3)",onUpdate:()=>{count.textContent=counter.value.toFixed(1);},onComplete:()=>{count.textContent=count.dataset.count!;animations.delete(animation);}});animations.add(animation);}
            }
            if (kind === "hero" || kind === "editorial") {
              const children = kind === "hero" ? [...el.children] : el.matches("h1,h2,p") ? [el] : [...el.querySelectorAll("h1,h2,p")];
              const handoff = kind === "hero" && document.querySelector('.v2-opening[data-running="true"]') ? 650 : 0;
              children.forEach((child, index) => enter(child, [{ transform: "translateY(18px)", opacity: .55 }, { transform: "none", opacity: 1 }], 680, handoff + index * 70));
            } else if (kind === "roadmap") {
              enter(el, [{ transform: "translateX(-12px)", opacity: .6 }, { transform: "none", opacity: 1 }], 560);
            } else if (kind === "graphic") {
              enter(el, [{ transform: "scale(.975)", opacity: .6 }, { transform: "none", opacity: 1 }], 850);
            } else {
              const index = [...(el.parentElement?.children || [])].indexOf(el);
              enter(el, [{ transform: `translateY(${kind === "person" ? 14 : 22}px)`, opacity: .6 }, { transform: "none", opacity: 1 }], 600, kind === "system" || kind === "person" ? Math.min(index * 65, 195) : 0);
            }
            el.querySelectorAll<SVGPathElement>("[data-draw]").forEach(path => enter(path, [{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], 1000));
          });
        },{threshold:.15,rootMargin:"0px 0px -25px 0px"});
        document.querySelectorAll("[data-reveal]").forEach(el=>observer.observe(el));
        cleanups.push(()=>{observer.disconnect();animations.forEach(a=>a.cancel());finalCounts();});
        if(fine.matches){
          let frame=0;
          const lenis=new Lenis({autoRaf:false,lerp:.14,smoothWheel:true,syncTouch:false,anchors:{offset:-95},prevent:node=>Boolean(node.closest('[role="dialog"], [data-lenis-prevent]')),virtualScroll:()=>!document.body.hasAttribute("data-scroll-locked")});
          const tick=(time:number)=>{lenis.raf(time);frame=lenis.isScrolling==="smooth"?requestAnimationFrame(tick):0;};
          const wake=()=>{if(!frame)frame=requestAnimationFrame(tick);};
          window.addEventListener("wheel",wake,{passive:true});document.addEventListener("click",wake);
          cleanups.push(()=>{window.removeEventListener("wheel",wake);document.removeEventListener("click",wake);cancelAnimationFrame(frame);lenis.destroy();});
          const pointerMove=(event:PointerEvent)=>{
            const el=cursor.current;if(!el||event.pointerType==="touch")return;
            const target=event.target as HTMLElement;
            el.style.transform=`translate3d(${event.clientX}px,${event.clientY}px,0)`;
            root.classList.add("v2-cursor-ready");
            el.dataset.visible=String(!target.closest('input,textarea,select,[contenteditable="true"],iframe'));
            el.dataset.interactive=String(Boolean(target.closest('a,button,summary,[role="button"]')));
          };
          const hide=()=>{root.classList.remove("v2-cursor-ready");if(cursor.current)cursor.current.dataset.visible="false";};
          const press=()=>{if(cursor.current)cursor.current.dataset.pressed="true";};
          const release=()=>{if(cursor.current)cursor.current.dataset.pressed="false";};
          document.addEventListener("pointermove",pointerMove,{passive:true});document.addEventListener("pointerleave",hide);window.addEventListener("blur",hide);document.addEventListener("pointerdown",press);document.addEventListener("pointerup",release);
          cleanups.push(()=>{document.removeEventListener("pointermove",pointerMove);document.removeEventListener("pointerleave",hide);window.removeEventListener("blur",hide);document.removeEventListener("pointerdown",press);document.removeEventListener("pointerup",release);hide();});
        }
      }else{finalCounts();}
      dispose=()=>cleanups.forEach(cleanup=>cleanup());
    };
    setup();reduce.addEventListener("change",setup);fine.addEventListener("change",setup);
    return()=>{dispose();reduce.removeEventListener("change",setup);fine.removeEventListener("change",setup);};
  },[pathname]);
  return <div className="v2-cursor" ref={cursor} aria-hidden="true"><span /><span /></div>;
}
export function OpeningReveal() {
  const opening = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = document.documentElement;
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    // A profile-to-site client navigation must not introduce a fresh-load curtain.
    if (root.dataset.openingConsumed || (navigation && new URL(navigation.name).pathname !== location.pathname)) return;
    root.dataset.openingConsumed = "true";
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    const el = opening.current;
    if (!el || reduce.matches || performance.now() > 1500) return;
    el.dataset.running = "true";
    const animation = el.animate([
      { transform: "translateY(0)", offset: 0 },
      { transform: "translateY(0)", offset: .53 },
      { transform: "translateY(-102%)", offset: 1 },
    ], { duration: 1150, easing: "cubic-bezier(.76,0,.24,1)" });
    const logo = el.querySelector("img")!.animate([
      { opacity: .3, transform: "translateY(8px)" }, { opacity: 1, transform: "none" },
    ], { duration: 230, easing: "ease-out" });
    const finish = () => { delete el.dataset.running; animation.cancel(); logo.cancel(); };
    animation.finished.then(finish, () => {});
    const preferenceChanged = () => { if (reduce.matches) finish(); };
    reduce.addEventListener("change", preferenceChanged);
    return () => { finish(); reduce.removeEventListener("change", preferenceChanged); };
  }, []);
  return <div className="v2-opening" ref={opening} aria-hidden="true"><Image src="/brand/marde-logo-horizontal-light.png" alt="" width={1002} height={227} unoptimized /></div>;
}
