"use client";
import { useState, type FormEvent } from "react";
import { site } from "../../lib/site-config";
import { Kicker, Arrow } from "./primitives";
import s from "./contact.module.css";

export function Contact(){
  const [status,setStatus]=useState<"idle"|"sending"|"sent"|"error">("idle");
  async function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    const form=event.currentTarget;
    if(!form.reportValidity()||status==="sending")return;
    setStatus("sending");
    try{const response=await fetch(`https://formspree.io/f/${site.formspreeFormId}`,{method:"POST",body:new FormData(form),headers:{Accept:"application/json"}});if(!response.ok)throw new Error("Submission failed");setStatus("sent");}catch{setStatus("error");}
  }
  return <div className={s.contact}><div className={s.intro}><Kicker>Contact MARDE</Kicker><h1>The next step starts<br /><span>with a conversation.</span></h1><p>We’re developing the system with real-world response workflows in mind. Bring your questions, experience, or perspective.</p><a href={`mailto:${site.email}`}>{site.email}<Arrow diagonal /></a><div className={s.note}><span>NEW JERSEY, USA</span><p>Pre-seed. Pre-prototype.<br />Open to the people who can help us build responsibly.</p></div></div>
      {status==="sent"?<div className={s.success} role="status"><span>MESSAGE RECEIVED</span><h2>Thank you for reaching out.</h2><p>Your message has been submitted to MARDE. The team will respond using the email address you provided.</p><button type="button" onClick={()=>setStatus("idle")}>Send another message<Arrow /></button></div>:<form className={s.form} onSubmit={submit} action={`https://formspree.io/f/${site.formspreeFormId}`} method="post">
        <label>I&apos;m contacting MARDE about<select name="inquiry_type" required defaultValue="EMS / Public Safety"><option>EMS / Public Safety</option><option>Investment / Advising</option><option>Engineering / Research</option><option>General</option></select></label>
        <div className={s.row}><label>Name<input name="name" autoComplete="name" required maxLength={120}/></label><label>Organization <span>(optional)</span><input name="organization" autoComplete="organization" maxLength={160}/></label></div>
        <label>Email<input name="email" type="email" autoComplete="email" required maxLength={254}/></label>
        <label>What would you like to discuss?<textarea name="message" rows={5} required maxLength={5000}/></label>
        <input type="text" name="_gotcha" className={s.honeypot} tabIndex={-1} aria-hidden="true" autoComplete="off"/>
        <input type="hidden" name="_subject" value="MARDE website inquiry"/>
        <p className={s.privacy}>Your message is processed through Formspree. <a href="/privacy/">Privacy policy</a></p>
        <button type="submit" disabled={status==="sending"}>{status==="sending"?"Sending…":"Send message"}<Arrow /></button>
        <p className={status==="error"?s.error:"sr-only"} role={status==="error"?"alert":"status"}>{status==="error"?"Your message could not be sent. Your entries are still here. Please try again, or email team@mardeinc.com.":status==="sending"?"Sending your message.":""}</p>
      </form>}
    </div>;
}
