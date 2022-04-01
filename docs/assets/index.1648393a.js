var G=Object.defineProperty;var F=(c,e,t)=>e in c?G(c,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[e]=t;var i=(c,e,t)=>(F(c,typeof e!="symbol"?e+"":e,t),t);import{d as y,W as N,S as U,P as q,a as W,G as B,O as D,V,b as k,R as X,C as T,B as j,c as C,e as L}from"./vendor.9cd43111.js";const K=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};K();class g{constructor(){}}i(g,"LG",0),i(g,"XS",1);const P=class{constructor(){}static get instance(){return this._instance||(this._instance=new P),this._instance}random(e,t){return Math.random()*(t-e)+e}random2(e,t){let n=Math.random()*(t-e)+e;return this.hit(2)&&(n*=-1),n}randomInt(e,t){return Math.floor(Math.random()*(t-e+1))+e}hit(e=0){return e<2&&(e=2),this.randomInt(0,e-1)==0}randomArr(e){return e[this.randomInt(0,e.length-1)]}range(e){return this.random(-e,e)}clamp(e,t,n){return Math.min(n,Math.max(e,t))}map(e,t,n,s,r){if(e<=s)return t;if(e>=r)return n;const o=(n-t)/(r-s);return(e-s)*o+t}mix(e,t,n){return e*(1-n)+t*n}radian(e){return e*Math.PI/180}degree(e){return e*180/Math.PI}shuffle(e){let t=e.length;for(;--t;){let n=Math.floor(Math.random()*(t+1));if(t==n)continue;let s=e[t];e[t]=e[n],e[n]=s}}replaceAll(e,t,n){return e.split(t).join(n)}sort(e,t,n=!0){n?e.sort((s,r)=>r[t]-s[t]):e.sort((s,r)=>s[t]-r[t])}distance(e,t,n,s){const r=e-n,o=t-s;return Math.sqrt(r*r+o*o)}numStr(e,t){let n=String(e);if(n.length>=t)return n;const s=t-n.length;let r=0;for(;r<s;)n="0"+n,r++;return n}isIE(){const e=window.navigator.userAgent.toLowerCase();return e.indexOf("msie")!=-1||e.indexOf("trident/7")!=-1||e.indexOf("edge")!=-1}isIE2(){const e=window.navigator.userAgent.toLowerCase();return e.indexOf("msie")!=-1||e.indexOf("trident/7")!=-1}isWin(){return window.navigator.platform.indexOf("Win")!=-1}isChrome(){return window.navigator.userAgent.toLowerCase().indexOf("chrome")!=-1}isFF(){return window.navigator.userAgent.toLowerCase().indexOf("firefox")!=-1}isSafari(){return window.navigator.userAgent.toLowerCase().indexOf("safari")!=-1&&!this.isChrome()}useWebGL(){try{const e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(window.WebGLRenderingContext&&t&&t.getShaderPrecisionFormat)}catch{return!1}}getQuery(e){e=e.replace(/[€[]/,"\u20AC\u20AC\u20AC[").replace(/[€]]/,"\u20AC\u20AC\u20AC]");const n=new RegExp("[\u20AC\u20AC?&]"+e+"=([^&//]*)").exec(window.location.href);return n==null?"":n[1]}isTouchDevice(){return"ontouchstart"in window||navigator!=null&&navigator.maxTouchPoints>0}isPc(){return y.mobile()==!1}isSp(){return y.mobile()}isAod(){return y.android()}isIPhone(){return y.iphone()}isIPad(){return y.tablet()}};let a=P;i(a,"_instance");const A=class{constructor(){i(this,"FLG_PARAM",location.href.includes("10.0.1.33")||location.href.includes("localhost"));i(this,"FLG_STATS",location.href.includes("p=yes"));i(this,"FLG_TEST",location.href.includes("10.0.1.33")||location.href.includes("localhost"));i(this,"PATH_IMG","./assets/img/");i(this,"USE_TOUCH",a.instance.isTouchDevice());i(this,"BREAKPOINT",768);i(this,"LG_PSD_WIDTH",1600);i(this,"XS_PSD_WIDTH",750);i(this,"IS_SIMPLE",a.instance.isPc()&&a.instance.isSafari());i(this,"IS_PC",a.instance.isPc());i(this,"IS_SP",a.instance.isSp());i(this,"IS_AND",a.instance.isAod());i(this,"IS_TAB",a.instance.isIPad());i(this,"USE_ROLLOVER",a.instance.isPc()&&!a.instance.isIPad());i(this,"ITEM_NUM",11)}static get instance(){return this._instance||(this._instance=new A),this._instance}};let h=A;i(h,"_instance");const E=class{constructor(){i(this,"_useFullScreen",a.instance.isSp()||a.instance.isIPad())}static get instance(){return this._instance||(this._instance=new E),this._instance}ratio(){return window.devicePixelRatio||1}px(e){return e+"px"}useScreen(){return screen!=null}sw(){return window.innerWidth}sh(){return this._useFullScreen?screen.height:window.innerHeight}screenOffsetY(){return(window.innerHeight-this.sh())*.5}screen(){return window.innerWidth<=h.instance.BREAKPOINT?g.XS:g.LG}isXS(){return this.screen()==g.XS}isLG(){return this.screen()==g.LG}val(e,t){return this.isXS()?e:t}r(e){const t=this.val(h.instance.XS_PSD_WIDTH,h.instance.LG_PSD_WIDTH);return e/t*this.sw()}sin1(e){return Math.sin(e)+Math.sin(2*e)}sin2(e){return(Math.sin(e)+Math.sin(2.2*e+5.52)+Math.sin(2.9*e+.93)+Math.sin(4.6*e+8.94))/4}};let p=E;i(p,"_instance");class Y{constructor(e={}){i(this,"opt");i(this,"el");this.opt=e,this.el=this.opt.el}init(){}dispose(){this.opt=null,this.el=null}getEl(){return this.el}hasData(e){return this.getEl().getAttribute(e)!=null}getData(e,t){const n=this.getEl().getAttribute(e);return n==null?t:n}qs(e){return this.el.querySelector(e)}qsAll(e){return this.el.querySelectorAll(e)}hasClass(e){return this.el.classList.contains(e)}addClass(e){this.el.classList.add(e)}attachClass(e,t){e!=null&&e.classList.add(t)}detachClass(e,t){e!=null&&e.classList.remove(t)}removeClass(e){this.el.classList.remove(e)}getWidth(e){var n;let t=(n=document.defaultView)==null?void 0:n.getComputedStyle(e,null).width;return Number(t==null?void 0:t.replace("px",""))}getHeight(e){var t;if(e==null)return 0;{let n=(t=document.defaultView)==null?void 0:t.getComputedStyle(e,null).height;return Number(n==null?void 0:n.replace("px",""))}}getRect(e){var n;const t=(n=document.defaultView)==null?void 0:n.getComputedStyle(e,null);return t!=null?{width:Number(t.width.replace("px","")),height:Number(t.height.replace("px",""))}:{}}getDataNumber(e){const t=this.getEl().getAttribute(e);return t==null?0:Number(t)}getOffsetTop(e){const t=e.getBoundingClientRect();var n=window.pageYOffset||document.documentElement.scrollTop;return t.top+n}getOffset(e){const t=e.getBoundingClientRect();var n=window.pageYOffset||document.documentElement.scrollTop;return{y:t.top+n,x:t.left}}_call(e,t=null){e!=null&&(t!=null?e(t):e())}}const M=class{constructor(){i(this,"cnt",0);i(this,"_updateList",[]);i(this,"play",!0);i(this,"_update",()=>{if(this.play){this.cnt++;for(var e of this._updateList)e!=null&&e();window.requestAnimationFrame(this._update)}});window.requestAnimationFrame(this._update)}static get instance(){return this._instance||(this._instance=new M),this._instance}add(e){this._updateList.push(e)}remove(e){const t=[];this._updateList.forEach(n=>{n!=e&&t.push(n)}),this._updateList=t}};let v=M;i(v,"_instance");class z{constructor(e=0,t=0,n=0,s=0){i(this,"x",0);i(this,"y",0);i(this,"width",0);i(this,"height",0);this.x=e,this.y=t,this.width=n,this.height=s}}const O=class{constructor(){i(this,"_list",[]);i(this,"_timer",null);i(this,"_isReadyCall",!1);i(this,"size",new z);i(this,"oldSize",new z);i(this,"_call",()=>{for(var e of this._list)e!=null&&e()});window.addEventListener("resize",()=>{this._eResize()},!1)}static get instance(){return this._instance||(this._instance=new O),this._instance}_eResize(){this._isReadyCall||(this._setStageSize(),this._timer!=null&&(clearInterval(this._timer),this._timer=null),this._timer=setTimeout(()=>{this._call(),this.oldSize.width=this.size.width,this.oldSize.height=this.size.height,this._isReadyCall=!1},1500),this._isReadyCall=!0)}_setStageSize(){this.size.width=window.innerWidth,this.size.height=window.innerHeight}add(e){this._list.push(e)}remove(e){const t=[];this._list.forEach(n=>{n!=e&&t.push(n)}),this._list=t}};let w=O;i(w,"_instance");class Q{constructor(e=0,t=0){i(this,"x",0);i(this,"y",0);this.x=e,this.y=t}set(e=0,t=0){this.x=e,this.y=t}copy(e){this.x=e.x,this.y=e.y}}class $ extends Y{constructor(e={}){super(e);i(this,"_updateHandler");i(this,"_resizeHandler");i(this,"_c",0);i(this,"_isEnter",!1);i(this,"_isOneEnter",!1);i(this,"_observer");i(this,"_elPos",new Q(0,9999));i(this,"_eRollOverHandler");i(this,"_eRollOutHandler");(e.isDefEvent==null||e.isDefEvent)&&(this._updateHandler=this._update.bind(this),v.instance.add(this._updateHandler),this._resizeHandler=this._resize.bind(this),w.instance.add(this._resizeHandler))}init(){super.init()}_setHover(){this._eRollOverHandler=this._eRollOver.bind(this),this._eRollOutHandler=this._eRollOut.bind(this),this.getEl().addEventListener("mouseenter",this._eRollOverHandler),this.getEl().addEventListener("mouseleave",this._eRollOutHandler)}_disposeHover(){this._eRollOverHandler!=null&&(this.getEl().removeEventListener("mouseenter",this._eRollOverHandler),this.getEl().removeEventListener("mouseleave",this._eRollOutHandler),this._eRollOverHandler=null,this._eRollOutHandler=null)}_eRollOver(){}_eRollOut(){}_setObserver(){this._observer=new IntersectionObserver(e=>{e!=null&&e.forEach(t=>{t!=null&&t.intersectionRatio>0?this._eEnter():this._eLeave()})},{root:null}),setTimeout(()=>{if(this._observer!=null&&this._observer!=null){const e=this.getEl();e!=null&&this._observer.observe(e)}},100)}_eEnter(){this._isEnter=!0}_eLeave(){this._isEnter=!1}_disposeObserver(){(this._observer!=null||this._observer!=null)&&(this._observer.unobserve(this.getEl()),this._observer=null)}dispose(){this._updateHandler!=null&&(v.instance.remove(this._updateHandler),this._updateHandler=null),this._resizeHandler!=null&&(w.instance.remove(this._resizeHandler),this._resizeHandler=null),this._disposeHover(),this._disposeObserver(),super.dispose()}css(e,t){const n=e.style;for(var s in t)n[s]=t[s]}_update(){this._c++}_resize(){}}class J extends ${constructor(e={}){super(e);i(this,"camera");i(this,"renderer");i(this,"mainScene");i(this,"isRender",!0);i(this,"renderSize",new z);let t={canvas:this.el,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"low-power"};this.renderer=new N(t),this.renderer.autoClear=!0,this.renderer.setClearColor(16777215,1),this.mainScene=new U,this.camera=this._makeCamera(),this.updateCamera(this.camera,10,10)}init(){super.init()}_makeCamera(){return new q(80,1,1e-7,5e4)}updateCamera(e,t=10,n=10){this._updateOrthCamera(e,t,n)}_updateOrthCamera(e,t=10,n=10){e.aspect=t/n,e.updateProjectionMatrix(),e.position.z=n/Math.tan(e.fov*Math.PI/360)/2}_update(){super._update()}_setUni(e,t,n){const s=this._getUni(e);s[t].value=n}_getUni(e){return e.material.uniforms}}class b{constructor(){}}i(b,"HIGH",0),i(b,"MIDDLE",1),i(b,"LOW",2);const H=class{constructor(){i(this,"fps",b.MIDDLE);i(this,"debug",document.querySelector(".l-debug"));i(this,"ang",0);i(this,"_dat");i(this,"_stats");i(this,"mesh",{rate:{value:0,min:0,max:100},ang:{value:65,min:0,max:360*1}});h.instance.FLG_PARAM&&this.makeParamGUI(),h.instance.FLG_STATS&&(this._stats=W(),document.body.appendChild(this._stats.domElement)),v.instance.add(()=>{this._update()})}_update(){this._stats!=null&&this._stats.update()}static get instance(){return this._instance||(this._instance=new H),this._instance}makeParamGUI(){this._dat==null&&(this._dat=new B,this._add(this.mesh,"mesh"))}_add(e,t){const n=this._dat.addFolder(t);for(var s in e){const r=e[s];r.use==null&&(r.type=="color"?n.addColor(r,"value").name(s):r.list!=null?n.add(r,"value",r.list).name(s):n.add(r,"value",r.min,r.max).name(s))}}};let f=H;i(f,"_instance");var Z=`vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

precision highp float;

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec3 cameraPosition;

uniform float size;
uniform float time;
uniform float yure;
uniform float show;
uniform float hide;

attribute vec3 position;
attribute vec3 prevPosition;
attribute vec3 nextPosition;
attribute vec3 info;

float map(float value, float beforeMin, float beforeMax, float afterMin, float afterMax) {
  return afterMin + (afterMax - afterMin) * ((value - beforeMin) / (beforeMax - beforeMin));
}

vec3 rotate(vec3 p, float angle, vec3 axis){
    vec3 a = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float r = 1.0 - c;
    mat3 m = mat3(
        a.x * a.x * r + c,
        a.y * a.x * r + a.z * s,
        a.z * a.x * r - a.y * s,
        a.x * a.y * r - a.z * s,
        a.y * a.y * r + c,
        a.z * a.y * r + a.x * s,
        a.x * a.z * r + a.y * s,
        a.y * a.z * r - a.x * s,
        a.z * a.z * r + c
    );
    return m * p;
}

void main(){
  vec3 p = position;
  vec3 prevP = prevPosition;
  vec3 nextP = nextPosition;

  
  
  float n1 = time * 0.1 + info.y * 0.05;

  p.x = mix(prevP.x, p.x, show);
  p.y = mix(prevP.y, p.y, show);

  p.x = mix(p.x, nextP.x, hide);
  p.y = mix(p.y, nextP.y, hide);

  float radius = (2.0 * info.y) * 0.1;
  p.z += (-radius * yure) + sin(n1) * radius * yure;
  p.x += cos(n1) * radius * yure;

  
  

  

  vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);

  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = size;
}`,ee=`precision highp float;

uniform float show;
uniform float hide;
uniform float yure;
uniform vec3 color;

void main(void) {
  float a = 1.0 - yure;
  gl_FragColor = vec4(color, a);
}`;class te extends D{constructor(){super();i(this,"_updateHandler");i(this,"_layoutHandler");i(this,"_c",0);this._updateHandler=this._update.bind(this),v.instance.add(this._updateHandler),this._layoutHandler=this._resize.bind(this),w.instance.add(this._layoutHandler)}init(){}dispose(){v.instance.remove(this._updateHandler),this._updateHandler=null,w.instance.remove(this._layoutHandler),this._layoutHandler=null}_update(){this._c++}_resize(){}_getUni(e){return e.material.uniforms}_setUni(e,t,n){const s=this._getUni(e);s[t].value=n}_call(e){e!=null&&e()}}class ne extends te{constructor(e){super();i(this,"_id",0);i(this,"_mesh");i(this,"_imgSize",0);i(this,"_isLoaded",!1);i(this,"_sample",[]);i(this,"onLoaded");this._id=e.id,this.onLoaded=e.onLoaded;const t=new Image;t.src=h.instance.PATH_IMG+"sample-"+this._id+".png",t.onload=()=>{const n=document.createElement("canvas"),s=t.width;n.width=n.height=s,this._imgSize=s;const r=n.getContext("2d");r.drawImage(t,0,0),t.style.display="none";const d=r.getImageData(0,0,n.width,n.height).data;for(let u=0;u<d.length;u+=4){const l=~~(u/4),_=~~(l%n.width),m=~~(l/n.width),S=d[u+3],x=1;S>0&&this._sample.push({pos:new V((_-s*.5)*x,(m-s*.5)*-1*x,0)})}console.log(this._sample.length),this._isLoaded=!0,this._call(this.onLoaded)}}get isLoaded(){return this._isLoaded}get sample(){return this._sample}makeMesh(e,t){this._mesh=new k(this.getGeo(e,t),new X({vertexShader:Z,fragmentShader:ee,transparent:!0,depthTest:!1,uniforms:{alpha:{value:0},size:{value:2},time:{value:0},yure:{value:0},show:{value:0},hide:{value:0},color:{value:new T}}})),this.add(this._mesh)}getGeo(e,t){const n=this._sample.length,s=new j,r=new Float32Array(n*3),o=new Float32Array(n*3),d=new Float32Array(n*3),u=new Float32Array(n*3);let l=0,_=0;for(;_<n;){const m=this._sample[_].pos,S=a.instance.randomArr(e).pos,x=a.instance.randomArr(t).pos;r[l*3+0]=m.x,r[l*3+1]=m.y,r[l*3+2]=0,o[l*3+0]=S.x,o[l*3+1]=S.y,o[l*3+2]=0,d[l*3+0]=x.x,d[l*3+1]=x.y,d[l*3+2]=0;const I=m.x,R=m.y;u[l*3+0]=a.instance.map(_,0,1,0,n-1),u[l*3+1]=Math.sqrt(I*I+R*R),u[l*3+2]=a.instance.range(1),l++,_++}return s.setAttribute("position",new C(r,3)),s.setAttribute("prevPosition",new C(o,3)),s.setAttribute("nextPosition",new C(d,3)),s.setAttribute("info",new C(u,3)),s.computeBoundingSphere(),s}_update(){if(super._update(),this._mesh!=null){const e=p.instance.sw(),t=p.instance.sh(),n=p.instance.r(Math.min(e,t)/this._imgSize*2.5);this._mesh.scale.set(n,n,1);const s=f.instance.ang,o=360/h.instance.ITEM_NUM,d=.05,u=a.instance.map(s,0,1,Math.max(0,this._id*o-o*.25),this._id*o+o);this.rotation.z=a.instance.radian(o*this._id+o)*-1;const l=a.instance.map(u,0,1,0,.5-d),_=a.instance.map(u,0,1,.5+d,1);let m=1-l+_;l>.9&&_<=0?m=0:m=1-l+_,this._setUni(this._mesh,"yure",m),this._setUni(this._mesh,"size",3),this._setUni(this._mesh,"time",this._c),this._setUni(this._mesh,"show",l),this._setUni(this._mesh,"hide",_),this._setUni(this._mesh,"color",new T(16777215))}}}class ie extends J{constructor(e){super(e);i(this,"_con");i(this,"_colors",[]);i(this,"_val",0);i(this,"_oldAng",-1);i(this,"_rotCnt",0);i(this,"_item",[]);var t,n;this._makeColors(),a.instance.shuffle(this._colors),this._con=new D,this.mainScene.add(this._con),!h.instance.FLG_TEST&&window.DeviceOrientationEvent?(t=document.querySelector(".l-btn"))==null||t.addEventListener("click",()=>{window.DeviceOrientationEvent.requestPermission().then(s=>{var r;s=="granted"&&(window.addEventListener("deviceorientation",o=>{this._oldAng!=-1?this._oldAng=this._val:this._oldAng=Number(o.alpha),this._val=Number(o.alpha),f.instance.debug.innerHTML="alpha:"+this._val,this._oldAng-this._val>300&&this._rotCnt++,this._oldAng-this._val<-300&&this._rotCnt--},!0),(r=document.querySelector(".l-btn"))==null||r.classList.add("-none"))})}):(n=document.querySelector(".l-btn"))==null||n.classList.add("-none");for(let s=0;s<h.instance.ITEM_NUM;s++){const r=new ne({id:s,color:this._colors,onLoaded:()=>{this._eLoaded()}});this._con.add(r),this._item.push(r)}this._resize()}_eLoaded(){let e=0;this._item.forEach(t=>{t.isLoaded&&e++}),e>=this._item.length&&this._makeMesh()}_makeMesh(){this._item.forEach((e,t)=>{const n=t==0?this._item[this._item.length-1]:this._item[t-1],s=t==this._item.length-1?this._item[0]:this._item[t+1];e.makeMesh(n.sample,s.sample)})}_update(){super._update(),this._con.position.y=p.instance.screenOffsetY()*-1,h.instance.FLG_TEST?(this._oldAng=this._val,this._val=f.instance.mesh.ang.value,this._val=this._val%360,this._oldAng-this._val>300&&this._rotCnt++,f.instance.ang=f.instance.mesh.ang.value,f.instance.debug.innerHTML=String(f.instance.ang)):f.instance.ang=this._val+this._rotCnt*360,this.isNowRenderFrame()&&this._render()}_render(){this.renderer.setClearColor(0,1),this.renderer.render(this.mainScene,this.camera)}isNowRenderFrame(){return this.isRender}_resize(e=!0){super._resize();const t=p.instance.sw(),n=p.instance.sh();if((h.instance.IS_SP||h.instance.IS_TAB)&&t==this.renderSize.width&&this.renderSize.height*2>n)return;this.renderSize.width=t,this.renderSize.height=n,this.updateCamera(this.camera,t,n);let s=window.devicePixelRatio||1;this.renderer.setPixelRatio(s),this.renderer.setSize(t,n),this.renderer.clear(),e&&this._render()}_makeColors(){this._colors=[];const e=new L(a.instance.random(0,1),a.instance.random(0,1),a.instance.random(0,1)),t=new L(a.instance.random(0,1),a.instance.random(0,1),a.instance.random(0,1)),n=new L(a.instance.random(0,1),a.instance.random(0,1),a.instance.random(0,1));for(let s=0;s<20;s++){const r=e.clone();this._colors.push(r.lerp(t,a.instance.random(0,1)));const o=t.clone();this._colors.push(o.lerp(n,a.instance.random(0,1)));const d=n.clone();this._colors.push(d.lerp(e,a.instance.random(0,1)))}}}new ie({el:document.querySelector("#js-con")});
