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
var Unit = (function (_super) {
    __extends(Unit, _super);
    function Unit() {
        return _super.call(this) || this;
    }
    Unit.prototype.addToWorld = function (world) {
        this.removeFromWorld();
        this.world = world;
    };
    Unit.prototype.removeFromWorld = function () {
        if (!this.world) {
            return;
        }
        this.world == null;
    };
    Unit.prototype.active = function () {
    };
    Unit.prototype.deactive = function () {
    };
    Unit.prototype.stand = function () {
    };
    Unit.prototype.move = function (path) {
    };
    Unit.prototype.turn = function (path) {
    };
    return Unit;
}(egret.EventDispatcher));
__reflect(Unit.prototype, "Unit");
//# sourceMappingURL=Unit.js.map