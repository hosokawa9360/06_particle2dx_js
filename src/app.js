var size;
var gameScene = cc.Scene.extend({
  onEnter: function() {
    this._super();
    var layer0 = new fieldLayer();
    var layer1 = new gameLayer();
    var layer2 = new charaLayer();
    var layer3 = new particleLayer();
    this.addChild(layer0);
    this.addChild(layer1);
    this.addChild(layer2);
    this.addChild(layer3);

  }
});

var gameLayer = cc.Layer.extend({
  sprite: null,
  ctor: function() {
    this._super();
    size = cc.winSize;
    this.scheduleUpdate();
    return true;
  },
  update: function(_dt) {
/*
    var particle = new cc.ParticleSystem.create(100);
    //重力をシミュレーションしたパーティクル
    particle.setEmitterMode(cc.ParticleSystem.MODE_GRAVITY);
    //パーティクルの出現場所の分散度（ばらつき具合）。（X方向の幅、ｙ方向の幅））
    particle.setPosVar({
      x: 50,
      y: 100
    });
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
    particle.setPosition(150, size.height / 3);
    //パーティクルの寿命終了時にはレイヤーから削除
    particle.setAutoRemoveOnFinish(true);
    //パーティクルの形と基本の色
    particle.setTexture(cc.Sprite.create(res.HealTexture_png).getTexture());
    this.addChild(particle, 10);
*/
    //プリセットのParticleFireを使ってみる　CPU負荷が大きいぞ！
/*
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
*/
  }

});

var  fieldLayer = cc.Layer.extend({
  ctor: function() {
    this._super();

    var size = cc.director.getWinSize();

    var sprite = cc.Sprite.create(res.ss_BattleScene_bg1);
    sprite.setPosition(size.width / 2, size.height / 2);
    sprite.setScale(0.8);
    this.addChild(sprite, 0);
  }
});

var  charaLayer = cc.Layer.extend({
  ctor: function() {
    this._super();

    var size = cc.director.getWinSize();

    //水キャラクターを追加
    var sprite11 = cc.Sprite.create(res.chara_princessselect_11);
    sprite11.setPosition(size.width *0.25, size.height * 0.4);
    sprite11.setScale(0.8);
    this.addChild(sprite11, 0);

   //火属性のキャラクター
    var sprite10 = cc.Sprite.create(res.chara_princessselect_10);
    sprite10.setPosition(size.width *0.3, size.height *0.3);
    sprite10.setScale(0.8);
    this.addChild(sprite10, 0);

    //木属性キャラクター
    var sprite12 = cc.Sprite.create(res.chara_princessselect_12);
    sprite12.setPosition(size.width *0.15, size.height *0.25);
    sprite12.setScale(0.8);
    this.addChild(sprite12, 0);

    //火属性　敵ｻｺキャラクター
    var sprite1 = cc.Sprite.create(res.chara_enemy_1);
    sprite1.setPosition(size.width *0.65, size.height *0.45);
    sprite1.setScale(1.2);
    this.addChild(sprite1, 0);
    //水属性　敵ｻｺキャラクター
    var sprite2 = cc.Sprite.create(res.chara_enemy_2);
    sprite2.setPosition(size.width *0.70, size.height *0.35);
    sprite2.setScale(1.2);
    this.addChild(sprite2, 0);
    //火属性　敵ｻｺ中ボスキャラクター
    var sprite4 = cc.Sprite.create(res.chara_enemy_4);
    sprite4.setPosition(size.width *0.85, size.height *0.40);
    sprite4.setScale(1.2);
    this.addChild(sprite4, 0);
  }
});

//パーティクル用のレイヤー
var  particleLayer = cc.Layer.extend({
  effectCount:0,
   ctor: function() {
    this._super();
    size = cc.winSize;
    this.scheduleUpdate();
    return true;
  },
  update: function(_dt) {
    //60フレームに1回パーティクルを描画する
    if((this.effectCount % 60)==0){
      //スキルレベル１
      var i = 1;
      //パーティクルの読み込み
       var fireParticle = new cc.ParticleSystem( eval("res.FireTexture" + i + "_plist") );
       fireParticle.setPosition(350,150);
       //fireParticle.setPosition(350,100+(i*100));
       this.addChild(fireParticle,20);
       //パーティクルの寿命が尽きたら、自動的にオブジェクトを削除する
       fireParticle.setAutoRemoveOnFinish(true);
    }
    //フレームをカウントする
    this.effectCount++;
  }

});
