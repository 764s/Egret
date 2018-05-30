class Resize 
{

	/*
	 * 1.以一个合适的值X缩放stage
	 * 2.重新摆放场景和UI在屏幕中的位置, 使他们都居中, 场景UI位置按照需要按相对值写
	 * 
	 * 合适的值X
	 * 整合场景和UI的必要区域
	 * 缩放后这个必要必须尽可能大的填充屏幕(以stage的横向还是纵向为基准)
	 * 
	 */

	public constructor() 
	{

	}

	public static readonly ins: Resize = new Resize();

	//必要像素, 以SE为准
	private perfectWidth: number = 640;
	private perfectHeight: number = 1136;
	private perfectRatio: number = this.perfectWidth / this.perfectHeight;

	private document:egret.DisplayObjectContainer;

	/**
	 * document: Main
	 */

	public init(document:egret.DisplayObjectContainer): void
	{
		this.document = document;
		egret.MainContext.instance.stage.scaleMode = egret.StageScaleMode.NO_SCALE;
		egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onResize, this);
		this.onResize();
	}

	/**
	 * 1.以宽为基准, 如果高放的下(screenRatio < perfectRatio), 则以这个比例缩放document, 同时强制设置document的高为屏幕高
	 * 否则, 以高为基准缩放
	 * 2.在场景中居中放置document
	 */
	private onResize(e?:egret.Event):void
	{
		var stage: egret.Stage = egret.MainContext.instance.stage;

		var clientWidth:number = stage.stageWidth;
		var clientHeight:number = stage.stageHeight;

		var screenRatio:number = clientWidth / clientHeight;
		if(screenRatio < this.perfectRatio)
		{
			let scale:number = clientWidth / this.perfectWidth;
			this.document.width = clientWidth / scale;
			this.document.height = clientHeight / scale;
			this.document.scaleX = this.document.scaleY = scale;
		}
		else
		{
			let scale:number = clientHeight / this.perfectHeight;
			this.document.height = clientHeight / scale;
			this.document.width = clientWidth / scale;
			this.document.scaleX = this.document.scaleY = scale;
		}
	}

}