var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Resize = (function () {
    /*
     * 1.以一个合适的值X缩放stage
     * 2.重新摆放场景和UI在屏幕中的位置, 使他们都居中, 场景UI位置按照需要按相对值写
     *
     * 合适的值X
     * 整合场景和UI的必要区域
     * 缩放后这个必要必须尽可能大的填充屏幕(以stage的横向还是纵向为基准)
     *
     */
    function Resize() {
        //必要像素, 以SE为准
        this.perfectWidth = 640;
        this.perfectHeight = 1136;
        this.perfectRatio = this.perfectWidth / this.perfectHeight;
    }
    /**
     * document: Main
     */
    Resize.prototype.init = function (document) {
        this.document = document;
        egret.MainContext.instance.stage.scaleMode = egret.StageScaleMode.NO_SCALE;
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onResize, this);
        this.onResize();
    };
    /**
     * 1.以宽为基准, 如果高放的下(screenRatio < perfectRatio), 则以这个比例缩放document, 同时强制设置document的高为屏幕高
     * 否则, 以高为基准缩放
     * 2.在场景中居中放置document
     */
    Resize.prototype.onResize = function (e) {
        var stage = egret.MainContext.instance.stage;
        var clientWidth = stage.stageWidth;
        var clientHeight = stage.stageHeight;
        var screenRatio = clientWidth / clientHeight;
        if (screenRatio < this.perfectRatio) {
            var scale = clientWidth / this.perfectWidth;
            this.document.width = clientWidth / scale;
            this.document.height = clientHeight / scale;
            this.document.scaleX = this.document.scaleY = scale;
        }
        else {
            var scale = clientHeight / this.perfectHeight;
            this.document.height = clientHeight / scale;
            this.document.width = clientWidth / scale;
            this.document.scaleX = this.document.scaleY = scale;
        }
    };
    Resize.ins = new Resize();
    return Resize;
}());
__reflect(Resize.prototype, "Resize");
//# sourceMappingURL=Resize.js.map