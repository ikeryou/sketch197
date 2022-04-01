import { Func } from '../core/func';
import { Canvas } from '../webgl/canvas';
import { Object3D } from 'three/src/core/Object3D';
import { Conf } from '../core/conf';
import { Util } from '../libs/util';
import { Color } from 'three';
import { Param } from '../core/param';
import { Item } from './item';

export class Con extends Canvas {

  private _con: Object3D;
  private _colors:Array<Color> = [];
  private _val:number = 0;
  private _oldAng:number = -1;
  private _rotCnt:number = 0;
  private _item:Array<Item> = [];

  constructor(opt: any) {
    super(opt);

    this._makeColors()
    Util.instance.shuffle(this._colors)

    this._con = new Object3D()
    this.mainScene.add(this._con)

    // センサー取得
    if(!Conf.instance.FLG_TEST && window.DeviceOrientationEvent) {
      document.querySelector('.l-btn')?.addEventListener('click', () => {
        (window.DeviceOrientationEvent as any).requestPermission().then((r:any) => {
          if(r == 'granted') {
            window.addEventListener('deviceorientation', (e:DeviceOrientationEvent) => {
              if(this._oldAng != -1) {
                this._oldAng = this._val
              } else {
                this._oldAng = Number(e.alpha)
              }
              this._val = Number(e.alpha)

              //Param.instance.debug.innerHTML = 'beta:' + Math.floor(Number(e.beta)) + ' gamma:' + Math.floor(Number(e.gamma))
              Param.instance.debug.innerHTML = 'alpha:' + this._val;
              if((this._oldAng - this._val) > 300) {
                this._rotCnt++
              }
              if((this._oldAng - this._val) < -300) {
                this._rotCnt--
              }
            }, true)
            document.querySelector('.l-btn')?.classList.add('-none')
          }

        })
      })
    } else {
      document.querySelector('.l-btn')?.classList.add('-none')
    }

    for(let i = 0; i < Conf.instance.ITEM_NUM; i++) {
      const item = new Item({
        id:i,
        color:this._colors,
        onLoaded: () => {
          this._eLoaded();
        }
      })
      this._con.add(item)
      this._item.push(item)
    }

    this._resize()
  }


  private _eLoaded(): void {
    let loadedCnt = 0;
    this._item.forEach((val) => {
      if(val.isLoaded) loadedCnt++;
    })

    if(loadedCnt >= this._item.length) {
      this._makeMesh();
    }
  }


  private _makeMesh(): void {
    this._item.forEach((val,i) => {
      const prev = i == 0 ? this._item[this._item.length - 1] : this._item[i - 1]
      const next = i == this._item.length - 1 ? this._item[0] : this._item[i + 1]
      val.makeMesh(prev.sample, next.sample);
    })
  }


  protected _update(): void {
    super._update()
    this._con.position.y = Func.instance.screenOffsetY() * -1

    if(Conf.instance.FLG_TEST) {
      this._oldAng = this._val
      this._val = Param.instance.mesh.ang.value;
      this._val = this._val % 360

      if((this._oldAng - this._val) > 300) {
        this._rotCnt++
      }

      Param.instance.ang = Param.instance.mesh.ang.value;
      Param.instance.debug.innerHTML = String(Param.instance.ang);
    } else {
      Param.instance.ang = this._val + (this._rotCnt * 360);
    }

    if (this.isNowRenderFrame()) {
      this._render()
    }
  }


  private _render(): void {
    // this.renderer.setClearColor(this._colors[this._colors.length - 1], 1)
    this.renderer.setClearColor(0x000000, 1)
    this.renderer.render(this.mainScene, this.camera)
  }


  public isNowRenderFrame(): boolean {
    return this.isRender
  }


  _resize(isRender: boolean = true): void {
    super._resize();

    const w = Func.instance.sw();
    const h = Func.instance.sh();

    if(Conf.instance.IS_SP || Conf.instance.IS_TAB) {
      if(w == this.renderSize.width && this.renderSize.height * 2 > h) {
        return
      }
    }

    this.renderSize.width = w;
    this.renderSize.height = h;

    this.updateCamera(this.camera, w, h);

    let pixelRatio: number = window.devicePixelRatio || 1;

    this.renderer.setPixelRatio(pixelRatio);
    this.renderer.setSize(w, h);
    this.renderer.clear();

    if (isRender) {
      this._render();
    }
  }


  //
  // ------------------------------------
  private _makeColors():void {
    this._colors = []

    const colA = new Color(Util.instance.random(0, 1), Util.instance.random(0, 1), Util.instance.random(0, 1))
    const colB = new Color(Util.instance.random(0, 1), Util.instance.random(0, 1), Util.instance.random(0, 1))
    const colC = new Color(Util.instance.random(0, 1), Util.instance.random(0, 1), Util.instance.random(0, 1))

    for(let i = 0; i < 20; i++) {
        const colD = colA.clone()
        this._colors.push(colD.lerp(colB, Util.instance.random(0, 1)))

        const colE = colB.clone()
        this._colors.push(colE.lerp(colC, Util.instance.random(0, 1)))

        const colF = colC.clone()
        this._colors.push(colF.lerp(colA, Util.instance.random(0, 1)))
    }
  }




}
