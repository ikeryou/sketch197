var Ha=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Va=window.device,Y={},_r=[];window.device=Y;var $i=window.document.documentElement,ka=window.navigator.userAgent.toLowerCase(),zr=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","pov_tv","hbbtv","ce-html"];Y.macos=function(){return Oe("mac")};Y.ios=function(){return Y.iphone()||Y.ipod()||Y.ipad()};Y.iphone=function(){return!Y.windows()&&Oe("iphone")};Y.ipod=function(){return Oe("ipod")};Y.ipad=function(){var n=navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;return Oe("ipad")||n};Y.android=function(){return!Y.windows()&&Oe("android")};Y.androidPhone=function(){return Y.android()&&Oe("mobile")};Y.androidTablet=function(){return Y.android()&&!Oe("mobile")};Y.blackberry=function(){return Oe("blackberry")||Oe("bb10")};Y.blackberryPhone=function(){return Y.blackberry()&&!Oe("tablet")};Y.blackberryTablet=function(){return Y.blackberry()&&Oe("tablet")};Y.windows=function(){return Oe("windows")};Y.windowsPhone=function(){return Y.windows()&&Oe("phone")};Y.windowsTablet=function(){return Y.windows()&&Oe("touch")&&!Y.windowsPhone()};Y.fxos=function(){return(Oe("(mobile")||Oe("(tablet"))&&Oe(" rv:")};Y.fxosPhone=function(){return Y.fxos()&&Oe("mobile")};Y.fxosTablet=function(){return Y.fxos()&&Oe("tablet")};Y.meego=function(){return Oe("meego")};Y.cordova=function(){return window.cordova&&location.protocol==="file:"};Y.nodeWebkit=function(){return Ha(window.process)==="object"};Y.mobile=function(){return Y.androidPhone()||Y.iphone()||Y.ipod()||Y.windowsPhone()||Y.blackberryPhone()||Y.fxosPhone()||Y.meego()};Y.tablet=function(){return Y.ipad()||Y.androidTablet()||Y.blackberryTablet()||Y.windowsTablet()||Y.fxosTablet()};Y.desktop=function(){return!Y.tablet()&&!Y.mobile()};Y.television=function(){for(var n=0;n<zr.length;){if(Oe(zr[n]))return!0;n++}return!1};Y.portrait=function(){return screen.orientation&&Object.prototype.hasOwnProperty.call(window,"onorientationchange")?Rr(screen.orientation.type,"portrait"):Y.ios()&&Object.prototype.hasOwnProperty.call(window,"orientation")?Math.abs(window.orientation)!==90:window.innerHeight/window.innerWidth>1};Y.landscape=function(){return screen.orientation&&Object.prototype.hasOwnProperty.call(window,"onorientationchange")?Rr(screen.orientation.type,"landscape"):Y.ios()&&Object.prototype.hasOwnProperty.call(window,"orientation")?Math.abs(window.orientation)===90:window.innerHeight/window.innerWidth<1};Y.noConflict=function(){return window.device=Va,this};function Rr(n,e){return n.indexOf(e)!==-1}function Oe(n){return Rr(ka,n)}function ra(n){return $i.className.match(new RegExp(n,"i"))}function Be(n){var e=null;ra(n)||(e=$i.className.replace(/^\s+|\s+$/g,""),$i.className=e+" "+n)}function Gr(n){ra(n)&&($i.className=$i.className.replace(" "+n,""))}Y.ios()?Y.ipad()?Be("ios ipad tablet"):Y.iphone()?Be("ios iphone mobile"):Y.ipod()&&Be("ios ipod mobile"):Y.macos()?Be("macos desktop"):Y.android()?Y.androidTablet()?Be("android tablet"):Be("android mobile"):Y.blackberry()?Y.blackberryTablet()?Be("blackberry tablet"):Be("blackberry mobile"):Y.windows()?Y.windowsTablet()?Be("windows tablet"):Y.windowsPhone()?Be("windows mobile"):Be("windows desktop"):Y.fxos()?Y.fxosTablet()?Be("fxos tablet"):Be("fxos mobile"):Y.meego()?Be("meego mobile"):Y.nodeWebkit()?Be("node-webkit"):Y.television()?Be("television"):Y.desktop()&&Be("desktop");Y.cordova()&&Be("cordova");function An(){Y.landscape()?(Gr("portrait"),Be("landscape"),Hr("landscape")):(Gr("landscape"),Be("portrait"),Hr("portrait")),sa()}function Hr(n){for(var e=0;e<_r.length;e++)_r[e](n)}Y.onChangeOrientation=function(n){typeof n=="function"&&_r.push(n)};var Rn="resize";Object.prototype.hasOwnProperty.call(window,"onorientationchange")&&(Rn="orientationchange");window.addEventListener?window.addEventListener(Rn,An,!1):window.attachEvent?window.attachEvent(Rn,An):window[Rn]=An;An();function Cr(n){for(var e=0;e<n.length;e++)if(Y[n[e]]())return n[e];return"unknown"}Y.type=Cr(["mobile","tablet","desktop"]);Y.os=Cr(["ios","iphone","ipad","ipod","android","blackberry","macos","windows","fxos","meego","television"]);function sa(){Y.orientation=Cr(["portrait","landscape"])}sa();const Wa="137",Xa=0,Vr=1,qa=2,aa=1,Ya=2,Wi=3,Zi=0,He=1,Ci=2,$a=1,$t=0,Yi=1,kr=2,Wr=3,Xr=4,Za=5,bi=100,ja=101,Ka=102,qr=103,Yr=104,Ja=200,Qa=201,eo=202,to=203,oa=204,la=205,io=206,no=207,ro=208,so=209,ao=210,oo=0,lo=1,co=2,xr=3,uo=4,ho=5,fo=6,po=7,ca=0,mo=1,go=2,Zt=0,_o=1,xo=2,vo=3,Mo=4,yo=5,ua=300,Qi=301,en=302,vr=303,Mr=304,Pn=306,Lr=307,yr=1e3,st=1001,Sr=1002,Ke=1003,$r=1004,Zr=1005,tt=1006,So=1007,Fn=1008,jt=1009,Eo=1010,bo=1011,ji=1012,wo=1013,Cn=1014,ri=1015,wi=1016,To=1017,Ao=1018,Ti=1020,Ro=1021,Co=1022,Je=1023,Lo=1024,Do=1025,si=1026,Li=1027,Po=1028,Fo=1029,Io=1030,No=1031,Uo=1033,Bn=33776,zn=33777,Gn=33778,Hn=33779,jr=35840,Kr=35841,Jr=35842,Qr=35843,Oo=36196,es=37492,ts=37496,is=37808,ns=37809,rs=37810,ss=37811,as=37812,os=37813,ls=37814,cs=37815,us=37816,hs=37817,ds=37818,fs=37819,ps=37820,ms=37821,gs=36492,oi=3e3,Ie=3001,Bo=3200,zo=3201,Go=0,Ho=1,Vn=7680,Vo=519,_s=35044,xs="300 es",Er=1035,We=[];for(let n=0;n<256;n++)We[n]=(n<16?"0":"")+n.toString(16);const kn=Math.PI/180,vs=180/Math.PI;function Ki(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]+"-"+We[e&255]+We[e>>8&255]+"-"+We[e>>16&15|64]+We[e>>24&255]+"-"+We[t&63|128]+We[t>>8&255]+"-"+We[t>>16&255]+We[t>>24&255]+We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]).toUpperCase()}function Tt(n,e,t){return Math.max(e,Math.min(t,n))}function ko(n,e){return(n%e+e)%e}function Wn(n,e,t){return(1-t)*n+t*e}function Ms(n){return(n&n-1)===0&&n!==0}function Wo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class Fi{constructor(e=0,t=0,i=0,r=1){this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],d=i[r+2],f=i[r+3];const p=s[o+0],m=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(f!==g||c!==p||l!==m||d!==_){let S=1-a;const u=c*p+l*m+d*_+f*g,h=u>=0?1:-1,T=1-u*u;if(T>Number.EPSILON){const b=Math.sqrt(T),L=Math.atan2(b,u*h);S=Math.sin(S*L)/b,a=Math.sin(a*L)/b}const y=a*h;if(c=c*S+p*y,l=l*S+m*y,d=d*S+_*y,f=f*S+g*y,S===1-a){const b=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=b,l*=b,d*=b,f*=b}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],d=i[r+3],f=s[o],p=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+d*f+c*m-l*p,e[t+1]=c*_+d*p+l*f-a*m,e[t+2]=l*_+d*m+a*p-c*f,e[t+3]=d*_-a*f-c*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),d=a(r/2),f=a(s/2),p=c(i/2),m=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=p*d*f+l*m*_,this._y=l*m*f-p*d*_,this._z=l*d*_+p*m*f,this._w=l*d*f-p*m*_;break;case"YXZ":this._x=p*d*f+l*m*_,this._y=l*m*f-p*d*_,this._z=l*d*_-p*m*f,this._w=l*d*f+p*m*_;break;case"ZXY":this._x=p*d*f-l*m*_,this._y=l*m*f+p*d*_,this._z=l*d*_+p*m*f,this._w=l*d*f-p*m*_;break;case"ZYX":this._x=p*d*f-l*m*_,this._y=l*m*f+p*d*_,this._z=l*d*_-p*m*f,this._w=l*d*f+p*m*_;break;case"YZX":this._x=p*d*f+l*m*_,this._y=l*m*f+p*d*_,this._z=l*d*_-p*m*f,this._w=l*d*f-p*m*_;break;case"XZY":this._x=p*d*f-l*m*_,this._y=l*m*f-p*d*_,this._z=l*d*_+p*m*f,this._w=l*d*f+p*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],f=t[10],p=i+a+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(d-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=i*d+o*a+r*l-s*c,this._y=r*d+o*c+s*a-i*l,this._z=s*d+o*l+i*c-r*a,this._w=o*d-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),d=Math.atan2(l,a),f=Math.sin((1-t)*d)/l,p=Math.sin(t*d)/l;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Fi.prototype.isQuaternion=!0;class P{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(ys.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ys.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*r-a*i,d=c*i+a*t-s*r,f=c*r+s*i-o*t,p=-s*t-o*i-a*r;return this.x=l*c+p*-s+d*-a-f*-o,this.y=d*c+p*-o+f*-s-l*-a,this.z=f*c+p*-a+l*-o-d*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xn.copy(this).projectOnVector(e),this.sub(Xn)}reflect(e){return this.sub(Xn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}P.prototype.isVector3=!0;const Xn=new P,ys=new Fi;class Ii{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const d=e[c],f=e[c+1],p=e[c+2];d<t&&(t=d),f<i&&(i=f),p<r&&(r=p),d>s&&(s=d),f>o&&(o=f),p>a&&(a=p)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const d=e.getX(c),f=e.getY(c),p=e.getZ(c);d<t&&(t=d),f<i&&(i=f),p<r&&(r=p),d>s&&(s=d),f>o&&(o=f),p>a&&(a=p)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)ei.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ei)}else i.boundingBox===null&&i.computeBoundingBox(),qn.copy(i.boundingBox),qn.applyMatrix4(e.matrixWorld),this.union(qn);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gi),sn.subVectors(this.max,Gi),ci.subVectors(e.a,Gi),ui.subVectors(e.b,Gi),hi.subVectors(e.c,Gi),Gt.subVectors(ui,ci),Ht.subVectors(hi,ui),ti.subVectors(ci,hi);let t=[0,-Gt.z,Gt.y,0,-Ht.z,Ht.y,0,-ti.z,ti.y,Gt.z,0,-Gt.x,Ht.z,0,-Ht.x,ti.z,0,-ti.x,-Gt.y,Gt.x,0,-Ht.y,Ht.x,0,-ti.y,ti.x,0];return!Yn(t,ci,ui,hi,sn)||(t=[1,0,0,0,1,0,0,0,1],!Yn(t,ci,ui,hi,sn))?!1:(an.crossVectors(Gt,Ht),t=[an.x,an.y,an.z],Yn(t,ci,ui,hi,sn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ei.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Ii.prototype.isBox3=!0;const Pt=[new P,new P,new P,new P,new P,new P,new P,new P],ei=new P,qn=new Ii,ci=new P,ui=new P,hi=new P,Gt=new P,Ht=new P,ti=new P,Gi=new P,sn=new P,an=new P,ii=new P;function Yn(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ii.fromArray(n,s);const a=r.x*Math.abs(ii.x)+r.y*Math.abs(ii.y)+r.z*Math.abs(ii.z),c=e.dot(ii),l=t.dot(ii),d=i.dot(ii);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const Xo=new Ii,Ss=new P,on=new P,$n=new P;class In{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Xo.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){$n.subVectors(e,this.center);const t=$n.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add($n.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?on.set(0,0,1).multiplyScalar(e.radius):on.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Ss.copy(e.center).add(on)),this.expandByPoint(Ss.copy(e.center).sub(on)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}class xt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=c,d[6]=i,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],d=i[4],f=i[7],p=i[2],m=i[5],_=i[8],g=r[0],S=r[3],u=r[6],h=r[1],T=r[4],y=r[7],b=r[2],L=r[5],C=r[8];return s[0]=o*g+a*h+c*b,s[3]=o*S+a*T+c*L,s[6]=o*u+a*y+c*C,s[1]=l*g+d*h+f*b,s[4]=l*S+d*T+f*L,s[7]=l*u+d*y+f*C,s[2]=p*g+m*h+_*b,s[5]=p*S+m*T+_*L,s[8]=p*u+m*y+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-i*s*d+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=d*o-a*l,p=a*c-d*s,m=l*s-o*c,_=t*f+i*p+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(r*l-d*i)*g,e[2]=(a*i-r*o)*g,e[3]=p*g,e[4]=(d*t-r*c)*g,e[5]=(r*s-a*t)*g,e[6]=m*g,e[7]=(i*c-l*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],d=r[7];return r[0]=t*s+i*c,r[3]=t*o+i*l,r[6]=t*a+i*d,r[1]=-i*s+t*c,r[4]=-i*o+t*l,r[7]=-i*a+t*d,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}xt.prototype.isMatrix3=!0;const Zn=new P,qo=new P,Yo=new xt;class Yt{constructor(e=new P(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Zn.subVectors(i,t).cross(qo.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Zn),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Yo.getNormalMatrix(e),r=this.coplanarPoint(Zn).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Yt.prototype.isPlane=!0;const di=new In,ln=new P;class ha{constructor(e=new Yt,t=new Yt,i=new Yt,r=new Yt,s=new Yt,o=new Yt){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],d=i[6],f=i[7],p=i[8],m=i[9],_=i[10],g=i[11],S=i[12],u=i[13],h=i[14],T=i[15];return t[0].setComponents(a-r,f-c,g-p,T-S).normalize(),t[1].setComponents(a+r,f+c,g+p,T+S).normalize(),t[2].setComponents(a+s,f+l,g+m,T+u).normalize(),t[3].setComponents(a-s,f-l,g-m,T-u).normalize(),t[4].setComponents(a-o,f-d,g-_,T-h).normalize(),t[5].setComponents(a+o,f+d,g+_,T+h).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSprite(e){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ln.x=r.normal.x>0?e.max.x:e.min.x,ln.y=r.normal.y>0?e.max.y:e.min.y,ln.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ln)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ke{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,c,l,d,f,p,m,_,g,S){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=d,u[10]=f,u[14]=p,u[3]=m,u[7]=_,u[11]=g,u[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/fi.setFromMatrixColumn(e,0).length(),s=1/fi.setFromMatrixColumn(e,1).length(),o=1/fi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const p=o*d,m=o*f,_=a*d,g=a*f;t[0]=c*d,t[4]=-c*f,t[8]=l,t[1]=m+_*l,t[5]=p-g*l,t[9]=-a*c,t[2]=g-p*l,t[6]=_+m*l,t[10]=o*c}else if(e.order==="YXZ"){const p=c*d,m=c*f,_=l*d,g=l*f;t[0]=p+g*a,t[4]=_*a-m,t[8]=o*l,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=m*a-_,t[6]=g+p*a,t[10]=o*c}else if(e.order==="ZXY"){const p=c*d,m=c*f,_=l*d,g=l*f;t[0]=p-g*a,t[4]=-o*f,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*d,t[9]=g-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const p=o*d,m=o*f,_=a*d,g=a*f;t[0]=c*d,t[4]=_*l-m,t[8]=p*l+g,t[1]=c*f,t[5]=g*l+p,t[9]=m*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,m=o*l,_=a*c,g=a*l;t[0]=c*d,t[4]=g-p*f,t[8]=_*f+m,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=m*f+_,t[10]=p-g*f}else if(e.order==="XZY"){const p=o*c,m=o*l,_=a*c,g=a*l;t[0]=c*d,t[4]=-f,t[8]=l*d,t[1]=p*f+g,t[5]=o*d,t[9]=m*f-_,t[2]=_*f-m,t[6]=a*d,t[10]=g*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($o,e,Zo)}lookAt(e,t,i){const r=this.elements;return nt.subVectors(e,t),nt.lengthSq()===0&&(nt.z=1),nt.normalize(),Vt.crossVectors(i,nt),Vt.lengthSq()===0&&(Math.abs(i.z)===1?nt.x+=1e-4:nt.z+=1e-4,nt.normalize(),Vt.crossVectors(i,nt)),Vt.normalize(),cn.crossVectors(nt,Vt),r[0]=Vt.x,r[4]=cn.x,r[8]=nt.x,r[1]=Vt.y,r[5]=cn.y,r[9]=nt.y,r[2]=Vt.z,r[6]=cn.z,r[10]=nt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],d=i[1],f=i[5],p=i[9],m=i[13],_=i[2],g=i[6],S=i[10],u=i[14],h=i[3],T=i[7],y=i[11],b=i[15],L=r[0],C=r[4],$=r[8],ie=r[12],Z=r[1],x=r[5],R=r[9],F=r[13],B=r[2],O=r[6],N=r[10],V=r[14],q=r[3],se=r[7],G=r[11],X=r[15];return s[0]=o*L+a*Z+c*B+l*q,s[4]=o*C+a*x+c*O+l*se,s[8]=o*$+a*R+c*N+l*G,s[12]=o*ie+a*F+c*V+l*X,s[1]=d*L+f*Z+p*B+m*q,s[5]=d*C+f*x+p*O+m*se,s[9]=d*$+f*R+p*N+m*G,s[13]=d*ie+f*F+p*V+m*X,s[2]=_*L+g*Z+S*B+u*q,s[6]=_*C+g*x+S*O+u*se,s[10]=_*$+g*R+S*N+u*G,s[14]=_*ie+g*F+S*V+u*X,s[3]=h*L+T*Z+y*B+b*q,s[7]=h*C+T*x+y*O+b*se,s[11]=h*$+T*R+y*N+b*G,s[15]=h*ie+T*F+y*V+b*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],f=e[6],p=e[10],m=e[14],_=e[3],g=e[7],S=e[11],u=e[15];return _*(+s*c*f-r*l*f-s*a*p+i*l*p+r*a*m-i*c*m)+g*(+t*c*m-t*l*p+s*o*p-r*o*m+r*l*d-s*c*d)+S*(+t*l*f-t*a*m-s*o*f+i*o*m+s*a*d-i*l*d)+u*(-r*a*d-t*c*f+t*a*p+r*o*f-i*o*p+i*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=e[9],p=e[10],m=e[11],_=e[12],g=e[13],S=e[14],u=e[15],h=f*S*l-g*p*l+g*c*m-a*S*m-f*c*u+a*p*u,T=_*p*l-d*S*l-_*c*m+o*S*m+d*c*u-o*p*u,y=d*g*l-_*f*l+_*a*m-o*g*m-d*a*u+o*f*u,b=_*f*c-d*g*c-_*a*p+o*g*p+d*a*S-o*f*S,L=t*h+i*T+r*y+s*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return e[0]=h*C,e[1]=(g*p*s-f*S*s-g*r*m+i*S*m+f*r*u-i*p*u)*C,e[2]=(a*S*s-g*c*s+g*r*l-i*S*l-a*r*u+i*c*u)*C,e[3]=(f*c*s-a*p*s-f*r*l+i*p*l+a*r*m-i*c*m)*C,e[4]=T*C,e[5]=(d*S*s-_*p*s+_*r*m-t*S*m-d*r*u+t*p*u)*C,e[6]=(_*c*s-o*S*s-_*r*l+t*S*l+o*r*u-t*c*u)*C,e[7]=(o*p*s-d*c*s+d*r*l-t*p*l-o*r*m+t*c*m)*C,e[8]=y*C,e[9]=(_*f*s-d*g*s-_*i*m+t*g*m+d*i*u-t*f*u)*C,e[10]=(o*g*s-_*a*s+_*i*l-t*g*l-o*i*u+t*a*u)*C,e[11]=(d*a*s-o*f*s-d*i*l+t*f*l+o*i*m-t*a*m)*C,e[12]=b*C,e[13]=(d*g*r-_*f*r+_*i*p-t*g*p-d*i*S+t*f*S)*C,e[14]=(_*a*r-o*g*r-_*i*c+t*g*c+o*i*S-t*a*S)*C,e[15]=(o*f*r-d*a*r+d*i*c-t*f*c-o*i*p+t*a*p)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,d=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,d*a+i,d*c-r*o,0,l*c-r*a,d*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,d=o+o,f=a+a,p=s*l,m=s*d,_=s*f,g=o*d,S=o*f,u=a*f,h=c*l,T=c*d,y=c*f,b=i.x,L=i.y,C=i.z;return r[0]=(1-(g+u))*b,r[1]=(m+y)*b,r[2]=(_-T)*b,r[3]=0,r[4]=(m-y)*L,r[5]=(1-(p+u))*L,r[6]=(S+h)*L,r[7]=0,r[8]=(_+T)*C,r[9]=(S-h)*C,r[10]=(1-(p+g))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=fi.set(r[0],r[1],r[2]).length();const o=fi.set(r[4],r[5],r[6]).length(),a=fi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],pt.copy(this);const l=1/s,d=1/o,f=1/a;return pt.elements[0]*=l,pt.elements[1]*=l,pt.elements[2]*=l,pt.elements[4]*=d,pt.elements[5]*=d,pt.elements[6]*=d,pt.elements[8]*=f,pt.elements[9]*=f,pt.elements[10]*=f,t.setFromRotationMatrix(pt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,c=2*s/(t-e),l=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),p=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=p,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,c=1/(t-e),l=1/(i-r),d=1/(o-s),f=(t+e)*c,p=(i+r)*l,m=(o+s)*d;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-p,a[2]=0,a[6]=0,a[10]=-2*d,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}ke.prototype.isMatrix4=!0;const fi=new P,pt=new ke,$o=new P(0,0,0),Zo=new P(1,1,1),Vt=new P,cn=new P,nt=new P;class Qe{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],d=c[4],f=c[8],p=c[1],m=c[5],_=c[9],g=c[2],S=c[6],u=c[10];if(Math.abs(d-p)<.01&&Math.abs(f-g)<.01&&Math.abs(_-S)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+g)<.1&&Math.abs(_+S)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,y=(m+1)/2,b=(u+1)/2,L=(d+p)/4,C=(f+g)/4,$=(_+S)/4;return T>y&&T>b?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=L/i,s=C/i):y>b?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=L/r,s=$/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=C/s,r=$/s),this.set(i,r,s,t),this}let h=Math.sqrt((S-_)*(S-_)+(f-g)*(f-g)+(p-d)*(p-d));return Math.abs(h)<.001&&(h=1),this.x=(S-_)/h,this.y=(f-g)/h,this.z=(p-d)/h,this.w=Math.acos((l+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}Qe.prototype.isVector4=!0;function da(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function jo(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,d){const f=l.array,p=l.usage,m=n.createBuffer();n.bindBuffer(d,m),n.bufferData(d,f,p),l.onUploadCallback();let _=n.FLOAT;return f instanceof Float32Array?_=n.FLOAT:f instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):f instanceof Uint16Array?l.isFloat16BufferAttribute?t?_=n.HALF_FLOAT:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):_=n.UNSIGNED_SHORT:f instanceof Int16Array?_=n.SHORT:f instanceof Uint32Array?_=n.UNSIGNED_INT:f instanceof Int32Array?_=n.INT:f instanceof Int8Array?_=n.BYTE:(f instanceof Uint8Array||f instanceof Uint8ClampedArray)&&(_=n.UNSIGNED_BYTE),{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,d,f){const p=d.array,m=d.updateRange;n.bindBuffer(f,l),m.count===-1?n.bufferSubData(f,0,p):(t?n.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):n.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const d=i.get(l);d&&(n.deleteBuffer(d.buffer),i.delete(l))}function c(l,d){if(l.isGLBufferAttribute){const p=i.get(l);(!p||p.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);f===void 0?i.set(l,r(l,d)):f.version<l.version&&(s(f.buffer,l,d),f.version=l.version)}return{get:o,remove:a,update:c}}class Pe{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}Pe.prototype.isVector2=!0;class Ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const fa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mt={h:0,s:0,l:0},un={h:0,s:0,l:0};function jn(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Kn(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}class Ce{constructor(e,t,i){return t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,i){return this.r=e,this.g=t,this.b=i,this}setHSL(e,t,i){if(e=ko(e,1),t=Tt(t,0,1),i=Tt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=jn(s,r,e+1/3),this.g=jn(s,r,e),this.b=jn(s,r,e-1/3)}return this}setStyle(e){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,l=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(a,c,l)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=fa[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,i=this.g,r=this.b,s=Math.max(t,i,r),o=Math.min(t,i,r);let a,c;const l=(o+s)/2;if(o===s)a=0,c=0;else{const d=s-o;switch(c=l<=.5?d/(s+o):d/(2-s-o),s){case t:a=(i-r)/d+(i<r?6:0);break;case i:a=(r-t)/d+2;break;case r:a=(t-i)/d+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,i){return this.getHSL(mt),mt.h+=e,mt.s+=t,mt.l+=i,this.setHSL(mt.h,mt.s,mt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(mt),e.getHSL(un);const i=Wn(mt.h,un.h,t),r=Wn(mt.s,un.s,t),s=Wn(mt.l,un.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}Ce.NAMES=fa;Ce.prototype.isColor=!0;Ce.prototype.r=1;Ce.prototype.g=1;Ce.prototype.b=1;const De=new P,hn=new Pe;class ct{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=_s,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new Ce),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Pe),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new P),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new Qe),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXY(t,hn.x,hn.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)De.fromBufferAttribute(this,t),De.applyMatrix3(e),this.setXYZ(t,De.x,De.y,De.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)De.x=this.getX(t),De.y=this.getY(t),De.z=this.getZ(t),De.applyMatrix4(e),this.setXYZ(t,De.x,De.y,De.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)De.x=this.getX(t),De.y=this.getY(t),De.z=this.getZ(t),De.applyNormalMatrix(e),this.setXYZ(t,De.x,De.y,De.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)De.x=this.getX(t),De.y=this.getY(t),De.z=this.getZ(t),De.transformDirection(e),this.setXYZ(t,De.x,De.y,De.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_s&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}ct.prototype.isBufferAttribute=!0;class pa extends ct{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ma extends ct{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ko extends ct{constructor(e,t,i){super(new Uint16Array(e),t,i)}}Ko.prototype.isFloat16BufferAttribute=!0;class ai extends ct{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Es=new ke,bs=new Fi;class Ui{constructor(e=0,t=0,i=0,r=Ui.DefaultOrder){this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],d=r[9],f=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Es.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Es,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bs.setFromEuler(this),this.setFromQuaternion(bs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new P(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Ui.prototype.isEuler=!0;Ui.DefaultOrder="XYZ";Ui.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ga{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jo=0;const ws=new P,pi=new Fi,Ft=new ke,dn=new P,Hi=new P,Qo=new P,el=new Fi,Ts=new P(1,0,0),As=new P(0,1,0),Rs=new P(0,0,1),tl={type:"added"},Cs={type:"removed"};class at extends Ni{constructor(){super();Object.defineProperty(this,"id",{value:Jo++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DefaultUp.clone();const e=new P,t=new Ui,i=new Fi,r=new P(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ke},normalMatrix:{value:new xt}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=at.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.multiply(pi),this}rotateOnWorldAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.premultiply(pi),this}rotateX(e){return this.rotateOnAxis(Ts,e)}rotateY(e){return this.rotateOnAxis(As,e)}rotateZ(e){return this.rotateOnAxis(Rs,e)}translateOnAxis(e,t){return ws.copy(e).applyQuaternion(this.quaternion),this.position.add(ws.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ts,e)}translateY(e){return this.translateOnAxis(As,e)}translateZ(e){return this.translateOnAxis(Rs,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Ft.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?dn.copy(e):dn.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ft.lookAt(Hi,dn,this.up):Ft.lookAt(dn,Hi,this.up),this.quaternion.setFromRotationMatrix(Ft),r&&(Ft.extractRotation(r.matrixWorld),pi.setFromRotationMatrix(Ft),this.quaternion.premultiply(pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(tl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cs)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Cs)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ft.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ft.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ft),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,e,Qo),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,el,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),f=o(e.shapes),p=o(e.skeletons),m=o(e.animations);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m)}return i.object=r,i;function o(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}at.DefaultUp=new P(0,1,0);at.DefaultMatrixAutoUpdate=!0;at.prototype.isObject3D=!0;function _a(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function Dn(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}let il=0;const lt=new ke,Jn=new at,mi=new P,rt=new Ii,Vi=new Ii,Ve=new P;class zt extends Ni{constructor(){super();Object.defineProperty(this,"id",{value:il++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_a(e)?ma:pa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new xt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return lt.makeRotationFromQuaternion(e),this.applyMatrix4(lt),this}rotateX(e){return lt.makeRotationX(e),this.applyMatrix4(lt),this}rotateY(e){return lt.makeRotationY(e),this.applyMatrix4(lt),this}rotateZ(e){return lt.makeRotationZ(e),this.applyMatrix4(lt),this}translate(e,t,i){return lt.makeTranslation(e,t,i),this.applyMatrix4(lt),this}scale(e,t,i){return lt.makeScale(e,t,i),this.applyMatrix4(lt),this}lookAt(e){return Jn.lookAt(e),Jn.updateMatrix(),this.applyMatrix4(Jn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ai(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];rt.setFromBufferAttribute(s),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,rt.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,rt.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(rt.min),this.boundingBox.expandByPoint(rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(rt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Vi.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(rt.min,Vi.min),rt.expandByPoint(Ve),Ve.addVectors(rt.max,Vi.max),rt.expandByPoint(Ve)):(rt.expandByPoint(Vi.min),rt.expandByPoint(Vi.max))}rt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ve.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ve));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Ve.fromBufferAttribute(a,l),c&&(mi.fromBufferAttribute(e,l),Ve.add(mi)),r=Math.max(r,i.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;t.tangent===void 0&&this.setAttribute("tangent",new ct(new Float32Array(4*a),4));const c=t.tangent.array,l=[],d=[];for(let Z=0;Z<a;Z++)l[Z]=new P,d[Z]=new P;const f=new P,p=new P,m=new P,_=new Pe,g=new Pe,S=new Pe,u=new P,h=new P;function T(Z,x,R){f.fromArray(r,Z*3),p.fromArray(r,x*3),m.fromArray(r,R*3),_.fromArray(o,Z*2),g.fromArray(o,x*2),S.fromArray(o,R*2),p.sub(f),m.sub(f),g.sub(_),S.sub(_);const F=1/(g.x*S.y-S.x*g.y);!isFinite(F)||(u.copy(p).multiplyScalar(S.y).addScaledVector(m,-g.y).multiplyScalar(F),h.copy(m).multiplyScalar(g.x).addScaledVector(p,-S.x).multiplyScalar(F),l[Z].add(u),l[x].add(u),l[R].add(u),d[Z].add(h),d[x].add(h),d[R].add(h))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let Z=0,x=y.length;Z<x;++Z){const R=y[Z],F=R.start,B=R.count;for(let O=F,N=F+B;O<N;O+=3)T(i[O+0],i[O+1],i[O+2])}const b=new P,L=new P,C=new P,$=new P;function ie(Z){C.fromArray(s,Z*3),$.copy(C);const x=l[Z];b.copy(x),b.sub(C.multiplyScalar(C.dot(x))).normalize(),L.crossVectors($,x);const F=L.dot(d[Z])<0?-1:1;c[Z*4]=b.x,c[Z*4+1]=b.y,c[Z*4+2]=b.z,c[Z*4+3]=F}for(let Z=0,x=y.length;Z<x;++Z){const R=y[Z],F=R.start,B=R.count;for(let O=F,N=F+B;O<N;O+=3)ie(i[O+0]),ie(i[O+1]),ie(i[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ct(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new P,s=new P,o=new P,a=new P,c=new P,l=new P,d=new P,f=new P;if(e)for(let p=0,m=e.count;p<m;p+=3){const _=e.getX(p+0),g=e.getX(p+1),S=e.getX(p+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,S),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,S),a.add(d),c.add(d),l.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(S,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],c=a.array,l=a.itemSize*t,d=Math.min(c.length,o.length-l);for(let f=0,p=l;f<d;f++,p++)o[p]=c[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ve.fromBufferAttribute(e,t),Ve.normalize(),e.setXYZ(t,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function e(a,c){const l=a.array,d=a.itemSize,f=a.normalized,p=new l.constructor(c.length*d);let m=0,_=0;for(let g=0,S=c.length;g<S;g++){a.isInterleavedBufferAttribute?m=c[g]*a.data.stride+a.offset:m=c[g]*d;for(let u=0;u<d;u++)p[_++]=l[m++]}return new ct(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let d=0,f=l.length;d<f;d++){const p=l[d],m=e(p,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let f=0,p=l.length;f<p;f++){const m=l[f];d.push(m.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],f=s[l];for(let p=0,m=f.length;p<m;p++)d.push(f[p].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,d=o.length;l<d;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}zt.prototype.isBufferGeometry=!0;class tn extends zt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],d=[],f=[];let p=0,m=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ai(l,3)),this.setAttribute("normal",new ai(d,3)),this.setAttribute("uv",new ai(f,2));function _(g,S,u,h,T,y,b,L,C,$,ie){const Z=y/C,x=b/$,R=y/2,F=b/2,B=L/2,O=C+1,N=$+1;let V=0,q=0;const se=new P;for(let G=0;G<N;G++){const X=G*x-F;for(let ee=0;ee<O;ee++){const ae=ee*Z-R;se[g]=ae*h,se[S]=X*T,se[u]=B,l.push(se.x,se.y,se.z),se[g]=0,se[S]=0,se[u]=L>0?1:-1,d.push(se.x,se.y,se.z),f.push(ee/C),f.push(1-G/$),V+=1}}for(let G=0;G<$;G++)for(let X=0;X<C;X++){const ee=p+X+O*G,ae=p+X+O*(G+1),ce=p+(X+1)+O*(G+1),A=p+(X+1)+O*G;c.push(ee,ae,A),c.push(ae,ce,A),q+=6}a.addGroup(m,q,ie),m+=q,p+=V}}static fromJSON(e){return new tn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Dr extends zt{constructor(e=1,t=1,i=1,r=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,d=c+1,f=e/a,p=t/c,m=[],_=[],g=[],S=[];for(let u=0;u<d;u++){const h=u*p-o;for(let T=0;T<l;T++){const y=T*f-s;_.push(y,-h,0),g.push(0,0,1),S.push(T/a),S.push(1-u/c)}}for(let u=0;u<c;u++)for(let h=0;h<a;h++){const T=h+l*u,y=h+l*(u+1),b=h+1+l*(u+1),L=h+1+l*u;m.push(T,y,L),m.push(y,b,L)}this.setIndex(m),this.setAttribute("position",new ai(_,3)),this.setAttribute("normal",new ai(g,3)),this.setAttribute("uv",new ai(S,2))}static fromJSON(e){return new Dr(e.width,e.height,e.widthSegments,e.heightSegments)}}let nl=0;class Oi extends Ni{constructor(){super();Object.defineProperty(this,"id",{value:nl++}),this.uuid=Ki(),this.name="",this.type="Material",this.fog=!0,this.blending=Yi,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=oa,this.blendDst=la,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vn,this.stencilZFail=Vn,this.stencilZPass=Vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===$a;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}Oi.prototype.isMaterial=!0;function Di(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ze(n){const e={};for(let t=0;t<n.length;t++){const i=Di(n[t]);for(const r in i)e[r]=i[r]}return e}const rl={clone:Di,merge:Ze};var sl=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,al=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class Pi extends Oi{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=sl,this.fragmentShader=al,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}Pi.prototype.isShaderMaterial=!0;const It=new P,Qn=new P,fn=new P,kt=new P,er=new P,pn=new P,tr=new P;class xa{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,It)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=It.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(It.copy(this.direction).multiplyScalar(t).add(this.origin),It.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Qn.copy(e).add(t).multiplyScalar(.5),fn.copy(t).sub(e).normalize(),kt.copy(this.origin).sub(Qn);const s=e.distanceTo(t)*.5,o=-this.direction.dot(fn),a=kt.dot(this.direction),c=-kt.dot(fn),l=kt.lengthSq(),d=Math.abs(1-o*o);let f,p,m,_;if(d>0)if(f=o*c-a,p=o*a-c,_=s*d,f>=0)if(p>=-_)if(p<=_){const g=1/d;f*=g,p*=g,m=f*(f+o*p+2*a)+p*(o*f+p+2*c)+l}else p=s,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*c)+l;else p=-s,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*c)+l;else p<=-_?(f=Math.max(0,-(-o*s+a)),p=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+p*(p+2*c)+l):p<=_?(f=0,p=Math.min(Math.max(-s,-c),s),m=p*(p+2*c)+l):(f=Math.max(0,-(o*s+a)),p=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+p*(p+2*c)+l);else p=o>0?-s:s,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(fn).multiplyScalar(p).add(Qn),m}intersectSphere(e,t){It.subVectors(e.center,this.origin);const i=It.dot(this.direction),r=It.dot(It)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),d>=0?(s=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(s=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,It)!==null}intersectTriangle(e,t,i,r,s){er.subVectors(t,e),pn.subVectors(i,e),tr.crossVectors(er,pn);let o=this.direction.dot(tr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kt.subVectors(this.origin,e);const c=a*this.direction.dot(pn.crossVectors(kt,pn));if(c<0)return null;const l=a*this.direction.dot(er.cross(kt));if(l<0||c+l>o)return null;const d=-a*kt.dot(tr);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}const gt=new P,Nt=new P,ir=new P,Ut=new P,gi=new P,_i=new P,Ls=new P,nr=new P,rr=new P,sr=new P;class Ot{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),gt.subVectors(e,t),r.cross(gt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){gt.subVectors(r,t),Nt.subVectors(i,t),ir.subVectors(e,t);const o=gt.dot(gt),a=gt.dot(Nt),c=gt.dot(ir),l=Nt.dot(Nt),d=Nt.dot(ir),f=o*l-a*a;if(f===0)return s.set(-2,-1,-1);const p=1/f,m=(l*c-a*d)*p,_=(o*d-a*c)*p;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ut),Ut.x>=0&&Ut.y>=0&&Ut.x+Ut.y<=1}static getUV(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Ut),c.set(0,0),c.addScaledVector(s,Ut.x),c.addScaledVector(o,Ut.y),c.addScaledVector(a,Ut.z),c}static isFrontFacing(e,t,i,r){return gt.subVectors(i,t),Nt.subVectors(e,t),gt.cross(Nt).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gt.subVectors(this.c,this.b),Nt.subVectors(this.a,this.b),gt.cross(Nt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ot.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ot.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Ot.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Ot.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ot.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;gi.subVectors(r,i),_i.subVectors(s,i),nr.subVectors(e,i);const c=gi.dot(nr),l=_i.dot(nr);if(c<=0&&l<=0)return t.copy(i);rr.subVectors(e,r);const d=gi.dot(rr),f=_i.dot(rr);if(d>=0&&f<=d)return t.copy(r);const p=c*f-d*l;if(p<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(i).addScaledVector(gi,o);sr.subVectors(e,s);const m=gi.dot(sr),_=_i.dot(sr);if(_>=0&&m<=_)return t.copy(s);const g=m*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(i).addScaledVector(_i,a);const S=d*_-m*f;if(S<=0&&f-d>=0&&m-_>=0)return Ls.subVectors(s,r),a=(f-d)/(f-d+(m-_)),t.copy(r).addScaledVector(Ls,a);const u=1/(S+g+p);return o=g*u,a=p*u,t.copy(i).addScaledVector(gi,o).addScaledVector(_i,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Pr extends Oi{constructor(e){super();this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Pr.prototype.isMeshBasicMaterial=!0;const Ds=new ke,xi=new xa,ar=new In,Wt=new P,Xt=new P,qt=new P,or=new P,lr=new P,cr=new P,mn=new P,gn=new P,_n=new P,xn=new Pe,vn=new Pe,Mn=new Pe,ur=new P,yn=new P;class Bt extends at{constructor(e=new zt,t=new Pr){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),ar.copy(i.boundingSphere),ar.applyMatrix4(s),e.ray.intersectsSphere(ar)===!1)||(Ds.copy(s).invert(),xi.copy(e.ray).applyMatrix4(Ds),i.boundingBox!==null&&xi.intersectsBox(i.boundingBox)===!1))return;let o;if(i.isBufferGeometry){const a=i.index,c=i.attributes.position,l=i.morphAttributes.position,d=i.morphTargetsRelative,f=i.attributes.uv,p=i.attributes.uv2,m=i.groups,_=i.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,S=m.length;g<S;g++){const u=m[g],h=r[u.materialIndex],T=Math.max(u.start,_.start),y=Math.min(a.count,Math.min(u.start+u.count,_.start+_.count));for(let b=T,L=y;b<L;b+=3){const C=a.getX(b),$=a.getX(b+1),ie=a.getX(b+2);o=Sn(this,h,e,xi,c,l,d,f,p,C,$,ie),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=u.materialIndex,t.push(o))}}else{const g=Math.max(0,_.start),S=Math.min(a.count,_.start+_.count);for(let u=g,h=S;u<h;u+=3){const T=a.getX(u),y=a.getX(u+1),b=a.getX(u+2);o=Sn(this,r,e,xi,c,l,d,f,p,T,y,b),o&&(o.faceIndex=Math.floor(u/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,S=m.length;g<S;g++){const u=m[g],h=r[u.materialIndex],T=Math.max(u.start,_.start),y=Math.min(c.count,Math.min(u.start+u.count,_.start+_.count));for(let b=T,L=y;b<L;b+=3){const C=b,$=b+1,ie=b+2;o=Sn(this,h,e,xi,c,l,d,f,p,C,$,ie),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=u.materialIndex,t.push(o))}}else{const g=Math.max(0,_.start),S=Math.min(c.count,_.start+_.count);for(let u=g,h=S;u<h;u+=3){const T=u,y=u+1,b=u+2;o=Sn(this,r,e,xi,c,l,d,f,p,T,y,b),o&&(o.faceIndex=Math.floor(u/3),t.push(o))}}}else i.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Bt.prototype.isMesh=!0;function ol(n,e,t,i,r,s,o,a){let c;if(e.side===He?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side!==Ci,a),c===null)return null;yn.copy(a),yn.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(yn);return l<t.near||l>t.far?null:{distance:l,point:yn.clone(),object:n}}function Sn(n,e,t,i,r,s,o,a,c,l,d,f){Wt.fromBufferAttribute(r,l),Xt.fromBufferAttribute(r,d),qt.fromBufferAttribute(r,f);const p=n.morphTargetInfluences;if(s&&p){mn.set(0,0,0),gn.set(0,0,0),_n.set(0,0,0);for(let _=0,g=s.length;_<g;_++){const S=p[_],u=s[_];S!==0&&(or.fromBufferAttribute(u,l),lr.fromBufferAttribute(u,d),cr.fromBufferAttribute(u,f),o?(mn.addScaledVector(or,S),gn.addScaledVector(lr,S),_n.addScaledVector(cr,S)):(mn.addScaledVector(or.sub(Wt),S),gn.addScaledVector(lr.sub(Xt),S),_n.addScaledVector(cr.sub(qt),S)))}Wt.add(mn),Xt.add(gn),qt.add(_n)}n.isSkinnedMesh&&(n.boneTransform(l,Wt),n.boneTransform(d,Xt),n.boneTransform(f,qt));const m=ol(n,e,t,i,Wt,Xt,qt,ur);if(m){a&&(xn.fromBufferAttribute(a,l),vn.fromBufferAttribute(a,d),Mn.fromBufferAttribute(a,f),m.uv=Ot.getUV(ur,Wt,Xt,qt,xn,vn,Mn,new Pe)),c&&(xn.fromBufferAttribute(c,l),vn.fromBufferAttribute(c,d),Mn.fromBufferAttribute(c,f),m.uv2=Ot.getUV(ur,Wt,Xt,qt,xn,vn,Mn,new Pe));const _={a:l,b:d,c:f,normal:new P,materialIndex:0};Ot.getNormal(Wt,Xt,qt,_.normal),m.face=_}return m}var ll=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vUv ).g;

#endif
`,cl=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,ul=`
#ifdef USE_ALPHATEST

	if ( diffuseColor.a < alphaTest ) discard;

#endif
`,hl=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,dl=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`,fl=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,pl=`
vec3 transformed = vec3( position );
`,ml=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,gl=`

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney\u2019s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( f0, f90, dotVH );

	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

	float D = D_GGX( alpha, dotNH );

	return F * ( V * D );

}

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light


float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( specularColor, 1.0, dotVH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );

}

vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );

	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );

	return sheenColor * ( D * V );

}

#endif
`,_l=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );

		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;		// normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`,xl=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;

	}
	#pragma unroll_loop_end

	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

		bool clipped = true;

		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;

		}
		#pragma unroll_loop_end

		if ( clipped ) discard;

	#endif

