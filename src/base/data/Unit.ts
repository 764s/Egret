class Unit extends egret.EventDispatcher
 {
	public constructor() 
	{
		super();
	}

	public id:number;

	private world:World;

	public addToWorld(world:World):void
	{
		this.removeFromWorld();
		
		this.world = world;
	}

	public removeFromWorld():void
	{
		if(!this.world)
		{
			return;
		}

		this.world == null;
	}

	public active():void
	{

	}

	public deactive():void
	{

	}

	public stand():void
	{

	}

	public move(path:egret.Point[]):void
	{

	}

	public turn(path:egret.Point):void
	{

	}
}