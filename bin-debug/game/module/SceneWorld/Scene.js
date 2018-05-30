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
var Scene = (function (_super) {
    __extends(Scene, _super);
    function Scene() {
        var _this = _super.call(this) || this;
        _this.roleDic = {};
        return _this;
    }
    Scene.prototype.updateBg = function (id) {
    };
    Scene.prototype.createChildren = function () {
        this.bg = new egret.Bitmap(RES.getRes("egret.border_png"));
        this.addChild(this.bg);
    };
    Scene.prototype.addRole = function (role) {
        this.roleDic[role.data.id] = role;
        this.addChild(role);
    };
    Scene.prototype.removeRole = function (id) {
        var role = this.roleDic[id];
        if (role && this.contains(role)) {
            this.removeChild(role);
        }
        delete this.roleDic[id];
        return role;
    };
    Scene.prototype.clear = function () {
        for (var unitid in this.roleDic) {
            var role = this.roleDic[unitid];
            if (this.contains(role)) {
                this.removeChild(role);
            }
        }
        this.roleDic = {};
    };
    Scene.prototype.print = function () {
        var unitCount = 0;
        var unitStr = "";
        for (var unitid in this.roleDic) {
            var role = this.roleDic[unitid];
            if (!role) {
                continue;
            }
            if (role) {
                if (unitStr.length > 0) {
                    unitStr += ", ";
                }
                unitStr += unitid;
            }
        }
        console.log("unit count:" + unitCount + ", units:" + unitStr);
    };
    return Scene;
}(View));
__reflect(Scene.prototype, "Scene");
//# sourceMappingURL=Scene.js.map