#endif
`,vl=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,Ml=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,yl=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,Sl=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,El=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,bl=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`,wl=`
#if defined( USE_COLOR_ALPHA )

	vColor = vec4( 1.0 );

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif
`,Tl=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {

	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );

	return fract( sin( sn ) * c );

}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

// https://en.wikipedia.org/wiki/Relative_luminance
float linearToRelativeLuminance( const in vec3 color ) {

	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );

	return dot( weights, color.rgb );

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}
`,Al=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

	float getFace( vec3 direction ) {

		vec3 absDirection = abs( direction );

		float face = - 1.0;

		if ( absDirection.x > absDirection.z ) {

			if ( absDirection.x > absDirection.y )

				face = direction.x > 0.0 ? 0.0 : 3.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		} else {

			if ( absDirection.z > absDirection.y )

				face = direction.z > 0.0 ? 2.0 : 5.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		}

		return face;

	}

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );

		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;

		if ( face > 2.0 ) {

			uv.y += faceSize;

			face -= 3.0;

		}

		uv.x += face * faceSize;

		if ( mipInt < cubeUV_maxMipLevel ) {

			uv.y += 2.0 * cubeUV_maxTileSize;

		}

		uv.y += filterInt * 2.0 * cubeUV_minTileSize;

		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );

		uv *= texelSize;

		return texture2D( envMap, uv ).rgb;

	}

	// These defines must match with PMREMGenerator

	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0

	float roughnessToMip( float roughness ) {

		float mip = 0.0;

		if ( roughness >= r1 ) {

			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;

		} else if ( roughness >= r4 ) {

			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;

		} else if ( roughness >= r5 ) {

			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;

		} else if ( roughness >= r6 ) {

			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;

		} else {

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

		return mip;

	}

	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {

		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );

		float mipF = fract( mip );

		float mipInt = floor( mip );

		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );

		if ( mipF == 0.0 ) {

			return vec4( color0, 1.0 );

		} else {

			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );

			return vec4( mix( color0, color1, mipF ), 1.0 );

		}

	}

#endif
`,Rl=`
vec3 transformedNormal = objectNormal;

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 m = mat3( instanceMatrix );

	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );

	transformedNormal = m * transformedNormal;

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`,Cl=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,Ll=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );

