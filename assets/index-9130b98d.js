(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d=document.querySelectorAll(".eleccion"),a=document.getElementById("escogido"),f=document.getElementById("pc"),m=document.getElementById("resultado"),c=document.getElementById("combate"),p=document.getElementById("ok"),y=document.getElementById("puntajeUno"),g=document.getElementById("puntajePC");let l=0,u=0;function P(t,n){return Math.floor(Math.random()*(n-t+1)+t)}d.forEach(t=>{t.addEventListener("click",()=>{const n=h(),s=t.innerText;a.innerText=s,f.innerText=n;const o=E(n,s);m.innerText=o,o==="Ganaste"?l++:o==="Perdiste"&&u++,y.innerText=l,g.innerText=u,c.style.display="flex",p.addEventListener("click",()=>{c.style.display="none"})})});function E(t,n){return t===n?"Empate":t==="Tijera"&&n==="Piedra"||t==="Piedra"&&n==="Papel"||t==="Papel"&&n==="Piedra"?"Ganaste":"Perdiste"}function h(){const t=P(1,3);return t===1?"Piedra":t===2?"Papel":"Tijera"}