var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ViewManager = (function () {
    function ViewManager() {
        this.viewDic = {};
        this.viewElementArr = [
            new ViewElement(VIEW_ID.SCENE, VIEW_TYPE.SCENE, Scene, LogicScene),
            new ViewElement(VIEW_ID.SCENE_TEST_UI, VIEW_TYPE.SCENE, SceneTestUI, LogicSceneTestUI)
        ];
        this.PREFER_WIDTH = 1334;
        this.PREFER_HEIGHT = 750;
        this.PREFER_RATIO = this.PREFER_WIDTH / this.PREFER_HEIGHT;
        this.MAX_RATIO = 3;
        this.MIN_RATIO = 1;
        this.sceneLayer = new egret.DisplayObjectContainer();
        this.widgetLayer = new egret.DisplayObjectContainer();
        this.windowLayer = new egret.DisplayObjectContainer();
        this.popLayer = new egret.DisplayObjectContainer();
        this.tooltipLayer = new egret.DisplayObjectContainer();
        for (var i = 0; i < this.viewElementArr.length; i++) {
            var viewElement = this.viewElementArr[i];
            this.viewDic[viewElement.viewId] = viewElement;
        }
    }
    ViewManager.prototype.prompt = function (msg) {
        console.log("[prompt]:" + msg);
    };
    ViewManager.prototype.open = function (viewId) {
        var viewElement = this.viewDic[viewId];
        if (!viewElement) {
            this.prompt("\u672A\u627E\u5230View:" + viewId);
            return;
        }
        if (viewElement.viewType == VIEW_TYPE.SCENE) {
            this.openScene(viewElement);
        }
        else if (viewElement.viewType == VIEW_TYPE.WINDOW) {
            this.openWindow(viewElement);
        }
        else if (viewElement.viewType == VIEW_TYPE.WIDGET) {
            this.openWidget(viewElement);
        }
    };
    ViewManager.prototype.openScene = function (viewElement) {
        this.sceneLayer.addChild(viewElement.view);
    };
    ViewManager.prototype.openWindow = function (viewElement) {
        this.windowLayer.addChild(viewElement.view);
        this.layoutWindow();
    };
    ViewManager.prototype.layoutWindow = function () {
    };
    ViewManager.prototype.openWidget = function (viewElement) {
        this.widgetLayer.addChild(viewElement.view);
        this.viewElementAdded(viewElement);
    };
    ViewManager.prototype.viewElementAdded = function (viewElement) {
        viewElement.logic.onRegister();
    };
    ViewManager.prototype.close = function (viewId) {
        var viewElement = this.viewDic[viewId];
        if (!viewElement) {
            this.prompt("\u672A\u627E\u5230View:" + viewId);
            return;
        }
        if (viewElement.viewType == VIEW_TYPE.SCENE) {
            this.closeScene(viewElement);
        }
        else if (viewElement.viewType == VIEW_TYPE.WINDOW) {
            this.closeWindow(viewElement);
        }
        else if (viewElement.viewType == VIEW_TYPE.WIDGET) {
            this.closeWidget(viewElement);
        }
    };
    ViewManager.prototype.closeScene = function (viewElement) {
        if (!this.sceneLayer.contains(viewElement.view)) {
            return;
        }
        this.sceneLayer.removeChild(viewElement.view);
        this.viewElementRemoved(viewElement);
    };
    ViewManager.prototype.closeWindow = function (viewElement) {
        if (!this.windowLayer.contains(viewElement.view)) {
            return;
        }
        this.windowLayer.removeChild(viewElement.view);
        this.viewElementRemoved(viewElement);
        this.layoutWindow();
    };
    ViewManager.prototype.closeWidget = function (viewElement) {
        if (!this.widgetLayer.contains(viewElement.view)) {
            return;
        }
        this.widgetLayer.removeChild(viewElement.view);
        this.viewElementRemoved(viewElement);
    };
    ViewManager.prototype.viewElementRemoved = function (viewElement) {
        viewElement.logic.onRegister();
    };
    ViewManager.prototype.init = function (document) {
        this.document = document;
        this.document.addChild(this.sceneLayer);
        this.document.addChild(this.widgetLayer);
        this.document.addChild(this.windowLayer);
        this.document.addChild(this.popLayer);
        this.document.addChild(this.tooltipLayer);
        this.document.addEventListener(egret.Event.RESIZE, this.onResize, this);
    };
    ViewManager.prototype.onResize = function (e) {
    };
    ViewManager.ins = new ViewManager();
    return ViewManager;
}());
__reflect(ViewManager.prototype, "ViewManager");
//# sourceMappingURL=ViewManager.js.map