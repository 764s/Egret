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
var SceneTestUI = (function (_super) {
    __extends(SceneTestUI, _super);
    function SceneTestUI() {
        return _super.call(this) || this;
    }
    SceneTestUI.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        var stage = egret.MainContext.instance.stage;
        var texture = RES.getRes("bg_jpg");
        this.bg = new egret.Bitmap(texture);
        this.addChild(this.bg);
        this.btn = new eui.Button();
        this.addChild(this.btn);
        this.btn.right = 10;
        this.btn.top = 10;
        this.btn.label = "面板";
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        this.panel = new eui.Panel();
        this.panel.horizontalCenter = 0;
        this.panel.verticalCenter = 0;
    };
    SceneTestUI.prototype.onButtonClick = function (e) {
        this.addChild(this.panel);
    };
    return SceneTestUI;
}(View));
__reflect(SceneTestUI.prototype, "SceneTestUI");
//# sourceMappingURL=SceneTestUI.js.map