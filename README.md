##### 06_particle2dx_js  
[https://hosokawa9360.github.io/06_particle2dx_js/](https://hosokawa9360.github.io/06_particle2dx_js/)

### particle2dx を使ってパーティクルを作成する演習

### その１ 多くのパラメータを実装する
```
//重力をシミュレーションしたパーティクル
particle.setEmitterMode(cc.ParticleSystem.MODE_GRAVITY);
//パーティクルの出現場所の分散度（ばらつき具合）。（X方向の幅、ｙ方向の幅））
particle.setPosVar({x:50,y:100});
//１秒間に放出するパーティクルの数
particle.setEmissionRate(120);
//パーティクルを出力する期間 -1は無限
particle.setDuration(0.2);
//パーティクルが消えるまでの時間
particle.setLife(0.2);
particle.setLifeVar(0.2);
//パーティクル出現時の大きさ
particle.setStartSize(0);
//パーティクル出現時の大きさの分散度
particle.setStartSizeVar(50);
//パーティクル寿命終了時の大きさ
particle.setEndSize(0);
//パーティクル寿命終了時の大きさ
particle.setEndSizeVar(0);
//パーティクルの出力方向
particle.setAngle(90);
//パーティクルの出力方向の分散度
particle.setAngleVar(10);
//パーティクル出現時の色
particle.setStartColor(cc.color(255, 255, 128, 255));
//パーティクル出現時の色の分散度
particle.setStartColorVar(cc.color(5, 5, 5, 0));
//パーティクル寿命終了時の色
particle.setEndColor(cc.color(0, 0, 0, 255));
//パーティクル寿命終了時の色の分散度
particle.setEndColorVar(cc.color(0, 0, 0, 0));
//パーティクルの生成位置
particle.setPosition(150,size.height/2);
//パーティクルの寿命終了時にはレイヤーから削除
particle.setAutoRemoveOnFinish(true);
//パーティクルの形と基本の色
particle.setTexture(cc.Sprite.create(res.HealTexture_png).getTexture() );
```

### その２　背景とキャラクターを表示させる
背景とキャラクターをパーティクルに組み合わせるといい感じになる


### その３　プリセットのParticleFireを使用する
CPU負荷が大きいので観察したら、コメントアウトか消すこと。
```
//プリセットのParticleFireを使ってみる　CPU負荷が大きいぞ！
var fireParticle = new cc.ParticleFire();
fireParticle.setPosition(size.width/2,size.height/4);
this.addChild(fireParticle,20);
//  fireParticle.setTexture(cc.Sprite.create(res.DotTexture_png).getTexture());
//パーティクルの寿命終了時にはレイヤーから削除
fireParticle.setAutoRemoveOnFinish(true);
```

### その4　プリセットのParticleFireに設定を追加する
```
//プリセットのParticleFireを使ってみる　CPU負荷が大きいぞ！
var fireParticle = new cc.ParticleFire();
fireParticle.setPosition(size.width/2,size.height/4);
this.addChild(fireParticle,20);
fireParticle.setTexture(cc.Sprite.create(res.DotTexture_png).getTexture());
//１秒間に放出するパーティクルの数
fireParticle.setEmissionRate(0.3);
//パーティクルの出力方向の分散度
fireParticle.setAngleVar(30);
//パーティクルが消えるまでの時間
fireParticle.setLife(2);
//パーティクルの寿命終了時にはレイヤーから削除
fireParticle.setAutoRemoveOnFinish(true);
```
### その６　Particle2dxの背景用にスクリーンショットを作成する
Particle2dxの背景用に火、水、木属性のキャラクターと
敵キャラクターを配置する。  

配置し終えたら、画面表示させ、スクリーンショットを保存する。(PNG画像)  
Particle2dx用にスクリーンショットを加工。  
Particle2dxで画面サイズを1200×600のサイズにする。  
画面サイズの並びの「background」をクリックすると、背景用のカラーパレットとαブレンドのスライダー、背景用の画像のアップロード領域が表示されます。  
「background DropPNG」と表示された枠内に、上記のスクリーンショットをドラッグ＆ドロップでアップロードして背景に設置する。  

  
### その６　Particle2dxで火属性のパーティクルを作成する

https://github.com/hosokawa9360/06_particle2dx_js/issues/1

https://github.com/hosokawa9360/06_particle2dx_js/#1

Ｍｏｄｅ：Ｇｒａｖｉｔｙ  
* Motion   
    * Angle  0 1  
    * GravityXY 1580 0  
* Color&Shape  
    * Start Size 12 0  
    * End Seze 40 0   
    * Start Red 1 0
    * End Red 1 0
    * Start Green 0.2 0
    * End Green 0.4 0
    * Start Blue 0.2 0.2
    * End Blue 0.8 0   