#endif
`,Dl=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vUv );

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,Pl=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,Fl=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,Il=`

vec4 LinearToLinear( in vec4 value ) {
	return value;
}

vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`,Nl=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`,Ul=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`,Ol=`
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`,Bl=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`,zl=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) {

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`,Gl=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,Hl=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,Vl=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,kl=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`,Wl=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );

	#endif

}
`,Xl=`
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		lightMapIrradiance *= PI;

	#endif

	reflectedLight.indirectDiffuse += lightMapIrradiance;

#endif
`,ql=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,Yl=`
vec3 diffuse = vec3( 1.0 );

GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );

GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;

vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif

IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;

vIndirectFront += getAmbientLightIrradiance( ambientLightColor );

vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );

#ifdef DOUBLE_SIDED

	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );

	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );

#endif

#if NUM_POINT_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		getPointLightInfo( pointLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;

		#endif

	}
	#pragma unroll_loop_end

#endif

#if NUM_SPOT_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		getSpotLightInfo( spotLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;

		#endif
	}
	#pragma unroll_loop_end

#endif

#if NUM_DIR_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;

		#endif

	}
	#pragma unroll_loop_end

#endif

#if NUM_HEMI_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		#ifdef DOUBLE_SIDED

			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );

		#endif

	}
	#pragma unroll_loop_end

#endif
`,$l=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	#if defined ( PHYSICALLY_CORRECT_LIGHTS )

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	#else

		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );

		}

		return 1.0;

	#endif

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {

		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometry.position;

		light.direction = normalize( lVector );

		float lightDistance = length( lVector );

		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometry.position;

		light.direction = normalize( lVector );

		float angleCos = dot( light.direction, spotLight.direction );

		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		if ( spotAttenuation > 0.0 ) {

			float lightDistance = length( lVector );

			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );

		} else {

			light.color = vec3( 0.0 );
			light.visible = false;

		}

	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {

		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		return irradiance;

	}

#endif
`,Zl=`
#if defined( USE_ENVMAP )

	#ifdef ENVMAP_MODE_REFRACTION

		uniform float refractionRatio;

	#endif

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#if defined( ENVMAP_TYPE_CUBE_UV )

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#if defined( ENVMAP_TYPE_CUBE_UV )

			vec3 reflectVec;

			#ifdef ENVMAP_MODE_REFLECTION

				reflectVec = reflect( - viewDir, normal );

				// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			#else

				reflectVec = refract( - viewDir, normal, refractionRatio );

			#endif

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

#endif
`,jl=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,Kl=`
varying vec3 vViewPosition;

struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon

#define Material_LightProbeLOD( material )	(0)
`,Jl=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,Ql=`
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong

#define Material_LightProbeLOD( material )	(0)
`,ec=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

#ifdef IOR

	#ifdef SPECULAR

		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;

		#ifdef USE_SPECULARINTENSITYMAP

			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;

		#endif

		#ifdef USE_SPECULARCOLORMAP

			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;

		#endif

		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );

	#else

		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;

	#endif

	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;

#endif

#ifdef USE_CLEARCOAT

	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;

	#ifdef USE_CLEARCOATMAP

		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheenColor;

	#ifdef USE_SHEENCOLORMAP

		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;

	#endif

	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );

	#ifdef USE_SHEENROUGHNESSMAP

		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;

	#endif

#endif
`,tc=`
struct PhysicalMaterial {

	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;

	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif

	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif

};

// temporary
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );

// This is a curve-fit approxmation to the "Charlie sheen" BRDF integrated over the hemisphere from 
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found
// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;

	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;

	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;

	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );

	return saturate( DG * RECIPROCAL_PI );

}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;

	return fab;

}

vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	return specularColor * fab.x + specularF90 * fab.y;

}

// Fdez-Ag\xFCera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;

		vec2 uv = LTC_Uv( normal, viewDir, roughness );

		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );

		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifdef USE_CLEARCOAT

		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = dotNLcc * directLight.color;

		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );

	#endif

	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );


	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );

	#endif

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );

	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );

	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;

	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`,ic=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - If you have defined an RE_IndirectSpecular, you need to also provide a Material_LightProbeLOD. <---- ???
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef USE_CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,nc=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		#ifndef PHYSICALLY_CORRECT_LIGHTS

			lightMapIrradiance *= PI;

		#endif

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getIBLIrradiance( geometry.normal );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`,rc=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );

#endif
`,sc=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,ac=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,oc=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`,lc=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

	#else

		if ( isPerspectiveMatrix( projectionMatrix ) ) {

			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;

			gl_Position.z *= gl_Position.w;

		}

	#endif

#endif
`,cc=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)

		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`,uc=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,hc=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

#endif

#ifdef USE_MAP

	diffuseColor *= texture2D( map, uv );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`,dc=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	uniform mat3 uvTransform;

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,fc=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,pc=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,mc=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];

		}

	#else

		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];

	#endif

#endif
`,gc=`
#ifdef USE_MORPHTARGETS

	uniform float morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;

		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {

			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;

			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;

		}

	#else

		#ifndef USE_MORPHNORMALS

			uniform float morphTargetInfluences[ 8 ];

		#else

			uniform float morphTargetInfluences[ 4 ];

		#endif

	#endif

#endif
`,_c=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			#ifndef USE_MORPHNORMALS

				if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];

			#else

				if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];

			#endif

		}

	#else

		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];

		#ifndef USE_MORPHNORMALS

			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];

		#endif

	#endif

#endif
`,xc=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	// Workaround for Adreno GPUs not able to do dFdx( vViewPosition )

	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	#ifdef USE_TANGENT

		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );

		#ifdef DOUBLE_SIDED

			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;

		#endif

		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )

			mat3 vTBN = mat3( tangent, bitangent, normal );

		#endif

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 geometryNormal = normal;

`,vc=`

#ifdef OBJECTSPACE_NORMALMAP

	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( TANGENTSPACE_NORMALMAP )

	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	#ifdef USE_TANGENT

		normal = normalize( vTBN * mapN );

	#else

		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );

	#endif

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`,Mc=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,yc=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,Sc=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,Ec=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef OBJECTSPACE_NORMALMAP

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

	}

#endif
`,bc=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = geometryNormal;

#endif
`,wc=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	#ifdef USE_TANGENT

		clearcoatNormal = normalize( vTBN * clearcoatMapN );

	#else

		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );

	#endif

#endif
`,Tc=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif
`,Ac=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

// https://github.com/mrdoob/three.js/pull/22425
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,Rc=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8; // tidy overflow
	return r * PackUpscale;
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}

vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}

vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}
`,Cc=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,Lc=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,Dc=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,Pc=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift acording to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`,Fc=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,Ic=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,Nc=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		// if ( something && something ) breaks ATI OpenGL shader compiler
		// if ( all( something, something ) ) using this instead

		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );

		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );

		bool frustumTest = all( frustumTestVec );

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;

			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;

			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_VSM )

			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return shadow;

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// dp = normalized distance from light to fragment position
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
		dp += shadowBias;

		// bd3D = base direction 3D
		vec3 bd3D = normalize( lightToPosition );

		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );

		#else // no percentage-closer filtering

			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

		#endif

	}

#endif
`,Uc=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`,Oc=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0

		// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif
`,Bc=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`,zc=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,Gc=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	#ifdef BONE_TEXTURE

		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;

		mat4 getBoneMatrix( const in float i ) {

			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );

			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );

			y = dy * ( y + 0.5 );

			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );

			mat4 bone = mat4( v1, v2, v3, v4 );

			return bone;

		}

	#else

		uniform mat4 boneMatrices[ MAX_BONES ];

		mat4 getBoneMatrix( const in float i ) {

			mat4 bone = boneMatrices[ int(i) ];
			return bone;

		}

	#endif

#endif
`,Hc=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,Vc=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`,kc=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,Wc=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,Xc=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,qc=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return toneMappingExposure * color;

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 OptimizedCineonToneMapping( vec3 color ) {

	// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`,Yc=`
#ifdef USE_TRANSMISSION

	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;

	#ifdef USE_TRANSMISSIONMAP

		transmissionFactor *= texture2D( transmissionMap, vUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		thicknessFactor *= texture2D( thicknessMap, vUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );

	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );

	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif
`,$c=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		uniform sampler2D transmissionMap;

	#endif

	#ifdef USE_THICKNESSMAP

		uniform sampler2D thicknessMap;

	#endif

	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;

	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;

	varying vec3 vWorldPosition;

	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independant scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );

		#ifdef TEXTURE_LOD_EXT

			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );

		#else

			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );

		#endif

	}

	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( attenuationDistance == 0.0 ) {

			// Attenuation distance is +\u221E (which we indicate by zero), i.e. the transmitted color is not attenuated at all.
			return radiance;

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance * radiance;

		}

	}

	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {

		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;

		// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;

		// Sample framebuffer to get pixel the refracted ray hits.
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );

		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );

	}
#endif
`,Zc=`
#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )

	varying vec2 vUv;

#endif
`,jc=`
#ifdef USE_UV

	#ifdef UVS_VERTEX_ONLY

		vec2 vUv;

	#else

		varying vec2 vUv;

	#endif

	uniform mat3 uvTransform;

#endif
`,Kc=`
#ifdef USE_UV

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

#endif
`,Jc=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	varying vec2 vUv2;

#endif
`,Qc=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	attribute vec2 uv2;
	varying vec2 vUv2;

	uniform mat3 uv2Transform;

#endif
`,eu=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;

#endif
`,tu=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`;const iu=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,nu=`
uniform sampler2D t2D;

varying vec2 vUv;

void main() {

	gl_FragColor = texture2D( t2D, vUv );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,ru=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,su=`
#include <envmap_common_pars_fragment>
uniform float opacity;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>

	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,au=`
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vHighPrecisionZW = gl_Position.zw;

}
`,ou=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#endif

}
`,lu=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`,cu=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`,uu=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,hu=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,du=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,fu=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,pu=`
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`,mu=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,gu=`
#define LAMBERT

varying vec3 vLightFront;
varying vec3 vIndirectFront;

#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}
`,_u=`
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

varying vec3 vLightFront;
varying vec3 vIndirectFront;

#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif


#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>

	// accumulation

	#ifdef DOUBLE_SIDED

		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;

	#else

		reflectedLight.indirectDiffuse += vIndirectFront;

	#endif

	#include <lightmap_fragment>

	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );

	#ifdef DOUBLE_SIDED

		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;

	#else

		reflectedLight.directDiffuse = vLightFront;

	#endif

	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();

	// modulation

	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}
`,xu=`
#define MATCAP

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`,vu=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Mu=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,yu=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`,Su=`
#define PHONG

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Eu=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,bu=`
#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

#ifdef USE_TRANSMISSION

	vWorldPosition = worldPosition.xyz;

#endif
}
`,wu=`
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif

	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif

