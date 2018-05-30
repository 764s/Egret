class SceneTestUI extends View
{
	public constructor() 
	{
		super();
	}

	private bg:egret.Bitmap;
	private btn:eui.Button;
	private panel:eui.Panel;
	protected createChildren():void
	{
		super.createChildren();

		var stage:egret.Stage = egret.MainContext.instance.stage;

		var texture: egret.Texture = RES.getRes("bg_jpg");
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

	}

	private onButtonClick(e:egret.TouchEvent):void
	{
		this.addChild(this.panel);
	}

}