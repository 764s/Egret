class GameTicker extends egret.DisplayObject
{
	public static readonly ins:GameTicker = new GameTicker();

	public constructor() 
	{
		super();
	}

	public start():void
	{
		this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
	}

	public stop():void
	{
		this.removeEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
	}

	private onFrame(e:egret.Event):void
	{
		for(let i = 0; i < this.tickableArr.length; i++)
		{
			let tickable:ITickable = this.tickableArr[i];
			tickable.tick();
		}
	}

	private tickableArr:Array<ITickable> = new Array<ITickable>();
	public add(tickable:ITickable):void
	{
		if(this.tickableArr.indexOf(tickable) != -1)
		{
			return;
		}
		this.tickableArr.push(tickable);
	}

	public remove(tickable:ITickable):void
	{
		var index:number = this.tickableArr.indexOf(tickable);
		if(index == -1)
		{
			return;
		}
		this.tickableArr.splice(index, 1)
	}
}

interface ITickable 
{
	tick():void;
}