#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;

	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;

	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;

	#endif

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Tu=`
#define TOON

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Au=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Ru=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

	#ifdef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#endif

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`,Cu=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,Lu=`
#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Du=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,Pu=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );

	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

	#ifndef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) scale *= - mvPosition.z;

	#endif

	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

	mvPosition.xy += rotatedPosition;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,Fu=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,ye={alphamap_fragment:ll,alphamap_pars_fragment:cl,alphatest_fragment:ul,alphatest_pars_fragment:hl,aomap_fragment:dl,aomap_pars_fragment:fl,begin_vertex:pl,beginnormal_vertex:ml,bsdfs:gl,bumpmap_pars_fragment:_l,clipping_planes_fragment:xl,clipping_planes_pars_fragment:vl,clipping_planes_pars_vertex:Ml,clipping_planes_vertex:yl,color_fragment:Sl,color_pars_fragment:El,color_pars_vertex:bl,color_vertex:wl,common:Tl,cube_uv_reflection_fragment:Al,defaultnormal_vertex:Rl,displacementmap_pars_vertex:Cl,displacementmap_vertex:Ll,emissivemap_fragment:Dl,emissivemap_pars_fragment:Pl,encodings_fragment:Fl,encodings_pars_fragment:Il,envmap_fragment:Nl,envmap_common_pars_fragment:Ul,envmap_pars_fragment:Ol,envmap_pars_vertex:Bl,envmap_physical_pars_fragment:Zl,envmap_vertex:zl,fog_vertex:Gl,fog_pars_vertex:Hl,fog_fragment:Vl,fog_pars_fragment:kl,gradientmap_pars_fragment:Wl,lightmap_fragment:Xl,lightmap_pars_fragment:ql,lights_lambert_vertex:Yl,lights_pars_begin:$l,lights_toon_fragment:jl,lights_toon_pars_fragment:Kl,lights_phong_fragment:Jl,lights_phong_pars_fragment:Ql,lights_physical_fragment:ec,lights_physical_pars_fragment:tc,lights_fragment_begin:ic,lights_fragment_maps:nc,lights_fragment_end:rc,logdepthbuf_fragment:sc,logdepthbuf_pars_fragment:ac,logdepthbuf_pars_vertex:oc,logdepthbuf_vertex:lc,map_fragment:cc,map_pars_fragment:uc,map_particle_fragment:hc,map_particle_pars_fragment:dc,metalnessmap_fragment:fc,metalnessmap_pars_fragment:pc,morphnormal_vertex:mc,morphtarget_pars_vertex:gc,morphtarget_vertex:_c,normal_fragment_begin:xc,normal_fragment_maps:vc,normal_pars_fragment:Mc,normal_pars_vertex:yc,normal_vertex:Sc,normalmap_pars_fragment:Ec,clearcoat_normal_fragment_begin:bc,clearcoat_normal_fragment_maps:wc,clearcoat_pars_fragment:Tc,output_fragment:Ac,packing:Rc,premultiplied_alpha_fragment:Cc,project_vertex:Lc,dithering_fragment:Dc,dithering_pars_fragment:Pc,roughnessmap_fragment:Fc,roughnessmap_pars_fragment:Ic,shadowmap_pars_fragment:Nc,shadowmap_pars_vertex:Uc,shadowmap_vertex:Oc,shadowmask_pars_fragment:Bc,skinbase_vertex:zc,skinning_pars_vertex:Gc,skinning_vertex:Hc,skinnormal_vertex:Vc,specularmap_fragment:kc,specularmap_pars_fragment:Wc,tonemapping_fragment:Xc,tonemapping_pars_fragment:qc,transmission_fragment:Yc,transmission_pars_fragment:$c,uv_pars_fragment:Zc,uv_pars_vertex:jc,uv_vertex:Kc,uv2_pars_fragment:Jc,uv2_pars_vertex:Qc,uv2_vertex:eu,worldpos_vertex:tu,background_vert:iu,background_frag:nu,cube_vert:ru,cube_frag:su,depth_vert:au,depth_frag:ou,distanceRGBA_vert:lu,distanceRGBA_frag:cu,equirect_vert:uu,equirect_frag:hu,linedashed_vert:du,linedashed_frag:fu,meshbasic_vert:pu,meshbasic_frag:mu,meshlambert_vert:gu,meshlambert_frag:_u,meshmatcap_vert:xu,meshmatcap_frag:vu,meshnormal_vert:Mu,meshnormal_frag:yu,meshphong_vert:Su,meshphong_frag:Eu,meshphysical_vert:bu,meshphysical_frag:wu,meshtoon_vert:Tu,meshtoon_frag:Au,points_vert:Ru,points_frag:Cu,shadow_vert:Lu,shadow_frag:Du,sprite_vert:Pu,sprite_frag:Fu},K={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new xt},uv2Transform:{value:new xt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xt}}},At={basic:{uniforms:Ze([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Ze([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.fog,K.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Ze([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Ze([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Ze([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Ze([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Ze([K.points,K.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Ze([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Ze([K.common,K.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Ze([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Ze([K.sprite,K.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},cube:{uniforms:Ze([K.envmap,{opacity:{value:1}}]),vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distanceRGBA:{uniforms:Ze([K.common,K.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distanceRGBA_vert,fragmentShader:ye.distanceRGBA_frag},shadow:{uniforms:Ze([K.lights,K.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};At.physical={uniforms:Ze([At.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};function Iu(n,e,t,i,r,s){const o=new Ce(0);let a=r===!0?0:1,c,l,d=null,f=0,p=null;function m(g,S){let u=!1,h=S.isScene===!0?S.background:null;h&&h.isTexture&&(h=e.get(h));const T=n.xr,y=T.getSession&&T.getSession();y&&y.environmentBlendMode==="additive"&&(h=null),h===null?_(o,a):h&&h.isColor&&(_(h,1),u=!0),(n.autoClear||u)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),h&&(h.isCubeTexture||h.mapping===Pn)?(l===void 0&&(l=new Bt(new tn(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:Di(At.cube.uniforms),vertexShader:At.cube.vertexShader,fragmentShader:At.cube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,L,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=h,l.material.uniforms.flipEnvMap.value=h.isCubeTexture&&h.isRenderTargetTexture===!1?-1:1,(d!==h||f!==h.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=h,f=h.version,p=n.toneMapping),g.unshift(l,l.geometry,l.material,0,0,null)):h&&h.isTexture&&(c===void 0&&(c=new Bt(new Dr(2,2),new Pi({name:"BackgroundMaterial",uniforms:Di(At.background.uniforms),vertexShader:At.background.vertexShader,fragmentShader:At.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=h,h.matrixAutoUpdate===!0&&h.updateMatrix(),c.material.uniforms.uvTransform.value.copy(h.matrix),(d!==h||f!==h.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=h,f=h.version,p=n.toneMapping),g.unshift(c,c.geometry,c.material,0,0,null))}function _(g,S){t.buffers.color.setClear(g.r,g.g,g.b,S,s)}return{getClearColor:function(){return o},setClearColor:function(g,S=1){o.set(g),a=S,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,_(o,a)},render:m}}function Nu(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=g(null);let l=c;function d(F,B,O,N,V){let q=!1;if(o){const se=_(N,O,B);l!==se&&(l=se,p(l.object)),q=S(N,V),q&&u(N,V)}else{const se=B.wireframe===!0;(l.geometry!==N.id||l.program!==O.id||l.wireframe!==se)&&(l.geometry=N.id,l.program=O.id,l.wireframe=se,q=!0)}F.isInstancedMesh===!0&&(q=!0),V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),q&&(C(F,B,O,N),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(F){return i.isWebGL2?n.bindVertexArray(F):s.bindVertexArrayOES(F)}function m(F){return i.isWebGL2?n.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function _(F,B,O){const N=O.wireframe===!0;let V=a[F.id];V===void 0&&(V={},a[F.id]=V);let q=V[B.id];q===void 0&&(q={},V[B.id]=q);let se=q[N];return se===void 0&&(se=g(f()),q[N]=se),se}function g(F){const B=[],O=[],N=[];for(let V=0;V<r;V++)B[V]=0,O[V]=0,N[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:O,attributeDivisors:N,object:F,attributes:{},index:null}}function S(F,B){const O=l.attributes,N=F.attributes;let V=0;for(const q in N){const se=O[q],G=N[q];if(se===void 0||se.attribute!==G||se.data!==G.data)return!0;V++}return l.attributesNum!==V||l.index!==B}function u(F,B){const O={},N=F.attributes;let V=0;for(const q in N){const se=N[q],G={};G.attribute=se,se.data&&(G.data=se.data),O[q]=G,V++}l.attributes=O,l.attributesNum=V,l.index=B}function h(){const F=l.newAttributes;for(let B=0,O=F.length;B<O;B++)F[B]=0}function T(F){y(F,0)}function y(F,B){const O=l.newAttributes,N=l.enabledAttributes,V=l.attributeDivisors;O[F]=1,N[F]===0&&(n.enableVertexAttribArray(F),N[F]=1),V[F]!==B&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,B),V[F]=B)}function b(){const F=l.newAttributes,B=l.enabledAttributes;for(let O=0,N=B.length;O<N;O++)B[O]!==F[O]&&(n.disableVertexAttribArray(O),B[O]=0)}function L(F,B,O,N,V,q){i.isWebGL2===!0&&(O===n.INT||O===n.UNSIGNED_INT)?n.vertexAttribIPointer(F,B,O,V,q):n.vertexAttribPointer(F,B,O,N,V,q)}function C(F,B,O,N){if(i.isWebGL2===!1&&(F.isInstancedMesh||N.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;h();const V=N.attributes,q=O.getAttributes(),se=B.defaultAttributeValues;for(const G in q){const X=q[G];if(X.location>=0){let ee=V[G];if(ee===void 0&&(G==="instanceMatrix"&&F.instanceMatrix&&(ee=F.instanceMatrix),G==="instanceColor"&&F.instanceColor&&(ee=F.instanceColor)),ee!==void 0){const ae=ee.normalized,ce=ee.itemSize,A=t.get(ee);if(A===void 0)continue;const Le=A.buffer,fe=A.type,_e=A.bytesPerElement;if(ee.isInterleavedBufferAttribute){const ne=ee.data,Ae=ne.stride,Se=ee.offset;if(ne&&ne.isInstancedInterleavedBuffer){for(let xe=0;xe<X.locationSize;xe++)y(X.location+xe,ne.meshPerAttribute);F.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let xe=0;xe<X.locationSize;xe++)T(X.location+xe);n.bindBuffer(n.ARRAY_BUFFER,Le);for(let xe=0;xe<X.locationSize;xe++)L(X.location+xe,ce/X.locationSize,fe,ae,Ae*_e,(Se+ce/X.locationSize*xe)*_e)}else{if(ee.isInstancedBufferAttribute){for(let ne=0;ne<X.locationSize;ne++)y(X.location+ne,ee.meshPerAttribute);F.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ne=0;ne<X.locationSize;ne++)T(X.location+ne);n.bindBuffer(n.ARRAY_BUFFER,Le);for(let ne=0;ne<X.locationSize;ne++)L(X.location+ne,ce/X.locationSize,fe,ae,ce*_e,ce/X.locationSize*ne*_e)}}else if(se!==void 0){const ae=se[G];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(X.location,ae);break;case 3:n.vertexAttrib3fv(X.location,ae);break;case 4:n.vertexAttrib4fv(X.location,ae);break;default:n.vertexAttrib1fv(X.location,ae)}}}}b()}function $(){x();for(const F in a){const B=a[F];for(const O in B){const N=B[O];for(const V in N)m(N[V].object),delete N[V];delete B[O]}delete a[F]}}function ie(F){if(a[F.id]===void 0)return;const B=a[F.id];for(const O in B){const N=B[O];for(const V in N)m(N[V].object),delete N[V];delete B[O]}delete a[F.id]}function Z(F){for(const B in a){const O=a[B];if(O[F.id]===void 0)continue;const N=O[F.id];for(const V in N)m(N[V].object),delete N[V];delete O[F.id]}}function x(){R(),l!==c&&(l=c,p(l.object))}function R(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:x,resetDefaultState:R,dispose:$,releaseStatesOfGeometry:ie,releaseStatesOfProgram:Z,initAttributes:h,enableAttribute:T,disableUnusedAttributes:b}}function Uu(n,e,t,i){const r=i.isWebGL2;let s;function o(l){s=l}function a(l,d){n.drawArrays(s,l,d),t.update(d,s,1)}function c(l,d,f){if(f===0)return;let p,m;if(r)p=n,m="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,l,d,f),t.update(d,s,f)}this.setMode=o,this.render=a,this.renderInstances=c}function Ou(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),h=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,y=o||e.has("OES_texture_float"),b=T&&y,L=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:S,maxVaryings:u,maxFragmentUniforms:h,vertexTextures:T,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:L}}function Bu(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Yt,a=new xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p,m){const _=f.length!==0||p||i!==0||r;return r=p,t=d(f,m,0),i=f.length,_},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1,l()},this.setState=function(f,p,m){const _=f.clippingPlanes,g=f.clipIntersection,S=f.clipShadows,u=n.get(f);if(!r||_===null||_.length===0||s&&!S)s?d(null):l();else{const h=s?0:i,T=h*4;let y=u.clippingState||null;c.value=y,y=d(_,p,T,m);for(let b=0;b!==T;++b)y[b]=t[b];u.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=h}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,p,m,_){const g=f!==null?f.length:0;let S=null;if(g!==0){if(S=c.value,_!==!0||S===null){const u=m+g*4,h=p.matrixWorldInverse;a.getNormalMatrix(h),(S===null||S.length<u)&&(S=new Float32Array(u));for(let T=0,y=m;T!==g;++T,y+=4)o.copy(f[T]).applyMatrix4(h,a),o.normal.toArray(S,y),S[y+3]=o.constant}c.value=S,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,S}}let vi;class va{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vi===void 0&&(vi=Dn("canvas")),vi.width=e.width,vi.height=e.height;const i=vi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Dn("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ai(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ai(t[i]/255)*255):t[i]=Ai(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zu=0;class ut extends Ni{constructor(e=ut.DEFAULT_IMAGE,t=ut.DEFAULT_MAPPING,i=st,r=st,s=tt,o=Fn,a=Je,c=jt,l=1,d=oi){super();Object.defineProperty(this,"id",{value:zu++}),this.uuid=Ki(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const r=this.image;if(r.uuid===void 0&&(r.uuid=Ki()),!t&&e.images[r.uuid]===void 0){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(hr(r[o].image)):s.push(hr(r[o]))}else s=hr(r);e.images[r.uuid]={uuid:r.uuid,url:s}}i.image=r.uuid}return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ua)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yr:e.x=e.x-Math.floor(e.x);break;case st:e.x=e.x<0?0:1;break;case Sr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yr:e.y=e.y-Math.floor(e.y);break;case st:e.y=e.y<0?0:1;break;case Sr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}ut.DEFAULT_IMAGE=void 0;ut.DEFAULT_MAPPING=ua;ut.prototype.isTexture=!0;function hr(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?va.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Rt extends Ni{constructor(e,t,i={}){super();this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t),this.texture=new ut(void 0,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:tt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image=Object.assign({},e.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Rt.prototype.isWebGLRenderTarget=!0;class Fr extends at{constructor(){super();this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Fr.prototype.isCamera=!0;class _t extends Fr{constructor(e=50,t=1,i=.1,r=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(kn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(kn*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}_t.prototype.isPerspectiveCamera=!0;const Mi=90,yi=1;class Gu extends at{constructor(e,t,i){super();if(this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new _t(Mi,yi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new P(1,0,0)),this.add(r);const s=new _t(Mi,yi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new P(-1,0,0)),this.add(s);const o=new _t(Mi,yi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new P(0,1,0)),this.add(o);const a=new _t(Mi,yi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new P(0,-1,0)),this.add(a);const c=new _t(Mi,yi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new P(0,0,1)),this.add(c);const l=new _t(Mi,yi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new P(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,c,l]=this.children,d=e.xr.enabled,f=e.getRenderTarget();e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(f),e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class Ir extends ut{constructor(e,t,i,r,s,o,a,c,l,d){e=e!==void 0?e:[],t=t!==void 0?t:Qi;super(e,t,i,r,s,o,a,c,l,d);this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Ir.prototype.isCubeTexture=!0;class Ma extends Rt{constructor(e,t,i){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=i);super(e,e,t);t=t||{},this.texture=new Ir(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Je,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new tn(5,5,5),s=new Pi({name:"CubemapFromEquirect",uniforms:Di(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:He,blending:$t});s.uniforms.tEquirect.value=t;const o=new Bt(r,s),a=t.minFilter;return t.minFilter===Fn&&(t.minFilter=tt),new Gu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}Ma.prototype.isWebGLCubeRenderTarget=!0;function Hu(n){let e=new WeakMap;function t(o,a){return a===vr?o.mapping=Qi:a===Mr&&(o.mapping=en),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===vr||a===Mr)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ma(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ya extends Fr{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}ya.prototype.isOrthographicCamera=!0;class Nn extends Pi{constructor(e){super(e);this.type="RawShaderMaterial"}}Nn.prototype.isRawShaderMaterial=!0;const Ri=4,Kt=8,wt=Math.pow(2,Kt),Sa=[.125,.215,.35,.446,.526,.582],Ea=Kt-Ri+1+Sa.length,Si=20,dr=new ya,{_lodPlanes:ki,_sizeLods:Ps,_sigmas:En}=Vu(),Fs=new Ce;let fr=null;const ni=(1+Math.sqrt(5))/2,Ei=1/ni,Is=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,ni,Ei),new P(0,ni,-Ei),new P(Ei,0,ni),new P(-Ei,0,ni),new P(ni,Ei,0),new P(-ni,Ei,0)];class Ns{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=ku(Si),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){fr=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=Bs(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Os(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<ki.length;e++)ki[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fr),e.scissorTest=!1,bn(e,0,0,e.width,e.height)}_fromTexture(e,t){fr=this._renderer.getRenderTarget();const i=t||this._allocateTargets(e);return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(e){const t={magFilter:tt,minFilter:tt,generateMipmaps:!1,type:wi,format:Je,encoding:oi,depthBuffer:!1},i=Us(t);return i.depthBuffer=!e,this._pingPongRenderTarget===null&&(this._pingPongRenderTarget=Us(t)),i}_compileMaterial(e){const t=new Bt(ki[0],e);this._renderer.compile(t,dr)}_sceneToCubeUV(e,t,i,r){const a=new _t(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Fs),d.toneMapping=Zt,d.autoClear=!1;const m=new Pr({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),_=new Bt(new tn,m);let g=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,g=!0):(m.color.copy(Fs),g=!0);for(let u=0;u<6;u++){const h=u%3;h===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):h===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u])),bn(r,h*wt,u>2?wt:0,wt,wt),d.setRenderTarget(r),g&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Qi||e.mapping===en;r?(this._cubemapShader===null&&(this._cubemapShader=Bs()),this._cubemapShader.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectShader===null&&(this._equirectShader=Os());const s=r?this._cubemapShader:this._equirectShader,o=new Bt(ki[0],s),a=s.uniforms;a.envMap.value=e,r||a.texelSize.value.set(1/e.image.width,1/e.image.height),bn(t,0,0,3*wt,2*wt),i.setRenderTarget(t),i.render(o,dr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<Ea;r++){const s=Math.sqrt(En[r]*En[r]-En[r-1]*En[r-1]),o=Is[(r-1)%Is.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Bt(ki[r],l),p=l.uniforms,m=Ps[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Si-1),g=s/_,S=isFinite(s)?1+Math.floor(d*g):Si;S>Si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Si}`);const u=[];let h=0;for(let L=0;L<Si;++L){const C=L/g,$=Math.exp(-C*C/2);u.push($),L===0?h+=$:L<S&&(h+=2*$)}for(let L=0;L<u.length;L++)u[L]=u[L]/h;p.envMap.value=e.texture,p.samples.value=S,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a),p.dTheta.value=_,p.mipInt.value=Kt-i;const T=Ps[r],y=3*Math.max(0,wt-2*T),b=(r===0?0:2*wt)+2*T*(r>Kt-Ri?r-Kt+Ri:0);bn(t,y,b,3*T,2*T),c.setRenderTarget(t),c.render(f,dr)}}function Vu(){const n=[],e=[],t=[];let i=Kt;for(let r=0;r<Ea;r++){const s=Math.pow(2,i);e.push(s);let o=1/s;r>Kt-Ri?o=Sa[r-Kt+Ri-1]:r===0&&(o=0),t.push(o);const a=1/(s-1),c=-a/2,l=1+a/2,d=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,p=6,m=3,_=2,g=1,S=new Float32Array(m*p*f),u=new Float32Array(_*p*f),h=new Float32Array(g*p*f);for(let y=0;y<f;y++){const b=y%3*2/3-1,L=y>2?0:-1,C=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];S.set(C,m*p*y),u.set(d,_*p*y);const $=[y,y,y,y,y,y];h.set($,g*p*y)}const T=new zt;T.setAttribute("position",new ct(S,m)),T.setAttribute("uv",new ct(u,_)),T.setAttribute("faceIndex",new ct(h,g)),n.push(T),i>Ri&&i--}return{_lodPlanes:n,_sizeLods:e,_sigmas:t}}function Us(n){const e=new Rt(3*wt,3*wt,n);return e.texture.mapping=Pn,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function bn(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ku(n){const e=new Float32Array(n),t=new P(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t}},vertexShader:Nr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function Os(){const n=new Pe(1,1);return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:n}},vertexShader:Nr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = texture2D ( envMap, uv ).rgb;
				uv.x += texelSize.x;
				vec3 tr = texture2D ( envMap, uv ).rgb;
				uv.y += texelSize.y;
				vec3 br = texture2D ( envMap, uv ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = texture2D ( envMap, uv ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function Bs(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function Nr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Wu(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===vr||c===Mr,d=c===Qi||c===en;if(l||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Ns(n)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||d&&f&&r(f)){t===null&&(t=new Ns(n));const p=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Xu(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function qu(n,e,t,i){const r={},s=new WeakMap;function o(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);p.removeEventListener("dispose",o),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function c(f){const p=f.attributes;for(const _ in p)e.update(p[_],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const g=m[_];for(let S=0,u=g.length;S<u;S++)e.update(g[S],n.ARRAY_BUFFER)}}function l(f){const p=[],m=f.index,_=f.attributes.position;let g=0;if(m!==null){const h=m.array;g=m.version;for(let T=0,y=h.length;T<y;T+=3){const b=h[T+0],L=h[T+1],C=h[T+2];p.push(b,L,L,C,C,b)}}else{const h=_.array;g=_.version;for(let T=0,y=h.length/3-1;T<y;T+=3){const b=T+0,L=T+1,C=T+2;p.push(b,L,L,C,C,b)}}const S=new(_a(p)?ma:pa)(p,1);S.version=g;const u=s.get(f);u&&e.remove(u),s.set(f,S)}function d(f){const p=s.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:d}}function Yu(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function d(p,m){n.drawElements(s,m,a,p*c),t.update(m,s,1)}function f(p,m,_){if(_===0)return;let g,S;if(r)g=n,S="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),S="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[S](s,m,a,p*c,_),t.update(m,s,_)}this.setMode=o,this.setIndex=l,this.render=d,this.renderInstances=f}function $u(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}class Ur extends ut{constructor(e=null,t=1,i=1,r=1){super(null);this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=st,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Ur.prototype.isDataTexture2DArray=!0;function Zu(n,e){return n[0]-e[0]}function ju(n,e){return Math.abs(e[1])-Math.abs(n[1])}function zs(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function Ku(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new P,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,d,f,p){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const _=d.morphAttributes.position.length;let g=s.get(d);if(g===void 0||g.count!==_){let R=function(){Z.dispose(),s.delete(d),d.removeEventListener("dispose",R)};g!==void 0&&g.texture.dispose();const h=d.morphAttributes.normal!==void 0,T=d.morphAttributes.position,y=d.morphAttributes.normal||[],b=d.attributes.position.count,L=h===!0?2:1;let C=b*L,$=1;C>e.maxTextureSize&&($=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const ie=new Float32Array(C*$*4*_),Z=new Ur(ie,C,$,_);Z.format=Je,Z.type=ri,Z.needsUpdate=!0;const x=L*4;for(let F=0;F<_;F++){const B=T[F],O=y[F],N=C*$*4*F;for(let V=0;V<B.count;V++){o.fromBufferAttribute(B,V),B.normalized===!0&&zs(o,B);const q=V*x;ie[N+q+0]=o.x,ie[N+q+1]=o.y,ie[N+q+2]=o.z,ie[N+q+3]=0,h===!0&&(o.fromBufferAttribute(O,V),O.normalized===!0&&zs(o,O),ie[N+q+4]=o.x,ie[N+q+5]=o.y,ie[N+q+6]=o.z,ie[N+q+7]=0)}}g={count:_,texture:Z,size:new Pe(C,$)},s.set(d,g),d.addEventListener("dispose",R)}let S=0;for(let h=0;h<m.length;h++)S+=m[h];const u=d.morphTargetsRelative?1:1-S;p.getUniforms().setValue(n,"morphTargetBaseInfluence",u),p.getUniforms().setValue(n,"morphTargetInfluences",m),p.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),p.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const _=m===void 0?0:m.length;let g=i[d.id];if(g===void 0||g.length!==_){g=[];for(let y=0;y<_;y++)g[y]=[y,0];i[d.id]=g}for(let y=0;y<_;y++){const b=g[y];b[0]=y,b[1]=m[y]}g.sort(ju);for(let y=0;y<8;y++)y<_&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Zu);const S=d.morphAttributes.position,u=d.morphAttributes.normal;let h=0;for(let y=0;y<8;y++){const b=a[y],L=b[0],C=b[1];L!==Number.MAX_SAFE_INTEGER&&C?(S&&d.getAttribute("morphTarget"+y)!==S[L]&&d.setAttribute("morphTarget"+y,S[L]),u&&d.getAttribute("morphNormal"+y)!==u[L]&&d.setAttribute("morphNormal"+y,u[L]),r[y]=C,h+=C):(S&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),u&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),r[y]=0)}const T=d.morphTargetsRelative?1:1-h;p.getUniforms().setValue(n,"morphTargetBaseInfluence",T),p.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}class Or extends Rt{constructor(e,t,i={}){super(e,t,i);this.samples=4,this.ignoreDepthForMultisampleCopy=i.ignoreDepth!==void 0?i.ignoreDepth:!0,this.useRenderToTexture=i.useRenderToTexture!==void 0?i.useRenderToTexture:!1,this.useRenderbuffer=this.useRenderToTexture===!1}copy(e){return super.copy.call(this,e),this.samples=e.samples,this.useRenderToTexture=e.useRenderToTexture,this.useRenderbuffer=e.useRenderbuffer,this}}Or.prototype.isWebGLMultisampleRenderTarget=!0;function Ju(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,d=c.geometry,f=e.get(c,d);return r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER)),f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class ba extends ut{constructor(e=null,t=1,i=1,r=1){super(null);this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=st,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}ba.prototype.isDataTexture3D=!0;const wa=new ut,Ta=new Ur,Aa=new ba,Ra=new Ir,Gs=[],Hs=[],Vs=new Float32Array(16),ks=new Float32Array(9),Ws=new Float32Array(4);function Bi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Gs[r];if(s===void 0&&(s=new Float32Array(r),Gs[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function je(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Un(n,e){let t=Hs[e];t===void 0&&(t=new Int32Array(e),Hs[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Qu(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function eh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(et(t,e))return;n.uniform2fv(this.addr,e),je(t,e)}}function th(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(et(t,e))return;n.uniform3fv(this.addr,e),je(t,e)}}function ih(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(et(t,e))return;n.uniform4fv(this.addr,e),je(t,e)}}function nh(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),je(t,e)}else{if(et(t,i))return;Ws.set(i),n.uniformMatrix2fv(this.addr,!1,Ws),je(t,i)}}function rh(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),je(t,e)}else{if(et(t,i))return;ks.set(i),n.uniformMatrix3fv(this.addr,!1,ks),je(t,i)}}function sh(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),je(t,e)}else{if(et(t,i))return;Vs.set(i),n.uniformMatrix4fv(this.addr,!1,Vs),je(t,i)}}function ah(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function oh(n,e){const t=this.cache;et(t,e)||(n.uniform2iv(this.addr,e),je(t,e))}function lh(n,e){const t=this.cache;et(t,e)||(n.uniform3iv(this.addr,e),je(t,e))}function ch(n,e){const t=this.cache;et(t,e)||(n.uniform4iv(this.addr,e),je(t,e))}function uh(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function hh(n,e){const t=this.cache;et(t,e)||(n.uniform2uiv(this.addr,e),je(t,e))}function dh(n,e){const t=this.cache;et(t,e)||(n.uniform3uiv(this.addr,e),je(t,e))}function fh(n,e){const t=this.cache;et(t,e)||(n.uniform4uiv(this.addr,e),je(t,e))}function ph(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.safeSetTexture2D(e||wa,r)}function mh(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Aa,r)}function gh(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.safeSetTextureCube(e||Ra,r)}function _h(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ta,r)}function xh(n){switch(n){case 5126:return Qu;case 35664:return eh;case 35665:return th;case 35666:return ih;case 35674:return nh;case 35675:return rh;case 35676:return sh;case 5124:case 35670:return ah;case 35667:case 35671:return oh;case 35668:case 35672:return lh;case 35669:case 35673:return ch;case 5125:return uh;case 36294:return hh;case 36295:return dh;case 36296:return fh;case 35678:case 36198:case 36298:case 36306:case 35682:return ph;case 35679:case 36299:case 36307:return mh;case 35680:case 36300:case 36308:case 36293:return gh;case 36289:case 36303:case 36311:case 36292:return _h}}function vh(n,e){n.uniform1fv(this.addr,e)}function Mh(n,e){const t=Bi(e,this.size,2);n.uniform2fv(this.addr,t)}function yh(n,e){const t=Bi(e,this.size,3);n.uniform3fv(this.addr,t)}function Sh(n,e){const t=Bi(e,this.size,4);n.uniform4fv(this.addr,t)}function Eh(n,e){const t=Bi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function bh(n,e){const t=Bi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function wh(n,e){const t=Bi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Th(n,e){n.uniform1iv(this.addr,e)}function Ah(n,e){n.uniform2iv(this.addr,e)}function Rh(n,e){n.uniform3iv(this.addr,e)}function Ch(n,e){n.uniform4iv(this.addr,e)}function Lh(n,e){n.uniform1uiv(this.addr,e)}function Dh(n,e){n.uniform2uiv(this.addr,e)}function Ph(n,e){n.uniform3uiv(this.addr,e)}function Fh(n,e){n.uniform4uiv(this.addr,e)}function Ih(n,e,t){const i=e.length,r=Un(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.safeSetTexture2D(e[s]||wa,r[s])}function Nh(n,e,t){const i=e.length,r=Un(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Aa,r[s])}function Uh(n,e,t){const i=e.length,r=Un(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.safeSetTextureCube(e[s]||Ra,r[s])}function Oh(n,e,t){const i=e.length,r=Un(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Ta,r[s])}function Bh(n){switch(n){case 5126:return vh;case 35664:return Mh;case 35665:return yh;case 35666:return Sh;case 35674:return Eh;case 35675:return bh;case 35676:return wh;case 5124:case 35670:return Th;case 35667:case 35671:return Ah;case 35668:case 35672:return Rh;case 35669:case 35673:return Ch;case 5125:return Lh;case 36294:return Dh;case 36295:return Ph;case 36296:return Fh;case 35678:case 36198:case 36298:case 36306:case 35682:return Ih;case 35679:case 36299:case 36307:return Nh;case 35680:case 36300:case 36308:case 36293:return Uh;case 36289:case 36303:case 36311:case 36292:return Oh}}function zh(n,e,t){this.id=n,this.addr=t,this.cache=[],this.setValue=xh(e.type)}function Ca(n,e,t){this.id=n,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Bh(e.type)}Ca.prototype.updateCache=function(n){const e=this.cache;n instanceof Float32Array&&e.length!==n.length&&(this.cache=new Float32Array(n.length)),je(e,n)};function La(n){this.id=n,this.seq=[],this.map={}}La.prototype.setValue=function(n,e,t){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(n,e[o.id],t)}};const pr=/(\w+)(\])?(\[|\.)?/g;function Xs(n,e){n.seq.push(e),n.map[e.id]=e}function Gh(n,e,t){const i=n.name,r=i.length;for(pr.lastIndex=0;;){const s=pr.exec(i),o=pr.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Xs(t,l===void 0?new zh(a,n,e):new Ca(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new La(a),Xs(t,f)),t=f}}}function Jt(n,e){this.seq=[],this.map={};const t=n.getProgramParameter(e,n.ACTIVE_UNIFORMS);for(let i=0;i<t;++i){const r=n.getActiveUniform(e,i),s=n.getUniformLocation(e,r.name);Gh(r,s,this)}}Jt.prototype.setValue=function(n,e,t,i){const r=this.map[e];r!==void 0&&r.setValue(n,t,i)};Jt.prototype.setOptional=function(n,e,t){const i=e[t];i!==void 0&&this.setValue(n,t,i)};Jt.upload=function(n,e,t,i){for(let r=0,s=e.length;r!==s;++r){const o=e[r],a=t[o.id];a.needsUpdate!==!1&&o.setValue(n,a.value,i)}};Jt.seqWithValue=function(n,e){const t=[];for(let i=0,r=n.length;i!==r;++i){const s=n[i];s.id in e&&t.push(s)}return t};function qs(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Hh=0;function Vh(n){const e=n.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function kh(n){switch(n){case oi:return["Linear","( value )"];case Ie:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Ys(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();return i&&r===""?"":t.toUpperCase()+`

`+r+`

`+Vh(n.getShaderSource(e))}function Wh(n,e){const t=kh(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Xh(n,e){let t;switch(e){case _o:t="Linear";break;case xo:t="Reinhard";break;case vo:t="OptimizedCineon";break;case Mo:t="ACESFilmic";break;case yo:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qh(n){return[n.extensionDerivatives||n.envMapCubeUV||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xi).join(`
`)}function Yh(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $h(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Xi(n){return n!==""}function $s(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zs(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zh=/^[ \t]*#include +<([\w\d./]+)>/gm;function br(n){return n.replace(Zh,jh)}function jh(n,e){const t=ye[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return br(t)}const Kh=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Jh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function js(n){return n.replace(Jh,Da).replace(Kh,Qh)}function Qh(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Da(n,e,t,i)}function Da(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ks(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ed(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===aa?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ya?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function td(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qi:case en:e="ENVMAP_TYPE_CUBE";break;case Pn:case Lr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function id(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case en:case Lr:e="ENVMAP_MODE_REFRACTION";break}return e}function nd(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ca:e="ENVMAP_BLENDING_MULTIPLY";break;case mo:e="ENVMAP_BLENDING_MIX";break;case go:e="ENVMAP_BLENDING_ADD";break}return e}function rd(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=ed(t),l=td(t),d=id(t),f=nd(t),p=t.isWebGL2?"":qh(t),m=Yh(s),_=r.createProgram();let g,S,u=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[m].filter(Xi).join(`
`),g.length>0&&(g+=`
`),S=[p,m].filter(Xi).join(`
`),S.length>0&&(S+=`
`)):(g=[Ks(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),S=[p,Ks(t),"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zt?"#define TONE_MAPPING":"",t.toneMapping!==Zt?ye.tonemapping_pars_fragment:"",t.toneMapping!==Zt?Xh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.transparent?"":"#define OPAQUE",ye.encodings_pars_fragment,Wh("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xi).join(`
`)),o=br(o),o=$s(o,t),o=Zs(o,t),a=br(a),a=$s(a,t),a=Zs(a,t),o=js(o),a=js(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(u=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,S=["#define varying in",t.glslVersion===xs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const h=u+g+o,T=u+S+a,y=qs(r,r.VERTEX_SHADER,h),b=qs(r,r.FRAGMENT_SHADER,T);if(r.attachShader(_,y),r.attachShader(_,b),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),n.debug.checkShaderErrors){const $=r.getProgramInfoLog(_).trim(),ie=r.getShaderInfoLog(y).trim(),Z=r.getShaderInfoLog(b).trim();let x=!0,R=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1){x=!1;const F=Ys(r,y,"vertex"),B=Ys(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+F+`
`+B)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(ie===""||Z==="")&&(R=!1);R&&(this.diagnostics={runnable:x,programLog:$,vertexShader:{log:ie,prefix:g},fragmentShader:{log:Z,prefix:S}})}r.deleteShader(y),r.deleteShader(b);let L;this.getUniforms=function(){return L===void 0&&(L=new Jt(r,_)),L};let C;return this.getAttributes=function(){return C===void 0&&(C=$h(r,_)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=Hh++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=b,this}let sd=0;class ad{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new od;t.set(e,i)}return t.get(e)}}class od{constructor(){this.id=sd++,this.usedTimes=0}}function ld(n,e,t,i,r,s,o){const a=new ga,c=new ad,l=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,p=r.floatVertexTextures,m=r.maxVertexUniforms,_=r.vertexTextures;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){const F=x.skeleton.bones;if(p)return 1024;{const O=Math.floor((m-20)/4),N=Math.min(O,F.length);return N<F.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+F.length+" bones. This GPU supports "+N+"."),0):N}}function h(x,R,F,B,O){const N=B.fog,V=x.isMeshStandardMaterial?B.environment:null,q=(x.isMeshStandardMaterial?t:e).get(x.envMap||V),se=S[x.type],G=O.isSkinnedMesh?u(O):0;x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));let X,ee,ae,ce;if(se){const ne=At[se];X=ne.vertexShader,ee=ne.fragmentShader}else X=x.vertexShader,ee=x.fragmentShader,c.update(x),ae=c.getVertexShaderID(x),ce=c.getFragmentShaderID(x);const A=n.getRenderTarget(),Le=x.alphaTest>0,fe=x.clearcoat>0;return{isWebGL2:d,shaderID:se,shaderName:x.type,vertexShader:X,fragmentShader:ee,defines:x.defines,customVertexShaderID:ae,customFragmentShaderID:ce,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,instancing:O.isInstancedMesh===!0,instancingColor:O.isInstancedMesh===!0&&O.instanceColor!==null,supportsVertexTextures:_,outputEncoding:A===null?n.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:oi,map:!!x.map,matcap:!!x.matcap,envMap:!!q,envMapMode:q&&q.mapping,envMapCubeUV:!!q&&(q.mapping===Pn||q.mapping===Lr),lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Ho,tangentSpaceNormalMap:x.normalMapType===Go,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Ie,clearcoat:fe,clearcoatMap:fe&&!!x.clearcoatMap,clearcoatRoughnessMap:fe&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!x.clearcoatNormalMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,transparent:x.transparent,alphaMap:!!x.alphaMap,alphaTest:Le,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!O.geometry&&!!O.geometry.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.geometry&&!!O.geometry.attributes.color&&O.geometry.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!N,useFog:x.fog,fogExp2:N&&N.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0&&G>0,maxBones:G,useVertexTexture:p,morphTargets:!!O.geometry&&!!O.geometry.morphAttributes.position,morphNormals:!!O.geometry&&!!O.geometry.morphAttributes.normal,morphTargetsCount:!!O.geometry&&!!O.geometry.morphAttributes.position?O.geometry.morphAttributes.position.length:0,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:x.toneMapped?n.toneMapping:Zt,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ci,flipSided:x.side===He,depthPacking:x.depthPacking!==void 0?x.depthPacking:!1,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function T(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)R.push(F),R.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(y(R,x),b(R,x),R.push(n.outputEncoding)),R.push(x.customProgramCacheKey),R.join()}function y(x,R){x.push(R.precision),x.push(R.outputEncoding),x.push(R.envMapMode),x.push(R.combine),x.push(R.vertexUvs),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.maxBones),x.push(R.morphTargetsCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection)}function b(x,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.map&&a.enable(4),R.matcap&&a.enable(5),R.envMap&&a.enable(6),R.envMapCubeUV&&a.enable(7),R.lightMap&&a.enable(8),R.aoMap&&a.enable(9),R.emissiveMap&&a.enable(10),R.bumpMap&&a.enable(11),R.normalMap&&a.enable(12),R.objectSpaceNormalMap&&a.enable(13),R.tangentSpaceNormalMap&&a.enable(14),R.clearcoat&&a.enable(15),R.clearcoatMap&&a.enable(16),R.clearcoatRoughnessMap&&a.enable(17),R.clearcoatNormalMap&&a.enable(18),R.displacementMap&&a.enable(19),R.specularMap&&a.enable(20),R.roughnessMap&&a.enable(21),R.metalnessMap&&a.enable(22),R.gradientMap&&a.enable(23),R.alphaMap&&a.enable(24),R.alphaTest&&a.enable(25),R.vertexColors&&a.enable(26),R.vertexAlphas&&a.enable(27),R.vertexUvs&&a.enable(28),R.vertexTangents&&a.enable(29),R.uvsVertexOnly&&a.enable(30),R.fog&&a.enable(31),x.push(a.mask),a.disableAll(),R.useFog&&a.enable(0),R.flatShading&&a.enable(1),R.logarithmicDepthBuffer&&a.enable(2),R.skinning&&a.enable(3),R.useVertexTexture&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.premultipliedAlpha&&a.enable(7),R.shadowMapEnabled&&a.enable(8),R.physicallyCorrectLights&&a.enable(9),R.doubleSided&&a.enable(10),R.flipSided&&a.enable(11),R.depthPacking&&a.enable(12),R.dithering&&a.enable(13),R.specularIntensityMap&&a.enable(14),R.specularColorMap&&a.enable(15),R.transmission&&a.enable(16),R.transmissionMap&&a.enable(17),R.thicknessMap&&a.enable(18),R.sheen&&a.enable(19),R.sheenColorMap&&a.enable(20),R.sheenRoughnessMap&&a.enable(21),R.decodeVideoTexture&&a.enable(22),R.transparent&&a.enable(23),x.push(a.mask)}function L(x){const R=S[x.type];let F;if(R){const B=At[R];F=rl.clone(B.uniforms)}else F=x.uniforms;return F}function C(x,R){let F;for(let B=0,O=l.length;B<O;B++){const N=l[B];if(N.cacheKey===R){F=N,++F.usedTimes;break}}return F===void 0&&(F=new rd(n,R,x,s),l.push(F)),F}function $(x){if(--x.usedTimes===0){const R=l.indexOf(x);l[R]=l[l.length-1],l.pop(),x.destroy()}}function ie(x){c.remove(x)}function Z(){c.dispose()}return{getParameters:h,getProgramCacheKey:T,getUniforms:L,acquireProgram:C,releaseProgram:$,releaseShaderCache:ie,programs:l,dispose:Z}}function cd(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function ud(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Js(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qs(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,p,m,_,g,S){let u=n[e];return u===void 0?(u={id:f.id,object:f,geometry:p,material:m,groupOrder:_,renderOrder:f.renderOrder,z:g,group:S},n[e]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=m,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=g,u.group=S),e++,u}function a(f,p,m,_,g,S){const u=o(f,p,m,_,g,S);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):t.push(u)}function c(f,p,m,_,g,S){const u=o(f,p,m,_,g,S);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function l(f,p){t.length>1&&t.sort(f||ud),i.length>1&&i.sort(p||Js),r.length>1&&r.sort(p||Js)}function d(){for(let f=e,p=n.length;f<p;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:d,sort:l}}function hd(){let n=new WeakMap;function e(i,r){let s;return n.has(i)===!1?(s=new Qs,n.set(i,[s])):r>=n.get(i).length?(s=new Qs,n.get(i).push(s)):s=n.get(i)[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function dd(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ce};break;case"SpotLight":t={position:new P,direction:new P,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function fd(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let pd=0;function md(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function gd(n,e){const t=new dd,i=fd(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let d=0;d<9;d++)r.probe.push(new P);const s=new P,o=new ke,a=new ke;function c(d,f){let p=0,m=0,_=0;for(let ie=0;ie<9;ie++)r.probe[ie].set(0,0,0);let g=0,S=0,u=0,h=0,T=0,y=0,b=0,L=0;d.sort(md);const C=f!==!0?Math.PI:1;for(let ie=0,Z=d.length;ie<Z;ie++){const x=d[ie],R=x.color,F=x.intensity,B=x.distance,O=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)p+=R.r*F*C,m+=R.g*F*C,_+=R.b*F*C;else if(x.isLightProbe)for(let N=0;N<9;N++)r.probe[N].addScaledVector(x.sh.coefficients[N],F);else if(x.isDirectionalLight){const N=t.get(x);if(N.color.copy(x.color).multiplyScalar(x.intensity*C),x.castShadow){const V=x.shadow,q=i.get(x);q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,r.directionalShadow[g]=q,r.directionalShadowMap[g]=O,r.directionalShadowMatrix[g]=x.shadow.matrix,y++}r.directional[g]=N,g++}else if(x.isSpotLight){const N=t.get(x);if(N.position.setFromMatrixPosition(x.matrixWorld),N.color.copy(R).multiplyScalar(F*C),N.distance=B,N.coneCos=Math.cos(x.angle),N.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),N.decay=x.decay,x.castShadow){const V=x.shadow,q=i.get(x);q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,r.spotShadow[u]=q,r.spotShadowMap[u]=O,r.spotShadowMatrix[u]=x.shadow.matrix,L++}r.spot[u]=N,u++}else if(x.isRectAreaLight){const N=t.get(x);N.color.copy(R).multiplyScalar(F),N.halfWidth.set(x.width*.5,0,0),N.halfHeight.set(0,x.height*.5,0),r.rectArea[h]=N,h++}else if(x.isPointLight){const N=t.get(x);if(N.color.copy(x.color).multiplyScalar(x.intensity*C),N.distance=x.distance,N.decay=x.decay,x.castShadow){const V=x.shadow,q=i.get(x);q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,q.shadowCameraNear=V.camera.near,q.shadowCameraFar=V.camera.far,r.pointShadow[S]=q,r.pointShadowMap[S]=O,r.pointShadowMatrix[S]=x.shadow.matrix,b++}r.point[S]=N,S++}else if(x.isHemisphereLight){const N=t.get(x);N.skyColor.copy(x.color).multiplyScalar(F*C),N.groundColor.copy(x.groundColor).multiplyScalar(F*C),r.hemi[T]=N,T++}}h>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=K.LTC_FLOAT_1,r.rectAreaLTC2=K.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=K.LTC_HALF_1,r.rectAreaLTC2=K.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=m,r.ambient[2]=_;const $=r.hash;($.directionalLength!==g||$.pointLength!==S||$.spotLength!==u||$.rectAreaLength!==h||$.hemiLength!==T||$.numDirectionalShadows!==y||$.numPointShadows!==b||$.numSpotShadows!==L)&&(r.directional.length=g,r.spot.length=u,r.rectArea.length=h,r.point.length=S,r.hemi.length=T,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=b,r.spotShadowMatrix.length=L,$.directionalLength=g,$.pointLength=S,$.spotLength=u,$.rectAreaLength=h,$.hemiLength=T,$.numDirectionalShadows=y,$.numPointShadows=b,$.numSpotShadows=L,r.version=pd++)}function l(d,f){let p=0,m=0,_=0,g=0,S=0;const u=f.matrixWorldInverse;for(let h=0,T=d.length;h<T;h++){const y=d[h];if(y.isDirectionalLight){const b=r.directional[p];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),p++}else if(y.isSpotLight){const b=r.spot[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),_++}else if(y.isRectAreaLight){const b=r.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(u),a.identity(),o.copy(y.matrixWorld),o.premultiply(u),a.extractRotation(o),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(u),m++}else if(y.isHemisphereLight){const b=r.hemi[S];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(u),b.direction.normalize(),S++}}}return{setup:c,setupView:l,state:r}}function ea(n,e){const t=new gd(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function c(f){t.setup(i,f)}function l(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function _d(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new ea(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new ea(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class Pa extends Oi{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=Bo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Pa.prototype.isMeshDepthMaterial=!0;class Fa extends Oi{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}Fa.prototype.isMeshDistanceMaterial=!0;const xd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,vd=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	// This seems totally useless but it's a crazy work around for a Adreno compiler bug
	// float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( squared_mean - mean * mean );

	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`;function Md(n,e,t){let i=new ha;const r=new Pe,s=new Pe,o=new Qe,a=new Pa({depthPacking:zo}),c=new Fa,l={},d=t.maxTextureSize,f={0:He,1:Zi,2:Ci},p=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:xd,fragmentShader:vd}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const _=new zt;_.setAttribute("position",new ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Bt(_,p),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=aa,this.render=function(y,b,L){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||y.length===0)return;const C=n.getRenderTarget(),$=n.getActiveCubeFace(),ie=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending($t),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);for(let x=0,R=y.length;x<R;x++){const F=y[x],B=F.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const O=B.getFrameExtents();if(r.multiply(O),s.copy(B.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/O.x),r.x=s.x*O.x,B.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/O.y),r.y=s.y*O.y,B.mapSize.y=s.y)),B.map===null&&!B.isPointLightShadow&&this.type===Wi){const V={minFilter:tt,magFilter:tt,format:Je};B.map=new Rt(r.x,r.y,V),B.map.texture.name=F.name+".shadowMap",B.mapPass=new Rt(r.x,r.y,V),B.camera.updateProjectionMatrix()}if(B.map===null){const V={minFilter:Ke,magFilter:Ke,format:Je};B.map=new Rt(r.x,r.y,V),B.map.texture.name=F.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const N=B.getViewportCount();for(let V=0;V<N;V++){const q=B.getViewport(V);o.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),Z.viewport(o),B.updateMatrices(F,V),i=B.getFrustum(),T(b,L,B.camera,F,this.type)}!B.isPointLightShadow&&this.type===Wi&&u(B,L),B.needsUpdate=!1}S.needsUpdate=!1,n.setRenderTarget(C,$,ie)};function u(y,b){const L=e.update(g);p.defines.VSM_SAMPLES!==y.blurSamples&&(p.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),p.uniforms.shadow_pass.value=y.map.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(b,null,L,p,g,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(b,null,L,m,g,null)}function h(y,b,L,C,$,ie,Z){let x=null;const R=C.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(R!==void 0?x=R:x=C.isPointLight===!0?c:a,n.localClippingEnabled&&L.clipShadows===!0&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0){const F=x.uuid,B=L.uuid;let O=l[F];O===void 0&&(O={},l[F]=O);let N=O[B];N===void 0&&(N=x.clone(),O[B]=N),x=N}return x.visible=L.visible,x.wireframe=L.wireframe,Z===Wi?x.side=L.shadowSide!==null?L.shadowSide:L.side:x.side=L.shadowSide!==null?L.shadowSide:f[L.side],x.alphaMap=L.alphaMap,x.alphaTest=L.alphaTest,x.clipShadows=L.clipShadows,x.clippingPlanes=L.clippingPlanes,x.clipIntersection=L.clipIntersection,x.displacementMap=L.displacementMap,x.displacementScale=L.displacementScale,x.displacementBias=L.displacementBias,x.wireframeLinewidth=L.wireframeLinewidth,x.linewidth=L.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0&&(x.referencePosition.setFromMatrixPosition(C.matrixWorld),x.nearDistance=$,x.farDistance=ie),x}function T(y,b,L,C,$){if(y.visible===!1)return;if(y.layers.test(b.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&$===Wi)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,y.matrixWorld);const x=e.update(y),R=y.material;if(Array.isArray(R)){const F=x.groups;for(let B=0,O=F.length;B<O;B++){const N=F[B],V=R[N.materialIndex];if(V&&V.visible){const q=h(y,x,V,C,L.near,L.far,$);n.renderBufferDirect(L,null,x,q,y,N)}}}else if(R.visible){const F=h(y,x,R,C,L.near,L.far,$);n.renderBufferDirect(L,null,x,F,y,null)}}const Z=y.children;for(let x=0,R=Z.length;x<R;x++)T(Z[x],b,L,C,$)}}function yd(n,e,t){const i=t.isWebGL2;function r(){let w=!1;const re=new Qe;let te=null;const de=new Qe(0,0,0,0);return{setMask:function(H){te!==H&&!w&&(n.colorMask(H,H,H,H),te=H)},setLocked:function(H){w=H},setClear:function(H,he,Ee,Fe,it){it===!0&&(H*=Fe,he*=Fe,Ee*=Fe),re.set(H,he,Ee,Fe),de.equals(re)===!1&&(n.clearColor(H,he,Ee,Fe),de.copy(re))},reset:function(){w=!1,te=null,de.set(-1,0,0,0)}}}function s(){let w=!1,re=null,te=null,de=null;return{setTest:function(H){H?A(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(H){re!==H&&!w&&(n.depthMask(H),re=H)},setFunc:function(H){if(te!==H){if(H)switch(H){case oo:n.depthFunc(n.NEVER);break;case lo:n.depthFunc(n.ALWAYS);break;case co:n.depthFunc(n.LESS);break;case xr:n.depthFunc(n.LEQUAL);break;case uo:n.depthFunc(n.EQUAL);break;case ho:n.depthFunc(n.GEQUAL);break;case fo:n.depthFunc(n.GREATER);break;case po:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}else n.depthFunc(n.LEQUAL);te=H}},setLocked:function(H){w=H},setClear:function(H){de!==H&&(n.clearDepth(H),de=H)},reset:function(){w=!1,re=null,te=null,de=null}}}function o(){let w=!1,re=null,te=null,de=null,H=null,he=null,Ee=null,Fe=null,it=null;return{setTest:function(Ne){w||(Ne?A(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(Ne){re!==Ne&&!w&&(n.stencilMask(Ne),re=Ne)},setFunc:function(Ne,yt,Lt){(te!==Ne||de!==yt||H!==Lt)&&(n.stencilFunc(Ne,yt,Lt),te=Ne,de=yt,H=Lt)},setOp:function(Ne,yt,Lt){(he!==Ne||Ee!==yt||Fe!==Lt)&&(n.stencilOp(Ne,yt,Lt),he=Ne,Ee=yt,Fe=Lt)},setLocked:function(Ne){w=Ne},setClear:function(Ne){it!==Ne&&(n.clearStencil(Ne),it=Ne)},reset:function(){w=!1,re=null,te=null,de=null,H=null,he=null,Ee=null,Fe=null,it=null}}}const a=new r,c=new s,l=new o;let d={},f={},p=new WeakMap,m=[],_=null,g=!1,S=null,u=null,h=null,T=null,y=null,b=null,L=null,C=!1,$=null,ie=null,Z=null,x=null,R=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,O=0;const N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(N)[1]),B=O>=1):N.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),B=O>=2);let V=null,q={};const se=n.getParameter(n.SCISSOR_BOX),G=n.getParameter(n.VIEWPORT),X=new Qe().fromArray(se),ee=new Qe().fromArray(G);function ae(w,re,te){const de=new Uint8Array(4),H=n.createTexture();n.bindTexture(w,H),n.texParameteri(w,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(w,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let he=0;he<te;he++)n.texImage2D(re+he,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return H}const ce={};ce[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),ce[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),A(n.DEPTH_TEST),c.setFunc(xr),Xe(!1),ze(Vr),A(n.CULL_FACE),xe($t);function A(w){d[w]!==!0&&(n.enable(w),d[w]=!0)}function Le(w){d[w]!==!1&&(n.disable(w),d[w]=!1)}function fe(w,re){return f[w]!==re?(n.bindFramebuffer(w,re),f[w]=re,i&&(w===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=re),w===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=re)),!0):!1}function _e(w,re){let te=m,de=!1;if(w)if(te=p.get(re),te===void 0&&(te=[],p.set(re,te)),w.isWebGLMultipleRenderTargets){const H=w.texture;if(te.length!==H.length||te[0]!==n.COLOR_ATTACHMENT0){for(let he=0,Ee=H.length;he<Ee;he++)te[he]=n.COLOR_ATTACHMENT0+he;te.length=H.length,de=!0}}else te[0]!==n.COLOR_ATTACHMENT0&&(te[0]=n.COLOR_ATTACHMENT0,de=!0);else te[0]!==n.BACK&&(te[0]=n.BACK,de=!0);de&&(t.isWebGL2?n.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function ne(w){return _!==w?(n.useProgram(w),_=w,!0):!1}const Ae={[bi]:n.FUNC_ADD,[ja]:n.FUNC_SUBTRACT,[Ka]:n.FUNC_REVERSE_SUBTRACT};if(i)Ae[qr]=n.MIN,Ae[Yr]=n.MAX;else{const w=e.get("EXT_blend_minmax");w!==null&&(Ae[qr]=w.MIN_EXT,Ae[Yr]=w.MAX_EXT)}const Se={[Ja]:n.ZERO,[Qa]:n.ONE,[eo]:n.SRC_COLOR,[oa]:n.SRC_ALPHA,[ao]:n.SRC_ALPHA_SATURATE,[ro]:n.DST_COLOR,[io]:n.DST_ALPHA,[to]:n.ONE_MINUS_SRC_COLOR,[la]:n.ONE_MINUS_SRC_ALPHA,[so]:n.ONE_MINUS_DST_COLOR,[no]:n.ONE_MINUS_DST_ALPHA};function xe(w,re,te,de,H,he,Ee,Fe){if(w===$t){g===!0&&(Le(n.BLEND),g=!1);return}if(g===!1&&(A(n.BLEND),g=!0),w!==Za){if(w!==S||Fe!==C){if((u!==bi||y!==bi)&&(n.blendEquation(n.FUNC_ADD),u=bi,y=bi),Fe)switch(w){case Yi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kr:n.blendFunc(n.ONE,n.ONE);break;case Wr:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xr:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Yi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Wr:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xr:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}h=null,T=null,b=null,L=null,S=w,C=Fe}return}H=H||re,he=he||te,Ee=Ee||de,(re!==u||H!==y)&&(n.blendEquationSeparate(Ae[re],Ae[H]),u=re,y=H),(te!==h||de!==T||he!==b||Ee!==L)&&(n.blendFuncSeparate(Se[te],Se[de],Se[he],Se[Ee]),h=te,T=de,b=he,L=Ee),S=w,C=null}function ot(w,re){w.side===Ci?Le(n.CULL_FACE):A(n.CULL_FACE);let te=w.side===He;re&&(te=!te),Xe(te),w.blending===Yi&&w.transparent===!1?xe($t):xe(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.premultipliedAlpha),c.setFunc(w.depthFunc),c.setTest(w.depthTest),c.setMask(w.depthWrite),a.setMask(w.colorWrite);const de=w.stencilWrite;l.setTest(de),de&&(l.setMask(w.stencilWriteMask),l.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),l.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),qe(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?A(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(w){$!==w&&(w?n.frontFace(n.CW):n.frontFace(n.CCW),$=w)}function ze(w){w!==Xa?(A(n.CULL_FACE),w!==ie&&(w===Vr?n.cullFace(n.BACK):w===qa?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),ie=w}function ht(w){w!==Z&&(B&&n.lineWidth(w),Z=w)}function qe(w,re,te){w?(A(n.POLYGON_OFFSET_FILL),(x!==re||R!==te)&&(n.polygonOffset(re,te),x=re,R=te)):Le(n.POLYGON_OFFSET_FILL)}function Ye(w){w?A(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function dt(w){w===void 0&&(w=n.TEXTURE0+F-1),V!==w&&(n.activeTexture(w),V=w)}function vt(w,re){V===null&&dt();let te=q[V];te===void 0&&(te={type:void 0,texture:void 0},q[V]=te),(te.type!==w||te.texture!==re)&&(n.bindTexture(w,re||ce[w]),te.type=w,te.texture=re)}function Mt(){const w=q[V];w!==void 0&&w.type!==void 0&&(n.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function E(){try{n.compressedTexImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function v(){try{n.texSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function W(){try{n.texSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function j(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function oe(){try{n.texStorage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function z(){try{n.texStorage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ue(){try{n.texImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function le(){try{n.texImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Q(w){X.equals(w)===!1&&(n.scissor(w.x,w.y,w.z,w.w),X.copy(w))}function J(w){ee.equals(w)===!1&&(n.viewport(w.x,w.y,w.z,w.w),ee.copy(w))}function me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},V=null,q={},f={},p=new WeakMap,m=[],_=null,g=!1,S=null,u=null,h=null,T=null,y=null,b=null,L=null,C=!1,$=null,ie=null,Z=null,x=null,R=null,X.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:A,disable:Le,bindFramebuffer:fe,drawBuffers:_e,useProgram:ne,setBlending:xe,setMaterial:ot,setFlipSided:Xe,setCullFace:ze,setLineWidth:ht,setPolygonOffset:qe,setScissorTest:Ye,activeTexture:dt,bindTexture:vt,unbindTexture:Mt,compressedTexImage2D:E,texImage2D:ue,texImage3D:le,texStorage2D:oe,texStorage3D:z,texSubImage2D:v,texSubImage3D:W,compressedTexSubImage2D:j,scissor:Q,viewport:J,reset:me}}function Sd(n,e,t,i,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,d=r.maxTextureSize,f=r.maxSamples,m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):void 0,_=new WeakMap;let g,S=!1;try{S=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(E,v){return S?new OffscreenCanvas(E,v):Dn("canvas")}function h(E,v,W,j){let oe=1;if((E.width>j||E.height>j)&&(oe=j/Math.max(E.width,E.height)),oe<1||v===!0)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap){const z=v?Wo:Math.floor,ue=z(oe*E.width),le=z(oe*E.height);g===void 0&&(g=u(ue,le));const Q=W?u(ue,le):g;return Q.width=ue,Q.height=le,Q.getContext("2d").drawImage(E,0,0,ue,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ue+"x"+le+")."),Q}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function T(E){return Ms(E.width)&&Ms(E.height)}function y(E){return a?!1:E.wrapS!==st||E.wrapT!==st||E.minFilter!==Ke&&E.minFilter!==tt}function b(E,v){return E.generateMipmaps&&v&&E.minFilter!==Ke&&E.minFilter!==tt}function L(E){n.generateMipmap(E)}function C(E,v,W,j,oe=!1){if(a===!1)return v;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let z=v;return v===n.RED&&(W===n.FLOAT&&(z=n.R32F),W===n.HALF_FLOAT&&(z=n.R16F),W===n.UNSIGNED_BYTE&&(z=n.R8)),v===n.RG&&(W===n.FLOAT&&(z=n.RG32F),W===n.HALF_FLOAT&&(z=n.RG16F),W===n.UNSIGNED_BYTE&&(z=n.RG8)),v===n.RGBA&&(W===n.FLOAT&&(z=n.RGBA32F),W===n.HALF_FLOAT&&(z=n.RGBA16F),W===n.UNSIGNED_BYTE&&(z=j===Ie&&oe===!1?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)),(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function $(E,v,W){return b(E,W)===!0||E.isFramebufferTexture&&E.minFilter!==Ke&&E.minFilter!==tt?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function ie(E){return E===Ke||E===$r||E===Zr?n.NEAREST:n.LINEAR}function Z(E){const v=E.target;v.removeEventListener("dispose",Z),R(v),v.isVideoTexture&&_.delete(v),o.memory.textures--}function x(E){const v=E.target;v.removeEventListener("dispose",x),F(v)}function R(E){const v=i.get(E);v.__webglInit!==void 0&&(n.deleteTexture(v.__webglTexture),i.remove(E))}function F(E){const v=E.texture,W=i.get(E),j=i.get(v);if(!!E){if(j.__webglTexture!==void 0&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)n.deleteFramebuffer(W.__webglFramebuffer[oe]),W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer[oe]);else n.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&n.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer&&n.deleteRenderbuffer(W.__webglColorRenderbuffer),W.__webglDepthRenderbuffer&&n.deleteRenderbuffer(W.__webglDepthRenderbuffer);if(E.isWebGLMultipleRenderTargets)for(let oe=0,z=v.length;oe<z;oe++){const ue=i.get(v[oe]);ue.__webglTexture&&(n.deleteTexture(ue.__webglTexture),o.memory.textures--),i.remove(v[oe])}i.remove(v),i.remove(E)}}let B=0;function O(){B=0}function N(){const E=B;return E>=c&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+c),B+=1,E}function V(E,v){const W=i.get(E);if(E.isVideoTexture&&ht(E),E.version>0&&W.__version!==E.version){const j=E.image;if(j===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{A(W,E,v);return}}t.activeTexture(n.TEXTURE0+v),t.bindTexture(n.TEXTURE_2D,W.__webglTexture)}function q(E,v){const W=i.get(E);if(E.version>0&&W.__version!==E.version){A(W,E,v);return}t.activeTexture(n.TEXTURE0+v),t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture)}function se(E,v){const W=i.get(E);if(E.version>0&&W.__version!==E.version){A(W,E,v);return}t.activeTexture(n.TEXTURE0+v),t.bindTexture(n.TEXTURE_3D,W.__webglTexture)}function G(E,v){const W=i.get(E);if(E.version>0&&W.__version!==E.version){Le(W,E,v);return}t.activeTexture(n.TEXTURE0+v),t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture)}const X={[yr]:n.REPEAT,[st]:n.CLAMP_TO_EDGE,[Sr]:n.MIRRORED_REPEAT},ee={[Ke]:n.NEAREST,[$r]:n.NEAREST_MIPMAP_NEAREST,[Zr]:n.NEAREST_MIPMAP_LINEAR,[tt]:n.LINEAR,[So]:n.LINEAR_MIPMAP_NEAREST,[Fn]:n.LINEAR_MIPMAP_LINEAR};function ae(E,v,W){if(W?(n.texParameteri(E,n.TEXTURE_WRAP_S,X[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,X[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,X[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ee[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ee[v.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==st||v.wrapT!==st)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ie(v.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ie(v.minFilter)),v.minFilter!==Ke&&v.minFilter!==tt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");if(v.type===ri&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===wi&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(E,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function ce(E,v){E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",Z),E.__webglTexture=n.createTexture(),o.memory.textures++)}function A(E,v,W){let j=n.TEXTURE_2D;v.isDataTexture2DArray&&(j=n.TEXTURE_2D_ARRAY),v.isDataTexture3D&&(j=n.TEXTURE_3D),ce(E,v),t.activeTexture(n.TEXTURE0+W),t.bindTexture(j,E.__webglTexture),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const oe=y(v)&&T(v.image)===!1;let z=h(v.image,oe,!1,d);z=qe(v,z);const ue=T(z)||a,le=s.convert(v.format,v.encoding);let Q=s.convert(v.type),J=C(v.internalFormat,le,Q,v.encoding,v.isVideoTexture);ae(j,v,ue);let me;const w=v.mipmaps,re=a&&v.isVideoTexture!==!0,te=E.__version===void 0,de=$(v,z,ue);if(v.isDepthTexture)J=n.DEPTH_COMPONENT,a?v.type===ri?J=n.DEPTH_COMPONENT32F:v.type===Cn?J=n.DEPTH_COMPONENT24:v.type===Ti?J=n.DEPTH24_STENCIL8:J=n.DEPTH_COMPONENT16:v.type===ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===si&&J===n.DEPTH_COMPONENT&&v.type!==ji&&v.type!==Cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=ji,Q=s.convert(v.type)),v.format===Li&&J===n.DEPTH_COMPONENT&&(J=n.DEPTH_STENCIL,v.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Ti,Q=s.convert(v.type))),re&&te?t.texStorage2D(n.TEXTURE_2D,1,J,z.width,z.height):t.texImage2D(n.TEXTURE_2D,0,J,z.width,z.height,0,le,Q,null);else if(v.isDataTexture)if(w.length>0&&ue){re&&te&&t.texStorage2D(n.TEXTURE_2D,de,J,w[0].width,w[0].height);for(let H=0,he=w.length;H<he;H++)me=w[H],re?t.texSubImage2D(n.TEXTURE_2D,0,0,0,me.width,me.height,le,Q,me.data):t.texImage2D(n.TEXTURE_2D,H,J,me.width,me.height,0,le,Q,me.data);v.generateMipmaps=!1}else re?(te&&t.texStorage2D(n.TEXTURE_2D,de,J,z.width,z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,z.width,z.height,le,Q,z.data)):t.texImage2D(n.TEXTURE_2D,0,J,z.width,z.height,0,le,Q,z.data);else if(v.isCompressedTexture){re&&te&&t.texStorage2D(n.TEXTURE_2D,de,J,w[0].width,w[0].height);for(let H=0,he=w.length;H<he;H++)me=w[H],v.format!==Je?le!==null?re?t.compressedTexSubImage2D(n.TEXTURE_2D,H,0,0,me.width,me.height,le,me.data):t.compressedTexImage2D(n.TEXTURE_2D,H,J,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?t.texSubImage2D(n.TEXTURE_2D,H,0,0,me.width,me.height,le,Q,me.data):t.texImage2D(n.TEXTURE_2D,H,J,me.width,me.height,0,le,Q,me.data)}else if(v.isDataTexture2DArray)re?(te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,J,z.width,z.height,z.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,le,Q,z.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,J,z.width,z.height,z.depth,0,le,Q,z.data);else if(v.isDataTexture3D)re?(te&&t.texStorage3D(n.TEXTURE_3D,de,J,z.width,z.height,z.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,le,Q,z.data)):t.texImage3D(n.TEXTURE_3D,0,J,z.width,z.height,z.depth,0,le,Q,z.data);else if(v.isFramebufferTexture)re&&te?t.texStorage2D(n.TEXTURE_2D,de,J,z.width,z.height):t.texImage2D(n.TEXTURE_2D,0,J,z.width,z.height,0,le,Q,null);else if(w.length>0&&ue){re&&te&&t.texStorage2D(n.TEXTURE_2D,de,J,w[0].width,w[0].height);for(let H=0,he=w.length;H<he;H++)me=w[H],re?t.texSubImage2D(n.TEXTURE_2D,H,0,0,le,Q,me):t.texImage2D(n.TEXTURE_2D,H,J,le,Q,me);v.generateMipmaps=!1}else re?(te&&t.texStorage2D(n.TEXTURE_2D,de,J,z.width,z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,Q,z)):t.texImage2D(n.TEXTURE_2D,0,J,le,Q,z);b(v,ue)&&L(j),E.__version=v.version,v.onUpdate&&v.onUpdate(v)}function Le(E,v,W){if(v.image.length!==6)return;ce(E,v),t.activeTexture(n.TEXTURE0+W),t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const j=v&&(v.isCompressedTexture||v.image[0].isCompressedTexture),oe=v.image[0]&&v.image[0].isDataTexture,z=[];for(let H=0;H<6;H++)!j&&!oe?z[H]=h(v.image[H],!1,!0,l):z[H]=oe?v.image[H].image:v.image[H],z[H]=qe(v,z[H]);const ue=z[0],le=T(ue)||a,Q=s.convert(v.format,v.encoding),J=s.convert(v.type),me=C(v.internalFormat,Q,J,v.encoding),w=a&&v.isVideoTexture!==!0,re=E.__version===void 0;let te=$(v,ue,le);ae(n.TEXTURE_CUBE_MAP,v,le);let de;if(j){w&&re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,te,me,ue.width,ue.height);for(let H=0;H<6;H++){de=z[H].mipmaps;for(let he=0;he<de.length;he++){const Ee=de[he];v.format!==Je?Q!==null?w?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,he,0,0,Ee.width,Ee.height,Q,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,he,me,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):w?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,he,0,0,Ee.width,Ee.height,Q,J,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,he,me,Ee.width,Ee.height,0,Q,J,Ee.data)}}}else{de=v.mipmaps,w&&re&&(de.length>0&&te++,t.texStorage2D(n.TEXTURE_CUBE_MAP,te,me,z[0].width,z[0].height));for(let H=0;H<6;H++)if(oe){w?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,z[H].width,z[H].height,Q,J,z[H].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,me,z[H].width,z[H].height,0,Q,J,z[H].data);for(let he=0;he<de.length;he++){const Fe=de[he].image[H].image;w?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,he+1,0,0,Fe.width,Fe.height,Q,J,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,he+1,me,Fe.width,Fe.height,0,Q,J,Fe.data)}}else{w?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Q,J,z[H]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,me,Q,J,z[H]);for(let he=0;he<de.length;he++){const Ee=de[he];w?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,he+1,0,0,Q,J,Ee.image[H]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,he+1,me,Q,J,Ee.image[H])}}}b(v,le)&&L(n.TEXTURE_CUBE_MAP),E.__version=v.version,v.onUpdate&&v.onUpdate(v)}function fe(E,v,W,j,oe){const z=s.convert(W.format,W.encoding),ue=s.convert(W.type),le=C(W.internalFormat,z,ue,W.encoding);i.get(v).__hasExternalTextures||(oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,le,v.width,v.height,v.depth,0,z,ue,null):t.texImage2D(oe,0,le,v.width,v.height,0,z,ue,null)),t.bindFramebuffer(n.FRAMEBUFFER,E),v.useRenderToTexture?m.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,oe,i.get(W).__webglTexture,0,ze(v)):n.framebufferTexture2D(n.FRAMEBUFFER,j,oe,i.get(W).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(E,v,W){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer&&!v.stencilBuffer){let j=n.DEPTH_COMPONENT16;if(W||v.useRenderToTexture){const oe=v.depthTexture;oe&&oe.isDepthTexture&&(oe.type===ri?j=n.DEPTH_COMPONENT32F:oe.type===Cn&&(j=n.DEPTH_COMPONENT24));const z=ze(v);v.useRenderToTexture?m.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,z,j,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,z,j,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,j,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(v.depthBuffer&&v.stencilBuffer){const j=ze(v);W&&v.useRenderbuffer?n.renderbufferStorageMultisample(n.RENDERBUFFER,j,n.DEPTH24_STENCIL8,v.width,v.height):v.useRenderToTexture?m.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const j=v.isWebGLMultipleRenderTargets===!0?v.texture[0]:v.texture,oe=s.convert(j.format,j.encoding),z=s.convert(j.type),ue=C(j.internalFormat,oe,z,j.encoding),le=ze(v);W&&v.useRenderbuffer?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,ue,v.width,v.height):v.useRenderToTexture?m.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,ue,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ue,v.width,v.height)}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ne(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);const j=i.get(v.depthTexture).__webglTexture,oe=ze(v);if(v.depthTexture.format===si)v.useRenderToTexture?m.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(v.depthTexture.format===Li)v.useRenderToTexture?m.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ae(E){const v=i.get(E),W=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");ne(v.__webglFramebuffer,E)}else if(W){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]=n.createRenderbuffer(),_e(v.__webglDepthbuffer[j],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),_e(v.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(E,v,W){const j=i.get(E);v!==void 0&&fe(j.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),W!==void 0&&Ae(E)}function xe(E){const v=E.texture,W=i.get(E),j=i.get(v);E.addEventListener("dispose",x),E.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=v.version,o.memory.textures++);const oe=E.isWebGLCubeRenderTarget===!0,z=E.isWebGLMultipleRenderTargets===!0,ue=v.isDataTexture3D||v.isDataTexture2DArray,le=T(E)||a;if(oe){W.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)W.__webglFramebuffer[Q]=n.createFramebuffer()}else if(W.__webglFramebuffer=n.createFramebuffer(),z)if(r.drawBuffers){const Q=E.texture;for(let J=0,me=Q.length;J<me;J++){const w=i.get(Q[J]);w.__webglTexture===void 0&&(w.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(E.useRenderbuffer)if(a){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer);const Q=s.convert(v.format,v.encoding),J=s.convert(v.type),me=C(v.internalFormat,Q,J,v.encoding),w=ze(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,w,me,E.width,E.height),t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,W.__webglColorRenderbuffer),n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(W.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),ae(n.TEXTURE_CUBE_MAP,v,le);for(let Q=0;Q<6;Q++)fe(W.__webglFramebuffer[Q],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q);b(v,le)&&L(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(z){const Q=E.texture;for(let J=0,me=Q.length;J<me;J++){const w=Q[J],re=i.get(w);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),ae(n.TEXTURE_2D,w,le),fe(W.__webglFramebuffer,E,w,n.COLOR_ATTACHMENT0+J,n.TEXTURE_2D),b(w,le)&&L(n.TEXTURE_2D)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;ue&&(a?Q=v.isDataTexture3D?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(Q,j.__webglTexture),ae(Q,v,le),fe(W.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,Q),b(v,le)&&L(Q),t.unbindTexture()}E.depthBuffer&&Ae(E)}function ot(E){const v=T(E)||a,W=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let j=0,oe=W.length;j<oe;j++){const z=W[j];if(b(z,v)){const ue=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,le=i.get(z).__webglTexture;t.bindTexture(ue,le),L(ue),t.unbindTexture()}}}function Xe(E){if(E.useRenderbuffer)if(a){const v=E.width,W=E.height;let j=n.COLOR_BUFFER_BIT;const oe=[n.COLOR_ATTACHMENT0],z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;E.depthBuffer&&oe.push(z),E.ignoreDepthForMultisampleCopy||(E.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(j|=n.STENCIL_BUFFER_BIT));const ue=i.get(E);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer),E.ignoreDepthForMultisampleCopy&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[z]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[z])),n.blitFramebuffer(0,0,v,W,0,0,v,W,j,n.NEAREST),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe),t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function ze(E){return a&&(E.useRenderbuffer||E.useRenderToTexture)?Math.min(f,E.samples):0}function ht(E){const v=o.render.frame;_.get(E)!==v&&(_.set(E,v),E.update())}function qe(E,v){const W=E.encoding,j=E.format,oe=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Er||W!==oi&&(W===Ie?a===!1?e.has("EXT_sRGB")===!0&&j===Je?(E.format=Er,E.minFilter=tt,E.generateMipmaps=!1):v=va.sRGBToLinear(v):(j!==Je||oe!==jt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),v}let Ye=!1,dt=!1;function vt(E,v){E&&E.isWebGLRenderTarget&&(Ye===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Ye=!0),E=E.texture),V(E,v)}function Mt(E,v){E&&E.isWebGLCubeRenderTarget&&(dt===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),dt=!0),E=E.texture),G(E,v)}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=se,this.setTextureCube=G,this.rebindTextures=Se,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=fe,this.safeSetTexture2D=vt,this.safeSetTextureCube=Mt}function Ed(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===jt)return n.UNSIGNED_BYTE;if(s===To)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Ao)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Eo)return n.BYTE;if(s===bo)return n.SHORT;if(s===ji)return n.UNSIGNED_SHORT;if(s===wo)return n.INT;if(s===Cn)return n.UNSIGNED_INT;if(s===ri)return n.FLOAT;if(s===wi)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ro)return n.ALPHA;if(s===Je)return n.RGBA;if(s===Lo)return n.LUMINANCE;if(s===Do)return n.LUMINANCE_ALPHA;if(s===si)return n.DEPTH_COMPONENT;if(s===Li)return n.DEPTH_STENCIL;if(s===Po)return n.RED;if(s===Co)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),n.RGBA;if(s===Er)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Fo)return n.RED_INTEGER;if(s===Io)return n.RG;if(s===No)return n.RG_INTEGER;if(s===Uo)return n.RGBA_INTEGER;if(s===Bn||s===zn||s===Gn||s===Hn)if(o===Ie)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Bn)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===zn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Gn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Hn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Bn)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===zn)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Gn)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Hn)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jr||s===Kr||s===Jr||s===Qr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===jr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Oo)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===es||s===ts)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===es)return o===Ie?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ts)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===is||s===ns||s===rs||s===ss||s===as||s===os||s===ls||s===cs||s===us||s===hs||s===ds||s===fs||s===ps||s===ms)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===is)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ns)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===rs)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ss)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===as)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===os)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ls)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===cs)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===us)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===hs)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ds)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===fs)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ps)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ms)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gs)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===gs)return o===Ie?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Ti)return i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}class Ia extends _t{constructor(e=[]){super();this.cameras=e}}Ia.prototype.isArrayCamera=!0;class qi extends at{constructor(){super();this.type="Group"}}qi.prototype.isGroup=!0;const bd={type:"move"};class mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(r=t.getPose(e.targetRaySpace,i),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bd))),l&&e.hand){o=!0;for(const g of e.hand.values()){const S=t.getJointPose(g,i);if(l.joints[g.jointName]===void 0){const h=new qi;h.matrixAutoUpdate=!1,h.visible=!1,l.joints[g.jointName]=h,l.add(h)}const u=l.joints[g.jointName];S!==null&&(u.matrix.fromArray(S.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.jointRadius=S.radius),u.visible=S!==null}const d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=d.position.distanceTo(f.position),m=.02,_=.005;l.inputState.pinching&&p>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}}class wr extends ut{constructor(e,t,i,r,s,o,a,c,l,d){if(d=d!==void 0?d:si,d!==si&&d!==Li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===si&&(i=ji),i===void 0&&d===Li&&(i=Ti);super(null,r,s,o,a,c,d,i,l);this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ke,this.minFilter=c!==void 0?c:Ke,this.flipY=!1,this.generateMipmaps=!1}}wr.prototype.isDepthTexture=!0;class wd extends Ni{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor";const c=e.extensions.has("WEBGL_multisampled_render_to_texture");let l=null,d=null,f=null,p=null,m=!1,_=null;const g=t.getContextAttributes();let S=null,u=null;const h=[],T=new Map,y=new _t;y.layers.enable(1),y.viewport=new Qe;const b=new _t;b.layers.enable(2),b.viewport=new Qe;const L=[y,b],C=new Ia;C.layers.enable(1),C.layers.enable(2);let $=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let X=h[G];return X===void 0&&(X=new mr,h[G]=X),X.getTargetRaySpace()},this.getControllerGrip=function(G){let X=h[G];return X===void 0&&(X=new mr,h[G]=X),X.getGripSpace()},this.getHand=function(G){let X=h[G];return X===void 0&&(X=new mr,h[G]=X),X.getHandSpace()};function Z(G){const X=T.get(G.inputSource);X&&X.dispatchEvent({type:G.type,data:G.inputSource})}function x(){T.forEach(function(G,X){G.disconnect(X)}),T.clear(),$=null,ie=null,e.setRenderTarget(S),p=null,f=null,d=null,r=null,u=null,se.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",x),r.addEventListener("inputsourceschange",R),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,X),r.updateRenderState({baseLayer:p}),u=new Rt(p.framebufferWidth,p.framebufferHeight,{format:Je,type:jt,encoding:e.outputEncoding})}else{m=g.antialias;let X=null,ee=null,ae=null;g.depth&&(ae=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=g.stencil?Li:si,ee=g.stencil?Ti:ji);const ce={colorFormat:e.outputEncoding===Ie?t.SRGB8_ALPHA8:t.RGBA8,depthFormat:ae,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ce),r.updateRenderState({layers:[f]}),m?u=new Or(f.textureWidth,f.textureHeight,{format:Je,type:jt,depthTexture:new wr(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,ignoreDepth:f.ignoreDepthValues,useRenderToTexture:c,encoding:e.outputEncoding}):u=new Rt(f.textureWidth,f.textureHeight,{format:Je,type:jt,depthTexture:new wr(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,ignoreDepth:f.ignoreDepthValues,encoding:e.outputEncoding})}u.isXRRenderTarget=!0,this.setFoveation(1),o=await r.requestReferenceSpace(a),se.setContext(r),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function R(G){const X=r.inputSources;for(let ee=0;ee<h.length;ee++)T.set(X[ee],h[ee]);for(let ee=0;ee<G.removed.length;ee++){const ae=G.removed[ee],ce=T.get(ae);ce&&(ce.dispatchEvent({type:"disconnected",data:ae}),T.delete(ae))}for(let ee=0;ee<G.added.length;ee++){const ae=G.added[ee],ce=T.get(ae);ce&&ce.dispatchEvent({type:"connected",data:ae})}}const F=new P,B=new P;function O(G,X,ee){F.setFromMatrixPosition(X.matrixWorld),B.setFromMatrixPosition(ee.matrixWorld);const ae=F.distanceTo(B),ce=X.projectionMatrix.elements,A=ee.projectionMatrix.elements,Le=ce[14]/(ce[10]-1),fe=ce[14]/(ce[10]+1),_e=(ce[9]+1)/ce[5],ne=(ce[9]-1)/ce[5],Ae=(ce[8]-1)/ce[0],Se=(A[8]+1)/A[0],xe=Le*Ae,ot=Le*Se,Xe=ae/(-Ae+Se),ze=Xe*-Ae;X.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ze),G.translateZ(Xe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const ht=Le+Xe,qe=fe+Xe,Ye=xe-ze,dt=ot+(ae-ze),vt=_e*fe/qe*ht,Mt=ne*fe/qe*ht;G.projectionMatrix.makePerspective(Ye,dt,vt,Mt,ht,qe)}function N(G,X){X===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(X.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;C.near=b.near=y.near=G.near,C.far=b.far=y.far=G.far,($!==C.near||ie!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),$=C.near,ie=C.far);const X=G.parent,ee=C.cameras;N(C,X);for(let ce=0;ce<ee.length;ce++)N(ee[ce],X);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),G.position.copy(C.position),G.quaternion.copy(C.quaternion),G.scale.copy(C.scale),G.matrix.copy(C.matrix),G.matrixWorld.copy(C.matrixWorld);const ae=G.children;for(let ce=0,A=ae.length;ce<A;ce++)ae[ce].updateMatrixWorld(!0);ee.length===2?O(C,y,b):C.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(p!==null)return p.fixedFoveation},this.setFoveation=function(G){f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)};let V=null;function q(G,X){if(l=X.getViewerPose(o),_=X,l!==null){const ae=l.views;p!==null&&(e.setRenderTargetFramebuffer(u,p.framebuffer),e.setRenderTarget(u));let ce=!1;ae.length!==C.cameras.length&&(C.cameras.length=0,ce=!0);for(let A=0;A<ae.length;A++){const Le=ae[A];let fe=null;if(p!==null)fe=p.getViewport(Le);else{const ne=d.getViewSubImage(f,Le);fe=ne.viewport,A===0&&(e.setRenderTargetTextures(u,ne.colorTexture,f.ignoreDepthValues?void 0:ne.depthStencilTexture),e.setRenderTarget(u))}const _e=L[A];_e.matrix.fromArray(Le.transform.matrix),_e.projectionMatrix.fromArray(Le.projectionMatrix),_e.viewport.set(fe.x,fe.y,fe.width,fe.height),A===0&&C.matrix.copy(_e.matrix),ce===!0&&C.cameras.push(_e)}}const ee=r.inputSources;for(let ae=0;ae<h.length;ae++){const ce=h[ae],A=ee[ae];ce.update(A,X,o)}V&&V(G,X),_=null}const se=new da;se.setAnimationLoop(q),this.setAnimationLoop=function(G){V=G},this.dispose=function(){}}}function Td(n){function e(u,h){u.fogColor.value.copy(h.color),h.isFog?(u.fogNear.value=h.near,u.fogFar.value=h.far):h.isFogExp2&&(u.fogDensity.value=h.density)}function t(u,h,T,y,b){h.isMeshBasicMaterial?i(u,h):h.isMeshLambertMaterial?(i(u,h),c(u,h)):h.isMeshToonMaterial?(i(u,h),d(u,h)):h.isMeshPhongMaterial?(i(u,h),l(u,h)):h.isMeshStandardMaterial?(i(u,h),h.isMeshPhysicalMaterial?p(u,h,b):f(u,h)):h.isMeshMatcapMaterial?(i(u,h),m(u,h)):h.isMeshDepthMaterial?(i(u,h),_(u,h)):h.isMeshDistanceMaterial?(i(u,h),g(u,h)):h.isMeshNormalMaterial?(i(u,h),S(u,h)):h.isLineBasicMaterial?(r(u,h),h.isLineDashedMaterial&&s(u,h)):h.isPointsMaterial?o(u,h,T,y):h.isSpriteMaterial?a(u,h):h.isShadowMaterial?(u.color.value.copy(h.color),u.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function i(u,h){u.opacity.value=h.opacity,h.color&&u.diffuse.value.copy(h.color),h.emissive&&u.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(u.map.value=h.map),h.alphaMap&&(u.alphaMap.value=h.alphaMap),h.specularMap&&(u.specularMap.value=h.specularMap),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest);const T=n.get(h).envMap;T&&(u.envMap.value=T,u.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=h.reflectivity,u.ior.value=h.ior,u.refractionRatio.value=h.refractionRatio),h.lightMap&&(u.lightMap.value=h.lightMap,u.lightMapIntensity.value=h.lightMapIntensity),h.aoMap&&(u.aoMap.value=h.aoMap,u.aoMapIntensity.value=h.aoMapIntensity);let y;h.map?y=h.map:h.specularMap?y=h.specularMap:h.displacementMap?y=h.displacementMap:h.normalMap?y=h.normalMap:h.bumpMap?y=h.bumpMap:h.roughnessMap?y=h.roughnessMap:h.metalnessMap?y=h.metalnessMap:h.alphaMap?y=h.alphaMap:h.emissiveMap?y=h.emissiveMap:h.clearcoatMap?y=h.clearcoatMap:h.clearcoatNormalMap?y=h.clearcoatNormalMap:h.clearcoatRoughnessMap?y=h.clearcoatRoughnessMap:h.specularIntensityMap?y=h.specularIntensityMap:h.specularColorMap?y=h.specularColorMap:h.transmissionMap?y=h.transmissionMap:h.thicknessMap?y=h.thicknessMap:h.sheenColorMap?y=h.sheenColorMap:h.sheenRoughnessMap&&(y=h.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),u.uvTransform.value.copy(y.matrix));let b;h.aoMap?b=h.aoMap:h.lightMap&&(b=h.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),u.uv2Transform.value.copy(b.matrix))}function r(u,h){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity}function s(u,h){u.dashSize.value=h.dashSize,u.totalSize.value=h.dashSize+h.gapSize,u.scale.value=h.scale}function o(u,h,T,y){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,u.size.value=h.size*T,u.scale.value=y*.5,h.map&&(u.map.value=h.map),h.alphaMap&&(u.alphaMap.value=h.alphaMap),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest);let b;h.map?b=h.map:h.alphaMap&&(b=h.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),u.uvTransform.value.copy(b.matrix))}function a(u,h){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,u.rotation.value=h.rotation,h.map&&(u.map.value=h.map),h.alphaMap&&(u.alphaMap.value=h.alphaMap),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest);let T;h.map?T=h.map:h.alphaMap&&(T=h.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),u.uvTransform.value.copy(T.matrix))}function c(u,h){h.emissiveMap&&(u.emissiveMap.value=h.emissiveMap)}function l(u,h){u.specular.value.copy(h.specular),u.shininess.value=Math.max(h.shininess,1e-4),h.emissiveMap&&(u.emissiveMap.value=h.emissiveMap),h.bumpMap&&(u.bumpMap.value=h.bumpMap,u.bumpScale.value=h.bumpScale,h.side===He&&(u.bumpScale.value*=-1)),h.normalMap&&(u.normalMap.value=h.normalMap,u.normalScale.value.copy(h.normalScale),h.side===He&&u.normalScale.value.negate()),h.displacementMap&&(u.displacementMap.value=h.displacementMap,u.displacementScale.value=h.displacementScale,u.displacementBias.value=h.displacementBias)}function d(u,h){h.gradientMap&&(u.gradientMap.value=h.gradientMap),h.emissiveMap&&(u.emissiveMap.value=h.emissiveMap),h.bumpMap&&(u.bumpMap.value=h.bumpMap,u.bumpScale.value=h.bumpScale,h.side===He&&(u.bumpScale.value*=-1)),h.normalMap&&(u.normalMap.value=h.normalMap,u.normalScale.value.copy(h.normalScale),h.side===He&&u.normalScale.value.negate()),h.displacementMap&&(u.displacementMap.value=h.displacementMap,u.displacementScale.value=h.displacementScale,u.displacementBias.value=h.displacementBias)}function f(u,h){u.roughness.value=h.roughness,u.metalness.value=h.metalness,h.roughnessMap&&(u.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(u.metalnessMap.value=h.metalnessMap),h.emissiveMap&&(u.emissiveMap.value=h.emissiveMap),h.bumpMap&&(u.bumpMap.value=h.bumpMap,u.bumpScale.value=h.bumpScale,h.side===He&&(u.bumpScale.value*=-1)),h.normalMap&&(u.normalMap.value=h.normalMap,u.normalScale.value.copy(h.normalScale),h.side===He&&u.normalScale.value.negate()),h.displacementMap&&(u.displacementMap.value=h.displacementMap,u.displacementScale.value=h.displacementScale,u.displacementBias.value=h.displacementBias),n.get(h).envMap&&(u.envMapIntensity.value=h.envMapIntensity)}function p(u,h,T){f(u,h),u.ior.value=h.ior,h.sheen>0&&(u.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),u.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(u.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(u.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(u.clearcoat.value=h.clearcoat,u.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(u.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(u.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),u.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===He&&u.clearcoatNormalScale.value.negate())),h.transmission>0&&(u.transmission.value=h.transmission,u.transmissionSamplerMap.value=T.texture,u.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(u.transmissionMap.value=h.transmissionMap),u.thickness.value=h.thickness,h.thicknessMap&&(u.thicknessMap.value=h.thicknessMap),u.attenuationDistance.value=h.attenuationDistance,u.attenuationColor.value.copy(h.attenuationColor)),u.specularIntensity.value=h.specularIntensity,u.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(u.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(u.specularColorMap.value=h.specularColorMap)}function m(u,h){h.matcap&&(u.matcap.value=h.matcap),h.bumpMap&&(u.bumpMap.value=h.bumpMap,u.bumpScale.value=h.bumpScale,h.side===He&&(u.bumpScale.value*=-1)),h.normalMap&&(u.normalMap.value=h.normalMap,u.normalScale.value.copy(h.normalScale),h.side===He&&u.normalScale.value.negate()),h.displacementMap&&(u.displacementMap.value=h.displacementMap,u.displacementScale.value=h.displacementScale,u.displacementBias.value=h.displacementBias)}function _(u,h){h.displacementMap&&(u.displacementMap.value=h.displacementMap,u.displacementScale.value=h.displacementScale,u.displacementBias.value=h.displacementBias)}function g(u,h){h.displacementMap&&(u.displacementMap.value=h.displacementMap,u.displacementScale.value=h.displacementScale,u.displacementBias.value=h.displacementBias),u.referencePosition.value.copy(h.referencePosition),u.nearDistance.value=h.nearDistance,u.farDistance.value=h.farDistance}function S(u,h){h.bumpMap&&(u.bumpMap.value=h.bumpMap,u.bumpScale.value=h.bumpScale,h.side===He&&(u.bumpScale.value*=-1)),h.normalMap&&(u.normalMap.value=h.normalMap,u.normalScale.value.copy(h.normalScale),h.side===He&&u.normalScale.value.negate()),h.displacementMap&&(u.displacementMap.value=h.displacementMap,u.displacementScale.value=h.displacementScale,u.displacementBias.value=h.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Ad(){const n=Dn("canvas");return n.style.display="block",n}function Rd(n={}){const e=n.canvas!==void 0?n.canvas:Ad(),t=n.context!==void 0?n.context:null,i=n.alpha!==void 0?n.alpha:!1,r=n.depth!==void 0?n.depth:!0,s=n.stencil!==void 0?n.stencil:!0,o=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,c=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",d=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let f=null,p=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=oi,this.physicallyCorrectLights=!1,this.toneMapping=Zt,this.toneMappingExposure=1;const g=this;let S=!1,u=0,h=0,T=null,y=-1,b=null;const L=new Qe,C=new Qe;let $=null,ie=e.width,Z=e.height,x=1,R=null,F=null;const B=new Qe(0,0,ie,Z),O=new Qe(0,0,ie,Z);let N=!1;const V=new ha;let q=!1,se=!1,G=null;const X=new ke,ee=new P,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return T===null?x:1}let A=t;function Le(M,D){for(let U=0;U<M.length;U++){const I=M[U],k=e.getContext(I,D);if(k!==null)return k}return null}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wa}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",w,!1),A===null){const D=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&D.shift(),A=Le(D,M),A===null)throw Le(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}A.getShaderPrecisionFormat===void 0&&(A.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let fe,_e,ne,Ae,Se,xe,ot,Xe,ze,ht,qe,Ye,dt,vt,Mt,E,v,W,j,oe,z,ue,le;function Q(){fe=new Xu(A),_e=new Ou(A,fe,n),fe.init(_e),ue=new Ed(A,fe,_e),ne=new yd(A,fe,_e),Ae=new $u(A),Se=new cd,xe=new Sd(A,fe,ne,Se,_e,ue,Ae),ot=new Hu(g),Xe=new Wu(g),ze=new jo(A,_e),le=new Nu(A,fe,ze,_e),ht=new qu(A,ze,Ae,le),qe=new Ju(A,ht,ze,Ae),j=new Ku(A,_e,xe),E=new Bu(Se),Ye=new ld(g,ot,Xe,fe,_e,le,E),dt=new Td(Se),vt=new hd,Mt=new _d(fe,_e),W=new Iu(g,ot,ne,qe,i,a),v=new Md(g,qe,_e),oe=new Uu(A,fe,Ae,_e),z=new Yu(A,fe,Ae,_e),Ae.programs=Ye.programs,g.capabilities=_e,g.extensions=fe,g.properties=Se,g.renderLists=vt,g.shadowMap=v,g.state=ne,g.info=Ae}Q();const J=new wd(g,A);this.xr=J,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const M=fe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=fe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return x},this.setPixelRatio=function(M){M!==void 0&&(x=M,this.setSize(ie,Z,!1))},this.getSize=function(M){return M.set(ie,Z)},this.setSize=function(M,D,U){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=M,Z=D,e.width=Math.floor(M*x),e.height=Math.floor(D*x),U!==!1&&(e.style.width=M+"px",e.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(ie*x,Z*x).floor()},this.setDrawingBufferSize=function(M,D,U){ie=M,Z=D,x=U,e.width=Math.floor(M*U),e.height=Math.floor(D*U),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(B)},this.setViewport=function(M,D,U,I){M.isVector4?B.set(M.x,M.y,M.z,M.w):B.set(M,D,U,I),ne.viewport(L.copy(B).multiplyScalar(x).floor())},this.getScissor=function(M){return M.copy(O)},this.setScissor=function(M,D,U,I){M.isVector4?O.set(M.x,M.y,M.z,M.w):O.set(M,D,U,I),ne.scissor(C.copy(O).multiplyScalar(x).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(M){ne.setScissorTest(N=M)},this.setOpaqueSort=function(M){R=M},this.setTransparentSort=function(M){F=M},this.getClearColor=function(M){return M.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(M,D,U){let I=0;(M===void 0||M)&&(I|=A.COLOR_BUFFER_BIT),(D===void 0||D)&&(I|=A.DEPTH_BUFFER_BIT),(U===void 0||U)&&(I|=A.STENCIL_BUFFER_BIT),A.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",w,!1),vt.dispose(),Mt.dispose(),Se.dispose(),ot.dispose(),Xe.dispose(),qe.dispose(),le.dispose(),Ye.dispose(),J.dispose(),J.removeEventListener("sessionstart",Ee),J.removeEventListener("sessionend",Fe),G&&(G.dispose(),G=null),it.stop()};function me(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function w(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const M=Ae.autoReset,D=v.enabled,U=v.autoUpdate,I=v.needsUpdate,k=v.type;Q(),Ae.autoReset=M,v.enabled=D,v.autoUpdate=U,v.needsUpdate=I,v.type=k}function re(M){const D=M.target;D.removeEventListener("dispose",re),te(D)}function te(M){de(M),Se.remove(M)}function de(M){const D=Se.get(M).programs;D!==void 0&&(D.forEach(function(U){Ye.releaseProgram(U)}),M.isShaderMaterial&&Ye.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,U,I,k,pe){D===null&&(D=ae);const ge=k.isMesh&&k.matrixWorld.determinant()<0,Me=Ba(M,D,U,I,k);ne.setMaterial(I,ge);let ve=U.index;const Re=U.attributes.position;if(ve===null){if(Re===void 0||Re.count===0)return}else if(ve.count===0)return;let be=1;I.wireframe===!0&&(ve=ht.getWireframeAttribute(U),be=2),le.setup(k,I,Me,U,ve);let we,Ue=oe;ve!==null&&(we=ze.get(ve),Ue=z,Ue.setIndex(we));const Qt=ve!==null?ve.count:Re.count,li=U.drawRange.start*be,Te=U.drawRange.count*be,St=pe!==null?pe.start*be:0,Ge=pe!==null?pe.count*be:1/0,Et=Math.max(li,St),rn=Math.min(Qt,li+Te,St+Ge)-1,bt=Math.max(0,rn-Et+1);if(bt!==0){if(k.isMesh)I.wireframe===!0?(ne.setLineWidth(I.wireframeLinewidth*ce()),Ue.setMode(A.LINES)):Ue.setMode(A.TRIANGLES);else if(k.isLine){let Dt=I.linewidth;Dt===void 0&&(Dt=1),ne.setLineWidth(Dt*ce()),k.isLineSegments?Ue.setMode(A.LINES):k.isLineLoop?Ue.setMode(A.LINE_LOOP):Ue.setMode(A.LINE_STRIP)}else k.isPoints?Ue.setMode(A.POINTS):k.isSprite&&Ue.setMode(A.TRIANGLES);if(k.isInstancedMesh)Ue.renderInstances(Et,bt,k.count);else if(U.isInstancedBufferGeometry){const Dt=Math.min(U.instanceCount,U._maxInstanceCount);Ue.renderInstances(Et,bt,Dt)}else Ue.render(Et,bt)}},this.compile=function(M,D){p=Mt.get(M),p.init(),_.push(p),M.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights(g.physicallyCorrectLights),M.traverse(function(U){const I=U.material;if(I)if(Array.isArray(I))for(let k=0;k<I.length;k++){const pe=I[k];On(pe,M,U)}else On(I,M,U)}),_.pop(),p=null};let H=null;function he(M){H&&H(M)}function Ee(){it.stop()}function Fe(){it.start()}const it=new da;it.setAnimationLoop(he),typeof window!="undefined"&&it.setContext(window),this.setAnimationLoop=function(M){H=M,J.setAnimationLoop(M),M===null?it.stop():it.start()},J.addEventListener("sessionstart",Ee),J.addEventListener("sessionend",Fe),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;M.autoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(D),D=J.getCamera()),M.isScene===!0&&M.onBeforeRender(g,M,D,T),p=Mt.get(M,_.length),p.init(),_.push(p),X.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),V.setFromProjectionMatrix(X),se=this.localClippingEnabled,q=E.init(this.clippingPlanes,se,D),f=vt.get(M,m.length),f.init(),m.push(f),Ne(M,D,0,g.sortObjects),f.finish(),g.sortObjects===!0&&f.sort(R,F),q===!0&&E.beginShadows();const U=p.state.shadowsArray;if(v.render(U,M,D),q===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),W.render(f,M),p.setupLights(g.physicallyCorrectLights),D.isArrayCamera){const I=D.cameras;for(let k=0,pe=I.length;k<pe;k++){const ge=I[k];yt(f,M,ge,ge.viewport)}}else yt(f,M,D);T!==null&&(xe.updateMultisampleRenderTarget(T),xe.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(g,M,D),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1),le.resetDefaultState(),y=-1,b=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Ne(M,D,U,I){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)U=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||V.intersectsSprite(M)){I&&ee.setFromMatrixPosition(M.matrixWorld).applyMatrix4(X);const ge=qe.update(M),Me=M.material;Me.visible&&f.push(M,ge,Me,U,ee.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==Ae.render.frame&&(M.skeleton.update(),M.skeleton.frame=Ae.render.frame),!M.frustumCulled||V.intersectsObject(M))){I&&ee.setFromMatrixPosition(M.matrixWorld).applyMatrix4(X);const ge=qe.update(M),Me=M.material;if(Array.isArray(Me)){const ve=ge.groups;for(let Re=0,be=ve.length;Re<be;Re++){const we=ve[Re],Ue=Me[we.materialIndex];Ue&&Ue.visible&&f.push(M,ge,Ue,U,ee.z,we)}}else Me.visible&&f.push(M,ge,Me,U,ee.z,null)}}const pe=M.children;for(let ge=0,Me=pe.length;ge<Me;ge++)Ne(pe[ge],D,U,I)}function yt(M,D,U,I){const k=M.opaque,pe=M.transmissive,ge=M.transparent;p.setupLightsView(U),pe.length>0&&Lt(k,D,U),I&&ne.viewport(L.copy(I)),k.length>0&&nn(k,D,U),pe.length>0&&nn(pe,D,U),ge.length>0&&nn(ge,D,U)}function Lt(M,D,U){if(G===null){const ge=o===!0&&_e.isWebGL2===!0?Or:Rt;G=new ge(1024,1024,{generateMipmaps:!0,type:ue.convert(wi)!==null?wi:jt,minFilter:Fn,magFilter:Ke,wrapS:st,wrapT:st,useRenderToTexture:fe.has("WEBGL_multisampled_render_to_texture")})}const I=g.getRenderTarget();g.setRenderTarget(G),g.clear();const k=g.toneMapping;g.toneMapping=Zt,nn(M,D,U),g.toneMapping=k,xe.updateMultisampleRenderTarget(G),xe.updateRenderTargetMipmap(G),g.setRenderTarget(I)}function nn(M,D,U){const I=D.isScene===!0?D.overrideMaterial:null;for(let k=0,pe=M.length;k<pe;k++){const ge=M[k],Me=ge.object,ve=ge.geometry,Re=I===null?ge.material:I,be=ge.group;Me.layers.test(U.layers)&&Oa(Me,D,U,ve,Re,be)}}function Oa(M,D,U,I,k,pe){M.onBeforeRender(g,D,U,I,k,pe),M.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(g,D,U,I,M,pe),k.transparent===!0&&k.side===Ci?(k.side=He,k.needsUpdate=!0,g.renderBufferDirect(U,D,I,k,M,pe),k.side=Zi,k.needsUpdate=!0,g.renderBufferDirect(U,D,I,k,M,pe),k.side=Ci):g.renderBufferDirect(U,D,I,k,M,pe),M.onAfterRender(g,D,U,I,k,pe)}function On(M,D,U){D.isScene!==!0&&(D=ae);const I=Se.get(M),k=p.state.lights,pe=p.state.shadowsArray,ge=k.state.version,Me=Ye.getParameters(M,k.state,pe,D,U),ve=Ye.getProgramCacheKey(Me);let Re=I.programs;I.environment=M.isMeshStandardMaterial?D.environment:null,I.fog=D.fog,I.envMap=(M.isMeshStandardMaterial?Xe:ot).get(M.envMap||I.environment),Re===void 0&&(M.addEventListener("dispose",re),Re=new Map,I.programs=Re);let be=Re.get(ve);if(be!==void 0){if(I.currentProgram===be&&I.lightsStateVersion===ge)return Br(M,Me),be}else Me.uniforms=Ye.getUniforms(M),M.onBuild(U,Me,g),M.onBeforeCompile(Me,g),be=Ye.acquireProgram(Me,ve),Re.set(ve,be),I.uniforms=Me.uniforms;const we=I.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(we.clippingPlanes=E.uniform),Br(M,Me),I.needsLights=Ga(M),I.lightsStateVersion=ge,I.needsLights&&(we.ambientLightColor.value=k.state.ambient,we.lightProbe.value=k.state.probe,we.directionalLights.value=k.state.directional,we.directionalLightShadows.value=k.state.directionalShadow,we.spotLights.value=k.state.spot,we.spotLightShadows.value=k.state.spotShadow,we.rectAreaLights.value=k.state.rectArea,we.ltc_1.value=k.state.rectAreaLTC1,we.ltc_2.value=k.state.rectAreaLTC2,we.pointLights.value=k.state.point,we.pointLightShadows.value=k.state.pointShadow,we.hemisphereLights.value=k.state.hemi,we.directionalShadowMap.value=k.state.directionalShadowMap,we.directionalShadowMatrix.value=k.state.directionalShadowMatrix,we.spotShadowMap.value=k.state.spotShadowMap,we.spotShadowMatrix.value=k.state.spotShadowMatrix,we.pointShadowMap.value=k.state.pointShadowMap,we.pointShadowMatrix.value=k.state.pointShadowMatrix);const Ue=be.getUniforms(),Qt=Jt.seqWithValue(Ue.seq,we);return I.currentProgram=be,I.uniformsList=Qt,be}function Br(M,D){const U=Se.get(M);U.outputEncoding=D.outputEncoding,U.instancing=D.instancing,U.skinning=D.skinning,U.morphTargets=D.morphTargets,U.morphNormals=D.morphNormals,U.morphTargetsCount=D.morphTargetsCount,U.numClippingPlanes=D.numClippingPlanes,U.numIntersection=D.numClipIntersection,U.vertexAlphas=D.vertexAlphas,U.vertexTangents=D.vertexTangents,U.toneMapping=D.toneMapping}function Ba(M,D,U,I,k){D.isScene!==!0&&(D=ae),xe.resetTextureUnits();const pe=D.fog,ge=I.isMeshStandardMaterial?D.environment:null,Me=T===null?g.outputEncoding:T.isXRRenderTarget===!0?T.texture.encoding:oi,ve=(I.isMeshStandardMaterial?Xe:ot).get(I.envMap||ge),Re=I.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,be=!!I.normalMap&&!!U.attributes.tangent,we=!!U.morphAttributes.position,Ue=!!U.morphAttributes.normal,Qt=U.morphAttributes.position?U.morphAttributes.position.length:0,li=I.toneMapped?g.toneMapping:Zt,Te=Se.get(I),St=p.state.lights;if(q===!0&&(se===!0||M!==b)){const ft=M===b&&I.id===y;E.setState(I,M,ft)}let Ge=!1;I.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==St.state.version||Te.outputEncoding!==Me||k.isInstancedMesh&&Te.instancing===!1||!k.isInstancedMesh&&Te.instancing===!0||k.isSkinnedMesh&&Te.skinning===!1||!k.isSkinnedMesh&&Te.skinning===!0||Te.envMap!==ve||I.fog&&Te.fog!==pe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==E.numPlanes||Te.numIntersection!==E.numIntersection)||Te.vertexAlphas!==Re||Te.vertexTangents!==be||Te.morphTargets!==we||Te.morphNormals!==Ue||Te.toneMapping!==li||_e.isWebGL2===!0&&Te.morphTargetsCount!==Qt)&&(Ge=!0):(Ge=!0,Te.__version=I.version);let Et=Te.currentProgram;Ge===!0&&(Et=On(I,D,k));let rn=!1,bt=!1,Dt=!1;const $e=Et.getUniforms(),zi=Te.uniforms;if(ne.useProgram(Et.program)&&(rn=!0,bt=!0,Dt=!0),I.id!==y&&(y=I.id,bt=!0),rn||b!==M){if($e.setValue(A,"projectionMatrix",M.projectionMatrix),_e.logarithmicDepthBuffer&&$e.setValue(A,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),b!==M&&(b=M,bt=!0,Dt=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const ft=$e.map.cameraPosition;ft!==void 0&&ft.setValue(A,ee.setFromMatrixPosition(M.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&$e.setValue(A,"isOrthographic",M.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||k.isSkinnedMesh)&&$e.setValue(A,"viewMatrix",M.matrixWorldInverse)}if(k.isSkinnedMesh){$e.setOptional(A,k,"bindMatrix"),$e.setOptional(A,k,"bindMatrixInverse");const ft=k.skeleton;ft&&(_e.floatVertexTextures?(ft.boneTexture===null&&ft.computeBoneTexture(),$e.setValue(A,"boneTexture",ft.boneTexture,xe),$e.setValue(A,"boneTextureSize",ft.boneTextureSize)):$e.setOptional(A,ft,"boneMatrices"))}return!!U&&(U.morphAttributes.position!==void 0||U.morphAttributes.normal!==void 0)&&j.update(k,U,I,Et),(bt||Te.receiveShadow!==k.receiveShadow)&&(Te.receiveShadow=k.receiveShadow,$e.setValue(A,"receiveShadow",k.receiveShadow)),bt&&($e.setValue(A,"toneMappingExposure",g.toneMappingExposure),Te.needsLights&&za(zi,Dt),pe&&I.fog&&dt.refreshFogUniforms(zi,pe),dt.refreshMaterialUniforms(zi,I,x,Z,G),Jt.upload(A,Te.uniformsList,zi,xe)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Jt.upload(A,Te.uniformsList,zi,xe),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&$e.setValue(A,"center",k.center),$e.setValue(A,"modelViewMatrix",k.modelViewMatrix),$e.setValue(A,"normalMatrix",k.normalMatrix),$e.setValue(A,"modelMatrix",k.matrixWorld),Et}function za(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function Ga(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return u},this.getActiveMipmapLevel=function(){return h},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,D,U){Se.get(M.texture).__webglTexture=D,Se.get(M.depthTexture).__webglTexture=U;const I=Se.get(M);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=U===void 0,I.__autoAllocateDepthBuffer||M.useRenderToTexture&&(console.warn("render-to-texture extension was disabled because an external texture was provided"),M.useRenderToTexture=!1,M.useRenderbuffer=!0))},this.setRenderTargetFramebuffer=function(M,D){const U=Se.get(M);U.__webglFramebuffer=D,U.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,U=0){T=M,u=D,h=U;let I=!0;if(M){const ve=Se.get(M);ve.__useDefaultFramebuffer!==void 0?(ne.bindFramebuffer(A.FRAMEBUFFER,null),I=!1):ve.__webglFramebuffer===void 0?xe.setupRenderTarget(M):ve.__hasExternalTextures&&xe.rebindTextures(M,Se.get(M.texture).__webglTexture,Se.get(M.depthTexture).__webglTexture)}let k=null,pe=!1,ge=!1;if(M){const ve=M.texture;(ve.isDataTexture3D||ve.isDataTexture2DArray)&&(ge=!0);const Re=Se.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(k=Re[D],pe=!0):M.useRenderbuffer?k=Se.get(M).__webglMultisampledFramebuffer:k=Re,L.copy(M.viewport),C.copy(M.scissor),$=M.scissorTest}else L.copy(B).multiplyScalar(x).floor(),C.copy(O).multiplyScalar(x).floor(),$=N;if(ne.bindFramebuffer(A.FRAMEBUFFER,k)&&_e.drawBuffers&&I&&ne.drawBuffers(M,k),ne.viewport(L),ne.scissor(C),ne.setScissorTest($),pe){const ve=Se.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+D,ve.__webglTexture,U)}else if(ge){const ve=Se.get(M.texture),Re=D||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,ve.__webglTexture,U||0,Re)}y=-1},this.readRenderTargetPixels=function(M,D,U,I,k,pe,ge){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Se.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){ne.bindFramebuffer(A.FRAMEBUFFER,Me);try{const ve=M.texture,Re=ve.format,be=ve.type;if(Re!==Je&&ue.convert(Re)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const we=be===wi&&(fe.has("EXT_color_buffer_half_float")||_e.isWebGL2&&fe.has("EXT_color_buffer_float"));if(be!==jt&&ue.convert(be)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_TYPE)&&!(be===ri&&(_e.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!we){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}A.checkFramebufferStatus(A.FRAMEBUFFER)===A.FRAMEBUFFER_COMPLETE?D>=0&&D<=M.width-I&&U>=0&&U<=M.height-k&&A.readPixels(D,U,I,k,ue.convert(Re),ue.convert(be),pe):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const ve=T!==null?Se.get(T).__webglFramebuffer:null;ne.bindFramebuffer(A.FRAMEBUFFER,ve)}}},this.copyFramebufferToTexture=function(M,D,U=0){if(D.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const I=Math.pow(2,-U),k=Math.floor(D.image.width*I),pe=Math.floor(D.image.height*I);xe.setTexture2D(D,0),A.copyTexSubImage2D(A.TEXTURE_2D,U,0,0,M.x,M.y,k,pe),ne.unbindTexture()},this.copyTextureToTexture=function(M,D,U,I=0){const k=D.image.width,pe=D.image.height,ge=ue.convert(U.format),Me=ue.convert(U.type);xe.setTexture2D(U,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment),D.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,I,M.x,M.y,k,pe,ge,Me,D.image.data):D.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,I,M.x,M.y,D.mipmaps[0].width,D.mipmaps[0].height,ge,D.mipmaps[0].data):A.texSubImage2D(A.TEXTURE_2D,I,M.x,M.y,ge,Me,D.image),I===0&&U.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),ne.unbindTexture()},this.copyTextureToTexture3D=function(M,D,U,I,k=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=M.max.x-M.min.x+1,ge=M.max.y-M.min.y+1,Me=M.max.z-M.min.z+1,ve=ue.convert(I.format),Re=ue.convert(I.type);let be;if(I.isDataTexture3D)xe.setTexture3D(I,0),be=A.TEXTURE_3D;else if(I.isDataTexture2DArray)xe.setTexture2DArray(I,0),be=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,I.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,I.unpackAlignment);const we=A.getParameter(A.UNPACK_ROW_LENGTH),Ue=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Qt=A.getParameter(A.UNPACK_SKIP_PIXELS),li=A.getParameter(A.UNPACK_SKIP_ROWS),Te=A.getParameter(A.UNPACK_SKIP_IMAGES),St=U.isCompressedTexture?U.mipmaps[0]:U.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,St.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,St.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,M.min.x),A.pixelStorei(A.UNPACK_SKIP_ROWS,M.min.y),A.pixelStorei(A.UNPACK_SKIP_IMAGES,M.min.z),U.isDataTexture||U.isDataTexture3D?A.texSubImage3D(be,k,D.x,D.y,D.z,pe,ge,Me,ve,Re,St.data):U.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),A.compressedTexSubImage3D(be,k,D.x,D.y,D.z,pe,ge,Me,ve,St.data)):A.texSubImage3D(be,k,D.x,D.y,D.z,pe,ge,Me,ve,Re,St),A.pixelStorei(A.UNPACK_ROW_LENGTH,we),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ue),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Qt),A.pixelStorei(A.UNPACK_SKIP_ROWS,li),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Te),k===0&&I.generateMipmaps&&A.generateMipmap(be),ne.unbindTexture()},this.initTexture=function(M){xe.setTexture2D(M,0),ne.unbindTexture()},this.resetState=function(){u=0,h=0,T=null,ne.reset(),le.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Rd.prototype.isWebGLRenderer=!0;class Cd extends at{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Cd.prototype.isScene=!0;/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.16.0
 * @author George Michael Brower
 * @license MIT
 */class Ct{constructor(e,t,i,r,s="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),Ct.nextNameID=Ct.nextNameID||0,this.$name.id=`lil-gui-name-${++Ct.nextNameID}`,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback),this.updateDisplay()}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Ld extends Ct{constructor(e,t,i){super(e,t,i,"boolean","label");this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Tr(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Dd={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:Tr,toHexString:Tr},Ji={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},Pd={isPrimitive:!1,match:Array.isArray,fromHexString(n,e,t=1){const i=Ji.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;const r=n*i<<16^e*i<<8^t*i<<0;return Ji.toHexString(r)}},Fd={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const i=Ji.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;const r=n*i<<16^e*i<<8^t*i<<0;return Ji.toHexString(r)}},Id=[Dd,Ji,Pd,Fd];function Nd(n){return Id.find(e=>e.match(n))}class Ud extends Ct{constructor(e,t,i,r){super(e,t,i,"color");this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Nd(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Tr(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class gr extends Ct{constructor(e,t,i){super(e,t,i,"function");this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{}),this.$disable=this.$button}}class Od extends Ct{constructor(e,t,i,r,s,o){super(e,t,i,"number");this._initInput(),this.min(r),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=e),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{const u=parseFloat(this.$input.value);isNaN(u)||this.setValue(this._clamp(u))},t=u=>{const h=parseFloat(this.$input.value);isNaN(h)||(this._snapClampSetValue(h+u),this.$input.value=this.getValue())},i=u=>{u.code==="Enter"&&this.$input.blur(),u.code==="ArrowUp"&&(u.preventDefault(),t(this._step*this._arrowKeyMultiplier(u))),u.code==="ArrowDown"&&(u.preventDefault(),t(this._step*this._arrowKeyMultiplier(u)*-1))},r=u=>{this._inputFocused&&(u.preventDefault(),t(this._step*this._normalizeMouseWheel(u)))};let s=!1,o,a,c,l,d;const f=5,p=u=>{o=u.clientX,a=c=u.clientY,s=!0,l=this.getValue(),d=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",_)},m=u=>{if(s){const h=u.clientX-o,T=u.clientY-a;Math.abs(T)>f?(u.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(h)>f&&_()}s||(d-=(u.clientY-c)*this._step*this._arrowKeyMultiplier(u),l+d>this._max?d=this._max-l:l+d<this._min&&(d=this._min-l),this._snapClampSetValue(l+d)),c=u.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",_)},g=()=>{this._inputFocused=!0},S=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",S)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(u,h,T,y,b)=>(u-h)/(T-h)*(b-y)+y,t=u=>{const h=this.$slider.getBoundingClientRect();let T=e(u,h.left,h.right,this._min,this._max);this._snapClampSetValue(T)},i=u=>{this._setDraggingStyle(!0),t(u.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=u=>{t(u.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let o=!1,a,c;const l=u=>{u.preventDefault(),this._setDraggingStyle(!0),t(u.touches[0].clientX),o=!1},d=u=>{u.touches.length>1||(this._hasScrollBar?(a=u.touches[0].clientX,c=u.touches[0].clientY,o=!0):l(u),window.addEventListener("touchmove",f),window.addEventListener("touchend",p))},f=u=>{if(o){const h=u.touches[0].clientX-a,T=u.touches[0].clientY-c;Math.abs(h)>Math.abs(T)?l(u):(window.removeEventListener("touchmove",f),window.removeEventListener("touchend",p))}else u.preventDefault(),t(u.touches[0].clientX)},p=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",f),window.removeEventListener("touchend",p)},m=this._callOnFinishChange.bind(this),_=400;let g;const S=u=>{if(Math.abs(u.deltaX)<Math.abs(u.deltaY)&&this._hasScrollBar)return;u.preventDefault();const T=this._normalizeMouseWheel(u)*this._step;this._snapClampSetValue(this.getValue()+T),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(m,_)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",d),this.$slider.addEventListener("wheel",S)}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Bd extends Ct{constructor(e,t,i,r){super(e,t,i,"option");this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(s=>{const o=document.createElement("option");o.innerHTML=s,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class zd extends Ct{constructor(e,t,i){super(e,t,i,"string");this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Gd=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "\u2195";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "\u25BE";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "\u25B8";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "\u2713";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Hd(n){const e=document.createElement("style");e.innerHTML=n;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let ta=!1;class Na{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:r,title:s="Controls",injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),a&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!ta&&o&&(Hd(Gd),ta=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation())}add(e,t,i,r,s){if(Object(i)===i)return new Bd(this,e,t,i);const o=e[t];switch(typeof o){case"number":return new Od(this,e,t,i,r,s);case"boolean":return new Ld(this,e,t);case"string":return new zd(this,e,t);case"function":return new gr(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new Ud(this,e,t,i)}addFolder(e){return new Na({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof gr||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof gr)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}var Ln=function(){var n=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(d){d.preventDefault(),i(++n%e.children.length)},!1);function t(d){return e.appendChild(d.dom),d}function i(d){for(var f=0;f<e.children.length;f++)e.children[f].style.display=f===d?"block":"none";n=d}var r=(performance||Date).now(),s=r,o=0,a=t(new Ln.Panel("FPS","#0ff","#002")),c=t(new Ln.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=t(new Ln.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){r=(performance||Date).now()},end:function(){o++;var d=(performance||Date).now();if(c.update(d-r,200),d>=s+1e3&&(a.update(o*1e3/(d-s),100),s=d,o=0,l)){var f=performance.memory;l.update(f.usedJSHeapSize/1048576,f.jsHeapSizeLimit/1048576)}return d},update:function(){r=this.end()},domElement:e,setMode:i}};Ln.Panel=function(n,e,t){var i=1/0,r=0,s=Math.round,o=s(window.devicePixelRatio||1),a=80*o,c=48*o,l=3*o,d=2*o,f=3*o,p=15*o,m=74*o,_=30*o,g=document.createElement("canvas");g.width=a,g.height=c,g.style.cssText="width:80px;height:48px";var S=g.getContext("2d");return S.font="bold "+9*o+"px Helvetica,Arial,sans-serif",S.textBaseline="top",S.fillStyle=t,S.fillRect(0,0,a,c),S.fillStyle=e,S.fillText(n,l,d),S.fillRect(f,p,m,_),S.fillStyle=t,S.globalAlpha=.9,S.fillRect(f,p,m,_),{dom:g,update:function(u,h){i=Math.min(i,u),r=Math.max(r,u),S.fillStyle=t,S.globalAlpha=1,S.fillRect(0,0,a,p),S.fillStyle=e,S.fillText(s(u)+" "+n+" ("+s(i)+"-"+s(r)+")",l,d),S.drawImage(g,f+o,p,m-o,_,f,p,m-o,_),S.fillRect(f+m-o,p,o,_),S.fillStyle=t,S.globalAlpha=.9,S.fillRect(f+m-o,p,o,s((1-u/h)*_))}}};class Ua extends Oi{constructor(e){super();this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}Ua.prototype.isPointsMaterial=!0;const ia=new ke,Ar=new xa,wn=new In,Tn=new P;class Vd extends at{constructor(e=new zt,t=new Ua){super();this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wn.copy(i.boundingSphere),wn.applyMatrix4(r),wn.radius+=s,e.ray.intersectsSphere(wn)===!1)return;ia.copy(r).invert(),Ar.copy(e.ray).applyMatrix4(ia);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a;if(i.isBufferGeometry){const l=i.index,f=i.attributes.position;if(l!==null){const p=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let _=p,g=m;_<g;_++){const S=l.getX(_);Tn.fromBufferAttribute(f,S),na(Tn,S,c,r,e,t,this)}}else{const p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=p,g=m;_<g;_++)Tn.fromBufferAttribute(f,_),na(Tn,_,c,r,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Vd.prototype.isPoints=!0;function na(n,e,t,i,r,s,o){const a=Ar.distanceSqToPoint(n);if(a<t){const c=new P;Ar.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}export{zt as B,Ce as C,Na as G,at as O,_t as P,Nn as R,Cd as S,P as V,Rd as W,Ln as a,Vd as b,ct as c,Y as d};
