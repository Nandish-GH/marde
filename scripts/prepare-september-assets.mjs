import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
await mkdir('public/graphics',{recursive:true});
for(const type of ['air','ground','modules']) {
  for(const width of [640,1440]) await sharp(`tmp/product-studies/${type}.png`).resize({width}).webp({quality:88,effort:6}).toFile(`public/graphics/${type}-study-${width}.webp`);
}
const portrait='C:/Users/mihir/Downloads/Untitled design (4).png';
for(const path of [portrait,'public/team/nandish-panchal.webp']) { const {width,height}=await sharp(path).metadata(); console.log({path,width,height}); }
for(const width of [480,800]) await sharp(portrait).resize(width,Math.round(width*1.25),{fit:'cover',position:'centre'}).webp({quality:88}).toFile(`public/team/nandish-editorial-${width}.webp`);
await sharp(portrait).extract({left:130,top:230,width:820,height:820}).resize(440).webp({quality:88}).toFile('public/team/nandish-team.webp');
// Purpose-drawn small-size brand glyph; no fragile full-wordmark details.
const glyph=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#111418"/><g fill="none" stroke="#f3f2ed" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 15h18m10 0h18M18 11v16l14 8 14-8V11"/><path d="M27 27h10l-5 8z" fill="#f3f2ed"/></g><path d="M21 38h22v18H21z" fill="#f3f2ed"/><path d="M29 41h6v4h4v6h-4v4h-6v-4h-4v-6h4z" fill="#111418"/></svg>`;
await writeFile('public/brand/marde-favicon.svg',glyph);
await sharp(Buffer.from(glyph)).resize(512).png().toFile('app/icon.png');
await sharp(Buffer.from(glyph)).resize(180).png().toFile('app/apple-icon.png');
const sizes=[16,32,48];
const images=await Promise.all(sizes.map(size=>sharp(Buffer.from(glyph)).resize(size).png().toBuffer()));
const header=Buffer.alloc(6+16*sizes.length);header.writeUInt16LE(1,2);header.writeUInt16LE(sizes.length,4);
let offset=header.length;
images.forEach((data,index)=>{const p=6+16*index;header[p]=sizes[index];header[p+1]=sizes[index];header.writeUInt16LE(1,p+4);header.writeUInt16LE(32,p+6);header.writeUInt32LE(data.length,p+8);header.writeUInt32LE(offset,p+12);offset+=data.length;});
await writeFile('app/favicon.ico',Buffer.concat([header,...images]));
