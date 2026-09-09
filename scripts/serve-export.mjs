import { createServer } from 'node:http';
import { readFile,stat } from 'node:fs/promises';
import path from 'node:path';
import { gzipSync } from 'node:zlib';
const root=path.resolve('out');
const types={'.html':'text/html','.txt':'text/plain','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.ico':'image/x-icon','.woff2':'font/woff2','.xml':'application/xml','.vcf':'text/vcard'};
createServer(async(req,res)=>{
 try{let file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(!file.startsWith(root+path.sep)&&file!==root){res.writeHead(403).end();return;}if((await stat(file)).isDirectory())file=path.join(file,'index.html');let body=await readFile(file);const headers={'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store','Vary':'Accept-Encoding'};if(/\bgzip\b/.test(req.headers['accept-encoding']||'')&&/\.(html|txt|js|css|svg|xml)$/.test(file)){body=gzipSync(body);headers['Content-Encoding']='gzip';}res.writeHead(200,headers).end(body);}catch{res.writeHead(404,{'Content-Type':'text/html'}).end(await readFile(path.join(root,'404.html')));}
}).listen(3001,'127.0.0.1',()=>console.log('Static export: http://127.0.0.1:3001'));
