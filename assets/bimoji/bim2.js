document.addEventListener('DOMContentLoaded',function(){const scriptElements=document.getElementsByTagName('script');let scriptUrl='';for(let i=0;i<scriptElements.length;i++){const src=scriptElements[i].getAttribute('src');if(src&&src.includes('bim2.js')){scriptUrl=src.split('/').slice(0,-1).join('/');break;}}const jsonUrl=`${scriptUrl}/em/bim2.json`;fetch(jsonUrl).then(response=>response.json()).then(data=>{Object.keys(data).forEach(key=>{const keyData=data[key];const path=keyData.path;bimt=keyData.bimt;bims=keyData.bims;if(typeof keyData==='object'&&keyData!==null){document.querySelectorAll(`span.${key}, i.${key}`).forEach(element=>{const elementText=element.textContent.trim();const index=bimt.indexOf(elementText);if(index!==-1){const bimi=bims[index];const alignmentClass={'bim':'middle','bim-t':'top','bim-b':'baseline','bim-m':'bottom','bim-s':'sub'}[Array.from(element.classList).find(cls=>cls.startsWith('bim'))]||'';const bimg=`${scriptUrl}${path}${bimi}.png`;element.innerHTML=`<img src="${bimg}" alt="${elementText}" style="max-width:1.2em;height:auto;vertical-align:${alignmentClass};"/>`;}});}});}).catch(error=>console.error('Error loading emoticon data:',error));});
