"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { animate } from "animejs";

export function Motion() {
  const pathname = usePathname();
  const cursor = useRef<HTMLDivElement>(null);
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
        const animations: { cancel: ()=>unknown }[] = [];
        const observer = new IntersectionObserver(entries=>{
          entries.forEach(entry=>{
            if(!entry.isIntersecting) return;
            const el=entry.target as HTMLElement;
            observer.unobserve(el);
            // Animate on entry without hiding SSR content during hydration.
            const kind=el.dataset.reveal;
            if(kind==="stat") {
              const count=el.querySelector<HTMLElement>("[data-count]");
              if(count){const counter={value:0};const end=Number(count.dataset.count);animations.push(animate(counter,{value:end,duration:950,ease:"out(3)",onUpdate:()=>{count.textContent=counter.value.toFixed(1);},onComplete:()=>{count.textContent=count.dataset.count!;}}));}
            }
            animations.push(el.animate([{transform:`translateY(${kind==="system"?22:kind==="roadmap"?10:18}px)`,opacity:.55},{transform:"translateY(0)",opacity:1}],{duration:kind==="editorial"?750:600,easing:"cubic-bezier(.22,1,.36,1)"}));
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
export function OpeningReveal(){return <div className="v2-opening" aria-hidden="true"><span>MARDE</span><i>+</i></div>;}
