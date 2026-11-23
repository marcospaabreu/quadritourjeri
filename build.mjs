import {mkdir,copyFile,cp} from 'node:fs/promises';
await mkdir(new URL('./dist/',import.meta.url),{recursive:true});
for(const file of ['index.html','styles.css','app.js']) await copyFile(new URL(file,import.meta.url),new URL('dist/'+file,import.meta.url));
await cp(new URL('./assets/',import.meta.url),new URL('./dist/assets/',import.meta.url),{recursive:true});
console.log('Site estático gerado em dist/.');
