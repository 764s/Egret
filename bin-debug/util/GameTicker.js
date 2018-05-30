var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameTicker = (function (_super) {
    __extends(GameTicker, _super);
    function GameTicker() {
        var _this = _super.call(this) || this;
        _this.tickableArr = new Array();
        return _this;
    }
    GameTicker.prototype.start = function () {
        this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
    };
    GameTicker.prototype.stop = function () {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
    };
    GameTicker.prototype.onFrame = function (e) {
        for (var i = 0; i < this.tickableArr.length; i++) {
            var tickable = this.tickableArr[i];
            tickable.tick();
        }
    };
    GameTicker.prototype.add = function (tickable) {
        if (this.tickableArr.indexOf(tickable) != -1) {
            return;
        }
        this.tickableArr.push(tickable);
    };
    GameTicker.prototype.remove = function (tickable) {
        var index = this.tickableArr.indexOf(tickable);
        if (index == -1) {
            return;
        }
        this.tickableArr.splice(index, 1);
    };
    GameTicker.ins = new GameTicker();
    return GameTicker;
}(egret.DisplayObject));
__reflect(GameTicker.prototype, "GameTicker");
//# sourceMappingURL=GameTicker.js.map