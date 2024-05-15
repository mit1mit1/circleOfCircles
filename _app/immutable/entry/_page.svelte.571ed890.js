import{S as ol,i as al,s as rl,k as E,q as S,a as R,J as Z,e as qt,l as M,m as k,r as N,c as A,h as g,K as x,n as o,b as me,G as u,L as q,u as oe,H as Ut,M as He,N as Et,p as ce,O as be}from"../chunks/index.9fc21f1b.js";import{w as sl}from"../chunks/index.b3a1d362.js";const F=(e,t)=>{const l=e%t;return l<0?l+t:l},il=e=>{if(isNaN(e))return"NaN";const t=String(+e).split("")??[],l=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"];let n="",a=3;for(;a--;)n=(l[+(t.pop()??"")+a*10]||"")+n;return Array(+t.join("")+1).join("M")+n},d=[{sharpNote:"C",flatNote:"C",defaultOctaveFrequency:261.63},{sharpNote:"C#",flatNote:"D♭",preferSharp:!0,defaultOctaveFrequency:277.18},{sharpNote:"D",flatNote:"D",defaultOctaveFrequency:293.66},{sharpNote:"D#",flatNote:"E♭",preferSharp:!1,defaultOctaveFrequency:311.13},{sharpNote:"E",flatNote:"E",defaultOctaveFrequency:329.63},{sharpNote:"F",flatNote:"F",defaultOctaveFrequency:349.23},{sharpNote:"F#",flatNote:"G♭",preferSharp:!0,defaultOctaveFrequency:185},{sharpNote:"G",flatNote:"G",defaultOctaveFrequency:196},{sharpNote:"G#",flatNote:"A♭",preferSharp:!1,defaultOctaveFrequency:207.65},{sharpNote:"A",flatNote:"A",defaultOctaveFrequency:220},{sharpNote:"A#",flatNote:"B♭",preferSharp:!1,defaultOctaveFrequency:233.08},{sharpNote:"A",flatNote:"B",defaultOctaveFrequency:246.94}],U=[2,2,1,2,2,2,1],ue=[2,2,3,2,3],ye=[3,2,1,1,3,2],xe=[1,256/243,9/8,32/27,81/64,4/3,1024/729,3/2,128/81,27/16,16/9,243/128],yt={pentatonic:[.3,.05,.05,.2,.1],diatonic:[.3,.05,.15,.05,.075,.05,.03],hexatonic:[.3,.075,.15,.075,.075,.05]},kt={pentatonic:[.5,.05,.15,.2,.05],diatonic:[.5,.02,.05,.1,.1,.05,.02],hexatonic:[.5,.02,.05,.1,.1,.05]},qe=.25,$=(e,t,l)=>{let n=0;for(let a=e;a<t;a++)n+=l[F(a,l.length)];return n},nl=(e,t)=>e===4&&t===7?"major":e===3&&t===7?"minor":e===3&&t===6?"diminished":"bizarre",jt=(e,t,l)=>{const n=[{...l[t]},{...l[F(t+2,l.length)]},{...l[F(t+4,l.length)]}];return nl(n[1].semitonesFromRoot,n[1].semitonesFromRoot+n[2].semitonesFromRoot)},cl=e=>nl(e.firstInterval.semitonesFromRoot,e.secondInterval.semitonesFromRoot),ul=(e,t)=>({firstInterval:{semitonesFromRoot:$(e,e+2,t)},secondInterval:{semitonesFromRoot:$(e,e+4,t)}}),hl=(e,t,l)=>{const n=il(F(e+1,l.length+1)),a=e+t,s=cl(ul(a,l));return s==="major"?n:s==="minor"?n.toLowerCase():s==="diminished"?`${n.toLowerCase()}°`:n},G=(e,t)=>{const l=[];for(let n=0;n<t.length;n++)l.push({semitonesFromRoot:$(e,e+n,t),label:hl(n,e,t)});return l},Xt=(e,t)=>{const l=t+1;if(e===1)return`A${l}`;if([1,4,5].includes(l)){if(e===0)return`P${l}`;if(e===-1)return`d${l}`}if(e===0)return`M${l}`;if(e===-1)return`m${l}`;if(e===-2)return`d${l}`},et=(e,t)=>{const l=e.semitonesFromRoot-$(0,t,U),n=Xt(l,t);if(n)return n;let a=0;for(;a<U.length;){const s=e.semitonesFromRoot-$(0,a,U),r=Xt(s,a);if(r)return r;a++}return`${e.semitonesFromRoot}s`},fl=G(0,U),_l=G(1,U),ml=G(2,U),dl=G(3,U),gl=G(4,U),vl=G(5,U),pl=G(6,U),bl=[{name:"Ionian / Major",scale:fl,rootIntervalToIonian:$(0,0,U)},{name:"Dorian",scale:_l,rootIntervalToIonian:$(0,1,U)},{name:"Phrygian",scale:ml,rootIntervalToIonian:$(0,2,U)},{name:"Lydian",scale:dl,rootIntervalToIonian:$(0,3,U)},{name:"Mixolydian",scale:gl,rootIntervalToIonian:$(0,4,U)},{name:"Aeolian / Natural Minor",scale:vl,rootIntervalToIonian:$(0,5,U)},{name:"Locrian",scale:pl,rootIntervalToIonian:$(0,6,U)}],yl=G(0,ue),kl=G(1,ue),Tl=G(2,ue),Il=G(3,ue),El=G(4,ue),Ml=[{name:"Major",scale:yl,rootIntervalToIonian:$(0,0,ue)},{name:"Suspended / Egyptian",scale:kl,rootIntervalToIonian:$(0,1,ue)},{name:"Blues minor / Man Gong",scale:Tl,rootIntervalToIonian:$(0,2,ue)},{name:"Blues major",scale:Il,rootIntervalToIonian:$(0,3,ue)},{name:"Minor",scale:El,rootIntervalToIonian:$(0,4,ue)}],Fl=G(0,ye),wl=G(1,ye);G(2,ye);G(3,ye);G(4,ye);G(5,ye);const Sl=[{name:"Minor",scale:Fl,rootIntervalToIonian:$(0,0,ye)},{name:"Major",scale:wl,rootIntervalToIonian:$(0,1,ye)}],Tt=[{label:"Diatonic",modes:bl,probabilityDistributions:{bass:kt.diatonic,melody:yt.diatonic}},{label:"Pentatonic",modes:Ml,probabilityDistributions:{bass:kt.pentatonic,melody:yt.pentatonic}},{label:"Hexatonic (blues)",modes:Sl,probabilityDistributions:{bass:kt.hexatonic,melody:yt.hexatonic}}],It=sl({}),Ue=300,Je=.75,Nl=12,Cl=1e-6,Pl={attackTime:.1,decayTime:.3,releaseTime:.5,maxSustainTime:.2,maxGain:.1,sustainGainRatio:.1,oscillatorType:"sine"},Dl=(e,t)=>{let l=1;for(;t<0;)t=t+xe.length,l=l*.5;for(;t>=xe.length;)t=t-xe.length,l=l*2;return l=l*xe[t],e.defaultOctaveFrequency*l},B=(e,t,l,n,a={})=>{if(n<l){console.log("Warning: note end time earlier than start time");return}const s={...Pl,...a};let{attackTime:r,decayTime:h}={...s};const{releaseTime:_,maxSustainTime:c,maxGain:m,sustainGainRatio:b,oscillatorType:w="triangle"}={...s},p=m*b,v=new AudioContext,T=v.createOscillator(),y=v.createGain(),Y=v.createDynamicsCompressor();y.gain.value=.001,T.type=w,T.frequency.value=Dl(e,t),T.connect(y).connect(Y).connect(v.destination);const j=n-l;r>j/(2*1e3)&&(r=j/(2*1e3)),h+r>j/1e3&&(h=j/1e3-r);let X=c??1e4;X>j/1e3-r-h&&(X=j/1e3-r-h),setTimeout(function(){const ee=v.currentTime+r;y.gain.exponentialRampToValueAtTime(m,ee),It.update(W=>({...W,[F(t,d.length)]:(W[`${F(t,d.length)}`]??0)+1})),T.start(),setTimeout(()=>{y.gain.exponentialRampToValueAtTime(p,v.currentTime+h),setTimeout(()=>{y.gain.exponentialRampToValueAtTime(Cl,v.currentTime+_),It.update(W=>{const he=Math.max((W[`${F(t,d.length)}`]??0)-1,0);return console.log("removing",F(t,d.length),"from",W,"to give",he),{...W,[F(t,d.length)]:he}}),setTimeout(function(){T.stop(),v.close()},_*1e3+2e3)},X*1e3)},r*1e3)},l)},Ht=(e,t,l,n=Ue,a=Je)=>{const s=n*.5*a,r=n*.5-s,h=n*.5,_=[{...l[t]},{...l[F(t+2,l.length)]},{...l[F(t+4,l.length)]}];_.forEach((c,m)=>{m<=0||(console.log(c.semitonesFromRoot<_[m-1].semitonesFromRoot,c.semitonesFromRoot,_[m-1].semitonesFromRoot),c.semitonesFromRoot<_[m-1].semitonesFromRoot&&(c.semitonesFromRoot+=d.length))}),console.log("mapped scale notes",_),[..._].forEach((c,m)=>{B(d[e],c.semitonesFromRoot,m*h+r,m*h+r+s+h)}),[..._].forEach(c=>{B(d[e],c.semitonesFromRoot,(_.length+1)*h+r,(_.length+1)*h+r+(s+h)*2)})},Jt=(e,t,l=Ue,n=Je)=>{const a=l*.5*n,s=l*.5-a,r=l*.5;[...[{semitonesFromRoot:0},e]].forEach((_,c)=>{B(d[t],_.semitonesFromRoot,c*r+s,c*r+s+a+r)})},Rl=(e,t,l=Ue,n=Je)=>{const a=l*.5*n,s=l*.5-a,r=l*.5;[...e].forEach((h,_)=>{_===0?B(d[t],h.semitonesFromRoot,_*2*r+s,_*2*r+s+a+r):(B(d[t],0,_*2*r+s,_*2*r+s+a),B(d[t],h.semitonesFromRoot,(_*2+1)*r+s,(_*2+1)*r+s+a))}),B(d[t],0,e.length*2*r+s,e.length*2*r+s+a),B(d[t],d.length,(e.length*2+1)*r+s,(e.length*2+1)*r+s+a)},Al=(e,t,l=Ue,n=Je)=>{const a=l*.5*n,s=l*.5-a,r=l*.5;B(d[t],e[0].semitonesFromRoot,s,r+s+a+r),[...e].forEach((h,_)=>{B(d[t],h.semitonesFromRoot,(_+2)*r+s,(_+2)*r+s+a+r)}),B(d[t],d.length,(e.length+2)*r+s,(e.length+2)*r+s+a),[...e].reverse().forEach((h,_)=>{B(d[t],h.semitonesFromRoot,(_+e.length+3)*r+s,(_+e.length+3)*r+s+a+r)})},Ol=(e,t,l=Ue,n=Je)=>{const a=l*.5*n,s=l*.5-a,r=l*.5;B(d[t],0,s,s+r*(e.length*2+3),{maxSustainTime:r*(e.length*2+2),oscillatorType:"sine",sustainGainRatio:.5,maxGain:.0125}),[...e].forEach((h,_)=>{B(d[t],h.semitonesFromRoot,(_+2)*r+s,(_+2)*r+s+a+r)}),B(d[t],d.length,(e.length+2)*r+s,(e.length+2)*r+s+a),[...e].reverse().forEach((h,_)=>{B(d[t],h.semitonesFromRoot,(_+e.length+3)*r+s,(_+e.length+3)*r+s+a+r)})},Bl=(e,t,l,n,a=Ue,s=Nl)=>{let r=0;for(;r<=s;)e.forEach((_,c)=>{if(!(c>=l.length)&&Math.random()<l[c]){const m=Math.random();let b=1;m>.8&&(b=2),m>.9&&(b=4),m>.95&&(b=6),m>.97&&(b=3),m>.99&&(b=8),B(d[t],_.semitonesFromRoot+d.length,a*r,a*r+a*qe*b),r+=qe}}),r+=qe;let h=0;for(;h<=s;)e.forEach((_,c)=>{if(!(c>=n.length)&&Math.random()<n[c]){const m=Math.random();let b=1;m>.8&&(b=2),m>.9&&(b=4),m>.95&&(b=6),m>.97&&(b=3),m>.99&&(b=8),B(d[t],_.semitonesFromRoot,a*h,a*h+a*2*qe*b),h+=2*qe}}),h+=2*qe};function zt(e,t,l){const n=e.slice();n[31]=t[l];const a=n[2];return n[32]=a,n}function Kt(e,t,l){const n=e.slice();n[31]=t[l];const a=n[2]+n[31].rootIntervalToIonian-n[4].rootIntervalToIonian;return n[32]=a,n}function Qt(e,t,l){const n=e.slice();return n[37]=t[l],n}function Wt(e,t,l){const n=e.slice();n[40]=t[l],n[43]=l;const a=n[11](n[43],n[7]);return n[41]=a,n}function Yt(e,t,l){const n=e.slice();n[44]=t[l],n[48]=l;const a=n[1]?n[11](n[4].scale[F(n[48]-n[3].modes.findIndex(h=>h===n[4]),n[4].scale.length)].semitonesFromRoot+n[2],n[7]):n[11](n[44].semitonesFromRoot+n[2],n[7]);n[41]=a;const s=n[12](n[44],n[2],n[8]);n[45]=s;const r=n[12](n[44],n[2],n[9]);return n[46]=r,n}function Zt(e){let t,l,n,a,s,r,h,_=e[44].label+"",c,m,b,w,p,v,T,y=et(e[44],e[48])+"",Y,j,X,ee,W;function he(){return e[14](e[48])}function ae(...D){return e[15](e[48],...D)}function Ne(){return e[16](e[44])}function Ce(...D){return e[17](e[44],...D)}return{c(){t=Z("circle"),n=Z("g"),a=Z("g"),s=Z("circle"),h=Z("text"),c=S(_),w=Z("g"),p=Z("circle"),T=Z("text"),Y=S(y),this.h()},l(D){t=x(D,"circle",{style:!0,cx:!0,cy:!0,r:!0,transform:!0,stroke:!0,fill:!0,class:!0}),k(t).forEach(g),n=x(D,"g",{class:!0});var O=k(n);a=x(O,"g",{class:!0,tabindex:!0,"aria-label":!0,role:!0});var de=k(a);s=x(de,"circle",{style:!0,cx:!0,cy:!0,r:!0,transform:!0,stroke:!0,fill:!0}),k(s).forEach(g),h=x(de,"text",{x:!0,y:!0,"text-anchor":!0,dy:!0,transform:!0,class:!0});var ne=k(h);c=N(ne,_),ne.forEach(g),de.forEach(g),w=x(O,"g",{class:!0,tabindex:!0,"aria-label":!0,role:!0});var re=k(w);p=x(re,"circle",{style:!0,cx:!0,cy:!0,r:!0,transform:!0,stroke:!0,fill:!0}),k(p).forEach(g),T=x(re,"text",{x:!0,y:!0,"text-anchor":!0,dy:!0,transform:!0,class:!0});var te=k(T);Y=N(te,y),te.forEach(g),re.forEach(g),O.forEach(g),this.h()},h(){ce(t,"stroke-width","1.6871"),ce(t,"stroke-miterlimit","10"),o(t,"cx",0),o(t,"cy",0),o(t,"r",30),o(t,"transform",l=`translate(${e[41].x} ${e[41].y})`),o(t,"stroke","black"),o(t,"fill","transparent"),o(t,"class","transitionAll svelte-55eghf"),ce(s,"stroke-width","1.6871"),ce(s,"stroke-miterlimit","10"),o(s,"cx",0),o(s,"cy",0),o(s,"r",30),o(s,"transform",r=`translate(${e[45].x} ${e[45].y})`),o(s,"stroke","transparent"),o(s,"fill","transparent"),o(h,"x",0),o(h,"y",0),o(h,"text-anchor","middle"),o(h,"dy",".3em"),o(h,"transform",m=`translate(${e[45].x} ${e[45].y})`),o(h,"class","svgNoteName scaleNote transitionAll svelte-55eghf"),o(a,"class","clickable svelte-55eghf"),o(a,"tabindex","0"),o(a,"aria-label",b=`Play ${d[F(e[2]+e[44].semitonesFromRoot,d.length)]} ${jt(e[2],e[48],e[4].scale)} triad`),o(a,"role","button"),ce(p,"stroke-width","1.6871"),ce(p,"stroke-miterlimit","10"),o(p,"cx",0),o(p,"cy",0),o(p,"r",30),o(p,"transform",v=`translate(${e[46].x} ${e[46].y})`),o(p,"stroke","transparent"),o(p,"fill","transparent"),o(T,"x",0),o(T,"y",0),o(T,"text-anchor","middle"),o(T,"dy",".3em"),o(T,"transform",j=`translate(${e[46].x} ${e[46].y})`),o(T,"class","svgNoteName scaleNote transitionAll svelte-55eghf"),o(w,"class","clickable svelte-55eghf"),o(w,"tabindex","0"),o(w,"aria-label",X=`Play ${et(e[44],e[48])} interval`),o(w,"role","button"),o(n,"class","transitionNote")},m(D,O){me(D,t,O),me(D,n,O),u(n,a),u(a,s),u(a,h),u(h,c),u(n,w),u(w,p),u(w,T),u(T,Y),ee||(W=[q(a,"click",he),q(a,"keydown",ae),q(w,"click",Ne),q(w,"keydown",Ce)],ee=!0)},p(D,O){e=D,O[0]&30&&l!==(l=`translate(${e[41].x} ${e[41].y})`)&&o(t,"transform",l),O[0]&20&&r!==(r=`translate(${e[45].x} ${e[45].y})`)&&o(s,"transform",r),O[0]&16&&_!==(_=e[44].label+"")&&oe(c,_),O[0]&20&&m!==(m=`translate(${e[45].x} ${e[45].y})`)&&o(h,"transform",m),O[0]&20&&b!==(b=`Play ${d[F(e[2]+e[44].semitonesFromRoot,d.length)]} ${jt(e[2],e[48],e[4].scale)} triad`)&&o(a,"aria-label",b),O[0]&20&&v!==(v=`translate(${e[46].x} ${e[46].y})`)&&o(p,"transform",v),O[0]&16&&y!==(y=et(e[44],e[48])+"")&&oe(Y,y),O[0]&20&&j!==(j=`translate(${e[46].x} ${e[46].y})`)&&o(T,"transform",j),O[0]&16&&X!==(X=`Play ${et(e[44],e[48])} interval`)&&o(w,"aria-label",X)},d(D){D&&g(t),D&&g(n),ee=!1,Et(W)}}}function xt(e){let t,l,n,a,s,r,h,_=e[10](e[40])+"",c,m,b,w;function p(){return e[18](e[43])}function v(...T){return e[19](e[43],...T)}return{c(){t=Z("g"),l=Z("circle"),a=Z("circle"),h=Z("text"),c=S(_),this.h()},l(T){t=x(T,"g",{class:!0,tabindex:!0,"aria-label":!0,role:!0});var y=k(t);l=x(y,"circle",{style:!0,cx:!0,cy:!0,r:!0,transform:!0,stroke:!0,fill:!0}),k(l).forEach(g),a=x(y,"circle",{style:!0,cx:!0,cy:!0,r:!0,transform:!0,stroke:!0,fill:!0,opacity:!0,class:!0}),k(a).forEach(g),h=x(y,"text",{x:!0,y:!0,class:!0,"text-anchor":!0,dy:!0});var Y=k(h);c=N(Y,_),Y.forEach(g),y.forEach(g),this.h()},h(){ce(l,"stroke-width","1.6871"),ce(l,"stroke-miterlimit","10"),o(l,"cx",0),o(l,"cy",0),o(l,"r",30),o(l,"transform",`translate(${e[41].x} ${e[41].y})`),o(l,"stroke","transparent"),o(l,"fill",n=e[43]===e[2]?"yellow":"var(--base-background-color)"),ce(a,"stroke-width","1.6871"),ce(a,"stroke-miterlimit","10"),o(a,"cx",0),o(a,"cy",0),o(a,"r",30),o(a,"transform",`translate(${e[41].x} ${e[41].y})`),o(a,"stroke","transparent"),o(a,"fill",s=e[0][`${F(e[43]-e[2],d.length)}`]>0?"blue":"var(--base-background-color)"),o(a,"opacity",r=(e[0][`${F(e[43]-e[2],d.length)}`]??0)/3),o(a,"class","transitionAllQuick svelte-55eghf"),o(h,"x",e[41].x),o(h,"y",e[41].y),o(h,"class",m=be(`svgNoteName ${e[13](e[43],e[2],e[4].scale)?"svgSelectedNoteName":""}`)+" svelte-55eghf"),o(h,"text-anchor","middle"),o(h,"dy",".3em"),o(t,"class","clickable svelte-55eghf"),o(t,"tabindex","0"),o(t,"aria-label",`Play ${e[10](e[40])}`),o(t,"role","button")},m(T,y){me(T,t,y),u(t,l),u(t,a),u(t,h),u(h,c),b||(w=[q(t,"click",p),q(t,"keydown",v)],b=!0)},p(T,y){e=T,y[0]&4&&n!==(n=e[43]===e[2]?"yellow":"var(--base-background-color)")&&o(l,"fill",n),y[0]&5&&s!==(s=e[0][`${F(e[43]-e[2],d.length)}`]>0?"blue":"var(--base-background-color)")&&o(a,"fill",s),y[0]&5&&r!==(r=(e[0][`${F(e[43]-e[2],d.length)}`]??0)/3)&&o(a,"opacity",r),y[0]&20&&m!==(m=be(`svgNoteName ${e[13](e[43],e[2],e[4].scale)?"svgSelectedNoteName":""}`)+" svelte-55eghf")&&o(h,"class",m)},d(T){T&&g(t),b=!1,Et(w)}}}function el(e){let t,l=e[37].label+"",n,a,s,r,h;function _(){return e[22](e[37])}return{c(){t=E("button"),n=S(l),a=R(),this.h()},l(c){t=M(c,"BUTTON",{class:!0});var m=k(t);n=N(m,l),a=A(m),m.forEach(g),this.h()},h(){o(t,"class",s=be(e[3]===e[37]?"selectedTab":"")+" svelte-55eghf")},m(c,m){me(c,t,m),u(t,n),u(t,a),r||(h=q(t,"click",_),r=!0)},p(c,m){e=c,m[0]&8&&s!==(s=be(e[3]===e[37]?"selectedTab":"")+" svelte-55eghf")&&o(t,"class",s)},d(c){c&&g(t),r=!1,h()}}}function tl(e){let t,l,n=e[10](d[F(e[32],d.length)])+"",a,s,r=e[31].name+"",h,_,c,m,b;function w(){return e[23](e[31],e[32])}return{c(){t=E("button"),l=E("span"),a=S(n),s=R(),h=S(r),_=R(),this.h()},l(p){t=M(p,"BUTTON",{class:!0});var v=k(t);l=M(v,"SPAN",{class:!0});var T=k(l);a=N(T,n),T.forEach(g),s=A(v),h=N(v,r),_=A(v),v.forEach(g),this.h()},h(){o(l,"class","noteLabel svelte-55eghf"),o(t,"class",c=be(e[31]===e[4]&&e[1]?"selectedTab":"")+" svelte-55eghf")},m(p,v){me(p,t,v),u(t,l),u(l,a),u(t,s),u(t,h),u(t,_),m||(b=q(t,"click",w),m=!0)},p(p,v){e=p,v[0]&28&&n!==(n=e[10](d[F(e[32],d.length)])+"")&&oe(a,n),v[0]&8&&r!==(r=e[31].name+"")&&oe(h,r),v[0]&26&&c!==(c=be(e[31]===e[4]&&e[1]?"selectedTab":"")+" svelte-55eghf")&&o(t,"class",c)},d(p){p&&g(t),m=!1,b()}}}function ll(e){let t,l,n=e[10](d[F(e[32],d.length)])+"",a,s,r=e[31].name+"",h,_,c,m,b;function w(){return e[24](e[31],e[32])}return{c(){t=E("button"),l=E("span"),a=S(n),s=R(),h=S(r),_=R(),this.h()},l(p){t=M(p,"BUTTON",{class:!0});var v=k(t);l=M(v,"SPAN",{class:!0});var T=k(l);a=N(T,n),T.forEach(g),s=A(v),h=N(v,r),_=A(v),v.forEach(g),this.h()},h(){o(l,"class","noteLabel svelte-55eghf"),o(t,"class",c=be(e[31]===e[4]&&!e[1]?"selectedTab":"")+" svelte-55eghf")},m(p,v){me(p,t,v),u(t,l),u(l,a),u(t,s),u(t,h),u(t,_),m||(b=q(t,"click",w),m=!0)},p(p,v){e=p,v[0]&4&&n!==(n=e[10](d[F(e[32],d.length)])+"")&&oe(a,n),v[0]&8&&r!==(r=e[31].name+"")&&oe(h,r),v[0]&26&&c!==(c=be(e[31]===e[4]&&!e[1]?"selectedTab":"")+" svelte-55eghf")&&o(t,"class",c)},d(p){p&&g(t),m=!1,b()}}}function Ll(e){let t,l=e[10](d[F(e[2],d.length)])+"",n,a,s=e[4].name+"",r,h,_,c,m,b,w,p,v,T,y,Y,j,X,ee=e[10](d[F(e[2],d.length)])+"",W,he,ae,Ne,Ce,D,O,de,ne,re,te,fe,ze,I=e[3].label+"",C,se,ge,je,Xe,ve,Pe,tt,lt,nt,De,le,ke,ot,at,Te,rt,st,Ie,it,ct,Ee,ut,ht,Re,Ae,_e,Me,ft,_t,Fe,Ke,mt,dt,we,gt,vt,Mt,Oe=[...e[4].scale],H=[];for(let f=0;f<Oe.length;f+=1)H[f]=Zt(Yt(e,Oe,f));let Be=[...d],J=[];for(let f=0;f<Be.length;f+=1)J[f]=xt(Wt(e,Be,f));let Le=Tt,z=[];for(let f=0;f<Le.length;f+=1)z[f]=el(Qt(e,Le,f));let Ve=e[3].modes,K=[];for(let f=0;f<Ve.length;f+=1)K[f]=tl(Kt(e,Ve,f));let $e=e[3].modes,Q=[];for(let f=0;f<$e.length;f+=1)Q[f]=ll(zt(e,$e,f));return{c(){t=E("h1"),n=S(l),a=R(),r=S(s),h=R(),_=E("div"),c=Z("svg"),m=Z("circle");for(let f=0;f<H.length;f+=1)H[f].c();b=qt();for(let f=0;f<J.length;f+=1)J[f].c();w=R(),p=E("div"),v=E("div"),T=S(`Root note
			`),y=E("button"),Y=S("-"),j=R(),X=E("span"),W=S(ee),he=R(),ae=E("button"),Ne=S("+"),Ce=R(),D=E("div"),O=S(`Mode type
			`);for(let f=0;f<z.length;f+=1)z[f].c();de=R(),ne=E("div"),re=E("div"),te=E("div"),fe=E("h2"),ze=S("Equivalent "),C=S(I),se=S(" modes"),ge=R();for(let f=0;f<K.length;f+=1)K[f].c();je=R(),Xe=E("div"),ve=E("div"),Pe=E("h2"),tt=S("Modes by modification"),lt=R();for(let f=0;f<Q.length;f+=1)Q[f].c();nt=R(),De=E("div"),le=E("div"),ke=E("button"),ot=S("▶ Scale"),at=R(),Te=E("button"),rt=S("▶ Scale + Pedal"),st=R(),Ie=E("button"),it=S("▶ Scale + Drone"),ct=R(),Ee=E("button"),ut=S("▶ Jam"),ht=R(),Re=E("div"),Ae=E("div"),_e=E("div"),Me=E("button"),ft=S("-"),_t=R(),Fe=E("span"),Ke=S(e[5]),mt=S(" bpm"),dt=R(),we=E("button"),gt=S("+"),this.h()},l(f){t=M(f,"H1",{class:!0});var P=k(t);n=N(P,l),a=A(P),r=N(P,s),P.forEach(g),h=A(f),_=M(f,"DIV",{class:!0,"data-sveltekit-preload-data":!0});var i=k(_);c=x(i,"svg",{id:!0,viewBox:!0,xmlns:!0,class:!0});var L=k(c);m=x(L,"circle",{cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0,fill:!0,class:!0}),k(m).forEach(g);for(let V=0;V<H.length;V+=1)H[V].l(L);b=qt();for(let V=0;V<J.length;V+=1)J[V].l(L);L.forEach(g),w=A(i),p=M(i,"DIV",{class:!0});var ie=k(p);v=M(ie,"DIV",{});var Se=k(v);T=N(Se,`Root note
			`),y=M(Se,"BUTTON",{class:!0});var Ft=k(y);Y=N(Ft,"-"),Ft.forEach(g),j=A(Se),X=M(Se,"SPAN",{class:!0});var wt=k(X);W=N(wt,ee),wt.forEach(g),he=A(Se),ae=M(Se,"BUTTON",{class:!0});var St=k(ae);Ne=N(St,"+"),St.forEach(g),Se.forEach(g),Ce=A(ie),D=M(ie,"DIV",{});var pt=k(D);O=N(pt,`Mode type
			`);for(let V=0;V<z.length;V+=1)z[V].l(pt);pt.forEach(g),de=A(ie),ne=M(ie,"DIV",{});var Qe=k(ne);re=M(Qe,"DIV",{});var Nt=k(re);te=M(Nt,"DIV",{});var We=k(te);fe=M(We,"H2",{class:!0});var Ye=k(fe);ze=N(Ye,"Equivalent "),C=N(Ye,I),se=N(Ye," modes"),Ye.forEach(g),ge=A(We);for(let V=0;V<K.length;V+=1)K[V].l(We);We.forEach(g),Nt.forEach(g),je=A(Qe),Xe=M(Qe,"DIV",{});var Ct=k(Xe);ve=M(Ct,"DIV",{});var Ze=k(ve);Pe=M(Ze,"H2",{class:!0});var Pt=k(Pe);tt=N(Pt,"Modes by modification"),Pt.forEach(g),lt=A(Ze);for(let V=0;V<Q.length;V+=1)Q[V].l(Ze);Ze.forEach(g),Ct.forEach(g),Qe.forEach(g),nt=A(ie),De=M(ie,"DIV",{class:!0});var Dt=k(De);le=M(Dt,"DIV",{class:!0});var pe=k(le);ke=M(pe,"BUTTON",{class:!0});var Rt=k(ke);ot=N(Rt,"▶ Scale"),Rt.forEach(g),at=A(pe),Te=M(pe,"BUTTON",{class:!0});var At=k(Te);rt=N(At,"▶ Scale + Pedal"),At.forEach(g),st=A(pe),Ie=M(pe,"BUTTON",{class:!0});var Ot=k(Ie);it=N(Ot,"▶ Scale + Drone"),Ot.forEach(g),ct=A(pe),Ee=M(pe,"BUTTON",{class:!0});var Bt=k(Ee);ut=N(Bt,"▶ Jam"),Bt.forEach(g),pe.forEach(g),Dt.forEach(g),ht=A(ie),Re=M(ie,"DIV",{class:!0});var Lt=k(Re);Ae=M(Lt,"DIV",{class:!0});var Vt=k(Ae);_e=M(Vt,"DIV",{});var Ge=k(_e);Me=M(Ge,"BUTTON",{class:!0});var $t=k(Me);ft=N($t,"-"),$t.forEach(g),_t=A(Ge),Fe=M(Ge,"SPAN",{class:!0});var bt=k(Fe);Ke=N(bt,e[5]),mt=N(bt," bpm"),bt.forEach(g),dt=A(Ge),we=M(Ge,"BUTTON",{class:!0});var Gt=k(we);gt=N(Gt,"+"),Gt.forEach(g),Ge.forEach(g),Vt.forEach(g),Lt.forEach(g),ie.forEach(g),i.forEach(g),this.h()},h(){o(t,"class","svelte-55eghf"),o(m,"cx",e[6].xCentre),o(m,"cy",e[6].yCentre),o(m,"r",e[6].radius),o(m,"stroke","grey"),o(m,"stroke-width",1),o(m,"fill","var(--base-background-color)"),o(m,"class","background svelte-55eghf"),o(c,"id","boxOfNotes"),o(c,"viewBox","0 0 800 800"),o(c,"xmlns","http://www.w3.org/2000/svg"),o(c,"class","svelte-55eghf"),o(y,"class","svelte-55eghf"),o(X,"class","noteLabel svelte-55eghf"),o(ae,"class","svelte-55eghf"),o(fe,"class","svelte-55eghf"),o(Pe,"class","svelte-55eghf"),o(ke,"class","svelte-55eghf"),o(Te,"class","svelte-55eghf"),o(Ie,"class","svelte-55eghf"),o(Ee,"class","svelte-55eghf"),o(le,"class","svelte-55eghf"),o(De,"class","musicControls svelte-55eghf"),o(Me,"class","svelte-55eghf"),o(Fe,"class","noteLabel svelte-55eghf"),o(we,"class","svelte-55eghf"),o(Ae,"class","svelte-55eghf"),o(Re,"class","musicControls svelte-55eghf"),o(p,"class","boxOfButtons svelte-55eghf"),o(_,"class","appContainer svelte-55eghf"),o(_,"data-sveltekit-preload-data","hover")},m(f,P){me(f,t,P),u(t,n),u(t,a),u(t,r),me(f,h,P),me(f,_,P),u(_,c),u(c,m);for(let i=0;i<H.length;i+=1)H[i].m(c,null);u(c,b);for(let i=0;i<J.length;i+=1)J[i].m(c,null);u(_,w),u(_,p),u(p,v),u(v,T),u(v,y),u(y,Y),u(v,j),u(v,X),u(X,W),u(v,he),u(v,ae),u(ae,Ne),u(p,Ce),u(p,D),u(D,O);for(let i=0;i<z.length;i+=1)z[i].m(D,null);u(p,de),u(p,ne),u(ne,re),u(re,te),u(te,fe),u(fe,ze),u(fe,C),u(fe,se),u(te,ge);for(let i=0;i<K.length;i+=1)K[i].m(te,null);u(ne,je),u(ne,Xe),u(Xe,ve),u(ve,Pe),u(Pe,tt),u(ve,lt);for(let i=0;i<Q.length;i+=1)Q[i].m(ve,null);u(p,nt),u(p,De),u(De,le),u(le,ke),u(ke,ot),u(le,at),u(le,Te),u(Te,rt),u(le,st),u(le,Ie),u(Ie,it),u(le,ct),u(le,Ee),u(Ee,ut),u(p,ht),u(p,Re),u(Re,Ae),u(Ae,_e),u(_e,Me),u(Me,ft),u(_e,_t),u(_e,Fe),u(Fe,Ke),u(Fe,mt),u(_e,dt),u(_e,we),u(we,gt),vt||(Mt=[q(y,"click",e[20]),q(ae,"click",e[21]),q(ke,"click",e[25]),q(Te,"click",e[26]),q(Ie,"click",e[27]),q(Ee,"click",e[28]),q(Me,"click",e[29]),q(we,"click",e[30])],vt=!0)},p(f,P){if(P[0]&4&&l!==(l=f[10](d[F(f[2],d.length)])+"")&&oe(n,l),P[0]&16&&s!==(s=f[4].name+"")&&oe(r,s),P[0]&7102){Oe=[...f[4].scale];let i;for(i=0;i<Oe.length;i+=1){const L=Yt(f,Oe,i);H[i]?H[i].p(L,P):(H[i]=Zt(L),H[i].c(),H[i].m(c,b))}for(;i<H.length;i+=1)H[i].d(1);H.length=Oe.length}if(P[0]&11413){Be=[...d];let i;for(i=0;i<Be.length;i+=1){const L=Wt(f,Be,i);J[i]?J[i].p(L,P):(J[i]=xt(L),J[i].c(),J[i].m(c,null))}for(;i<J.length;i+=1)J[i].d(1);J.length=Be.length}if(P[0]&4&&ee!==(ee=f[10](d[F(f[2],d.length)])+"")&&oe(W,ee),P[0]&24){Le=Tt;let i;for(i=0;i<Le.length;i+=1){const L=Qt(f,Le,i);z[i]?z[i].p(L,P):(z[i]=el(L),z[i].c(),z[i].m(D,null))}for(;i<z.length;i+=1)z[i].d(1);z.length=Le.length}if(P[0]&8&&I!==(I=f[3].label+"")&&oe(C,I),P[0]&1054){Ve=f[3].modes;let i;for(i=0;i<Ve.length;i+=1){const L=Kt(f,Ve,i);K[i]?K[i].p(L,P):(K[i]=tl(L),K[i].c(),K[i].m(te,null))}for(;i<K.length;i+=1)K[i].d(1);K.length=Ve.length}if(P[0]&1054){$e=f[3].modes;let i;for(i=0;i<$e.length;i+=1){const L=zt(f,$e,i);Q[i]?Q[i].p(L,P):(Q[i]=ll(L),Q[i].c(),Q[i].m(ve,null))}for(;i<Q.length;i+=1)Q[i].d(1);Q.length=$e.length}P[0]&32&&oe(Ke,f[5])},i:Ut,o:Ut,d(f){f&&g(t),f&&g(h),f&&g(_),He(H,f),He(J,f),He(z,f),He(K,f),He(Q,f),vt=!1,Et(Mt)}}}function Vl(e,t,l){const n={xCentre:400,yCentre:400,radius:300};let a={};It.subscribe(I=>{l(0,a=I)});let s=!0;const r={...n,radius:n.radius},h={...n,radius:n.radius-70},_={...n,radius:n.radius+70};let c=0,m=Tt[0],b=m.modes[0];const w=I=>I.preferSharp?I.sharpNote:I.flatNote,p=(I,C)=>({x:C.xCentre+C.radius*Math.cos(I*2*Math.PI/d.length-.5*Math.PI),y:C.yCentre+C.radius*Math.sin(I*2*Math.PI/d.length-.5*Math.PI)}),v=(I,C,se)=>({x:se.xCentre+se.radius*Math.cos((I.semitonesFromRoot+C)*2*Math.PI/d.length-.5*Math.PI),y:se.yCentre+se.radius*Math.sin((I.semitonesFromRoot+C)*2*Math.PI/d.length-.5*Math.PI)}),T=(I,C,se)=>{let ge=F(I-C,d.length);return ge<0&&(ge=ge+d.length),se.some(je=>je.semitonesFromRoot===ge)};let y=70;return[a,s,c,m,b,y,n,r,h,_,w,p,v,T,I=>Ht(c,I,b.scale,60*1e3/y),(I,C)=>C.key==="Enter"&&Ht(c,I,b.scale,60*1e3/y),I=>Jt(I,c,60*1e3/y),(I,C)=>C.key==="Enter"&&Jt(I,c,60*1e3/y),I=>B(d[c],F(I-c,d.length),0,500),(I,C)=>C.key==="Enter"&&B(d[c],F(I-c,d.length),0,500),()=>{l(2,c=c-1),c<0&&l(2,c=c+12)},()=>{l(2,c=c+1),c>=12&&l(2,c=c-12)},I=>{m!==I&&(l(3,m=I),l(4,b=I.modes[0]))},(I,C)=>{l(4,b=I),l(2,c=F(C,d.length)),l(1,s=!0)},(I,C)=>{l(4,b=I),l(2,c=F(C,d.length)),l(1,s=!1)},()=>{Al(b.scale,c,60*1e3/y)},()=>{Rl(b.scale,c,60*1e3/y)},()=>{Ol(b.scale,c,60*1e3/y)},()=>{Bl(b.scale,c,m.probabilityDistributions.melody,m.probabilityDistributions.bass,60*1e3/y)},()=>{y>10&&l(5,y=y-20)},()=>{l(5,y=y+20)}]}class ql extends ol{constructor(t){super(),al(this,t,Vl,Ll,rl,{},null,[-1,-1])}}export{ql as default};
