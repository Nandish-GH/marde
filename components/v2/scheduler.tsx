"use client";
import { useState } from "react";
import { Dialog } from "radix-ui";
import { CalendarBlank } from "@phosphor-icons/react";
import s from "./profile.module.css";

export function Scheduler({url}:{url:string}){
  const [open,setOpen]=useState(false);
  return <Dialog.Root open={open} onOpenChange={setOpen}><Dialog.Trigger asChild><a href={url} target="_blank" rel="noopener noreferrer" onClick={event=>{event.preventDefault();setOpen(true);}}><span><CalendarBlank size={24} aria-hidden/></span>Schedule</a></Dialog.Trigger><Dialog.Portal><Dialog.Overlay className={s.overlay}/><Dialog.Content className={s.dialog} data-lenis-prevent>
    <div className={s.dialogTop}><div><Dialog.Title>Schedule with Nandish</Dialog.Title><Dialog.Description>Choose a time for a conversation with MARDE’s founder.</Dialog.Description></div><Dialog.Close className={s.close} aria-label="Close scheduling dialog">×</Dialog.Close></div>
    <a className={s.schedulerFallback} href={url} target="_blank" rel="noopener noreferrer">Open scheduling page ↗</a>
    <iframe src={url} title="Calendly scheduling with Nandish Panchal" className={s.scheduler} referrerPolicy="strict-origin-when-cross-origin"/>
  </Dialog.Content></Dialog.Portal></Dialog.Root>;
}
