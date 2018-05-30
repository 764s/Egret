var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ViewElement = (function () {
    function ViewElement(viewId, viewType, viewClass, logicClass) {
        this.viewId = viewId;
        this.viewClass = viewClass;
        this.logicClass = logicClass;
        this.viewType = viewType;
    }
    Object.defineProperty(ViewElement.prototype, "view", {
        get: function () {
            if (!this._view) {
                this._view = new this.viewClass();
            }
            return this._view;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewElement.prototype, "logic", {
        get: function () {
            if (!this._logic) {
                this._logic = new this.logicClass();
            }
            return this._logic;
        },
        enumerable: true,
        configurable: true
    });
    return ViewElement;
}());
__reflect(ViewElement.prototype, "ViewElement");
//# sourceMappingURL=ViewElement.js.map