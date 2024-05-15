import{S as Re,i as Ae,s as Le,k as E,q as P,a as R,l as T,m as b,r as F,c as A,h as m,n as u,b as q,G as f,u as $,H as oe,J as H,K as nt,e as tt,L as De,M as Y,N as Z,p as re,O as me,y as je,z as ze,A as Ue,g as Xe,d as He,B as Je}from"../chunks/index.0927561f.js";import{w as xt}from"../chunks/index.6d3ad0ca.js";const D=(e,t)=>{const l=e%t;return l<0?l+t:l},rn=e=>{if(isNaN(e))return"NaN";const t=String(+e).split("")??[],l=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"];let n="",o=3;for(;o--;)n=(l[+(t.pop()??"")+o*10]||"")+n;return Array(+t.join("")+1).join("M")+n},z=(e,t,l)=>{let n=0;for(let o=e;o<t;o++)n+=l[D(o,l.length)];return n},an=e=>{const t=e%10,l=e%100;return t===1&&l!==11?e+"st":t===2&&l!==12?e+"nd":t===3&&l!==13?e+"rd":e+"th"},v=[{sharpNote:"C",flatNote:"C",defaultOctaveFrequency:261.63},{sharpNote:"C#",flatNote:"D♭",preferSharp:!0,defaultOctaveFrequency:277.18},{sharpNote:"D",flatNote:"D",defaultOctaveFrequency:293.66},{sharpNote:"D#",flatNote:"E♭",preferSharp:!1,defaultOctaveFrequency:311.13},{sharpNote:"E",flatNote:"E",defaultOctaveFrequency:329.63},{sharpNote:"F",flatNote:"F",defaultOctaveFrequency:349.23},{sharpNote:"F#",flatNote:"G♭",preferSharp:!0,defaultOctaveFrequency:185},{sharpNote:"G",flatNote:"G",defaultOctaveFrequency:196},{sharpNote:"G#",flatNote:"A♭",preferSharp:!1,defaultOctaveFrequency:207.65},{sharpNote:"A",flatNote:"A",defaultOctaveFrequency:220},{sharpNote:"A#",flatNote:"B♭",preferSharp:!1,defaultOctaveFrequency:233.08},{sharpNote:"A",flatNote:"B",defaultOctaveFrequency:246.94}],X=[2,2,1,2,2,2,1],ae=[2,2,3,2,3],_e=[3,2,1,1,3,2],xe=[1,256/243,9/8,32/27,81/64,4/3,1024/729,3/2,128/81,27/16,16/9,243/128],bt={pentatonic:[.3,.05,.05,.2,.1],diatonic:[.3,.05,.15,.05,.075,.05,.03],hexatonic:[.3,.075,.15,.075,.075,.05]},pt={pentatonic:[.5,.05,.15,.2,.05],diatonic:[.5,.02,.05,.1,.1,.05,.02],hexatonic:[.5,.02,.05,.1,.1,.05]},we=.25,sn=["perfect","major","minor","augmented","diminished"],en=(e,t)=>e===4&&t===7?"major":e===3&&t===7?"minor":e===3&&t===6?"diminished":"bizarre",Lt=(e,t)=>{const l=[{...t[e]},{...t[D(e+2,t.length)]},{...t[D(e+4,t.length)]}];return en(l[1].semitonesFromRoot,l[1].semitonesFromRoot+l[2].semitonesFromRoot)},It=e=>en(e.firstInterval.semitonesFromRoot,e.secondInterval.semitonesFromRoot),cn=(e,t)=>({firstInterval:{semitonesFromRoot:z(e,e+2,t)},secondInterval:{semitonesFromRoot:z(e,e+4,t)}}),tn=(e,t)=>{const l=[{...t[e]},{...t[D(e+2,t.length)]},{...t[D(e+4,t.length)]}];return l.forEach((n,o)=>{o<=0||n.semitonesFromRoot<l[o-1].semitonesFromRoot&&(n.semitonesFromRoot+=v.length)}),l},un=(e,t,l)=>{const n=rn(D(e+1,l.length+1)),o=e+t,a=It(cn(o,l));return a==="major"?n:a==="minor"?n.toLowerCase():a==="diminished"?`${n.toLowerCase()}°`:n},U=(e,t)=>{const l=[];for(let n=0;n<t.length;n++)l.push({semitonesFromRoot:z(e,e+n,t),label:un(n,e,t)});return l},fn=U(0,X),hn=U(1,X),dn=U(2,X),mn=U(3,X),_n=U(4,X),vn=U(5,X),gn=U(6,X),bn=[{name:"Ionian / Major",scale:fn,rootIntervalToIonian:z(0,0,X)},{name:"Dorian",scale:hn,rootIntervalToIonian:z(0,1,X)},{name:"Phrygian",scale:dn,rootIntervalToIonian:z(0,2,X)},{name:"Lydian",scale:mn,rootIntervalToIonian:z(0,3,X)},{name:"Mixolydian",scale:_n,rootIntervalToIonian:z(0,4,X)},{name:"Aeolian / Natural Minor",scale:vn,rootIntervalToIonian:z(0,5,X)},{name:"Locrian",scale:gn,rootIntervalToIonian:z(0,6,X)}],pn=U(0,ae),yn=U(1,ae),In=U(2,ae),kn=U(3,ae),Nn=U(4,ae),En=[{name:"Major",scale:pn,rootIntervalToIonian:z(0,0,ae)},{name:"Suspended / Egyptian",scale:yn,rootIntervalToIonian:z(0,1,ae)},{name:"Blues minor / Man Gong",scale:In,rootIntervalToIonian:z(0,2,ae)},{name:"Blues major",scale:kn,rootIntervalToIonian:z(0,3,ae)},{name:"Minor",scale:Nn,rootIntervalToIonian:z(0,4,ae)}],Tn=U(0,_e),Sn=U(1,_e);U(2,_e);U(3,_e);U(4,_e);U(5,_e);const Mn=[{name:"Minor",scale:Tn,rootIntervalToIonian:z(0,0,_e)},{name:"Major",scale:Sn,rootIntervalToIonian:z(0,1,_e)}],kt=[{label:"Diatonic",modes:bn,probabilityDistributions:{bass:pt.diatonic,melody:bt.diatonic}},{label:"Pentatonic",modes:En,probabilityDistributions:{bass:pt.pentatonic,melody:bt.pentatonic}},{label:"Hexatonic (blues)",modes:Mn,probabilityDistributions:{bass:pt.hexatonic,melody:bt.hexatonic}}],ee=e=>e.preferSharp?e.sharpNote:e.flatNote,Ot=(e,t,l)=>{let n=D(e-t,v.length);return n<0&&(n=n+v.length),l.some(o=>o.semitonesFromRoot===n)},nn=(e,t)=>{if(e===1)return"augmented";if([1,4,5].includes(t)){if(e===0)return"perfect";if(e===-1)return"diminished"}if(e===0)return"major";if(e===-1)return"minor";if(e===-2)return"diminished"},Bt=(e,t)=>`${e} ${an(t)}`,ln=(e,t)=>{if(e==="augmented")return`A${t}`;if(e==="perfect")return`P${t}`;if(e==="diminished")return`d${t}`;if(e==="major")return`M${t}`;if(e==="minor")return`m${t}`},Cn=(e,t)=>{const l=t+1,n=nn(e,l);if(n)return ln(n,l)},on=e=>{const t=[];let l=0;for(;l<X.length;){const n=l+1,o=e-z(0,l,X),a=nn(o,n);a&&t.push({intervalType:a,intervalN:n}),l++}return t},et=(e,t)=>{const l=e.semitonesFromRoot-z(0,t,X),n=Cn(l,t);if(n)return n;const o=on(e.semitonesFromRoot);for(const a of sn)for(const r of o)if(r.intervalType===a)return ln(r.intervalType,r.intervalN);return`${e.semitonesFromRoot}s`};function Pn(e){let t,l=ee(v[D(e[0],v.length)])+"",n,o,a;return{c(){t=E("h1"),n=P(l),o=R(),a=P(e[1]),this.h()},l(r){t=T(r,"H1",{class:!0});var s=b(t);n=F(s,l),o=A(s),a=F(s,e[1]),s.forEach(m),this.h()},h(){u(t,"class","svelte-1j0u2fz")},m(r,s){q(r,t,s),f(t,n),f(t,o),f(t,a)},p(r,[s]){s&1&&l!==(l=ee(v[D(r[0],v.length)])+"")&&$(n,l),s&2&&$(a,r[1])},i:oe,o:oe,d(r){r&&m(t)}}}function Fn(e,t,l){let{rootNoteIndex:n}=t,{selectedScaleName:o}=t;return e.$$set=a=>{"rootNoteIndex"in a&&l(0,n=a.rootNoteIndex),"selectedScaleName"in a&&l(1,o=a.selectedScaleName)},[n,o]}class wn extends Re{constructor(t){super(),Ae(this,t,Fn,Pn,Le,{rootNoteIndex:0,selectedScaleName:1})}}const Nt=xt({}),Et=xt({}),Oe=300,We=.75,Dn=12,Rn=1e-6,An={attackTime:.1,decayTime:.3,releaseTime:.5,maxSustainTime:.2,maxGain:.1,sustainGainRatio:.1,oscillatorType:"sine"},Ln=(e,t)=>{let l=1;for(;t<0;)t=t+xe.length,l=l*.5;for(;t>=xe.length;)t=t-xe.length,l=l*2;return l=l*xe[t],e.defaultOctaveFrequency*l},V=(e,t,l,n,o={})=>{if(n<l){console.log("Warning: note end time earlier than start time");return}const a={...An,...o};let{attackTime:r,decayTime:s}={...a};const{releaseTime:c,maxSustainTime:i,maxGain:h,sustainGainRatio:_,oscillatorType:S="triangle"}={...a},y=h*_,g=new AudioContext,M=g.createOscillator(),I=g.createGain(),p=g.createDynamicsCompressor();I.gain.value=.001,M.type=S,M.frequency.value=Ln(e,t),M.connect(I).connect(p).connect(g.destination);const L=n-l;r>L/(2*1e3)&&(r=L/(2*1e3)),s+r>L/1e3&&(s=L/1e3-r);let k=i??1e4;k>L/1e3-r-s&&(k=L/1e3-r-s),setTimeout(function(){const C=g.currentTime+r;I.gain.exponentialRampToValueAtTime(h,C),Nt.update(J=>({...J,[D(t,v.length)]:(J[`${D(t,v.length)}`]??0)+1})),M.start(),setTimeout(()=>{I.gain.exponentialRampToValueAtTime(y,g.currentTime+s),setTimeout(()=>{I.gain.exponentialRampToValueAtTime(Rn,g.currentTime+c),Nt.update(J=>{const x=Math.max((J[`${D(t,v.length)}`]??0)-1,0);return{...J,[D(t,v.length)]:x}}),setTimeout(function(){M.stop(),g.close()},c*1e3+2e3)},k*1e3)},r*1e3)},l)},On=(e,t,l,n=Oe,o=We)=>{const a=n*.5*o,r=n*.5-a,s=n*.5,c=tn(t,l);console.log("mapped scale notes",c),[...c].forEach((i,h)=>{V(v[e],i.semitonesFromRoot,h*s+r,h*s+r+a+s)}),[...c].forEach(i=>{V(v[e],i.semitonesFromRoot,(c.length+1)*s+r,(c.length+1)*s+r+(a+s)*2)})},Bn=(e,t,l=Oe,n=We)=>{const o=l*.5*n,a=l*.5-o,r=l*.5;[...[{semitonesFromRoot:0},e]].forEach((c,i)=>{V(v[t],c.semitonesFromRoot,i*r+a,i*r+a+o+r)})},qn=(e,t,l=Oe,n=We)=>{const o=l*.5*n,a=l*.5-o,r=l*.5;[...e].forEach((s,c)=>{c===0?V(v[t],s.semitonesFromRoot,c*2*r+a,c*2*r+a+o+r):(V(v[t],0,c*2*r+a,c*2*r+a+o),V(v[t],s.semitonesFromRoot,(c*2+1)*r+a,(c*2+1)*r+a+o))}),V(v[t],0,e.length*2*r+a,e.length*2*r+a+o),V(v[t],v.length,(e.length*2+1)*r+a,(e.length*2+1)*r+a+o)},Gn=(e,t,l=Oe,n=We)=>{const o=l*.5*n,a=l*.5-o,r=l*.5;V(v[t],e[0].semitonesFromRoot,a,r+a+o+r),[...e].forEach((s,c)=>{V(v[t],s.semitonesFromRoot,(c+2)*r+a,(c+2)*r+a+o+r)}),V(v[t],v.length,(e.length+2)*r+a,(e.length+2)*r+a+o),[...e].reverse().forEach((s,c)=>{V(v[t],s.semitonesFromRoot,(c+e.length+3)*r+a,(c+e.length+3)*r+a+o+r)})},Vn=(e,t,l=Oe,n=We)=>{const o=l*.5*n,a=l*.5-o,r=l*.5;V(v[t],0,a,a+r*(e.length*2+3),{maxSustainTime:r*(e.length*2+2),oscillatorType:"sine",sustainGainRatio:.5,maxGain:.0125}),[...e].forEach((s,c)=>{V(v[t],s.semitonesFromRoot,(c+2)*r+a,(c+2)*r+a+o+r)}),V(v[t],v.length,(e.length+2)*r+a,(e.length+2)*r+a+o),[...e].reverse().forEach((s,c)=>{V(v[t],s.semitonesFromRoot,(c+e.length+3)*r+a,(c+e.length+3)*r+a+o+r)})},jn=(e,t,l,n,o=Oe,a=Dn)=>{let r=0;for(;r<=a;)e.forEach((c,i)=>{if(!(i>=l.length)&&Math.random()<l[i]){const h=Math.random();let _=1;h>.8&&(_=2),h>.9&&(_=4),h>.95&&(_=6),h>.97&&(_=3),h>.99&&(_=8),V(v[t],c.semitonesFromRoot+v.length,o*r,o*r+o*we*_),r+=we}}),r+=we;let s=0;for(;s<=a;)e.forEach((c,i)=>{if(!(i>=n.length)&&Math.random()<n[i]){const h=Math.random();let _=1;h>.8&&(_=2),h>.9&&(_=4),h>.95&&(_=6),h>.97&&(_=3),h>.99&&(_=8),V(v[t],c.semitonesFromRoot,o*s,o*s+o*2*we*_),s+=2*we}}),s+=2*we};function zn(e){let t,l,n,o,a,r,s,c,i,h,_,S,y,g;return{c(){t=E("div"),l=E("button"),n=P("▶ Scale"),o=R(),a=E("button"),r=P("▶ Scale + Pedal"),s=R(),c=E("button"),i=P("▶ Scale + Drone"),h=R(),_=E("button"),S=P("▶ Jam")},l(M){t=T(M,"DIV",{});var I=b(t);l=T(I,"BUTTON",{});var p=b(l);n=F(p,"▶ Scale"),p.forEach(m),o=A(I),a=T(I,"BUTTON",{});var L=b(a);r=F(L,"▶ Scale + Pedal"),L.forEach(m),s=A(I),c=T(I,"BUTTON",{});var k=b(c);i=F(k,"▶ Scale + Drone"),k.forEach(m),h=A(I),_=T(I,"BUTTON",{});var C=b(_);S=F(C,"▶ Jam"),C.forEach(m),I.forEach(m)},m(M,I){q(M,t,I),f(t,l),f(l,n),f(t,o),f(t,a),f(a,r),f(t,s),f(t,c),f(c,i),f(t,h),f(t,_),f(_,S),y||(g=[H(l,"click",e[4]),H(a,"click",e[5]),H(c,"click",e[6]),H(_,"click",e[7])],y=!0)},p:oe,i:oe,o:oe,d(M){M&&m(t),y=!1,nt(g)}}}function Un(e,t,l){let{rootNoteIndex:n}=t,{bpm:o}=t,{selectedScaleNotes:a}=t,{selectedModesGroup:r}=t;const s=()=>{Gn(a,n,60*1e3/o)},c=()=>{qn(a,n,60*1e3/o)},i=()=>{Vn(a,n,60*1e3/o)},h=()=>{jn(a,n,r.probabilityDistributions.melody,r.probabilityDistributions.bass,60*1e3/o)};return e.$$set=_=>{"rootNoteIndex"in _&&l(0,n=_.rootNoteIndex),"bpm"in _&&l(1,o=_.bpm),"selectedScaleNotes"in _&&l(2,a=_.selectedScaleNotes),"selectedModesGroup"in _&&l(3,r=_.selectedModesGroup)},[n,o,a,r,s,c,i,h]}class Xn extends Re{constructor(t){super(),Ae(this,t,Un,zn,Le,{rootNoteIndex:0,bpm:1,selectedScaleNotes:2,selectedModesGroup:3})}}const qt=(e,t,l)=>({x:l.xCentre+l.radius*Math.cos((e.semitonesFromRoot+t)*2*Math.PI/v.length-.5*Math.PI),y:l.yCentre+l.radius*Math.sin((e.semitonesFromRoot+t)*2*Math.PI/v.length-.5*Math.PI)}),Tt=(e,t)=>({x:t.xCentre+t.radius*Math.cos(e*2*Math.PI/v.length-.5*Math.PI),y:t.yCentre+t.radius*Math.sin(e*2*Math.PI/v.length-.5*Math.PI)});function Gt(e,t,l){const n=e.slice();n[6]=t[l],n[9]=l;const o=Tt(n[9],n[0]);return n[7]=o,n}function Vt(e){let t,l,n,o,a,r,s,c,i,h=ee(e[6])+"",_,S,y,g,M,I;function p(){return e[4](e[9])}function L(...k){return e[5](e[9],...k)}return{c(){t=Y("g"),l=Y("circle"),a=Y("circle"),i=Y("text"),_=P(h),this.h()},l(k){t=Z(k,"g",{class:!0,tabindex:!0,"aria-label":!0,role:!0});var C=b(t);l=Z(C,"circle",{style:!0,cx:!0,cy:!0,r:!0,transform:!0,stroke:!0,fill:!0}),b(l).forEach(m),a=Z(C,"circle",{style:!0,cx:!0,cy:!0,r:!0,transform:!0,stroke:!0,fill:!0,opacity:!0,class:!0}),b(a).forEach(m),i=Z(C,"text",{x:!0,y:!0,class:!0,"text-anchor":!0,dy:!0});var J=b(i);_=F(J,h),J.forEach(m),C.forEach(m),this.h()},h(){re(l,"stroke-width","1.6871"),re(l,"stroke-miterlimit","10"),u(l,"cx",0),u(l,"cy",0),u(l,"r",30),u(l,"transform",n=`translate(${e[7].x} ${e[7].y})`),u(l,"stroke","transparent"),u(l,"fill",o=e[9]===e[1]?"yellow":"var(--base-background-color)"),re(a,"stroke-width","1.6871"),re(a,"stroke-miterlimit","10"),u(a,"cx",0),u(a,"cy",0),u(a,"r",30),u(a,"transform",r=`translate(${e[7].x} ${e[7].y})`),u(a,"stroke","transparent"),u(a,"fill",s=e[3][`${D(e[9]-e[1],v.length)}`]>0?"blue":"var(--base-background-color)"),u(a,"opacity",c=(e[3][`${D(e[9]-e[1],v.length)}`]??0)/3),u(a,"class","transitionAllQuick svelte-bfkdcb"),u(i,"x",S=e[7].x),u(i,"y",y=e[7].y),u(i,"class",g=me(`svgNoteName ${Ot(e[9],e[1],e[2])?"svgSelectedNoteName":""}`)+" svelte-bfkdcb"),u(i,"text-anchor","middle"),u(i,"dy",".3em"),u(t,"class","clickable"),u(t,"tabindex","0"),u(t,"aria-label",`Play ${ee(e[6])}`),u(t,"role","button")},m(k,C){q(k,t,C),f(t,l),f(t,a),f(t,i),f(i,_),M||(I=[H(t,"click",p),H(t,"keydown",L)],M=!0)},p(k,C){e=k,C&1&&n!==(n=`translate(${e[7].x} ${e[7].y})`)&&u(l,"transform",n),C&2&&o!==(o=e[9]===e[1]?"yellow":"var(--base-background-color)")&&u(l,"fill",o),C&1&&r!==(r=`translate(${e[7].x} ${e[7].y})`)&&u(a,"transform",r),C&10&&s!==(s=e[3][`${D(e[9]-e[1],v.length)}`]>0?"blue":"var(--base-background-color)")&&u(a,"fill",s),C&10&&c!==(c=(e[3][`${D(e[9]-e[1],v.length)}`]??0)/3)&&u(a,"opacity",c),C&1&&S!==(S=e[7].x)&&u(i,"x",S),C&1&&y!==(y=e[7].y)&&u(i,"y",y),C&6&&g!==(g=me(`svgNoteName ${Ot(e[9],e[1],e[2])?"svgSelectedNoteName":""}`)+" svelte-bfkdcb")&&u(i,"class",g)},d(k){k&&m(t),M=!1,nt(I)}}}function Hn(e){let t,l=[...v],n=[];for(let o=0;o<l.length;o+=1)n[o]=Vt(Gt(e,l,o));return{c(){for(let o=0;o<n.length;o+=1)n[o].c();t=tt()},l(o){for(let a=0;a<n.length;a+=1)n[a].l(o);t=tt()},m(o,a){for(let r=0;r<n.length;r+=1)n[r].m(o,a);q(o,t,a)},p(o,[a]){if(a&15){l=[...v];let r;for(r=0;r<l.length;r+=1){const s=Gt(o,l,r);n[r]?n[r].p(s,a):(n[r]=Vt(s),n[r].c(),n[r].m(t.parentNode,t))}for(;r<n.length;r+=1)n[r].d(1);n.length=l.length}},i:oe,o:oe,d(o){De(n,o),o&&m(t)}}}function Jn(e,t,l){let{notePositionCircle:n}=t,{rootNoteIndex:o}=t,{selectedScaleNotes:a}=t,r={};Nt.subscribe(i=>{l(3,r=i)});const s=i=>V(v[o],D(i-o,v.length),0,500),c=(i,h)=>h.key==="Enter"&&V(v[o],D(i-o,v.length),0,500);return e.$$set=i=>{"notePositionCircle"in i&&l(0,n=i.notePositionCircle),"rootNoteIndex"in i&&l(1,o=i.rootNoteIndex),"selectedScaleNotes"in i&&l(2,a=i.selectedScaleNotes)},[n,o,a,r,s,c]}class Wn extends Re{constructor(t){super(),Ae(this,t,Jn,Hn,Le,{notePositionCircle:0,rootNoteIndex:1,selectedScaleNotes:2})}}function jt(e,t,l){const n=e.slice();n[14]=t[l],n[19]=l;const o=n[3]?Tt(n[0].scale[D(n[19]-n[2].findIndex(s=>s===n[0]),n[0].scale.length)].semitonesFromRoot+n[1],n[4]):Tt(n[14].semitonesFromRoot+n[1],n[4]);n[15]=o;const a=qt(n[14],n[1],n[6]);n[16]=a;const r=qt(n[14],n[1],n[5]);return n[17]=r,n}function zt(e){let t,l,n,o,a,r,s,c,i=e[14].label+"",h,_,S,y,g,M,I,p=et(e[14],e[19])+"",L,k,C,J,x;function Be(){return e[10](e[19])}function qe(...O){return e[11](e[19],...O)}function se(){return e[12](e[14])}function ve(...O){return e[13](e[14],...O)}return{c(){t=Y("circle"),n=R(),o=Y("g"),a=Y("g"),r=Y("circle"),c=Y("text"),h=P(i),y=Y("g"),g=Y("circle"),I=Y("text"),L=P(p),this.h()},l(O){t=Z(O,"circle",{style:!0,cx:!0,cy:!0,r:!0,transform:!0,stroke:!0,fill:!0,class:!0}),b(t).forEach(m),n=A(O),o=Z(O,"g",{class:!0});var B=b(o);a=Z(B,"g",{class:!0,tabindex:!0,"aria-label":!0,role:!0});var ge=b(a);r=Z(ge,"circle",{style:!0,cx:!0,cy:!0,r:!0,transform:!0,stroke:!0,fill:!0}),b(r).forEach(m),c=Z(ge,"text",{x:!0,y:!0,"text-anchor":!0,dy:!0,transform:!0,class:!0});var ce=b(c);h=F(ce,i),ce.forEach(m),ge.forEach(m),y=Z(B,"g",{class:!0,tabindex:!0,"aria-label":!0,role:!0});var ue=b(y);g=Z(ue,"circle",{style:!0,cx:!0,cy:!0,r:!0,transform:!0,stroke:!0,fill:!0}),b(g).forEach(m),I=Z(ue,"text",{x:!0,y:!0,"text-anchor":!0,dy:!0,transform:!0,class:!0});var Ie=b(I);L=F(Ie,p),Ie.forEach(m),ue.forEach(m),B.forEach(m),this.h()},h(){re(t,"stroke-width","1.6871"),re(t,"stroke-miterlimit","10"),u(t,"cx",0),u(t,"cy",0),u(t,"r",30),u(t,"transform",l=`translate(${e[15].x} ${e[15].y})`),u(t,"stroke","black"),u(t,"fill","transparent"),u(t,"class","transitionAll"),re(r,"stroke-width","1.6871"),re(r,"stroke-miterlimit","10"),u(r,"cx",0),u(r,"cy",0),u(r,"r",30),u(r,"transform",s=`translate(${e[16].x} ${e[16].y})`),u(r,"stroke","transparent"),u(r,"fill","transparent"),u(c,"x",0),u(c,"y",0),u(c,"text-anchor","middle"),u(c,"dy",".3em"),u(c,"transform",_=`translate(${e[16].x} ${e[16].y})`),u(c,"class","svgNoteName scaleNote transitionAll"),u(a,"class","clickable"),u(a,"tabindex","0"),u(a,"aria-label",S=`Play ${v[D(e[1]+e[14].semitonesFromRoot,v.length)]} ${Lt(e[19],e[0].scale)} triad`),u(a,"role","button"),re(g,"stroke-width","1.6871"),re(g,"stroke-miterlimit","10"),u(g,"cx",0),u(g,"cy",0),u(g,"r",30),u(g,"transform",M=`translate(${e[17].x} ${e[17].y})`),u(g,"stroke","transparent"),u(g,"fill","transparent"),u(I,"x",0),u(I,"y",0),u(I,"text-anchor","middle"),u(I,"dy",".3em"),u(I,"transform",k=`translate(${e[17].x} ${e[17].y})`),u(I,"class","svgNoteName scaleNote transitionAll"),u(y,"class","clickable"),u(y,"tabindex","0"),u(y,"aria-label",C=`Play ${et(e[14],e[19])} interval`),u(y,"role","button"),u(o,"class","transitionNote")},m(O,B){q(O,t,B),q(O,n,B),q(O,o,B),f(o,a),f(a,r),f(a,c),f(c,h),f(o,y),f(y,g),f(y,I),f(I,L),J||(x=[H(a,"click",Be),H(a,"keydown",qe),H(y,"click",se),H(y,"keydown",ve)],J=!0)},p(O,B){e=O,B&31&&l!==(l=`translate(${e[15].x} ${e[15].y})`)&&u(t,"transform",l),B&67&&s!==(s=`translate(${e[16].x} ${e[16].y})`)&&u(r,"transform",s),B&1&&i!==(i=e[14].label+"")&&$(h,i),B&67&&_!==(_=`translate(${e[16].x} ${e[16].y})`)&&u(c,"transform",_),B&3&&S!==(S=`Play ${v[D(e[1]+e[14].semitonesFromRoot,v.length)]} ${Lt(e[19],e[0].scale)} triad`)&&u(a,"aria-label",S),B&35&&M!==(M=`translate(${e[17].x} ${e[17].y})`)&&u(g,"transform",M),B&1&&p!==(p=et(e[14],e[19])+"")&&$(L,p),B&35&&k!==(k=`translate(${e[17].x} ${e[17].y})`)&&u(I,"transform",k),B&1&&C!==(C=`Play ${et(e[14],e[19])} interval`)&&u(y,"aria-label",C)},d(O){O&&m(t),O&&m(n),O&&m(o),J=!1,nt(x)}}}function Kn(e){let t,l=[...e[0].scale],n=[];for(let o=0;o<l.length;o+=1)n[o]=zt(jt(e,l,o));return{c(){for(let o=0;o<n.length;o+=1)n[o].c();t=tt()},l(o){for(let a=0;a<n.length;a+=1)n[a].l(o);t=tt()},m(o,a){for(let r=0;r<n.length;r+=1)n[r].m(o,a);q(o,t,a)},p(o,[a]){if(a&511){l=[...o[0].scale];let r;for(r=0;r<l.length;r+=1){const s=jt(o,l,r);n[r]?n[r].p(s,a):(n[r]=zt(s),n[r].c(),n[r].m(t.parentNode,t))}for(;r<n.length;r+=1)n[r].d(1);n.length=l.length}},i:oe,o:oe,d(o){De(n,o),o&&m(t)}}}function Qn(e,t,l){let{selectedScale:n}=t,{rootNoteIndex:o}=t,{availableModes:a}=t,{isEquivalentModing:r}=t,{notePositionCircle:s}=t,{intervalPositionCircle:c}=t,{scaleNotePositionCircle:i}=t,{bpm:h}=t;const _=p=>{Bn(p,o,60*1e3/h),Et.update(L=>({interval:p}))},S=p=>{On(o,p,n.scale,60*1e3/h),Et.update(L=>{const k=tn(p,n.scale);return{triad:{rootNote:v[D(o+n.scale[p].semitonesFromRoot,v.length)],firstInterval:{semitonesFromRoot:k[1].semitonesFromRoot-k[0].semitonesFromRoot},secondInterval:{semitonesFromRoot:k[2].semitonesFromRoot-k[0].semitonesFromRoot}}}})},y=p=>S(p),g=(p,L)=>L.key==="Enter"&&S(p),M=p=>_(p),I=(p,L)=>L.key==="Enter"&&_(p);return e.$$set=p=>{"selectedScale"in p&&l(0,n=p.selectedScale),"rootNoteIndex"in p&&l(1,o=p.rootNoteIndex),"availableModes"in p&&l(2,a=p.availableModes),"isEquivalentModing"in p&&l(3,r=p.isEquivalentModing),"notePositionCircle"in p&&l(4,s=p.notePositionCircle),"intervalPositionCircle"in p&&l(5,c=p.intervalPositionCircle),"scaleNotePositionCircle"in p&&l(6,i=p.scaleNotePositionCircle),"bpm"in p&&l(9,h=p.bpm)},[n,o,a,r,s,c,i,_,S,h,y,g,M,I]}class Yn extends Re{constructor(t){super(),Ae(this,t,Qn,Kn,Le,{selectedScale:0,rootNoteIndex:1,availableModes:2,isEquivalentModing:3,notePositionCircle:4,intervalPositionCircle:5,scaleNotePositionCircle:6,bpm:9})}}function Ut(e,t,l){const n=e.slice();return n[2]=t[l],n}function yt(e){const t=e.slice(),l=on(t[0].interval.semitonesFromRoot);return t[1]=l,t}function Xt(e){let t,l,n,o,a=e[1],r=[];for(let s=0;s<a.length;s+=1)r[s]=Ht(Ut(e,a,s));return{c(){t=E("h3"),l=P("Equivalent intervals:"),n=R(),o=E("div");for(let s=0;s<r.length;s+=1)r[s].c()},l(s){t=T(s,"H3",{});var c=b(t);l=F(c,"Equivalent intervals:"),c.forEach(m),n=A(s),o=T(s,"DIV",{});var i=b(o);for(let h=0;h<r.length;h+=1)r[h].l(i);i.forEach(m)},m(s,c){q(s,t,c),f(t,l),q(s,n,c),q(s,o,c);for(let i=0;i<r.length;i+=1)r[i].m(o,null)},p(s,c){if(c&1){a=s[1];let i;for(i=0;i<a.length;i+=1){const h=Ut(s,a,i);r[i]?r[i].p(h,c):(r[i]=Ht(h),r[i].c(),r[i].m(o,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=a.length}},d(s){s&&m(t),s&&m(n),s&&m(o),De(r,s)}}}function Ht(e){let t,l=Bt(e[2].intervalType,e[2].intervalN)+"",n,o;return{c(){t=E("span"),n=P(l),o=P("; ")},l(a){t=T(a,"SPAN",{});var r=b(t);n=F(r,l),o=F(r,"; "),r.forEach(m)},m(a,r){q(a,t,r),f(t,n),f(t,o)},p(a,r){r&1&&l!==(l=Bt(a[2].intervalType,a[2].intervalN)+"")&&$(n,l)},d(a){a&&m(t)}}}function Jt(e){let t,l,n,o,a=ee(e[0].triad.rootNote)+"",r,s,c=It(e[0].triad)+"",i;return{c(){t=E("h3"),l=P("Triad:"),n=R(),o=E("div"),r=P(a),s=R(),i=P(c)},l(h){t=T(h,"H3",{});var _=b(t);l=F(_,"Triad:"),_.forEach(m),n=A(h),o=T(h,"DIV",{});var S=b(o);r=F(S,a),s=A(S),i=F(S,c),S.forEach(m)},m(h,_){q(h,t,_),f(t,l),q(h,n,_),q(h,o,_),f(o,r),f(o,s),f(o,i)},p(h,_){_&1&&a!==(a=ee(h[0].triad.rootNote)+"")&&$(r,a),_&1&&c!==(c=It(h[0].triad)+"")&&$(i,c)},d(h){h&&m(t),h&&m(n),h&&m(o)}}}function Zn(e){let t,l,n=e[0].interval&&Xt(yt(e)),o=e[0].triad&&Jt(e);return{c(){t=E("div"),n&&n.c(),l=R(),o&&o.c(),this.h()},l(a){t=T(a,"DIV",{class:!0});var r=b(t);n&&n.l(r),l=A(r),o&&o.l(r),r.forEach(m),this.h()},h(){u(t,"class","focussedItemDetails svelte-1upnrae")},m(a,r){q(a,t,r),n&&n.m(t,null),f(t,l),o&&o.m(t,null)},p(a,[r]){a[0].interval?n?n.p(yt(a),r):(n=Xt(yt(a)),n.c(),n.m(t,l)):n&&(n.d(1),n=null),a[0].triad?o?o.p(a,r):(o=Jt(a),o.c(),o.m(t,null)):o&&(o.d(1),o=null)},i:oe,o:oe,d(a){a&&m(t),n&&n.d(),o&&o.d()}}}function $n(e,t,l){let n={};return Et.subscribe(o=>{l(0,n={...o})}),[n]}class xn extends Re{constructor(t){super(),Ae(this,t,$n,Zn,Le,{})}}function Wt(e,t,l){const n=e.slice();n[16]=t[l];const o=n[1];return n[17]=o,n}function Kt(e,t,l){const n=e.slice();n[16]=t[l];const o=n[1]+n[16].rootIntervalToIonian-n[3].rootIntervalToIonian;return n[17]=o,n}function Qt(e,t,l){const n=e.slice();return n[22]=t[l],n}function Yt(e){let t,l=e[22].label+"",n,o,a,r,s;function c(){return e[11](e[22])}return{c(){t=E("button"),n=P(l),o=R(),this.h()},l(i){t=T(i,"BUTTON",{class:!0});var h=b(t);n=F(h,l),o=A(h),h.forEach(m),this.h()},h(){u(t,"class",a=me(e[2]===e[22]?"selectedTab":"")+" svelte-eln2zd")},m(i,h){q(i,t,h),f(t,n),f(t,o),r||(s=H(t,"click",c),r=!0)},p(i,h){e=i,h&4&&a!==(a=me(e[2]===e[22]?"selectedTab":"")+" svelte-eln2zd")&&u(t,"class",a)},d(i){i&&m(t),r=!1,s()}}}function Zt(e){let t,l,n=ee(v[D(e[17],v.length)])+"",o,a,r=e[16].name+"",s,c,i,h,_;function S(){return e[12](e[16],e[17])}return{c(){t=E("button"),l=E("span"),o=P(n),a=R(),s=P(r),c=R(),this.h()},l(y){t=T(y,"BUTTON",{class:!0});var g=b(t);l=T(g,"SPAN",{class:!0});var M=b(l);o=F(M,n),M.forEach(m),a=A(g),s=F(g,r),c=A(g),g.forEach(m),this.h()},h(){u(l,"class","noteLabel svelte-eln2zd"),u(t,"class",i=me(e[16]===e[3]&&e[0]?"selectedTab":"")+" svelte-eln2zd")},m(y,g){q(y,t,g),f(t,l),f(l,o),f(t,a),f(t,s),f(t,c),h||(_=H(t,"click",S),h=!0)},p(y,g){e=y,g&14&&n!==(n=ee(v[D(e[17],v.length)])+"")&&$(o,n),g&4&&r!==(r=e[16].name+"")&&$(s,r),g&13&&i!==(i=me(e[16]===e[3]&&e[0]?"selectedTab":"")+" svelte-eln2zd")&&u(t,"class",i)},d(y){y&&m(t),h=!1,_()}}}function $t(e){let t,l,n=ee(v[D(e[17],v.length)])+"",o,a,r=e[16].name+"",s,c,i,h,_;function S(){return e[13](e[16],e[17])}return{c(){t=E("button"),l=E("span"),o=P(n),a=R(),s=P(r),c=R(),this.h()},l(y){t=T(y,"BUTTON",{class:!0});var g=b(t);l=T(g,"SPAN",{class:!0});var M=b(l);o=F(M,n),M.forEach(m),a=A(g),s=F(g,r),c=A(g),g.forEach(m),this.h()},h(){u(l,"class","noteLabel svelte-eln2zd"),u(t,"class",i=me(e[16]===e[3]&&!e[0]?"selectedTab":"")+" svelte-eln2zd")},m(y,g){q(y,t,g),f(t,l),f(l,o),f(t,a),f(t,s),f(t,c),h||(_=H(t,"click",S),h=!0)},p(y,g){e=y,g&2&&n!==(n=ee(v[D(e[17],v.length)])+"")&&$(o,n),g&4&&r!==(r=e[16].name+"")&&$(s,r),g&13&&i!==(i=me(e[16]===e[3]&&!e[0]?"selectedTab":"")+" svelte-eln2zd")&&u(t,"class",i)},d(y){y&&m(t),h=!1,_()}}}function el(e){let t,l,n,o,a,r,s,c,i,h,_,S,y,g,M,I=ee(v[D(e[1],v.length)])+"",p,L,k,C,J,x,Be,qe,se,ve,O,B,ge,ce=e[2].label+"",ue,Ie,lt,ot,Ge,fe,Ve,rt,at,st,ke,he,it,Ne,Ee,ie,Te,ct,ut,be,Ke,ft,ht,Se,dt,mt,pe,ye,_t,St;t=new wn({props:{rootNoteIndex:e[1],selectedScaleName:e[3].name}}),r=new Yn({props:{selectedScale:e[3],bpm:e[4],rootNoteIndex:e[1],intervalPositionCircle:e[8],scaleNotePositionCircle:e[7],availableModes:e[2].modes,isEquivalentModing:e[0],notePositionCircle:e[6]}}),s=new Wn({props:{notePositionCircle:e[6],rootNoteIndex:e[1],selectedScaleNotes:e[3].scale}});let Me=kt,W=[];for(let d=0;d<Me.length;d+=1)W[d]=Yt(Qt(e,Me,d));let Ce=e[2].modes,K=[];for(let d=0;d<Ce.length;d+=1)K[d]=Zt(Kt(e,Ce,d));let Pe=e[2].modes,Q=[];for(let d=0;d<Pe.length;d+=1)Q[d]=$t(Wt(e,Pe,d));return he=new Xn({props:{bpm:e[4],rootNoteIndex:e[1],selectedModesGroup:e[2],selectedScaleNotes:e[3].scale}}),pe=new xn({}),{c(){je(t.$$.fragment),l=R(),n=E("div"),o=Y("svg"),a=Y("circle"),je(r.$$.fragment),je(s.$$.fragment),c=R(),i=E("div"),h=E("div"),_=P(`Root note
			`),S=E("button"),y=P("-"),g=R(),M=E("span"),p=P(I),L=R(),k=E("button"),C=P("+"),J=R(),x=E("div"),Be=P(`Mode type
			`);for(let d=0;d<W.length;d+=1)W[d].c();qe=R(),se=E("div"),ve=E("div"),O=E("div"),B=E("h2"),ge=P("Equivalent "),ue=P(ce),Ie=P(" modes"),lt=R();for(let d=0;d<K.length;d+=1)K[d].c();ot=R(),Ge=E("div"),fe=E("div"),Ve=E("h2"),rt=P("Modes by modification"),at=R();for(let d=0;d<Q.length;d+=1)Q[d].c();st=R(),ke=E("div"),je(he.$$.fragment),it=R(),Ne=E("div"),Ee=E("div"),ie=E("div"),Te=E("button"),ct=P("-"),ut=R(),be=E("span"),Ke=P(e[4]),ft=P(" bpm"),ht=R(),Se=E("button"),dt=P("+"),mt=R(),je(pe.$$.fragment),this.h()},l(d){ze(t.$$.fragment,d),l=A(d),n=T(d,"DIV",{class:!0,"data-sveltekit-preload-data":!0});var w=b(n);o=Z(w,"svg",{id:!0,viewBox:!0,xmlns:!0,class:!0});var G=b(o);a=Z(G,"circle",{cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0,fill:!0,class:!0}),b(a).forEach(m),ze(r.$$.fragment,G),ze(s.$$.fragment,G),G.forEach(m),c=A(w),i=T(w,"DIV",{class:!0});var j=b(i);h=T(j,"DIV",{});var te=b(h);_=F(te,`Root note
			`),S=T(te,"BUTTON",{});var de=b(S);y=F(de,"-"),de.forEach(m),g=A(te),M=T(te,"SPAN",{class:!0});var N=b(M);p=F(N,I),N.forEach(m),L=A(te),k=T(te,"BUTTON",{});var ne=b(k);C=F(ne,"+"),ne.forEach(m),te.forEach(m),J=A(j),x=T(j,"DIV",{});var vt=b(x);Be=F(vt,`Mode type
			`);for(let le=0;le<W.length;le+=1)W[le].l(vt);vt.forEach(m),qe=A(j),se=T(j,"DIV",{});var Qe=b(se);ve=T(Qe,"DIV",{});var Mt=b(ve);O=T(Mt,"DIV",{});var Ye=b(O);B=T(Ye,"H2",{});var Ze=b(B);ge=F(Ze,"Equivalent "),ue=F(Ze,ce),Ie=F(Ze," modes"),Ze.forEach(m),lt=A(Ye);for(let le=0;le<K.length;le+=1)K[le].l(Ye);Ye.forEach(m),Mt.forEach(m),ot=A(Qe),Ge=T(Qe,"DIV",{});var Ct=b(Ge);fe=T(Ct,"DIV",{});var $e=b(fe);Ve=T($e,"H2",{});var Pt=b(Ve);rt=F(Pt,"Modes by modification"),Pt.forEach(m),at=A($e);for(let le=0;le<Q.length;le+=1)Q[le].l($e);$e.forEach(m),Ct.forEach(m),Qe.forEach(m),st=A(j),ke=T(j,"DIV",{class:!0});var Ft=b(ke);ze(he.$$.fragment,Ft),Ft.forEach(m),it=A(j),Ne=T(j,"DIV",{class:!0});var wt=b(Ne);Ee=T(wt,"DIV",{class:!0});var Dt=b(Ee);ie=T(Dt,"DIV",{});var Fe=b(ie);Te=T(Fe,"BUTTON",{});var Rt=b(Te);ct=F(Rt,"-"),Rt.forEach(m),ut=A(Fe),be=T(Fe,"SPAN",{class:!0});var gt=b(be);Ke=F(gt,e[4]),ft=F(gt," bpm"),gt.forEach(m),ht=A(Fe),Se=T(Fe,"BUTTON",{});var At=b(Se);dt=F(At,"+"),At.forEach(m),Fe.forEach(m),Dt.forEach(m),wt.forEach(m),mt=A(j),ze(pe.$$.fragment,j),j.forEach(m),w.forEach(m),this.h()},h(){u(a,"cx",e[5].xCentre),u(a,"cy",e[5].yCentre),u(a,"r",e[5].radius),u(a,"stroke","grey"),u(a,"stroke-width",1),u(a,"fill","var(--base-background-color)"),u(a,"class","background svelte-eln2zd"),u(o,"id","boxOfNotes"),u(o,"viewBox","0 0 800 800"),u(o,"xmlns","http://www.w3.org/2000/svg"),u(o,"class","svelte-eln2zd"),u(M,"class","noteLabel svelte-eln2zd"),u(ke,"class","musicControls svelte-eln2zd"),u(be,"class","noteLabel svelte-eln2zd"),u(Ee,"class","svelte-eln2zd"),u(Ne,"class","musicControls svelte-eln2zd"),u(i,"class","boxOfButtons svelte-eln2zd"),u(n,"class","appContainer svelte-eln2zd"),u(n,"data-sveltekit-preload-data","hover")},m(d,w){Ue(t,d,w),q(d,l,w),q(d,n,w),f(n,o),f(o,a),Ue(r,o,null),Ue(s,o,null),f(n,c),f(n,i),f(i,h),f(h,_),f(h,S),f(S,y),f(h,g),f(h,M),f(M,p),f(h,L),f(h,k),f(k,C),f(i,J),f(i,x),f(x,Be);for(let G=0;G<W.length;G+=1)W[G].m(x,null);f(i,qe),f(i,se),f(se,ve),f(ve,O),f(O,B),f(B,ge),f(B,ue),f(B,Ie),f(O,lt);for(let G=0;G<K.length;G+=1)K[G].m(O,null);f(se,ot),f(se,Ge),f(Ge,fe),f(fe,Ve),f(Ve,rt),f(fe,at);for(let G=0;G<Q.length;G+=1)Q[G].m(fe,null);f(i,st),f(i,ke),Ue(he,ke,null),f(i,it),f(i,Ne),f(Ne,Ee),f(Ee,ie),f(ie,Te),f(Te,ct),f(ie,ut),f(ie,be),f(be,Ke),f(be,ft),f(ie,ht),f(ie,Se),f(Se,dt),f(i,mt),Ue(pe,i,null),ye=!0,_t||(St=[H(S,"click",e[9]),H(k,"click",e[10]),H(Te,"click",e[14]),H(Se,"click",e[15])],_t=!0)},p(d,[w]){const G={};w&2&&(G.rootNoteIndex=d[1]),w&8&&(G.selectedScaleName=d[3].name),t.$set(G);const j={};w&8&&(j.selectedScale=d[3]),w&16&&(j.bpm=d[4]),w&2&&(j.rootNoteIndex=d[1]),w&4&&(j.availableModes=d[2].modes),w&1&&(j.isEquivalentModing=d[0]),r.$set(j);const te={};if(w&2&&(te.rootNoteIndex=d[1]),w&8&&(te.selectedScaleNotes=d[3].scale),s.$set(te),(!ye||w&2)&&I!==(I=ee(v[D(d[1],v.length)])+"")&&$(p,I),w&12){Me=kt;let N;for(N=0;N<Me.length;N+=1){const ne=Qt(d,Me,N);W[N]?W[N].p(ne,w):(W[N]=Yt(ne),W[N].c(),W[N].m(x,null))}for(;N<W.length;N+=1)W[N].d(1);W.length=Me.length}if((!ye||w&4)&&ce!==(ce=d[2].label+"")&&$(ue,ce),w&15){Ce=d[2].modes;let N;for(N=0;N<Ce.length;N+=1){const ne=Kt(d,Ce,N);K[N]?K[N].p(ne,w):(K[N]=Zt(ne),K[N].c(),K[N].m(O,null))}for(;N<K.length;N+=1)K[N].d(1);K.length=Ce.length}if(w&15){Pe=d[2].modes;let N;for(N=0;N<Pe.length;N+=1){const ne=Wt(d,Pe,N);Q[N]?Q[N].p(ne,w):(Q[N]=$t(ne),Q[N].c(),Q[N].m(fe,null))}for(;N<Q.length;N+=1)Q[N].d(1);Q.length=Pe.length}const de={};w&16&&(de.bpm=d[4]),w&2&&(de.rootNoteIndex=d[1]),w&4&&(de.selectedModesGroup=d[2]),w&8&&(de.selectedScaleNotes=d[3].scale),he.$set(de),(!ye||w&16)&&$(Ke,d[4])},i(d){ye||(Xe(t.$$.fragment,d),Xe(r.$$.fragment,d),Xe(s.$$.fragment,d),Xe(he.$$.fragment,d),Xe(pe.$$.fragment,d),ye=!0)},o(d){He(t.$$.fragment,d),He(r.$$.fragment,d),He(s.$$.fragment,d),He(he.$$.fragment,d),He(pe.$$.fragment,d),ye=!1},d(d){Je(t,d),d&&m(l),d&&m(n),Je(r),Je(s),De(W,d),De(K,d),De(Q,d),Je(he),Je(pe),_t=!1,nt(St)}}}function tl(e,t,l){const n={xCentre:400,yCentre:400,radius:300};let o=!0;const a={...n,radius:n.radius},r={...n,radius:n.radius-70},s={...n,radius:n.radius+70};let c=0,i=kt[0],h=i.modes[0],_=70;return[o,c,i,h,_,n,a,r,s,()=>{l(1,c=c-1),c<0&&l(1,c=c+12)},()=>{l(1,c=c+1),c>=12&&l(1,c=c-12)},k=>{i!==k&&(l(2,i=k),l(3,h=k.modes[0]))},(k,C)=>{l(3,h=k),l(1,c=D(C,v.length)),l(0,o=!0)},(k,C)=>{l(3,h=k),l(1,c=D(C,v.length)),l(0,o=!1)},()=>{_>10&&l(4,_=_-20)},()=>{l(4,_=_+20)}]}class ol extends Re{constructor(t){super(),Ae(this,t,tl,el,Le,{})}}export{ol as default};
