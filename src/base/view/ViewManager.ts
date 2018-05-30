class ViewManager
{
	public constructor()
	{
		for (let i = 0; i < this.viewElementArr.length; i++) {
			let viewElement = this.viewElementArr[i];
			this.viewDic[viewElement.viewId] = viewElement;
		}
	}

	public static readonly ins: ViewManager = new ViewManager();

	private readonly viewDic: { [key: number]: ViewElement } = {};

	private readonly viewElementArr: ViewElement[] = [
		new ViewElement(VIEW_ID.SCENE, VIEW_TYPE.SCENE, Scene, LogicScene)
		, new ViewElement(VIEW_ID.SCENE_TEST_UI, VIEW_TYPE.SCENE, SceneTestUI, LogicSceneTestUI)
	];

	public prompt(msg: string): void
	{
		console.log(`[prompt]:${msg}`);
	}

	public open(viewId: VIEW_ID): void
	{
		var viewElement: ViewElement = this.viewDic[viewId];

		if (!viewElement) {
			this.prompt(`未找到View:${viewId}`);
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
	}

	private openScene(viewElement: ViewElement): void
	{
		this.sceneLayer.addChild(viewElement.view);
	}

	private openWindow(viewElement: ViewElement): void
	{
		this.windowLayer.addChild(viewElement.view);

		this.layoutWindow();
	}

	private layoutWindow(): void
	{

	}

	private openWidget(viewElement: ViewElement): void
	{
		this.widgetLayer.addChild(viewElement.view);
		this.viewElementAdded(viewElement);
	}

	private viewElementAdded(viewElement: ViewElement): void
	{
		viewElement.logic.onRegister();
	}

	public close(viewId: VIEW_ID): void
	{
		var viewElement: ViewElement = this.viewDic[viewId];

		if (!viewElement) {
			this.prompt(`未找到View:${viewId}`);
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
	}

	private closeScene(viewElement: ViewElement): void
	{
		if (!this.sceneLayer.contains(viewElement.view)) {
			return;
		}

		this.sceneLayer.removeChild(viewElement.view);

		this.viewElementRemoved(viewElement);
	}

	private closeWindow(viewElement: ViewElement): void
	{
		if (!this.windowLayer.contains(viewElement.view)) {
			return;
		}

		this.windowLayer.removeChild(viewElement.view);

		this.viewElementRemoved(viewElement);

		this.layoutWindow();
	}

	private closeWidget(viewElement: ViewElement): void
	{
		if (!this.widgetLayer.contains(viewElement.view)) {
			return;
		}

		this.widgetLayer.removeChild(viewElement.view);

		this.viewElementRemoved(viewElement);
	}

	private viewElementRemoved(viewElement: ViewElement): void
	{
		viewElement.logic.onRegister();
	}

	private PREFER_WIDTH: number = 1334;
	private PREFER_HEIGHT: number = 750;
	private PREFER_RATIO: number = this.PREFER_WIDTH / this.PREFER_HEIGHT;
	private MAX_RATIO: number = 3;
	private MIN_RATIO: number = 1;

	private document:egret.DisplayObjectContainer;
	private sceneLayer: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
	private widgetLayer: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
	private windowLayer: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
	private popLayer: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
	private tooltipLayer: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
	public init(document: egret.DisplayObjectContainer): void
	{
		this.document = document;

		this.document.addChild(this.sceneLayer);
		this.document.addChild(this.widgetLayer);
		this.document.addChild(this.windowLayer);
		this.document.addChild(this.popLayer);
		this.document.addChild(this.tooltipLayer);

		this.document.addEventListener(egret.Event.RESIZE, this.onResize, this);
	}

	private onResize(e: egret.Event): void
	{
		
	}
}








