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
var World = (function (_super) {
    __extends(World, _super);
    function World() {
        var _this = _super.call(this) || this;
        _this.unitDic = {};
        return _this;
    }
    World.prototype.addUnit = function (unit) {
        this.unitDic[unit.id] = unit;
        unit.addToWorld(this);
        var event = new SceneEvent(SceneEvent.UNIT_ADD);
        event.unitid = unit.id;
        this.dispatchEvent(event);
    };
    World.prototype.removeUnit = function (unitId) {
        var unit = this._removeUnit(unitId);
        var event = new SceneEvent(SceneEvent.UNIT_REMOVE);
        event.unitid = unit.id;
        this.dispatchEvent(event);
        return unit;
    };
    World.prototype._removeUnit = function (unitId) {
        var unit = this.unitDic[unit.id];
        unit.removeFromWorld();
        delete this.unitDic[unitId];
        return unit;
    };
    World.prototype.clear = function () {
        for (var unitid in this.unitDic) {
            this._removeUnit(parseInt(unitid));
        }
        var event = new SceneEvent(SceneEvent.SCENE_CLEAR);
        this.dispatchEvent(event);
    };
    World.prototype.print = function () {
        var unitCount = 0;
        var unitStr = "";
        for (var unitid in this.unitDic) {
            if (this.unitDic[unitid]) {
                if (unitStr.length > 0) {
                    unitStr += ", ";
                }
                unitStr += unitid;
            }
        }
        console.log("unit count:" + unitCount + ", units:" + unitStr);
    };
    return World;
}(egret.EventDispatcher));
__reflect(World.prototype, "World");
//# sourceMappingURL=World.js.map