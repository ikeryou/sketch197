import meshVt from '../glsl/mesh.vert';
import meshFg from '../glsl/mesh.frag';
import { MyObject3D } from "../webgl/myObject3D";
import { Func } from "../core/func";
import { Param } from '../core/param';
import { Util } from "../libs/util";
import { Conf } from "../core/conf";
import { Vector3 } from "three/src/math/Vector3";
import { Color } from "three/src/math/Color";
import { BufferGeometry } from 'three/src/core/BufferGeometry';
import { BufferAttribute } from 'three/src/core/BufferAttribute';
import { Points } from 'three/src/objects/Points';
import { RawShaderMaterial } from 'three/src/materials/RawShaderMaterial';

export class Item extends MyObject3D {

  private _id:number = 0;
  private _mesh:Points | undefined;
  private _imgSize:number = 0;
  // private _color:Array<Color>;
  // private _nowColor:Color = new Color();

  private _isLoaded:boolean = false;
  get isLoaded():boolean {
    return this._isLoaded;
  }

  private _sample:Array<any> = [];
  get sample():Array<any> {
    return this._sample;
  }


  public onLoaded:any;


  constructor(opt:any) {
    super()

    // this._color = opt.color
    this._id = opt.id;
    this.onLoaded = opt.onLoaded;

    const img:HTMLImageElement = new Image();
    img.src = Conf.instance.PATH_IMG + 'sample-' + this._id +'.png'

    img.onload = () => {
      const cvs:any = document.createElement('canvas');
      const imgSize = img.width;
      cvs.width = cvs.height = imgSize;
      this._imgSize = imgSize;
      const ctx = cvs.getContext('2d');
      ctx.drawImage(img, 0, 0);
      img.style.display = 'none';

      const imageData = ctx.getImageData(0, 0, cvs.width, cvs.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const key = ~~(i / 4)
        const ix = ~~(key % cvs.width)
        const iy = ~~(key / cvs.width)
        // const r = data[i + 0] // 0 ~ 255
        // const g = data[i + 1] // 0 ~ 255
        // const b = data[i + 2] // 0 ~ 255
        const a = data[i + 3] // 0 ~ 255

        const kake = 1
        if(a > 0) {
          this._sample.push({
            pos:new Vector3(
              (ix - imgSize * 0.5) * kake,
              ((iy - imgSize * 0.5) * -1) * kake,
              0
            )
          })
        }

      }
      console.log(this._sample.length);
      this._isLoaded = true;
      this._call(this.onLoaded);
      // this._makeMesh();
    }
  }


  public makeMesh(prevSample:Array<any>, nextSample:Array<any>): void {
    this._mesh = new Points(
      this.getGeo(prevSample, nextSample),
      new RawShaderMaterial({
          vertexShader:meshVt,
          fragmentShader:meshFg,
          transparent:true,
          depthTest:false,
          uniforms:{
              alpha:{value:0},
              size:{value:2},
              time:{value:0},
              yure:{value:0},
              show:{value:0},
              hide:{value:0},
              color:{value:new Color()},
          }
      })
    )
    this.add(this._mesh)
  }


  // ---------------------------------
  //
  // ---------------------------------
  public getGeo(prevSample:Array<any>, nextSample:Array<any>):BufferGeometry {
    const num = this._sample.length

    const geometry = new BufferGeometry()

    const translate = new Float32Array(num * 3)
    const prevTranslate = new Float32Array(num * 3)
    const nextTranslate = new Float32Array(num * 3)
    const info = new Float32Array(num * 3)

    let pKey = 0
    let i = 0
    while(i < num) {
        const p = this._sample[i].pos

        // const prevP = prevSample[i % prevSample.length].pos
        // const nextP = nextSample[i % nextSample.length].pos
        const prevP = Util.instance.randomArr(prevSample).pos
        const nextP = Util.instance.randomArr(nextSample).pos

        translate[pKey*3+0] = p.x
        translate[pKey*3+1] = p.y
        translate[pKey*3+2] = 0

        prevTranslate[pKey*3+0] = prevP.x
        prevTranslate[pKey*3+1] = prevP.y
        prevTranslate[pKey*3+2] = 0

        nextTranslate[pKey*3+0] = nextP.x
        nextTranslate[pKey*3+1] = nextP.y
        nextTranslate[pKey*3+2] = 0

        const dx = p.x
        const dy = p.y

        info[pKey*3+0] = Util.instance.map(i, 0, 1, 0, num - 1)
        info[pKey*3+1] = Math.sqrt(dx * dx + dy * dy)
        info[pKey*3+2] = Util.instance.range(1)

        pKey++
        i++
    }

    geometry.setAttribute('position', new BufferAttribute(translate, 3))
    geometry.setAttribute('prevPosition', new BufferAttribute(prevTranslate, 3))
    geometry.setAttribute('nextPosition', new BufferAttribute(nextTranslate, 3))
    geometry.setAttribute('info', new BufferAttribute(info, 3))
    geometry.computeBoundingSphere()

    return geometry
  }


  // ---------------------------------
  // 更新
  // ---------------------------------
  protected _update():void {
    super._update()

    if(this._mesh != undefined) {
      const sw = Func.instance.sw()
      const sh = Func.instance.sh()
      const s = Func.instance.r((Math.min(sw, sh) / this._imgSize) * 2.5)
      this._mesh.scale.set(s, s, 1)

      const ang = Param.instance.ang;
      const one = 360;
      const d = one / Conf.instance.ITEM_NUM;
      const offset = 0.05
      const rate = Util.instance.map(ang, 0, 1, Math.max(0, this._id * d - d * 0.25), this._id * d + d);

      // 正面を向くように調整
      this.rotation.z = Util.instance.radian(d * this._id + d) * -1;

      const show = Util.instance.map(rate, 0, 1, 0, 0.5 - offset)
      const hide = Util.instance.map(rate, 0, 1, 0.5 + offset, 1)
      let yure = (1 - show) + (hide)
      if(show > 0.9 && hide <= 0) {
        yure = 0
      } else {
        yure = (1 - show) + (hide)
      }

      // const colA = this._id == 0 ? this._color[Conf.instance.ITEM_NUM - 1] : this._color[this._id - 1]
      // const colB = this._id == Conf.instance.ITEM_NUM - 1 ? this._color[0] : this._color[this._id + 1]
      // this._nowColor.lerp(colA, 1 - show)
      // this._nowColor.lerp(colB, 1 - hide)

      this._setUni(this._mesh, 'yure', yure)
      this._setUni(this._mesh, 'size', 3)
      this._setUni(this._mesh, 'time', this._c)
      this._setUni(this._mesh, 'show', show)
      this._setUni(this._mesh, 'hide', hide)
      this._setUni(this._mesh, 'color', new Color(0xffffff))
    }
  }
}