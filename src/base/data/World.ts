class World extends egret.EventDispatcher
{
	public constructor() 
	{
		super();
	}

	private unitDic:Object = {};
	public addUnit(unit:Unit):void
	{
		this.unitDic[unit.id] = unit;
		unit.addToWorld (this);

		var event:SceneEvent = new SceneEvent(SceneEvent.UNIT_ADD);
		event.unitid = unit.id;
		this.dispatchEvent(event);
	}

	public removeUnit(unitId:number):Unit
	{
		var unit:Unit = this._removeUnit(unitId);

		var event:SceneEvent = new SceneEvent(SceneEvent.UNIT_REMOVE);
		event.unitid = unit.id;
		this.dispatchEvent(event);

		return unit; 
	}

	private _removeUnit(unitId:number):Unit
	{
		var unit:Unit = this.unitDic[unit.id];
		unit.removeFromWorld();
		delete this.unitDic[unitId];
		return unit; 
	}

	public clear():void
	{
		for(let unitid in this.unitDic)
		{
			this._removeUnit(parseInt(unitid));
		}

		var event:SceneEvent = new SceneEvent(SceneEvent.SCENE_CLEAR);
		this.dispatchEvent(event);
	}

	public print():void
	{

		var unitCount:number = 0;
		var unitStr:string = "";

		for(let unitid in this.unitDic)
		{
			if(this.unitDic[unitid])
			{
				if(unitStr.length > 0)
				{
					unitStr += ", ";
				}
				unitStr += unitid;
			}
		}

		console.log(`unit count:${unitCount}, units:${unitStr}`);
	}
}